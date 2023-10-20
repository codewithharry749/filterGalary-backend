// wIjWtpJ4AamHDXeO

// mongodb + srv://mtankmtank265:<password>@cluster0.ruwbinv.mongodb.net/?retryWrites=true&w=majority

const mongoose = require('mongoose');

module.exports = async () => {

    try {
        const mongoUri =
            "mongodb+srv://mtankmtank265:wIjWtpJ4AamHDXeO@cluster0.ruwbinv.mongodb.net/user-gallary?retryWrites=true&w=majority";
        const connect = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log(`MongoDB connected : ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};