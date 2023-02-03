import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix originals"/>
    </div>
  );
}

export default App;
