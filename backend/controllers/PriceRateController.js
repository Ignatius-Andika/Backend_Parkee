import PriceRate from "../models/PriceRate.js";

export const getRate = async (req, res) => {
    try {
        const rate = await PriceRate.find();
        res.json(rate);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPriceByHour = async (req, res) => {
    try {
        const rate = await PriceRate.findById(req.params.id);
        res.json(rate);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveRate = async (req, res) => {
    const rate = new PriceRate(req.body);
    try {
        const inserteduser = await rate.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateRate = async (req, res) => {
    try {
        const updatedrate = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedrate);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteRate = async (req, res) => {
    try {
        const deletedrate = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deletedrate);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}