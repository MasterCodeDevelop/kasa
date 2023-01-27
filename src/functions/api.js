const API_URL = '/data.json';

/**
 * call the api returns in then JSON and in catch the error
 * @param {function} $then  // colback function, call on fetch.then
 * @param {function} $catch // colback function, call on fetch.catch
 */
export function getAll($then, $catch) {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => $then(data))
    .catch((error) => $catch(error));
}
/**
 * call the api returns in then JSON for one location
 * @param {function} $then  // colback function, call on fetch.then
 * @param {function} $catch // colback function, call on fetch.catch
 */
export function getById(id, $then, $catch) {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      $then(data.filter((e) => e.id === id));
    })
    .catch((error) => $catch(error));
}
