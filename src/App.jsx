// import './App.css';
import DataProvider from './context/DataProvider';
import Home from './pages/Home';
// import Result from './components/Result/Result';
// import Result from './components/Result/Result';
function App() {
  return ( 
    // it is props context ke andar children pass ho rha hia like home
    <DataProvider>
      {/*  it is childerm  */}
     <Home/>
     {/* <Result /> */}
    </DataProvider>
  );
}


export default App;
