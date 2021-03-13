import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AsideMenu from '../../components/AsideMenu';
import CardUser from '../../components/CardUser';

import api from '../../services/api';
import { Student } from '../../store/modules/auth/interfaces';

import { Container, Title, ContentSection, Content, Users } from './styles';

const Students: React.FC = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      setStudents(response.data);
    }

    loadStudents();
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
            {students.map((student: Student) => (
              <Link to={`/user?user_id=${student.user.id}`} key={student.id}>
                <CardUser
                  name={student.name}
                  area={student.user.area?.name}
                  avatar={student.user.avatar?.url}
                  isAdvisor={student.is_advisor}
                />
              </Link>
            ))}
          </Users>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default Students;
