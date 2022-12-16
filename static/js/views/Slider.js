import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Sliders');
    }

    async getHtml() {
        return `
        <demo-section id="sliders">
            <h1 slot="heading">Sliders</h1>
            <demo-section>
                <h2 slot="heading">Continuous</h2>
                <mdw-layout wrap gap="8px" style="margin: 24px auto; --mdw-layout__gap:8px;" column>
                    <mdw-slider tabindex="0"></mdw-slider>
                    <mdw-slider color="secondary" value="2" min="-10" max="10" tabindex="0"></mdw-slider>
                    <mdw-slider color="tertiary" min="-10" value="3" tabindex="0"></mdw-slider>
                    <mdw-slider class="mdw-custom" color="green" min="1" max="5" tabindex="0"></mdw-slider>
                    <mdw-slider class="mdw-custom" color="custom" min="0" step="5" value="100" tabindex="0"></mdw-slider>
                    <mdw-slider color="secondary" value="12" disabled aria-disabled="true"></mdw-slider>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Discrete</h2>
                <mdw-layout wrap gap="8px" style="margin: 24px; --mdw-layout__gap:8px;" column>
                    <mdw-slider value="1" min="0" list="tickmarks" ticks="10" step="10" tabindex="0"></mdw-slider>
                    <mdw-slider value="8" ticks="8" min="0" max="64" tabindex="0"></mdw-slider>
                    <mdw-slider color="secondary" value="2" min="-10" max="10" ticks="4" tabindex="0"></mdw-slider>
                    <mdw-slider color="tertiary" min="0" max="10" ticks="10" value="3" tabindex="0"></mdw-slider>
                    <mdw-slider class="mdw-custom" color="green" min="10" max="90" ticks="1" tabindex="0"></mdw-slider>
                    <mdw-slider class="mdw-custom" color="custom" min="0" step="5" value="100" ticks="5" tabindex="0"></mdw-slider>
                    <mdw-slider color="secondary" value="12" disabled ticks="10" aria-disabled="true"></mdw-slider>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}