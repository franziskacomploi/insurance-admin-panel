# Fullstack Code Project

In this code challenge you'll need to create a simple admin panel from scratch. It would need to have a single table view to list insurance policies showcasing all the various field they may have.

The [frontend](./frontend) part would communicate with the [backend](./backend) through a GraphQL API. You need to implement both.

We've generated some boilerplate for you to get started.

## The Code

Part 1

- Initially I started to setup the graphQL server on localhost:4000. For that I included a schema that corresponds to the data structure.
- Afterwards I checked that the Apollo Server is running.
- To work with data, some sample data was created.

Part 2

- Setting up the Query for the Frontend was next. To be able to use the sample data in the frontend, I setup the Apollo client and served it to the ApolloProvider.
- Then I queried the data, using the GraphQL Explorer
  [GraphQL Explorer](https://postimg.cc/YvgW4xvF)

Part 3

- Data is displayed in a Table View
- Sorting on each table column is implemented
- Pagination is added to the table
- Frontend is getting polished 🚀

## Task

1. On the [backend](./backend), change the GraphQL schema to reflect the [Data structure](#Data-structure)
2. On the [frontend](./frontend), fetch the data returned by the GraphQL endpoint with the help of the [Apollo client](https://www.apollographql.com)
3. On the [frontend](./frontend), display all the data returned by the endpoint in a table with the help of [tailwindcss](https://tailwindcss.com)
   - At least several fields should be editable in place
   - The table should have pagination and sorting on each of the columns
   - (Bonus) Add a text search input
   - (Bonus) Let the admin filter policies by insurance type or other fields
4. (Bonus) Package the app with Docker
5. (Bonus) Authenticate admins using login/password
6. (Bonus) Create more screens (e.g. customer profile, policy page…)

### Data structure

To make it all work, you have to define a [GraphQL schema first](https://www.apollographql.com/docs/apollo-server/schema/schema/). No need to back it with a real database, however this would make sense to demonstrate the "edit" function.
Each policy should have at least the following fields:

#### Policy

| fields         | type                            | comment                                       |
| -------------- | ------------------------------- | --------------------------------------------- |
| customer       | [Customer](#Customer)           | Object holding the customer's informations    |
| provider       | string                          | Name of the provider (Allianz, AXA…)          |
| insurance type | [InsuranceType](#InsuranceType) | Type of the insurance (Liability, Household…) |
| status         | [PolicyStatus](#PolicyStatus)   | Status of the insurance (Active, Cancelled)   |
| policyNumber   | string                          | Used to identify the policy                   |
| startDate      | date                            | Date when the policy should start             |
| endDate        | date                            | Date when the policy ends                     |
| createdAt      | date                            | Date when the record was created              |

#### Customer

| fields      | type   | comment                  |
| ----------- | ------ | ------------------------ |
| firstName   | string | Customer’s first name    |
| lastName    | string | Customer’s last name     |
| dateOfBirth | date   | Customer’s date of birth |

#### InsuranceType

InsuranceType can be of `Liability`, `Household`, `Health`

#### PolicyStatus

PolicyStatus can be of `Active`, `Pending`, `Cancelled` and `Dropped out`

## Challenge Original

This challenge can be found here: https://github.com/getPopsure/fullstack-engineer-challenge
