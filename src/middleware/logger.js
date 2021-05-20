module.exports=(req,res,next)=>{
    console.log('the request information : ',req.method,req.path);
    next();
}