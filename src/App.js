import './App.css';
import BoongMap from './BoongMap';
import Nav from './Nav.js';
import PreCommunity from './PreCommunity';
import PreSecondHT from './PreSecondHT';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='layout'>
        <BoongMap />
        <div>
          <PreCommunity />
          <PreSecondHT />
        </div>
      </div>
    </div>
  );
}

export default App;
