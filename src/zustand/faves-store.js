/* https://zustand.surge.sh/ */
import create from 'zustand';

const favesStore = create((set, get) => ({
  isFetchingFavesNews: false,
  fetchFavesError: undefined,
  faves: [],
  saveFaves: (element) => {
    /**instanciamos el array actual de elementos */
    const currentFaves =  get().faves;
    
    /* Validamos que el elemento no exista ya en la lista de favoritos */
    let newElement = currentFaves.find(el => el.created_at_i === element.created_at_i);

    /* Si existe terminamos la ejeución */
    if(newElement) return;

    /* Si no existe tomamos el valor de element y lo pasamos al nuevo array */
    newElement = element;
    
    /**Agregamos al array el elemento recibido en los params */
    const myFavesObjects = [...currentFaves, newElement];

    /**Intentamos actualizar el local storage */
    try {
      localStorage.setItem("favorites", JSON.stringify(myFavesObjects));
      set({faves: myFavesObjects})
    }
    catch (error){
      set({fetchFavesError: error})
    }
  },
  removeFaves: (id) => {
    const currentFaves =  get().faves;
    let element = currentFaves.find(el => el.created_at_i === id);

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