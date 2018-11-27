import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import Movie from './Movie';
import Watchlist from './Watchlist';
import ScrollLeft from '../scroll/ScrollLeft';
import ScrollRight from '../scroll/ScrollRight';
import { getUpcomingMovies, getTopMovies, getPopularMovies, resetWatchlist, getWatchlist } from './actions';

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getUpcomingMovies, getTopMovies, getPopularMovies, getWatchlist } = this.props;
      getUpcomingMovies()
      getTopMovies()
      getPopularMovies()
      getWatchlist()
  }

  handleClick() {
    const { resetWatchlist } = this.props;
    resetWatchlist()
  }

  render() {
    const { uMovies, tMovies, pMovies } = this.props;
    let movies1 = uMovies.map(movie => <Movie key={movie.id} movie={movie} />)
    let movies2 = tMovies.map(movie => <Movie key={movie.id} movie={movie} />)
    let movies3 = pMovies.map(movie => <Movie key={movie.id} movie={movie} />)
    return (
      <Fragment>
        <Watchlist />
        <h2 onClick={this.handleClick} style={{cursor:'pointer'}}><u>Reset Watchlist</u></h2>
        <h2>Upcoming Movies</h2>
        <ScrollMenu
          data={movies1}
          arrowLeft={<ScrollLeft/>}
          arrowRight={<ScrollRight/>}
          alignCenter={false}
          wheel={false}
        />
        <h2>Top Rated Movies</h2>
        <ScrollMenu
          data={movies2}
          arrowLeft={<ScrollLeft/>}
          arrowRight={<ScrollRight/>}
          alignCenter={false}
          wheel={false}
          />
        <h2>Popular Movies</h2>
        <ScrollMenu
          data={movies3}
          arrowLeft={<ScrollLeft/>}
          arrowRight={<ScrollRight/>}
          alignCenter={false}
          wheel={false}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  uMovies: state.movies.uMovies,
  tMovies: state.movies.tMovies,
  pMovies: state.movies.pMovies,
  isLoaded: state.movies.moviesLoaded,
  movie: state.movies.movie,
  watchlist: state.movies.watchlist,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getUpcomingMovies, getTopMovies, getPopularMovies, resetWatchlist, getWatchlist }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);