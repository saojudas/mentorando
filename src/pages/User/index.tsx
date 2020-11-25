import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
// import { useParams } from 'react-router-dom';

import AsideMenu from '../../components/AsideMenu';
import { ReactComponent as AdviserSVG } from '../../assets/adviser.svg';

import {
  Container,
  Title,
  ContentSection,
  Content,
  UserPhoto,
  Name,
  Description,
  MoreInfo,
  Videos,
} from './styles';
import Tag from '../../components/Tag';
import Button from '../../components/Button';
import CardVideo from '../../components/CardVideo';

// interface ParamsProps {
//   id?: string;
// }

const User: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);
  // const params = useParams<ParamsProps>();
  const adviser = true;

  return (
    <Container>
      <Title>
        <h1>Início</h1>
        <section>teste</section>
      </Title>
      <ContentSection>
        <AsideMenu />
        <Content>
          <UserPhoto>
            <img
              src="https://avatars3.githubusercontent.com/u/39928763?s=460&u=4f646846555a7597d42a9685c053df562a57a779&v=4"
              alt="A Lenda"
            />
          </UserPhoto>

          <Name>
            <span>Jhonatan da Costa</span>
            {adviser && <AdviserSVG />}
          </Name>

          <Description>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              velit, error illo alias asperiores debitis molestiae est in
              dignissimos pariatur placeat quasi a! Itaque culpa quidem
              suscipit! Cum, voluptate nam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nulla velit, error illo alias
              asperiores debitis molestiae est in dignissimos pariatur placeat
              quasi a! Itaque culpa quidem suscipit! Cum, voluptate nam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nulla velit,
              error illo alias asperiores debitis molestiae est in dignissimos
              pariatur placeat quasi a! Itaque culpa quidem suscipit! Cum,
              voluptate nam.
            </p>
          </Description>

          <MoreInfo>
            <Tag name="TECNOLOGIA" />

            <Button
              type="submit"
              color={title === 'light' ? colors.orange : colors.secondary}
            >
              Escolher conselheiro
            </Button>
          </MoreInfo>

          <h3>Videos</h3>

          <Videos>
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
            <CardVideo
              title="O último Code/Drops! Script que calcula horas de vídeo | Code/Drops #68"
              thumbnail="https://i.ytimg.com/vi/faekjlZuTFA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm1SmbuZtbsxkQj_Y_0qVzRAXqTA"
              preview="https://i.ytimg.com/an_webp/faekjlZuTFA/mqdefault_6s.webp?du=3000&sqp=CICU7P0F&rs=AOn4CLAx8EdCkDs5V1qf80YrTISIkgZhkQ"
            />
          </Videos>
        </Content>
      </ContentSection>
    </Container>
  );
};

export default User;
