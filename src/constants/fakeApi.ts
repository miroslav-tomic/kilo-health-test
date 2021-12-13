import { MOCK_DATA } from "./mock-data";
const RESPONSE_DELAY = 1000;

const apiWrapper = (data: any) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if ((data.status && data.status % 100 === 2) || data.status == null) {
      resolve(data);
    } else {
      reject(
        {
          response: {
            status: data.status,
            data
          }
        }
      );
    }
  }, RESPONSE_DELAY);
});

const MockApi = {
  isFakeApi: true,
  auth: {
    login: (credentials: any) => apiWrapper({
      user: {}
    }),
  },
  question: {
    getList: () => apiWrapper(MOCK_DATA.data),
    post: () => apiWrapper(true)
  },
};

// eslint-disable-next-line import/no-default-export
export default MockApi;
