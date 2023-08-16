function getFontSize(sentence: string) {
  const words = sentence.split(" ");
  words.sort((a, b) => b.length - a.length);
  return words[0].length > 3
    ? {
        fontSize: `${50 / words[0].length}vw`,
      }
    : {
        fontSize: `20vh`,
      };
}

export default getFontSize;
