import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'graphene-ui'


/** A super lame component that says Hello with a custom message. */
class Avatar extends Component {
  render() {
    return (
      <div style={{background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: this.props.size === 'mini' ? '25px' : '50px', height: this.props.size === 'mini' ? '25px' : '50px', border:'2px solid #ccc', borderRadius: '50px'}}>
        <Icon size="30px" color="#6bada7" name="user"/>
      </div>
    );
  }

}

Avatar.propTypes = {
  /** avatar*/
  image: PropTypes.string,
};
Avatar.defaultProps = {
  image: null,
};


export default Avatar;
