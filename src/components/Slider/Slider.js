import React from 'react';
import PropTypes from 'prop-types';
import RSlider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';




class Slider extends React.Component {
  state={
    lowerBound: 20,
    upperBound: 40,
    value: [20, 40],
  }
  onSliderChange = (value) => {
    this.setState({value})
  }
  render() {
    return (
      <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange} />
    );
  }
}




export default Slider
