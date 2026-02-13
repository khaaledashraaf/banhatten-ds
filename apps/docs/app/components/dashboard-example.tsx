"use client";

import { useState } from "react";
import {
  Alert,
  Badge,
  Button,
  Checkbox,
  CheckboxCard,
  Divider,
  Icon,
  Input,
  Radio,
  RadioCard,
  Tag,
  TextArea,
  Toggle,
  Tooltip,
  TooltipProvider,
} from "@banhatten/ui";

// ============================================================================
// Data
// ============================================================================

const stats = [
  { label: "Revenue", value: "$48.2k", change: "+12.5%", icon: "payments", trend: "up" as const },
  { label: "Orders", value: "1,284", change: "+8.2%", icon: "shopping_cart", trend: "up" as const },
  { label: "Customers", value: "3,721", change: "+18.7%", icon: "group", trend: "up" as const },
  { label: "Refunds", value: "$1.2k", change: "-3.1%", icon: "undo", trend: "down" as const },
];

const orders = [
  { id: "ORD-7291", customer: "Emma Wilson", amount: "$249.00", status: "Completed", date: "Feb 13", items: 3, method: "Credit Card" },
  { id: "ORD-7290", customer: "James Chen", amount: "$89.50", status: "Processing", date: "Feb 13", items: 1, method: "PayPal" },
  { id: "ORD-7289", customer: "Sofia Garcia", amount: "$432.00", status: "Completed", date: "Feb 12", items: 5, method: "Credit Card" },
  { id: "ORD-7288", customer: "Liam Murphy", amount: "$67.25", status: "Pending", date: "Feb 12", items: 2, method: "Apple Pay" },
  { id: "ORD-7287", customer: "Olivia Brown", amount: "$178.90", status: "Refunded", date: "Feb 11", items: 2, method: "Credit Card" },
  { id: "ORD-7286", customer: "Noah Davis", amount: "$524.00", status: "Completed", date: "Feb 11", items: 4, method: "PayPal" },
];

const teamMembers = [
  { name: "Ava Martinez", role: "Product Lead", avatar: "AM", online: true },
  { name: "Ethan Kim", role: "Engineering", avatar: "EK", online: true },
  { name: "Mia Johnson", role: "Design", avatar: "MJ", online: false },
  { name: "Lucas Lee", role: "Marketing", avatar: "LL", online: true },
];

const activityFeed = [
  { user: "Ava Martinez", action: "approved", target: "Q1 roadmap", time: "5 min ago", icon: "check_circle" },
  { user: "Ethan Kim", action: "deployed", target: "v2.4.1 to prod", time: "32 min ago", icon: "rocket_launch" },
  { user: "Mia Johnson", action: "uploaded", target: "new brand assets", time: "1 hr ago", icon: "cloud_upload" },
  { user: "Lucas Lee", action: "created", target: "Feb campaign draft", time: "2 hr ago", icon: "edit_note" },
  { user: "Ava Martinez", action: "commented on", target: "pricing update", time: "3 hr ago", icon: "chat_bubble" },
];

// ============================================================================
// Helpers
// ============================================================================

const statusConfig: Record<string, { color: "success" | "brand" | "warning" | "danger" | "neutral"; variant: "light" | "filled" }> = {
  Completed: { color: "success", variant: "light" },
  Processing: { color: "brand", variant: "light" },
  Pending: { color: "warning", variant: "light" },
  Refunded: { color: "danger", variant: "light" },
};

// ============================================================================
// Component
// ============================================================================

