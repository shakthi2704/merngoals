import asyncHandler from "express-async-handler"


// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler ((req,res) =>{
    res.status(200).json({Message:"get goal!@"})
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler((req,res) =>{
    console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text')
    }
  
})


// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler((req,res) =>{
    res.status(200).json({Message:`update ${req.params.id}`})
})


// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler((req,res) =>{
    res.status(200).json({Message:`delete ${req.params.id}`})
})


export {
    setGoal,getGoals,updateGoal,deleteGoal
}