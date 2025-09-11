const { textToVector, cosineSimilarity } = require("./vectorUtils");

module.exports = async function optimizePrompt(contextPrompt, queryVector) {
  const textArr = contextPrompt.split("\n");

  // const similarities = textArr.map(async (item) => {
  //   const vector = await textToVector(item);
  //   const score = cosineSimilarity(queryVector, vector);
  //   console.log("Score and vector:");

  //   console.log(score);
  //   console.log(vector);

  //   return {
  //     text: item || "",
  //     score: score,
  //   };
  // });

  const similarities = [];

  for (let item of textArr) {
    const vector = await textToVector(item);
    const score = cosineSimilarity(queryVector, vector);
    similarities.push({
      text: item || "",
      score: score,
    });
  }

  console.warn(similarities);

  similarities.sort((a, b) => b.score - a.score);

  //   const topChunks = similarities.slice(0, topK);
  //   let contextText = topChunks
  //     .map((c) => `${c.text}`)
  //     .join(".");
  const contextText = similarities.map((c) => `${c.text}`).join("\n");

  // Implement optimization logic here
  return contextText;
};
