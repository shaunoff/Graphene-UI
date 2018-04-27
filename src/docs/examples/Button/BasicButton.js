import React from 'react';
import { Button } from 'graphene-ui';

/** Basic Button */
export default function BasicButton() {
	return (
		<Button onClick={() => console.log('clicked')}>
			Click
		</Button>
	);
}
