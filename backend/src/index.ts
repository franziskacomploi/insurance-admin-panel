import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { policies } from './mockData';

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
      return policies;
    },
    getPolicy: (args: any) => {
      return policies.find((policy) => policy.id === args.id);
    },
  },
  Mutation: {
    updatePolicy: async (_: never, { policyName }: { policyName: string }) => {
      // await
      return policyName;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
