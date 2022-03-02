import React from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_POLICIES = gql`
    query Query {
        getPolicies {
        id
        customer {
            dateOfBirth
            firstName
            lastName
        }
        provider
        insurance
        status
        policyNumber
        startDate
        endDate
        createdAt
        }
    }
`;


const Dashboard = () => {
    const { data, loading, error } = useQuery(GET_POLICIES);
  return (
    <>
    {console.log(data, 'DATA')}
        <h1 className="text-3xl">Admin Panel</h1>
    </>
  )
}

export default Dashboard