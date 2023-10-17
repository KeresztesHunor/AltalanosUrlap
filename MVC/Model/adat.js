const urlapLeiro = {
    nev: {
        megj: "Név",
        type: "text",
        placeholder: "Sussi Baki",
        value: "",
        pattern: /[A-Z][a-z]{3}/
    },
    szul: {
        megj: "Születési év",
        type: "number",
        placeholder: "2000",
        value: "2000",
        pattern: {
            min: 1900,
            max: 2023
        }
    }
};

export default urlapLeiro;