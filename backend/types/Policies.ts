enum InsuranceType {
  Liability,
  Household,
  Health,
}

enum PolicyStatus {
  ACTIVE,
  PENDING,
  CANCELLED,
  DROPPED_OUT,
}

export interface ICustomer {
  firstName: String;
  lastName: String;
  dateOfBirth: Date;
}

export interface IPolicy {
  customer: ICustomer;
  provider: String;
  insurance: InsuranceType;
  status: PolicyStatus;
  policyNumber: String;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
}
