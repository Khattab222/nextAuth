import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
username:{
    type:String,
    required:[true,'please provide username'],
    unique:true
},
email:{
    type:String,
    required:[true,'please provide email'],
    unique:true
},
password:{
    type:String,
    required:[true,'please provide password'],

},
isverified:{
    type:Boolean,
    default:false
},
isAdmin:{
    type:Boolean,
    default:false
},
forgotpasswordtoken:String,
forgotpasswordtokenexpiry:Date,
verifytoken:String,
verifyTokenExpiry:Date

});



 const User = mongoose.models.User || mongoose.model('User', userSchema)
 export default User
