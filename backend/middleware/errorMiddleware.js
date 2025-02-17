const errorMiddleware = (err, req, res,next) => {
    res.status(500).json({message:"Internal server error", error: err.message});
}

export default errorMiddleware;