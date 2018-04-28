import React from 'react';
import { Button } from 'graphene-ui';

/** Button with an Counter */
export default function BasicButton() {
	return (
		<Button count={10} icon="like" onClick={() => console.log('clicked')}>
			Click
		</Button>
	);
}
