/* https://zustand.surge.sh/ */
import axios from 'axios';
import create from 'zustand';

const newsStore = create((set) => ({
  isFetchingNews: false,
  fetchNewsError: undefined,
  news: [],
  fetchNews: async (page = 1) => {
    try {
      /* Formateamos el estado para asegurarnos de que no tenga valores anteriores */
      set({ isFetchingNews: true, fetchNewsError: undefined, news: [] });

      const { data } = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=${page}`);

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