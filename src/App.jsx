// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import DataProfiling from './pages/DataProfiling';
import StockMetrics from '../src/components/StockMetrics.jsx';
import ShelfUtilisation from '../src/components/ShelfUtilisation';
import NumericMetrics from '../src/components/NumericMetrics';
import DataGranularity from '../src/components/DataGranularity';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-profiling" element={<DataProfiling />} />
        <Route path="/stock-metrics" element={<StockMetrics />} />
        <Route path="/shelf-utilisation" element={<ShelfUtilisation />} />
        <Route path="/numeric-metrics" element={<NumericMetrics />} />
        <Route path="/data-granularity" element={<DataGranularity />} />
      </Routes>
    </Router>
  );
};

export default App;