import ReactDOM from "react-dom";
// import App from "./D2App9";
import Router from "./router/index.jsx";
// import { Provider } from "react-redux";
// import store from "./store";

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  // <App />,
  <Router />,
  document.getElementById("root")
);

// 测试模拟beforeDestroy
// setTimeout(() => {
//   ReactDOM.render(<input type="text" />, document.getElementById("root"));
// }, 3000);
