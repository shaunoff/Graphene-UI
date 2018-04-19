import React from 'react';
import {Button} from 'graphene-ui';

/** Custom message */
export default function BasicButton() {
  return (
    <Button onClick={()=>console.log('boooottttthhhhh')}>Hello</Button>
  )
}
