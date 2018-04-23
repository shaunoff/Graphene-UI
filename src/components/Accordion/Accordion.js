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
          console.log('gfhfghjf',activeIndex.filter(nums => nums === index))
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
    console.log(this.state)
    const {activeIndex} = this.state
    const {handleClick,getProps} = this
    return (
      <div style={{borderRadius: '8px', border: '2px solid #ccc'}}>
        {this.props.children({getProps})}
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
  test: PropTypes.bool
};
Accordion.defaultProps = {
  exclusive: true
};


export default Accordion;
