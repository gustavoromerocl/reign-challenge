/* https://zustand.surge.sh/ */
import axios from 'axios';
import create from 'zustand';

const newsStore = create((set, get) => ({
  isFetchingNews: false,
  fetchNewsError: undefined,
  news: [],
  page: 1,
  /**Si existe un valor en local storage se lo asigna, si no por default sera angular*/
  filter: localStorage.getItem("filter") || 'angular',
  setPage: (page) => set({page: page}),
  setFilter: (filter) => {
    /**Seteamos el filtro en local storage */
    localStorage.setItem("filter", filter)
    /**Guardamos el valor actual en una variable */
    let localFilter = localStorage.getItem("filter");
    /**Actualzamos el filtro local */
    set({filter: localFilter});
  },
  fetchNews: async () => {
    /**Se asignan valores del state con el método get */
    const page = get().page;
    const filter = get().filter;
    
    try {
      /* Formateamos el estado para asegurarnos de que no tenga valores anteriores */
      set({ isFetchingNews: true, fetchNewsError: undefined, news: [] });

      const { data } = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${filter}&page=${page}`);

      /**Filtramos el array de elementos con valores vacíos */
      const filterData = data.hits.filter(element => {
        return element.author !== null && element.story_title !== null && element.story_url !== null && element.created_at !== null;
      });

      set({news: filterData});
    }
    catch (error) {
      set({fetchNewsError: error})
    }
    finally {
      set({ isFetchingNews: false});
    }
  }
}));

export default newsStore;