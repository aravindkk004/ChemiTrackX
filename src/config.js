const mongoose = require ('mongoose');

main().catch(err => console.log(err));

async function main(){
    // await mongoose.connect('mongodb+srv://aravind463kk30:0uslxPbbImUsOajS@logindb.s8rzpdh.mongodb.net/?retryWrites=true&w=majority')
    // await mongoose.connect('mongodb+srv://aravind463kk30:0uslxPbbImUsOajS@logindb.s8rzpdh.mongodb.net/?retryWrites=true&w=majority')
    await mongoose.connect('mongodb+srv://aravind463kk30:0uslxPbbImUsOajS@logindb.s8rzpdh.mongodb.net/?retryWrites=true&w=majority');
}

const LoginSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
});
const IndustrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    corporate_num: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    off_num: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    confirmpass: {
        type: String,
        required: true
    }
})

const productSchema = new mongoose.Schema({
  name: String,
  volume: String,
  rate: String,
  cost: String,
  price: String
});
const dataSchema = new mongoose.Schema({
    year: String,
    imports: String,
    exports: String,
    rate: String
})

//collection part
const UserModel = new mongoose.model("usersnow",LoginSchema);
const IndustryModel = new mongoose.model("industrynow",IndustrySchema);
const tableData = new mongoose.model("products1now", productSchema);
const tableDatas = new mongoose.model("datasdb",dataSchema);


module.exports = {
    UserModel,
    IndustryModel,
    tableData,
    tableDatas
};
