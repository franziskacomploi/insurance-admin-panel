const policies = [
  {
    id: '001',
    customer: {
      firstName: 'Elizabeth',
      lastName: 'Bennet',
      dateOfBirth: new Date('December 16, 1775'),
    },
    provider: 'Jane Health Inc.',
    insurance: 'Health',
    status: 'ACTIVE',
    policyNumber: 'AB2819',
    startDate: new Date('July 16, 1776'),
    endDate: new Date('July 16, 1805'),
    createdAt: new Date('July 16, 1776'),
  },
  {
    id: '002',
    customer: {
      firstName: 'Fitzwilliam',
      lastName: 'Darcy',
      dateOfBirth: new Date('June 20, 1775'),
    },
    provider: 'Austen Insurance Coop',
    insurance: 'Liability',
    status: 'PENDING',
    policyNumber: 'CD1289',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    id: '003',
    customer: {
      firstName: 'Elizabeth',
      lastName: 'Bennet',
      dateOfBirth: new Date('December 16, 1775'),
    },
    provider: 'Austen Insurance Coop',
    insurance: 'Liability',
    status: 'CANCELLED',
    policyNumber: 'CJ8289',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    id: '004',
    customer: {
      firstName: 'Fitzwilliam',
      lastName: 'Darcy',
      dateOfBirth: new Date('June 20, 1775'),
    },
    provider: 'Jane Health Inc.',
    insurance: 'Liability',
    status: 'ACTIVE',
    policyNumber: 'CD1S89',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    id: '005',
    customer: {
      firstName: 'Fitzwilliam',
      lastName: 'Darcy',
      dateOfBirth: new Date('June 20, 1775'),
    },
    provider: 'Austen Insurance Coop',
    insurance: 'Liability',
    status: 'ACTIVE',
    policyNumber: 'CD1S89',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    id: '006',
    customer: {
      firstName: 'Elizabeth',
      lastName: 'Bennet',
      dateOfBirth: new Date('December 16, 1775'),
    },
    provider: 'Jane Health Inc.',
    insurance: 'Household',
    status: 'DROPPED_OUT',
    policyNumber: 'CJ8289',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    id: '007',
    customer: {
      firstName: 'Elizabeth',
      lastName: 'Bennet',
      dateOfBirth: new Date('December 16, 1775'),
    },
    provider: 'Jane Health Inc.',
    insurance: 'Liability',
    status: 'ACTIVE',
    policyNumber: 'CJ8289',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    id: '008',
    customer: {
      firstName: 'Elizabeth',
      lastName: 'Bennet',
      dateOfBirth: new Date('December 16, 1775'),
    },
    provider: 'Jane Health Inc.',
    insurance: 'Liability',
    status: 'DROPPED_OUT',
    policyNumber: 'CJ8289',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    id: '009',
    customer: {
      firstName: 'Fitzwilliam',
      lastName: 'Darcy',
      dateOfBirth: new Date('June 20, 1775'),
    },
    provider: 'Austen Insurance Coop',
    insurance: 'Health',
    status: 'ACTIVE',
    policyNumber: 'CD1S89',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    id: '010',
    customer: {
      firstName: 'Fitzwilliam',
      lastName: 'Darcy',
      dateOfBirth: new Date('June 20, 1775'),
    },
    provider: 'Austen Insurance Coop',
    insurance: 'Household',
    status: 'PENDING',
    policyNumber: 'CD1S89',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    id: '011',
    customer: {
      firstName: 'Fitzwilliam',
      lastName: 'Darcy',
      dateOfBirth: new Date('June 20, 1775'),
    },
    provider: 'Austen Insurance Coop',
    insurance: 'Household',
    status: 'PENDING',
    policyNumber: 'CD1S89',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    id: '012',
    customer: {
      firstName: 'Elizabeth',
      lastName: 'Bennet',
      dateOfBirth: new Date('December 16, 1775'),
    },
    provider: 'Austen Insurance Coop',
    insurance: 'Household',
    status: 'ACTIVE',
    policyNumber: 'CD1S99',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
];

const customers = [
  {
    firstName: 'Elizabeth',
    lastName: 'Bennet',
    dateOfBirth: new Date('December 16, 1775'),
  },
  {
    firstName: 'Fitzwilliam',
    lastName: 'Darcy',
    dateOfBirth: new Date('June 20, 1775'),
  },
];
