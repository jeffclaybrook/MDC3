import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Shapes');
    }

    async getHtml() {
        return `
        <demo-section>
            <h1 slot="heading">Shape</h1>
            <demo-section>
                <h2 slot="heading">Shape tokens</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-container class="box" color="primary" shape-style="extra-small">Extra small</mdw-container>
                    <mdw-container class="box" color="primary" shape-style="small">Small</mdw-container>
                    <mdw-container class="box" color="primary" shape-style="medium">Medium</mdw-container>
                    <mdw-container class="box" color="primary" shape-style="large">Large</mdw-container>
                    <mdw-container class="box" color="primary" shape-style="extra-large">Extra large</mdw-container>
                    <mdw-container class="box" color="primary" shape-style="full">Full</mdw-container>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Shape token top modifier</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-container class="box" color="secondary" shape-top shape-style="extra-small">Extra small top</mdw-container>
                    <mdw-container class="box" color="secondary" shape-top shape-style="small">Small top</mdw-container>
                    <mdw-container class="box" color="secondary" shape-top shape-style="medium">Medium top</mdw-container>
                    <mdw-container class="box" color="secondary" shape-top shape-style="large">Large top</mdw-container>
                    <mdw-container class="box" color="secondary" shape-top shape-style="extra-large">Extra large top</mdw-container>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Shape token end modifier</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-container class="box" color="secondary" shape-end shape-style="extra-small">Extra small end</mdw-container>
                    <mdw-container class="box" color="secondary" shape-end shape-style="small">Small end</mdw-container>
                    <mdw-container class="box" color="secondary" shape-end shape-style="medium">Medium end</mdw-container>
                    <mdw-container class="box" color="secondary" shape-end shape-style="large">Large end</mdw-container>
                    <mdw-container class="box" color="secondary" shape-end shape-style="extra-large">Extra large end</mdw-container>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}