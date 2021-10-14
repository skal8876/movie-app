import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, image, largeimg, url, genres}){
    return (
            <div className="movie_cont">
                <Link to={{
                    pathname:'/movie-detail',
                    state:{
                        year,
                        title,
                        summary,
                        image,
                        largeimg,
                        url,
                        genres
                    }
                }}>
                    <img src={image} alt={title} title={title} />
                </Link>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie_genres">
                        {genres.map((genres, index) => (
                            <li key={index} className="genres_genre">{genres}</li>
                        ))}
                    </ul>
                    <p className="movie_summary">{summary}</p>
                </div>
            </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    largeimg: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;