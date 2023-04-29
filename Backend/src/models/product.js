import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    describe: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    preview: {
        type: String,
        required: true,
    },
    starttime: Number,
    
    
},{timestamps: true, versionKey: false});

export default mongoose.model("Product", productSchema);