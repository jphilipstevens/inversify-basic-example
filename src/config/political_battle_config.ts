import "reflect-metadata";

import { Container } from "inversify";

import Battle from "../interfaces/battle";
import createPoliticalBattle from "../entities/battle/political_battle";
import SERVICE_IDENTIFIER from "../constants/identifiers";
import TAG from "../constants/tags";
import politicalOrders from "../entities/orders/discuss";
import Warrior from "../interfaces/warrior";
import Orders from "../interfaces/orders";

let container = new Container();

container.bind<Orders>(SERVICE_IDENTIFIER.ORDERS).toFunction(politicalOrders).whenTargetNamed(TAG.POLITICAL);
container.bind<Battle>(SERVICE_IDENTIFIER.DEBATE).toDynamicValue((context) => {
  const warrior1: Warrior = context.container.getNamed(SERVICE_IDENTIFIER.WARRIOR, TAG.CHINESE);
  const warrior2: Warrior = context.container.getNamed(SERVICE_IDENTIFIER.WARRIOR, TAG.JAPANESE);
  const orders: Orders = context.container.getNamed(SERVICE_IDENTIFIER.ORDERS, TAG.POLITICAL);

  return createPoliticalBattle(warrior1, warrior2, orders);
});

export default container;
