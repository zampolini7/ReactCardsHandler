import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CardProvider } from "./CardContext";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { firebaseConfig } from "../src/firebase/firebase-config";
// import { FirebaseAppProvider } from "reactfire";
import { Provider } from "react-redux";
import store from "./redux/store";
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseConfig={app}> */}
    <Provider store={store}>
      <CardProvider>
        <App />
      </CardProvider>
    </Provider>
    {/* </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
