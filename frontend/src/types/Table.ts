import { Key, MouseEventHandler } from "react";

enum InsuranceType {
  Liability,
  Household,
  Health,
}
enum PolicyStatus {
  Active,
  Pending,
  Cancelled,
  Dropped,
  out,
}

export interface ITableRow {
  tableRow?: {
    id: Key;
    customer: {
      firstName: String;
      lastName: String;
      dateOfBirth: Date;
    };
    provider: String;
    insurance: InsuranceType;
    status: PolicyStatus;
    policyNumber: String;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
  };
}

export interface ITableRowData {
  id: Key;
  customer: {
    firstName: String;
    lastName: String;
    dateOfBirth: Date;
  };
  provider: String;
  insurance: InsuranceType;
  status: PolicyStatus;
  policyNumber: String;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
}

export interface ITableData {
  tableRows: ITableRowData[];
}

export interface IPaginationBoxProps {
  currentPage: number;
  i: number;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
