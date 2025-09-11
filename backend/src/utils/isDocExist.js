const Data = require("../models/data");

async function isDocExist(queryVector, type, threshold = 0.9) {
  const allDoc = await Data.find({});
  let bestMatch = null;
  let bestScore = -1;

  for (const doc of allDoc) {
    if (!doc.vector) continue;
    // if (doc.type !== type) continue;
    // TODO: enable this line 👆 for type-specific checks
    const score = cosineSimilarity(queryVector, doc.vector);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = doc;
    }
  }

  if (bestScore >= threshold) {
    return { exists: true, doc: bestMatch, score: bestScore };
  } else {
    return { exists: false, score: bestScore };
  }
}

module.exports = isDocExist;
