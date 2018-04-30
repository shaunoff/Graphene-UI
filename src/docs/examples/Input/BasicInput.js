import React from 'react';
import {Input} from 'graphene-ui';

/** ioioioooioio: */
export default function ExampleInput() {
  return <Input name="hello" onChange={(name,value)=>{console.log(name,value)}}/>
}
