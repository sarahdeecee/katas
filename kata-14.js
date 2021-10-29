const calculateChange = function(total, cash) {
  //Calculate amount of change
  let change = cash - total;
  let changeTypes = {};
  let twentyDollar = 0;
  let tenDollar = 0;
  let fiveDollar = 0;
  let twoDollar = 0;
  let oneDollar = 0;
  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;

  //How many bills of each type
  twentyDollar = Math.floor(change / 2000);
  if (twentyDollar != 0) {
    changeTypes.twentyDollar = twentyDollar;
    change -= (twentyDollar * 2000);
  }

  tenDollar = Math.floor(change / 1000);
  if (tenDollar != 0) {
    changeTypes.tenDollar = tenDollar;
    change -= (tenDollar * 1000);
  }

  fiveDollar = Math.floor(change / 500);
  if (fiveDollar != 0) {
    changeTypes.fiveDollar = fiveDollar;
  }
  change -= (fiveDollar * 500);
  
  twoDollar = Math.floor(change / 200);
  if (twoDollar != 0) {
    changeTypes.twoDollar = twoDollar;
    change -= twoDollar * 200;
  }
  
  oneDollar = Math.floor(change / 100);
  if (oneDollar != 0) {
    changeTypes.oneDollar = oneDollar;
    change -= (oneDollar * 100);
  }
  
  quarter = Math.floor(change / 25);
  if (quarter != 0) {
    changeTypes.quarter = quarter;
    change -= (quarter * 25);
  }
  
  dime = Math.floor(change / 10);
  if (dime != 0) {
    changeTypes.dime = dime;
    change -= (dime * 10);
  }
  
  nickel = Math.floor(change / 5);
  if (nickel != 0) {
    changeTypes.nickel = nickel;
    change -= (nickel * 5);
  }
  
  penny = Math.floor(change / 1);
  if (penny != 0) {
    changeTypes.penny = penny;
    change -= (penny * 1);
  }

  return changeTypes;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));