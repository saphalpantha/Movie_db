import Movies from '../Movies/Movies';
import classes from './MoviesList.module.css'

const MoviesList = (props) => {

    return(
        <div className={classes.movie_list}>
        {props.data.map((m) => <Movies key={m.id} title={m.title} pic={m.pic} img_name={m.title} paragraph={m.paragraph} director={m.director}/>)}

        </div>
    )
}

export default MoviesList;