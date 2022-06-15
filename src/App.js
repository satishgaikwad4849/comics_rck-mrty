import './App.css';
import { useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import CardList from './components/cardList';
import { FETCH_CHARACTERS } from './redux/actions/action';
import { useDispatch,useSelector } from 'react-redux';
import _ from 'lodash'

function App() {

  const dispatch = useDispatch();
  const characterData=useSelector(state=>state.characters)
  const favorites=useSelector(state=>state.favorites_char)

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
      .then((resp)=>resp.json())
        .then((res)=>{return res.results})
          .then((res)=>{
           dispatch(FETCH_CHARACTERS(res));
          })
   },[])

   const favoritesData = _.intersectionWith(characterData, favorites, (o, id) => o.id === id)
   
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<CardList characterData={characterData}/>} />
            <Route path="/favorites" element={<CardList characterData={favoritesData} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
