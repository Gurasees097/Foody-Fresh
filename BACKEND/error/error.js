class ErrorHandler extends Error{
    constructor(message, StatusCode){
        super(message);
        this.StatusCode = StatusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Serve Error!";
    err.StatusCode = err.StatusCode || 500;

    return res.status(err.StatusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler;
