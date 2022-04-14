import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      useEffect(() => {
        axios.get("https://localhost:8003/api/maison")
          .then((res) => console.log(res.data))
      },[])
    </div>
  );
}

export default App;
