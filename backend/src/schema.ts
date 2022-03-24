import { gql } from 'apollo-server';

export const typeDefs = gql`
  enum InsuranceType {
    Liability
    Household
    Health
  }

  enum PolicyStatus {
    ACTIVE
    PENDING
    CANCELLED
    DROPPED_OUT
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

  type Mutation {
    updatePolicy(policyName: String): String
  }
`;
