import React from 'react';
import { createStreams } from '../../actions';
import { connect } from 'react-redux'; 
import StreamForm from './StreamForm';

class StreamCreate extends React.Component{

	onSubmit = formValue =>{
		// console.log(formValue);
		this.props.createStreams(formValue);
	}
	render(){
		// console.log(this.props);
		return (
			<div>
				<h3>Create A Stream</h3>
				<StreamForm onSubmit={this.onSubmit}/>
			</div>
			);
	}
}

export default connect(null,{createStreams})(StreamCreate);