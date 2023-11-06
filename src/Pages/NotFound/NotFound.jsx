import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import React from 'react';
import { NotFoundMessage } from './NotFound.styled';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <Section>
        <Container>
          <NotFoundMessage>
            <div>Page not found</div>
            <div>
              You should follow the{' '}
              <Link className="linkToHome" to={'/'}>
                Home page
              </Link>
            </div>
          </NotFoundMessage>
        </Container>
      </Section>
    </main>
  );
};

export default NotFound;
