const notFoundMiddleware = (req,res) => {
    res.status(404).json({msg:`Route ${req.originalUrl} not found`});
}
export default notFoundMiddleware;