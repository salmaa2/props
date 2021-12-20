import { checkPropTypes } from 'prop-types';
import './App.css';
import Profilee from './profile/profi';

function App() {
  const styleObj = {color :"red" , textAlign : "center" };
 

  return(
    <div style = {styleObj}>
    <Profilee></Profilee>

    </div>
  )
}
Profilee.propTypes = {
  bioo:checkPropTypes.string,
  proo:checkPropTypes.string,
  name:checkPropTypes.string,
}




export default App;