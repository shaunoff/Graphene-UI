import React from 'react';
import {Table} from 'graphene-ui';

/** Basic Table: */
export default function ExampleInput() {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Hello</Table.Cell>
          <Table.Cell>World</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Hello</Table.Cell>
          <Table.Cell>World</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
