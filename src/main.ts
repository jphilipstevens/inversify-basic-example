import Battle from "./interfaces/battle";
import container from "./config";
import SERVICE_IDENTIFIER from "./constants/identifiers";

// Composition root
let epicBattle = container.get<Battle>(SERVICE_IDENTIFIER.BATTLE);
console.log(epicBattle.fight());

epicBattle = container.get<Battle>(SERVICE_IDENTIFIER.DEBATE);
console.log(epicBattle.fight());
