/**
 * reference: https://stackoverflow.com/a/40724354
 */
const SI_SYMBOL = ["", "K", "M", "B", "T", "P", "E"];

const abbreviateNumber = (number) => {
  // what tier? (determines SI symbol)
  const tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier === 0) return number;

  // get suffix and determine scale
  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);

  // scale the number
  const scaled = number / scale;

  return scaled + suffix;
};

export default abbreviateNumber;
