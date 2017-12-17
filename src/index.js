import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import FacilityList from "./containers/FacilityList";

ReactDOM.render(<FacilityList />, document.getElementById('root'));
registerServiceWorker();
