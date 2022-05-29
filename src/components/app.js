import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from '../redux/actions'

import Card from './card'
import SApp from '../schedule/App'
import Schedule from '../schedule/features/schedule/Schedule'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
   // dispatch(fetchAppsIfNeeded())
  }


  render() {
    const { isFetching, apps } = this.props
    const totalapps = apps.length;

    return (
       <>
         {isFetching && totalapps === 0 && <h2>Loading...</h2>}
         {!isFetching && totalapps === 0 && <h2>Empty.</h2>}
          <Schedule/>
       </>
    );
  }
}
 
function mapStateToProps(state) {
  return {
    isFetching: state.app.isFetching,
    apps : state.app.apps,
  }
}
 
export default connect(mapStateToProps)(App)
