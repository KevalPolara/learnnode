const twilio = require('twilio');

const sendOtp = (req,res,next) => {
    const accountSid = 'AC7b29975d096f89dc0d8f04631b382cfe';
    const authToken = '398a5bc8872e613bd063a5a48c71824f';
    const client = twilio(accountSid, authToken);
    const otp = Math.floor(1000 + Math.random () * 9000)
    client.messages
        .create({
            body: `Your LearnNode Otp is ${otp}`,
            from: '+16592575833',
            to:   req.body.mobilenumber
        })
        .then(() =>{
            req.session.mobilenumber = otp;
            next();
        })
        }

const verifyOtp = (req,res) => {

    if(req.body.otp === req.session.mobilenumber){
        res.status(200).json("Otp is Verified")
    }else{
        res.status(200).json("Wrong Otp")
    }

}

module.exports = {
    sendOtp,
    verifyOtp
}

// FLJBTV2QXARP2R133Q6CLD93