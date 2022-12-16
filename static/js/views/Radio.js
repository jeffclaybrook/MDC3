import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Radio Buttons');
    }

    async getHtml() {
        return `
        <demo-section id="radio">
            <h1 slot="heading">Radio Buttons</h1>
            <demo-section>
                <h2 slot="heading">Normal</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <form>
                        <mdw-radio name="radio-demo" value="1" tabindex="0">Default</mdw-radio>
                        <mdw-radio name="radio-demo" ink="secondary" value="2" tabindex="0">Secondary</mdw-radio>
                        <mdw-radio name="radio-demo" ink="tertiary" value="3" tabindex="0">Tertiary</mdw-radio>
                        <mdw-radio name="radio-demo" ink="primary" disabled value="4">Disabled</mdw-radio>
                        <mdw-radio name="radio-demo" ink="primary" disabled value="5" checked selected>Disabled Checked</mdw-radio>
                    </form>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">No Label</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <form>
                        <mdw-radio name="radio-demo" aria-label="Default" value="1" tabindex="0"></mdw-radio>
                        <mdw-radio name="radio-demo" aria-label="Secondary" ink="secondary" value="2" tabindex="0"></mdw-radio>
                        <mdw-radio name="radio-demo" aria-label="Tertiary" ink="tertiary" value="3" tabindex="0"></mdw-radio>
                    </form>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}