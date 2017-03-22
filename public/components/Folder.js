import React from 'react';

export default class Desktop extends React.Component {
	
  render() {
    return	(<div className="icon" style={{top: this.props.top, left: this.props.left}} >
				<div className="tab"></div>
				<div className="foldergap"></div>
				<div className="foldertitle"><p>{this.props.name}</p></div>
			</div>)
  }
};