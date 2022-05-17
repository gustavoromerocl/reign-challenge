import React, { useEffect } from 'react';
import NewsList from '../components/NewsList';
import Spinner from '../components/Spinner';
import useFavesStore from '../zustand/faves-store';

function Faves() {
  /**Se instancia la store de zustand */
  const {
    faves,
    fetchFaves,
    isFetchingFavesNews
  } = useFavesStore((state) => ({
    faves: state.faves,
    fetchFaves: state.fetchFaves,
    isFetchingFavesNews: state.isFetchingFavesNews,
  }));

  useEffect(() => {
    fetchFaves();
  }, []);

  return (
    <div>
      {isFetchingFavesNews ? <Spinner/> : <NewsList data={faves} />}
      
    </div>
  )
}

export default Faves;