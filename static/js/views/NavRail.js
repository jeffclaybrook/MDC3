import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Nav Rails');
    }

    async getHtml() {
        return `
        <demo-section id="navrail">
            <h1 slot="heading">Navigation Rail</h1>
            <demo-section>
                <h2 slot="heading">Standard</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-nav-rail style="min-height:400px">
                        <mdw-nav-item icon="edit" href="#navrail">Default</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" color="primary-container">Primary</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" color="tertiary-container">Tertiary</mdw-nav-item>
                    </mdw-nav-rail>
                    <mdw-nav-rail align="start" style="min-height:400px">
                        <mdw-nav-item icon="edit" href="#navrail">Default</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" color="primary-container">Primary</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" color="tertiary-container">Tertiary</mdw-nav-item>
                    </mdw-nav-rail>
                    <mdw-nav-rail align="end" style="min-height:400px">
                        <mdw-nav-item icon="edit" href="#navrail">Default</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" color="primary-container">Primary</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" color="tertiary-container">Tertiary</mdw-nav-item>
                    </mdw-nav-rail>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Menu</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-nav-rail style="min-height:400px">
                        <mdw-icon-button slot="start" icon="menu" tabindex="0">Menu</mdw-icon-button>
                        <mdw-nav-item icon="edit" href="#navrail">Default</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" color="primary-container">Primary</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" color="tertiary-container">Tertiary</mdw-nav-item>
                    </mdw-nav-rail>
                    <mdw-nav-rail align="start" style="min-height:400px">
                        <mdw-icon-button slot="start" icon="menu" tabindex="0">Menu</mdw-icon-button>
                        <mdw-nav-item icon="change_history" href="#navrail" badge>Default</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" badge="1" color="primary-container">Primary</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" badge="999+" color="tertiary-container">Tertiary</mdw-nav-item>
                    </mdw-nav-rail>
                    <mdw-nav-rail align="end" style="min-height:400px">
                        <mdw-icon-button slot="start" icon="menu" tabindex="0">Menu</mdw-icon-button>
                        <mdw-nav-item icon="change_history" href="#navrail" badge aria-label="Default"></mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" badge="1" color="primary-container" aria-label="Primary"></mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" badge="999+" color="tertiary-container" aria-label="Tertiary"></mdw-nav-item>
                    </mdw-nav-rail>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Menu and Fab</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-nav-rail style="min-height:400px">
                        <mdw-icon-button slot="start" icon="menu" tabindex="0">Menu</mdw-icon-button>
                        <mdw-fab slot="start" icon="add" flat tabindex="0">Add</mdw-fab>
                        <mdw-nav-item icon="edit" href="#navrail">Default</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" color="primary-container">Primary</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" color="tertiary-container">Tertiary</mdw-nav-item>
                    </mdw-nav-rail>
                    <mdw-nav-rail align="start" style="min-height:400px">
                        <mdw-icon-button slot="start" icon="menu" tabindex="0">Menu</mdw-icon-button>
                        <mdw-fab slot="start" icon="add" flat tabindex="0">Add</mdw-fab>
                        <mdw-nav-item icon="change_history" href="#navrail" badge>Default</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" badge="1" color="primary-container">Primary</mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" badge="999+" color="tertiary-container">Tertiary</mdw-nav-item>
                    </mdw-nav-rail>
                    <mdw-nav-rail align="end" style="min-height:400px">
                        <mdw-icon-button slot="start" icon="menu" flat tabindex="0">Menu</mdw-icon-button>
                        <mdw-fab slot="start" icon="add" flat tabindex="0">Add</mdw-fab>
                        <mdw-nav-item icon="change_history" href="#navrail" badge aria-label="Default"></mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" badge="1" color="primary-container" aria-label="Primary"></mdw-nav-item>
                        <mdw-nav-item icon="change_history" href="#navrail" badge="999+" color="tertiary-container" aria-label="Tertiary"></mdw-nav-item>
                    </mdw-nav-rail>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}