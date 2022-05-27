// do not change these lines

function reset() {
  adults = 0;
  children = 0;
}

let adults = 0;
let children = 0;

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

let adultsTotal = 0;
let childrenTotal = 0;

const enter = (numAdult, numChild) => {
  if (numAdult >= numChild) {
    adults += numAdult;
    children += numChild;
    adultsTotal += numAdult;
    childrenTotal += numAdult;
    const total = { adults: adultsTotal, children: childrenTotal };
    console.log('Total =', total);
  }
  return numAdult >= numChild;
};

const leave = (numAdult, numChild) => {
  const adultPresent = numAdult >= numChild;
  const adultLeaveWithChild = numAdult === numChild;
  const moreAdults = adults > children && numAdult > numChild;
  const valid = adults >= numAdult && children >= numChild;
  if ((adultPresent && adultLeaveWithChild && valid) || moreAdults) {
    adults -= numAdult;
    children -= numChild;
  }
  return (adultPresent && adultLeaveWithChild && valid) || moreAdults;
};

const occupancy = () => ({ adults: adults, children: children });

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset,
};
