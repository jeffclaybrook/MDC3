import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Typography');
    }

    async getHtml() {
        return `
        <demo-section>
            <h1 slot="heading">Typography</h1>
            <demo-section>
                <h2 slot="heading">Type Styles</h2>
                <mdw-text block type-style="display-large">Display large</mdw-text>
                <mdw-text block type-style="display-medium">Display medium</mdw-text>
                <mdw-text block type-style="display-small">Display small</mdw-text>
                <mdw-text block type-style="headline-large">Headline large</mdw-text>
                <mdw-text block type-style="headline-medium">Headline medium</mdw-text>
                <mdw-text block type-style="headline-small">Headline small</mdw-text>
                <mdw-text block type-style="title-large">Title large</mdw-text>
                <mdw-text block type-style="title-medium">Title medium</mdw-text>
                <mdw-text block type-style="title-small">Title small</mdw-text>
                <mdw-text block type-style="label-large">Label large</mdw-text>
                <mdw-text block type-style="label-medium">Label medium</mdw-text>
                <mdw-text block type-style="label-small">Label small</mdw-text>
                <mdw-text block type-style="body-large">Body large</mdw-text>
                <mdw-text block type-style="body-medium">Body medium</mdw-text>
                <mdw-text block type-style="body-small">Body small</mdw-text>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Inline Icons</h2>
                <mdw-text block type-style="display-large">Display large <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="display-medium">Display medium <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="display-small">Display small <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="headline-large">Headline large <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="headline-medium">Headline medium <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="headline-small">Headline small <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="title-large">Title large <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="title-medium">Title medium <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="title-small">Title small <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="label-large">Label large <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="label-medium">Label medium <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="label-small">Label small <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="body-large">Body large <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="body-medium">Body medium <mdw-icon>edit</mdw-icon></mdw-text>
                <mdw-text block type-style="body-small">Body small <mdw-icon>edit</mdw-icon></mdw-text>
            </demo-section>
        </demo-section>
        `;
    }
}