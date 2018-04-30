import React from 'react';
import {Select} from 'graphene-ui';

/** Basic Select: */
export default function ExampleSelect() {
  return (
    <Select default="one" onChange={(selection)=>console.log(selection)}>
      {({selection,open,onChange})=>(
        <React.Fragment>
          <Select.Selection name="one" label="One" onChange={onChange}/>
          <Select.Selection name="two" label="Two" onChange={onChange}/>
          <Select.Selection name="three" label="Three" onChange={onChange}/>
        </React.Fragment>
      )}
    </Select>
  )
}
