// import logo from './logo.svg';
import './App.css';
// HashRouter\BrowerRouter reactRouter的hash路由和history路由
import { BrowserRouter as Router ,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Link to='/vue'>vue应用</Link>
        <Link to='/react'>react应用</Link>
      </Router>
      {/* 切换导航，将微应用渲染到container容器中 */}
      <div id='container'></div>
    </div>
  );
}

export default App;
