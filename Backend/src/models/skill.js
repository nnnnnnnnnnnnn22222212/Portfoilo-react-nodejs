import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Skill", skillSchema);