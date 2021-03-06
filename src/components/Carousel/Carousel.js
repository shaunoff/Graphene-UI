import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineMax, Power3 } from 'gsap';
import { Transition } from 'react-transition-group';
import {Icon} from 'graphene-ui';

const styles = {
	container: {
		width: '100%',
		height: '400px',
		display: 'grid',
		gridTemplateColumns: '50px auto 50px',
		gridTemplateRows: 'auto 50px',
		alignItems: 'center'
	},
	panel: {
		position: 'relative',
		width: '100%',
		height: '100%',
		border: '2px solid #ccc',
		overflow: 'hidden'
	}
};

class Panel extends Component {
	forwardEnter = () => {
		this.props.handleAnimate();
		const width = this.panel.clientWidth;
		var animation = new TimelineMax({
			onComplete: this.props.handleAnimate
		});
		animation.from(this.panel, 2, { ease: Power3.easeInOut, x: width });
	};
	forwardExit = () => {
		const width = this.panel.clientWidth;
		var animation = new TimelineMax();
		animation.to(this.panel, 2, { ease: Power3.easeInOut, x: `-${width}` });
	};
	backEnter = () => {
		this.props.handleAnimate();
		const width = this.panel.clientWidth;
		var animation = new TimelineMax({
			onComplete: this.props.handleAnimate
		});
		animation.from(this.panel, 2, { ease: Power3.easeInOut, x: `-${width}` });
	};
	backExit = () => {
		const width = this.panel.clientWidth;
		var animation = new TimelineMax();
		animation.to(this.panel, 2, { ease: Power3.easeInOut, x: width });
	};
	render() {
		const { index, activeIndex, forward, style } = this.props;
		return (
			<Transition
				timeout={2000}
				in={activeIndex === index}
				unmountOnExit
				onEntering={forward ? this.forwardEnter : this.backEnter}
				onExiting={forward ? this.forwardExit : this.backExit}
			>
				<div
					ref={panel => (this.panel = panel)}
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						...style
					}}
				>
					{this.props.children}
				</div>
			</Transition>
		);
	}
}

class Carousel extends Component {
	state = {
		activeIndex: 0,
		forward: true,
		animating: false,
		length: React.Children.count(this.props.children)
	};
	// componentDidMount(){
	//   const count = React.Children.count(this.props.children)
	//   //this.setState({length: count})
	// }
	componentDidMount() {
		if (this.props.interval) {
			setInterval(this.handleChange, this.props.interval);
		}
	}
	handleAnimate = () => {
		this.setState(({ animating }) => ({ animating: !animating }));
	};
	handleBack = () => {
		if (this.state.animating) {
			return;
		}
		this.setState({ forward: false }, () => {
			const newStage =
				this.state.activeIndex - 1 < 0
					? this.state.length - 1
					: this.state.activeIndex - 1;
			this.setState({ activeIndex: newStage });
		});
	};
	handleChange = () => {
		if (this.state.animating) {
			return;
		}
		this.setState({ forward: true }, () => {
			const newStage =
				this.state.activeIndex + 1 > this.state.length - 1
					? 0
					: this.state.activeIndex + 1;
			this.setState({ activeIndex: newStage });
		});
	};
	static Panel = Panel;
	render() {
		const { activeIndex, length, forward } = this.state;
		const { handleAnimate } = this;
		const lengthArray = [...Array(length)];
		const children = React.Children.map(this.props.children, (child, index) => {
			return React.cloneElement(child, {
				index,
				activeIndex,
				forward,
				handleAnimate
			});
		});
		return (
			<div style={styles.container}>
				<div
					style={{ display: 'flex', justifyContent: 'center' }}
					onClick={this.handleBack}
				>
					<Icon size="30px" name="arrowLeftCircle" />
				</div>
				<div style={styles.panel}>{children}</div>
				<div
					style={{ display: 'flex', justifyContent: 'center' }}
					onClick={this.handleChange}
				>
					<Icon size="30px" name="arrowRightCircle" />
				</div>
				<div
					style={{
						gridRow: 2,
						gridColumnStart: 1,
						gridColumnEnd: 4,
						display: 'flex',
						justifyContent: 'center'
					}}
				>
					{lengthArray.map((dot, index) => (
						<div
              key={index}
							style={{
								background: index === activeIndex ? '#585858' : 'none',
								margin: '0px 6px',
								width: '8px',
								height: '8px',
								border: '2px solid #585858',
								borderRadius: '8px'
							}}
						/>
					))}
				</div>
			</div>
		);
	}
}

Carousel.propTypes = {
	/** The index of the current index */
	activeIndex: PropTypes.bool
};

export default Carousel;
