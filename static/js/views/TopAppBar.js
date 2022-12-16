import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Top App Bars');
    }

    async getHtml() {
        return `
        <demo-section>
            <h1 slot="heading">Top App Bar</h1>
            <demo-section>
                <h2 slot="heading">Center (Default)</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <demo-screen color="background">
                        <mdw-top-app-bar headline="Title"></mdw-top-app-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </demo-screen>
                    <demo-screen color="background">
                        <mdw-top-app-bar headline="Auto-hide" hide-on-scroll>
                            <mdw-icon-button class="toolbar-icon-button" slot="leading" icon="menu" tabindex="0">Menu</mdw-icon-button>
                        </mdw-top-app-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </demo-screen>
                    <demo-screen color="background">
                        <mdw-top-app-bar>
                            <mdw-icon-button class="toolbar-icon-button" slot="leading" icon="menu" tabindex="0">Menu</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button toolbar-avatar" slot="trailing" icon="account_circle" tabindex="-1">Profile</mdw-icon-button>
                            <mdw-text ink="primary">Custom</mdw-text> (and oversized) Title
                        </mdw-top-app-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </demo-screen>
                    <demo-screen color="background">
                        <mdw-top-app-bar kbd-nav="false" aria-label="Search Toolbar">
                            <mdw-icon-button class="toolbar-icon-button" slot="leading" icon="menu" tabindex="0">Menu</mdw-icon-button>
                            <mdw-text-input class="demo-app-bar-search" placeholder="Search" type="search" icon="search" outlined dense shape-style="full" tabindex="0"></mdw-text-input>
                            <mdw-icon-button class="toolbar-icon-button toolbar-avatar" slot="trailing" icon="account_circle" tabindex="0">Profile</mdw-icon-button>
                        </mdw-top-app-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </demo-screen>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Small</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-container class="demo-screen" color="background">
                        <mdw-top-app-bar headline="Small app bar" size="small">
                            <mdw-icon-button class="toolbar-icon-button" slot="leading" icon="arrow_back" tabindex="0">Back</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="attach_file" tabindex="-1">Attach File</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="today" tabindex="-1">Today</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="menu" tabindex="-1">More</mdw-icon-button>
                        </mdw-top-app-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </mdw-container>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Medium</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-container class="demo-screen" color="background">
                        <mdw-top-app-bar headline="Medium app bar" size="medium" color="secondary-container">
                            <mdw-icon-button class="toolbar-icon-button" slot="leading" icon="arrow_back" tabindex="0">Back</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="attach_file" tabindex="-1">Attach File</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="today" tabindex="-1">Today</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="menu" tabindex="-1">More</mdw-icon-button>
                        </mdw-top-app-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </mdw-container>
                    <mdw-container class="demo-screen" color="background">
                        <mdw-top-app-bar headline="Oversized Auto-Hiding Headline Medium app bar" hide-on-scroll size="medium">
                            <mdw-icon-button class="toolbar-icon-button" slot="leading" icon="arrow_back" tabindex="0">Back</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="attach_file" tabindex="-1">Attach File</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="today" tabindex="-1">Today</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="menu" tabindex="-1">More</mdw-icon-button>
                        </mdw-top-app-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </mdw-container>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Large</h2>
                <mdw-layout wrap gap="12px" style="--mdw-layout__gap:12px;">
                    <mdw-container class="demo-screen" color="background">
                        <mdw-top-app-bar headline="Large app bar" size="large">
                            <mdw-icon-button class="toolbar-icon-button" slot="leading" icon="arrow_back" tabindex="0">Back</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="attach_file" tabindex="-1">Attach File</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="today" tabindex="-1">Today</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="menu" tabindex="-1">More</mdw-icon-button>
                        </mdw-top-app-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </mdw-container>
                    <mdw-container class="demo-screen" color="background">
                        <mdw-top-app-bar headline="Oversized Headline Large app bar will not exceed two lines" hide-on-scroll size="large">
                            <mdw-icon-button class="toolbar-icon-button" slot="leading" icon="arrow_back" tabindex="0">Back</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="attach_file" tabindex="-1">Attach File</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="today" tabindex="-1">Today</mdw-icon-button>
                            <mdw-icon-button class="toolbar-icon-button" slot="trailing" icon="menu" tabindex="-1">More</mdw-icon-button>
                        </mdw-top-app-bar>
                        <demo-dummy-text></demo-dummy-text>
                    </mdw-container>
                </mdw-layout>
            </demo-section>
        </demo-section>
        `;
    }
}