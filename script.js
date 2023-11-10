/*Validátor e-mailu a telefonu:

const email = prompt("Zadej svůj e-mail")


document.body.innerHTML = `
<p>michal@michal.cz - ${validator.isEmail("michal@michal.cz")}</p>
<p>@. - ${validator.isEmail("@.")}</p>
<p>whebvwevwezv - ${validator.isEmail("whebvwevwezv")}
<p>vendula@test.cz - ${validator.isEmail("vendula@test.cz")}</p>
<p>${email} - ${validator.isEmail(email)}</p>
<p>736259454 - ${validator.isMobilePhone("736259454", "cs-CZ")}</p>
`*/

/*document.body.innerHTML = `
<p>Dnes je ${dayjs().format("dddd/DD/MM")}</p>
<p>Aktuální rok je ${dayjs().format("YYYY")}</p>
`*/

/*const christmas = dayjs("2023-12-24")
const today = dayjs()

if(today.isAfter(christmas)) {
    document.body.innerHTML = "Smůla. :-( Už je po Vánocích."
} else {
    document.body.innerHTML = "Brzy přijde Ježíšeeeek!!!"
}*/

/*Úkol č. 1* https://kodim.cz/vyvoj-webu/js1/lekce/knihovny-vlastni-funkce/cv-knihovny/zakladni-validace/*/

/*const email = prompt("Zadej svůj e-mail"); /*Vstup od uživatele */
/*const isEmail = validator.isEmail(email); /*Validace, zda jde o mail*/
/*const messageElement = document.querySelector('#msg'); /*Výstup bude messageElement s ID #msg, v podmínce pomocí classList vyberu třídu, která se má aplikovat na zprávu.*/


/*if(isEmail) {
    messageElement.textContent = "E-mail je v pořádku.";
    messageElement.classList.add('msg--valid');
} else {
    messageElement.textContent = "E-mail není správný.";
    messageElement.classList.add('msg--invalid');
}*/


/*Vlastní funkce*/
/*
function mojeFunkce(cislo) { Starý typ zápisu funkce
    return cislo * 5
}

const druhaFunkce = function (cislo) {
    return cislo * 2
}

const tretiFunkce = (cislo) => { 
    return cislo * 7
} /*ARROW FUNKCE = Nejnovější a nejelegantnější typ zápisu, v určitých chvílích dokáže ušetřit spoustu kódu

document.body.innerHTML = `
<p>${mojeFunkce(30)}</p>
<p>${druhaFunkce(10)}</p>
<p>${tretiFunkce(10)}</p>
`*/

/* ÚKOL https://kodim.cz/vyvoj-webu/js1/lekce/knihovny-vlastni-funkce/cv-vlastni-funkce/obsah-elipsy */


/*const ellipseArea = (width, height) => {
    return (width / 2) * (height / 2) * Math.PI;
  };
  
  document.body.innerHTML += `<p>${ellipseArea(1, 2)}</p>`;
  document.body.innerHTML += `<p>${ellipseArea(2, 2)}</p>`;*/