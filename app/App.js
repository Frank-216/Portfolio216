import React from 'react';
import ReactDOM from 'react-dom';
import './sass/base.scss';


var Main = require("./components/Main.js");

var exampleJSX = (
	<div>
	  <Main />
  </div>
);

ReactDOM.render(exampleJSX, document.getElementById('app'));
