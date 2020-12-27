import React from 'react';

import { TableColumn } from '../THead';
import TCell from '../TCell';

import { Tr } from './styles';

interface TRowProps {
  columns: TableColumn[];
  item: any;
}

const TRow: React.FC<TRowProps> = ({ columns, item }) => {
  return (
    <Tr key={item.id} isOperationBuy={item.type}>
      {columns.map((column: TableColumn) => (
        <TCell key={column.property} column={column} item={item} />
      ))}
    </Tr>
  );
};

export default TRow;
