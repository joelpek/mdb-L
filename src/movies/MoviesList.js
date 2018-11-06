/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import Movie from './Movie';
import ScrollLeft from '../scroll/ScrollLeft';
import ScrollRight from '../scroll/ScrollRight';
import { getUpcomingMovies, getTopMovies, getPopularMovies } from './actions';

class MoviesList extends PureComponent {
  componentDidMount() {
    const { getUpcomingMovies, getTopMovies, getPopularMovies, isLoaded, isLoaded1 } = this.props;
    if (!isLoaded || !isLoaded1) {
      getUpcomingMovies()
      getTopMovies()
      getPopularMovies()
    }
  }

  render() {
    const { uMovies, tMovies, pMovies, isLoaded, isLoaded1 } = this.props;
    if (!isLoaded || !isLoaded1)  return <h1>Loading</h1>;
    let movies1 = uMovies.map(movie => <Movie key={movie.id} movie={movie} />)
    let movies2 = tMovies.map(movie => <Movie key={movie.id} movie={movie} />)
    let movies3 = pMovies.map(movie => <Movie key={movie.id} movie={movie} />)
    let movieGrid = [
      {
        movies: movies1,
        heading: 'Upcoming Movies'
      },
      {
        movies: movies2,
        heading: 'Top Rated Movies'
      },
      {
        movies: movies3,
        heading: 'Popular Movies'
      }
    ]
    let MovieGrid = (movieGrid) => (
      <Fragment>
        {movieGrid.map(movieList => (
          <Fragment>
            <h2>{movieList.heading}</h2>
            <ScrollMenu 
              data={movieList.movies}
              arrowLeft={<ScrollLeft/>}
              arrowRight={<ScrollRight/>}
              alignCenter={false}
              wheel={false}
            />
          </Fragment>
        ))}
      </Fragment>
    ); 
    return (
      <Fragment>
        {MovieGrid(movieGrid)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  uMovies: state.movies.uMovies,
  tMovies: state.movies.tMovies,
  pMovies: state.movies.pMovies,
  isLoaded: state.movies.moviesLoaded,
  isLoaded1: state.movies.moviesLoaded1,
  moviesLoadedAt: state.movies.moviesLoadedAt,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getUpcomingMovies, getTopMovies, getPopularMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);