/* eslint-disable react/prop-types */
import React from 'react';

export default function Dropdown(props) {
	const { id, title, content } = props.data;
	return (
		<div className="dropdown">
			<input type="checkbox" id={'dropdown-'+id} ></input>
			<label htmlFor={'dropdown-'+id}>{title}</label>
			<p>{content}</p>
		</div>
	);
}
