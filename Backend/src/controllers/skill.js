
import Skill from "../models/skill";




export const getAll = async (req, res) => {
    
    const data = await Skill.find();
    return res.json(data);
};

