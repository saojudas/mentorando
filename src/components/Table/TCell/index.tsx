import React, { useCallback } from 'react';
import { format } from 'date-fns';

import { TableColumn } from '../THead';

import { Td } from './styles';

interface TCellProps {
  column: TableColumn;
  item: any;
}

const TCell: React.FC<TCellProps> = ({ column, item }) => {
  const render = useCallback(() => {
    const { type, property } = column;

    switch (type) {
      case 'date':
        return format(new Date(item[property]), 'dd/MM/yyyy');

      case 'datetime':
        return format(new Date(item[property]), 'dd/MM/yyyy HH:mm:ss');

      case 'money':
        return `R$ ${item[property].toFixed(2)} BRL`;

      default: {
        if (property.includes('.')) {
          return item[property.split('.')[0]][property.split('.')[1]];
        }

        return item[property];
      }
    }
  }, [column, item]);

  return (
    <Td>
      <span>{render()}</span>
    </Td>
  );
};

export default TCell;
