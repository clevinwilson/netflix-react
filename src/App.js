import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals, action } from './urls';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix originals" url={originals}/>
      <RowPost title="Actions" isSmall={true} url={action} />
    </div>
  );
}

export default App;
