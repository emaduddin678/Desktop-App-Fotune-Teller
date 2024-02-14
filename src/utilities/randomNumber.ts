const getRandomNumber = (): number => {
  // Math.random() returns a value between 0 (inclusive) and 1 (exclusive)
  // Multiplying it by 10 gives a value between 0 (inclusive) and 10 (exclusive)
  // Adding 1 to the result makes the range between 1 and 10 (inclusive)
  return Math.floor(Math.random() * 10) + 1;
};

const getRandomPrediction = (): number => {
  return Math.floor(Math.random() * 24);
};

export { getRandomNumber, getRandomPrediction };
