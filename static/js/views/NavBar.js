import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Nav Bars');
    }

    async getHtml() {
        return `
        <demo-section id="navbar">
            <h1 slot="heading">Navigation Bar</h1>
            <demo-section>
                <h2 slot="heading">Standard</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <demo-screen color="background">
                        <mdw-nav-bar hide-on-scroll>
                            <mdw-nav-item icon="edit" href="#navbar">Default</mdw-nav-item>
                            <mdw-nav-item icon="change_history" href="#navbar" color="primary-container">Primary Container</mdw-nav-item>
                            <mdw-nav-item icon="change_history" href="#navbar" color="tertiary-container">Tertiary Container</mdw-nav-item>
                        </mdw-nav-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </demo-screen>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Badges</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <demo-screen color="background">
                        <mdw-nav-bar color="primary">
                            <mdw-nav-item show-label="active" icon="change_history" href="#navbar" color="primary-container" badge>Primary Container</mdw-nav-item>
                            <mdw-nav-item show-label="active" icon="change_history" href="#navbar" badge="1" color="tertiary">Tertiary</mdw-nav-item>
                            <mdw-nav-item class="mdw-custom" show-label="active" icon="change_history" href="#navbar" badge="999+" color="green-container">Green Container</mdw-nav-item>
                        </mdw-nav-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </demo-screen>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">No label</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <demo-screen color="background">
                        <mdw-nav-bar hide-on-scroll>
                            <mdw-nav-item show-label="never" icon="change_history" href="#navbar" badge aria-label="Default"></mdw-nav-item>
                            <mdw-nav-item show-label="never" icon="change_history" href="#navbar" badge="1" color="primary-container" aria-label="Primary">Primary</mdw-nav-item>
                            <mdw-nav-item show-label="never" icon="change_history" href="#navbar" badge="999+" color="tertiary-container" aria-label="Tertiary">Tertiary Container</mdw-nav-item>
                        </mdw-nav-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </demo-screen>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}