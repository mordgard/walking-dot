const randomNumberGenerator = () => {
  return window.crypto.getRandomValues(new Uint8Array(1));
};

export default randomNumberGenerator;
