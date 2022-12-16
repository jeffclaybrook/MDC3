import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Badges');
    }

    async getHtml() {
        return `
        <demo-section>
            <h1 slot="heading">Badges</h1>
            <mdw-layout x="start" gap="16px" style="margin: 24px 0; --mdw-layout__gap:16px" column>
                <mdw-badge>1</mdw-badge>
                <mdw-badge>12</mdw-badge>
                <mdw-badge>123</mdw-badge>
                <mdw-badge>999+</mdw-badge>
                <mdw-badge><mdw-icon>Sunny</mdw-icon>Sunny</mdw-badge>
                <mdw-badge color="surface">Surface</mdw-badge>
                <mdw-badge color="primary">Primary</mdw-badge>
                <mdw-badge color="primary-container">Primary Container</mdw-badge>
                <mdw-badge color="inverse-surface">Inverse Surface</mdw-badge>
                <mdw-badge color="inverse-primary">Inverse Primary</mdw-badge>
                <mdw-badge style="background-color:#121212; color:white">White on #121212</mdw-badge>
                <mdw-badge type-style="headline-small">Headline Small</mdw-badge>
                <mdw-badge shape-style="extra-small">Extra Small Shape</mdw-badge>
                <mdw-badge shape-end>End Shape</mdw-badge>
            </mdw-layout>
        </demo-section>
        `;
    }
}