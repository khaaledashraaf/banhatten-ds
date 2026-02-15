"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Alert,
  AvatarGroup,
  AvatarProfile,
  Badge,
  Button,
  ButtonGroup,
  ButtonGroupItem,
  Checkbox,
  CheckboxCard,
  Divider,
  FeaturedIcon,
  Icon,
  Input,
  Menu,
  MenuGroup,
  MenuHeading,
  MenuItem,
  ProgressBar,
  Radio,
  RadioCard,
  Tag,
  TextArea,
  Toggle,
  Tooltip,
  TooltipProvider,
} from "@banhatten/ui";

const TEAM_AVATARS = [
  { initials: "JK", "aria-label": "Jane Kim" },
  { initials: "AL", "aria-label": "Alex Lee" },
  { initials: "SP", "aria-label": "Sam Park" },
  { initials: "MR", "aria-label": "Morgan Reed" },
  { initials: "TC", "aria-label": "Taylor Chen" },
];

export function SampleProfilePage() {
  const [profileView, setProfileView] = useState<"overview" | "activity" | "settings">("overview");
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(true);
  const [displayName, setDisplayName] = useState("Jordan Blake");
  const [headline, setHeadline] = useState("Design Systems Lead · Banhatten");
  const [bio, setBio] = useState(
    "Building scalable design systems and component libraries. Passionate about accessibility, tokens, and developer experience."
  );
  const [emailPublic, setEmailPublic] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [contactPref, setContactPref] = useState<"email" | "slack" | "both">("email");
  const [notifyMentions, setNotifyMentions] = useState(true);
  const [profileCompleteness] = useState(85);
  const [skills, setSkills] = useState(["React", "TypeScript", "Design Systems", "Figma", "Accessibility"]);

  const removeSkill = (skill: string) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  return (
    <div className="min-h-screen bg-primary">
      <TooltipProvider delayDuration={200}>
        <div className="px-6 py-8 md:px-10">
          {/* Dismissible welcome alert */}
          {showWelcomeAlert && (
            <Alert
              type="success"
              emphasis="medium"
              title="Profile updated"
              description="Your changes were saved. Your profile is now 85% complete."
              expand={false}
              onClose={() => setShowWelcomeAlert(false)}
              className="mb-8"
            />
          )}

          {/* Page header */}
          <header className="border-default mb-8 flex flex-col gap-4 border-b pb-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              <AvatarProfile
                size="2xl"
                initials="JB"
                aria-label="Jordan Blake"
                topRight={
                  <Tooltip content="Edit profile photo" side="bottom" size="small">
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-subtract bg-brand text-on-color shadow-sm hover:opacity-90"
                      aria-label="Edit profile photo"
                    >
                      <Icon name="edit" size="sm" filled />
                    </button>
                  </Tooltip>
                }
                bottomRight={
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-subtract bg-success text-on-color" aria-hidden>
                    <Icon name="check_circle" size="sm" filled />
                  </span>
                }
              />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-primary text-2xl font-bold tracking-tight md:text-3xl">
                    {displayName}
                  </h1>
                  <Badge variant="light" color="brand" size="sm">
                    Pro
                  </Badge>
                  <Badge variant="outlined" color="success" size="sm">
                    Verified
                  </Badge>
                </div>
                <p className="text-secondary mt-1 text-sm">{headline}</p>
                <p className="text-secondary mt-2 text-sm">{bio}</p>
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2">
              <Button variant="secondary" size="md" leftIcon="edit">
                Edit profile
              </Button>
              <Button variant="primary" size="md">
                Share profile
              </Button>
            </div>
          </header>

          {/* View toggle */}
          <div className="mb-8">
            <ButtonGroup aria-label="Profile view">
              <ButtonGroupItem
                leftIcon="person"
                selected={profileView === "overview"}
                onClick={() => setProfileView("overview")}
              >
                Overview
              </ButtonGroupItem>
              <ButtonGroupItem
                leftIcon="history"
                selected={profileView === "activity"}
                onClick={() => setProfileView("activity")}
              >
                Activity
              </ButtonGroupItem>
              <ButtonGroupItem
                leftIcon="settings"
                selected={profileView === "settings"}
                onClick={() => setProfileView("settings")}
              >
                Settings
              </ButtonGroupItem>
            </ButtonGroup>
          </div>

          <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
            {/* Sidebar: quick links menu */}
            <aside className="space-y-6">
              <div className="rounded-sm border border-default bg-primary shadow-sm">
                <Menu>
                  <MenuGroup
                    heading={<MenuHeading>Quick links</MenuHeading>}
                    headingId="quick-links-heading"
                  >
                    <MenuItem leftIcon="link" onClick={() => {}}>
                      Public profile
                    </MenuItem>
                    <MenuItem leftIcon="groups" onClick={() => {}}>
                      Team
                    </MenuItem>
                    <MenuItem leftIcon="notifications" onClick={() => {}}>
                      Notifications
                    </MenuItem>
                    <MenuItem leftIcon="lock" onClick={() => {}}>
                      Privacy
                    </MenuItem>
                  </MenuGroup>
                </Menu>
              </div>

              {/* Team avatars */}
              <section className="rounded-lg border border-default bg-primary p-4 shadow-sm">
                <h2 className="text-primary mb-3 text-sm font-semibold">Team</h2>
                <AvatarGroup
                  size="40"
                  avatars={TEAM_AVATARS}
                  moreAvatars
                  maxVisible={3}
                  addMore
                  onAddMore={() => {}}
                  aria-label="Team members"
                />
              </section>
            </aside>

            {/* Main content */}
            <main className="min-w-0 space-y-8">
              {/* Profile completeness */}
              <section className="rounded-lg border border-default bg-primary p-6 shadow-sm">
                <h2 className="text-primary mb-4 text-lg font-semibold">Profile strength</h2>
                <ProgressBar
                  value={profileCompleteness}
                  size="lg"
                  color="brand"
                  label="Completion"
                  showValue
                  helperText="Add a profile photo and skills to reach 100%."
                  showLabelInfoIcon
                  onRefresh={() => {}}
                />
              </section>

              <Divider orientation="horizontal" />

              {/* Stats row with FeaturedIcons */}
              <section className="rounded-lg border border-default bg-primary p-6 shadow-sm">
                <h2 className="text-primary mb-4 text-lg font-semibold">Activity</h2>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <FeaturedIcon
                      variant="circle-light"
                      type="brand"
                      size="md"
                      name="folder"
                      label="Projects"
                    />
                    <div>
                      <p className="text-primary text-sm font-medium">24</p>
                      <p className="text-secondary text-xs">Projects</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FeaturedIcon
                      variant="circle-light"
                      type="success"
                      size="md"
                      name="groups"
                      label="Connections"
                    />
                    <div>
                      <p className="text-primary text-sm font-medium">128</p>
                      <p className="text-secondary text-xs">Connections</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FeaturedIcon
                      variant="circle-light"
                      type="neutral"
                      size="md"
                      name="visibility"
                      label="Profile views"
                    />
                    <div>
                      <p className="text-primary text-sm font-medium">1.2k</p>
                      <p className="text-secondary text-xs">Views this month</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* About / form section */}
              <section className="rounded-lg border border-default bg-primary p-6 shadow-sm">
                <h2 className="text-primary mb-4 text-lg font-semibold">About</h2>
                <div className="space-y-4">
                  <Input
                    label="Display name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Your name"
                  />
                  <Input
                    label="Headline"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    placeholder="Role · Company"
                  />
                  <TextArea
                    label="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell us about yourself"
                    rows={4}
                    maxLength={500}
                  />
                </div>
              </section>

              {/* Skills as tags */}
              <section className="rounded-lg border border-default bg-primary p-6 shadow-sm">
                <h2 className="text-primary mb-4 text-lg font-semibold">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Tag
                      key={skill}
                      size="large"
                      close
                      onClose={() => removeSkill(skill)}
                    >
                      {skill}
                    </Tag>
                  ))}
                  <Button variant="tertiary" size="xs" leftIcon="add">
                    Add skill
                  </Button>
                </div>
              </section>

              {/* Menu with switches and progress (Settings-style) */}
              <section className="rounded-lg border border-default bg-primary p-2 shadow-sm">
                <Menu>
                  <MenuGroup
                    heading={<MenuHeading>Preferences</MenuHeading>}
                    headingId="prefs-heading"
                  >
                    <MenuItem
                      leftIcon="email"
                      showSwitch
                      switchChecked={emailPublic}
                      onSwitchChange={(e) => setEmailPublic(e.target.checked)}
                    >
                      Show email on profile
                    </MenuItem>
                    <MenuItem
                      leftIcon="campaign"
                      showSwitch
                      switchChecked={newsletter}
                      onSwitchChange={(e) => setNewsletter(e.target.checked)}
                    >
                      Product updates
                    </MenuItem>
                    <MenuItem
                      leftIcon="alternate_email"
                      showSwitch
                      switchChecked={notifyMentions}
                      onSwitchChange={(e) => setNotifyMentions(e.target.checked)}
                    >
                      Notify on mentions
                    </MenuItem>
                  </MenuGroup>
                  <MenuGroup
                    heading={<MenuHeading>Storage</MenuHeading>}
                    headingId="storage-heading"
                  >
                    <MenuItem
                      type="progress"
                      progressLabel="Used"
                      progressValue={42}
                    >
                      Workspace storage
                    </MenuItem>
                  </MenuGroup>
                </Menu>
              </section>

              {/* Toggles */}
              <section className="rounded-lg border border-default bg-primary p-6 shadow-sm">
                <h2 className="text-primary mb-4 text-lg font-semibold">Notifications</h2>
                <div className="space-y-4">
                  <Toggle
                    size="md"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    label="Email digest"
                    supportText="Weekly summary of activity"
                  />
                  <Toggle
                    size="md"
                    checked={notifyMentions}
                    onChange={(e) => setNotifyMentions(e.target.checked)}
                    label="Mentions"
                    supportText="When someone @mentions you"
                  />
                </div>
              </section>

              {/* Radio cards: contact preference */}
              <section className="rounded-lg border border-default bg-primary p-6 shadow-sm">
                <h2 className="text-primary mb-4 text-lg font-semibold">Preferred contact</h2>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <RadioCard
                    name="contact-pref"
                    value="email"
                    label="Email"
                    description="Get updates via email"
                    icon="mail"
                    checked={contactPref === "email"}
                    onChange={() => setContactPref("email")}
                  />
                  <RadioCard
                    name="contact-pref"
                    value="slack"
                    label="Slack"
                    description="Get updates in Slack"
                    icon="chat"
                    checked={contactPref === "slack"}
                    onChange={() => setContactPref("slack")}
                  />
                  <RadioCard
                    name="contact-pref"
                    value="both"
                    label="Both"
                    description="Both email and Slack"
                    icon="notifications"
                    checked={contactPref === "both"}
                    onChange={() => setContactPref("both")}
                  />
                </div>
              </section>

              {/* Checkbox cards */}
              <section className="rounded-lg border border-default bg-primary p-6 shadow-sm">
                <h2 className="text-primary mb-4 text-lg font-semibold">Topics</h2>
                <div className="space-y-2">
                  <CheckboxCard
                    label="Product updates"
                    description="Product updates and release notes"
                    icon="campaign"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                  />
                  <CheckboxCard
                    label="Design system"
                    description="Design system and component changes"
                    icon="palette"
                    checked={true}
                    onChange={() => {}}
                  />
                </div>
              </section>

              {/* Accordion: FAQ / details */}
              <section className="rounded-lg border border-default bg-primary p-2 shadow-sm">
                <h2 className="text-primary mb-4 px-4 pt-2 text-lg font-semibold">Details</h2>
                <Accordion type="multiple" defaultValue={["contact"]}>
                  <AccordionItem value="contact" showDivider>
                    <AccordionTrigger>Contact information</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pb-4">
                        <Input label="Email" preset="email" placeholder="you@example.com" />
                        <Input label="Phone" placeholder="+1 (555) 000-0000" />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="privacy" showDivider>
                    <AccordionTrigger>Privacy</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-secondary pb-4 text-sm">
                        Your profile visibility, searchability, and data sharing options can be
                        managed in the Privacy section.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="security" showDivider>
                    <AccordionTrigger>Security</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-secondary pb-4 text-sm">
                        Two-factor authentication and active sessions are available in Security
                        settings.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              {/* Inline alert with CloseButton (danger) */}
              <Alert
                type="warning"
                emphasis="medium"
                title="Email not verified"
                description="Verify your email to enable all features and secure your account."
                expand
                actions={[{ label: "Verify email", onClick: () => {} }]}
                className="rounded-lg"
              />

              {/* Simple checkbox + radio (non-card) */}
              <section className="rounded-lg border border-default bg-primary p-6 shadow-sm">
                <h2 className="text-primary mb-4 text-lg font-semibold">Legal</h2>
                <div className="space-y-4">
                  <Checkbox
                    checked={true}
                    onChange={() => {}}
                    label="I agree to the Terms of Service"
                  />
                  <div>
                    <p className="text-primary mb-2 text-sm font-medium">Document type</p>
                    <div className="flex gap-6">
                      <Radio
                        name="doc-type"
                        value="terms"
                        checked={true}
                        onChange={() => {}}
                        label="Terms of Service"
                      />
                      <Radio
                        name="doc-type"
                        value="privacy"
                        checked={false}
                        onChange={() => {}}
                        label="Privacy Policy"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}
