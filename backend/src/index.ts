// import { ApolloServer } from "apollo-server";
const express = require('express');
import { ApolloServer } from 'apollo-server-express';
const mongoose = require('mongoose');
import { typeDefs } from './schema';
// import { policies } from './mockData';
import Policy from '../models/Policy.model';
import { IPolicy } from '../types/Policies';
const connectDB = require('../config/db');

// Custom Date Scalar from Docs - https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/ + including Typescript

const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value: Date): Number {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value: Number): Date {
    return new Date(value as string | number | Date); // Convert incoming integer to Date
  },
  parseLiteral(ast: any) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const resolvers = {
  // Date: dateScalar,
  Query: {
    getPolicies: () => {
      Policy.find().then((policies: IPolicy[]): IPolicy[] => {
        return policies;
      });
    },
    // getPolicy: (args: any) => {
    //   return policies.find((policy) => policy.id === args.id);
    // },
  },
};

const app = express();
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // path: `http://localhost:4000/graphql`,
});

server.start().then(() => {
  server.applyMiddleware({
    app: app,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`🚀  Server ready at ${process.env.PORT}`);
});
