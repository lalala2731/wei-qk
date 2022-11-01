import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let root;
function render(props = {}) {
  console.log('render');
  let { container } = props
  // const root = ReactDOM.createRoot(document.getElementById(container ? container.querySelector('#root') : 'root'));
  // const root = ReactDOM.createRoot(container ? container.querySelector('#root') :document.getElementById('root'));
  root = ReactDOM.createRoot(container ? container.querySelector('#root') :document.getElementById('root'));
  root.render(
    <App />
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {

}

export async function mount(props) {
  render(props)
}

export async function unmount(props) {
  // let { container } = props
  console.log('unmount');
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.getElementById('root'))
  root.unmount()
  root = null;
}
