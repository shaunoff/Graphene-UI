import React from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
// This way is easy, but adds 170K gzipped to bundle since all langs are included.
// import Highlight from 'react-highlight';

class CodeExample extends React.Component {
  componentDidMount() {
		const loadLanguages = require('prismjs/components/index.js');
		loadLanguages(['jsx']);
    Prism.highlightAll();
  }

  render() {
    return (
      <pre ref={ref => { this.element = ref }}>
        <code className="language-javascript">
          {this.props.children}
        </code>
      </pre>
    )
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;
