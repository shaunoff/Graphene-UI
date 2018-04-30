import React, { Component } from 'react';
import PropTypes from 'prop-types';

const contentStyle = (open,height,position,style) =>{
	return {
		display: open ? 'block' : 'none',
		top: `${position === 'top' ? -height - 15 : 45}px`,
		zIndex: '50',
		background: 'white',
		position: 'absolute',
		border: '2px solid #ccc',
		minWidth: '60px',
		minHeight: '30px',
		padding: '10px',
		borderRadius: '8px',
		// boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
		...style
	}
}


const Activator = ({toggleOpen,children}) => (
	<React.Fragment>
		{children(toggleOpen)}
	</React.Fragment>
)

class Content extends Component {
	state = {
		height: 0
	}
	componentDidUpdate(){
		if(this.state.height !== this.block.clientHeight){
			this.setState({height: this.block.clientHeight})
		}
	}
	render(){
		return (
			<div onClick={this.props.toggleOpen} ref={block => this.block = block} style={contentStyle(this.props.open,this.state.height, this.props.position,this.props.style)}>
				{this.props.children}
			</div>
		)
	}
}

Content.defaultProps = {
  position: 'top'
};

class Popup extends Component {
	state = {
		open: false
	}
	static Activator = Activator
	static Content = Content
	toggleOpen = () => {
		console.log('cheese')
		this.setState({open: !this.state.open})
	}
	getDimensions = (height) => {

	}
	render() {
		const {open} = this.state;
		const {toggleOpen} = this
		const {children,position} = this.props
		return (
			<div style={{position: 'relative'}}>
				{children(open,toggleOpen,position)}
			</div>
		)
	}
}

Popup.propTypes = {
  /** where the popups renders */
  position: PropTypes.string
};

Popup.defaultProps = {
  position: 'top'
};

export default Popup;
