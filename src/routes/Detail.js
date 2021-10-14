import React from "react";
import PropTypes from "prop-types";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }

    render(){
        const {location} = this.props;
        if(location.state){
            return (
                <div className="detail_inner">
                    <div className="movie_detail">
                        <div className="movie_top">
                            <div className="movie_img"><img src={location.state.largeimg} alt={location.state.title} title={location.state.title} /></div>
                            <h3 className="movie_title">{location.state.title}</h3>
                            <h5 className="movie_year">{location.state.year}</h5>
                            <ul className="movie_genre">
                                <li className="genres">{location.state.genres}</li>
                            </ul>
                        </div>
                        <div className="movie_summary">{location.state.summary}</div>
                    </div>
                    <div className="content">
                        <iframe src={location.state.url} frameborder="0" className="movie"></iframe>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;