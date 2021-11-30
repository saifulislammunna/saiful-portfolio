 

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
 
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
 
import ProjectsDetail from './components/ProjectsDetail/ProjectsDetail';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
          <Header></Header> 
          
            <Switch>
            <Route exact path="/">
                <Home></Home>
              </Route> 
             
              <Route  path="/home">
                <Home></Home>
              </Route> 
              

                

              <Route path="/aboutme">
                   <AboutMe></AboutMe>
              </Route>  
              <Route path="/blogs">
                   <Blogs></Blogs>
              </Route>  
          
              
                <Route exact path="/projects/:_id">
                 <ProjectsDetail></ProjectsDetail>
              </Route>  
           

            </Switch>

             <Footer></Footer>  
        </BrowserRouter>
    </div>
  );
}

export default App;
