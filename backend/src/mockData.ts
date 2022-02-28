export const policies = [
  {
    id: "001",
    customer: {
      firstName: "Elizabeth",
      lastName: "Bennet",
      dateOfBirth: new Date("December 16, 1775"),
    },
    provider: "Jane Health Inc.",
    insurance: "Health",
    status: "Active",
    policyNumber: "AB2819",
    startDate: new Date("July 16, 1776"),
    endDate: new Date("July 16, 1805"),
    createdAt: new Date("July 16, 1776"),
  },
  {
    id: "002",
    customer: {
      firstName: "Fitzwilliam",
      lastName: "Darcy",
      dateOfBirth: new Date("June 20, 1775"),
    },
    provider: "Austen Insurance Coop",
    insurance: "Liability",
    status: "Pending",
    policyNumber: "CD1289",
    startDate: new Date("July 16, 1788"),
    endDate: new Date("July 16, 1816"),
    createdAt: new Date("July 16, 1786"),
  },
];
