import React from 'react';
import CharCard from '../CharCard';
import { List, Title } from './style';

const Characters = ({ characters }) => {
  return (
    <>
      <Title>Rick and Morty - Characters</Title>
      <List>
        {characters.map((elem) => (
          <CharCard
            key={elem.id}
            name={elem.name}
            image={elem.image}
            status={elem.status}
          />
        ))}
      </List>
    </>
  );
};

export default Characters;
