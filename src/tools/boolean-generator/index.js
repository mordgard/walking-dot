import {
  pseudoRandomNumberGenerator,
  randomNumberGenerator
} from "../number-generator";

const booleanGenerator = generatorType => {
  if (generatorType === "RNG") {
    const number = randomNumberGenerator();
    return number % 2 === 0;
  } else if (generatorType === "PRNG") {
    const number = pseudoRandomNumberGenerator();
    return number % 2 === 0;
  }
};

export { booleanGenerator };
