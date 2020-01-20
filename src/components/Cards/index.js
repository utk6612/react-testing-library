import React, { useState } from 'react';
import { mockCardData } from './data';
import Card from './card';

const Cards = () => {
    const [cardsData, setCardsData] = useState(mockCardData);
    const deleteCard = (index) => {
        setCardsData(state => [...state.slice(0, index), ...state.slice(index + 1)]);
    }
    return (
        <div>
            <div data-testid={"custom-id"}>
                {
                    // Array(numberOfCards).fill().map((_, index) => <p key={index}>{index}</p>)
                    cardsData.map(({ name, id }, index) => <Card name={name} key={`card-${id}`} onDelete={() => deleteCard(index)} buttonTestId={`custom-id-${index}`} />)
                }
            </div>
            <button data-testid="add-button" onClick={() => setCardsData(state => [...state, { name: 'b', id: cardsData.length + 1 }])}>Button</button>

        </div>
    )
};

export default Cards;