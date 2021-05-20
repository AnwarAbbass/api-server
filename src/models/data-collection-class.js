'use strict';

class DataMang {
    constructor(model) {
        this.db = model;
    }

    read(id) {
        if (id) {
            return this.db.find({ _id: id });
        } else {
            return this.db.find({});
        }
    }

    create(obj) {
        const doc = new this.db(obj);
        return doc.save();
    }

    delete(id) {
        return this.db.findByIdAndDelete(id);
    }

    update(id, obj) {
        return this.db.findByIdAndUpdate(id, obj, { new: true });
    }
}

module.exports = DataMang;