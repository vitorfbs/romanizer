//References: 
//https://www.w3schools.com/jsref/jsref_match.asp

function checkRequestValueIntegrity(value) {
    //TODO make different outcomes for each failure in the user input
    if (value.length > 5 || (parseInt(value[0]) == 0 && value.length > 1 )) {
        return null;
    }
    
    const res = value.match(/^[0-9]+$/);
    return res;
  }     

module.exports = {
    checkRequestValueIntegrity
};