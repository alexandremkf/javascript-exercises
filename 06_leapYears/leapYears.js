const leapYears = function(year) {
    const divByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const divByFourHundred = year % 400 === 0;

    if (divByFour && (!isCentury || divByFourHundred)) {
        return true;
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
