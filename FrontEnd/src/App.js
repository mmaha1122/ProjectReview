import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';
import Srii from './signup';
import DataBaseView from './getform';
import UpdateForm from './updatesignup';

function Intro() {
    return (  
        <Router>
      <ul class="nav">
  <li class="nav-item">
    <Link to="/Srii" class="nav-link active">HOME</Link>
  </li>
  <li class="nav-item">
    <Link to="/DataBaseView" class="nav-link">VIEW</Link>
  </li>
   <li class="nav-item">
  <Link to="/UpdateForm" class="nav-link" >UPDATE</Link>
  </li> 
  
</ul>
<Routes>
  <Route path="/Srii" element={<Srii/>}/>
  <Route path="/DataBaseView" element={<DataBaseView/>}/>
  <Route path="/UpdateForm" element={<UpdateForm/>}/>
  
  
</Routes>
    </Router>
    );
}

export default Intro;
