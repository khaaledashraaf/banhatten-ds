"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { Link } from "next-view-transitions";
import {
  Alert,
  AvatarGroup,
  AvatarProfile,
  Badge,
  Button,
  CloseButton,
  FeaturedIcon,
  Icon,
  Input,
  ProgressBar,
  Slider,
  Tag,
  Toggle,
} from "@banhatten/ui";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Delay before entrance animations start (after loading screen has vanished). */
const ENTRANCE_BASE_DELAY_MS = 400;

const ALERT_STREAM_INTERVAL_MS = 4000;
const ALERT_STREAM_MAX_VISIBLE = 2;
const ALERT_EXIT_DURATION_MS = 300;
/** Height of one alert slot for stack positioning. */
const ALERT_SLOT_HEIGHT_PX = 70;
/** Gap between alerts (matches token spacing.sm / gap-sm: 0.5rem). */
const ALERT_GAP_SM_PX = 8;

const ALERT_STREAM_MESSAGES: Array<{ type: "success" | "info" | "warning"; title: string; description: string }> = [
  { type: "success", title: "Created Successfully", description: "Your post is up and can be seen in the homepage." },
  { type: "info", title: "Update Available", description: "A new version of the app is ready to install." },
  { type: "success", title: "Saved", description: "Your changes have been saved." },
  { type: "warning", title: "Almost there", description: "Complete your profile to unlock all features." },
];

/** Token hex values for the landing gradient (white center → light blue edges) */
const gradientColors = {
  center: "#ffffff", // neutral-25
  mid: "#eff6ff", // primary-50
  edge: "#dbeafe", // primary-100
};

/**
 * Position, translate, and rotation for each floating card. Customize x/y (left or right, top or bottom),
 * translateX/translateY, and rotation (degrees) in one place.
 */
const FLOATING_CARD_POSITIONS: Record<
  string,
  {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    translateX?: string;
    translateY?: string;
    /** Rotation in degrees (e.g. -5 to 5 for a slight tilt). */
    rotation?: number;
    width?: string;
    height?: string;
  }
> = {
  iconButtons: { left: "5%", top: "5%", translateX: "0", translateY: "0", rotation: 0 },
  slider: { left: "5%", top: "18%", translateX: "0", translateY: "0", rotation: -1 },
  avatarGroupTop: { left: "5%", top: "35%", translateX: "0", translateY: "0", rotation: -2 },
  badges: { left: "90%", top: "5%", translateX: "-100%", translateY: "0", rotation: 5 },
  stats: { left: "90%", top: "20%", translateX: "-100%", translateY: "0", rotation: 8 },
  alertTop: { left: "50%", top: "10%", translateX: "-50%", translateY: "0", rotation: 0 },
  upload: { left: "5%", top: "50%", translateX: "0", translateY: "0", rotation: 2 },
  fileIcons: { left: "95%", top: "40%", translateX: "-100%", translateY: "0", rotation: -2 },
  toggle: { left: "35%", bottom: "15%", translateX: "-50%", translateY: "0", rotation: 0, width: "fit-content" },
  avatarsIcons: { left: "60%", bottom: "15%", translateX: "0", translateY: "0", rotation: 0, width: "fit-content" },
  creditCardInput: { left: "50%", bottom: "15%", translateX: "-50%", translateY: "0", rotation: 0, width: "fit-content" },
  profile: { left: "90%", bottom: "20%", translateX: "-100%", translateY: "0", rotation: -3 },
};

function cardStyle(key: keyof typeof FLOATING_CARD_POSITIONS): CSSProperties {
  const p = FLOATING_CARD_POSITIONS[key];
  const tx = p.translateX ?? "0";
  const ty = p.translateY ?? "0";
  const translate = ty !== "0" ? `translate(${tx}, ${ty})` : `translateX(${tx})`;
  const rotation = p.rotation ?? 0;
  return {
    left: p.left,
    right: p.right,
    top: p.top,
    bottom: p.bottom,
    transform: `${translate} rotate(${rotation}deg)`,
    ...(p.width != null && { width: p.width }),
    ...(p.height != null && { height: p.height }),
  };
}

function LoadingScreen({
  exiting,
  gradientColors,
}: {
  exiting: boolean;
  gradientColors: { center: string; mid: string; edge: string };
}) {
  return (
    <div
      className={`loading-screen fixed inset-0 z-50 flex items-center justify-center ${exiting ? "loading-screen--exiting" : ""}`}
      style={{
        background: `radial-gradient(ellipse 90% 90% at 50% 50%, ${gradientColors.center} 0%, ${gradientColors.mid} 50%, ${gradientColors.edge} 100%)`,
      }}
      aria-hidden={exiting}
      aria-busy={!exiting}
    >
      <img
        src={`${basePath}/logo-full.svg`}
        alt=""
        className="h-8 w-auto object-contain opacity-90"
      />
    </div>
  );
}

