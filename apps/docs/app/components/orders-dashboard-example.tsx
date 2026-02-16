"use client";

import { useState } from "react";
import {
  Avatar,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbListItem,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  ButtonGroupItem,
  Divider,
  Icon,
  Input,
  ProgressBar,
  Tooltip,
  TooltipProvider,
} from "@banhatten/ui";

// ============================================================================
// Data
// ============================================================================

const navItems = [
  { name: "Dashboard", active: false },
  { name: "Orders", active: true },
  { name: "Products", active: false },
  { name: "Customers", active: false },
  { name: "Settings", active: false },
];

const summaryCards = [
  { label: "This week", value: "$1,304", change: "+25% from last week", progress: 75 },
  { label: "This week", value: "$6,304", change: "+10% from last month", progress: 50 },
];

const ordersTableRows = [
  { customer: "Liam Jhonson", email: "liam@gmail.com", type: "Sale", status: "Fulfilled" as const, date: "2023-06-23", amount: "$250.00" },
  { customer: "Liam Jhonson", email: "liam@gmail.com", type: "Sale", status: "Declined" as const, date: "2023-06-23", amount: "$250.00" },
  { customer: "Liam Jhonson", email: "liam@gmail.com", type: "Refund", status: "Fulfilled" as const, date: "2023-06-23", amount: "$250.00" },
  { customer: "Liam Jhonson", email: "liam@gmail.com", type: "Sale", status: "Declined" as const, date: "2023-06-23", amount: "$250.00" },
];

const orderDetailsItems = [
  { name: "Glimmer Lamps x 2", price: "$250.00" },
  { name: "Glimmer Lamps x 2", price: "$250.00" },
];

// ============================================================================
// Component
// ============================================================================

