import ReactDOM  from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./app";
// uses object history, all components have access to history
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
