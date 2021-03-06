/**
 * Created by YasumasaTakemura on 2017/04/30.
 */

import React, {Component} from 'react'
import createHistory from 'history/createBrowserHistory'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, compose, combineReducers} from 'redux'

import {data} from '../store/reducer/data'
import  Marketplace from '../containers/marketplace/marketplace'
import  AppDetails from '../containers/app_details/app_details'
import  MyApps from '../containers/my_apps/my_apps'
import  MyAPI from '../containers/my_api/my_api'
import  LoggingPage from '../containers/logging_page/logging_page'
import  {TaskManager} from '../store/connects'
import ReactGA from 'react-ga';

// Initialize ga
ReactGA.initialize('UA-53163158-1');

const reducers = combineReducers({
    data,
});

const history = createHistory();
export let store = createStore(reducers,
    compose(window.devToolsExtension && window.devToolsExtension()));


const styles={
    root:{
    }
};


// FOR GA TRACKING

function logPageView() {
    console.log('ga>>>>>>>>');
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}


const App = ()=> {
    return (
        <Provider store={store}>
            <Router history={history} onUpdate={logPageView}>
                <div style={styles.root}>
                <Switch>

                    <Route exact path='/top' component={LoggingPage}/>
                    <Route path='/tasks/:tab' component={TaskManager}/>
                    <Route exact path='/tasks' component={TaskManager}/>
                    <Route path='/marketplace/:app_id' component={AppDetails}/>
                    <Route exact path='/marketplace' component={Marketplace}/>
                    <Route path='/my_apps' component={MyApps}/>
                    <Route path='/my_api' component={MyAPI}/>
                    <Route path='/' render={()=> <div style={{height:100,backgroundColor:'white'}}> Footer</div>}/>

                </Switch>
                </div>

            </Router>

        </Provider>
    )
};

export default App