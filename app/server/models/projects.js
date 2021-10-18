const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {
        this.id = id;
        this.abstract = abstract;
        this.authors = authors;
        this.tags = tags;
        this.createdBy = createdBy;
        this.name = name;
    }
}

class Projects extends DataModel {
    validate(obj) {
        this.errors = [];

        for (const requirements in obj) {
            if(["authors", "tags"].includes(requirements)){
                if(!Array.isArray(obj[requirements])){
                    this.errors.push(`${requirements} should be an array`)
                }
            }else {
            if(obj[requirements] === ""){
                this.errors.push(`${requirements} should not be empty`)
                }
            }
        }

        return this.errors.length > 0 ? false: true;
    }


}
// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};
