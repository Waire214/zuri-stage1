import './App.css';
import { Footer } from './component/footer/Footer';
import { Header } from './component/header/Header';
import { Main } from './component/main/Main';
function App() {
  return (
    <div className="App">
      <Header /> 
      <Main />
      <Footer />
    </div>
  );
}

export default App;
