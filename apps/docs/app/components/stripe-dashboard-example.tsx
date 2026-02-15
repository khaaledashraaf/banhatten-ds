"use client";

import { useState } from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  ButtonGroupItem,
  Divider,
  Icon,
  Input,
  Sidebar,
  SidebarAccountCard,
  SidebarMenuItem,
  SidebarSubmenuItem,
  Tooltip,
  TooltipProvider,
} from "@banhatten/ui";

// ============================================================================
// Data
// ============================================================================

const summaryCards = [
  { label: "Total Sale", value: "$3,245" },
  { label: "Total Spend", value: "$3,245" },
  { label: "Paid out", value: "$3,245" },
  { label: "Returns", value: "$0.00" },
];

const navItems = [
  { name: "Dashboard", icon: "dashboard" },
  { name: "Accounts", icon: "business" },
  { name: "Cards", icon: "credit_card" },
  { name: "Transactions", icon: "list" },
  { name: "Spend groups", icon: "group" },
  { name: "Insights", icon: "trending_up" },
  { name: "Payees", icon: "people" },
  { name: "Invoices", icon: "receipt" },
  { name: "Connections", icon: "link" },
];

const metrics = [
  { id: "1", title: "Customer Expenses", initial: "C" },
  { id: "2", title: "Subscription", initial: "S" },
  { id: "3", title: "Test", initial: "T" },
];

const tableRows = [
  { orderId: "HJ736JDYRHF7", date: "Nov 02, 2023, 3:30 PM", amount: "$170", fees: "$0" },
  { orderId: "34GR553DYU5", date: "Nov 02, 2023, 3:30 PM", amount: "$2,343", fees: "$10" },
  { orderId: "46GH453FHUT", date: "Nov 02, 2023, 3:30 PM", amount: "$234", fees: "$0" },
  { orderId: "4535WTWEH34", date: "Nov 02, 2023, 3:30 PM", amount: "$234", fees: "$0" },
];

const metricTableRows = [
  { type: "Card", name: "Expense 2", spend: "$180" },
  { type: "Card", name: "Expense 2", spend: "$180" },
  { type: "Card", name: "Expense 2", spend: "$180" },
];

// ============================================================================
// Component
// ============================================================================

export function StripeDashboardExample() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"sales" | "payouts">("sales");

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex min-h-screen bg-secondary">
        {/* Sidebar — in flow so it stays inside the section frame */}
        <div className="hidden shrink-0 md:block md:w-64">
          <Sidebar
            header={
              <div className="flex flex-col gap-sm px-md pt-md">
                <SidebarAccountCard
                  username="Username"
                  supportingText="user@example.com"
                  initials="U"
                  rightIcon="expand_more"
                  aria-label="Account menu"
                />
                <Input
                  preset="search"
                  placeholder="Search..."
                  size="sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full"
                />
              </div>
            }
            footer={
              <>
                <SidebarMenuItem leftIcon="help" onClick={() => {}}>
                  Help
                </SidebarMenuItem>
                <SidebarMenuItem leftIcon="settings" onClick={() => {}}>
                  Settings
                </SidebarMenuItem>
              </>
            }
          >
            {navItems.map((item) => (
              <SidebarMenuItem
                key={item.name}
                leftIcon={item.icon}
                active={item.name === "Dashboard"}
                onClick={() => {}}
              >
                {item.name}
              </SidebarMenuItem>
            ))}
          </Sidebar>
        </div>

        {/* Main */}
        <main className="min-h-screen min-w-0 flex-1">
          <div className="px-6 py-6 md:px-8 lg:px-10">
            {/* Header */}
            <header className="mb-8 flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-md bg-brand text-lg font-bold text-on-color">
                S
              </div>
              <h1 className="text-primary text-xl font-bold">Stripe Demo Account</h1>
            </header>

            {/* Summary cards */}
            <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {summaryCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-lg border border-default bg-primary px-5 py-4 shadow-xs"
                >
                  <p className="text-secondary text-sm">{card.label}</p>
                  <p className="text-primary mt-1 text-2xl font-bold">{card.value}</p>
                </div>
              ))}
            </section>

            {/* Metrics */}
            <section className="mb-10">
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-primary text-lg font-semibold">Metrics</h2>
                  <p className="text-secondary mt-0.5 text-sm">
                    Ruby metrics help keep track of important KPIs or data points for your business
                  </p>
                </div>
                <Button variant="primary" size="xs" leftIcon="add" className="mt-2 shrink-0 sm:mt-0">
                  Create metric
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {metrics.map((m) => (
                  <div
                    key={m.id}
                    className="rounded-lg border border-default bg-primary p-5 shadow-xs"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar size="md" shape="circle" initials={m.initial} className="bg-brand-tertiary text-brand" />
                        <span className="text-primary text-sm font-medium">{m.title}</span>
                      </div>
                      <Tooltip content="Options" side="left">
                        <Button
                          variant="tertiary"
                          icon="more_vert"
                          size="xs"
                          aria-label={`Options for ${m.title}`}
                        />
                      </Tooltip>
                    </div>
                    <p className="text-secondary text-xs">Total Spend</p>
                    <p className="text-primary mb-4 text-xl font-bold">$3,243</p>
                    <div className="rounded border border-default overflow-hidden">
                      <div className="grid grid-cols-[1fr_1fr_auto] gap-2 bg-secondary px-3 py-2 text-xs font-medium text-tertiary">
                        <span>Type</span>
                        <span>Name</span>
                        <span>Spend</span>
                      </div>
                      {metricTableRows.map((row, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-[1fr_1fr_auto] gap-2 border-t border-default px-3 py-2 text-xs text-primary"
                        >
                          <span>{row.type}</span>
                          <span>{row.name}</span>
                          <span>{row.spend}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sales / Payouts tabs + table */}
            <section>
              <ButtonGroup className="mb-4 inline-flex">
                <ButtonGroupItem
                  selected={activeTab === "sales"}
                  onClick={() => setActiveTab("sales")}
                >
                  Sales
                </ButtonGroupItem>
                <ButtonGroupItem
                  selected={activeTab === "payouts"}
                  onClick={() => setActiveTab("payouts")}
                >
                  Payouts
                </ButtonGroupItem>
              </ButtonGroup>
              <div className="overflow-hidden rounded-lg border border-default bg-primary shadow-xs">
                <div className="grid grid-cols-4 gap-4 bg-secondary px-4 py-3 text-xs font-semibold uppercase tracking-wider text-tertiary">
                  <span>OrderId</span>
                  <span>Date</span>
                  <span>Amount</span>
                  <span>Fees</span>
                </div>
                {tableRows.map((row, i) => (
                  <div key={row.orderId}>
                    {i > 0 && <Divider />}
                    <div className="grid grid-cols-4 gap-4 px-4 py-3 text-sm text-primary hover:bg-secondary">
                      <span className="font-mono text-xs">{row.orderId}</span>
                      <span className="text-secondary">{row.date}</span>
                      <span>{row.amount}</span>
                      <span>{row.fees}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}
