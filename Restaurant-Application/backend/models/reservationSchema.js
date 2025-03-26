import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "First Name must contains atleast 3 characters!"],
        maxLength: [30, "First Name cannot exceed 30 characters!"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Last Name must contains atleast 3 characters!"],
        maxLength: [30, "Last Name cannot exceed 30 characters!"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: (value) => validator.isEmail(value),
            message: "Invalid email format",
        }, 
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        minLength: [10, "Phone number must contain only 10 digits!"],
        maxLength: [10, "Phone number must contain only 10 digits!"],
    },
    date: {
        type: Date,
        required: [true, "Reservation date is required"],
    },
    time: {
        type: String,
        required: [true, "Reservation time is required"],
    },
    // numberOfGuests: {
    //     type: Number,
    //     required: [true, "Number of guests is required"],
    //     min: [1, "At least one guest is required"],
    // },
});


export const Reservation = mongoose.model("Reservation", reservationSchema);
export default mongoose.model("Reservation", reservationSchema);