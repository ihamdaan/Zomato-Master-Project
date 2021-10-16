import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food: { type: mongoose.TypesObjectId, ref:"Foods"},
    restaurant: { type: mongoose.TypesObjectId, ref:"Restaurants"},
    user: { type: mongoose.TypesObjectId, ref:"Users"},
    rating:{type:Number, required: true},
    reviewText: {type: String, required: true},
    photos:[{
        type: mongoose.Types.ObjectId,
        ref: "Images"
    }]
},
{
    timestamps: true
}
);

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);