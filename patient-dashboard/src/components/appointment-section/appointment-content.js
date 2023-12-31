import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TablePage = ({ appointments, renderTableHead }) => {
  const data_people = {
    columns: Object.keys(appointments[0] || {}),
    rows: appointments
  };

  return (
    <MDBTable autoWidth striped>
      <MDBTableHead>
        {renderTableHead()}
      </MDBTableHead>
      <MDBTableBody rows={data_people.rows} />
    </MDBTable>
  );
};

export default TablePage;