import React from 'react';
import MenuBar from './MenuBar';
import Icons from './Icons';

export default class Desktop extends React.Component {
  render() {
    return	(<div>
    		<div id="desktop">
    			<MenuBar />
    			<Icons />
			</div>
			</div>)	
  }
};