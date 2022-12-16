import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Chips');
    }

    async getHtml() {
        return `
        <demo-section>
            <h1 slot="heading">Chips</h1>
            <demo-section>
                <h2 slot="heading">Assist chips</h2>
                <demo-section>
                    <h3 slot="heading">Default</h3>
                    <mdw-layout gap="12px" wrap style="margin: 12px; --mdw-layout__gap:12px;">
                        <mdw-chip icon="edit" tabindex="0" outlined>Default</mdw-chip>
                        <mdw-chip icon="edit" ink="tertiary" tabindex="0" outlined>Tertiary</mdw-chip>
                        <mdw-chip icon="edit" color="surface-primary" tabindex="0" outlined>Surface Primary</mdw-chip>
                        <mdw-chip icon="edit" class="mdw-custom" ink="green" tabindex="0" outlined>Custom ink</mdw-chip>
                        <mdw-chip icon src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" tabindex="0" outlined>Assist chip</mdw-chip>
                        <mdw-chip icon="edit" disabled outlined aria-disabled="true">Disabled chip</mdw-chip>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Elevated</h3>
                    <mdw-layout gap="12px" wrap style="margin: 12px; --mdw-layout__gap:12px;">
                        <mdw-chip elevated icon="edit" tabindex="0" outlined>Default</mdw-chip>
                        <mdw-chip elevated icon="edit" ink="tertiary" tabindex="0" outlined>Tertiary</mdw-chip>
                        <mdw-chip elevated icon="edit" color="surface-primary" tabindex="0" outlined>Surface Primary</mdw-chip>
                        <mdw-chip elevated class="mdw-custom" ink="green" icon="edit" tabindex="0" outlined>Custom ink</mdw-chip>
                        <mdw-chip elevated icon src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" tabindex="0" outlined>Assist chip</mdw-chip>
                        <mdw-chip elevated icon="edit" disabled outlined aria-disabled="true">Disabled chip</mdw-chip>
                        <mdw-chip elevated icon src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" disabled outlined aria-disabled="true">Assist chip</mdw-chip>
                    </mdw-layout>
                </demo-section>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Filter chips</h2>
                <demo-section>
                    <h3 slot="heading">Text</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                        <mdw-filter-chip tabindex="0" outlined>Default</mdw-filter-chip>
                        <mdw-filter-chip color="tertiary-container" tabindex="0" outlined>Tertiary</mdw-filter-chip>
                        <mdw-filter-chip color="surface-primary" tabindex="0" outlined>Surface Primary</mdw-filter-chip>
                        <mdw-filter-chip checked class="mdw-custom" ink="green" tabindex="0" outlined selected>Custom color</mdw-filter-chip>
                        <mdw-filter-chip checked tabindex="0" outlined selected>Assist chip</mdw-filter-chip>
                        <mdw-filter-chip checked disabled outlined selected aria-disabled="true">Disabled chip</mdw-filter-chip>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Icons</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                        <mdw-filter-chip checked icon="edit" tabindex="0" outlined selected>Default</mdw-filter-chip>
                        <mdw-filter-chip checked icon="edit" color="tertiary-container" tabindex="0" outlined selected>Tertiary</mdw-filter-chip>
                        <mdw-filter-chip checked icon="edit" color="surface-primary" tabindex="0" outlined selected>Surface Primary</mdw-filter-chip>
                        <mdw-filter-chip checked icon="edit" class="mdw-custom" color="green-container" tabindex="0" outlined selected>Custom color</mdw-filter-chip>
                        <mdw-filter-chip checked icon="edit" tabindex="0" outlined selected>Assist chip</mdw-filter-chip>
                        <mdw-filter-chip checked icon="edit" disabled outlined selected aria-disabled="true">Disabled chip</mdw-filter-chip>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Radio</h3>
                    <form>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                            <mdw-filter-chip type="radio" required name="filter-radio" value="small" tabindex="0" outlined>Small</mdw-filter-chip>
                            <mdw-filter-chip type="radio" required name="filter-radio" value="medium" checked tabindex="0" outlined selected>Medium</mdw-filter-chip>
                            <mdw-filter-chip type="radio" required name="filter-radio" value="large" tabindex="0" outlined>Large</mdw-filter-chip>
                            <mdw-filter-chip type="radio" required name="filter-radio" value="x-large" tabindex="0" outlined>X-Large</mdw-filter-chip>
                        </mdw-layout>
                    </form>
                </demo-section>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Input chips</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;"></mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Suggestion chips</h2>
                <demo-section>
                    <h3 slot="heading">Default</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                        <mdw-chip suggestion tabindex="0" outlined>Default</mdw-chip>
                        <mdw-chip suggestion ink="primary" tabindex="0" outlined>Primary</mdw-chip>
                        <mdw-chip suggestion ink="tertiary" tabindex="0" outlined>Tertiary</mdw-chip>
                        <mdw-chip suggestion color="surface-primary" tabindex="0" outlined>Surface Primary</mdw-chip>
                        <mdw-chip suggestion class="mdw-custom" ink="green" tabindex="0" outlined>Custom ink</mdw-chip>
                        <mdw-chip suggestion disabled outlined aria-disabled="true">Disabled chip</mdw-chip>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Elevated</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                        <mdw-chip elevated suggestion tabindex="0" outlined>Default</mdw-chip>
                        <mdw-chip elevated suggestion ink="primary" tabindex="0" outlined>Primary</mdw-chip>
                        <mdw-chip elevated suggestion ink="tertiary" tabindex="0" outlined>Tertiary</mdw-chip>
                        <mdw-chip elevated suggestion class="mdw-custom" ink="green" tabindex="0" outlined>Custom ink</mdw-chip>
                        <mdw-chip elevated suggestion disabled outlined aria-disabled="true">Disabled chip</mdw-chip>
                    </mdw-layout>
                </demo-section>
            </demo-section>
        </demo-section>
        `;
    }
}