export function OrdersDashboardExample() {
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState<"week" | "month" | "year">("week");

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex max-h-screen flex-col bg-secondary">
        {/* Top nav */}
        <header className="flex shrink-0 items-center gap-6 border-b border-default bg-primary px-6 py-4">
          <div className="flex size-9 items-center justify-center rounded-md bg-quarterary text-icon-primary">
            <Icon name="settings" size="md" aria-hidden />
          </div>
          <nav className="flex items-center gap-1" aria-label="Main">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                  item.active
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <Input
              preset="search"
              placeholder="Search"
              size="sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-48 min-w-0"
              aria-label="Search"
            />
            <Avatar size="md" shape="circle" initials="U" aria-label="User menu" />
          </div>
        </header>

        {/* Main content */}
        <div className="flex min-w-0 flex-1 flex-col gap-4 p-6">
          <Breadcrumb>
            <BreadcrumbList containerStyle="default">
              <BreadcrumbListItem>
                <BreadcrumbItem variant="iconText" icon="home" href="#">
                  Dashboard
                </BreadcrumbItem>
                <BreadcrumbSeparator separator="chevron" />
              </BreadcrumbListItem>
              <BreadcrumbListItem>
                <BreadcrumbItem variant="iconText" icon="folder" href="#">
                  Orders
                </BreadcrumbItem>
                <BreadcrumbSeparator separator="chevron" />
              </BreadcrumbListItem>
              <BreadcrumbListItem>
                <BreadcrumbItem variant="iconText" icon="folder" active>
                  Recent orders
                </BreadcrumbItem>
              </BreadcrumbListItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex min-w-0 flex-1 gap-6">
          {/* Left column */}
          <div className="min-w-0 flex-1 space-y-6">
            {/* Your orders card + summary cards */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-lg border border-default bg-primary p-5 shadow-xs lg:col-span-1">
                <h2 className="text-primary text-lg font-semibold">Your orders</h2>
                <p className="text-secondary mt-1 text-sm">
                  Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.
                </p>
                <Button variant="primary" size="md" leftIcon="add" className="mt-4">
                  Create new order
                </Button>
              </div>
              {summaryCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-default bg-primary p-5 shadow-xs"
                >
                  <p className="text-secondary text-sm">{card.label}</p>
                  <p className="text-primary mt-1 text-2xl font-bold">{card.value}</p>
                  <p className="text-brand mt-1 text-sm">{card.change}</p>
                  <div className="mt-3">
                    <ProgressBar value={card.progress} size="sm" color="brand" aria-label={`Progress ${card.progress}%`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Period tabs + Filter / Export */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <ButtonGroup className="inline-flex">
                <ButtonGroupItem
                  selected={period === "week"}
                  onClick={() => setPeriod("week")}
                >
                  Week
                </ButtonGroupItem>
                <ButtonGroupItem
                  selected={period === "month"}
                  onClick={() => setPeriod("month")}
                >
                  Month
                </ButtonGroupItem>
                <ButtonGroupItem
                  selected={period === "year"}
                  onClick={() => setPeriod("year")}
                >
                  Year
                </ButtonGroupItem>
              </ButtonGroup>
              <div className="flex gap-2">
                <Button variant="secondary" size="md" leftIcon="filter_list">
                  Filter
                </Button>
                <Button variant="secondary" size="md" leftIcon="upload">
                  Export
                </Button>
              </div>
            </div>

            {/* Orders table */}
            <div className="overflow-hidden rounded-lg border border-default bg-primary shadow-xs">
              <div className="bg-primary px-lg pt-4 pb-4">
                <h3 className="text-primary text-lg font-semibold">Orders</h3>
                <p className="text-secondary mt-0.5 text-sm">Recent orders for your store</p>
              </div>
              <div className="overflow-x-auto px-lg">
                <table
                  aria-label="Orders"
                  className="w-full min-w-[600px] border-collapse"
                >
                  <thead>
                    <tr className="border-b border-default bg-secondary text-xs font-semibold uppercase tracking-wider text-tertiary">
                      <th className="min-w-[140px] px-4 py-3 text-left font-semibold">Customer</th>
                      <th className="w-20 px-4 py-3 text-left font-semibold">Type</th>
                      <th className="w-[100px] px-4 py-3 text-left font-semibold">Status</th>
                      <th className="w-[100px] px-4 py-3 text-left font-semibold">Date</th>
                      <th className="w-[90px] px-4 py-3 text-left font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersTableRows.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-default text-sm text-primary hover:bg-secondary"
                      >
                        <td className="min-w-0 px-4 py-3">
                          <p className="font-medium text-primary truncate">{row.customer}</p>
                          <p className="text-secondary text-xs truncate">{row.email}</p>
                        </td>
                        <td className="text-secondary px-4 py-3">{row.type}</td>
                        <td className="px-4 py-3">
                          <Badge
                            variant="light"
                            color={row.status === "Fulfilled" ? "neutral" : "danger"}
                            size="sm"
                          >
                            {row.status}
                          </Badge>
                        </td>
                        <td className="text-secondary px-4 py-3">{row.date}</td>
                        <td className="px-4 py-3">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right sidebar — Order details */}
          <aside className="hidden w-[360px] shrink-0 flex-col gap-0 rounded-lg border border-default bg-primary shadow-xs lg:flex overflow-x-hidden h-auto">
            <div className="border-b border-default px-5 py-4 bg-tertiary">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-primary font-semibold">Order ID: Oe31b70H</h3>
                  <p className="text-secondary mt-0.5 text-sm">Date: November 23, 2023</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="primary" size="xs" leftIcon="local_shipping">
                    Track Order
                  </Button>
                  <Button variant="secondary" size="xs" icon="more_vert"></Button>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <h4 className="text-primary text-sm font-semibold">Order Details</h4>
              <ul className="mt-2 space-y-2 text-sm">
                {orderDetailsItems.map((item, i) => (
                  <li key={i} className="flex justify-between text-primary">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
              <Divider orientation="horizontal" className="mt-3" />
              <div className="mt-3 space-y-1 text-sm">
                <div className="flex justify-between text-secondary">
                  <span>Subtotal</span>
                  <span>$250.00</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Shipping</span>
                  <span>$250.00</span>
                </div>
                <div className="flex justify-between text-secondary">
                  <span>Tax</span>
                  <span>$250.00</span>
                </div>
                <div className="flex justify-between font-semibold text-primary">
                  <span>Total</span>
                  <span>$250.00</span>
                </div>
              </div>
              <Divider orientation="horizontal" className="mt-3" />
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-primary text-sm font-semibold">Shipping information</h4>
                  <p className="text-secondary mt-1 text-sm">
                    Liam Johnson<br />
                    1234 Main St.<br />
                    Anytown, CA 12345
                  </p>
                </div>
                <div>
                  <h4 className="text-primary text-sm font-semibold">Billing information</h4>
                  <p className="text-secondary mt-1 text-sm">Same as shipping address</p>
                </div>
              </div>
              <Divider orientation="horizontal" className="mt-3" />
              <div className="mt-3">
                <h4 className="text-primary text-sm font-semibold">Customer information</h4>
                <dl className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-secondary">Customer</dt>
                    <dd className="text-primary">Liam Jhonson</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-secondary">Email</dt>
                    <dd className="text-primary">liam@gmail.com</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-secondary">Phone</dt>
                    <dd className="text-primary">+1 234 567 890</dd>
                  </div>
                </dl>
              </div>
              <Divider orientation="horizontal" className="mt-3" />
              <div className="mt-3">
                <h4 className="text-primary text-sm font-semibold">Payment information</h4>
                <div className="mt-2 flex items-center gap-2 text-sm text-primary">
                  <Icon name="credit_card" size="sm" aria-hidden />
                  <span>Visa</span>
                  <span className="text-secondary">*** *** *** 323</span>
                </div>
              </div>
            </div>
          </aside>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
