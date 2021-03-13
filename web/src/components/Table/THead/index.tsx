import React, { useContext } from 'react';
import { IconBaseProps } from 'react-icons';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

export interface TableColumn {
  label: string;
  property: string;
  type?: 'string' | 'date' | 'datetime' | 'money';
  icon?: React.ComponentType<IconBaseProps>;
}

interface THeadProps {
  columns: TableColumn[];
}

const THead: React.FC<THeadProps> = ({ columns }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <tr>
        {columns.map((column: TableColumn) => {
          const Icon = column.icon;

          return (
            <th key={column.property}>
              {Icon && <Icon size={16} color={colors.grayDark} />}

              <strong>{column.label}</strong>
            </th>
          );
        })}
      </tr>
    </Container>
  );
};

export default THead;
