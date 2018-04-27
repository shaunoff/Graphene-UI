import React, {Component} from 'react'

const filled = "M16.72,12.21a1.92,1.92,0,0,0-.52,1.67l.64,3.91A1.86,1.86,0,0,1,15.06,20a1.76,1.76,0,0,1-.84-.22l-3.38-1.85a1.71,1.71,0,0,0-1.68,0L5.78,19.78a1.76,1.76,0,0,1-.84.22,1.86,1.86,0,0,1-1.78-2.21l.64-3.91a1.92,1.92,0,0,0-.52-1.67L.55,9.43a1.9,1.9,0,0,1,1-3.21l3.78-.57a1.81,1.81,0,0,0,1.36-1L8.38,1.05a1.77,1.77,0,0,1,3.24,0l1.69,3.56a1.81,1.81,0,0,0,1.36,1l3.78.57a1.9,1.9,0,0,1,1,3.21Z"
const unfilled = "M19.45,9.43a1.9,1.9,0,0,0-1-3.21l-3.78-.57a1.81,1.81,0,0,1-1.36-1L11.62,1.05a1.77,1.77,0,0,0-3.24,0L6.69,4.61a1.81,1.81,0,0,1-1.36,1l-3.78.57a1.9,1.9,0,0,0-1,3.21l2.73,2.78a1.92,1.92,0,0,1,.52,1.67l-.64,3.91A1.86,1.86,0,0,0,4.94,20a1.76,1.76,0,0,0,.84-.22l3.38-1.85a1.71,1.71,0,0,1,1.68,0l3.38,1.85a1.76,1.76,0,0,0,.84.22,1.86,1.86,0,0,0,1.78-2.21l-.64-3.91a1.92,1.92,0,0,1,.52-1.67ZM15,10.4a4.53,4.53,0,0,0-1.21,3.9L14.26,17,12,15.7A4.13,4.13,0,0,0,8,15.7L5.74,17l.44-2.66A4.53,4.53,0,0,0,5,10.4L3.11,8.52l2.56-.38A4.26,4.26,0,0,0,8.86,5.73L10,3.31l1.14,2.42a4.26,4.26,0,0,0,3.19,2.41l2.56.38Z"

export default class Star extends Component {
  render(){
    const size = this.props.size || "20px"
    return(
      <svg
				onClick={()=> this.props.setScore(this.props.index+1)}
				onMouseEnter={()=> this.props.changeTemp(this.props.index)}
				onMouseLeave={()=> this.props.changeTemp(null)}
				fill="red" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" viewBox="0 0 20 20" style={{width: `${size}`,height: `${size}`,enableBackground:'new 0 0 449.406 449.406', padding: '5px'}} xmlSpace="preserve">
	      <g>
	        <path  d={this.props.filled ? filled : unfilled} fill="#6bada7"/>
	      </g>
      </svg>

    )
  }
}
