import '../styles/App.css';
import {Helmet} from 'react-helmet';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Main from './Main.js'

function App() {
  return (
    <>
      <Helmet>
        <title>MeTube</title>
      </Helmet>
      <Sidebar />
      <Header />
      <Main />
    
     
    </>
  );
}

export default App;
