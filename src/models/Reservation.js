const { Mongoose } = require("mongoose");

const mongoose = require('mongoose')

const reservationShema = mongoose.Schema({
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    match : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Match'
    },
    seat_row : {
        type : Number,
        required : true
    },
    seat_col : {
        type : Number,
        required : true
    } 
})

reservationShema.index({match : 1, seat_row : 1, seat_col : 1}, {unique : true})
const Reservation = mongoose.model('Reservation', reservationShema)
module.exports = Reservation