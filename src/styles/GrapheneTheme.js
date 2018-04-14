import React, { Component } from 'react';
import GrapheneContext from './GrapheneContext'

class GrapheneTheme extends Component {
	state = {
		color: 'red'
	}
	render() {
		return (
			<GrapheneContext.Provider value={{
        color: this.state.color,
      }}>
        {this.props.children}
      </GrapheneContext.Provider>
		);
	}

}

export default GrapheneTheme;
