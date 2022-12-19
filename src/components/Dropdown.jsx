import React from 'react';

export default function Dropdown({ title, content, index}) {
	console.log()
	return (
		<div className="dropdown" key={index}>
			<input type="checkbox" id={'dropdown-'+index} ></input>
			<label htmlFor={'dropdown-'+index}>{title}</label>
			<p>{!Array.isArray(content)?content:
				content.map(e => <>{e}<br/></>)
			}</p>
		</div>
	);
}
