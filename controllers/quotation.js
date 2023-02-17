const Quotation = require('../model/quotation');

module.exports.createQuotation = async (req, res) => {
    try{
        // 1-> fetch the content and userId from the req.body object
        const { content } = req.body;

        // const userId = req.user._id;
        // below statment means same like above statement.
        const { _id: userId } = req.user;

        // 2-> save the data in db
        const quotation = await Quotation.create({
            content: content,
            user: userId,
        })

        // 3-> send response
        return res.status(200).json({
            message: "Quotation created successfully!",
            data: {
                quotation: quotation,
            }
        })
    }catch(error){
        return res.status(500).json({
            message: "Opps something went wrong!",
            data: {
                error: error,
            }
        })
    }
}