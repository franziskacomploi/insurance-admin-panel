import { table } from "console";
import React, { useEffect, useState } from "react";
import { ITableData, ITableRowData } from "../types/Table";
import { TABLE_PER_PAGE, TABLE_TITLES } from "../util/constants/table";
import { compare, getPageItems } from "../util/helpers";
import PaginationBox from "./PaginationBox";
import TableRow from "./TableRow";

const Table = ({ tableRows }: ITableData) => {
  const [sortedField, setSortedField] = useState(" ");
  const [currentPage, setCurrentPage] = useState(0);
  const [tableRowView, setTableRowView] = useState(getPageItems(tableRows, TABLE_PER_PAGE))

  const handlePagination = (val: number) => {
    setCurrentPage(val);
  }

  useEffect(() => {
    const sortDataBy = (data: ITableRowData[], byKey: string) => {
      let sortedData = [...data] as ITableRowData[];
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
      setTableRowView(getPageItems(sortedData, TABLE_PER_PAGE));
    }

    sortDataBy([...tableRows], sortedField)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedField])



  return (
    <div className="flex flex-col gap-4">
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
              {tableRowView[currentPage].map((item) => {
                return <TableRow key={item.id} tableRow={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-row ml-10">
        {tableRowView.map((_,i) => {
          return <PaginationBox key={i} currentPage={currentPage} i={i} onClick={()=>{handlePagination(i)}} />
        })}
      </div>
    </div>
  );
};

export default Table;
