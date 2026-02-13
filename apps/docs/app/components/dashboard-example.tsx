"use client";

import { useState } from "react";
import {
  Button,
  Badge,
  Input,
  TextArea,
  Tag,
  Checkbox,
  Radio,
  Divider,
  Icon,
} from "@banhatten/ui";

// ============================================================================
// Data
// ============================================================================

const stats = [
  { label: "Total Tasks", value: "128", change: "+12%", icon: "task_alt", color: "brand" as const },
  { label: "In Progress", value: "34", change: "+5%", icon: "pending", color: "warning" as const },
  { label: "Completed", value: "86", change: "+24%", icon: "check_circle", color: "success" as const },
  { label: "Overdue", value: "8", change: "-3%", icon: "error", color: "danger" as const },
];

const tasks = [
  { id: 1, title: "Redesign landing page hero section", assignee: "Sarah K.", priority: "High", status: "In Progress", due: "Feb 14", tags: ["Design", "Frontend"] },
  { id: 2, title: "Set up CI/CD pipeline for staging", assignee: "Mike R.", priority: "Medium", status: "To Do", due: "Feb 16", tags: ["DevOps"] },
  { id: 3, title: "Write API documentation for v2 endpoints", assignee: "Lisa M.", priority: "Low", status: "In Review", due: "Feb 15", tags: ["Docs", "Backend"] },
  { id: 4, title: "Fix mobile navigation overflow bug", assignee: "Alex T.", priority: "High", status: "In Progress", due: "Feb 13", tags: ["Bug", "Mobile"] },
  { id: 5, title: "Implement dark mode toggle", assignee: "Sarah K.", priority: "Medium", status: "To Do", due: "Feb 18", tags: ["Frontend", "Feature"] },
  { id: 6, title: "Database migration for user preferences", assignee: "Mike R.", priority: "High", status: "Done", due: "Feb 12", tags: ["Backend", "Database"] },
];

const teamMembers = [
  { name: "Sarah K.", role: "Lead Designer", tasks: 12, avatar: "SK" },
  { name: "Mike R.", role: "Backend Engineer", tasks: 8, avatar: "MR" },
  { name: "Lisa M.", role: "Technical Writer", tasks: 5, avatar: "LM" },
  { name: "Alex T.", role: "Frontend Dev", tasks: 9, avatar: "AT" },
];

const activityLog = [
  { user: "Sarah K.", action: "completed", target: "Homepage mockup", time: "2 min ago" },
  { user: "Mike R.", action: "commented on", target: "API v2 spec", time: "15 min ago" },
  { user: "Alex T.", action: "opened", target: "Nav overflow bug", time: "1 hr ago" },
  { user: "Lisa M.", action: "updated", target: "API documentation", time: "2 hr ago" },
  { user: "Sarah K.", action: "assigned", target: "Dark mode toggle", time: "3 hr ago" },
];

// ============================================================================
// Helpers
// ============================================================================

const priorityBadge: Record<string, { color: "danger" | "warning" | "info"; variant: "light" | "filled" }> = {
  High: { color: "danger", variant: "light" },
  Medium: { color: "warning", variant: "light" },
  Low: { color: "info", variant: "light" },
};

const statusBadge: Record<string, { color: "brand" | "warning" | "success" | "neutral"; variant: "light" | "filled" }> = {
  "In Progress": { color: "brand", variant: "light" },
  "To Do": { color: "neutral", variant: "light" },
  "In Review": { color: "warning", variant: "light" },
  Done: { color: "success", variant: "filled" },
};

// ============================================================================
// Dashboard Component
// ============================================================================

