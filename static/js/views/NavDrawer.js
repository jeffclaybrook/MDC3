import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Nav Drawers');
    }

    async getHtml() {
        return `
        <demo-section id="navdrawer">
            <h1 slot="heading">Navigation Drawer</h1>
            <demo-section>
                <h2 slot="heading">Standard</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-nav-drawer open style="min-height:400px">
                        <mdw-nav-item icon="edit" href="#navdrawer">Default</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navdrawer" color="primary-container">Primary</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navdrawer" color="tertiary-container">Tertiary</mdw-nav-item>
                    </mdw-nav-drawer>
                    <mdw-nav-drawer open color="tertiary-container" style="min-height:400px">
                        <mdw-nav-item icon="edit" href="#navdrawer">Default</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navdrawer" color="primary-container">Primary</mdw-nav-item>
                        <mdw-nav-item class="mdw-custom" icon="change_history" href="#navdrawer" badge="999+" color="green-container">Green Container</mdw-nav-item>
                    </mdw-nav-drawer>
                    <mdw-nav-drawer open style="min-height:400px">
                        <mdw-nav-item icon="edit" href="#navdrawer">Default</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navdrawer" color="primary-container">Primary</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navdrawer" color="tertiary-container">Tertiary</mdw-nav-item>
                    </mdw-nav-drawer>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}