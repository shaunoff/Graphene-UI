import React, { Component } from 'react';
import Radium from 'radium'

const popAnimation = Radium.keyframes({
  '50%': { transform: 'scale(1.2)' }
})
const styles = {
  base: {
    fontFamily: 'quicksand',
    fontSize: '16px',
    position: 'relative',
		width: "100px",
    fontWeight: '500',
    background: '#6bada7',
    borderRadius: '4px',
    border: '0px',
    color: 'white',
    margin: '10px',
    padding: '5px 15px 5px 15px',
    ':hover': {
      animation: 'x 0.8s ease',
      animationName: popAnimation
    },
    ':disabled': {
      background: '#ccc',
      color: "white",
      cursor: "not-allowed"
    },
  },
  block: {
  fontSize: "20px",
  color: 'red'
  }
};
const getButtonProps = () => {

}

class Button extends React.Component {
  handleClick = () => {
    console.log("clicked oioio")
  }
	getButtonProps = () =>{
		const {onClick, style, disabled} = this.props
		return {
			disabled: this.props.disabled,
			style : {...styles.base, ...style},
			onClick: ()=>{
				onClick && onClick()
				this.handleClick()
			}
		}
	}
  render() {
		const {onClick} = this.props
    return (
      <button
				{...this.getButtonProps()}
			>
        {this.props.children}
      </button>
    );
  }
}
export default Radium(Button)
