import connector from "./connector";
import Caracters from "./Characters";

class Core {
  connector = connector;
  Caracters = Caracters;
}

export default new Core();
