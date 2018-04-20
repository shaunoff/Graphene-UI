import React, { Component } from 'react';


const Section = ({activeIndex,index,title,children,handleClick}) => (
  <div style={{borderTop: index !== 0 && "2px solid #ccc", padding: '15px' }}>
    <div style={{fontWeight: 500, color: "rgb(88, 88, 88)"}} onClick={()=>{handleClick(index)}}>
      {title}
    </div>
    <div>
      {activeIndex === index && children}
    </div>
  </div>
)

class Accordion extends Component {
  static Section = Section
  // static Content = Content
  state = {
    activeIndex: 0
  }
  handleClick = (index) => {
    this.setState(
      ({activeIndex}) => ({activeIndex: activeIndex === index ? -1 : index})
    )
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

export default Accordion;
