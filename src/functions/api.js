/* eslint-disable no-undef */
const API_URL = process.env.PUBLIC_URL + '/data.json';

/**
 * call the api returns in then JSON and in catch the error
 * @param {function} $then 
 * @param {function} $catch 
 */
export function getAll($then , $catch) {
	fetch(API_URL)
		.then(res => res.json())
		.then( data => $then(data))
		.catch(error => $catch(error));
}