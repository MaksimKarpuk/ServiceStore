import Connector from "../connector";

class Caracters {
  getPersons = async (limit, offset, currentPage) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`characters`, {
        params: {
          limit,
          offset,
          currentPage,
        },
      });
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result;
  };
  getPerson = async (id) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`characters/${id}`);
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result;
  };
  getPersonData = async (name) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`characters?name=${name}`);
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result;
  };
  getTotalCardsAmount = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get("characters");
      result.value = response.data.length;
    } catch (error) {
      result.error = error;
    }
    return result;
  };
}
export default new Caracters();
