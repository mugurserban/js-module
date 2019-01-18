import Person from './person.js';

export default class Teacher extends Person {

    constructor(id = "", firstName = "", lastName = "", picture = "") {
        super(id, firstName, lastName, picture);
        this.grad = "";
        this.desc = "";
        this.disciplines = [];
    }

}

