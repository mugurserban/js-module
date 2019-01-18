import Teacher from "./teacher.js";
import TeacherWidget from "./teacherWidget.js";
import PersonView from "./personView.js";
export default class TeacherView extends PersonView {

    load() {
        if (this.widgets) {
            this.widgets.length = 0;
        }
        $.ajax('https://randomuser.me/api/?results=4&inc-name,picture',
            {
                method: "GET",
                dataType: "json",
                content: "application/json",
                context: this,
                success: function (data) {
                    let id = 0;
                    for (let result of data.results) {
                        let firstName = result.name.first;
                        let lastName = result.name.last;
                        let picture = result.picture.medium;
                        let teacher = new Teacher(++id, firstName, lastName, picture);
                        let widget = new TeacherWidget(teacher, this.widgets.length);
                        widget.loadTeacherDesc();
                        this.widgets.push(widget);
                    }
                    this.render();
                }
            }
        );
    }
}