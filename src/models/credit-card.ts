import { Schema, model, Document } from 'mongoose'

export interface ICreditCard extends Document {
    cardToken: string,
    brandType: string,
    maskedNumber: string,
    primary: boolean,
    userId: string
}
const creditCardSchema: Schema<ICreditCard> = new Schema({
    cardToken: {
        type: String,
        required: true
    },
    brandType: {
        type: String,
        required: true
    },
    maskedNumber: {
        type: String,
        required: true
    },
    primary: {
        type: Boolean
    },
    userId :{
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})

export default model<ICreditCard>('CreditCard', creditCardSchema)