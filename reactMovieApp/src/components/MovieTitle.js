import './MovieTitle.css'

function MovieTitle(props) {
    
    return (
        <div className="title">
            <p >{props.item.title}</p>
        </div>
    )
}

export default MovieTitle;