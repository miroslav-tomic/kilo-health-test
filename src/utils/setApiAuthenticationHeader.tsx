import { axiosInstance } from "constants/api";

const setApiAuthenticationHeader = (access_token: string | null) => {
	if (access_token) {
		axiosInstance.defaults.headers.common.authorization = `Bearer ${access_token}`;
	} else {
		delete axiosInstance.defaults.headers.common.authorization;
	}
};

export { setApiAuthenticationHeader };

// eslint-disable-next-line import/no-default-export
export default setApiAuthenticationHeader;
