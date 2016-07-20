import flux from 'flux-react';
import sessionstorage from 'sessionstorage';

var LoginStore = flux.createStore({
	exports: {
		status() {
			var isLoggedIn = sessionstorage.getItem("IsLoggedIn");
			return (isLoggedIn == "true") ? true : false;
		},
		logIn(password) {
			if(password == 'cornholio') {
				sessionstorage.setItem("IsLoggedIn", "true");
				return true;
			} else {
				sessionstorage.setItem("IsLoggedIn", "false");
				return false;
			}
		}
	}
});

export default LoginStore;