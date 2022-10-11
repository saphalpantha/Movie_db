
import './App.css';
import {useState} from 'react'
import Button from './components/UI/Card/Button/Button_Ui';
import MoviesList from './components/MoviesList/MoviesList';
import Front from './components/Front/Front';
 


function App() {
  const [movie, setMovie] = useState([])
  const [isLoading, setIsLoading] = useState(false)
 async function buttonHandler () {
    const response = await fetch("https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json")
    const movies_data = await response.json()
    const updatedData = movies_data.movies.map((mD) => {
      return {
        id:mD.id,
        title:mD.title,
        pic:mD.posterUrl,
        paragraph: mD.plot,
        img_name:mD.title,
        director:mD.director

      }
    })

      
    
    setMovie(updatedData)
    setIsLoading(false);
  }
    return (
    <div>
      <h1 style={{color:'white'}}>MoviesDb</h1>
      
      <Button btn_name="Fetch Movies" click={buttonHandler}/>
      <Front/>
      { !isLoading && movie.length > 0 && <MoviesList data={movie} />}
      { !isLoading && movie.length === 0 && <p style={{color:'red'}}>No movies Found</p>}
      { isLoading &&  <p style={{color:'red', fontFamily:'Fantasy'}}> Loading....</p>}
      </div>
  );
} 

export default App;
