import { config } from "../config";
import "./MovieImage.css"

const IMG_URL = config.img_url;

function MovieImage(props) {
    return (
        <div >
            <img className="movie_img" src={IMG_URL + props.item.poster_path} alt='movie'></img>
        </div>
    )
}

export default MovieImage;