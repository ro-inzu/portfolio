import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import Thumbnail from './Thumbnail'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './styles.css'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
             <div className="App">
               <Route exact path="/" component={Projects} />
               <Route path="/articles" component={Articles} />
               <Route path="/about" component={About} />
               <div>
                   <div className="navigation">

                     <div className="navigation-sub"><Link to="/" className="item"></Link>
                            <Link to="/projects" className="item"></Link>
                            <Link to="/about" className="item"></Link>
                     </div>
                   </div>

               </div>

             </div>
           </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
