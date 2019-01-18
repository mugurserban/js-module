
export default class PersonWidget {
    constructor(person) {
        this.person = person;
    }

    render(container, index) {
        var name = this.person.fullName;
        let div = $(`<div class='card'><span class='name'>${name}</span></div>`);
        let picture = $(`<img class='picture' src="${this.person.picture}">`);
        div.append(picture);
        if (this.refDiv) {
            this.refDiv.replaceWith(div);
        } else {
            container.append(div);
        }
        this.refDiv = div;
        this.position(index);
        return div;
    }

    position(index) {
        index = Number(index);
        const cardWidth = 260, cardHeight = 400;
        let cardsPerRow = Math.floor($(window).width() / cardWidth);
        let rowNr = Math.ceil((index + 1) / cardsPerRow) - 1;
        var left = String(Math.ceil(index % cardsPerRow) * cardWidth);
        var top = String(rowNr * cardHeight);
        this.refDiv.css({ top, left });
    }
}