import { Schema, model } from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxlength: 250
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 250
    },
    password: {
        type: String,
        required: true,
        maxlength: 100
    },
    name: {
        type: String,
        maxlength: 250
    },
    phone: {
        type: String,
        maxlength: 20
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'role',
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = model("user", userSchema)

export default User