/* https://zustand.surge.sh/ */
import create from 'zustand';

const favesStore = create((set, get) => ({
  isFetchingFavesNews: false,
  fetchFavesError: undefined,
  faves: [],
  saveFaves: (element) => {
    /**instanciamos el array actual de elementos */
    const currentFaves = get().faves;

    /**Agregamos al array el elemento recibido en los params */
    const myFavesObjects = [...currentFaves, element];

    /**Intentamos actualizar el local storage */
    try {
      localStorage.setItem("favorites", JSON.stringify(myFavesObjects));
    }
    catch (error){
      set({fetchFavesError: error})
    }
  },
  fetchFaves: () => {
    /**Intentamos traer los elementos del local storage */
    try {
      set({ isFetchingFavesNews: true, fetchFavesError: undefined, faves: [] });
      
      let result = localStorage.getItem("favorites");
      /**Si no existe la storage termina al ejecución */
      if(!result) return; 
      /**almacenamos la colección actualizada en la store */
      set({faves: JSON.parse(result)});
      
    }catch(error){
      set({fetchFavesError: error})
    }
    finally {
      set({isFetchingFavesNews: false});
    }
  },
}));

export default favesStore;