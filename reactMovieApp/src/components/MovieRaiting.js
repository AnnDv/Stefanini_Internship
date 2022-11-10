import './MovieRaiting.css';

function MovieRaiting(props) {
    return (
        <div className="raitingr">
            <p>Raiting: {props.item.vote_average}</p>
        </div>
    )

}

export default MovieRaiting;