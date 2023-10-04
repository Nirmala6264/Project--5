import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Invoice ID', width: 70 },
  { field: 'date', headerName: 'Date',type:'number' width: 130 },
  { field: 'customer', headerName: 'Customer', width: 130 },
  {
    field: 'Payable Amount',
    headerName: 'Payable Amount',
    type: 'number',
    width: 90,
  },
  {
    field: 'Paid Amount',
    headerName: 'Paid Amount',
    type: 'number',
    width: 90,
  },
  {
    field: 'Due',
    headerName: 'Due',
    type: 'number',
    width: 90,
  }
];

const rows = [
  { id: #AHGA68, date: 23/09/2022, customer: 'Jacob Marcus', Payable Amount: 35 },
  { id: #AHGA68, date: 23/09/2022, customer: 'Jacob Marcus', Payable Amount: 42 },
  { id: #AHGA68, date: 23/09/2022, customer: 'Jacob Marcus', Payable Amount: 45 },
  { id: #AHGA68, date: 23/09/2022, customer: 'Jacob Marcus', Payable Amount: 16 },
  { id: #AHGA68, date: 23/09/2022, customer: 'Jacob Marcus', Payable Amount: null },
  { id: #AHGA68, date: 23/09/2022, customer: 'Jacob Marcus', age: 150 },
  { id: #AHGA68, date: 23/09/2022, customer: 'Jacob Marcus', age: 44 },
  { id: #AHGA68, date: 23/09/2022, customer: 'Jacob Marcus', age: 36 },
  { id: #AHGA68, date: 23/09/2022, customer: 'Jacob Marcus', age: 65 },
];

export default function Table() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}