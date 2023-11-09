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

document.body.innerHTML = `
<p>Dnes je ${dayjs().format("DD/MM")}</p>
<p>Aktuální rok je ${dayjs().format("YYYY")}</p>
`