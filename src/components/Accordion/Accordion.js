import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionComponent from './Section'

const Section = (props) => (
  <SectionComponent {...props}/>
)

// Section.propTypes = {
//   /** The index of the current index */
//   activeIndex: PropTypes.string,
//   /** Indicate whether there should only be pne panel open */
//   exclusive: PropTypes.bool,
//   /** retuyghdfgjhdsgfjhd */
//   test: PropTypes.bool
// };

/** A super lame component that says Hello with a custom message. */
class Accordion extends Component {
  static Section = Section
  // static Content = Content
  state = {
    activeIndex: []
  }
  handleClick = (index) => {
    if(this.props.exclusive){
      this.setState(
        ({activeIndex}) => ({activeIndex: activeIndex.includes(index) ? [] : [index]})
      )
    }
    else{
      this.setState(
        ({activeIndex}) => {
          return activeIndex.includes(index) ?
          {activeIndex : activeIndex.filter(nums => nums !== index)}
          :
          {activeIndex: [...activeIndex,index]}
        }
      )
    }
  }
  getProps = () => ({
    handleClick: this.handleClick,
    activeIndex : this.state.activeIndex
  })
  render() {
    const {getProps} = this
    return (
      <div>
        <div style={{borderRadius: '8px', border: '2px solid #ccc',width: this.props.width}}>
            {this.props.children({getProps})}
        </div>
      </div>
    );
  }

}

Accordion.propTypes = {
  /** The index of the current index */
  activeIndex: PropTypes.array,
  /** Indicate whether there should only be pne panel open */
  exclusive: PropTypes.bool,
  /** retuyghdfgjhdsgfjhd */
  width: PropTypes.string
};
Accordion.defaultProps = {
  exclusive: true,
  width: '100%'
};


export default Accordion;
