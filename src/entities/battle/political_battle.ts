import Battle from "../../interfaces/battle";
import Warrior from "../../interfaces/warrior";
import Orders from "../../interfaces/orders";

const createPoliticalBattle = (warrior1: Warrior, warrior2: Warrior, orders: Orders): Battle => ({
    fight: () => {
        let desc = `${orders()}
                ${warrior1.name} (${warrior1.weapon.name})
                vs
                ${warrior2.name} (${warrior2.weapon.name})`;
        return desc;
    }
});
export default createPoliticalBattle;
