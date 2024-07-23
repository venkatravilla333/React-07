
import App from "./App"
import ReactDOM from 'react-dom/client'
import Child from "./Child";

import {BrowserRouter} from 'react-router-dom'

var div = ReactDOM.createRoot(document.getElementById('root'))

div.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
); 





