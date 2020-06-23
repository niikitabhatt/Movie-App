import React from 'react'
import {connect} from "react-redux";
import {Container} from "react-bootstrap";

import * as actions from "../../actions/searchAction"
import {bindActionCreators} from "redux";
import Spinner from '../Spinner';
import JumbotronPage from '../JumbotronPage';
import MovieContainer from '../MovieContainer';

 const SearchPage = (props)=> {
     const inputMovie = (e) => {
        props.actions.inputMovie(e.target.value)

     }
     const fetchMovies = (e) => {
       e.preventDefault();
       props.actions.fetchMovies(props.movieInfo.text);
     }
     
    return (
        <Container>
           <JumbotronPage
             onChange={inputMovie}
             movieInfo={props.movieInfo}
            fetchMovies={fetchMovies}
           ></JumbotronPage>
          
           {
             props.movieInfo.loading ? <Spinner /> : <MovieContainer movieInfo={props.movieInfo}/>
          
           }
           
           </Container>
    )
}
function mapStateToProps(state) {
    return {
        movieInfo: state.movieInfo
    }

}
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
export default connect(mapStateToProps,mapDispatchToProps)(SearchPage)
