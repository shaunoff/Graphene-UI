import React from 'react';
import { TimelineMax } from 'gsap';
import { Transition } from 'react-transition-group';

const duration = 400;

class Section extends React.Component {
	animateOpen = () => {
		var animation = new TimelineMax();
		animation
			.set(this.container, { opacity: 0 })
			.from(this.container, duration / 1000, { height: 0 })
			.to(
				this.container,
				duration / 1000,
				{ opacity: 1 },
				`-=${duration / 1000}`
			);
	};
	animateClose = () => {
		var animation = new TimelineMax();
		animation
			.to(this.container, 0.2, { opacity: 0, margin: 0 })
			.to(this.container, 0.3, { height: 0 }, `-=${0.2}`);
	};
	render() {
		const { activeIndex, index, title, children, handleClick } = this.props;
		return (
			<div key={index} style={{ borderTop: index !== 0 && '2px solid #ccc' }}>
				<div
					style={{
						cursor: 'pointer',
						display: 'flex',
						padding: '10px',
						justifyContent: 'space-between',
						alignItems: 'center',
						fontWeight: 500,
						color: 'rgb(88, 88, 88)',
						maxHeight: '25px'
					}}
					onClick={() => {
						handleClick(index);
					}}
				>
					{title}
					<img
						style={{ height: '14px' }}
						src={`icons/${
							activeIndex.includes(index) ? 'down' : 'right'
						}-arrow.svg`}
						alt="arrow"
					/>
				</div>
				<Transition
					timeout={duration}
					in={activeIndex.includes(index)}
					unmountOnExit
					onEntering={this.animateOpen}
					onExiting={this.animateClose}
				>
					{state => {
						return (
							<div
								ref={container => (this.container = container)}
								style={{ margin: '10px', overflow: 'hidden' }}
							>
								{children}
							</div>
						);
					}}
				</Transition>
			</div>
		);
	}
}

export default Section;
