import Person from "./person.js";
import PersonWidget from "./personWidget.js";

export default class PersonView {
    constructor() {
        this.widgets = [];
    }

    position() {
        for (let wi in this.widgets) {
            this.widgets[wi].position(wi);
        }
    }

    render() {
        var container = $("#students-list");
        container.empty();
        for (let wi in this.widgets) {
            this.widgets[wi].render(container, wi);
        }
        $(window).on("resize", () => this.position());
    }



    load(fileName) {
        if (this.widget) {
            this.widgets.length = 0;
        }
        $.ajax(fileName,
            {
                method: "GET",
                dataType: "json",
                content: "application/json",
                context: this,
                success: function (results) {
                    for (let { id, firstName, lastName } of results) {
                        let person = new Person(id, firstName, lastName);
                        let widget = new PersonWidget(person, this.widgets.length);
                        this.widgets.push(widget);
                    }
                    this.render();
                }
            }
        );
    }
}