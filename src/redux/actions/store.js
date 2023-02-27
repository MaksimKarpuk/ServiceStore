import { store } from "../reducers/store";
// import Core from "../../repository";

export const getCharactersFromApi = (values) => async (dispatch) => {
  dispatch(store.actions.setLoading(true));
  dispatch(store.actions.setOrder(values));
  // try {
  //   const { value, error } = await Core.Caracters.getPersons(limit, offset, currentPage);
  //   if (error || !value) {
  //     dispatch(cardinfo.actions.setCharactersError(true));
  //   } else {
  //     dispatch(cardinfo.actions.setCharacters(value));
  //   }
  // } catch (error) {
  //   console.log("Action error!");
  // }
  dispatch(store.actions.setLoading(false));
};
