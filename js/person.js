export default class Person {
    constructor(id = "", firstName = "", lastName = "", picture = "") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.id = id;
    }

    get fullName() {
        let { firstName, lastName } = this;
        return firstName + " " + lastName;
    }

}