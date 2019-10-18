import booleanGenerator from "../boolean-generator";

const delayedBooleanGenerator = (steps, generatorType) => {
  const delay = 1000 / steps;
  return setInterval(() => booleanGenerator(generatorType), delay);
};

export { delayedBooleanGenerator };
