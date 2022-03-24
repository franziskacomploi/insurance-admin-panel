import React, { useEffect, useState } from "react";
import { ITableRow } from "../types/Table";
import Input from './Input/Input';
import RadioInput from './RadioInput/RadioInput';

const TableRow = ({ tableRow }: ITableRow) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [colorClass, setColorClass] = useState<string>('');

  const getStatus = (status: String) => {
    if(status === "ACTIVE") return "status-active";
    if(status === "PENDING") return "status-pending";
    if(status === "CANCELLED") return 'status-cancelled'
    return 'status-droppedOut'
  };

  useEffect(()=> {
    if (tableRow) {
      setColorClass(getStatus(tableRow.status.toString()))
    }
  }, [tableRow])

  const onSubmit = (value: string) => {
    console.log(value, 'VALUE')
    setIsEditable(false)
  }

  const handleClick = () => setIsEditable(!isEditable)

  const options = [{name: 'ACTIVE'}, {name: 'PENDING'}, {name: 'CANCELLED'}, {name: 'DROPPED_OUT'}]

  return (
    <tr>
      {tableRow && (
        <>
          <td className="table-cell">
            <Input onSubmit={onSubmit} initialValue={[tableRow.customer.firstName, tableRow.customer.lastName].join(' ')} isEditable={isEditable} />
          </td>
          <td className="table-cell">
            <Input onSubmit={onSubmit} initialValue={tableRow.customer.dateOfBirth.toString()} isEditable={isEditable} />
          </td>
          <td className="table-cell">
            <Input onSubmit={onSubmit} initialValue={tableRow.insurance.toString()} isEditable={isEditable} />
          </td>
          <td className="table-cell">
            <Input onSubmit={onSubmit} initialValue={tableRow.provider} isEditable={isEditable} />
          </td>
          <td className="table-cell">
            <Input onSubmit={onSubmit} initialValue={tableRow.policyNumber} isEditable={isEditable} />
          </td>
          <td className="table-cell">
            <span className={`${colorClass}`}>
              <RadioInput onSubmit={onSubmit} options={options} initialValue={tableRow.status.toString()} isEditable={isEditable} />
            </span>
          </td>
          <td className="table-cell">{tableRow.createdAt}</td>
          <td className="table-cell">
            <Input onSubmit={onSubmit} initialValue={tableRow.startDate.toString()} isEditable={isEditable} />
          </td>
          <td className="table-cell">
            <Input onSubmit={onSubmit} initialValue={tableRow.endDate.toString()} isEditable={isEditable} />
          </td>
          <td className="table-cell">
            <button type="button" onClick={handleClick} className="edit">Edit</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
