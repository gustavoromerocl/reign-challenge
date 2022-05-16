import React, { useEffect } from 'react';
import NewsList from '../components/NewsList';
import useFavesStore from '../zustand/faves-store';

function Faves() {
  /**Se instancia la store de zustand */
  const {
    faves,
    fetchFaves
  } = useFavesStore((state) => ({
    faves: state.faves,
    fetchFaves: state.fetchFaves
  }));

  useEffect(() => {
    fetchFaves();
  }, []);

  return (
    <div>
      {<NewsList data={faves} />}
    </div>
  )
}

export default Faves;