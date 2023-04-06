// const inputStr = prompt('Zadej DIČ:')

const isDIC = (inputStr) => {
  // kontrola délky
  if (inputStr.length < 11) {
    return false
  }
  if (inputStr.length > 12) {
    return false;
  }

  // kontrola prefixu CZ
  const prefix = inputStr.slice(0, 2);
  if (prefix !== 'CZ') {
    return false
  }

  // kontrola, že za prefixem jsou jen číslice
  const digits = inputStr.slice(2);

  const isInit = validator.isInt(digits);
  if (!validator.isInt(digits)) {
    return false
  }
  return true;
}
console.log('Platná DIČ');
console.log('CZ123456789', isDIC('CZ123456789'));
console.log('CZ1234567890', isDIC('CZ1234567890'));

console.log('Neplatná DIČ');
console.log('123', isDIC('123'));
console.log('ABC', isDIC('ABC'));
console.log('1234567890', isDIC('1234567890'));
console.log('001234567890', isDIC('001234567890'));
console.log('1234567890CZ', isDIC('1234567890CZ'));
console.log('CZ12345678901', isDIC('CZ12345678901'));
console.log('CZ12345678', isDIC('CZ12345678'));
console.log('CZA23456789', isDIC('CZA12345678'));