export function DashboardExample() {
  const [search, setSearch] = useState("");
  const [checkedOrders, setCheckedOrders] = useState<Set<string>>(new Set());
  const [statusFilter, setStatusFilter] = useState("all");
  const [noteValue, setNoteValue] = useState("");
  const [liveUpdates, setLiveUpdates] = useState(true);
  const [compactView, setCompactView] = useState(false);
  const [emailDigest, setEmailDigest] = useState(true);
  const [slackAlerts, setSlackAlerts] = useState(false);
  const [reportRange, setReportRange] = useState<"7d" | "30d" | "90d">("30d");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [showBanner, setShowBanner] = useState(true);

  const allMethods = Array.from(new Set(orders.map((o) => o.method))).sort();

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      !search ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      order.status.toLowerCase() === statusFilter;
    const matchesTags =
      activeTags.size === 0 || activeTags.has(order.method);
    return matchesSearch && matchesStatus && matchesTags;
  });

  const toggleOrder = (id: string) =>
    setCheckedOrders((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const toggleTag = (tag: string) =>
    setActiveTags((prev) => {
      const next = new Set(prev);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });

  const selectAll =
    filteredOrders.length > 0 &&
    filteredOrders.every((o) => checkedOrders.has(o.id));

  const toggleAll = () => {
    if (selectAll) {
      setCheckedOrders(new Set());
    } else {
      setCheckedOrders(new Set(filteredOrders.map((o) => o.id)));
    }
  };

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen bg-secondary">
        {/* ── Top Bar ── */}
        <header className="sticky top-0 z-20 border-b border-default bg-primary">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-3">
              <Icon name="storefront" size="lg" className="text-brand" filled />
              <h1 className="text-lg font-semibold text-primary">Commerce Hub</h1>
              <Badge variant="filled" color="brand" size="sm">
                Beta
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-64">
                <Input
                  preset="search"
                  placeholder="Search orders…"
                  size="sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Tooltip content="Notifications" side="bottom">
                <Button variant="secondary" icon="notifications" size="xs" aria-label="Notifications" />
              </Tooltip>
              <Tooltip content="Settings" side="bottom">
                <Button variant="secondary" icon="settings" size="xs" aria-label="Settings" />
              </Tooltip>
              <Button variant="primary" leftIcon="add" size="xs">
                New Order
              </Button>
            </div>
          </div>
        </header>

        <div className="px-6 py-6 space-y-6">
          {/* ── Alerts Banner ── */}
          {showBanner && (
            <Alert
              type="info"
              emphasis="moderate"
              title="New analytics features are live"
              description="Real-time revenue tracking, customer cohort analysis, and exportable PDF reports are now available in the Reports tab."
              expand
              actions={[
                { label: "Explore Reports", onClick: () => {} },
                { label: "Learn More", onClick: () => {} },
              ]}
              onClose={() => setShowBanner(false)}
            />
          )}

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
                    color={stat.trend === "up" ? "success" : "danger"}
                    size="sm"
                    leftIcon={stat.trend === "up" ? "trending_up" : "trending_down"}
                  >
                    {stat.change}
                  </Badge>
                </div>
                <Tooltip content={stat.label} side="left" variant="dark">
                  <div className="rounded-sm bg-secondary p-2">
                    <Icon name={stat.icon} size="lg" className="text-secondary" />
                  </div>
                </Tooltip>
              </div>
            ))}
          </section>

          {/* ── Secondary Alerts ── */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Alert
              type="success"
              emphasis="low"
              title="Payout of $12,480 processed successfully"
            />
            <Alert
              type="warning"
              emphasis="low"
              title="3 orders awaiting manual review"
            />
          </div>

          <Divider />

          {/* ── Main Grid ── */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            {/* ── Left: Orders Table ── */}
            <div className="xl:col-span-2 space-y-4">
              {/* Filters row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Radio
                    name="status-filter"
                    label="All"
                    value="all"
                    checked={statusFilter === "all"}
                    onChange={() => setStatusFilter("all")}
                  />
                  <Radio
                    name="status-filter"
                    label="Completed"
                    value="completed"
                    checked={statusFilter === "completed"}
                    onChange={() => setStatusFilter("completed")}
                  />
                  <Radio
                    name="status-filter"
                    label="Processing"
                    value="processing"
                    checked={statusFilter === "processing"}
                    onChange={() => setStatusFilter("processing")}
                  />
                  <Radio
                    name="status-filter"
                    label="Pending"
                    value="pending"
                    checked={statusFilter === "pending"}
                    onChange={() => setStatusFilter("pending")}
                  />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {allMethods.map((method) => (
                    <Tag
                      key={method}
                      size="small"
                      type="with-icon"
                      leftIcon="credit_card"
                      state={activeTags.has(method) ? "active" : "default"}
                      close={activeTags.has(method)}
                      onClose={() => toggleTag(method)}
                      onClick={() => toggleTag(method)}
                      className="cursor-pointer"
                    >
                      {method}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="rounded-md border border-default bg-primary overflow-hidden shadow-xs">
                {/* Header */}
                <div className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] items-center gap-4 bg-secondary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-tertiary">
                  <Checkbox
                    checked={selectAll}
                    onChange={toggleAll}
                    indeterminate={checkedOrders.size > 0 && !selectAll}
                    aria-label="Select all orders"
                  />
                  <span>Order</span>
                  <span className="hidden sm:block">Amount</span>
                  <span className="hidden sm:block">Status</span>
                  <span className="hidden md:block">Date</span>
                  <span className="w-8" />
                </div>

                {filteredOrders.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-secondary">
                    <Icon name="search_off" size="xl" className="mb-2 text-tertiary" />
                    <p className="text-sm">No orders match your filters</p>
                  </div>
                )}

                {filteredOrders.map((order, i) => (
                  <div key={order.id}>
                    {i > 0 && <Divider />}
                    <div
                      className={`grid grid-cols-[auto_1fr_auto_auto_auto_auto] items-center gap-4 px-4 py-3 transition-colors hover:bg-secondary ${
                        checkedOrders.has(order.id) ? "bg-brand-tertiary/40" : ""
                      }`}
                    >
                      <Checkbox
                        checked={checkedOrders.has(order.id)}
                        onChange={() => toggleOrder(order.id)}
                        aria-label={`Select order ${order.id}`}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-primary truncate">
                          {order.customer}
                        </p>
                        <p className="text-xs text-tertiary mt-0.5">
                          {order.id} · {order.items} item{order.items > 1 ? "s" : ""}
                        </p>
                      </div>
                      <span className="hidden sm:block text-sm font-medium text-primary">
                        {order.amount}
                      </span>
                      <span className="hidden sm:block">
                        <Badge
                          variant={statusConfig[order.status]?.variant}
                          color={statusConfig[order.status]?.color}
                          size="sm"
                          withDot
                        >
                          {order.status}
                        </Badge>
                      </span>
                      <span className="hidden md:block text-xs text-secondary whitespace-nowrap">
                        {order.date}
                      </span>
                      <Tooltip content="Order details" side="left">
                        <Button
                          variant="tertiary"
                          icon="more_horiz"
                          size="xs"
                          aria-label={`Actions for ${order.id}`}
                        />
                      </Tooltip>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-secondary">
                  Showing{" "}
                  <span className="font-medium text-primary">{filteredOrders.length}</span>{" "}
                  of <span className="font-medium text-primary">{orders.length}</span> orders
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

              {/* ── Report Range (RadioCard) ── */}
              <div className="rounded-md border border-default bg-primary p-5 shadow-xs">
                <h3 className="text-sm font-semibold text-primary mb-1">Export Report</h3>
                <p className="text-xs text-secondary mb-4">Select a date range for the generated report.</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <RadioCard
                    name="report-range"
                    label="Last 7 days"
                    description="Quick weekly snapshot"
                    icon="date_range"
                    value="7d"
                    checked={reportRange === "7d"}
                    onChange={() => setReportRange("7d")}
                  />
                  <RadioCard
                    name="report-range"
                    label="Last 30 days"
                    description="Monthly overview"
                    icon="calendar_month"
                    value="30d"
                    checked={reportRange === "30d"}
                    onChange={() => setReportRange("30d")}
                  />
                  <RadioCard
                    name="report-range"
                    label="Last 90 days"
                    description="Quarterly analysis"
                    icon="calendar_today"
                    value="90d"
                    checked={reportRange === "90d"}
                    onChange={() => setReportRange("90d")}
                  />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Button variant="primary" size="xs" leftIcon="download">
                    Download PDF
                  </Button>
                  <Button variant="secondary" size="xs" leftIcon="share">
                    Share Link
                  </Button>
                </div>
              </div>
            </div>

            {/* ── Right Sidebar ── */}
            <div className="space-y-6">
              {/* Team */}
              <div className="rounded-md border border-default bg-primary p-5 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-primary">Team Online</h3>
                  <Badge variant="filled" color="success" size="sm">
                    {teamMembers.filter((m) => m.online).length} online
                  </Badge>
                </div>
                <div className="space-y-3">
                  {teamMembers.map((member) => (
                    <div key={member.name} className="flex items-center gap-3">
                      <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-tertiary text-xs font-semibold text-brand">
                        {member.avatar}
                        {member.online && (
                          <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-white bg-success" />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-primary truncate">{member.name}</p>
                        <p className="text-xs text-tertiary">{member.role}</p>
                      </div>
                      <Tooltip content={`Message ${member.name.split(" ")[0]}`} side="left">
                        <Button variant="tertiary" icon="chat" size="xs" aria-label={`Message ${member.name}`} />
                      </Tooltip>
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
                  placeholder="Jot something down…"
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

              {/* Preferences — Toggle + CheckboxCard */}
              <div className="rounded-md border border-default bg-primary p-5 shadow-xs">
                <h3 className="text-sm font-semibold text-primary mb-4">Preferences</h3>
                <div className="space-y-4">
                  <Toggle
                    label="Live updates"
                    supportText="Stream new orders in real-time"
                    checked={liveUpdates}
                    onChange={(e) => setLiveUpdates(e.target.checked)}
                    size="sm"
                    withIcon
                  />
                  <Toggle
                    label="Compact view"
                    supportText="Reduce spacing in table rows"
                    checked={compactView}
                    onChange={(e) => setCompactView(e.target.checked)}
                    size="sm"
                  />
                </div>
                <Divider className="my-4" />
                <p className="text-xs font-medium text-secondary uppercase tracking-wider mb-3">
                  Notification Channels
                </p>
                <div className="space-y-3">
                  <CheckboxCard
                    label="Email Digest"
                    description="Daily summary of sales and orders"
                    icon="mail"
                    checked={emailDigest}
                    onChange={(e) => setEmailDigest(e.target.checked)}
                  />
                  <CheckboxCard
                    label="Slack Alerts"
                    description="Instant alerts for high-value orders"
                    icon="notifications_active"
                    checked={slackAlerts}
                    onChange={(e) => setSlackAlerts(e.target.checked)}
                  />
                </div>
              </div>

              {/* Activity Feed */}
              <div className="rounded-md border border-default bg-primary p-5 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-primary">Activity</h3>
                  <Button variant="link-brand" size="xs">
                    View all
                  </Button>
                </div>
                <div className="space-y-4">
                  {activityFeed.map((entry, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="mt-0.5">
                        <Icon name={entry.icon} size="sm" className="text-tertiary" />
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

              {/* Danger zone */}
              <Alert
                type="danger"
                emphasis="low"
                title="2 failed payment attempts detected"
              />
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
