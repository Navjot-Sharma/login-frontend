import './App.scss';
import Header from './components/header/Header';
import { BrowserRouter as Router } from "react-router-dom";
import routes from './Routes';

function App() {
  return (
    <div className="App">

      <Router >
        <Header />
        <div className='mt-80'>
          {routes}
        </div>
      </Router>
    </div>
  );
}

export default App;
