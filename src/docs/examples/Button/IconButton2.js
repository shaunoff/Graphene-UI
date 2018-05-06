import React from 'react';
import { Button } from 'graphene-ui';

/** Button with an Icon */
export default function BasicButton2() {
	return (
		<Button icon="arrowRightCircle" onClick={() => console.log('clicked')}>
			Click
		</Button>
	);
}
