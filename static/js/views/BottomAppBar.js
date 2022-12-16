import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Bottom App Bars');
    }

    async getHtml() {
        return `
        <demo-section>
            <h1 slot="heading">Bottom app bar</h1>
            <demo-section>
                <h2 slot="heading">Surface color</h2>
                <mdw-bottom-app-bar>
                    <mdw-icon-button icon="1k" tabindex="0">1K</mdw-icon-button>
                    <mdw-icon-button icon="2k" tabindex="0">2K</mdw-icon-button>
                    <mdw-icon-button icon="3k" tabindex="0">3K</mdw-icon-button>
                    <mdw-icon-button icon="4k" tabindex="0">4K</mdw-icon-button>
                </mdw-bottom-app-bar>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Primary-container color</h2>
                <mdw-bottom-app-bar color="primary-container">
                    <mdw-icon-button icon="1k" tabindex="0">1K</mdw-icon-button>
                    <mdw-icon-button icon="2k" tabindex="0">2K</mdw-icon-button>
                    <mdw-icon-button icon="3k" tabindex="0">3K</mdw-icon-button>
                    <mdw-icon-button icon="4k" tabindex="0">4K</mdw-icon-button>
                </mdw-bottom-app-bar>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Custom color</h2>
                <mdw-bottom-app-bar class="mdw-custom" color="alias-container">
                    <mdw-icon-button icon="1k" tabindex="0">1K</mdw-icon-button>
                    <mdw-icon-button icon="2k" tabindex="0">2K</mdw-icon-button>
                    <mdw-icon-button icon="3k" tabindex="0">3K</mdw-icon-button>
                    <mdw-icon-button icon="4k" tabindex="0">4K</mdw-icon-button>
                </mdw-bottom-app-bar>
            </demo-section>
        </demo-section>
        `;
    }
}