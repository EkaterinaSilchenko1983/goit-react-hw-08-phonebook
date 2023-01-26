import { RiContactsBookFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 50px);
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 48;
  text-align: center;
  color: #e57373;
  gap: 100px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  return (
    <Container>
      <Title>
        Phonebook manager welcome page{' '}
        <IconContext.Provider value={{ color: '#E6CEAA', size: 200 }}>
          <Icon>
            <RiContactsBookFill />
          </Icon>
        </IconContext.Provider>
      </Title>
    </Container>
  );
}
