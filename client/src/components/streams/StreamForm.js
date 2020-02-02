import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component{

	renderError({error,touched}){
		if(touched && error){
			return(
				<div className="ui error message">
					<p>{error}</p>
				</div>
			);
		}
	}

	renderInput=({input,label,meta}) => {
		//console.log(formProps);
		//console.log(meta);
		const className=`field ${(meta.touched&&meta.error)?'error':''}`;
		return(
			 <div className={className}>
			    <label>{label}</label>
			    <input {...input}/>
			    {this.renderError(meta)}
			  </div>
			); 
	}
	onSubmit = formValue =>{
		// console.log(formValue);
		this.props.onSubmit(formValue);
	}
	render(){
		// console.log(this.props);
		return (
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="title" component={this.renderInput} label="Enter Title"/>
				<Field name="description" component={this.renderInput} label="Enter Description"/>
				<button className="ui primary button">Submit</button>
			</form>
			);
	}
}

const validate = (formValue) =>{
	const error={};
	if(!formValue.title){
		error.title = "You must enter title";
	}
	if(!formValue.description){
		error.description = "You must enter description";
	}
	return error;
};

export default reduxForm({
	form: 'streamForm',
	validate
})(StreamForm);


