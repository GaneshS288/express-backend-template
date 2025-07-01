import ValidationError from "./ValidationError.js"
import AuthenticationError from "./AuthenticationError.js"
import ServerError from "./ServerError.js"

function errorHandler (err, req, res, next) {
    console.log(err);
    if(err instanceof ValidationError) {
        //validation error stuff
    }
    else if(err instanceof AuthenticationError) {
        //do auth error stuff
    }
    else {
        const serverError = new ServerError("something bad happened");
        res.json(serverError);
    }
}

export default errorHandler;