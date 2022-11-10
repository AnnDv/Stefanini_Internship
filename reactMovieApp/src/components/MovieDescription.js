import './MovieDescription.css'

function MovieDescription(props) {
    return (
        <div className='text'>
            <p>{props.item.overview}</p>
        </div>
    )
}

export default MovieDescription;