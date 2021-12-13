const setStoreTypeValues = (types: any, storeName: string) => {
	if (process.env.NODE_ENV === "production") {
		let idx = Math.floor(Math.random() * 1000);

		for (let prop in types) {
			if (types.hasOwnProperty(prop)) {
				types[prop] = `${storeName}_${idx++}`;
			}
		}
	} else {
		for (let prop in types) {
			if (types.hasOwnProperty(prop)) {
				types[prop] = prop;
			}
		}
	}

	return types;
};

// eslint-disable-next-line import/no-default-export
export default setStoreTypeValues;
