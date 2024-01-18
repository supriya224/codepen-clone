
import './App.css';
import DataProvider from './context/DataProvider';
import Home from './pages/Home';

function App() {
  return ( 
    // it is props context ke andar children pass ho rha hia like home
    <DataProvider>
      {/*  it is childerm  */}
     <Home/>
    </DataProvider>
  );
}

export default App;
