import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Text Fields');
    }

    async getHtml() {
        return `
        <demo-section id="textinputs">
            <h1 slot="heading">Text Inputs</h1>
            <demo-section>
                <h2 slot="heading">Filled</h2>
                <mdw-layout wrap gap="16px" style="margin: 24px auto; --mdw-layout__gap:16px;" column>
                    <mdw-text-input filled label="Label" tabindex="0"></mdw-text-input>
                    <mdw-text-input filled placeholder="Placeholder only" aria-label="Blank" tabindex="0"></mdw-text-input>
                    <mdw-text-input filled ink="tertiary" label="Ink only" tabindex="0"></mdw-text-input>
                    <mdw-text-input filled color="secondary-container" ink="secondary" value="default value" label="Label" tabindex="0" populated></mdw-text-input>
                    <mdw-text-input filled color="tertiary-container" ink="tertiary" label="Very long label that label will clip selectively" placeholder="Label" tabindex="0"></mdw-text-input>
                    <mdw-text-input filled class="mdw-custom" placeholder="Placeholder" color="green-container" ink="green" type-style="headline" icon="edit" label="Custom typography and icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input filled shape-style="full" type="search" icon="search" placeholder="Full shape, icon, type=search" tabindex="0"></mdw-text-input>
                    <mdw-text-input filled shape-style="large" placeholder="Placeholder" icon="edit" label="Large shape with icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input filled shape-style="full" placeholder="Placeholder" icon="edit" label="Full shape with icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input filled class="mdw-custom" icon="edit" color="alias-container" ink="alias" input-prefix="$" placeholder="10" type="number" label="Price" tabindex="0"></mdw-text-input>
                    <mdw-text-input filled icon="email" input-suffix="@gmail.com" type="text" placeholder="frank" minlength="4" maxlength="8" supporting required label="Email" tabindex="0"></mdw-text-input>
                    <mdw-text-input filled class="mdw-custom" icon="edit" color="alias-container" ink="alias" supporting="I'm being helpful!" label="Name*" required tabindex="0"></mdw-text-input>
                    <mdw-text-input filled icon="edit" supporting label="Customized supporting" value="deleteme" tabindex="0" populated>
                        <div slot="supporting">You are <mdw-text ink="primary">awesome</mdw-text>!</div>
                    </mdw-text-input>
                    <mdw-text-input filled color="secondary-container" error="I am error" label="Errored" tabindex="0"></mdw-text-input>
                    <mdw-text-input filled color="secondary-container" disabled label="Disabled" aria-disabled="true"></mdw-text-input>
                    <mdw-text-input filled color="secondary-container" disabled error="Unavailable" value="filled" aria-disabled="true" populated>Disabled</mdw-text-input>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Outlined</h2>
                <mdw-layout wrap gap="16px" style="margin: 24px auto; --mdw-layout__gap:16px;" column>
                    <mdw-text-input outlined label="Label" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined placeholder="Placeholder only" aria-label="Blank" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined ink="tertiary" label="Ink only" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined color="secondary-container" ink="secondary" value="default value" label="Label" tabindex="0" populated></mdw-text-input>
                    <mdw-text-input outlined color="tertiary-container" ink="tertiary" label="Very long label that label will clip selectively" placeholder="Label" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined class="mdw-custom" placeholder="Placeholder" color="green-container" ink="green" type-style="headline" icon="edit" label="Custom typography and icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined shape-style="full" type="search" icon="search" placeholder="Full shape, icon, type=search" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined shape-style="large" placeholder="Placeholder" icon="edit" label="Large shape with icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined shape-style="full" placeholder="Placeholder" icon="edit" label="Full shape with icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined class="mdw-custom" icon="edit" color="alias-container" ink="alias" input-prefix="$" placeholder="10" type="number" label="Price" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined icon="email" input-suffix="@gmail.com" type="text" placeholder="frank" minlength="4" maxlength="8" supporting required label="Email" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined class="mdw-custom" icon="edit" color="alias-container" ink="alias" supporting="I'm being helpful!" label="Name*" required tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined icon="edit" supporting label="Customized supporting" value="deleteme" tabindex="0" populated>
                        <div slot="supporting">You are <mdw-text ink="primary">awesome</mdw-text>!</div>
                    </mdw-text-input>
                    <mdw-text-input outlined color="secondary-container" error="I am error" label="Errored" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined color="secondary-container" disabled label="Disabled" aria-disabled="true"></mdw-text-input>
                    <mdw-text-input outlined color="secondary-container" disabled error="Unavailable" value="filled" aria-disabled="true" populated>Disabled</mdw-text-input>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Outlined Dense</h2>
                <mdw-layout wrap gap="16px" style="margin: 24px auto; --mdw-layout__gap:16px;" column>
                    <mdw-text-input outlined dense label="Label" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense placeholder="Placeholder only" aria-label="Blank" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense ink="tertiary" label="Ink only" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense color="secondary-container" ink="secondary" value="default value" label="Label" tabindex="0" populated></mdw-text-input>
                    <mdw-text-input outlined dense color="tertiary-container" ink="tertiary" label="Very long label that label will clip selectively" placeholder="Label" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense class="mdw-custom" placeholder="Placeholder" color="green-container" ink="green" type-style="headline" icon="edit" label="Custom typography and icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense shape-style="full" type="search" icon="search" placeholder="Full shape, icon, type=search" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense shape-style="large" placeholder="Placeholder" icon="edit" label="Large shape with icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense shape-style="full" placeholder="Placeholder" icon="edit" label="Full shape with icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense class="mdw-custom" icon="edit" color="alias-container" ink="alias" input-prefix="$" placeholder="10" type="number" label="Price" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense icon="email" input-suffix="@gmail.com" type="text" placeholder="frank" minlength="4" maxlength="8" supporting required label="Email" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense class="mdw-custom" icon="edit" color="alias-container" ink="alias" supporting="I'm being helpful!" label="Name*" required tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense icon="edit" supporting label="Customized supporting" value="deleteme" tabindex="0" populated>
                        <div slot="supporting">You are <mdw-text ink="primary">awesome</mdw-text>!</div>
                    </mdw-text-input>
                    <mdw-text-input outlined dense color="secondary-container" error="I am error" label="Errored" tabindex="0"></mdw-text-input>
                    <mdw-text-input outlined dense color="secondary-container" disabled label="Disabled" aria-disabled="true"></mdw-text-input>
                    <mdw-text-input outlined dense color="secondary-container" disabled error="Unavailable" value="filled" aria-disabled="true" populated>Disabled</mdw-text-input>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Bare</h2>
                <mdw-layout wrap gap="16px" style="margin: 24px auto; --mdw-layout__gap:16px;" column>
                    <mdw-text-input label="[label] only" tabindex="0"></mdw-text-input>
                    <mdw-text-input placeholder="[placeholder] + [label]" label="Blank" tabindex="0"></mdw-text-input>
                    <mdw-text-input ink="tertiary" aria-label="Ink only" tabindex="0"></mdw-text-input>
                    <mdw-text-input color="secondary-container" ink="secondary" value="default value" aria-label="Label" tabindex="0" populated></mdw-text-input>
                    <mdw-text-input color="tertiary-container" ink="tertiary" label="Very long label that label will clip selectively" tabindex="0"></mdw-text-input>
                    <mdw-text-input class="mdw-custom" placeholder="Placeholder" color="green-container" ink="green" type-style="headline" icon="edit" aria-label="Custom typography and icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input shape-style="full" type="search" icon="search" placeholder="Full shape, icon, type=search" aria-label="Full shape" tabindex="0"></mdw-text-input>
                    <mdw-text-input shape-style="large" placeholder="Placeholder" icon="edit" aria-label="Large shape with icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input shape-style="full" placeholder="Placeholder" icon="edit" aria-label="Full shape with icon" tabindex="0"></mdw-text-input>
                    <mdw-text-input class="mdw-custom" icon="edit" color="alias-container" ink="alias" input-prefix="$" placeholder="10" type="number" aria-label="Price" tabindex="0"></mdw-text-input>
                    <mdw-text-input icon="email" input-suffix="@gmail.com" type="text" placeholder="frank" minlength="4" maxlength="8" supporting required aria-label="Email" tabindex="0"></mdw-text-input>
                    <mdw-text-input class="mdw-custom" icon="edit" color="alias-container" ink="alias" supporting="I'm being helpful!" aria-label="Name*" required tabindex="0"></mdw-text-input>
                    <mdw-text-input icon="edit" supporting aria-label="Customized supporting" value="deleteme" tabindex="0" populated>
                        <div slot="supporting">You are <mdw-text ink="primary">awesome</mdw-text>!</div>
                    </mdw-text-input>
                    <mdw-text-input color="secondary-container" error="I am error" aria-label="Errored" tabindex="0"></mdw-text-input>
                    <mdw-text-input color="secondary-container" disabled aria-label="Disabled" aria-disabled="true"></mdw-text-input>
                    <mdw-text-input color="secondary-container" disabled error="Unavailable" value="filled" aria-disabled="true" populated>Disabled</mdw-text-input>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}