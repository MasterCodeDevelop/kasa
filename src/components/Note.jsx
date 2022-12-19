import React from 'react'
import fullStar from '../assets/icons/full-star.svg';
import emptyStar from '../assets/icons/empty-star.svg';

export default function Note({note}) {
    const counter=[1,2,3,4,5]
    return counter.map(e => (note >= e)
        ?   <img src={fullStar} alt="full star"/>
        :   <img src={emptyStar} alt="empty star"/>
    );
}
