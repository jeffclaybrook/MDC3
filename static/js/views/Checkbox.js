import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Checkboxes');
    }

    async getHtml() {
        return `
        <demo-section id="checkbox">
            <h1 slot="heading">Checkboxes</h1>
            <demo-section>
                <h2 slot="heading">Normal</h2>
                <form>
                    <mdw-layout gap="12px" wrap style="margin: 8px; --mdw-layout__gap:12px;">
                        <mdw-checkbox name="checkbox-demo-1" value="1" tabindex="0">Default</mdw-checkbox>
                        <mdw-checkbox name="checkbox-demo-2" checked color="secondary" value="2" tabindex="0" selected>Secondary</mdw-checkbox>
                        <mdw-checkbox name="checkbox-demo-2" class="mdw-custom" required color="alias" value="2" tabindex="0">Alias (Required)</mdw-checkbox>
                        <mdw-checkbox name="checkbox-demo-3" indeterminate color="tertiary" value="3" tabindex="0">Tertiary</mdw-checkbox>
                        <mdw-checkbox name="checkbox-demo-4" checked indeterminate color="primary" disabled value="4" selected aria-disabled="true">Disabled</mdw-checkbox>
                        <mdw-checkbox name="checkbox-demo-5" color="primary" disabled value="5" checked aria-disabled="true" selected>Disabled Checked</mdw-checkbox>
                    </mdw-layout>
                </form>
            </demo-section>
            <demo-section>
                <h2 slot="heading">No Label</h2>
                <form>
                    <mdw-layout gap="12px" wrap style="margin: 8px; --mdw-layout__gap:12px;">
                        <mdw-checkbox name="checkbox-demo-6" checked aria-label="Default" value="1" tabindex="0" selected></mdw-checkbox>
                        <mdw-checkbox name="checkbox-demo-7" aria-label="Secondary" color="secondary" value="2" tabindex="0"></mdw-checkbox>
                        <mdw-checkbox name="checkbox-demo-8" disabled aria-label="Tertiary" color="tertiary" value="3" aria-disabled="true"></mdw-checkbox>
                    </mdw-layout>
                </form>
            </demo-section>
        </demo-section>
        `;
    }
}