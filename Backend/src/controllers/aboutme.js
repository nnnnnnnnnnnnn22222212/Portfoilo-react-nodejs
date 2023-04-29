
import Aboutme from "../models/aboutme";




export const getAll = async (req, res) => {
    
    const data = await Aboutme.find();
    return res.json(data);
};

