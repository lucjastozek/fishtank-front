function getFontSize(sentence: string) {
  const words = sentence.split(" ");
  words.sort((a, b) => b.length - a.length);
  const width = window.innerWidth;
  const height = window.innerHeight;

  const sizes = [48 / words[0].length, 36 / words.length, 16];

  return width < height
    ? {
        fontSize: `${Math.min(...sizes)}vw`,
      }
    : {
        fontSize: `${Math.min(...sizes)}vh`,
      };
}

export default getFontSize;
