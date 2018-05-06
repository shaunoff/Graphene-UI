import React, { Component } from 'react';
import styles from './styles';

const Header = ({children,compact}) => (
		<div style={{...styles.row,...styles.header,...(compact && styles.compact)}}>
			{children}
		</div>

);

const Body = ({children}) => {
	children = React.Children.map(children, (child,index) => React.cloneElement(child, {index, key: index}))
	return (
		<div>
			{children}
		</div>
	)
}


const Row = ({children,key,index,compact}) => (
		<div key={index} style={{...styles.rowContent,...(index % 2 === 0 ? styles.evenRow : null), ...(compact && styles.compact)}}>
			{children}
		</div>
);

const HeaderCell = ({children,title,style}) => (
	<div style={{...styles.headerCell, ...(style ? style : {flex: 1})}}>
		{title || children}
	</div>
);

const Cell = ({children,style}) => (
	<div style={style ? style : {flex: 1}}>
		<div>{children}</div>
	</div>
);


class Table extends Component {
	static Header = Header
	static HeaderCell = HeaderCell
	static Body = Body
	static Row = Row
	static Cell = Cell
	render() {
		return (
			<div style={styles.container}>
				{this.props.children}
			</div>
		);
	}
}

export default Table;
