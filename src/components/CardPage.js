import React from 'react';
import {NavLink } from 'react-router-dom';
import '../styles/CardPage.css';
import {Card } from "react-bootstrap"
const CardPage= (props) => {
const movie= props.movie;
  return (
       
       <div className="col-md-3 mb-5 d-flex align-items-stretch column" >
       <Card className="card">
       <Card.Img variant="top" src={movie.Poster} className="cardImage"  />
       <Card.Body className="cardBody">
       <Card.Title >{movie.Title}- ({movie.Year})</Card.Title>
       </Card.Body>
       <Card.Footer className="cardFooter">
       <NavLink to={`/searchMovie/${movie.imdbID}`}>
       <button type="button" className=" btn-md btn-primary"> 
       More Details <i className="fa fa-chevron-right"></i>
        </button>
        </NavLink></Card.Footer>
       </Card>
      </div>
       
  )
}

export default CardPage;
