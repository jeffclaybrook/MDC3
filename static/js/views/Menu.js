import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Menus');
    }

    async getHtml() {
        return `
        <demo-section>
            <h1 slot="heading">Menus</h1>
            <demo-section>
                <h2 slot="heading">Basic menu</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-button onclick="document.getElementById(this.ariaControls).show(this)" aria-haspopup="dialog" aria-controls="menu-simple" tabindex="0">Basic menu</mdw-button>
                    <mdw-button onclick="document.getElementById(this.ariaControls).show(this)" aria-haspopup="dialog" aria-controls="menu-oversized" tabindex="0">Oversized menu</mdw-button>
                    <mdw-button onclick="document.getElementById(this.ariaControls).showModal(this)" aria-haspopup="dialog" aria-controls="menu-simple" tabindex="0">Basic menu modal</mdw-button>
                    <mdw-button onclick="document.getElementById(this.ariaControls).showModal(this)" aria-haspopup="dialog" aria-controls="menu-oversized" tabindex="0">Oversized menu modal</mdw-button>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Checkboxes menu</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-button onclick="document.getElementById(this.ariaControls).show(this)" aria-haspopup="dialog" aria-controls="menu-checkboxes" tabindex="0">Checkboxes menu</mdw-button>
                    <mdw-button onclick="document.getElementById(this.ariaControls).showModal(this)" aria-haspopup="dialog" aria-controls="menu-checkboxes" tabindex="0">Checkboxes menu modal</mdw-button>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Radio menu</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-button onclick="document.getElementById(this.ariaControls).show(this)" aria-haspopup="dialog" aria-controls="menu-radio" tabindex="0">Radio menu</mdw-button>
                    <mdw-button onclick="document.getElementById(this.ariaControls).showModal(this)" aria-haspopup="dialog" aria-controls="menu-radio" tabindex="0">Radio menu modal</mdw-button>
                </mdw-layout>
            </demo-section>
        </demo-section>
        <div id="menus">
            <mdw-menu id="menu-simple">
                <mdw-menu-item tabindex="0">Item 1</mdw-menu-item>
                <mdw-menu-item icon="visibility" tabindex="-1">Item 2</mdw-menu-item>
                <mdw-menu-item icon="content_copy" trailing="Ctrl+C" tabindex="-1">Item 3</mdw-menu-item>
                <mdw-menu-item icon="content_paste" trailing="⌘V" tabindex="-1">Item 4</mdw-menu-item>
                <mdw-menu-item icon="cloud" trailing-icon="chevron_right" tabindex="-1">Item 5</mdw-menu-item>
            </mdw-menu>
            <mdw-menu id="menu-oversized">
                <mdw-menu-item tabindex="0">Short</mdw-menu-item>
                <mdw-menu-item icon="visibility" tabindex="-1">Icon</mdw-menu-item>
                <mdw-menu-item icon="content_copy" trailing="Ctrl+C" tabindex="-1">Icon and trailing</mdw-menu-item>
                <mdw-menu-item icon="content_paste" trailing="⌘V" tabindex="-1">Medium sized with icon and trailing</mdw-menu-item>
                <mdw-menu-item icon="cloud" trailing-icon="chevron_right" tabindex="-1">Long menu item including both icon and trailing</mdw-menu-item>
            </mdw-menu>
            <mdw-menu id="menu-checkboxes">
                <mdw-menu-item tabindex="0">Short</mdw-menu-item>
                <mdw-menu-item icon="visibility" tabindex="-1">Icon</mdw-menu-item>
                <mdw-menu-item icon="check" type="checkbox" name="bold" trailing="Ctrl+B" tabindex="-1">Bold</mdw-menu-item>
                <mdw-menu-item icon="check" type="checkbox" name="italic" trailing="Ctrl+I" tabindex="-1">Italic</mdw-menu-item>
                <mdw-menu-item icon="check" type="checkbox" name="underline" trailing="Ctrl+U" tabindex="-1">Underline</mdw-menu-item>
            </mdw-menu>
            <mdw-menu id="menu-radio">
                <mdw-menu-item tabindex="0">Short</mdw-menu-item>
                <mdw-menu-item icon="visibility" tabindex="-1">Icon</mdw-menu-item>
                <mdw-divider style="margin:8px 0"></mdw-divider>
                <mdw-menu-item icon="check" type="radio" name="spacing" value="1" trailing="Ctrl+1" tabindex="-1">Single-line</mdw-menu-item>
                <mdw-menu-item icon="check" type="radio" name="spacing" value="1.5" tabindex="-1">1.5 Lines</mdw-menu-item>
                <mdw-menu-item icon="check" type="radio" name="spacing" value="2" trailing="Ctrl+2" tabindex="-1">Double-line</mdw-menu-item>
            </mdw-menu>
        </div>
        `;
    }
}