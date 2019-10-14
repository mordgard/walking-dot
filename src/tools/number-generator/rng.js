const randomNumberGenerator = (max=999) => {
  // Random Number Generator
  return (window.crypto.getRandomValues(new Uint8Array(1)));
};

export default randomNumberGenerator;
