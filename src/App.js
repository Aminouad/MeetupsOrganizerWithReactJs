import {Route,Routes } from 'react-router-dom';
import Layout from './Components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';



function App() {
  return ( 
    <Layout>
    <Routes>
           <Route path='/' element={<AllMeetupsPage/>}/>
           <Route path='/favorites' element={<FavoritesPage/>}/>
           <Route path='/newMeetup' element={<NewMeetupsPage/>}/>  
  </Routes>
  </Layout>    
  );
  
}

export default App;
