//logs information about all incoming requests for debugging purposes

function requestLogger(req, res, next) {
    console.log(`${req.method}, ${req.get("Content-Type")}`);
}

export {requestLogger};

