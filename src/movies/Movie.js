import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateWatchlist, getWatchlist } from './actions';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
    
  async handleClick() {
    const { movie, updateWatchlist, getWatchlist } = this.props;
    await updateWatchlist(movie);
    await getWatchlist();
  }
  
  render() {
    const { movie } = this.props
    return (
      <MovieWrapper>
        <Link to={`/${movie.id}`}>
          <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} onDragStart={preventDrag}/>
        </Link>
        <AddBtn onClick={this.handleClick} className='hide'>Add to Watchlist</AddBtn>
      </MovieWrapper>
    )
  }
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export const Poster = styled.img`
box-shadow: 0 0 35px gray;
margin: 1rem;
`;

export const AddBtn = styled.button`
  box-shadow: 0 0 10px black;
  margin-top: -3rem;
  width: 120px;
  background-color: rgba(128,128,128,0.7);
  background-repeat: no-repeat;
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
  visibility: visible;
  padding: 10px;
`;

export const MovieWrapper = styled.div`
:not(:hover) .hide {
  visibility: hidden;
}
display: flex;
  flex-direction: column;
  align-items: center;
`

const preventDrag = (e) => {
  e.preventDefault();
  return false;
}

const mapStateToProps = state => ({
//   movie: state.movies.movie
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateWatchlist,
  getWatchlist
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
