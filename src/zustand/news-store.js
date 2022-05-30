/* https://zustand.surge.sh/ */
import create from 'zustand';
import apiCall from './api'

const newsStore = create((set, get) => ({
  isFetchingNews: false,
  fetchNewsError: undefined,
  news: [],
  page: 1,
  /**Si existe un valor en local storage se lo asigna, si no por default sera angular*/
  filter: localStorage.getItem("filter") || 'angular',
  setPage: async (page) => {
    try {
      /**Formateamos solo los errores ya que el fetching lo hace el componente del scroll infinito */
      set({ fetchNewsError: undefined });

      /**Traemos el filtro y noticias actuales */
      const currentNews = get().news;
      const filter = get().filter;

      /**Actualizamos la página */
      set({ page: page });

      /* Guardamos al respuesta del nuevo endpoint */
      const { data } = await apiCall.get(`/search_by_date?query=${filter}&page=${page}`);

      // Actualizamos el stado de news
      set({ news: currentNews.concat(data.hits) })
    }
    catch (error) {
      set({ fetchNewsError: error });
    }

  },
  setFilter: (filter) => {
    set({ isFetchingNews: true, fetchNewsError: undefined, news: [] });
    try {
      /**Seteamos el filtro en local storage */
      localStorage.setItem("filter", filter)
      /**Guardamos el valor actual en una variable */
      let localFilter = localStorage.getItem("filter");
      /**ActualIzamos el filtro Y la página*/
      set({ filter: localFilter });
      set({ page: 1 })
    }
    catch (error) {
      set({ fetchNewsError: error })
    }
    finally {
      set({ isFetchingNews: false });
    }

  },
  fetchNews: async () => {
    /**Se asignan valores del state con el método get */
    const page = get().page;
    const filter = get().filter;

    try {
      /* Formateamos el estado para asegurarnos de que no tenga valores anteriores */
      set({ isFetchingNews: true, fetchNewsError: undefined, news: [] });

      const { data } = await apiCall.get(`/search_by_date?query=${filter}&page=${page}`);
      /**Filtramos el array de elementos con valores vacíos */
      const filterData = data.hits.filter(element => {
        return element.author !== null && element.story_title !== null && element.story_url !== null && element.created_at !== null;
      });

      set({ news: filterData });
    }
    catch (error) {
      set({ fetchNewsError: error })
    }
    finally {
      set({ isFetchingNews: false });
    }
  }
}));

export default newsStore;