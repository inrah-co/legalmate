import { pipeline } from "@xenova/transformers";

let embedder = null;

export async function initEmbedder() {
  if (!embedder) {
    embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
}

export async function textToVector(text) {
  if (!embedder)
    throw new Error("Embedder not initialized. Call initEmbedder() first.");
  const output = await embedder(text, { pooling: "mean", normalize: true });
  return Array.from(output.data);
}

// Cosine similarity function as requested
export function cosineSimilarity(a, b) {
  let dot = 0,
    normA = 0,
    normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] ** 2;
    normB += b[i] ** 2;
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function splitAndVectorize(text) {
  if (text.length <= 500) {
    return [await textToVector(text)];
  }
  const sentences = text
    .split(".")
    .map((s) => s.trim())
    .filter(Boolean);
  const vectors = [];
  for (const sentence of sentences) {
    vectors.push(await textToVector(sentence));
  }
  return vectors;
}
