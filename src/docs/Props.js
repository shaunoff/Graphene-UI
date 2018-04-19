import React from 'react';
import PropTypes from 'prop-types';
import Table from '../components/Table'

const Props = ({props}) => {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell style={{width: '600px'}}>Description</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Default</Table.HeaderCell>
        <Table.HeaderCell>Required</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
          {Object.keys(props).map(key => (
            <Table.Row key={key}>
              <Table.Cell>{key}</Table.Cell>
              <Table.Cell style={{width: '600px'}}>{props[key].description}</Table.Cell>
              <Table.Cell>{props[key].type.name}</Table.Cell>
              <Table.Cell>{props[key].defaultValue && props[key].defaultValue.value}</Table.Cell>
              <Table.Cell>{props[key].required && "Yes"}</Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
    // <table className="props">
    //   <thead>
    //     <tr>
    //       <th>Name</th>
    //       <th>Description</th>
    //       <th>Type</th>
    //       <th>Default</th>
    //       <th>Required</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //   {
    //     Object.keys(props).map(key => {
    //       return (
    //         <tr key={key}>
    //           <td>{key}</td>
    //           <td>{props[key].description}</td>
    //           <td>{props[key].type.name}</td>
    //           <td>{props[key].defaultValue && props[key].defaultValue.value}</td>
    //           <td>{props[key].required && "X"}</td>
    //         </tr>
    //       );
    //     })
    //   }
    //   </tbody>
    // </table>
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;
