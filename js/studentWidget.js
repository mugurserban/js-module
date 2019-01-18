import PersonWidget from './personWidget.js';

export default class StudentWidget extends PersonWidget {
    constructor(person) {
        super(person);
    }

    render(container, index) {
        let div = super.render(container, index);
        let title = $(`<span class='title'>student</span>`);
        div.append(title);
        let button = $(`<button class='studentButton' >(Re)load grades</button>`);
        button.on('click', () => {
            this.loadStudentGrades();
        });
        div.append(button);
        this.renderGrades();
    }

    renderGrades() {
        var grades = this.person.studentGrades;
        if (!grades) return;
        var text = "<table width='100%'><tr><th align='left'>Discipline</th><th align='right'>Grade</th></tr>";
        for (let grade in grades) {
            text += `<tr> <td>${grade}</td> <td align='right'>${grades[grade]}</td></tr> `;
        }
        text += ` <tr><td><b>Average</b></td><td align='right'><b>${this.person.getAverageGrade()}</b></td></tr></table > `;
        text = $(`<div class="grades"> ${text}  </div> `);
        let myGrades = this.refGrades;
        if (myGrades) {
            myGrades.replaceWith(text);
        } else {
            this.refDiv.append(text);
        }
        text.slideDown();
        this.refGrades = text;
    }

    loadStudentGrades(render = true) {
        var filename = `./data/grades-${this.person.id}.json`;
        $.getJSON(filename, (result) => {
            this.person.studentGrades = result;
            this.person.evaluateStudent();
            if (render) {
                this.renderGrades();
            }
        })
    }

}