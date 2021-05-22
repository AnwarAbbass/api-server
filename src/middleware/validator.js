'use strict';

function Idchecker() {
    return (req, res, next) => {
        if (req.params.id) {
            next();
        }
        else {
            next('there is no id');
        }
    }
}

module.exports = Idchecker;