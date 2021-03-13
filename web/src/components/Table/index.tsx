import React from 'react';

import THead, { TableColumn } from './THead';
import TBody from './TBody';

import { Container } from './styles';

interface TableProps {
  columns: TableColumn[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <Container>
      <THead columns={columns} />
      <TBody columns={columns} data={data} />
    </Container>
  );
};

export default Table;
