import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Dialogs');
    }

    async getHtml() {
        return `
        <demo-section>
            <h1 slot="heading">Dialogs</h1>
            <demo-section>
                <h2 slot="heading">Basic dialog</h2>
                <mdw-layout wrap gap="12px" column x="center" style="--mdw-layout__gap:12px;">
                    <demo-button aria-haspopup="dialog" aria-controls="dialog-simple" tabindex="0">Basic dialog</demo-button>
                    <demo-button aria-haspopup="dialog" aria-controls="dialog-no-headline" data-popup-method="showModal" tabindex="0"> No headline (Native Modal)</demo-button>
                    <mdw-dialog id="dialog-no-headline" icon="refresh">This is a modal dialog. It can exist (almost) anywhere in the DOM.</mdw-dialog>
                    <demo-button aria-haspopup="dialog" aria-controls="dialog-slotted" data-popup-method="showModal" tabindex="0">Custom slotted</demo-button>
                    <demo-button aria-haspopup="dialog" aria-controls="dialog-oversized" tabindex="0">Oversized (full dividers)</demo-button>
                    <demo-button aria-haspopup="dialog" aria-controls="dialog-reset" tabindex="0">List sample (inset dividers)</demo-button>
                    <demo-button aria-haspopup="dialog" aria-controls="dialog-custom-buttons" tabindex="0">Custom buttons</demo-button>
                    <demo-button aria-haspopup="dialog" aria-controls="dialog-input" tabindex="0">Autofocus input</demo-button>
                    <demo-button aria-haspopup="dialog" aria-controls="dialog-slider" tabindex="0">Slider example</demo-button>
                </mdw-layout>
            </demo-section>
        </demo-section>
        <div id="dialogs">
            <mdw-dialog id="dialog-simple" headline="My title">Description</mdw-dialog>
            <mdw-dialog id="dialog-oversized" icon="refresh" headline="Auto scrolls" dividers>
                <demo-dummy-text></demo-dummy-text>
            </mdw-dialog>
            <mdw-dialog id="dialog-slotted">
                <mdw-text ink="tertiary" slot="headline">Custom Headline</mdw-text>
                Description text
            </mdw-dialog>
            <mdw-dialog id="dialog-icon" icon="refresh" headline="My title" description="Description (no body)."></mdw-dialog>
            <mdw-dialog id="dialog-custom-buttons" icon="refresh" headline="Title" confirm="Launch" cancel="Abort" default="confirm">Button text changed via [confirm] and [cancel] values.</mdw-dialog>
            <mdw-dialog id="dialog-reset" icon="refresh" headline="Reset settings?" dividers="inset">
                <div slot="fixed">This will reset your app preferences back to their default settings. The following accounts will also be signed out:</div>
                <mdw-list>
                    <mdw-list-item avatar="LV">leevillanuevanotes@gmail.com</mdw-list-item>
                    <mdw-list-item avatar="AA">alloitsalejandro@gmail.com</mdw-list-item>
                    <mdw-list-item avatar="OO">oliortega3000@gmail.com</mdw-list-item>
                </mdw-list>
            </mdw-dialog>
            <mdw-dialog id="dialog-slider" icon="volume_up" headline="Volume Control" default="confirm">
                <form slot="form" method="dialog">
                    <mdw-slider name="volume" autofocus tabindex="0"></mdw-slider>
                    <mdw-dialog-actions>
                        <input type="submit" hidden value="confirm" aria-hidden="true">
                        <mdw-button type="submit" name="cancel" value="cancel" tabindex="0">Cancel</mdw-button>
                        <mdw-button type="submit" name="confirm" value="confirm" tabindex="0">Confirm</mdw-button>
                    </mdw-dialog-actions>
                </form>
            </mdw-dialog>
            <mdw-dialog id="dialog-input" icon="edit" headline="Custom form" default="confirm">
                <form slot="form" method="dialog">
                    <mdw-text-input name="sample" autofocus filled label="Label" tabindex="0"></mdw-text-input>
                    <mdw-dialog-actions>
                        <input type="submit" hidden value="confirm" tabindex="-1" aria-hidden="true">
                        <mdw-button type="submit" name="cancel" value="cancel" tabindex="0">Cancel</mdw-button>
                        <mdw-button type="submit" name="confirm" value="confirm" tabindex="0">Confirm</mdw-button>
                    </mdw-dialog-actions>
                </form>
            </mdw-dialog>
        </div>
        `;
    }
}