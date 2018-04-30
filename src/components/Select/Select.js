import React from 'react';
import {Popup,Button} from 'graphene-ui';
import PropTypes from 'prop-types';

class Selection extends React.Component {
  handleClick =() =>{
    this.props.onChange(this.props.label, this.props.name)
  }
  render(){
    return (
      <div onClick={this.handleClick} style={{fontWeight: 500, color: "rgb(88, 88, 88)"}}>
        {this.props.label}
      </div>
    )
  }
}

class Select extends React.Component {
  state = {
    selection: this.props.default || 'select'
  }
  onChange = (label,name) => {
    this.props.onChange && this.props.onChange(name)
    this.setState({selection: label})
  }
  static Selection = Selection
  render() {
    const {selection} = this.state
    const {onChange} = this
    return (
      <Popup>
				{(open, toggleOpen, position)=>(
					<div>
						<Button iconPosition="right" onClick={toggleOpen} icon='caratDown' style={{width: '150px'}}>
							{selection}
						</Button>
						<Popup.Content open={open}  position='bottom' style={{width: '130px'}}>
							<div onClick={toggleOpen} style={{display: 'flex', flexDirection: 'column'}}>
                {this.props.children({onChange, selection})}
							</div>
						</Popup.Content>
					</div>
				)}
			</Popup>
    )
  }
}



export default Select
