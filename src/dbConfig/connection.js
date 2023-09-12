import mongoose from 'mongoose'


export const connectionDb = async () =>{
    return (await mongoose.connect(process.env.DB_URL)).then((res) => console.log('db connected success'))
    .catch((err) => console.log('fail to connect db ...',err))
}