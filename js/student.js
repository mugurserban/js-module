import Person from './person.js';

export default class Student extends Person {

    constructor(id = "", firstName = "", lastName = "", picture = "", grades = "") {
        super(id, firstName, lastName, picture);
        this.studentGrades = grades;
    }

    evaluateStudent() {
        if (this.getAverageGrade() >= 6) {
            let studentGrades = this.studentGrades;
            for (let k in studentGrades) {
                if (studentGrades[k] < 5) {
                    this.admis = false;
                    return;
                }
            }
            this.admis = true;
        } else {
            this.admis = false;
            return false;
        }
    }

    getAverageGrade() {
        var grades = this.studentGrades;
        if (!grades) return 0;
        var sum = 0, count = 0;
        for (let grade in grades) {
            sum += grades[grade];
            count++;
        }
        return Number((sum / count).toFixed(2));
    }

}
