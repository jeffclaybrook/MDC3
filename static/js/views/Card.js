import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Cards');
    }

    async getHtml() {
        return `
        <demo-section>
            <h1 slot="heading">Card</h1>
            <demo-section>
                <h2 slot="heading">Elevated</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-card elevated>
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Elevated Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button filled tabindex="0">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                    <mdw-card actionable elevated>
                        <mdw-button slot="primary-action" aria-label="Primary Action" tabindex="0"></mdw-button>
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Actionable Elevated Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button filled tabindex="0">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                    <mdw-card actionable elevated color="inverse-surface">
                        <mdw-button slot="primary-action" aria-label="Primary Action" tabindex="0"></mdw-button>
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Actionable Elevated Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button filled tabindex="0">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                    <mdw-card elevated disabled aria-disabled="true">
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Elevated Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button disabled filled aria-disabled="true">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                    <mdw-card actionable elevated disabled aria-disabled="true">
                        <mdw-button slot="primary-action" aria-label="Primary Action" tabindex="0"></mdw-button>
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Actionable Elevated Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button disabled filled aria-disabled="true">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Filled</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-card filled>
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Filled Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button filled="tertiary" tabindex="0">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                    <mdw-card filled actionable>
                        <mdw-button slot="primary-action" aria-label="Primary Action" tabindex="0"></mdw-button>
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Actionable Filled Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button filled tabindex="0">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                    <mdw-card filled color="inverse-surface" actionable>
                        <mdw-button slot="primary-action" aria-label="Primary Action" tabindex="0"></mdw-button>
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Actionable Filled Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button filled tabindex="0">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                    <mdw-card filled disabled aria-disabled="true">
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Filled Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button disabled filled aria-disabled="true">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                    <mdw-card filled actionable disabled aria-disabled="true">
                        <mdw-button slot="primary-action" aria-label="Primary Action" tabindex="0"></mdw-button>
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Actionable Filled Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button disabled filled aria-disabled="true">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Outlined</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-card outlined>
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Outlined Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button filled tabindex="0">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                    <mdw-card outlined actionable>
                        <mdw-button slot="primary-action" aria-label="Primary Action" tabindex="0"></mdw-button>
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Actionable Outlined Card</mdw-text>
                            <mdw-text block type-style="title-small">Title small text</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button filled tabindex="0">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                    <mdw-card outlined disabled aria-disabled="true">
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Outlined Card</mdw-text>
                            <mdw-text block type-style="title-small">(Disabled)</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button disabled filled aria-disabled="true">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                    <mdw-card outlined actionable disabled aria-disabled="true">
                        <mdw-button slot="primary-action" aria-label="Primary Action" tabindex="0"></mdw-button>
                        <div style="padding:12px">
                            <mdw-text block type-style="title">Actionable Outlined Card</mdw-text>
                            <mdw-text block type-style="title-small">(Disabled)</mdw-text>
                            <mdw-text block type-style="body-medium">Body medium text</mdw-text>
                        </div>
                        <mdw-card-action-area style="padding:12px">
                            <mdw-button disabled filled aria-disabled="true">Action</mdw-button>
                        </mdw-card-action-area>
                    </mdw-card>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}