export const errorHandler = (error,req,res,next)=>{
    const status = error.status?error.status:'Failed';
    const statusCode = error.statusCode?error.statusCode:500;
    const msg = error.messsage;
    const stack = error.stack;

    res.status(statusCode).json({
        status,messsage:msg,stack
    });
}

export const NotFoundPage = (req,res,next) => {
    const err = new Error(`Can't find ${req.originalUrl} on server`);
    next(err);
}