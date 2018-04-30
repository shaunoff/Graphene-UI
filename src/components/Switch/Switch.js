import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Icon} from 'graphene-ui'


class Switch extends Component {
  state = {
    on: this.props.on
  }
  toggle = () => {
    this.setState({on: !this.state.on}, () => {
      this.props.onClick && this.props.onClick(this.state.on)
    })
  }
  renderIcon(){
    return(
      <div style={{transition:'all 0.3s ease', position: 'relative', left: `${this.state.on ? 28 : 0}px`}}>
        <Icon color={this.state.on ? '#6bada7' : '#ccc'} size='20px' name={this.props.icon}/>
      </div>
    )
  }
  render(){
    return(
      <div onClick={this.toggle} style={{cursor: "pointer", height: '32px', width: '60px', border: `2px solid #${this.state.on ? '6bada7' : 'ccc'}`, borderRadius: '30px', ...this.props.style}}>
        {this.props.icon ? this.renderIcon() :
          (
              <div style={{transition:'all 0.3s ease', position: 'relative', left: `${this.state.on ? 28 : 0}px`, height: '24px', width: '24px', borderRadius: '30px',background: `#${this.state.on ? '6bada7' : 'ccc'}`,margin: '4px'}}></div>
          )
        }

      </div>

    )
  }
}

Switch.propTypes = {
  /** state of the switch*/
  on: PropTypes.bool,
  /** Color of the icon*/
  onClick: PropTypes.function,
  /** custom styles to switch container*/
  style: PropTypes.function
};
Switch.defaultProps = {
  on: false,
};

export default Switch
