import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create({ baseURL: "http://localhost:9000/api/" });
  }
}

export default new Connector();
