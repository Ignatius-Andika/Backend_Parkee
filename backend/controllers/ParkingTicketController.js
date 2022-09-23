import ParkingTicket from "../models/ParkingTicket";

export const getTicket = async (req, res) => {
    try {
        const ticket = await ParkingTicket.find();
        res.json(ticket);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getTicketById = async (req, res) => {
    try {
        const ticket = await ParkingTicket.findById(req.params.id);
        res.json(ticket);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveTicket = async (req, res) => {
    const ticket = new ParkingTicket(req.body);
    try {
        const inserteduser = await ticket.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateTicket = async (req, res) => {
    try {
        const updatedticket = await ParkingTicket.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedticket);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteTicket = async (req, res) => {
    try {
        const deletedTicket = await ParkingTicket.deleteOne({_id:req.params.id});
        res.status(200).json(deletedTicket);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}