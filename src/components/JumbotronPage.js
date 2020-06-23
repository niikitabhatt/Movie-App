import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import "../styles/Jumbotron.css";
const JumbotronPage = (props) => {
  return (
    
      <Jumbotron className="jumbotron">
        <h1>Search For Movie, TV-Series</h1>
        <form id="searchForm" onSubmit={props.fetchMovies}>
          <div className="row no-gutters">
            <div className="col-sm-1 text-center">
              <i className="fa fa-search fa-2x " />
            </div>
            <div className="col-sm-9 ">
              <input
                type="text"
                value={props.movieInfo.text}
                onChange={props.onChange}
                className="container-fluid"
                
              />
            </div>
            <div className="col-sm-2 text-center">
              <button type="Submit" className="btn btn-primary btn-sm">
                Search
              </button>
            </div>
          </div>
        </form>
      </Jumbotron>
    
  );
};

export default JumbotronPage;
