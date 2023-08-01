
import './App.css';
import Firstpage from './Firstpage'
import DataFetchingPage from './DataFetchingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <Firstpage/>
    // <DataFetchingPage/>
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Firstpage />} />
          <Route exact path="/api-page" element={<DataFetchingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
