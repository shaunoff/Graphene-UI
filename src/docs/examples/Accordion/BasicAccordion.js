import React, { Component } from 'react';
import {Accordion} from 'graphene-ui'
class BasicAccordion extends Component {

	render() {
		return (
			<Accordion>
				{({getProps}) => (
					<React.Fragment>
						<Accordion.Section {...getProps()} index={0} title="Section 1">
							ghjfdgjfdhgfkjdhgjkdfhgjkdfhgkfjd
						</Accordion.Section>
						<Accordion.Section {...getProps()} index={1} title="Section 2">
							ghjfdgjfdhgfkjdhgjkdfhgjkdfhgkfjd
						</Accordion.Section>
						<Accordion.Section {...getProps()} index={2} title="Section 3">
							ghjfdgjfdhgfkjdhgjkdfhgjkdfhgkfjd
						</Accordion.Section>
						<Accordion.Section {...getProps()} index={3} title="Section 4">
							ghjfdgjfdhgfkjdhgjkdfhgjkdfhgkfjd
						</Accordion.Section>
					</React.Fragment>
				)}
			</Accordion>
		);
	}

}

export default BasicAccordion;
