import React, {Component} from 'react'
import PropTypes from 'prop-types';
import icons from './icons'

class Icon extends Component {
  render(){
    const size = this.props.size || "16px"
		const color = this.props.color || "#6bada7"

    return(
      <svg
				xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" viewBox="0 0 20 20" style={{width: `${size}`,height: `${size}`,enableBackground:'new 0 0 449.406 449.406', padding: '5px', display: 'flex', alignItems: 'center'}} xmlSpace="preserve">
	      <g>
					{icons[this.props.name].paths && icons[this.props.name].paths.map(path => (
						<path key={path} d={path} fill={color}/>
					))}
          {icons[this.props.name].circles && icons[this.props.name].circles.map((circle,index) => (
						<circle key={circle} cx={circle.x} cy={circle.y} r={circle.r} style={{...circle.style, stroke: color}}/>
					))}
	      </g>
      </svg>

    )
  }
}

Icon.propTypes = {
  /** Color of the icon*/
  color: PropTypes.string,
  /** The name of the icon*/
  name: PropTypes.string.isRequired
};
Icon.defaultProps = {
  color: "#6bada7",
};

export default Icon
