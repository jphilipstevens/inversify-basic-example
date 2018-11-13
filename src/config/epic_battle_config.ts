import "reflect-metadata";

import { Container } from "inversify";

import Battle from "../interfaces/battle";
import EpicBattle from "../entities/battle/epic_battle";
import SERVICE_IDENTIFIER from "../constants/identifiers";
import TAG from "../constants/tags";
import fightOrders from "../entities/orders/fight";
import Orders from "../interfaces/orders";

let container = new Container();

container.bind<Orders>(SERVICE_IDENTIFIER.ORDERS).toFunction(fightOrders).whenTargetNamed(TAG.AGGRESSIVE);
container.bind<Battle>(SERVICE_IDENTIFIER.BATTLE).to(EpicBattle);


export default container;
