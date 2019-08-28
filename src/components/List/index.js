import React from 'react';
import { Link } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <Link to="/adicionar">
            <button type="button">
              <MdAdd size={24} color="#fff" />
            </button>
          </Link>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => 
          <Card 
            key={card.id}
            listIndex={listIndex}
            index={index} 
            data={card} 
          />)}
      </ul>
    </Container>
  );
}
