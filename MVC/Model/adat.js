const urlapLeiro = {
    nev: {
        megj: "Név",
        type: "text",
        placeholder: "Sussi Baki",
        value: "",
        pattern: /[A-Z][a-z]{2,15}/,
        valid: "1 nagybetűvel kezdődik, legalább 3 karakter, legfeljebb 15"
    },
    szul: {
        megj: "Születési év",
        type: "number",
        placeholder: "2000",
        value: "2000",
        pattern: {
            min: 1900,
            max: 2023
        },
        valid: "[1900-2023]"
    }
};

export default urlapLeiro;