import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Blogs />
      </header>
    </div>
  );
}

export default App;
