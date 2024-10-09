export const errorHandler = async (err, req, res , next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    let message = err.message;

    if(err.name === "castError" && err.kind === "ObjectId"){
        statusCode = 400;
        message = "Not found resource";
    }

    res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    })

}

export const routeNotFound = (req,res,next) => {
    const error = new Error(`Not found: ${req.originalUrl}`);
    res.status(404);
    next(error);
}