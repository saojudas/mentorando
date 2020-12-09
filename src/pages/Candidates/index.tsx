import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AsideMenu from '../../components/AsideMenu';
import CardUser from '../../components/CardUser';

import api from '../../services/api';
import { Candidate } from '../../store/modules/auth/interfaces';

import { Container, Title, ContentSection, Content, Users } from './styles';

const Candidates: React.FC = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function loadCandidates() {
      const response = await api.get('candidates');

      setCandidates(response.data);
    }

    loadCandidates();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Início</h1>
        {/* <section>teste</section> */}
      </Title>
      <ContentSection>
        <AsideMenu />
        <Content>
          <Users>
            {candidates.map((candidate: Candidate) => (
              <Link
                to={`/user?user_id=${candidate.student.user.id}`}
                key={candidate.id}
              >
                <CardUser
                  name={candidate.student.name}
                  area={candidate.student.user.area?.name}
                  avatar={candidate.student.user.avatar?.url}
                />
              </Link>
            ))}
          </Users>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default Candidates;
