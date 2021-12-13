import setStoreTypeValues from 'utils/setStoreTypeValues';

let types = {
	// Login
	LOGIN_REQUEST: '',
	LOGIN_SUCCESS: '',
	LOGIN_FAILURE: '',
};

types = setStoreTypeValues(types, 'auth');

// eslint-disable-next-line import/no-default-export
export default types;
