"use client";

import { useState } from "react";
import {
  Button,
  Badge,
  Input,
  TextArea,
  Toggle,
  Checkbox,
  Radio,
  Alert,
  Tooltip,
  TooltipProvider,
  Divider,
} from "banhatten-ui";

const SIDEBAR_WIDTH = "280px";

const navItems = [
  { id: "general", label: "General" },
  { id: "agents", label: "AI Agents" },
  { id: "api-keys", label: "API Keys" },
  { id: "billing", label: "Billing" },
  { id: "team", label: "Team Members" },
] as const;

export function WorkspaceSettingsExample() {
  const [activeNav, setActiveNav] = useState<string>("general");
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceUrl, setWorkspaceUrl] = useState("");
  const [description, setDescription] = useState("");
  const [publicWorkspace, setPublicWorkspace] = useState(false);
  const [agentMode, setAgentMode] = useState<"balanced" | "creative" | "precise">("balanced");
  const [tokenLimit, setTokenLimit] = useState("");
  const [autoScaling, setAutoScaling] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [slackNotifications, setSlackNotifications] = useState(false);
  const [weeklySummary, setWeeklySummary] = useState(true);

  return (
    <div className="min-h-screen bg-primary">
      <TooltipProvider delayDuration={200}>
        {/* ── Page header ── */}
        <header className="sticky top-0 z-20 border-b border-default bg-primary">
          <div className="flex flex-col gap-2 px-8 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-primary">
                Workspace Settings
              </h1>
              <p className="mt-1 text-sm text-secondary">
                Manage AI agents, billing, and integrations
              </p>
            </div>
            <div className="flex flex-shrink-0 items-center gap-3">
              <Badge variant="light" color="neutral" size="sm">
                Pro Plan
              </Badge>
              <Button variant="primary" size="md">
                Upgrade Plan
              </Button>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* ── Sidebar ── */}
          <aside
            className="hidden border-r border-default bg-primary lg:block"
            style={{ width: SIDEBAR_WIDTH, minHeight: "calc(100vh - 73px)" }}
          >
            <nav className="flex flex-col gap-0.5 px-4 py-6" aria-label="Settings">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="tertiary"
                  size="md"
                  className={`w-full justify-start ${
                    activeNav === item.id
                      ? "bg-brand-tertiary text-brand font-medium"
                      : ""
                  }`}
                  onClick={() => setActiveNav(item.id)}
                  aria-current={activeNav === item.id ? "page" : undefined}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </aside>

          {/* ── Main content ── */}
          <main className="flex-1 overflow-auto">
            <div className="min-w-[320px] max-w-2xl px-10 py-8">
              {/* General (active view) – show when General is selected */}
              {activeNav === "general" && (
                <div className="space-y-6">
                  {/* 1. Workspace Info */}
                  <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-primary">
                      Workspace Info
                    </h2>
                    <div className="space-y-4">
                      <Input
                        label="Workspace Name"
                        placeholder="My Workspace"
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        aria-required
                      />
                      <Input
                        label="Workspace URL"
                        placeholder="my-workspace"
                        helperText="Used in share links and API endpoints."
                        helperTextIcon="info"
                        maxLength={50}
                        value={workspaceUrl}
                        onChange={(e) => setWorkspaceUrl(e.target.value)}
                      />
                      <TextArea
                        label="Description"
                        placeholder="Brief description of this workspace..."
                        maxLength={200}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                      />
                      <div className="flex items-start gap-2">
                        <div className="flex-1">
                          <Toggle
                            label="Public Workspace"
                            checked={publicWorkspace}
                            onChange={(e) => setPublicWorkspace(e.target.checked)}
                          />
                        </div>
                        <Tooltip
                          size="large"
                          variant="light"
                          title="Public workspace"
                          subtitle="When enabled, anyone with the link can view workspace content. Members still need to be invited to edit."
                        >
                          <Button
                            variant="tertiary"
                            size="xs"
                            icon="info"
                            aria-label="What is a public workspace?"
                            className="shrink-0"
                          />
                        </Tooltip>
                      </div>
                    </div>
                  </section>

                  <Divider />

                  {/* 2. AI Agent Configuration */}
                  <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-primary">
                      AI Agent Configuration
                    </h2>
                    <Alert
                      type="info"
                      emphasis="low"
                      title="AI Agents use GPT-4.1 Turbo by default."
                    />
                    <div>
                      <p className="mb-1.5 text-sm font-medium text-primary">
                        Response style
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Radio
                          name="agent-mode"
                          label="Balanced"
                          value="balanced"
                          checked={agentMode === "balanced"}
                          onChange={() => setAgentMode("balanced")}
                        />
                        <Radio
                          name="agent-mode"
                          label="Creative"
                          value="creative"
                          checked={agentMode === "creative"}
                          onChange={() => setAgentMode("creative")}
                        />
                        <Radio
                          name="agent-mode"
                          label="Precise"
                          value="precise"
                          checked={agentMode === "precise"}
                          onChange={() => setAgentMode("precise")}
                        />
                      </div>
                    </div>
                    <Input
                      label="Monthly token limit"
                      preset="amount"
                      placeholder="0"
                      value={tokenLimit}
                      onChange={(e) => setTokenLimit(e.target.value)}
                    />
                    <Toggle
                      label="Enable auto-scaling"
                      supportText="Automatically increase limit when approaching usage cap."
                      checked={autoScaling}
                      onChange={(e) => setAutoScaling(e.target.checked)}
                    />
                  </section>

                  <Divider />

                  {/* 3. Notifications */}
                  <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-primary">
                      Notifications
                    </h2>
                    <div className="space-y-3">
                      <Checkbox
                        label="Email alerts"
                        checked={emailAlerts}
                        onChange={(e) => setEmailAlerts(e.target.checked)}
                      />
                      <Checkbox
                        label="Slack notifications"
                        checked={slackNotifications}
                        onChange={(e) => setSlackNotifications(e.target.checked)}
                      />
                      <Checkbox
                        label="Weekly performance summary"
                        checked={weeklySummary}
                        onChange={(e) => setWeeklySummary(e.target.checked)}
                      />
                    </div>
                  </section>

                  <Divider />

                  {/* 4. Danger Zone */}
                  <section className="space-y-4">
                    <h2 className="text-lg font-semibold text-primary">
                      Danger Zone
                    </h2>
                    <Alert
                      type="danger"
                      emphasis="moderate"
                      title="Delete this workspace"
                      description="All data, agents, and API keys will be permanently removed. This action cannot be undone."
                    />
                    <Button variant="danger" size="md">
                      Delete Workspace
                    </Button>
                  </section>

                  {/* Footer actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button variant="secondary" size="md">
                      Cancel
                    </Button>
                    <Button variant="primary" size="md">
                      Save Changes
                    </Button>
                  </div>
                </div>
              )}

              {/* Placeholder for other nav items */}
              {activeNav !== "general" && (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <p className="text-sm text-secondary">
                    {navItems.find((i) => i.id === activeNav)?.label} settings
                    — coming in this example flow.
                  </p>
                  <p className="mt-1 text-xs text-tertiary">
                    Select General to edit workspace settings.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </TooltipProvider>
    </div>
  );
}
