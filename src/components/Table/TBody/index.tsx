import React from 'react';

import TRow from '../TRow';
import { TableColumn } from '../THead';

import { Container } from './styles';

interface TBodyProps {
  columns: TableColumn[];
  data: any[];
}

const TBody: React.FC<TBodyProps> = ({ columns, data }) => {
  return (
    <Container>
      {data.map(item => (
        <TRow key={item.id} columns={columns} item={item} />
      ))}
    </Container>
  );
};

export default TBody;
