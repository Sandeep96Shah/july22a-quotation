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
                quotation,
            }
        })
    }catch(error){
        return res.status(500).json({
            message: "Opps something went wrong!",
            data: {
                error,
            }
        })
    }
}


module.exports.getAllQuotations = async (req, res) => {
    try{
        // fetch all the quotations from the database
        // to fetch all the data from the Quotation model [ MODEL.find({})]
        const quotations = await Quotation.find({}).populate([{
            path: "user",
            select: "name email",
        }
    ]);

        // const quotations1 = await Quotation.find({}).populate("user", "name");
        
        // response the fetched quotations
        return res.status(200).json({
            message: "Successfuly fetched the quotations!",
            data: {
                quotations,
            }
        })
    }catch(error){
        return res.status(500).json({
            message: "Error while fetching the quotations!",
            data: {
                error,
            }
        })
    }
}