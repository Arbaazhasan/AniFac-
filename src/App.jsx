import './App.css';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Cat from './components/Cat/Cat';
import Loading from './components/Loading/Loading';


function App() {


  const { fact, img, category, refresh, loading } = useSelector(state => state.custom);


  return (
    <div className="App">
      <Header />

      {
        loading && <Loading />
      }

      <Cat category={category} img={img} fact={fact} refresh={refresh} />
    </div>
  );
}

export default App;

