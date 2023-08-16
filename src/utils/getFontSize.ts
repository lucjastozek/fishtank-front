function getFontSize(sentence: string) {
  const words = sentence.split(" ");
  words.sort((a, b) => b.length - a.length);
  return {
    fontSize: `${50 / words[0].length}vw`,
  };
}

export default getFontSize;
