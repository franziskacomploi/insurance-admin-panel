import React from 'react'
import { IPaginationBoxProps } from '../types/Table'

const PaginationBox = ({currentPage, i, onClick}: IPaginationBoxProps ) => {
  return (
    <button type="button" className={`pagination-box ${currentPage === i && 'pagination-box-active'}`} onClick={onClick}>{i + 1}</button>
  )
}

export default PaginationBox