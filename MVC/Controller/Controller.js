import UrlapModell from "../Model/UrlapModell.js";
import UrlapView from "../View/UrlapView.js";

class Controller
{
    #urlapModell;
    #urlapView;

    constructor()
    {
        this.#urlapModell = new UrlapModell();
        this.#urlapView = new UrlapView($("#urlap"), this.#urlapModell.urlapLeiro);
    }
}

export default Controller;