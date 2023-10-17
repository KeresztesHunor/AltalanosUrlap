import { paratlanTag, parosTag } from "../../htmlUtils.js";

class UrlapView
{
    constructor(szuloElem, leiro)
    {
        szuloElem.append(
            parosTag("form", { method: "post" }, (() => {
                const TARTALOM_LISTA = [];
                for (const KULCS in leiro)
                {
                    const ERTEK = leiro[KULCS];
                    TARTALOM_LISTA.push(parosTag("label", { for: KULCS }, [ERTEK.megj]));
                    TARTALOM_LISTA.push(paratlanTag("input", { type: ERTEK.type, name: KULCS, placeholder: ERTEK.placeholder, value: ERTEK.value }));
                }
                TARTALOM_LISTA.push(paratlanTag("input", { type: "submit", value: "OK" }));
                return TARTALOM_LISTA;
            })())
        );
        szuloElem.children("form").children("input").toArray().forEach(mezo => {
            const MEZO_ELEM = $(mezo);
            const INPUT_MEZO_LEIRO = leiro[MEZO_ELEM.attr("name")];
            switch (MEZO_ELEM.attr("type"))
            {
                case "text":
                    MEZO_ELEM.attr("pattern", INPUT_MEZO_LEIRO.pattern);
                    break;
                case "number":
                    MEZO_ELEM.attr("min", INPUT_MEZO_LEIRO.pattern.min);
                    MEZO_ELEM.attr("max", INPUT_MEZO_LEIRO.pattern.max);
                    break;
            }
        });
    }
}

export default UrlapView;