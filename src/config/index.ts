import { Container } from "inversify";
// import mainContainer from "./ioc_config";

import battleContainer from "./battle_config";
import warriorContainer from "./warriors_config";

const container = Container.merge(warriorContainer, battleContainer);

export default container;
