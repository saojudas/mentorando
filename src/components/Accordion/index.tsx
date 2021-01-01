import React, { useState, useCallback, useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { format } from 'date-fns';
import Ink from 'react-ink';

import { Container, Title, Content, Item } from './styles';

interface AccordionProps {
  advisorName: string;
  studentName: string;
  date: Date;
  subject_matter: string;
  start_hour: Date;
  end_hour: Date;
}

const Accordion: React.FC<AccordionProps> = ({
  advisorName,
  studentName,
  subject_matter,
  date,
  start_hour,
  end_hour,
}) => {
  const { colors } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const parsedDate = useMemo(() => format(new Date(date), 'dd/MM/yyyy'), [
    date,
  ]);

  return (
    <Container>
      <Title onClick={toggleOpen}>
        <Ink />

        <p>
          O(a) conselheiro(a) <span>{advisorName}</span> auxiliou o(a) aluno(a)
          <span> {studentName}</span> na data <span>{parsedDate}</span> das
          <span> {start_hour}</span> às <span>{end_hour}</span>
        </p>

        {isOpen ? (
          <FiChevronUp size={16} color={colors.primary} />
        ) : (
          <FiChevronDown size={16} color={colors.primary} />
        )}
      </Title>

      <Content isOpen={isOpen}>
        <Item>
          <div style={{ width: 200 }}>
            <strong>Turma do conselheiro:</strong>

            <p>CCP1AN-MCA1</p>
          </div>

          <div style={{ width: 200 }}>
            <strong>Turma do aluno:</strong>

            <p>CCP2AN-MCA1</p>
          </div>
        </Item>

        <Item>
          <div>
            <strong>Assunto abordado:</strong>

            <p style={{ whiteSpace: 'break-spaces' }}>{subject_matter}</p>
          </div>
        </Item>
      </Content>
    </Container>
  );
};

export default Accordion;
