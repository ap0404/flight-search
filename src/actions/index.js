export const FETCH_DATA = 'fetch_data';

export function defaultFunction(payload) {
	//console.log(payload);
	return {
		type: FETCH_DATA,
		payload
	};
}
