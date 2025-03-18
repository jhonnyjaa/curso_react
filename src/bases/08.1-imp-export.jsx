import heroes, {owners} from "./08-imp-export";

const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id);
const getHeroesByOwner= (owner) => heroes.filter((heroe) => heroe.owner ===owner);


