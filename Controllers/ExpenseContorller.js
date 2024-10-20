const userModel = require("../Models/User");

const addExpenses = async (req, res) => {
  const body = req.body;
  const { _id } = req.user;
  try {
    const userData = await userModel.findByIdAndUpdate(
      _id,
      {
        $push: { expenses: body },
      },
      { new: true }
    );
    return res.status(200).json({
        message:"expenses Added successfully",
        success: true,
        data: userData?.expenses
    })
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      error: error,
      success: false,
    });
  }
};
const fetchExpenses = async (req, res) => {
  const body = req.body;
  const _id = req.user._id;

  try {
    const userData = await userModel.findById(_id).select(`expenses`); 
    return res.status(200).json({
      message: "expeneses fetched successfully",
      success:true,
      data: userData?.expenses
    });
    
  } catch (error) {
    return res.status(500).json({
        message:"oops something went wrong",
        error: error,
        success:false
    })
    
  }
};
const deletExpenses = async (req, res) => {
  const {_id} = req.user;
  const {expenseId} = req.params;
  try {
    const userData = await userModel.findByIdAndUpdate(
        _id,
        {
            $pull:{expenses: {_id : expenseId}}
        },
        {new: true}
    )
    return res.status(200).json({
        message:"expense deleted successfuly",
        success:true,
        data: userData?.expenses
    })
    
  } catch (error) {
    return res.status(500).json({
        message:"oops something went wrong",
        error:error,
        success:false

    })
    
  }
};

module.exports = { addExpenses, fetchExpenses, deletExpenses };
