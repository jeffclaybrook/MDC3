import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Switches');
    }

    async getHtml() {
        return `
        <demo-section id="switches">
            <h1 slot="heading">Switches</h1>
            <demo-section>
                <h2 slot="heading">Without Icons</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-switch tabindex="0">Default</mdw-switch>
                    <mdw-switch color="secondary" checked tabindex="0" selected>Secondary</mdw-switch>
                    <mdw-switch color="tertiary" tabindex="0">Tertiary</mdw-switch>
                    <mdw-switch disabled aria-disabled="true">Disabled</mdw-switch>
                    <mdw-switch color="secondary" disabled checked aria-disabled="true" selected>Disabled</mdw-switch>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Icon on selected switch</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-switch selected-icon="check" tabindex="0">Default</mdw-switch>
                    <mdw-switch color="secondary" checked selected-icon="check" tabindex="0" selected>Secondary</mdw-switch>
                    <mdw-switch color="tertiary" selected-icon="edit" tabindex="0">Tertiary</mdw-switch>
                    <mdw-switch disabled selected-icon="check" aria-disabled="true">Disabled</mdw-switch>
                    <mdw-switch color="secondary" disabled checked selected-icon="check" aria-disabled="true" selected>Disabled</mdw-switch>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Icon on selected and unselected switch</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-switch icon="check" tabindex="0">Default</mdw-switch>
                    <mdw-switch color="secondary" checked icon="favorite" tabindex="0" selected>Secondary</mdw-switch>
                    <mdw-switch color="tertiary" unselected-icon="dark_mode" selected-icon="light_mode" tabindex="0">Tertiary</mdw-switch>
                    <mdw-switch disabled icon="check" aria-disabled="true">Disabled</mdw-switch>
                    <mdw-switch color="secondary" disabled checked icon="check" aria-disabled="true" selected>Disabled</mdw-switch>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">No label</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-switch icon="check" aria-label="Default" tabindex="0"></mdw-switch>
                    <mdw-switch color="secondary" checked icon="favorite" aria-label="Secondary" tabindex="0" selected></mdw-switch>
                    <mdw-switch color="tertiary" unselected-icon="dark_mode" selected-icon="light_mode" aria-label="Tertiary" tabindex="0"></mdw-switch>
                    <mdw-switch disabled icon="check" aria-label="Disabled" aria-disabled="true"></mdw-switch>
                    <mdw-switch color="secondary" disabled checked icon="check" aria-label="Disabled" aria-disabled="true" selected></mdw-switch>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}