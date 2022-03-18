const mongoose = require('mongoose');
const Policy = require('../models/Policy.model');
const Customer = require('../models/Customer.model');
const connectDB = require('../config/db');

const policies = [
  {
    customer: '',
    provider: 'Austen Insurance Coop',
    insurance: 'Liability',
    status: 'PENDING',
    policyNumber: 'CD1289',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    customer: '',
    provider: 'Jane Health Inc.',
    insurance: 'Liability',
    status: 'ACTIVE',
    policyNumber: 'CD1S89',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    customer: '',
    provider: 'Austen Insurance Coop',
    insurance: 'Liability',
    status: 'ACTIVE',
    policyNumber: 'CD1S89',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    customer: '',
    provider: 'Austen Insurance Coop',
    insurance: 'Health',
    status: 'ACTIVE',
    policyNumber: 'CD1S89',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    customer: '',
    provider: 'Austen Insurance Coop',
    insurance: 'Household',
    status: 'PENDING',
    policyNumber: 'CD1S89',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
    customer: '',
    provider: 'Austen Insurance Coop',
    insurance: 'Household',
    status: 'PENDING',
    policyNumber: 'CD1S89',
    startDate: new Date('July 16, 1788'),
    endDate: new Date('July 16, 1816'),
    createdAt: new Date('July 16, 1786'),
  },
  {
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
    firstName: 'Fitzwilliam',
    lastName: 'Darcy',
    dateOfBirth: new Date('June 20, 1775'),
  },
  {
    firstName: 'Elizabeth',
    lastName: 'Bennet',
    dateOfBirth: new Date('December 16, 1775'),
  },
];

connectDB()
  .then(() => {
    return Customer.deleteMany();
  })
  .then(() => {
    return Policy.deleteMany();
  })
  .then(() => {
    return Customer.create(customers);
  })
  .then((customers) => {
    console.log(`Created ${customers.length} Customers.`);

    Customer.find().then((customers) => {
      let customer1 = customers[0]._id;
      let customer2 = customers[1]._id;

      // Customer 1
      policies[0].customer = customer1;
      policies[1].customer = customer1;
      policies[2].customer = customer1;
      policies[3].customer = customer1;
      policies[4].customer = customer1;
      policies[5].customer = customer1;

      // Customer 2
      policies[6].customer = customer2;
      policies[7].customer = customer2;
      policies[8].customer = customer2;
      policies[9].customer = customer2;
      policies[10].customer = customer2;
      policies[11].customer = customer2;

      Policy.create(policies).then((policies) => {
        console.log(`Created ${policies.length} Policies.`);
        mongoose.connection.close();
      });
    });
  });

// run $node bin/seed.js to get the seed into the database!
