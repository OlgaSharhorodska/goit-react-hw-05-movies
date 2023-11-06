import React from 'react';
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import MoveDetails from 'Pages/MovieDetails/MoveDetails';
import SearchFilm from 'components/SearchFilm/SearchFilm';

const Movies = () => {
  return (
    <main>
      <Section>
        <Container>{<SearchFilm /> ?? <MoveDetails />}</Container>
      </Section>
    </main>
  );
};

export default Movies;
