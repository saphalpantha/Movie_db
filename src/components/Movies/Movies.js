
import classes from './Movies.module.css'
import Card from '../UI/Card/Card';
const Movies = (props) => {

    return(
        <Card className={classes.movie_list}>
    
            <a href={props.pic}>
                <h1 className={classes.title}>{props.title}</h1>
                 </a> 
           
           <img  className={classes.image} src={props.pic}  alt={props.img_name}/>
            <span className={classes.genres}>{props.genres}</span>
            <p className={classes.paragraph}>
                {props.paragraph}
            </p>
            <span className={classes.direct}>Directed by: {props.director}</span>
        </Card>
    )
}

export default Movies;