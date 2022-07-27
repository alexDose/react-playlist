import React, {useState} from 'react';
import {NumberStyle, Rating} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} setNumber={x=>x}/>
export const Rating1 = () => <Rating value={1} setNumber={x=>x}/>
export const Rating2 = () => <Rating value={2} setNumber={x=>x}/>
export const Rating3 = () => <Rating value={3} setNumber={x=>x}/>
export const Rating4 = () => <Rating value={4} setNumber={x=>x}/>
export const Rating5 = () => <Rating value={5} setNumber={x=>x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<NumberStyle>(0)
   return <Rating value={rating} setNumber={setRating}/>
}