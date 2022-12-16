import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Textareas');
    }

    async getHtml() {
        return `
        <demo-section id="textareas">
            <h1 slot="heading">Text Areas</h1>
            <demo-section>
                <h2 slot="heading">Filled</h2>
                <mdw-layout wrap gap="16px" style="margin: 24px auto; --mdw-layout__gap:16px;" column>
                    <mdw-textarea filled label="Label" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea filled label="Label" rows="2" fixed tabindex="0" populated>Fixed size</mdw-textarea>
                    <mdw-textarea filled label="Max 2 rows" maxrows="2" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea filled label="5 rows with max-height override" rows="1" style="max-height:100px" tabindex="0"></mdw-textarea>
                    <mdw-textarea filled label="Min 2 rows, max 5" minrows="2" maxrows="5" tabindex="0" rows="2"></mdw-textarea>
                    <mdw-textarea filled color="secondary-container" ink="secondary" value="default value" label="Label" tabindex="0" populated rows="1">default value</mdw-textarea>
                    <mdw-textarea filled color="tertiary-container" ink="tertiary" placeholder="Label" label="Very long label that label will clip selectively" value="Dear Madam Speaker, Regarding your letter dated ... ... Yours Sincerely, ..." tabindex="0" populated rows="9">Dear Madam Speaker, Regarding your letter dated ...... Yours Sincerely, ...</mdw-textarea>
                    <mdw-textarea filled class="mdw-custom" placeholder="Placeholder" color="green-container" ink="green" type-style="headline" icon="edit" label="Custom typography and icon" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea filled class="mdw-custom" icon="edit" color="alias-container" ink="alias" input-prefix="$" placeholder="10" type="number" label="Price" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea filled icon="email" input-suffix="@gmail.com" type="text" placeholder="frank" minlength="4" maxlength="8" supporting required label="Email" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea filled class="mdw-custom" icon="edit" color="alias-container" ink="alias" supporting="I'm being helpful!" required label="Oversized placeholder" placeholder="Dear Francine, They closed the parks this week, so we won't be able to meet your there. Should we just have dinner? Love, Daddy" tabindex="0" rows="7"></mdw-textarea>
                    <mdw-textarea filled color="secondary-container" error="I am error" label="Errored" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea filled color="secondary-container" disabled label="Disabled" maxrows="2" value="Disable elements still may have values and resizable. Max Rows 2" aria-disabled="true" rows="1" populated>Disable elements still may have values and resizable. Max Rows 2</mdw-textarea>
                    <mdw-textarea color="secondary-container" disabled error="Unavailable" label="Disabled" fixed value="Disable and fixed sized with HTMLTextAreaElement default row count of 2" aria-disabled="true" populated rows="2">Disable and fixed sized with HTMLTextAreaElement default row count of 2</mdw-textarea>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Outlined</h2>
                <mdw-layout wrap style="margin:24px auto; gap:16px" column>
                    <mdw-textarea outlined label="Label" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined label="Label" rows="2" fixed tabindex="0" populated>Fixed size</mdw-textarea>
                    <mdw-textarea outlined label="Max 2 rows" maxrows="2" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined label="5 rows with max-height override" rows="1" style="max-height:100px" value tabindex="0"></mdw-textarea>
                    <mdw-textarea outlined label="Min 2 rows, max 5" minrows="2" maxrows="5" tabindex="0" rows="2"></mdw-textarea>
                    <mdw-textarea outlined color="secondary-container" ink="secondary" value="default value" label="Label" tabindex="0" populated rows="1">default value</mdw-textarea>
                    <mdw-textarea outlined color="tertiary-container" ink="tertiary" placeholder="Label" label="Very long label that label will clip selectively" value="Dear Madam Speaker, Regarding your letter dated ... ... Yours Sincerely, ..." tabindex="0" populated rows="9">Dear Madam Speaker, Regarding your letter dated ... ... Yours Sincerely, ...</mdw-textarea>
                    <mdw-textarea outlined class="mdw-custom" placeholder="Placeholder" color="green-container" ink="green" type-style="headline" icon="edit" label="Custom typography and icon" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined class="mdw-custom" icon="edit" color="alias-container" ink="alias" input-prefix="$" placeholder="10" type="number" label="Price" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined icon="email" input-suffix="@gmail.com" type="text" placeholder="frank" minlength="4" maxlength="8" supporting required label="Email" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined class="mdw-custom" icon="edit" color="alias-container" ink="alias" supporting="I'm being helpful!" required label="Oversized placeholder" placeholder="Dear Francine, They closed the parks this week, so we won't be able to meet your there. Should we just have dinner? Love, Daddy" tabindex="0" rows="7"></mdw-textarea>
                    <mdw-textarea outlined color="secondary-container" error="I am error" label="Errored" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined color="secondary-container" disabled label="Disabled" maxrows="2" value="Disable elements still may have values and resizable. Max Rows 2" aria-disabled="true" rows="1" populated>Disable elements still may have values and resizable. Max Rows 2</mdw-textarea>
                    <mdw-textarea outlined color="secondary-container" disabled error="Unavailable" label="Disabled" fixed value="Disable and fixed sized with HTMLTextAreaElement default row count of 2" aria-disabled="true" populated rows="2">Disable and fixed sized with HTMLTextAreaElement default row count of 2</mdw-textarea>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Outlined Dense</h2>
                <mdw-layout wrap style="margin:24px auto; gap:16px" column>
                    <mdw-textarea outlined dense label="Label" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined dense label="Label" rows="2" fixed tabindex="0" populated>Fixed size</mdw-textarea>
                    <mdw-textarea outlined dense label="Max 2 rows" maxrows="2" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined dense label="5 rows with max-height override" rows="5" style="max-height:100px" tabindex="0" populated></mdw-textarea>
                    <mdw-textarea outlined dense label="Min 2 rows, max 5" minrows="2" maxrows="5" tabindex="0" rows="2"></mdw-textarea>
                    <mdw-textarea outlined dense color="secondary-container" ink="secondary" value="default value" label="Label" tabindex="0" populated rows="1">default value</mdw-textarea>
                    <mdw-textarea outlined dense color="tertiary-container" ink="tertiary" placeholder="Label" label="Very long label that label will clip selectively" value="Dear Madam Speaker, Regarding your letter dated ... ... Yours Sincerely, ..." tabindex="0" populated rows="9">Dear Madam Speaker, Regarding your letter dated ... ... Yours Sincerely, ...</mdw-textarea>
                    <mdw-textarea outlined dense class="mdw-custom" placeholder="Placeholder" color="green-container" ink="green" type-style="headline" icon="edit" label="Custom typography and icon" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined dense class="mdw-custom" icon="edit" color="alias-container" ink="alias" input-prefix="$" placeholder="10" type="number" label="Price" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined dense icon="email" input-suffix="@gmail.com" type="text" placeholder="frank" minlength="4" maxlength="8" supporting required label="Email" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined dense class="mdw-custom" icon="edit" color="alias-container" ink="alias" supporting="I'm being helpful!" required label="Oversized placeholder" placeholder="Dear Francine, They closed the parks this week, so we won't be able to meet your there. Should we just have dinner? Love, Daddy" tabindex="0" rows="7"></mdw-textarea>
                    <mdw-textarea outlined dense color="secondary-container" error="I am error" label="Errored" tabindex="0" rows="1"></mdw-textarea>
                    <mdw-textarea outlined dense color="secondary-container" disabled label="Disabled" maxrows="2" value="Disable elements still may have values and resizable. Max Rows 2" aria-disabled="true" rows="1" populated>Disable elements still may have values and resizable. Max Rows 2</mdw-textarea>
                    <mdw-textarea outlined dense color="secondary-container" disabled error="Unavailable" label="Disabled" fixed value="Disable and fixed sized with HTMLTextAreaElement default row count of 2" aria-disabled="true" populated rows="2">Disable and fixed sized with HTMLTextAreaElement default row count of 2</mdw-textarea>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}