import React from 'react';
import { Button } from 'graphene-ui';

/** Button with an Icon */
export default function BasicButton() {
	return (
		<Button icon="heart" onClick={() => console.log('clicked')}>
			Click
		</Button>
	);
}
