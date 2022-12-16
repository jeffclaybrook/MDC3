import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Tooltips');
    }

    async getHtml() {
        return `
        <demo-section id="tooltips">
            <h1 slot="heading">Tooltips</h1>
            <demo-section>
                <h2 slot="heading">Desktop</h2>
                <mdw-layout wrap gap="16px" style="margin: 24px; --mdw-layout__gap:16px;" column>
                    <mdw-tooltip open>Default</mdw-tooltip>
                    <mdw-tooltip open><mdw-icon>Sunny</mdw-icon> Sunny</mdw-tooltip>
                    <mdw-tooltip open color="surface">Surface</mdw-tooltip>
                    <mdw-tooltip open color="primary">Primary</mdw-tooltip>
                    <mdw-tooltip open color="primary-container">Primary Container</mdw-tooltip>
                    <mdw-tooltip open color="inverse-surface">Inverse Surface</mdw-tooltip>
                    <mdw-tooltip open color="inverse-primary">Inverse Primary</mdw-tooltip>
                    <mdw-tooltip open style="background-color:#121212; color:white">White on #121212</mdw-tooltip>
                    <mdw-tooltip open type-style="headline-small">Headline Small</mdw-tooltip>
                    <mdw-tooltip open shape-style="full">Full Shape</mdw-tooltip>
                    <mdw-tooltip open shape-style="small" shape-end>Small End Shape</mdw-tooltip>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Mobile</h2>
                <mdw-layout wrap gap="16px" style="margin: 24px; --mdw-layout__gap:16px;" column>
                    <mdw-tooltip open touch>Default</mdw-tooltip>
                    <mdw-tooltip open touch><mdw-icon>Sunny</mdw-icon> Sunny</mdw-tooltip>
                    <mdw-tooltip open touch color="surface">Surface</mdw-tooltip>
                    <mdw-tooltip open touch color="primary">Primary</mdw-tooltip>
                    <mdw-tooltip open touch color="primary-container">Primary Container</mdw-tooltip>
                    <mdw-tooltip open touch color="inverse-surface">Inverse Surface</mdw-tooltip>
                    <mdw-tooltip open touch color="inverse-primary">Inverse Primary</mdw-tooltip>
                    <mdw-tooltip open touch style="background-color:#121212; color:white">White on #121212</mdw-tooltip>
                    <mdw-tooltip open touch type-style="headline-small">Headline Small</mdw-tooltip>
                    <mdw-tooltip open touch shape-style="full">Full Shape</mdw-tooltip>
                    <mdw-tooltip open touch shape-style="small" shape-end>Small End Shape</mdw-tooltip>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}