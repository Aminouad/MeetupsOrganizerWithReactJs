import {useContext} from 'react';
import MeetupList from '../Components/meetups/MeetupList';

import FavoritesContext from '../store/favorite-context';

function FavoritesPage(){
  
    const favoritesCtx=useContext(FavoritesContext);

    let content;
    if(favoritesCtx.totalFavorites===0){
        content= <p>You got no favorites yet.Start adding some ?</p>

    }
    else{
          content=<MeetupList meetups={favoritesCtx.favorites} />

    }

    return(
        <section>
            {content}
        </section>
    );
}
export default FavoritesPage;