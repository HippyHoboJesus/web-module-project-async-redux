import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

import { getGifs } from './actions';

import GifList from './Components/GifList';
import GifForm from './Components/GifForm';

function App(props) {

  const { loading, error, getGifs } = props

  useEffect(() => {
    getGifs('dogs')
  }, []);

  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      <GifForm/>

      {
        (error !== "") && <h3>{error}</h3>
      }

      {
        loading ? <h3>We are loading</h3> : <GifList />
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getGifs })(App);