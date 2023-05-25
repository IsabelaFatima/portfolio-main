import {RouterProvider} from "react-router-dom";
import Nav from './components/nav'
import Footer from './components/footer'
import Router from './routes/routes'
import './App.css';
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <div className="App">
      <AnimatePresence>
      <Nav/>
      <RouterProvider router={Router} />
      <Footer/>  
      </AnimatePresence>
    </div>
  );
}

export default App;
