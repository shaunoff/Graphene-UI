import React, { Component } from 'react';
import styles from './styles'
import PropTypes from 'prop-types';

const TabList = ({activeIndex,children,changeIndex}) => {
	const childrenWithProps = React.Children.map(children, (child,index) => React.cloneElement(child, {activeIndex,index,changeIndex}))
	return <div style={styles.tabsContainer}>{childrenWithProps}</div>
}

const TabPanel = ({activeIndex,children}) => {
	const childrenWithProps = React.Children.map(children, (child,index) => React.cloneElement(child, {activeIndex,index}))
	return <div style={styles.panelContainer}>{childrenWithProps}</div>
}
const Panel = ({activeIndex,children,index}) => {
	if(activeIndex === index){
		return (
			<div style={{width: '100%', height: '100%'}}>
				{children}
			</div>
		)
	}
	return null
}
const Tab = ({activeIndex,children,title,index, changeIndex}) => {
	return (
		<div onClick={()=>changeIndex(index)} style={{...styles.tabsBlock, ...(activeIndex===index ? styles.activeTabsBlock : null)}}>
			<span style={{fontWeight: 500, color: "rgb(88, 88, 88)"}}>{title}</span>
		</div>
	)
}


class Tabs extends Component {
	state = {
		activeIndex: 0
	}

	changeIndex = (activeIndex) => {
		this.setState({activeIndex})
	}
	static TabList = TabList
	static Tab = Tab
	static Panel = Panel
	static TabPanel = TabPanel
	render() {
		const {activeIndex} = this.state
		const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {activeIndex, changeIndex: this.changeIndex}))
		return (
			<div style={styles.container}>
				{childrenWithProps}
			</div>
		);
	}

}


TabList.propTypes = {
  /** Put your message here */
  tabListExample: PropTypes.string
};

TabList.defaultProps = {
  tabListExample: 'World'
};


export default Tabs;
