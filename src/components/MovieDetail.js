import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/searchAction';
import { ListGroup ,Card} from 'react-bootstrap';
import {NavLink} from "react-router-dom"
const MovieDetail = (props) => {
  const id = props.match.params.id;
  const movieDetail = props.movieDetail;
  useEffect(() => {
    props.fetchMovie(id);
  }, []);
  return (
    <div>
      <div className="row mx-3 my-3">
        <div className="col-md-4 card card-body">
          <img src={props.movieDetail.Poster} className="thumbnail" alt="poster not available"></img>
        </div>
        
        <div className="col-md-8">
          <h1 className="text-light">{movieDetail.Title}</h1>
          <ListGroup>
            <ListGroup.Item>
              <strong>Genere: </strong> &nbsp; {movieDetail.Genre}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Released: </strong>&nbsp; {movieDetail.Released}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Rated:</strong> &nbsp;{movieDetail.Rated}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>imdbRating: </strong>&nbsp;{movieDetail.imdbRating}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Director:</strong>&nbsp;{movieDetail.Director}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Writer: </strong>&nbsp;{movieDetail.Writer}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Actors:</strong>&nbsp;{movieDetail.Actors}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Type:</strong>&nbsp;{movieDetail.Type}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div className="row mx-3 my-3">
        <div className="col-md-12 pl-0">
          <Card >
            <Card.Body>
              <Card.Title>About </Card.Title>
              <Card.Text>
                {movieDetail.Plot}
              </Card.Text>
              </Card.Body>
              <Card.Footer> 
              <a href={`https://www.imdb.com/title/${movieDetail.imdbID}/`} target="_blank"
               className="btn btn-primary" rel="noopener noreferrer">View On IMDB</a>
              <NavLink to='/searchMovie' exact className="btn btn-primary ml-2"> Go Back To Search</NavLink>
              </Card.Footer>  
          </Card>
        </div>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    loading: state.movieInfo.loading,
    movieDetail: state.movieInfo.movie,
  };
}

export default connect(mapStateToProps, { fetchMovie })(MovieDetail);
