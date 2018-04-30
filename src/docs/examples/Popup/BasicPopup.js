import React, { Component } from 'react';
import {Button,Popup} from 'graphene-ui'

/** A basic accordion */
class BasicPopup extends Component {
	render() {
		return (
			<Popup>
				{(open, toggleOpen,position)=>(
					<div>
						<Button onClick={toggleOpen} icon='star'>
							HelloWorld
						</Button>
						<Popup.Content open={open}>
							<div>
								gjfhkjdhgkfd<br/>
								gfhgfdjhfg<br/>
								gjfhkjdhgkfd<br/>
								gfhgfdjhfg<br/>
								gjfhkjdhgkfd<br/>
								gfhgfdjhfg<br/>
								gjfhkjdhgkfd<br/>
								gfhgfdjhfg<br/>
								gjfhkjdhgkfd<br/>
								gfhgfdjhfg<br/>
							</div>
						</Popup.Content>
					</div>
				)}
			</Popup>
		);
	}

}

export default BasicPopup;
