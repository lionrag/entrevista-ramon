import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IUser extends Document{
    email: string,
    password: string,
    comparePassword: (password: string) => Promise<Boolean>
}

const userSchema: Schema<IUser> = new Schema({
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
    versionKey: false
})

userSchema.pre<IUser>('save', async function(next) {
    if(!this.isModified('password')) return next
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
})

userSchema.methods.comparePassword = async function(password: string): Promise<Boolean>{
    return await bcrypt.compare(password, this.password)
}

export default model<IUser>('User', userSchema)