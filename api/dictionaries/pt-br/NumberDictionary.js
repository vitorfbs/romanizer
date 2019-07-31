//TODO find a way to remove the redundancy of "Dez" in the tens and outliers arrays
//TODO find a better logic for the number access than using a null value to buffer the beggining of the array

const units = [
  "Zero",
  "Um", 
  "Dois", 
  "Três", 
  "Quatro", 
  "Cinco", 
  "Seis", 
  "Sete", 
  "Oito", 
  "Nove"
];

const tens = [
  null,
  "Dez", 
  "Vinte", 
  "Trinta", 
  "Quarenta", 
  "Cinquenta", 
  "Sessenta", 
  "Setenta", 
  "Oitenta", 
  "Noventa"
];

const hundreds = [
  null,
  "Cem", 
  "Duzentos", 
  "Trezentos", 
  "Quatrocentos", 
  "Quinhentos", 
  "Seiscentos", 
  "Setecentos", 
  "Oitocentos", 
  "Novecentos"
];

const outliers = [
  "Dez", 
  "Onze", 
  "Doze", 
  "Treze", 
  "Catorze", 
  "Quinze", 
  "Dezesseis", 
  "Dezessete", 
  "Dezoito", 
  "Dezenove"
];

module.exports = {
    units,
    tens,
    hundreds,
    outliers,
  };
  