import { wrapElements } from './utils.js';

export class ContentItem {
    DOM = {
        el : null,
        backCtrl: null,
        title: null,
        thumbgrid: null,
    }
    titleChars;

    constructor(DOM_el) {
        this.DOM.el = DOM_el;
        this.DOM.backCtrl = this.DOM.el.querySelector('.content__back');
        this.DOM.title = this.DOM.el.querySelector('.content__title');
        this.DOM.thumbgrid = this.DOM.el.querySelector('.content__images > .thumbgrid');
        this.DOM.carousel = this.DOM.el.querySelector('.carousel');
        
        // Apply the Splitting js to the title
        this.DOM.title.dataset.splitting = '';
        Splitting();

        // title characters
        this.DOM.titleChars = this.DOM.title.querySelectorAll('.char');
        wrapElements(this.DOM.titleChars, 'span', 'char-wrap');

        gsap.set([this.DOM.title, this.DOM.description, this.DOM.titleChars, this.DOM.nextThumb], {willChange: 'transform, opacity'});
    }
}