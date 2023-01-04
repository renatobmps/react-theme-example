import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/index.css';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './providers/Theme';
import ThemeContext from './Contexts/Theme';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeContext>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </ThemeContext>
  </BrowserRouter>
);

reportWebVitals(
  // console.log
);

setInterval(() => {
  console.clear();
  console.log('THEME', localStorage.getItem('theme'));
}, 1000);