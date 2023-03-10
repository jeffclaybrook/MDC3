import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Colors');
    }

    async getHtml() {
        return `
        <demo-section>
            <h1 slot="heading">Color</h1>
            <mdw-layout wrap="" gap="12px" style="--mdw-layout__gap:12px;">
                <mdw-container class="box" color="primary">Primary</mdw-container>
                <mdw-container class="box" color="primary-container">Primary Container</mdw-container>
                <mdw-container class="box" color="secondary">Secondary</mdw-container>
                <mdw-container class="box" color="secondary-container">Secondary Container</mdw-container>
                <mdw-container class="box" color="tertiary">Tertiary</mdw-container>
                <mdw-container class="box" color="tertiary-container">Tertiary Container</mdw-container>
                <mdw-container class="box" color="error">Error</mdw-container>
                <mdw-container class="box" color="error-container">Error Container</mdw-container>
                <mdw-container class="box" color="background">Background</mdw-container>
            </mdw-layout>
            <demo-section>
                <h2 slot="heading">Surface tones</h2>
                <mdw-layout gap="12px" wrap="" style="--mdw-layout__gap:12px;">
                    <mdw-container class="box" color="surface">Surface</mdw-container>
                    <mdw-container class="box" color="surface" elevation="1">Surface +1</mdw-container>
                    <mdw-container class="box" color="surface" elevation="2">Surface +2</mdw-container>
                    <mdw-container class="box" color="surface" elevation="3">Surface +3</mdw-container>
                    <mdw-container class="box" color="surface" elevation="4">Surface +4</mdw-container>
                    <mdw-container class="box" color="surface" elevation="5">Surface +5</mdw-container>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Inverse</h2>
                <mdw-layout gap="12px" wrap="" style="--mdw-layout__gap:12px;">
                    <mdw-container class="box" color="inverse-surface">Inverse Surface</mdw-container>
                    <mdw-container class="box" color="inverse-surface" elevation="1">Inverse Surface +1</mdw-container>
                    <mdw-container class="box" color="inverse-surface" elevation="2">Inverse Surface +2</mdw-container>
                    <mdw-container class="box" color="inverse-surface" elevation="3">Inverse Surface +3</mdw-container>
                    <mdw-container class="box" color="inverse-surface" elevation="4">Inverse Surface +4</mdw-container>
                    <mdw-container class="box" color="inverse-surface" elevation="5">Inverse Surface +5</mdw-container>
                    <mdw-container class="box" color="inverse-primary">Inverse Primary</mdw-container>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Neutral variant</h2>
                <mdw-layout gap="12px" wrap="" style="--mdw-layout__gap:12px;">
                    <mdw-container class="box" color="surface-variant">Surface Variant</mdw-container>
                    <mdw-container class="box" color="surface-variant" elevation="1">Surface Variant +1</mdw-container>
                    <mdw-container class="box" color="surface-variant" elevation="2">Surface Variant +2</mdw-container>
                    <mdw-container class="box" color="surface-variant" elevation="3">Surface Variant +3</mdw-container>
                    <mdw-container class="box" color="surface-variant" elevation="4">Surface Variant +4</mdw-container>
                    <mdw-container class="box" color="surface-variant" elevation="5">Surface Variant +5</mdw-container>
                    <mdw-container class="box" ink="outline">Outline</mdw-container>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Custom</h2>
                <mdw-layout gap="12px" wrap="" style="--mdw-layout__gap:12px;">
                    <mdw-container class="box mdw-custom" color="yellow">Yellow</mdw-container>
                    <mdw-container class="box mdw-custom" color="yellow-container">Yellow Container</mdw-container>
                    <mdw-container class="box mdw-custom" color="orange">Orange</mdw-container>
                    <mdw-container class="box mdw-custom" color="orange-container">Orange Container</mdw-container>
                    <mdw-container class="box mdw-custom" color="green">Green</mdw-container>
                    <mdw-container class="box mdw-custom" color="green-container">Green Container</mdw-container>
                    <mdw-container class="box mdw-custom" color="alias">Alias</mdw-container>
                    <mdw-container class="box mdw-custom" color="alias-container">Alias Container</mdw-container>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}