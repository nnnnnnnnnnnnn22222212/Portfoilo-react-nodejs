import mongoose from "mongoose";

const aboutmeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Aboutme", aboutmeSchema);