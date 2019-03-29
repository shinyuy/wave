const mongoose = require('mongoose');
const bcryt = require('bcrypt');
const SALT_I = 10;

const userSchema = mongoose.Schema({
     email:{
         type: String,
         required: true,
         trim: true,
         unique: 1
     },
     password:{
         type:String,
         required: true,
         minLength: 5
     },
     name:{
         type: String,
         required:true,
         maxLength: 100
     },
     lastname:{
        type: String,
        required:true,
        maxLength: 100
    },
    cart:{
        type:Array,
        default: []
    },
    History:{
        type:Array,
        default:[]
    },
    role:{
        type:Number,
        default: 0
    },
    tokens:{
        type:String,
    }
});

userSchema.pre('save', function(next){
     var user = this;

     if(user.isModified('password')){
          bcryt.genSalt(SALT_I, function(err,salt){
         if (err) return next(err);

         bcryt.hash(user.password, salt, function(err, hash){
             if(err) return next(err);
             user.password = hash;
             next(); 
         })
     })
     } else {
         next();
     }
    
})

const User = mongoose.model('User', userSchema);

module.exports = {User}