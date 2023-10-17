import urlapLeiro from "./adat.js";

class UrlapModell
{
    #urlapLeiro;

    constructor()
    {
        this.#urlapLeiro = urlapLeiro;
    }

    get urlapLeiro()
    {
        return this.#urlapLeiro;
    }
}

export default UrlapModell;