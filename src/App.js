
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header"
import Main from "./components/main"
import Total from './components/total'
import History from "./components/history"
import Newtransaction from "./components/newtransaction"
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
  <Header />
    <div className="container">
      
      <Main />
      <Total/>
      <History/>
      <Newtransaction />
    </div></GlobalProvider>
  );
}

export default App;
