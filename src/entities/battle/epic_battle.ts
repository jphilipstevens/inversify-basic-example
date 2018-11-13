import { inject, injectable, named } from "inversify";

import Battle from "../../interfaces/battle";
import SERVICE_IDENTIFIER from "../../constants/identifiers";
import TAG from "../../constants/tags";
import Warrior from "../../interfaces/warrior";
import Orders from "../../interfaces/orders";

@injectable()
class EpicBattle implements Battle {

    @inject(SERVICE_IDENTIFIER.WARRIOR) @named(TAG.CHINESE) public warrior1: Warrior;
    @inject(SERVICE_IDENTIFIER.WARRIOR) @named(TAG.JAPANESE) public warrior2: Warrior;
    @inject(SERVICE_IDENTIFIER.ORDERS) @named(TAG.AGGRESSIVE) public orders: Orders;

    public fight() {
        let desc = `${this.orders()}
                ${this.warrior1.name} (${this.warrior1.weapon.name})
                vs
                ${this.warrior2.name} (${this.warrior2.weapon.name})`;
        return desc;
    }

}

export default EpicBattle;
