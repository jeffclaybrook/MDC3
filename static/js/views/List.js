import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Lists');
    }

    async getHtml() {
        return `
        <demo-section id="list">
            <h1 slot="heading">Lists</h1>
            <demo-section>
                <h2 slot="heading">One-line lists</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-list color="surface" style="width:100%">
                        <mdw-list-item>Headline (textContent)</mdw-list-item>
                        <mdw-list-item icon="person">Headline with leading icon</mdw-list-item>
                        <mdw-list-item avatar="A">Headline with leading avatar</mdw-list-item>
                        <mdw-list-item src="https://upload.wikimedia.org/wikipedia/commons/3/31/Rainbow-gradient-fully-saturated.svg" alt="sample">Headline with leading image thumbnail</mdw-list-item>
                        <mdw-list-item src="https://upload.wikimedia.org/wikipedia/commons/3/31/Rainbow-gradient-fully-saturated.svg" alt="sample" video checkbox="trailing" aria-selected="false">Headline with leading video and checkbox</mdw-list-item>
                        <mdw-list-item checkbox aria-selected="false">Headline with leading checkbox</mdw-list-item>
                        <mdw-list-item checkbox="trailing" selected aria-selected="true">Headline with trailing checkbox (selected)</mdw-list-item>
                        <mdw-list-item trailing="100+">Headline with trailing text</mdw-list-item>
                        <mdw-list-item trailing-icon="chevron_right">Headline with trailing icon</mdw-list-item>
                        <mdw-list-item>
                            <span slot="headline">Headline (slot)</span>
                        </mdw-list-item>
                        <mdw-list-item>
                            <mdw-text slot="headline" ink="primary">Customized headline (slot)</mdw-text>
                        </mdw-list-item>
                        <mdw-list-item>
                            <img slot="leading" src="https://upload.wikimedia.org/wikipedia/commons/3/31/Rainbow-gradient-fully-saturated.svg" height="56" width="56" alt>
                            Headline with leading (slot)</mdw-list-item>
                    </mdw-list>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Two-line lists (Explicit)</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-list color="surface" style="width:100%">
                        <mdw-list-item lines="2">Headline (textContent)</mdw-list-item>
                        <mdw-list-item lines="2" supporting="With supporting text">Headline (textContent)</mdw-list-item>
                        <mdw-list-item lines="2" supporting="With leading icon" icon="person">Headline </mdw-list-item>
                        <mdw-list-item lines="2" supporting="With leading avatar" avatar="A">Headline</mdw-list-item>
                        <mdw-list-item lines="2" supporting="With leading image thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/3/31/Rainbow-gradient-fully-saturated.svg" alt="sample">Headline</mdw-list-item>
                        <mdw-list-item lines="2" supporting="With leading video and checkbox" src="https://upload.wikimedia.org/wikipedia/commons/3/31/Rainbow-gradient-fully-saturated.svg" alt="sample" video checkbox="trailing" aria-selected="false">Headline</mdw-list-item>
                        <mdw-list-item lines="2" supporting="With leading checkbox" checkbox aria-selected="false">Headline</mdw-list-item>
                        <mdw-list-item lines="2" supporting="With trailing checkbox (selected)" checkbox="trailing" selected aria-selected="true">Headline</mdw-list-item>
                        <mdw-list-item lines="2" supporting="Supporting text" trailing="100+">Headline with trailing text</mdw-list-item>
                        <mdw-list-item lines="2" supporting="Supporting text" trailing-icon="chevron_right">Headline with trailing icon</mdw-list-item>
                        <mdw-list-item>
                            <span slot="headline">Headline (slot)</span>
                            <mdw-text slot="supporting" ink="primary">Customized supporting text (slot)</mdw-text>
                        </mdw-list-item>
                        <mdw-list-item lines="2">
                            Headline
                            <mdw-text type-style="body-small" ink="primary" slot="supporting">Custom supporting slot</mdw-text>
                        </mdw-list-item>
                        <mdw-list-item lines="2">
                            Headline
                            <span slot="supporting">Oversized supporting *slot* that will wrap on small to medium sized displays</span>
                        </mdw-list-item>
                        <mdw-list-item lines="2" supporting="Oversized supporting *attribute* that clips text automatically based on available space">Headline</mdw-list-item>
                    </mdw-list>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Three-line lists (Explicit)</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-list color="surface" style="width:100%">
                        <mdw-list-item lines="3">Headline (textContent)</mdw-list-item>
                        <mdw-list-item lines="3" supporting="With supporting text">Headline (textContent)</mdw-list-item>
                        <mdw-list-item lines="3" supporting="With leading icon" icon="person">Headline </mdw-list-item>
                        <mdw-list-item lines="3" supporting="With leading avatar" avatar="A">Headline</mdw-list-item>
                        <mdw-list-item lines="3" supporting="With leading image thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/3/31/Rainbow-gradient-fully-saturated.svg" alt="sample">Headline</mdw-list-item>
                        <mdw-list-item lines="3" supporting="With leading video and checkbox" src="https://upload.wikimedia.org/wikipedia/commons/3/31/Rainbow-gradient-fully-saturated.svg" alt="sample" video checkbox="trailing" aria-selected="false">Headline</mdw-list-item>
                        <mdw-list-item lines="3" supporting="With leading checkbox" checkbox aria-selected="false">Headline</mdw-list-item>
                        <mdw-list-item lines="3" supporting="With trailing checkbox (selected)" checkbox="trailing" selected aria-selected="true">Headline</mdw-list-item>
                        <mdw-list-item lines="3" supporting="Supporting text" trailing="100+">Headline with trailing text</mdw-list-item>
                        <mdw-list-item lines="3" supporting="Supporting text" trailing-icon="chevron_right">Headline with trailing icon</mdw-list-item>
                        <mdw-list-item>
                            <span slot="headline">Headline (slot)</span>
                            <mdw-text slot="supporting" ink="primary">Customized supporting text (slot)</mdw-text>
                        </mdw-list-item>
                        <mdw-list-item lines="3">
                            Headline
                            <mdw-text type-style="body-small" ink="primary" slot="supporting">Custom supporting slot</mdw-text>
                        </mdw-list-item>
                        <mdw-list-item lines="3">
                            Headline
                            <span slot="supporting">Oversized supporting *slot* that will wrap on small to medium sized displays. When using slot, there is not clamping or maximum height placed on this element.</span>
                        </mdw-list-item>
                        <mdw-list-item lines="3" supporting="Oversized supporting *attribute* that clips text automatically based on available space. Instead of being clamped to only 1 line, this is now clamped to 2">Headline</mdw-list-item>
                    </mdw-list>
                </mdw-layout>
            </demo-section>
            <demo-section>
                <h2 slot="heading">Dynamic line count</h2>
                <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                    <mdw-list color="surface" style="width:100%">
                        <mdw-list-item>Headline only</mdw-list-item>
                        <mdw-list-item supporting="With supporting text">Headline</mdw-list-item>
                        <mdw-list-item supporting="With leading video and checkbox. Despite this being oversized, it will still clamp to two lines." src="https://upload.wikimedia.org/wikipedia/commons/3/31/Rainbow-gradient-fully-saturated.svg" alt="sample" video checkbox="trailing" aria-selected="false">Headline</mdw-list-item>
                        <mdw-list-item>
                            Headline
                            <span slot="supporting">Oversized supporting *slot* that will wrap on small to medium sized displays. When using slot, there is not clamping or maximum height placed on this element.</span>
                        </mdw-list-item>
                        <mdw-list-item checkbox="trailing" supporting="Oversized supporting *attribute* that clips text automatically based on available space. Instead of being clamped to only 1 line, this is now clamped to 2" aria-selected="false">Headline</mdw-list-item>
                    </mdw-list>
                </mdw-layout>
            </demo-section>
        </demo-section>
        <demo-section>
            <h2 slot="heading">Interactive (HTMLAnchorElement)</h2>
            <mdw-layout gap="12px" wrap style="--mdw-layout__gap:12px;">
                <mdw-list color="surface" style="width:100%">
                    <mdw-list-item href="#" supporting="Focusable and tabbable">href=#</mdw-list-item>
                    <mdw-list-item href="#" lines="2" supporting="Supporting text" trailing-icon="chevron_right">Headline with trailing icon</mdw-list-item>
                    <mdw-list-item supporting="Not focusable">No link</mdw-list-item>
                    <mdw-list-item supporting="Same as element" href="./list.html">Real link</mdw-list-item>
                </mdw-list>
            </mdw-layout>
        </demo-section>
        <demo-dummy-text></demo-dummy-text>
        `;
    }
}