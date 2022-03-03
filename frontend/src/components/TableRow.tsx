import React from "react";
import { ITableRow } from "../types/Table";

const TableRow = ({ tableRow }: ITableRow) => {

  const getStatus = (status: String) => {
    if(status === "ACTIVE") return "status-active";
    if(status === "PENDING") return "status-pending";
    if(status === "CANCELLED") return 'status-cancelled'
    return 'status-droppedOut'
  };

  return (
    <tr>
      {tableRow && (
        <>
          <td className="table-cell">
            {tableRow.customer.firstName} {tableRow.customer.lastName}
          </td>
          <td className="table-cell">{tableRow.customer.dateOfBirth}</td>
          <td className="table-cell">{tableRow.insurance}</td>
          <td className="table-cell">{tableRow.provider}</td>
          <td className="table-cell">{tableRow.policyNumber}</td>
          <td className="table-cell">
            <span className={`${getStatus(tableRow.status as unknown as String)}`}>{tableRow.status}</span>
          </td>
          <td className="table-cell">{tableRow.createdAt}</td>
          <td className="table-cell">{tableRow.startDate}</td>
          <td className="table-cell">{tableRow.endDate}</td>
          <td className="table-cell">
            <span className="edit">Edit</span>
          </td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
