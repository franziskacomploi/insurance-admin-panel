import React from 'react'
import { gql, useQuery } from '@apollo/client';
import Table from '../components/Table';
import Loader from '../components/Loader';
import Error from '../components/Error';

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

    if (loading) return <Loader />;
    if (error) return <Error error={error} />;

    return (
        <>
            <h1 className="text-3xl text-gray-800 text-center my-4">Your Insurance Panel</h1>
            <Table tableRows={data.getPolicies} />
        </>
    )
}

export default Dashboard