import {Public} from './apps/Public/Public';
import {Private} from './apps/Private/Private';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {token} = useContext(AuthContext);


  if (token) {
    return <Private/>
  }
  else {
    return <Public/>
  }
}

export default App;
