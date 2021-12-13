// history.js

//use memory history for instant app but could just as easily switch to browser history for webapp use
import { createMemoryHistory, createBrowserHistory } from "history";
const notInIframe = window.top === window.self;
export const history = notInIframe ? createBrowserHistory() : createMemoryHistory();
