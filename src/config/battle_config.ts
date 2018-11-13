import { Container } from "inversify";
import politicalBattleContainer from "./political_battle_config";
import epicBattleContainer from "./epic_battle_config";

const container = Container.merge(politicalBattleContainer, epicBattleContainer);

export default container;
