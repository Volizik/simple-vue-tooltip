/** Класс тултипа */
class Tooltip {
    /**
     * Инициализация тултипа
     * @param {TooltipBuilder} builder - класс TooltipBuilder
     */
    constructor(builder) {
        this.position = {};
        this.position.top = builder.position.top;
        this.position.right = builder.position.right;
        this.position.bottom = builder.position.bottom;
        this.position.left = builder.position.left;
        this.text = builder.text || '';
        this.class = builder.customClass || 'tooltip';
        this.config();
    }

    /** Конфигурация тултипа */
    config() {
        this.setPositionClasses();
        this.createDomEl();
    }

    /** Создание DOM-элемента тултипа */
    createDomEl() {
        const wrap = document.createElement('div');
        wrap.classList.add(this.class, ...this.positionClassList);
        wrap.innerText = this.text;
        this.html = wrap
    }

    /** Инициализация css классов тултипа для позиционирования */
    setPositionClasses() {
        this.positionClassList = Object.keys(this.position)
            .filter(key => this.position[key] === true)
            .map(className => `${this.class}-${className}`);
    }

}

/** Класс Строителя тултипа */
export default class TooltipBuilder {

    /** Инициализация класса TooltipBuilder */
    constructor() {
        this.position = {};
        this.position.top = true;
        this.position.right = false;
        this.position.bottom = false;
        this.position.left = true;
    }

    /**
     * Позиционирует тултип по вертикали
     * @param {String} vertical - top | bottom
     * @returns {TooltipBuilder} - Взвращает себя (this)
     */
    setVerticalPosition(vertical) {
        switch (vertical) {
            case 'top':
                this.position.top = true;
                this.position.bottom = false;
                return this;
            case 'bottom':
                this.position.bottom = true;
                this.position.top = false;
                return this;
            default:
                return this;
        }
    }

    /**
     * Позиционирует тултип по горизонтали
     * @param {String} horizontal - left | right
     * @returns {TooltipBuilder} - Взвращает себя (this)
     */
    setHorizontalPosition(horizontal) {
        switch (horizontal) {
            case 'left':
                this.position.left = true;
                this.position.right = false;
                return this;
            case 'right':
                this.position.right = true;
                this.position.left = false;
                return this;
            default:
                return this
        }
    }

    /**
     * Позиционирует тултип
     * @param {String[]} positions - left | right | top | bottom
     * @returns {TooltipBuilder} - Взвращает себя (this)
     */
    setPosition(positions) {
        Object.keys(positions).map(position => {
            if (position === 'left' || position === 'right') {
                this.setHorizontalPosition(position);
            } else {
                this.setVerticalPosition(position);
            }
        });
        return this
    }

    /**
     * Назначает текст сообщения тултипа
     * @param {String} text
     * @returns {TooltipBuilder} - Взвращает себя (this)
     */
    setText(text) {
        this.text = text;
        return this;
    }

    /**
     * Изменяет стандартиный css класс tooltip на пользовательский
     * @param {String} customClassName
     * @returns {TooltipBuilder} - Взвращает себя (this)
     */
    setCustomClass(customClassName) {
        this.customClass = customClassName;
        return this;
    }

    /**
     * Возвращает экзкмпляр класса Tooltip
     * @returns {Tooltip}
     */
    build() {
        return new Tooltip(this);
    }
}
