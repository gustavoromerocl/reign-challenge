import React, { useEffect } from 'react';
import styled from 'styled-components';
import NewsList from '../components/NewsList';
import Spinner from '../components/Spinner';
import { CenterContainer, Paragraph } from '../theme';
import useFavesStore from '../zustand/faves-store';

function Faves(props) {
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
    /* se hace wrapped asyncrono a la store para traer los reaultados en el primer render */
    const fetchOwnFaves = async () => {
      //Espera a que fetchFaves termine de ejecutarse para continuar
      await fetchFaves();
    }
    fetchOwnFaves();
  },[]);

  return (
    <div className={props.className}>
      {isFetchingFavesNews && <Spinner/>}
      { faves.length !== 0 ? <NewsList data={faves} heart={true}/> : <CenterContainer><Paragraph>you have no saved favorites  </Paragraph></CenterContainer>}
    </div>
  )
}

export default styled(Faves)`
  height: 50vh;
`;