import mongoose from "mongoose";

const User = mongoose.Schema({
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
        type: String,
        required: true
    },
    checkout:{
        type: String,
        required: false
    },
    total_price:{
        type: String,
        required: false
    }
});

export default mongoose.model('Users', User);