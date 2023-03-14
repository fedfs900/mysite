import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import './Style.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
