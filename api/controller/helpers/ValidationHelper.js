// References: 
// https://www.w3schools.com/jsref/jsref_match.asp

function checkRequestValueIntegrity(value) {
    if (value.length >5 || (parseInt(value[0]) == 0 && value.length > 1 )) {
        return null;
    }
    
    const res = value.match(/^-?[0-9]\d*(\.\d+)?$/);
    return res;
  }     

module.exports = {
    checkRequestValueIntegrity
};