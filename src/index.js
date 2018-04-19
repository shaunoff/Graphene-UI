import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import {StyleRoot} from 'radium';
import './index.css';
import '../node_modules/highlight.js/styles/ocean.css';

ReactDOM.render(
  <StyleRoot>
    <Docs />
  </StyleRoot>
  ,
  document.getElementById('root')
);
