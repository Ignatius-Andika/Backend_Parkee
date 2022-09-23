import mongoose from "mongoose";

const ParkingTicket = mongoose.Schema({
    name:{
        type: String,
        required: true
    },    
    vehicle_plate:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    vehicle_type:{
        type: String,
        required: true
    },
    checkin:{
        type: Date,
        required: true
    },
    checkout:{
        type: Date,
        required: true
    },
    total_price:{
        type: String,
        required: true
    }
});

export default mongoose.model('ParkingTicket', ParkingTicket);