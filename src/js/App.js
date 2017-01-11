import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route,  hashHistory } from 'react-router';
import reducer from './reducers';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routing';

var store; 
// switch devtools only in dev mod 
if (__DEV__) {
    store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
    store = createStore(reducer);    
}
const history = syncHistoryWithStore( hashHistory, store); 




ReactDOM.render(
    <Provider store={store} > 
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);