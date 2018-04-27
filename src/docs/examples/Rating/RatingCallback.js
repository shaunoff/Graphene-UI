import React from 'react';
import {Rating} from 'graphene-ui';

/** Callback can be triggered with the current score */
export default function ExampleRating() {
  return <Rating onClick={(score)=> alert(score)} score={3}/>
}
