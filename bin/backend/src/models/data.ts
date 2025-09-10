import mongoose, { Schema, Document } from "mongoose";

interface IData extends Document {
  title: string;
  description: string;
  vector: string; // Assuming vector is stored as a string representation
  type: "Constitution" | "Indian union law" | "state law";
}

const DataSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  vector: { type: String, required: true },
  type: {
    type: String,
    enum: ["Constitution", "Indian union law", "state law"],
    required: true,
  },
});

const DataModel = mongoose.model<IData>("Data", DataSchema);

export { DataModel, IData };
