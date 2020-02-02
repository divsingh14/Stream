// import Axios from 'axios';
import { SIGN_IN,SIGN_OUT,CREATE_STREAM,FETCH_STREAMS,FETCH_STREAM,DELETE_STREAM,EDIT_STREAM } from './types';
import streams from '../apis/streams';
import swal from 'sweetalert';
import history from '../history';

export const signIn = (userid) =>{
	return {
		type: SIGN_IN,
		payload : userid
	};
};

export const signOut = () =>{
	return {
		type: SIGN_OUT
	};
};

export const createStreams = fromValue => async (dispatch,getState )=>{
	const {userId} =getState().auth;
	const response = await streams.post('/streams',{...fromValue,userId});
	if(response.status === 201){
		swal("Success!", `${response.data.title} is Inserted`, "success");
	}
	dispatch({type: CREATE_STREAM, payload: response.data});
	history.push("/");
};

export const fetchStreams = () => async dispatch =>{
	const response = await streams.get('/streams');

	dispatch({type: FETCH_STREAMS, payload: response.data});
};

export const fetchStream = (id) => async dispatch =>{
	const response = await streams.get(`/streams/${id}`);

	dispatch({type: FETCH_STREAM, payload: response.data});
};

export const editStream = (id,fromValue) => async dispatch =>{
	const response = await streams.patch(`/streams/${id}`,fromValue);
	if(response.status === 200){
		swal("Success!", `${response.data.title} is Edited`, "success");
	}
	dispatch({type: EDIT_STREAM, payload: response.data});
	history.push("/");
}

export const deleteStream = (id) => async dispatch =>{
	const response = await streams.delete(`/streams/${id}`);
	if(response.status === 200){
		swal("Success!", "Deleted!", "success");
	}
	dispatch({type: DELETE_STREAM, payload:id}); 
	history.push("/");
};