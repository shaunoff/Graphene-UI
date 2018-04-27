import React, { Component } from 'react';
import {Accordion} from 'graphene-ui'

/** A basic accordion */
class BasicAccordion extends Component {
	render() {
		return (
			<Accordion width="500px">
				{({getProps}) => (
					<React.Fragment>
						<Accordion.Section {...getProps()} index={0} title="Section 1">
							Content
						</Accordion.Section>
						<Accordion.Section {...getProps()} index={1} title="Section 2">
							Content
						</Accordion.Section>
					</React.Fragment>
				)}
			</Accordion>
		);
	}

}

export default BasicAccordion;
