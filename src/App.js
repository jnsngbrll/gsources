import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import { ContextProvider } from './context/Context';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
