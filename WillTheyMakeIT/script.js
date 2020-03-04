const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let isMade = (distanceToPump - (mpg * fuelLeft))
  if (isMade <= 0) {
    return true
  } else {
    return false
  }
};
zeroFuel(50, 25, 2)
zeroFuel(100, 50, 1)
