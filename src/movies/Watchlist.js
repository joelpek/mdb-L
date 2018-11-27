import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import Movie from './Movie';
import ScrollLeft from '../scroll/ScrollLeft';
import ScrollRight from '../scroll/ScrollRight';
import { getWatchlist } from './actions';

class Watchlist extends Component {
  componentWillMount() {
    const { getWatchlist } = this.props;
    getWatchlist()
  }

  render() {
    const { watchlist } = this.props;
    if (!watchlist.length) {
      return (<h1>Watchlist empty</h1>);
    }
    let wlMovies = watchlist.map(movie => <Movie key={movie._id} movie={movie} />)
    return (
      <Fragment>
        <h2>Watchlist</h2>
        <ScrollMenu
          data={wlMovies}
          arrowLeft={<ScrollLeft/>}
          arrowRight={<ScrollRight/>}
          alignCenter={false}
          wheel={false}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  watchlist: state.movies.watchlist,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getWatchlist }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
