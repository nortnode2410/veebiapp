console.log('tere maailm')

function tervitus1(nimi) {
    return "Palavad tervitused, " + nimi
}

const tervitus2 = (nimi) => {
    return `Suur tere, ${nimi} `
}

const tervitus3 = nimi => `Nägudeni, ${nimi}`

console.log(tervitus1('Nipitiri'))
console.log(tervitus2('Pipi'))
console.log(tervitus3('Karupoeg Puhh'))

function naitaTervitust(nimi, tervitus) {
  console.log(tervitus(nimi))
}

naitaTervitust('Mõmmibeebi', tervitus1)
naitaTervitust('Mõmmibeebi', tervitus2)
naitaTervitust('Mõmmibeebi', tervitus3)