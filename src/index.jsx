import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import Cars from './Pages/Cars';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5*60*1000,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/cars" element={<Cars />}/>
      </Routes>
    </Router>
  </QueryClientProvider>
);