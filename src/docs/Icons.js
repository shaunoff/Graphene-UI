import React, { Component } from 'react';
import icons from 'graphene-ui/Icon/icons'
import {Icon,Segment,Switch} from 'graphene-ui'

const iconsArray = (icons) => {
	const arr = []
	for (var key in icons){
		icons[key].name = key
		arr.push(icons[key])
	}
	return arr
}
class Icons extends Component {
	state = {
		on: true
	}
	toggleIcons = (on) => {
		this.setState({on})
	}
	render() {
		console.log(iconsArray(icons))
		return (
			<div>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<h3>Icons</h3>
					<Switch style={{marginLeft: '30px'}} on={this.state.on} onClick={this.toggleIcons}/>
				</div>

				{
					this.state.on && (
						<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gridGap: '15px'}}>
							{iconsArray(icons).map(icon => (
								<Segment style={{marginBottom: '15px',display: 'flex', justifyContent: 'center',flexDirection: 'column', alignItems: 'center'}}>
									<Icon size="30px" name={icon.name}/>
									<div style={{fontWeight: '500', marginTop: '10px'}}>
										{icon.name}
									</div>
								</Segment>
							))}
						</div>
					)
				}
			</div>
		);
	}

}

export default Icons;
