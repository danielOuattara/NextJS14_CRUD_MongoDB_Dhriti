import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    todo: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

// export default mongoose.model("Todo", TodoSchema);
export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
