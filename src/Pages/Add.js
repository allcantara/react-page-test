import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Pages()  {
    const [data, setData] = useState('');
    const [color, setColor] = useState('');

    const cards = { 
        title: 'Fazendo',
        creatable: true,
        cards: [
          {
            // id: 6,
            content: 'Bruno Alcântara',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
          }
        ]
    }

    const card = JSON.stringify(cards)
    const cardItem = JSON.parse(card)
    // console.log(card)
    localStorage.setItem('Fazendo', card)

    function handleSubmit(e) {
        e.preventDefault();
        
        // localStorage.setItem(cards.title, cards);
        // console.log(localStorage.getItem(cards.title))
    }


    return (
    <Container>
        <div>
        <form onSubmit={handleSubmit}>
            <label>Título</label>
            <input 
                type="text" 
                placeholder="Texto"
                value={data}
                onChange={e => setData(e.target.value)}
            />
            {/* <label>Cor</label>
            <input 
                type="text" 
                placeholder="Texto"
                value={color}
                onChange={e => setColor(e.target.value)}
            /> */}
            <div className="botoes">
                <Link to="/" className="py-1">
                    <button type="button" className="btn btn-secondary">Sair</button>
                </Link>
                <button type="submit" className="btn btn-primary ml-2">Salvar</button>
            </div>
        </form>
        </div>
    </Container>
    );
}
