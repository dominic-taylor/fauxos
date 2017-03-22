import React from 'react';

export default class Folder extends React.Component {
  clickHandler(){
  	console.log('click: ', this.props.name)
  }
  render() {
    return	(<div className="icon" 
    		 onClick={(e) => this.clickHandler(e)}
    		 style={{top: this.props.top, left: this.props.left}} >
				<div className="tab"></div>
				<div className="foldergap"></div>
				<div className="foldertitle"><p>{this.props.name}</p></div>
			</div>)
  }
};