type StreamAlert = {
  id: number;
  type: "success" | "info" | "warning";
  title: string;
  description: string;
  exiting?: boolean;
};

export default function LandingPage() {
  const [ready, setReady] = useState(false);
  const [loaderExiting, setLoaderExiting] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);
  const [streamAlerts, setStreamAlerts] = useState<StreamAlert[]>([]);
  const alertIdRef = useRef(0);
  const streamIndexRef = useRef(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const finish = () => {
      setReady(true);
      setLoaderExiting(true);
    };
    const runAfterLoad = () => {
      timeoutId = setTimeout(finish, 1000);
    };
    if (typeof document === "undefined") return;
    if (document.readyState === "complete") {
      runAfterLoad();
    } else {
      window.addEventListener("load", runAfterLoad);
    }
    return () => {
      window.removeEventListener("load", runAfterLoad);
      if (timeoutId != null) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!loaderExiting) return;
    const t = setTimeout(() => setLoaderGone(true), 300);
    return () => clearTimeout(t);
  }, [loaderExiting]);

  useEffect(() => {
    if (!ready) return;
    const tick = () => {
      const msg = ALERT_STREAM_MESSAGES[streamIndexRef.current % ALERT_STREAM_MESSAGES.length];
      streamIndexRef.current += 1;
      const id = alertIdRef.current++;
      setStreamAlerts((prev) => {
        const next = [...prev, { ...msg, id }];
        if (next.length > ALERT_STREAM_MAX_VISIBLE) {
          const toExit = next[0];
          return next.map((a) => (a.id === toExit.id ? { ...a, exiting: true } : a));
        }
        return next;
      });
    };
    const id = setInterval(tick, ALERT_STREAM_INTERVAL_MS);
    return () => clearInterval(id);
  }, [ready]);

  useEffect(() => {
    if (streamAlerts.length === 0) return;
    const exiting = streamAlerts.find((a) => a.exiting);
    if (!exiting) return;
    const t = setTimeout(() => {
      setStreamAlerts((prev) => prev.filter((a) => a.id !== exiting.id));
    }, ALERT_EXIT_DURATION_MS);
    return () => clearTimeout(t);
  }, [streamAlerts]);

  return (
    <div className="landing-gradient-bg relative min-h-screen overflow-hidden">
      {!loaderGone && (
        <LoadingScreen
          exiting={loaderExiting}
          gradientColors={gradientColors}
        />
      )}
      <div
        className="contents"
        style={{ visibility: ready ? "visible" : "hidden" }}
      >
        {/* Central hero — z-10 so peeking cards (z-20) stay on top and clickable */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <div className={`mb-6 flex items-center justify-center gap-2 ${ready ? "animate-fade-in" : ""}`} style={ready ? { animationDelay: `${ENTRANCE_BASE_DELAY_MS}ms` } : undefined}>
          <img
            src={`${basePath}/logo-full.svg`}
            alt="Banhatten Design System"
            className="h-8 w-auto object-contain"
          />
          <Badge variant="light" color="info" size="sm">
            V2.5
          </Badge>
        </div>
        <h1
          className={`text-primary text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl ${ready ? "animate-fade-in" : ""}`}
          style={ready ? { animationDelay: `${80 + ENTRANCE_BASE_DELAY_MS}ms` } : undefined}
        >
          Welcome to the official documentation of<br />Banhaten Design System
        </h1>
        <div className={`mt-8 flex flex-col items-center gap-3 ${ready ? "animate-fade-in" : ""}`} style={ready ? { animationDelay: `${160 + ENTRANCE_BASE_DELAY_MS}ms` } : undefined}>
          <Button asChild variant="primary" size="lg" rightIcon="arrow_forward">
            <Link href="/docs">Open Documentation</Link>
          </Button>
          <Button asChild variant="link-brand" size="xs" rightIcon="open_in_new" className="inline-flex items-center gap-2">
            <a
              href="https://github.com/khaaledashraaf/banhatten-ds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Go to Github Repo
            </a>
          </Button>
        </div>
      </section>

      {/* Floating showcase — each card in its own div, positioned closer to center (z-20 = on top, interactive) */}
      {/* Top-left: icon buttons */}
      <div
        className={`absolute z-20 flex w-auto rounded-lg border border-strong bg-primary px-4 py-4 shadow-md ${ready ? "animate-fade-in" : ""}`}
        style={{ ...cardStyle("iconButtons"), ...(ready && { animationDelay: `${220 + ENTRANCE_BASE_DELAY_MS}ms` }) }}
      >
        <div className="flex gap-1">
          <Button variant="secondary" size="md" icon="favorite" aria-label="Favorite" />
          <Button variant="secondary" size="md" icon="add" aria-label="Add" />
          <Button variant="secondary" size="md" icon="star" aria-label="Star" />
        </div>
      </div>

      {/* Top-left: slider */}
      <div
        className={`absolute z-20 w-[200px] rounded-lg border border-strong bg-primary px-4 py-4 shadow-md ${ready ? "animate-fade-in" : ""}`}
        style={{ ...cardStyle("slider"), ...(ready && { animationDelay: `${260 + ENTRANCE_BASE_DELAY_MS}ms` }) }}
      >
        <div className="text-secondary mb-1 flex justify-between text-xs">
          <span>50%</span>
          <span>100%</span>
        </div>
        <Slider
          variant="single"
          defaultValue={75}
          min={50}
          max={100}
          formatValue={(v) => `${v}%`}
          aria-label="Value"
        />
      </div>

      {/* Top-left: avatar group */}
      <div
        className={`absolute z-20 rounded-lg border border-strong bg-primary px-4 py-4 shadow-md ${ready ? "animate-fade-in" : ""}`}
        style={{ ...cardStyle("avatarGroupTop"), ...(ready && { animationDelay: `${300 + ENTRANCE_BASE_DELAY_MS}ms` }) }}
      >
        <AvatarGroup
          size="32"
          avatars={[
            { initials: "A", "aria-label": "User A" },
            { initials: "B", "aria-label": "User B" },
            { initials: "C", "aria-label": "User C" },
            { initials: "D", "aria-label": "User D" },
            { initials: "E", "aria-label": "User E" },
            { initials: "F", "aria-label": "User F" },
          ]}
        />
      </div>

      {/* Top-right: badges/tags */}
      <div
        className={`absolute z-20 w-[220px] rounded-lg border border-strong bg-primary px-4 py-3 shadow-md ${ready ? "animate-fade-in" : ""}`}
        style={{ ...cardStyle("badges"), ...(ready && { animationDelay: `${240 + ENTRANCE_BASE_DELAY_MS}ms` }) }}
      >
        <div className="flex flex-wrap gap-1">
          <Badge variant="light" color="warning" size="sm">
            Warning
          </Badge>
          <Badge variant="light" color="info" size="sm">
            In progress
          </Badge>
          <Badge variant="light" color="success" size="sm">
            Success
          </Badge>
          <Badge variant="light" color="danger" size="sm">
            Error
          </Badge>
          <Tag type="with-dot" state="default" size="small">
            Pink
          </Tag>
          <Tag type="with-dot" state="active" size="small">
            Reward
          </Tag>
        </div>
      </div>

      {/* Top-right: stats card */}
      <div
        className={`absolute z-20 w-[200px] rounded-lg border border-strong bg-primary px-4 py-3 shadow-md ${ready ? "animate-fade-in" : ""}`}
        style={{ ...cardStyle("stats"), ...(ready && { animationDelay: `${280 + ENTRANCE_BASE_DELAY_MS}ms` }) }}
      >
        <p className="text-secondary text-xs">Total sessions</p>
        <p className="text-primary text-2xl font-bold">344</p>
        <p className="text-secondary text-xs">2 visitors right now</p>
        <div className="mt-2 flex items-end gap-1">
          <ProgressBar value={60} size="lg" color="brand" className="min-w-0 flex-1" />
        </div>
      </div>

      {/* Top-center: streaming alerts — fixed slots; new at bottom, older shift up, top fades out */}
      <div
        className={`absolute z-20 w-full max-w-[400px] ${ready ? "animate-fade-in" : ""}`}
        style={{
          ...cardStyle("alertTop"),
          height: ALERT_SLOT_HEIGHT_PX * 2 + ALERT_GAP_SM_PX,
          ...(ready && { animationDelay: `${200 + ENTRANCE_BASE_DELAY_MS}ms` }),
        }}
        aria-live="polite"
        aria-atomic="false"
      >
        {streamAlerts.map((item, index) => {
          const n = streamAlerts.length;
          const slot = ALERT_SLOT_HEIGHT_PX;
          const gap = ALERT_GAP_SM_PX;
          const step = slot + gap;
          let topPx: number;
          let opacity = 1;
          if (item.exiting) {
            topPx = -step;
            opacity = 0;
          } else if (n === 1) {
            topPx = step;
          } else if (n === 2) {
            topPx = index === 0 ? 0 : step;
          } else {
            topPx = index === 0 ? -step : index === 1 ? 0 : step;
          }
          const isNewest = index === n - 1 && !item.exiting;
          return (
            <div
              key={item.id}
              className={`absolute left-0 right-0 rounded-lg ${item.exiting ? "alert-slot-exit" : "alert-slot-item"} ${isNewest ? "animate-alert-slot-in" : ""}`}
              style={{ top: topPx, opacity }}
            >
              <Alert
                type={item.type}
                emphasis="medium"
                expand
                title={item.title}
                description={item.description}
              />
            </div>
          );
        })}
      </div>

      {/* Bottom-left: upload card */}
      <div
        className={`absolute z-20 w-[220px] rounded-lg border border-strong bg-primary p-4 shadow-md ${ready ? "animate-fade-in" : ""}`}
        style={{ ...cardStyle("upload"), ...(ready && { animationDelay: `${340 + ENTRANCE_BASE_DELAY_MS}ms` }) }}
      >
        <p className="text-primary text-sm font-medium">Upload file</p>
        <p className="text-secondary text-xs">Upload from your computer.</p>
        <Button variant="secondary" size="md" className="mt-3 w-full justify-center">
          Upload
        </Button>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between gap-2 text-sm">
            <span className="text-primary truncate">Contract.pdf - 50 KB</span>
            <CloseButton variant="ghost" size="sm" aria-label="Remove file" />
          </div>
          <div className="flex items-center justify-between gap-2 text-sm">
            <span className="text-primary truncate">Rent agreement.docx - 50 KB</span>
            <Button variant="tertiary" size="xs" icon="pause" aria-label="Pause" />
          </div>
        </div>
      </div>

      {/* Bottom-center: toggle */}
      <div
        className={`absolute z-20 w-[280px] rounded-lg border border-strong bg-primary px-4 py-3 shadow-md ${ready ? "animate-fade-in" : ""}`}
        style={{ ...cardStyle("toggle"), ...(ready && { animationDelay: `${380 + ENTRANCE_BASE_DELAY_MS}ms` }) }}
      >
        <Toggle defaultChecked label="Label" size="md" />
      </div>

      {/* Bottom-center: file type icons */}
      <div
        className={`absolute z-20 rounded-lg border border-strong bg-primary px-4 py-3 shadow-md ${ready ? "animate-fade-in" : ""}`}
        style={{ ...cardStyle("fileIcons"), ...(ready && { animationDelay: `${320 + ENTRANCE_BASE_DELAY_MS}ms` }) }}
      >
        <div className="flex justify-center gap-2">
          <FeaturedIcon variant="square-light" type="danger" size="md" name="picture_as_pdf" />
          <FeaturedIcon variant="square-light" type="brand" size="md" name="description" />
          <FeaturedIcon variant="square-light" type="warning" size="md" name="image" />
          <FeaturedIcon variant="square-light" type="success" size="md" name="table_chart" />
        </div>
      </div>

      {/* Bottom-center: avatars + icons */}
      <div
        className={`absolute z-20 rounded-lg border border-strong bg-primary px-4 py-3 shadow-md ${ready ? "animate-fade-in" : ""}`}
        style={{ ...cardStyle("avatarsIcons"), ...(ready && { animationDelay: `${420 + ENTRANCE_BASE_DELAY_MS}ms` }) }}
      >
        <div className="flex items-center gap-2">
          <AvatarGroup
            size="24"
            avatars={[
              { initials: "J", "aria-label": "User 1" },
              { initials: "K", "aria-label": "User 2" },
              { initials: "L", "aria-label": "User 3" },
            ]}
          />
          <Icon name="rocket_launch" size="sm" className="text-secondary" aria-hidden />
          <Icon name="check_circle" size="sm" className="text-success" aria-hidden />
        </div>
      </div>

      {/* Bottom-center: credit card input */}
      <div
        className={`absolute z-20 w-[280px] rounded-lg border border-strong bg-primary p-3 shadow-md ${ready ? "animate-fade-in" : ""}`}
        style={{ ...cardStyle("creditCardInput"), ...(ready && { animationDelay: `${460 + ENTRANCE_BASE_DELAY_MS}ms` }) }}
      >
        <Input
          leftIcon="credit_card"
          rightIcon="info"
          placeholder="3718-125069-77403"
          aria-label="Card number"
        />
      </div>

      {/* Bottom-right: profile card */}
      <div
        className={`absolute z-20 w-[200px] rounded-lg border border-strong bg-primary p-4 shadow-md ${ready ? "animate-fade-in" : ""}`}
        style={{ ...cardStyle("profile"), ...(ready && { animationDelay: `${500 + ENTRANCE_BASE_DELAY_MS}ms` }) }}
      >
        <div className="flex flex-col items-center text-center">
          <AvatarProfile
            size="xl"
            initials="JJ"
            aria-label="Jacob Jones"
            className="mb-3"
          />
          <p className="text-primary font-semibold">Jacob Jones</p>
          <p className="text-secondary text-sm">useraccount@gmail.com</p>
          <p className="text-primary mt-2 text-xl font-bold">$9,453,50</p>
          <p className="text-secondary text-xs">24 May, 2050, 10:23 AM</p>
        </div>
      </div>
      </div>
    </div>
  );
}
