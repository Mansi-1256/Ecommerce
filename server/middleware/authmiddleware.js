import React from 'react'

const authmiddleware = (req, res, next) => {


    res.send("auth");
    next();

}


export default authmiddleware;