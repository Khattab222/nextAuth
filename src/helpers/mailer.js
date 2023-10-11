import User from "@/models/userModel";
import nodemailer from "nodemailer";

const sendEmail = async ({to="",subject="",message="",attachments=[]}={})=>{
let transporter = nodemailer.createTransport({
    host: "localhost",
    port:587,
    secure:false,
    service: 'gmail',
    auth:{
        user: process.env.SENDER_EMAIL, // generated ethereal user
            pass: process.env.EMAIL_PASS, // generated ethereal password
    }
});


let info = await transporter.sendMail({
    from:`auth Application <${process.env.SENDER_EMAIL}>`,
    to,
    subject,
    html:message,
    attachments
});


return info.accepted.length? true:false;

}
export default sendEmail