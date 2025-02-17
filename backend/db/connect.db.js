import mongoose from 'mongoose';

const db = (url)=>{
    return mongoose.connect(url);
}
export default db; 