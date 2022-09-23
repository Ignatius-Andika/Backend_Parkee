import mongoose from "mongoose";

const PriceRate = mongoose.Schema({
    hour:{
        type: String,
        required: true
    },
    total_price:{
        type: String,
        required: true
    }
});

export default mongoose.model('PriceRate', PriceRate);