export function DashboardExample() {
  const [search, setSearch] = useState("");
  const [checkedTasks, setCheckedTasks] = useState<Set<number>>(new Set([6]));
  const [viewFilter, setViewFilter] = useState("all");
  const [noteValue, setNoteValue] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  const allTags = Array.from(new Set(tasks.flatMap((t) => t.tags))).sort();

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      !search ||
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.assignee.toLowerCase().includes(search.toLowerCase());
    const matchesView =
      viewFilter === "all" ||
      (viewFilter === "active" && task.status !== "Done") ||
      (viewFilter === "done" && task.status === "Done");
    const matchesTags =
      activeTags.size === 0 || task.tags.some((t) => activeTags.has(t));
    return matchesSearch && matchesView && matchesTags;
  });

  const toggleTask = (id: number) => {
    setCheckedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* ── Top Bar ── */}
      <header className="sticky top-0 z-20 border-b border-default bg-primary/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <Icon name="dashboard" size="lg" className="text-brand" filled />
            <h1 className="text-lg font-semibold text-primary">Project Hub</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-64">
              <Input
                preset="search"
                placeholder="Search tasks..."
                size="sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="secondary" icon="notifications" size="xs" aria-label="Notifications" />
            <Button variant="primary" leftIcon="add" size="xs">
              New Task
            </Button>
          </div>
        </div>
      </header>

      <div className="px-6 py-8 space-y-8">
        {/* ── Stats Cards ── */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-start justify-between rounded-md border border-default bg-primary p-5 shadow-xs"
            >
              <div className="space-y-1">
                <p className="text-sm text-secondary">{stat.label}</p>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <Badge
                  variant="light"
                  color={stat.change.startsWith("+") ? "success" : "danger"}
                  size="sm"
                  leftIcon={stat.change.startsWith("+") ? "trending_up" : "trending_down"}
                >
                  {stat.change}
                </Badge>
              </div>
              <div className="rounded-sm bg-secondary p-2">
                <Icon name={stat.icon} size="lg" className="text-secondary" />
              </div>
            </div>
          ))}
        </section>

        <Divider />

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* ── Left Column: Tasks ── */}
          <div className="lg:col-span-2 space-y-5">
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Radio
                  name="view"
                  label="All"
                  value="all"
                  checked={viewFilter === "all"}
                  onChange={() => setViewFilter("all")}
                />
                <Radio
                  name="view"
                  label="Active"
                  value="active"
                  checked={viewFilter === "active"}
                  onChange={() => setViewFilter("active")}
                />
                <Radio
                  name="view"
                  label="Done"
                  value="done"
                  checked={viewFilter === "done"}
                  onChange={() => setViewFilter("done")}
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {allTags.map((tag) => (
                  <Tag
                    key={tag}
                    size="small"
                    type="simple"
                    state={activeTags.has(tag) ? "active" : "default"}
                    close={activeTags.has(tag)}
                    onClose={() => toggleTag(tag)}
                    onClick={() => toggleTag(tag)}
                    className="cursor-pointer"
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>

            {/* Task List */}
            <div className="rounded-md border border-default overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-4 bg-secondary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-tertiary">
                <span className="w-5" />
                <span>Task</span>
                <span className="hidden sm:block">Priority</span>
                <span className="hidden sm:block">Status</span>
                <span className="hidden md:block">Due</span>
              </div>

              {filteredTasks.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-secondary">
                  <Icon name="search_off" size="xl" className="mb-2 text-tertiary" />
                  <p className="text-sm">No tasks match your filters</p>
                </div>
              )}

              {filteredTasks.map((task, i) => (
                <div key={task.id}>
                  {i > 0 && <Divider />}
                  <div
                    className={`grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-4 px-4 py-3 transition-colors hover:bg-secondary ${
                      checkedTasks.has(task.id) ? "bg-secondary/50" : ""
                    }`}
                  >
                    <Checkbox
                      checked={checkedTasks.has(task.id)}
                      onChange={() => toggleTask(task.id)}
                      aria-label={`Mark "${task.title}" as done`}
                    />
                    <div className="min-w-0">
                      <p
                        className={`text-sm font-medium truncate ${
                          checkedTasks.has(task.id) ? "line-through text-tertiary" : "text-primary"
                        }`}
                      >
                        {task.title}
                      </p>
                      <p className="text-xs text-tertiary mt-0.5">{task.assignee}</p>
                    </div>
                    <span className="hidden sm:block">
                      <Badge
                        variant={priorityBadge[task.priority]?.variant}
                        color={priorityBadge[task.priority]?.color}
                        size="sm"
                      >
                        {task.priority}
                      </Badge>
                    </span>
                    <span className="hidden sm:block">
                      <Badge
                        variant={statusBadge[task.status]?.variant}
                        color={statusBadge[task.status]?.color}
                        size="sm"
                        withDot
                      >
                        {task.status}
                      </Badge>
                    </span>
                    <span className="hidden md:block text-xs text-secondary whitespace-nowrap">
                      {task.due}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination-like row */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-secondary">
                Showing <span className="font-medium text-primary">{filteredTasks.length}</span> of{" "}
                <span className="font-medium text-primary">{tasks.length}</span> tasks
              </p>
              <div className="flex gap-2">
                <Button variant="secondary" size="xs" leftIcon="chevron_left" disabled>
                  Previous
                </Button>
                <Button variant="secondary" size="xs" rightIcon="chevron_right">
                  Next
                </Button>
              </div>
            </div>
          </div>

          {/* ── Right Column: Sidebar Panels ── */}
          <div className="space-y-6">
            {/* Team Panel */}
            <div className="rounded-md border border-default bg-primary p-5 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-primary">Team</h3>
                <Badge variant="filled" color="brand" size="sm">
                  {teamMembers.length}
                </Badge>
              </div>
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-tertiary text-xs font-semibold text-brand">
                      {member.avatar}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-primary truncate">{member.name}</p>
                      <p className="text-xs text-tertiary">{member.role}</p>
                    </div>
                    <Badge variant="outlined" color="neutral" size="sm">
                      {member.tasks}
                    </Badge>
                  </div>
                ))}
              </div>
              <Divider className="my-4" />
              <Button variant="tertiary" size="xs" leftIcon="person_add" className="w-full">
                Invite Member
              </Button>
            </div>

            {/* Quick Note */}
            <div className="rounded-md border border-default bg-primary p-5 shadow-xs">
              <h3 className="text-sm font-semibold text-primary mb-3">Quick Note</h3>
              <TextArea
                placeholder="Jot down a quick note for your team..."
                value={noteValue}
                onChange={(e) => setNoteValue(e.target.value)}
                maxLength={280}
                rows={3}
              />
              <div className="mt-3 flex justify-end gap-2">
                <Button
                  variant="secondary"
                  size="xs"
                  onClick={() => setNoteValue("")}
                  disabled={!noteValue}
                >
                  Clear
                </Button>
                <Button variant="primary" size="xs" leftIcon="send" disabled={!noteValue}>
                  Post
                </Button>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="rounded-md border border-default bg-primary p-5 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-primary">Recent Activity</h3>
                <Button variant="link-brand" size="xs">
                  View all
                </Button>
              </div>
              <div className="space-y-4">
                {activityLog.map((entry, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5">
                      <Icon
                        name={
                          entry.action === "completed"
                            ? "check_circle"
                            : entry.action === "commented on"
                              ? "chat_bubble"
                              : entry.action === "opened"
                                ? "add_circle"
                                : entry.action === "updated"
                                  ? "edit"
                                  : "person"
                        }
                        size="sm"
                        className="text-tertiary"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-primary">
                        <span className="font-medium">{entry.user}</span>{" "}
                        <span className="text-secondary">{entry.action}</span>{" "}
                        <span className="font-medium">{entry.target}</span>
                      </p>
                      <p className="text-xs text-tertiary">{entry.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferences (Checkboxes) */}
            <div className="rounded-md border border-default bg-primary p-5 shadow-xs">
              <h3 className="text-sm font-semibold text-primary mb-4">Notifications</h3>
              <div className="space-y-3">
                <Checkbox label="Task assignments" supportText="Get notified when assigned a task" defaultChecked />
                <Checkbox label="Status changes" supportText="Updates when task status changes" defaultChecked />
                <Checkbox label="Comments" supportText="Replies and mentions" />
                <Checkbox label="Due date reminders" supportText="24 hours before deadline" defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
