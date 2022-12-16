import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('List Selects');
    }

    async getHtml() {
        return `
        <demo-section id="list-select">
            <h1 slot="heading">Selectable List</h1>
            <demo-section>
                <h2 slot="heading">Multi-selection (checkbox)</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-list-select color="surface" style="width:100%" multiple tabindex="0" aria-multiselectable="true">
                        <mdw-list-option value="1" checkbox supporting="Listbox supports keyboard navigation" aria-selected="false" tabindex="0">Option 1</mdw-list-option>
                        <mdw-list-option value="2" checkbox disabled supporting="Disabled items are not skipped" aria-selected="false" aria-disabled="true" tabindex="-1">Disabled</mdw-list-option>
                        <mdw-list-option value="3" checkbox aria-selected="false" tabindex="-1">Option3</mdw-list-option>
                        <mdw-list-option value="4" checkbox supporting="Allows multiple selections" aria-selected="false" tabindex="-1">Option4</mdw-list-option>
                    </mdw-list-select>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Single-selection (radio)</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-list-select color="surface" style="width:100%" required tabindex="0">
                        <mdw-list-option value="1" radio supporting="Listbox supports keyboard navigation" tabindex="0">Option 1</mdw-list-option>
                        <mdw-list-option value="2" radio disabled supporting="Disabled items are not skipped" aria-disabled="true" tabindex="-1">Disabled</mdw-list-option>
                        <mdw-list-option value="3" radio tabindex="-1">Option3</mdw-list-option>
                        <mdw-list-option value="4" radio supporting="[required] means deselecting not allowed" tabindex="-1">Option4</mdw-list-option>
                    </mdw-list-select>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Single-selection (checkbox)</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-list-select color="surface" style="width:100%" tabindex="0">
                        <mdw-list-option value="1" checkbox supporting="Listbox supports keyboard navigation" aria-selected="false" tabindex="0">Option 1</mdw-list-option>
                        <mdw-list-option value="2" checkbox disabled supporting="Disabled items are not skipped" aria-selected="false" aria-disabled="true" tabindex="-1">Disabled</mdw-list-option>
                        <mdw-list-option value="3" checkbox aria-selected="false" tabindex="-1">Option3</mdw-list-option>
                        <mdw-list-option value="4" checkbox supporting="Only one check allowed, but can deselect" aria-selected="false" tabindex="-1">Option4</mdw-list-option>
                    </mdw-list-select>
                </mdw-layout>
            </demo-section>
        </demo-section>
        <demo-dummy-text></demo-dummy-text>
        `;
    }
}