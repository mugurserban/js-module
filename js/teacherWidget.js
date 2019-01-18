import PersonWidget from './personWidget.js';

export default class TeacherWidget extends PersonWidget {


    renderDesc() {
        let disciplinesLis = this.person.disciplines.map(x => `<li>${x}</li>`).join('');
        let disciplines = `<br><span class="disciplines">Disciplines:<ul>${disciplinesLis}</ul></span>`;
        let text = $(`<span class="title">${this.person.grad}</span><span class="desc">${this.person.desc}<span>${disciplines}`);
        let myGrades = this.refGrades;
        if (myGrades) {
            myGrades.replaceWith(text);
        } else {
            this.refDiv.append(text);
        }
        this.refGrades = text;
    }

    loadTeacherDesc(render = true) {
        var filename = `./data/teacher-${this.person.id}.json`;
        $.getJSON(filename, (result) => {
            this.person = { ...this.person, ...result };
            if (render) {
                this.renderDesc();
            }
        })
    }

}