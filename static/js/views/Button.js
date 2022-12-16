import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Buttons');
    }

    async getHtml() {
        return `
        <demo-section>
            <h1 slot="heading">Buttons</h1>
            <demo-section>
                <h2 slot="heading">Common Buttons</h2>
                <demo-section>
                    <h3 slot="heading">Elevated buttons</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-button elevated tabindex="0">Default</mdw-button>
                            <mdw-button elevated icon="search" ink="tertiary" tabindex="0">Icon Tertiary</mdw-button>
                            <mdw-button elevated class="mdw-custom" ink="yellow" tabindex="0">Custom Color</mdw-button>
                        </mdw-layout>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-button disabled elevated aria-disabled="true">Default</mdw-button>
                            <mdw-button disabled elevated icon="search" ink="tertiary" aria-disabled="true">Icon Tertiary</mdw-button>
                            <mdw-button disabled elevated class="mdw-custom" ink="yellow" aria-disabled="true">Custom Color</mdw-button>
                        </mdw-layout>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Filled buttons</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-button filled tabindex="0">Default</mdw-button>
                            <mdw-button filled icon="search" color="tertiary" tabindex="0">Icon Tertiary</mdw-button>
                            <mdw-button filled class="mdw-custom" color="yellow" tabindex="0">Custom Color</mdw-button>
                        </mdw-layout>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-button disabled filled aria-disabled="true">Default</mdw-button>
                            <mdw-button disabled filled icon="search" color="tertiary" aria-disabled="true">Icon Tertiary</mdw-button>
                            <mdw-button disabled filled class="mdw-custom" color="yellow" aria-disabled="true">Custom Color</mdw-button>
                        </mdw-layout>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Filled tonal buttons</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-button filled="tonal" tabindex="0">Default</mdw-button>
                            <mdw-button filled="tonal" icon="search" color="tertiary-container" tabindex="0">Icon Tertiary</mdw-button>
                            <mdw-button filled="tonal" class="mdw-custom" color="yellow-container" tabindex="0">Custom Color</mdw-button>
                        </mdw-layout>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-button disabled filled="tonal" aria-disabled="true">Default</mdw-button>
                            <mdw-button disabled filled="tonal" icon="search" color="tertiary-container" aria-disabled="true">Icon Tertiary</mdw-button>
                            <mdw-button disabled filled="tonal" class="mdw-custom" color="yellow-container" aria-disabled="true">Custom Color</mdw-button>
                        </mdw-layout>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Outlined buttons</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-button outlined tabindex="0">Default</mdw-button>
                            <mdw-button outlined color="surface-primary" tabindex="0">Surface Primary</mdw-button>
                            <mdw-button outlined icon="search" ink="tertiary" tabindex="0">Icon Tertiary</mdw-button>
                            <mdw-button outlined class="mdw-custom" ink="yellow" tabindex="0">Custom Color</mdw-button>
                        </mdw-layout>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-button disabled outlined aria-disabled="true">Default</mdw-button>
                            <mdw-button disabled outlined color="surface-primary" aria-disabled="true">Surface Primary</mdw-button>
                            <mdw-button disabled outlined icon="search" ink="tertiary" aria-disabled="true">Icon Tertiary</mdw-button>
                            <mdw-button disabled outlined class="mdw-custom" ink="yellow" aria-disabled="true">Custom Color</mdw-button>
                        </mdw-layout>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Text buttons</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-button tabindex="0">Default</mdw-button>
                            <mdw-button icon="search" ink="tertiary" tabindex="0">Icon Tertiary</mdw-button>
                            <mdw-button class="mdw-custom" ink="yellow" tabindex="0">Custom Color</mdw-button>
                        </mdw-layout>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-button disabled aria-disabled="true">Default</mdw-button>
                            <mdw-button disabled icon="search" ink="tertiary" aria-disabled="true">Icon Tertiary</mdw-button>
                            <mdw-button disabled class="mdw-custom" ink="yellow" aria-disabled="true">Custom Color</mdw-button>
                        </mdw-layout>
                    </mdw-layout>
                </demo-section>
            </demo-section>
            <demo-section>
                <h2 slot="heading">FAB</h2>
                <demo-section>
                    <h3 slot="heading">Normal</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-fab icon="edit" tabindex="0">Default</mdw-fab>
                        <mdw-fab color="surface-primary" icon="edit" tabindex="0">Surface Primary</mdw-fab>
                        <mdw-fab color="secondary-container" icon="edit" tabindex="0">Secondary Container</mdw-fab>
                        <mdw-fab color="tertiary-container" icon="edit" tabindex="0">Tertiary Container</mdw-fab>
                        <mdw-fab class="mdw-custom" color="yellow-container" icon="edit" tabindex="0">Custom (Yellow)</mdw-fab>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Small</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-fab fab-size="small" icon="edit" tabindex="0">Default</mdw-fab>
                        <mdw-fab fab-size="small" color="surface-primary" icon="edit" tabindex="0">Surface Primary</mdw-fab>
                        <mdw-fab fab-size="small" color="secondary-container" icon="edit" tabindex="0">Secondary Container</mdw-fab>
                        <mdw-fab fab-size="small" color="tertiary-container" icon="edit" tabindex="0">Tertiary Container</mdw-fab>
                        <mdw-fab fab-size="small" class="mdw-custom" color="yellow-container" icon="edit" tabindex="0">Custom (Yellow)</mdw-fab>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Large</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-fab fab-size="large" icon="edit" tabindex="0">Default</mdw-fab>
                        <mdw-fab fab-size="large" color="surface-primary" icon="edit" tabindex="0">Surface Primary</mdw-fab>
                        <mdw-fab fab-size="large" color="secondary-container" icon="edit" tabindex="0">Secondary Container</mdw-fab>
                        <mdw-fab fab-size="large" color="tertiary-container" icon="edit" tabindex="0">Tertiary Container</mdw-fab>
                        <mdw-fab fab-size="large" class="mdw-custom" color="yellow-container" icon="edit" tabindex="0">Custom (Yellow)</mdw-fab>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Lowered</h3>
                    <mdw-layout gap="12px" y="center" wrap style="--mdw-layout__gap: 12px">
                        <mdw-fab class="mdw-custom" lowered fab-size="small" color="surface" ink="yellow" icon="edit" tabindex="0">Surface + Yellow</mdw-fab>
                        <mdw-fab class="mdw-custom" lowered fab-size="small" color="orange-container" icon="edit" tabindex="0">Orange Container</mdw-fab>
                        <mdw-fab class="mdw-custom" lowered color="green-container" icon="edit" tabindex="0">Green Container</mdw-fab>
                        <mdw-fab class="mdw-custom" lowered fab-size="large" color="alias-container" icon="edit" tabindex="0">Alias Container</mdw-fab>
                    </mdw-layout>
                </demo-section>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Extended FAB</h2>
                <demo-section>
                    <h3 slot="heading">With icon</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-extended-fab color="surface-primary" icon="edit" tabindex="0">Compose</mdw-extended-fab>
                        <mdw-extended-fab color="secondary-container" icon="edit" tabindex="0">Compose</mdw-extended-fab>
                        <mdw-extended-fab color="tertiary-container" icon="edit" tabindex="0">Compose</mdw-extended-fab>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Without icon</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-extended-fab class="mdw-custom" color="yellow" tabindex="0">Compose</mdw-extended-fab>
                        <mdw-extended-fab class="mdw-custom" color="green" tabindex="0">Compose</mdw-extended-fab>
                        <mdw-extended-fab class="mdw-custom" color="alias" tabindex="0">Compose</mdw-extended-fab>
                    </mdw-layout>
                </demo-section>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Icon buttons</h2>
                <demo-section>
                    <h3 slot="heading">Filled icon buttons</h3>
                    <demo-section>
                        <h4 slot="heading">No toggle</h4>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button filled icon="settings" tabindex="0">Settings</mdw-icon-button>
                                <mdw-icon-button filled color="tertiary" icon="favorite" tabindex="0">Favorite</mdw-icon-button>
                                <mdw-icon-button filled class="mdw-custom" color="yellow" icon="edit" tabindex="0">Edit</mdw-icon-button>
                            </mdw-layout>
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button disabled filled icon="settings" aria-disabled="true">Settings</mdw-icon-button>
                                <mdw-icon-button disabled filled color="tertiary" icon="favorite" aria-disabled="true">Favorite</mdw-icon-button>
                                <mdw-icon-button disabled filled class="mdw-custom" color="yellow" icon="edit" aria-disabled="true">Edit</mdw-icon-button>
                            </mdw-layout>
                        </mdw-layout>
                    </demo-section>
                    <demo-section>
                        <h4 slot="heading">Toggle</h4>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button filled type="checkbox" icon="settings" tabindex="0">Default</mdw-icon-button>
                                <mdw-icon-button filled type="checkbox" checked icon="settings" tabindex="0" selected>Default (Checked)</mdw-icon-button>
                                <mdw-icon-button filled type="checkbox" color="tertiary" icon="favorite" tabindex="0">Tertiary</mdw-icon-button>
                                <mdw-icon-button filled type="checkbox" checked color="tertiary" icon="favorite" tabindex="0" selected>Tertiary (Checked)</mdw-icon-button>
                                <mdw-icon-button filled type="checkbox" class="mdw-custom" color="yellow" icon="edit" tabindex="0">Yellow</mdw-icon-button>
                                <mdw-icon-button filled type="checkbox" checked class="mdw-custom" color="yellow" icon="edit" tabindex="0" selected>Yellow (Checked)</mdw-icon-button>
                            </mdw-layout>
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button filled disabled type="checkbox" icon="settings" aria-disabled="true">Default</mdw-icon-button>
                                <mdw-icon-button filled disabled type="checkbox" checked icon="settings" aria-disabled="true" selected>Default (Checked)</mdw-icon-button>
                                <mdw-icon-button filled disabled type="checkbox" color="tertiary" icon="favorite" aria-disabled="true">Tertiary</mdw-icon-button>
                                <mdw-icon-button filled disabled type="checkbox" checked color="tertiary" icon="favorite" aria-disabled="true" selected>Tertiary (Checked)</mdw-icon-button>
                                <mdw-icon-button filled disabled type="checkbox" class="mdw-custom" color="yellow" icon="edit" aria-disabled="true">Yellow</mdw-icon-button>
                                <mdw-icon-button filled disabled type="checkbox" checked class="mdw-custom" color="yellow" icon="edit" aria-disabled="true" selected>Yellow (Checked)</mdw-icon-button>
                            </mdw-layout>
                        </mdw-layout>
                    </demo-section>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Filled tonal icon buttons</h3>
                    <demo-section>
                        <h4 slot="heading">No toggle</h4>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button filled="tonal" icon="settings" tabindex="0">Default</mdw-icon-button>
                                <mdw-icon-button filled="tonal" color="tertiary-container" icon="favorite" tabindex="0">Tertiary Container</mdw-icon-button>
                                <mdw-icon-button filled="tonal" class="mdw-custom" color="yellow-container" icon="edit" tabindex="0">Yellow Container</mdw-icon-button>
                            </mdw-layout>
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button filled="tonal" disabled icon="settings" aria-disabled="true">Default</mdw-icon-button>
                                <mdw-icon-button filled="tonal" disabled color="tertiary-container" icon="favorite" aria-disabled="true">Tertiary Container</mdw-icon-button>
                                <mdw-icon-button filled="tonal" disabled class="mdw-custom" color="yellow-container" icon="edit" aria-disabled="true">Yellow Container</mdw-icon-button>
                            </mdw-layout>
                        </mdw-layout>
                    </demo-section>
                    <demo-section>
                        <h4 slot="heading">Toggle</h4>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button filled="tonal" type="checkbox" icon="settings" tabindex="0">Default</mdw-icon-button>
                                <mdw-icon-button filled="tonal" type="checkbox" checked icon="settings" tabindex="0" selected>Default (Checked)</mdw-icon-button>
                                <mdw-icon-button filled="tonal" type="checkbox" color="tertiary-container" icon="favorite" tabindex="0">Tertiary Container</mdw-icon-button>
                                <mdw-icon-button filled="tonal" type="checkbox" checked color="tertiary-container" icon="favorite" tabindex="0" selected>Tertiary Container (Checked)</mdw-icon-button>
                                <mdw-icon-button filled="tonal" type="checkbox" class="mdw-custom" color="yellow-container" icon="edit" tabindex="0">Yellow Container</mdw-icon-button>
                                <mdw-icon-button filled="tonal" type="checkbox" checked class="mdw-custom" color="yellow-container" icon="edit" tabindex="0" selected>Yellow Container (Checked)</mdw-icon-button>
                            </mdw-layout>
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button disabled filled="tonal" type="checkbox" icon="settings" aria-disabled="true">Default</mdw-icon-button>
                                <mdw-icon-button disabled filled="tonal" type="checkbox" checked icon="settings" aria-disabled="true" selected>Default (Checked)</mdw-icon-button>
                                <mdw-icon-button disabled filled="tonal" type="checkbox" color="tertiary-container" icon="favorite" aria-disabled="true">Tertiary Container</mdw-icon-button>
                                <mdw-icon-button disabled filled="tonal" type="checkbox" checked color="tertiary-container" icon="favorite" aria-disabled="true" selected>Tertiary Container (Checked)</mdw-icon-button>
                                <mdw-icon-button disabled filled="tonal" type="checkbox" class="mdw-custom" color="yellow-container" icon="edit" aria-disabled="true">Yellow Container</mdw-icon-button>
                                <mdw-icon-button disabled filled="tonal" type="checkbox" checked class="mdw-custom" color="yellow-container" icon="edit" aria-disabled="true" selected>Yellow Container (Checked)</mdw-icon-button>
                            </mdw-layout>
                        </mdw-layout>
                    </demo-section>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Outlined icon buttons</h3>
                    <demo-section>
                        <h4 slot="heading">No toggle</h4>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button outlined icon="settings" tabindex="0">Default</mdw-icon-button>
                                <mdw-icon-button outlined ink="tertiary" icon="favorite" tabindex="0">Tertiary</mdw-icon-button>
                                <mdw-icon-button outlined class="mdw-custom" ink="yellow" icon="edit" tabindex="0">Yellow</mdw-icon-button>
                            </mdw-layout>
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button disabled outlined icon="settings" aria-disabled="true">Default</mdw-icon-button>
                                <mdw-icon-button disabled outlined ink="tertiary" icon="favorite" aria-disabled="true">Tertiary</mdw-icon-button>
                                <mdw-icon-button disabled outlined class="mdw-custom" ink="yellow" icon="edit" aria-disabled="true">Yellow</mdw-icon-button>
                            </mdw-layout>
                        </mdw-layout>
                    </demo-section>
                    <demo-section>
                        <h4 slot="heading">Toggle</h4>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button outlined type="checkbox" icon="settings" tabindex="0">Default</mdw-icon-button>
                                <mdw-icon-button outlined type="checkbox" checked icon="settings" tabindex="0" selected>Default (Checked)</mdw-icon-button>
                                <mdw-icon-button outlined type="checkbox" color="tertiary" icon="favorite" tabindex="0">Tertiary</mdw-icon-button>
                                <mdw-icon-button outlined type="checkbox" checked color="tertiary" icon="favorite" tabindex="0" selected>Tertiary (Checked)</mdw-icon-button>
                                <mdw-icon-button outlined type="checkbox" class="mdw-custom" color="yellow" icon="edit" tabindex="0">Yellow</mdw-icon-button>
                                <mdw-icon-button outlined type="checkbox" checked class="mdw-custom" color="yellow" icon="edit" tabindex="0" selected>Yellow (Checked)</mdw-icon-button>
                            </mdw-layout>
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button disabled outlined type="checkbox" icon="settings" aria-disabled="true">Default</mdw-icon-button>
                                <mdw-icon-button disabled outlined type="checkbox" checked icon="settings" aria-disabled="true" selected>Default (Checked)</mdw-icon-button>
                                <mdw-icon-button disabled outlined type="checkbox" color="tertiary" icon="favorite" aria-disabled="true">Tertiary</mdw-icon-button>
                                <mdw-icon-button disabled outlined type="checkbox" checked color="tertiary" icon="favorite" aria-disabled="true" selected>Tertiary (Checked)</mdw-icon-button>
                                <mdw-icon-button disabled outlined type="checkbox" class="mdw-custom" color="yellow" icon="edit" aria-disabled="true">Yellow</mdw-icon-button>
                                <mdw-icon-button disabled outlined type="checkbox" checked class="mdw-custom" color="yellow" icon="edit" aria-disabled="true" selected>Yellow (Checked)</mdw-icon-button>
                            </mdw-layout>
                        </mdw-layout>
                    </demo-section>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Standard icon buttons</h3>
                    <demo-section>
                        <h4 slot="heading">No toggle</h4>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button icon="settings" tabindex="0">Settings</mdw-icon-button>
                                <mdw-icon-button ink="tertiary" icon="favorite" tabindex="0">Tertiary</mdw-icon-button>
                                <mdw-icon-button class="mdw-custom" ink="yellow" icon="edit" tabindex="0">Yellow</mdw-icon-button>
                            </mdw-layout>
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button disabled icon="settings" aria-disabled="true">Settings</mdw-icon-button>
                                <mdw-icon-button disabled ink="tertiary" icon="favorite" aria-disabled="true">Tertiary</mdw-icon-button>
                                <mdw-icon-button disabled class="mdw-custom" ink="yellow" icon="edit" aria-disabled="true">Yellow</mdw-icon-button>
                            </mdw-layout>
                        </mdw-layout>
                    </demo-section>
                    <demo-section>
                        <h4 slot="heading">Toggle</h4>
                        <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button type="checkbox" icon="settings" tabindex="0">Default</mdw-icon-button>
                                <mdw-icon-button type="checkbox" checked icon="settings" tabindex="0" selected>Default (Checked)</mdw-icon-button>
                                <mdw-icon-button type="checkbox" ink="tertiary" icon="favorite" tabindex="0">Tertiary</mdw-icon-button>
                                <mdw-icon-button type="checkbox" checked ink="tertiary" icon="favorite" tabindex="0" selected>Tertiary (Checked)</mdw-icon-button>
                                <mdw-icon-button type="checkbox" class="mdw-custom" ink="yellow" icon="edit" tabindex="0">Yellow</mdw-icon-button>
                                <mdw-icon-button type="checkbox" checked class="mdw-custom" ink="yellow" icon="favorite" tabindex="0" selected>Yellow (Checked)</mdw-icon-button>
                            </mdw-layout>
                            <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                                <mdw-icon-button disabled type="checkbox" icon="settings" aria-disabled="true">Default</mdw-icon-button>
                                <mdw-icon-button disabled type="checkbox" checked icon="settings" aria-disabled="true" selected>Default (Checked)</mdw-icon-button>
                                <mdw-icon-button disabled type="checkbox" ink="tertiary" icon="favorite" aria-disabled="true">Tertiary</mdw-icon-button>
                                <mdw-icon-button disabled type="checkbox" checked ink="tertiary" icon="favorite" aria-disabled="true" selected>Tertiary (Checked)</mdw-icon-button>
                                <mdw-icon-button disabled type="checkbox" class="mdw-custom" ink="yellow" icon="edit" aria-disabled="true">Yellow</mdw-icon-button>
                                <mdw-icon-button disabled type="checkbox" checked class="mdw-custom" ink="yellow" icon="favorite" aria-disabled="true" selected>Yellow (Checked)</mdw-icon-button>
                            </mdw-layout>
                        </mdw-layout>
                    </demo-section>
                </demo-section>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Segmented buttons</h2>
                <demo-section>
                    <h3 slot="heading">Single selection</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <form>
                            <mdw-segmented-button-group aria-orientation="horizontal">
                                <mdw-segmented-button name="segmented-demo" value="favorite" icon="favorite" tabindex="0" outlined>Favorite</mdw-segmented-button>
                                <mdw-segmented-button name="segmented-demo" value="enabled" icon="star" tabindex="-1" outlined>Enabled</mdw-segmented-button>
                                <mdw-segmented-button name="segmented-demo" value="disabled" icon="edit" disabled tabindex="-1" outlined>Disabled</mdw-segmented-button>
                                <mdw-segmented-button name="segmented-demo" value="text" tabindex="-1" outlined>Text only</mdw-segmented-button>
                            </mdw-segmented-button-group>
                        </form>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Single selection (Required)</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <form>
                            <mdw-segmented-button-group aria-required="true" aria-orientation="horizontal">
                                <mdw-segmented-button name="segmented-demo-required" required value="favorite" checked icon="favorite" tabindex="0" outlined selected>Favorite</mdw-segmented-button>
                                <mdw-segmented-button name="segmented-demo-required" required value="enabled" icon="star" tabindex="-1" outlined>Enabled</mdw-segmented-button>
                                <mdw-segmented-button name="segmented-demo-required" required value="disabled" icon="edit" disabled tabindex="-1" outlined>Disabled</mdw-segmented-button>
                                <mdw-segmented-button name="segmented-demo-required" required value="text" tabindex="-1" outlined>Text only</mdw-segmented-button>
                            </mdw-segmented-button-group>
                        </form>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Multi-selectable</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-segmented-button-group class="mdw-custom" color="alias-container" aria-multiselectable="true" aria-orientation="horizontal">
                            <mdw-segmented-button type="checkbox" checked icon="favorite" tabindex="0" outlined selected>Favorite</mdw-segmented-button>
                            <mdw-segmented-button type="checkbox" checked icon="star" tabindex="-1" outlined selected>Enabled</mdw-segmented-button>
                            <mdw-segmented-button type="checkbox" icon="edit" disabled tabindex="-1" outlined>Disabled</mdw-segmented-button>
                            <mdw-segmented-button type="checkbox" tabindex="-1" outlined>Text only</mdw-segmented-button>
                        </mdw-segmented-button-group>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Text-only</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <form>
                            <mdw-segmented-button-group color="tertiary-container" aria-orientation="horizontal">
                                <mdw-segmented-button name="demo-segmented-text" value="$" checked tabindex="0" outlined selected>$</mdw-segmented-button>
                                <mdw-segmented-button name="demo-segmented-text" value="$$" tabindex="-1" outlined>$$</mdw-segmented-button>
                                <mdw-segmented-button name="demo-segmented-text" value="$$$" disabled tabindex="-1" outlined>$$$</mdw-segmented-button>
                                <mdw-segmented-button name="demo-segmented-text" value="$$$$" tabindex="-1" outlined>$$$$</mdw-segmented-button>
                            </mdw-segmented-button-group>
                        </form>
                    </mdw-layout>
                </demo-section>
                <demo-section>
                    <h3 slot="heading">Multi-selectable text-only</h3>
                    <mdw-layout gap="12px" wrap style="--mdw-layout__gap: 12px">
                        <mdw-segmented-button-group class="mdw-custom" color="alias-container" aria-multiselectable="true" aria-orientation="horizontal">
                            <mdw-segmented-button type="checkbox" checked icon="check" tabindex="0" outlined selected>$</mdw-segmented-button>
                            <mdw-segmented-button type="checkbox" icon="check" tabindex="-1" outlined>$$</mdw-segmented-button>
                            <mdw-segmented-button type="checkbox" icon="check" disabled tabindex="-1" outlined>$$$</mdw-segmented-button>
                            <mdw-segmented-button type="checkbox" checked icon="check" tabindex="-1" outlined selected>$$$$</mdw-segmented-button>
                        </mdw-segmented-button-group>
                    </mdw-layout>
                </demo-section>
            </demo-section>
        </demo-section>
        `;
    }
}