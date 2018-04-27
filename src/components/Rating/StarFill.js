import React, {Component} from 'react'

export default class StarFill extends Component {
  render(){
    const size = this.props.size || "30px"
    return(
      <svg fill="red" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" viewBox="0 0 20 20" style={{width: `${size}`,enableBackground:'new 0 0 449.406 449.406'}} xmlSpace="preserve">
	      <g>
	        <path  d="M16.72,12.21a1.92,1.92,0,0,0-.52,1.67l.64,3.91A1.86,1.86,0,0,1,15.06,20a1.76,1.76,0,0,1-.84-.22l-3.38-1.85a1.71,1.71,0,0,0-1.68,0L5.78,19.78a1.76,1.76,0,0,1-.84.22,1.86,1.86,0,0,1-1.78-2.21l.64-3.91a1.92,1.92,0,0,0-.52-1.67L.55,9.43a1.9,1.9,0,0,1,1-3.21l3.78-.57a1.81,1.81,0,0,0,1.36-1L8.38,1.05a1.77,1.77,0,0,1,3.24,0l1.69,3.56a1.81,1.81,0,0,0,1.36,1l3.78.57a1.9,1.9,0,0,1,1,3.21Z" fill="#6bada7"/>
	      </g>
      </svg>

    )
  }
}
