import React, { useState } from "react";
import { ITableData, ITableRowData } from "../types/Table";
import { TABLE_TITLES } from "../util/constants/table";
import { compare } from "../util/helpers";
import TableRow from "./TableRow";

const Table = ({ tableRows }: ITableData) => {
  const [sortedField, setSortedField] = useState(" ");
  const [currentPage, setCurrentPage] = useState(0);
  const tableRowView = [[...tableRows].slice(0, 5), [...tableRows].slice(5, 10)];

  const handlePagination = (val: number) => {
    setCurrentPage(val-1);
  }

  const sortDataBy = (data: ITableRowData[], byKey: string) => {
    let sortedData = [...tableRowView[currentPage]] as any[];
    if (byKey === "customer.lastName") {
      sortedData = data.sort(function (a, b) {
        let x = a.customer.lastName.toLowerCase();
        let y = b.customer.lastName.toLowerCase();
        const result = compare(x, y);
        return result;
      });
    }
    if (byKey === "customer.dateOfBirth") {
      sortedData = data.sort(function (a, b) {
        let x = a.customer.dateOfBirth;
        let y = b.customer.dateOfBirth;
        const result = compare(x, y);
        return result;
      });
    }
    if (byKey === "insurance") {
      sortedData = data.sort(function (a, b) {
        let x = a.insurance;
        let y = b.insurance;
        const result = compare(x, y);
        return result;
      });
    }
    if (byKey === "provider") {
      sortedData = data.sort(function (a, b) {
        let x = a.provider.toLowerCase();
        let y = b.provider.toLowerCase();
        const result = compare(x, y);
        return result;
      });
    }
    if (byKey === "policyNumber") {
      sortedData = data.sort(function (a, b) {
        let x = a.policyNumber.toLowerCase();
        let y = b.policyNumber.toLowerCase();
        const result = compare(x, y);
        return result;
      });
    }
    if (byKey === "status") {
      sortedData = data.sort(function (a, b) {
        let x = a.status;
        let y = b.status;
        const result = compare(x, y);
        return result;
      });
    }
    if (byKey === "createdAt") {
      sortedData = data.sort(function (a, b) {
        let x = a.createdAt;
        let y = b.createdAt;
        const result = compare(x, y);
        return result;
      });
    }
    if (byKey === "startDate") {
      sortedData = data.sort(function (a, b) {
        let x = a.startDate;
        let y = b.startDate;
        const result = compare(x, y);
        return result;
      });
    }
    if (byKey === "endDate") {
      sortedData = data.sort(function (a, b) {
        let x = a.endDate;
        let y = b.endDate;
        const result = compare(x, y);
        return result;
      });
    }
    return sortedData;
  }

  return (
    <div className="flex flex-col">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {TABLE_TITLES.map((item) => {
                  return (
                    <th key={item.data} scope="col" className="table-head">
                      {item.name}
                      <span>
                        <button
                          type="button"
                          onClick={() => setSortedField(item.data)}
                        >
                          &nbsp;🔽
                        </button>
                      </span>
                    </th>
                  );
                })}
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortDataBy([...tableRowView[currentPage]], sortedField).map((item) => {
                return <TableRow key={item.id} tableRow={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-row ml-10">
        <button type="button" className={`pagination-box ${currentPage === 0 && 'pagination-box-active'}`} onClick={()=>{handlePagination(1)}}>1</button>
        <button type="button" className={`pagination-box ${currentPage === 1 && 'pagination-box-active'}`} onClick={()=>{handlePagination(2)}}>2</button>
      </div>
    </div>
  );
};

export default Table;
