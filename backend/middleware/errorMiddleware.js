import { StatusCodes } from 'http-status-codes';

const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

    let errorMessage = 'Internal Server Error';

    // Handle validation errors (e.g., Mongoose, Joi)
    if (err.errors && typeof err.errors === 'object') {
        errorMessage = Object.values(err.errors)
            .map(item => item.message)
            .join(', ');
    } else if (err.message) {
        // Use the error message if it exists
        errorMessage = err.message;
    }

    const errorResponse = {
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? err : {},
    };

    res.status(statusCode).json(errorResponse);
};

export default errorMiddleware;