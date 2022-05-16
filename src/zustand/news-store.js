/* https://zustand.surge.sh/ */
import axios from 'axios';
import create from 'zustand';

const newsStore = create((set, get) => ({
  isFetchingNews: false,
  fetchNewsError: undefined,
  news: [],
  page: 1,
  filter: 'angular',
  setPage: (page) => set({page: page}),
  setFilter: (filter) => set({filter: filter}),
  fetchNews: async () => {
    /**Se asignan valores del state con el método get */
    const page = get().page;
    const filter = get().filter;

    try {
      /* Formateamos el estado para asegurarnos de que no tenga valores anteriores */
      set({ isFetchingNews: true, fetchNewsError: undefined, news: [] });

      const { data } = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${filter}&page=${page}`);

      set({news: data?.hits});
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