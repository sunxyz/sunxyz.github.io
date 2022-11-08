if (!self.define) {
    let s, e = {};
    const l = (l, n) => (l = new URL(l + ".js", n).href, e[l] || new Promise((e => {
        if ("document" in self) {
            const s = document.createElement("script");
            s.src = l, s.onload = e, document.head.appendChild(s)
        } else s = l, importScripts(l), e()
    })).then((() => {
        let s = e[l];
        if (!s) throw new Error(`Module ${l} didn’t register its module`);
        return s
    })));
    self.define = (n, i) => {
        const r = s || ("document" in self ? document.currentScript.src : "") || location.href;
        if (e[r]) return;
        let u = {};
        const t = s => l(s, r),
            o = {
                module: {
                    uri: r
                },
                exports: u,
                require: t
            };
        e[r] = Promise.all(n.map((s => o[s] || t(s)))).then((s => (i(...s), u)))
    }
}
define(["./workbox-3ea082d2"], (function (s) {
    "use strict";
     s.clientsClaim(), s.precacheAndRoute([{
        url: "assets/About.464c79a7.css",
        revision: null
    }, {
        url: "assets/About.74b34509.js",
        revision: null
    }, {
        url: "assets/Approve.4a62d4af.js",
        revision: null
    }, {
        url: "assets/Article.b2f9968b.js",
        revision: null
    }, {
        url: "assets/Channel.bd7bb084.css",
        revision: null
    }, {
        url: "assets/Channel.eac96b04.js",
        revision: null
    }, {
        url: "assets/Home.cc5b658a.js",
        revision: null
    }, {
        url: "assets/index.1c453f98.js",
        revision: null
    }, {
        url: "assets/index.2c5f7648.css",
        revision: null
    }, {
        url: "assets/IndexView.4828e118.css",
        revision: null
    }, {
        url: "assets/IndexView.bd5e1d30.js",
        revision: null
    }, {
        url: "assets/Login.720de0d9.js",
        revision: null
    }, {
        url: "assets/Reader.2946eafe.js",
        revision: null
    }, {
        url: "assets/Reader.b7b9a056.css",
        revision: null
    }, {
        url: "assets/Rss2NewLetter.369d08ad.css",
        revision: null
    }, {
        url: "assets/Rss2NewLetter.778e9a83.js",
        revision: null
    }, {
        url: "assets/Setup.d94a2777.js",
        revision: null
    }, {
        url: "assets/Setup.ee4a95b3.css",
        revision: null
    }, {
        url: "assets/VLayout.00eb15f0.js",
        revision: null
    }, {
        url: "assets/VLayout.529df013.css",
        revision: null
    }, {
        url: "assets/VSnackbar.d45aa369.js",
        revision: null
    }, {
        url: "assets/VSnackbar.e02ab79b.css",
        revision: null
    }, {
        url: "assets/VTable.09701fd1.css",
        revision: null
    }, {
        url: "assets/VTable.beb27f31.js",
        revision: null
    }, {
        url: "assets/VTextField.71a659c6.js",
        revision: null
    }, {
        url: "assets/VTextField.e139ec62.css",
        revision: null
    }, {
        url: "assets/VWindowItem.569a4029.js",
        revision: null
    }, {
        url: "assets/VWindowItem.f3cb39f8.css",
        revision: null
    }, {
        url: "assets/webfontloader.b777d690.js",
        revision: null
    }, {
        url: "index.html",
        revision: "4f45bfc3d44392469165ebd8e394556d"
    }, {
        url: "favicon.ico",
        revision: "b433ff779a5f2c4e8adcad748bd2e704"
    }, {
        url: "logo.svg",
        revision: "45947051174b076461ec0e4380421ac3"
    }, {
        url: "manifest.webmanifest",
        revision: "d025600e9b3f166ffcdee59b8c3c2ffb"
    }], {}), s.cleanupOutdatedCaches(), s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))
}));