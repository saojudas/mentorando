import React, { useState, useEffect } from 'react';

import AsideMenu from '../../components/AsideMenu';
import Accordion from '../../components/Accordion';

import api from '../../services/api';

import { Container, Title, ContentSection, Content } from './styles';
import { Report } from '../../store/modules/report/interfaces';

const Reports: React.FC = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function loadReports() {
      const response = await api.get('reports');

      setReports(response.data);
    }

    loadReports();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Relatórios</h1>
        {/* <section>teste</section> */}
      </Title>
      <ContentSection>
        <AsideMenu />
        <Content>
          {reports.map((report: Report) => (
            <Accordion
              key={report.id}
              advisorName={report.advisor.name}
              studentName={report.students[0].name}
              date={new Date()}
              subject_matter={report.subject_matter}
              start_hour={report.start_hour}
              end_hour={report.end_hour}
            />
          ))}
        </Content>
      </ContentSection>
    </Container>
  );
};

export default Reports;
