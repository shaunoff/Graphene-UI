import React, { Component } from 'react';
import {Carousel} from 'graphene-ui'

/** A basic Carousel */
class BasicCarousel extends Component {
	render() {
		return (
			<Carousel >
				<Carousel.Panel>
					Panel 1
				</Carousel.Panel>
				<Carousel.Panel>
					Panel 2
				</Carousel.Panel>
				<Carousel.Panel>
					Panel 3
				</Carousel.Panel>
				<Carousel.Panel style={{background: 'red'}}>
					Hello Stepgh
				</Carousel.Panel>
			</Carousel>
		);
	}

}

export default BasicCarousel;
