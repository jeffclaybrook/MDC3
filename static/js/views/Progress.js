import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Progress Indicators');
    }

    async getHtml() {
        return `
        <demo-section id="progress">
            <h1 slot="heading">Progress Indicators</h1>
            <demo-section>
                <h2 slot="heading">Linear</h2>
                <mdw-layout gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-progress ink="primary"></mdw-progress>
                    <mdw-progress value="30" ink="secondary" value-as-fraction="0.3"></mdw-progress>
                    <mdw-progress value="60" auto-hide ink="tertiary" value-as-fraction="0.6"></mdw-progress>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Circular</h2>
                <mdw-layout gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-progress circle ink="primary"></mdw-progress>
                    <mdw-progress circle value="30" ink="secondary" value-as-fraction="0.3"></mdw-progress>
                    <mdw-progress circle value="60" auto-hide ink="tertiary" value-as-fraction="0.6"></mdw-progress>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}