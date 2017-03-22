import React from 'react';
import Folder from './Folder';

export default class Icons extends React.Component {
	render() {
  	return (<div>
  				<Folder	name="projects" left="5em" top="5em" />
  				<Folder name="games" left="5em" top="12em" />	  
  				<Folder name="rubbish" left="5em" top="19em" />
  				<Folder name="contact" left="5em" top="26em" />
  				<Folder name="readme" left="15em" top="5em" />
			</div>)
	}
}