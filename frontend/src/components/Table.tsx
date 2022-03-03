import React from "react";
import { ITableData } from "../types/Table";
import { TABLE_TITLES } from "../util/constants/table";
import TableRow from "./TableRow";

const Table = ({tableRows}: ITableData) => {
  return (
    <div className="flex flex-col">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                  {TABLE_TITLES.map((item) => {
                      return (
                        <th key={item} scope="col" className="table-head">
                        {item}
                      </th>
                      )
                  })}
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
            {tableRows.map((item) => {
                return <TableRow key={item.id} tableRow={item} />
            })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
