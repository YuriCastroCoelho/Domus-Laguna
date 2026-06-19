import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background: #fff;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
`;

const PropertyCard = ({props}) => (
    <Card>
        <img src={props.image} alt={props.title} style={{width: '100%', borderRadius: '8px'}} />
        <h3>{props.title}</h3>
        <p>{props.location}</p>
        <strong>R$ {props.price}</strong>
    </Card>
);

export default PropertyCard;