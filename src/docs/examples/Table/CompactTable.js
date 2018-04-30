import React from 'react';
import {Table,Avatar} from 'graphene-ui';

/** Compact Table: */
export default function CompactTable() {
  return (
    <Table>
      <Table.Header compact>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row compact>
          <Table.Cell>
            <Avatar size="mini"/>
          </Table.Cell>
          <Table.Cell>World</Table.Cell>
        </Table.Row>
        <Table.Row compact>
          <Table.Cell>Hello</Table.Cell>
          <Table.Cell>World</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
