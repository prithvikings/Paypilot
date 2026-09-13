export type DemoDebt = {
  id: string;
  name: string;
  type: "Personal Loan" | "Credit Card";
  outstanding: number;
  paymentLabel: string;
  paymentAmount: number;
  status: "current" | "overdue";
  statusDetail: string;
};

export type DemoExpense = {
  id: string;
  category: string;
  amount: number;
  percentage: number;
};

export type DemoTransaction = {
  id: string;
  title: string;
  category: string;
  amount: number;
  direction: "income" | "expense";
};

export const demoFinancialData = {
  user: {
    name: "Rahul Sharma",
    firstName: "Rahul",
  },
  financialOverview: {
    income: 42000,
    expenses: 27000,
    available: 15000,
  },
  financialStatus: {
    status: "warning" as const,
    label: "Needs attention",
    message: "Your finances are manageable, with one overdue payment to address.",
  },
  dueThisMonth: {
    amount: 11000,
    label: "Across 2 obligations",
  },
  obligations: [
    {
      id: "credit-card",
      name: "Credit Card",
      type: "Credit Card" as const,
      outstanding: 38000,
      paymentLabel: "Minimum payment",
      paymentAmount: 2500,
      status: "overdue" as const,
      statusDetail: "18 days overdue",
    },
    {
      id: "personal-loan",
      name: "Personal Loan",
      type: "Personal Loan" as const,
      outstanding: 120000,
      paymentLabel: "EMI",
      paymentAmount: 8500,
      status: "current" as const,
      statusDetail: "Current",
    },
  ] satisfies DemoDebt[],
  expenses: [
    { id: "rent", category: "Rent", amount: 10000, percentage: 37 },
    { id: "food", category: "Food", amount: 5000, percentage: 19 },
    { id: "transport", category: "Transport", amount: 3000, percentage: 11 },
    { id: "utilities", category: "Utilities", amount: 2500, percentage: 9 },
    { id: "shopping", category: "Shopping", amount: 2000, percentage: 7 },
    { id: "healthcare", category: "Healthcare", amount: 1500, percentage: 6 },
    { id: "entertainment", category: "Entertainment", amount: 1000, percentage: 4 },
    { id: "other", category: "Other", amount: 2000, percentage: 7 },
  ] satisfies DemoExpense[],
  debtSummary: {
    totalOutstanding: 158000,
  },
  recentTransactions: [
    { id: "groceries", title: "Groceries", category: "Food", amount: 1250, direction: "expense" as const },
    { id: "uber", title: "Uber", category: "Transport", amount: 420, direction: "expense" as const },
    { id: "electricity", title: "Electricity Bill", category: "Utilities", amount: 1850, direction: "expense" as const },
    { id: "salary", title: "Salary", category: "Income", amount: 42000, direction: "income" as const },
  ] satisfies DemoTransaction[],
  demoLabel: "Demo environment · Synthetic data",
} as const;
