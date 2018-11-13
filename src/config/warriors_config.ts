import "reflect-metadata";

import { Container } from "inversify";

import Katana from "../entities/weapons/katana";
import Ninja from "../entities/warriors/ninja";
import Samurai from "../entities/warriors/samurai";
import SERVICE_IDENTIFIER from "../constants/identifiers";
import Shuriken from "../entities/weapons/shuriken";
import TAG from "../constants/tags";
import Warrior from "../interfaces/warrior";
import Weapon from "../interfaces/weapon";

let container = new Container();

container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Ninja).whenTargetNamed(TAG.CHINESE);
container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Samurai).whenTargetNamed(TAG.JAPANESE);
container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Shuriken).whenParentNamed(TAG.CHINESE);
container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Katana).whenParentNamed(TAG.JAPANESE);

export default container;
