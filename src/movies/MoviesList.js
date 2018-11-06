/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import Movie from './Movie';
import ScrollLeft from '../scroll/Arrows';
import ScrollRight from '../scroll/Arrows';
import { getUpcomingMovies, getTopMovies, isLoaded, isLoaded1 } from './actions';

class MoviesList extends PureComponent {
  componentDidMount() {
    const { getUpcomingMovies, getTopMovies, isLoaded, isLoaded1 } = this.props;
    if (!isLoaded || !isLoaded1) {
      getUpcomingMovies()
      getTopMovies()
    }
  }

  render() {
    const { uMovies, tMovies, isLoaded, isLoaded1 } = this.props;
    if (!isLoaded || !isLoaded1)  return <h1>Loading</h1>;
    const movies1 = uMovies.map(movie => <Movie key={movie.id} movie={movie} />)
    const movies2 = tMovies.map(movie => <Movie key={movie.id} movie={movie} />)
    return (
      <Fragment>
        <ScrollMenu
          translate='0'
          data={movies1}
          arrowLeft={<ScrollLeft/>}
          arrowRight={<ScrollRight/>}
          />
        <ScrollMenu
          translate='0'
          data={movies2}
          arrowLeft={<ScrollLeft/>}
          arrowRight={<ScrollRight/>}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  uMovies: state.movies.uMovies,
  tMovies: state.movies.tMovies,
  isLoaded: state.movies.moviesLoaded,
  isLoaded1: state.movies.moviesLoaded1,
  moviesLoadedAt: state.movies.moviesLoadedAt,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getUpcomingMovies, getTopMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);