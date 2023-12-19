import { Container, Welcome, Section, WelcomeWrap } from './Page.styled';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Section>
      <Container $bottom="0px">
        <WelcomeWrap>
          <Welcome>
            <p>Welcom to Car Rental!</p>
            <p>
              Choose the best for you<Link to="/catalog">Here</Link>
            </p>
          </Welcome>
        </WelcomeWrap>
      </Container>
    </Section>
  );
};

export default HomePage;
