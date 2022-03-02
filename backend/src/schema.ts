import { gql } from "apollo-server";

export const typeDefs = gql`
  enum InsuranceType {
    Liability
    Household
    Health
  }

  enum PolicyStatus {
    Active
    Pending
    Cancelled
    Dropped
    out
  }

  scalar Date

  type Customer {
    firstName: String
    lastName: String
    dateOfBirth: Date
  }

  type Policy {
    id: ID!
    customer: Customer
    provider: String
    insurance: InsuranceType
    status: PolicyStatus
    policyNumber: String
    startDate: Date
    endDate: Date
    createdAt: Date
  }

  type Query {
    getPolicies: [Policy]
    getPolicy(id: ID!): Policy
  }
`;
