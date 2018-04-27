import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium'
import Star from './Star';
import StarFill from './StarFill';





class Rating extends React.Component {
  state = {
    score: this.props.score,
    tempScore: null
  }
  changeTempScore = (score) => {
    if(this.props.disabled) return
    this.setState({tempScore: score})
  }
  setScore = (score) => {
    if(this.props.disabled) return
    this.setState({score},()=>this.props.onClick && this.props.onClick(score))

  }
  render() {
    const stars = new Array(this.props.stars).fill("star")
    return (
      <div style={{display: 'flex'}}>
        {stars.map((star,index) => <Star key={index} index={index} setScore={this.setScore} changeTemp={this.changeTempScore} filled={index+1 <= this.state.score || index <= this.state.tempScore}/>)}
      </div>
    );
  }
}

Rating.propTypes = {
  /** The total number of stars*/
  stars: PropTypes.number,
  /** The current rating*/
  score: PropTypes.number,
  /** Prevent the rating from being changed*/
  disabled: PropTypes.bool,
  /** Callback triggered with current score*/
  onClick: PropTypes.function,
};
Rating.defaultProps = {
  stars: 5,
  score: 1,
};

export default Radium(Rating)
