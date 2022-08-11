var numero = "176";
let numerovirgula = numero.replace(/(\d{1,2}|\G\d{2})(?=(?:\d{2})+(?!\d))/g, "$1,");



console.log(numerovirgula)