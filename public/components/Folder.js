import React from 'react';

export default class Folder extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {	mouseDown: false,
	   				name: props.name, 
	    			left: props.left,
	    			top:props.top	
	    		 };
  }	

  // mouse down -> grab coords and offset
  //on mouse move, if mouse down true, make mouse coords 
  // folder coords
  // on mouse up change mouse down to false.(can't move)
  mouseHandler(e){
  	// console.log('handler: ', this.state)  	
  	// let newLeft = e.clientX - e.nativeEvent.offsetX
  	// let newTop = e.clientY - e.nativeEvent.offsetY

  	this.setState({mouseDown: true})

  	console.log(this.state)
  }
  mouseMove(e){
  	if(!this.state.mouseDown){
  		return
  	}else{
  		console.log('mouse held and moving', e.target.left)
  		
  		let newLeft = e.clientX - 30 // cheap trick
  	 	let newTop = e.clientY - 22
  		this.setState({left: newLeft, top:newTop})
  	}
  }
  mouseUp(e){
  	// this needs to be attached to the body as well
  	// as it means I have to let the mouse up over the div
  	this.setState({mouseDown: false})
  	console.log('mouse up')
  }

 

  render() {
    return	(<div className="icon" 
    		 onMouseDown={(e) => this.mouseHandler(e)}
    		 onMouseMove={(e) => this.mouseMove(e)}
    		 onMouseUp={(e) => this.mouseUp(e)}
    		 style={{top: this.state.top, left: this.state.left}} >
				<div className="tab"></div>
				<div className="foldergap"></div>
				<div className="foldertitle"><p>{this.state.name}</p></div>
			</div>)
  }
};