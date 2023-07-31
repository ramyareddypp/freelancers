import logo from './logo.svg';
import './App.css';
import { ROUTER } from './routes/components/Routes/routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      {/* <Routes></Routes> */}
      <RouterProvider router={ROUTER} />
    </div>
  );
}

export default App;
