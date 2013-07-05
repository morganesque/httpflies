/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if (!window.Typekit) window.Typekit = {};
window.Typekit.config = {
    "c": [".tk-omnes-pro,body", "\"omnes-pro\",sans-serif"],
    "f": "//use.typekit.net/c/e97f7d/omnes-pro:i2:n2:n3:n4.X34:M:2,X33:M:2,X35:M:2,X37:M:2/{format}{/extras*}?3bb2a6e53c9684ffdc9a9bf01f5b2a62dc1020e61a7e41334f5590cfa9c2509da76161a845828e1e0ada2d10705ff90cb05cf523eefc9a3a9e8b61009a765973c6c49e727f66748ce95bbd1de7f966e83be2a113c726f182d9b400a823d554517220a569dfc168ab30e47da4583352ecbbeed5edca779f6889b89c46a8fa6ff3fe851530e4037f4c5f28de2579156b0f1f73166879d06d499af607dd1aa6302ecb306744ed",
    "fn": ["omnes-pro", ["i2", "n2", "n3", "n4"]],
    "k": "//use.typekit.net/{id}.js",
    "p": "//p.typekit.net/p.gif?s=1&k=muk6swr&ht=tk&h={host}&f=7986.7992.7994.7995&a=280187&_={_}",
    "w": "muk6swr"
};
/*{"k":"1.5.7","created":"2013-06-24T11:57:41Z"}*/
;
(function (window, document, undefined) {
    var g = void 0,
        h = !0,
        l = null,
        m = !1;

    function n(a) {
        return function () {
            return this[a]
        }
    }
    var aa = this;

    function ba(a, c) {
        var b = a.split("."),
            e = aa;
        !(b[0] in e) && e.execScript && e.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());)!b.length && c !== g ? e[d] = c : e = e[d] ? e[d] : e[d] = {}
    }

    function ca(a, c, b) {
        return a.call.apply(a.bind, arguments)
    }

    function da(a, c, b) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function () {
                var b = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(b, e);
                return a.apply(c, b)
            }
        }
        return function () {
            return a.apply(c, arguments)
        }
    }

    function p(a, c, b) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
        return p.apply(l, arguments)
    }
    var ea = Date.now || function () {
            return +new Date
        };

    function q(a, c) {
        this.za = a;
        this.fa = c || a;
        this.t = this.fa.document;
        this.ha = g
    }
    q.prototype.createElement = function (a, c, b) {
        a = this.t.createElement(a);
        if (c)
            for (var e in c)
                if (c.hasOwnProperty(e))
                    if ("style" == e) {
                        var d = a,
                            f = c[e];
                        fa(this) ? d.setAttribute("style", f) : d.style.cssText = f
                    } else a.setAttribute(e, c[e]);
        b && a.appendChild(this.t.createTextNode(b));
        return a
    };

    function r(a, c, b) {
        a = a.t.getElementsByTagName(c)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(b, a.lastChild)
    }

    function ga(a, c) {
        function b() {
            a.t.body ? c() : setTimeout(b, 0)
        }
        b()
    }

    function t(a, c) {
        for (var b = a.className.split(/\s+/), e = 0, d = b.length; e < d; e++)
            if (b[e] == c) return;
        b.push(c);
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function u(a, c) {
        for (var b = a.className.split(/\s+/), e = [], d = 0, f = b.length; d < f; d++) b[d] != c && e.push(b[d]);
        a.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function ha(a, c) {
        for (var b = a.className.split(/\s+/), e = 0, d = b.length; e < d; e++)
            if (b[e] == c) return h;
        return m
    }

    function fa(a) {

        if (a.ha === g) {
            var c = a.t.createElement("p");

            var tom = a.t.createElement('a');
            tom.setAttribute('style','top:1px;');
            tom.appendChild(a.t.createTextNode('w'));
            c.appendChild(tom);

            // c.innerHTML = '<a style="top:1px;">w</a>';

            a.ha = /top/.test(c.getElementsByTagName("a")[0].getAttribute("style"))
        }
        return a.ha
    }

    function v(a) {
        var c = a.fa.location.protocol;
        "about:" == c && (c = a.za.location.protocol);
        return "https:" === ("https:" == c ? "https:" : "http:")
    }
    q.prototype.da = function () {
        return this.fa.location.hostname || this.za.location.hostname
    };

    function ia(a, c, b) {
        var e = a.t.getElementsByTagName("head")[0];
        if (e) {
            var d = a.t.createElement("script");
            d.src = c;
            var f = m;
            d.onload = d.onreadystatechange = function () {
                if (!f && (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState)) f = h, b && b(), d.onload = d.onreadystatechange = l, "HEAD" == d.parentNode.tagName && e.removeChild(d)
            };
            e.appendChild(d)
        }
    }

    function w(a, c, b) {
        this.hb = a;
        this.ka = c;
        this.gb = b
    }
    ba("internalWebfont.BrowserInfo", w);
    w.prototype.Ra = n("hb");
    w.prototype.hasWebFontSupport = w.prototype.Ra;
    w.prototype.Sa = n("ka");
    w.prototype.hasWebKitFallbackBug = w.prototype.Sa;
    w.prototype.Ta = n("gb");
    w.prototype.hasWebKitMetricsBug = w.prototype.Ta;

    function x(a, c, b, e) {
        this.g = a != l ? a : l;
        this.m = c != l ? c : l;
        this.G = b != l ? b : l;
        this.j = e != l ? e : l
    }
    var ja = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;

    function y(a) {
        return a.g !== l
    }

    function z(a, c) {
        return a.g > c.g || a.g === c.g && a.m > c.m || a.g === c.g && a.m === c.m && a.G > c.G ? 1 : a.g < c.g || a.g === c.g && a.m < c.m || a.g === c.g && a.m === c.m && a.G < c.G ? -1 : 0
    }

    function A(a, c) {
        return -1 === z(a, c)
    }

    function B(a, c) {
        return 0 === z(a, c) || 1 === z(a, c)
    }

    function C(a, c) {
        return 0 === z(a, c)
    }
    x.prototype.toString = function () {
        return [this.g, this.m || "", this.G || "", this.j || ""].join("")
    };

    function D(a) {
        a = ja.exec(a);
        var c = l,
            b = l,
            e = l,
            d = l;
        a && (a[1] !== l && a[1] && (c = parseInt(a[1], 10)), a[2] !== l && a[2] && (b = parseInt(a[2], 10)), a[3] !== l && a[3] && (e = parseInt(a[3], 10)), a[4] !== l && a[4] && (d = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4]));
        return new x(c, b, e, d)
    }

    function E(a, c, b, e, d, f, j, k, s, O, G) {
        this.F = a;
        this.fb = c;
        this.eb = b;
        this.ta = e;
        this.Ha = d;
        this.Ga = f;
        this.ga = j;
        this.$a = k;
        this.Za = s;
        this.ra = O;
        this.v = G
    }
    ba("internalWebfont.UserAgent", E);
    E.prototype.getName = n("F");
    E.prototype.getName = E.prototype.getName;
    E.prototype.Qa = n("eb");
    E.prototype.getVersion = E.prototype.Qa;
    E.prototype.Ma = n("ta");
    E.prototype.getEngine = E.prototype.Ma;
    E.prototype.Na = n("Ga");
    E.prototype.getEngineVersion = E.prototype.Na;
    E.prototype.Oa = n("ga");
    E.prototype.getPlatform = E.prototype.Oa;
    E.prototype.Pa = n("Za");
    E.prototype.getPlatformVersion = E.prototype.Pa;
    E.prototype.La = n("ra");
    E.prototype.getDocumentMode = E.prototype.La;
    E.prototype.Ka = n("v");
    E.prototype.getBrowserInfo = E.prototype.Ka;

    function ma(a, c) {
        this.e = a;
        this.R = c
    }
    var na = new E("Unknown", new x, "Unknown", "Unknown", new x, "Unknown", "Unknown", new x, "Unknown", g, new w(m, m, m));
    ma.prototype.parse = function () {
        var a;
        if (-1 != this.e.indexOf("MSIE")) {
            a = H(this);
            var c = J(this),
                b = D(c),
                e = K(this.e, /MSIE ([\d\w\.]+)/, 1),
                d = D(e);
            a = new E("MSIE", d, e, "MSIE", d, e, a, b, c, L(this.R), new w("Windows" == a && 6 <= d.g || "Windows Phone" == a && 8 <= b.g, m, m))
        } else if (-1 != this.e.indexOf("Opera")) a: {
            a = "Unknown";
            var c = K(this.e, /Presto\/([\d\w\.]+)/, 1),
                b = D(c),
                e = J(this),
                d = D(e),
                f = L(this.R);
            y(b) ? a = "Presto" : (-1 != this.e.indexOf("Gecko") && (a = "Gecko"), c = K(this.e, /rv:([^\)]+)/, 1), b = D(c));
            if (-1 != this.e.indexOf("Opera Mini/")) {
                var j =
                    K(this.e, /Opera Mini\/([\d\.]+)/, 1),
                    k = D(j);
                a = new E("OperaMini", k, j, a, b, c, H(this), d, e, f, new w(m, m, m))
            } else {
                if (-1 != this.e.indexOf("Version/") && (j = K(this.e, /Version\/([\d\.]+)/, 1), k = D(j), y(k))) {
                    a = new E("Opera", k, j, a, b, c, H(this), d, e, f, new w(10 <= k.g, m, m));
                    break a
                }
                j = K(this.e, /Opera[\/ ]([\d\.]+)/, 1);
                k = D(j);
                a = y(k) ? new E("Opera", k, j, a, b, c, H(this), d, e, f, new w(10 <= k.g, m, m)) : new E("Opera", new x, "Unknown", a, b, c, H(this), d, e, f, new w(m, m, m))
            }
        } else /OPR\/[\d.]+/.test(this.e) ? a = oa(this) : /AppleWeb(K|k)it/.test(this.e) ?
            a = oa(this) : -1 != this.e.indexOf("Gecko") ? (a = "Unknown", c = new x, b = "Unknown", e = J(this), d = D(e), f = m, -1 != this.e.indexOf("Firefox") ? (a = "Firefox", b = K(this.e, /Firefox\/([\d\w\.]+)/, 1), c = D(b), f = 3 <= c.g && 5 <= c.m) : -1 != this.e.indexOf("Mozilla") && (a = "Mozilla"), j = K(this.e, /rv:([^\)]+)/, 1), k = D(j), f || (f = 1 < k.g || 1 == k.g && 9 < k.m || 1 == k.g && 9 == k.m && 2 <= k.G || j.match(/1\.9\.1b[123]/) != l || j.match(/1\.9\.1\.[\d\.]+/) != l), a = new E(a, c, b, "Gecko", k, j, H(this), d, e, L(this.R), new w(f, m, m))) : a = na;
        return a
    };

    function H(a) {
        var c = K(a.e, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != c) return /BB\d{2}/.test(c) && (c = "BlackBerry"), c;
        a = K(a.e, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
        return "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"), a) : "Unknown"
    }

    function J(a) {
        var c = K(a.e, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (c || (c = K(a.e, /Windows Phone( OS)? ([^;)]+)/, 2)) || (c = K(a.e, /(iPhone )?OS ([\d_]+)/, 2))) return c;
        if (c = K(a.e, /(?:Linux|CrOS) ([^;)]+)/, 1))
            for (var c = c.split(/\s/), b = 0; b < c.length; b += 1)
                if (/^[\d\._]+$/.test(c[b])) return c[b];
        return (a = K(a.e, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }

    function oa(a) {
        var c = H(a),
            b = J(a),
            e = D(b),
            d = K(a.e, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
            f = D(d),
            j = "Unknown",
            k = new x,
            s = "Unknown",
            O = m;
        /OPR\/[\d.]+/.test(a.e) ? j = "Opera" : -1 != a.e.indexOf("Chrome") || -1 != a.e.indexOf("CrMo") || -1 != a.e.indexOf("CriOS") ? j = "Chrome" : /Silk\/\d/.test(a.e) ? j = "Silk" : "BlackBerry" == c || "Android" == c ? j = "BuiltinBrowser" : -1 != a.e.indexOf("PhantomJS") ? j = "PhantomJS" : -1 != a.e.indexOf("Safari") ? j = "Safari" : -1 != a.e.indexOf("AdobeAIR") && (j = "AdobeAIR");
        "BuiltinBrowser" == j ? s = "Unknown" : "Silk" == j ? s = K(a.e,
            /Silk\/([\d\._]+)/, 1) : "Chrome" == j ? s = K(a.e, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != a.e.indexOf("Version/") ? s = K(a.e, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == j ? s = K(a.e, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == j ? s = K(a.e, /OPR\/([\d.]+)/, 1) : "PhantomJS" == j && (s = K(a.e, /PhantomJS\/([\d.]+)/, 1));
        k = D(s);
        O = "AdobeAIR" == j ? 2 < k.g || 2 == k.g && 5 <= k.m : "BlackBerry" == c ? 10 <= e.g : "Android" == c ? 2 < e.g || 2 == e.g && 1 < e.m : 526 <= f.g || 525 <= f.g && 13 <= f.m;
        return new E(j, k, s, "AppleWebKit", f, d, c, e, b, L(a.R), new w(O, 536 > f.g || 536 == f.g && 11 > f.m, "iPhone" ==
            c || "iPad" == c || "iPod" == c || "Macintosh" == c))
    }

    function K(a, c, b) {
        return (a = a.match(c)) && a[b] ? a[b] : ""
    }

    function L(a) {
        if (a.documentMode) return a.documentMode
    }

    function pa(a) {
        this.Xa = a || "-"
    }
    pa.prototype.j = function (a) {
        for (var c = [], b = 0; b < arguments.length; b++) c.push(arguments[b].replace(/[\W_]+/g, "").toLowerCase());
        return c.join(this.Xa)
    };

    function qa(a, c, b) {
        this.h = a;
        this.l = c;
        this.Y = b;
        this.q = "wf";
        this.n = new pa("-")
    }

    function ra(a) {
        u(a.l, a.n.j(a.q, "loading"));
        ha(a.l, a.n.j(a.q, "active")) || t(a.l, a.n.j(a.q, "inactive"));
        M(a, "inactive")
    }

    function M(a, c, b) {
        if (a.Y[c])
            if (b) a.Y[c](b.getName(), N(b));
            else a.Y[c]()
    }

    function P(a, c) {
        this.F = a;
        this.la = 4;
        this.T = "n";
        var b = (c || "n4").match(/^([nio])([1-9])$/i);
        b && (this.T = b[1], this.la = parseInt(b[2], 10))
    }
    P.prototype.getName = n("F");

    function N(a) {
        return a.T + a.la
    }

    function sa(a, c) {
        this.h = a;
        this.M = c;
        this.A = this.h.createElement("span", {
            "aria-hidden": "true"
        }, this.M)
    }

    function ta(a, c) {
        var b = a.A,
            e;
        e = [];
        for (var d = c.F.split(/,\s*/), f = 0; f < d.length; f++) {
            var j = d[f].replace(/['"]/g, ""); - 1 == j.indexOf(" ") ? e.push(j) : e.push("'" + j + "'")
        }
        e = e.join(",");
        d = "normal";
        f = c.la + "00";
        "o" === c.T ? d = "oblique" : "i" === c.T && (d = "italic");
        e = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + e + ";" + ("font-style:" + d + ";font-weight:" + f + ";");
        fa(a.h) ? b.setAttribute("style", e) : b.style.cssText =
            e
    }

    function ua(a) {
        r(a.h, "body", a.A)
    }
    sa.prototype.remove = function () {
        var a = this.A;
        a.parentNode && a.parentNode.removeChild(a)
    };

    function va(a, c, b, e, d, f, j, k) {
        this.ma = a;
        this.Wa = c;
        this.h = b;
        this.z = e;
        this.M = k || "BESbswy";
        this.v = d;
        this.P = {};
        this.ia = f || 5E3;
        this.Aa = j || l;
        this.L = this.K = l;
        a = new sa(this.h, this.M);
        ua(a);
        for (var s in Q) Q.hasOwnProperty(s) && (ta(a, new P(Q[s], N(this.z))), this.P[Q[s]] = a.A.offsetWidth);
        a.remove()
    }
    var Q = {
        kb: "serif",
        jb: "sans-serif",
        ib: "monospace"
    };
    va.prototype.start = function () {
        this.K = new sa(this.h, this.M);
        ua(this.K);
        this.L = new sa(this.h, this.M);
        ua(this.L);
        this.bb = ea();
        ta(this.K, new P(this.z.getName() + ",serif", N(this.z)));
        ta(this.L, new P(this.z.getName() + ",sans-serif", N(this.z)));
        wa(this)
    };

    function xa(a, c, b) {
        for (var e in Q)
            if (Q.hasOwnProperty(e) && c === a.P[Q[e]] && b === a.P[Q[e]]) return h;
        return m
    }

    function wa(a) {
        var c = a.K.A.offsetWidth,
            b = a.L.A.offsetWidth;
        c === a.P.serif && b === a.P["sans-serif"] || a.v.ka && xa(a, c, b) ? ea() - a.bb >= a.ia ? a.v.ka && xa(a, c, b) && (a.Aa === l || a.Aa.hasOwnProperty(a.z.getName())) ? ya(a, a.ma) : ya(a, a.Wa) : setTimeout(p(function () {
            wa(this)
        }, a), 25) : ya(a, a.ma)
    }

    function ya(a, c) {
        a.K.remove();
        a.L.remove();
        c(a.z)
    }

    function za(a, c, b, e) {
        this.h = c;
        this.B = b;
        this.aa = 0;
        this.Da = this.xa = m;
        this.ia = e;
        this.v = a.v
    }
    za.prototype.ja = function (a, c, b, e) {
        if (0 === a.length && e) ra(this.B);
        else {
            this.aa += a.length;
            e && (this.xa = e);
            for (e = 0; e < a.length; e++) {
                var d = a[e],
                    f = c[d.getName()],
                    j = this.B,
                    k = d;
                t(j.l, j.n.j(j.q, k.getName(), N(k).toString(), "loading"));
                M(j, "fontloading", k);
                (new va(p(this.Ia, this), p(this.Ja, this), this.h, d, this.v, this.ia, b, f)).start()
            }
        }
    };
    za.prototype.Ia = function (a) {
        var c = this.B;
        u(c.l, c.n.j(c.q, a.getName(), N(a).toString(), "loading"));
        u(c.l, c.n.j(c.q, a.getName(), N(a).toString(), "inactive"));
        t(c.l, c.n.j(c.q, a.getName(), N(a).toString(), "active"));
        M(c, "fontactive", a);
        this.Da = h;
        Aa(this)
    };
    za.prototype.Ja = function (a) {
        var c = this.B;
        u(c.l, c.n.j(c.q, a.getName(), N(a).toString(), "loading"));
        ha(c.l, c.n.j(c.q, a.getName(), N(a).toString(), "active")) || t(c.l, c.n.j(c.q, a.getName(), N(a).toString(), "inactive"));
        M(c, "fontinactive", a);
        Aa(this)
    };

    function Aa(a) {
        0 == --a.aa && a.xa && (a.Da ? (a = a.B, u(a.l, a.n.j(a.q, "loading")), u(a.l, a.n.j(a.q, "inactive")), t(a.l, a.n.j(a.q, "active")), M(a, "active")) : ra(a.B))
    }

    function Ba() {
        var a = [{
            name: "font-family",
            value: R.c[i + 1]
        }];
        this.ab = [R.c[i]];
        this.qa = a
    }

    function Ca(a) {
        for (var c = a.ab.join(","), b = [], e = 0; e < a.qa.length; e++) {
            var d = a.qa[e];
            b.push(d.name + ":" + d.value + ";")
        }
        return c + "{" + b.join("") + "}"
    }

    function Da(a) {
        this.h = a
    }
    Da.prototype.toString = function () {
        return encodeURIComponent(this.h.da ? this.h.da() : document.location.hostname)
    };

    function Ea(a, c) {
        this.u = a;
        this.o = c
    }
    Ea.prototype.toString = function () {
        for (var a = [], c = 0; c < this.o.length; c++)
            for (var b = this.o[c], e = b.C(), b = b.C(this.u), d = 0; d < e.length; d++) {
                var f;
                a: {
                    for (f = 0; f < b.length; f++)
                        if (e[d] === b[f]) {
                            f = h;
                            break a
                        }
                    f = m
                }
                a.push(f ? 1 : 0)
            }
        a = a.join("");
        a = a.replace(/^0+/, "");
        c = [];
        for (e = a.length; 0 < e; e -= 4) b = a.slice(0 > e - 4 ? 0 : e - 4, e), c.unshift(parseInt(b, 2).toString(16));
        return c.join("")
    };

    function Fa(a, c, b) {
        this.h = a;
        this.u = c;
        this.o = b
    }

    function T(a) {
        this.cb = a
    }
    T.prototype.j = function (a, c) {
        var b = c || {}, e = this.cb.replace(/\{\/?([^*}]*)(\*?)\}/g, function (a, c, e) {
                return e && b[c] ? "/" + b[c].join("/") : b[c] || ""
            });
        e.match(/^\/\//) && (e = (a ? "https:" : "http:") + e);
        return e.replace(/\/*\?*($|\?)/, "$1")
    };

    function Ga(a, c, b, e) {
        this.J = a;
        this.S = c;
        this.Ua = b;
        this.lb = e;
        this.va = {};
        this.ua = {}
    }
    Ga.prototype.C = function (a) {
        return a ? (this.va[a.U] || this.S).slice(0) : this.S.slice(0)
    };
    Ga.prototype.ja = function (a, c, b) {
        var e = [],
            d = {};
        Ha(this, c, e, d);
        a(e, d, b)
    };

    function Ha(a, c, b, e) {
        b.push(a.J);
        e[a.J] = a.C(c);
        a = a.ua[c.U] || [];
        for (c = 0; c < a.length; c++) {
            for (var d = a[c], f = d.J, j = m, k = 0; k < b.length; k++) b[k] == f && (j = h);
            j || (b.push(f), e[f] = d.C())
        }
    }

    function Ia(a, c) {
        this.J = a;
        this.S = c
    }
    Ia.prototype.C = n("S");

    function Ja() {
        this.oa = this.Fa = this.r = this.N = this.O = h
    }

    function U(a, c, b) {
        this.Ua = a;
        this.U = c;
        this.wa = b
    }

    function V(a) {
        La.X.push(a)
    }

    function W(a) {
        this.h = a;
        this.pa = this.u = this.e = this.W = l;
        this.o = [];
        this.Q = [];
        this.Ea = this.ba = this.Z = this.$ = l
    }

    function Ma(a, c) {
        a.e = c;
        if (a.W) {
            var b;
            a: {
                b = a.W;
                for (var e = a.e, d = a.pa, f = 0; f < b.X.length; f++) {
                    var j = b.X[f],
                        k = d;
                    k || (k = new Ja);
                    if (j.wa && j.wa(e.getName(), e.fb, e.ta, e.Ha, e.ga, e.$a, e.ra, k)) {
                        b = j;
                        break a
                    }
                }
                b = l
            }
            a.u = b
        }
    }
    W.prototype.supportsConfiguredBrowser = function () {
        return !!this.u
    };
    W.prototype.init = function () {
        if (0 < this.Q.length) {
            for (var a = [], c = 0; c < this.Q.length; c++) a.push(Ca(this.Q[c]));
            var c = this.h,
                a = a.join(""),
                b = this.h.t.createElement("style");
            b.setAttribute("type", "text/css");
            b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
            r(c, "head", b)
        }
    };
    W.prototype.load = function (a, c) {
        var b = this.u.U;
        if (this.ba) {
            var e;
            e = this.ba;
            var d = e.H[b];
            e = d ? Na(e, d) : l;
            for (d = 0; d < this.o.length; d++) {
                for (var f = this.o[d], j = this.u, k = e, s = [], O = f.J.split(",")[0].replace(/"|'/g, ""), G = f.C(), S = s, F = g, I = [], Ka = {}, ka = 0; ka < G.length; ka++) F = G[ka], 0 < F.length && !Ka[F] && (Ka[F] = h, I.push(F));
                G = I;
                k = k.Ca ? k.Ca(O, G, S) : G;
                j = j.U;
                f.va[j] = k;
                f.ua[j] = s
            }
        }
        if (this.$) {
            e = [];
            if (this.Z) {
                e = new Fa(this.h, this.u, this.o);
                d = [];
                f = this.Z.I[b] || [];
                for (s = 0; s < f.length; s++) {
                    a: switch (f[s]) {
                    case "observeddomain":
                        j = new Da(e.h);
                        break a;
                    case "fontmask":
                        j = new Ea(e.u, e.o);
                        break a;
                    default:
                        j = l
                    }
                    j && d.push(j)
                }
                e = d
            }
            d = [];
            for (f = 0; f < e.length; f++) d.push(e[f].toString());
            b = this.$.j(v(this.h), {
                format: b,
                extras: d
            });
            r(this.h, "head", this.h.createElement("link", {
                rel: "stylesheet",
                href: b
            }))
        }
        if (a) {
            var la = this,
                gb = this.u;
            ga(this.h, function () {
                for (var b = 0; b < la.o.length; b++) la.o[b].ja(a, gb, c && b == la.o.length - 1)
            })
        }
    };
    W.prototype.collectFontFamilies = function (a, c) {
        for (var b = 0; b < this.o.length; b++) Ha(this.o[b], this.u, a, c)
    };
    W.prototype.performOptionalActions = function () {
        if (this.ea) {
            var a = this,
                c = this.e,
                b = this.h;
            ga(this.h, function () {
                var e = a.ea;
                if (e.Ba) {
                    var d = window.__adobewebfontsappname__,
                        d = d ? d.toString().substr(0, 20) : "",
                        e = e.Ba.j(v(b), {
                            host: encodeURIComponent(b.da()),
                            app: encodeURIComponent(d),
                            _: (+new Date).toString()
                        }),
                        f = new Image(1, 1);
                    f.src = e;
                    f.onload = function () {
                        f.onload = l
                    }
                }
                e = a.ea;
                e.na && (e = e.na.j(c, b), r(b, "body", e))
            })
        }
    };

    function Oa(a, c, b, e) {
        this.Ya = a;
        this.h = c;
        this.e = b;
        this.l = e;
        this.s = []
    }
    Oa.prototype.V = function (a) {
        this.s.push(a)
    };
    Oa.prototype.load = function (a, c) {
        var b = a,
            e = c || {};
        if ("string" == typeof b) b = [b];
        else if (!b || !b.length) e = b || {}, b = [];
        if (b.length)
            for (var d = this, f = b.length, j = 0; j < b.length; j++) {
                var k = this.Ya.j(v(this.h), {
                    id: encodeURIComponent(b[j])
                });
                ia(this.h, k, function () {
                    0 == --f && Pa(d, e)
                })
            } else Pa(this, e)
    };

    function Pa(a, c) {
        if (0 != a.s.length) {
            for (var b = new qa(a.h, a.l, c), e = m, d = 0; d < a.s.length; d++) a.s[d].init(), e = e || a.s[d].supportsConfiguredBrowser();
            if (e) {
                t(b.l, b.n.j(b.q, "loading"));
                M(b, "loading");
                for (var f = new za(a.e, a.h, b), b = function (a, b, c) {
                        for (var d = [], e = 0; e < a.length; e += 1) {
                            var S = a[e];
                            if (b[S])
                                for (var F = b[S], I = 0; I < F.length; I += 1) d.push(new P(S, F[I]));
                            else d.push(new P(S))
                        }
                        f.ja(d, {}, l, c)
                    }, e = 0; e < a.s.length; e++) d = a.s[e], d.supportsConfiguredBrowser() && (d.load(b, e == a.s.length - 1), d.performOptionalActions(window))
            } else ra(b);
            a.s = []
        }
    }

    function Qa(a) {
        this.D = a;
        this.s = []
    }
    Qa.prototype.V = function (a) {
        this.s.push(a)
    };
    Qa.prototype.load = function () {
        var a = this.D.__webfonttypekitmodule__;
        if (a)
            for (var c = 0; c < this.s.length; c++) {
                var b = this.s[c],
                    e = a[b.Ea];
                e && e(function (a, c, e) {
                    a = [];
                    c = {};
                    var k = (new ma(navigator.userAgent, document)).parse();
                    Ma(b, k);
                    b.supportsConfiguredBrowser() && (b.init(), b.load(l), b.collectFontFamilies(a, c), b.performOptionalActions(window));
                    e(b.supportsConfiguredBrowser(), a, c)
                })
            }
    };

    function Ra(a, c) {
        this.F = a;
        this.Ca = c
    }
    Ra.prototype.getName = n("F");

    function Sa(a) {
        var c = X;
        Na(c, a.getName()) || c.ca.push(a)
    }

    function Na(a, c) {
        for (var b = 0; b < a.ca.length; b++) {
            var e = a.ca[b];
            if (c === e.getName()) return e
        }
        return l
    }

    function Ta(a, c, b, e) {
        this.D = a;
        this.t = c;
        this.Va = b;
        this.ya = e
    }
    Ta.prototype.j = function (a, c) {
        var b = this.t.createElement("img");
        b.setAttribute("width", 62);
        b.setAttribute("height", 25);
        b.setAttribute("src", this.Va.j(v(c)));
        b.setAttribute("class", "typekit-badge");
        b.setAttribute("alt", "Fonts by Typekit");
        b.setAttribute("title", "Information about the fonts used on this site");
        b.style.position = "fixed";
        b.style.zIndex = 2E9;
        b.style.right = 0;
        b.style.bottom = 0;
        b.style.cursor = "pointer";
        b.style.border = 0;
        "Opera" != a.getName() && (b.style.content = "none");
        b.style.display = "inline";
        b.style["float"] =
            "none";
        b.style.height = "25px";
        b.style.left = "auto";
        b.style.margin = 0;
        b.style.maxHeight = "25px";
        b.style.maxWidth = "62px";
        b.style.minHeight = "25px";
        b.style.minWidth = "62px";
        b.style.orphans = 2;
        b.style.outline = "none";
        b.style.overflow = "visible";
        b.style.padding = 0;
        b.style.pageBreakAfter = "auto";
        b.style.pageBreakBefore = "auto";
        b.style.pageBreakInside = "auto";
        b.style.tableLayout = "auto";
        b.style.textIndent = 0;
        b.style.top = "auto";
        b.style.unicodeBidi = "normal";
        b.style.verticalAlign = "baseline";
        b.style.visibility = "visible";
        b.style.widows =
            2;
        b.style.width = "65px";
        if (this.ya) {
            var e = this.t,
                d = this.ya;
            Ua(this, b, "click", function () {
                e.location.href = d
            })
        }
        var f = a.ga;
        if ("MSIE" == a.getName() && "Windows Phone" != f) {
            b.style.position = "absolute";
            var j = this,
                k = function () {
                    var a = Va(j, "scrollLeft", "scrollTop"),
                        c = Va(j, "clientWidth", "clientHeight");
                    b.style.bottom = "auto";
                    b.style.right = "auto";
                    b.style.top = a[1] + c[1] - 25 + "px";
                    b.style.left = a[0] + c[0] - 3 - 62 + "px"
                };
            Ua(this, this.D, "scroll", k);
            Ua(this, this.D, "resize", k)
        }
        if ("iPhone" == f || "iPod" == f || "iPad" == f || "Android" == f ||
            "Windows Phone" == f || "BlackBerry" == f) b.style.display = "none";
        return b
    };

    function Va(a, c, b) {
        var e = 0,
            d = 0;
        a = a.t;
        if (a.documentElement && (a.documentElement[c] || a.documentElement[b])) e = a.documentElement[c], d = a.documentElement[b];
        else if (a.body && (a.body[c] || a.body[b])) e = a.body[c], d = a.body[b];
        return [e, d]
    }

    function Ua(a, c, b, e) {
        if (c.attachEvent) {
            var d = a.D;
            c["e" + b + e] = e;
            c[b + e] = function () {
                c["e" + b + e](d.event)
            };
            c.attachEvent("on" + b, c[b + e])
        } else c.addEventListener(b, e, m)
    }
    var La = new function () {
            this.X = []
        };
    V(new U("air-linux-win", "a", function (a, c, b, e, d, f) {
        b = m || "Windows" == d && !y(f);
        return !b && !("Ubuntu" == d || "Linux" == d) ? m : "AdobeAIR" == a ? B(c, new x(2, 5)) : m
    }));
    V(new U("air-osx", "b", function (a, c, b, e, d, f) {
        b = m || "Macintosh" == d && B(f, new x(10, 4)) || "Macintosh" == d && !y(f);
        return !b ? m : "AdobeAIR" == a ? B(c, new x(2, 5)) : m
    }));
    V(new U("builtin-android2to3-android4plus", "a", function (a, c, b, e, d, f, j, k) {
        c = (c = m || k.r && "Android" == d && B(f, new x(2, 2)) && A(f, new x(3, 1))) || k.r && "Android" == d && B(f, new x(4, 1));
        return !c ? m : "BuiltinBrowser" == a
    }));
    V(new U("builtin-android3to4", "f", function (a, c, b, e, d, f, j, k) {
        c = m || k.r && "Android" == d && B(f, new x(3, 1)) && A(f, new x(4, 1));
        return !c ? m : "BuiltinBrowser" == a
    }));
    V(new U("builtin-bb10plus", "d", function (a, c, b, e, d, f, j, k) {
        c = m || k.oa && B(f, new x(10));
        return !c ? m : "BuiltinBrowser" == a
    }));
    V(new U("chrome4to5-linux-osx-win2003-win7plus-winvista-winxp", "a", function (a, c, b, e, d, f) {
        b = (b = (b = (b = (b = m || "Windows" == d && C(f, new x(5, 1))) || "Windows" == d && C(f, new x(5, 2))) || "Windows" == d && C(f, new x(6, 0))) || "Windows" == d && B(f, new x(6, 1))) || "Macintosh" == d && B(f, new x(10, 4)) || "Macintosh" == d && !y(f);
        return !b && !("Ubuntu" == d || "Linux" == d) ? m : "Chrome" == a && (1 === z(c, new x(4, 0, 249)) && A(c, new x(6)) || C(c, new x(4, 0, 249)) && (c.j === l || 4 <= c.j)) ? h : m
    }));
    V(new U("chrome6plus-androidany-chromeos-ipad5plus-iphone5plus-linux-osx-win2003-win7plus-winvista-winxp", "d", function (a, c, b, e, d, f, j, k) {
        a = (b = (b = (b = (b = (b = (b = (b = (b = (b = m || "Windows" == d && C(f, new x(5, 1))) || "Windows" == d && C(f, new x(5, 2))) || "Windows" == d && C(f, new x(6, 0))) || "Windows" == d && B(f, new x(6, 1))) || "Macintosh" == d && B(f, new x(10, 4)) || "Macintosh" == d && !y(f)) || ("Ubuntu" == d || "Linux" == d) || k.r && "Android" == d) || "CrOS" == d) || (k.N && "iPad" == d ? B(f, new x(5)) : m)) || (k.O && ("iPhone" == d || "iPod" == d) ? B(f, new x(5)) : m)) ? "Chrome" ==
            a ? B(c, new x(6)) : g : m;
        return a
    }));
    V(new U("chrome6plus-ipad4-iphone4", "a", function (a, c, b, e, d, f, j, k) {
        a = (b = (b = m || (k.N && "iPad" == d ? B(f, new x(4, 2)) && A(f, new x(5)) : m)) || (k.O && ("iPhone" == d || "iPod" == d) ? B(f, new x(4, 2)) && A(f, new x(5)) : m)) ? "Chrome" == a ? B(c, new x(6)) : g : m;
        return a
    }));
    V(new U("ff35-linux-win2003-win7plus-winvista-winxp", "a", function (a, c, b, e, d, f) {
        a = (a = (a = (a = m || "Windows" == d && C(f, new x(5, 1))) || "Windows" == d && C(f, new x(5, 2))) || "Windows" == d && C(f, new x(6, 0))) || "Windows" == d && B(f, new x(6, 1));
        return !a && !("Ubuntu" == d || "Linux" == d) ? m : "Gecko" == b ? C(e, new x(1, 9, 1)) && !/^b[1-3]$/.test(e.j || "") : m
    }));
    V(new U("ff35-osx", "b", function (a, c, b, e, d, f) {
        a = m || "Macintosh" == d && B(f, new x(10, 4)) || "Macintosh" == d && !y(f);
        return !a ? m : "Gecko" == b ? C(e, new x(1, 9, 1)) && !/^b[1-3]$/.test(e.j || "") : m
    }));
    V(new U("ff36plus-androidany-linux-osx-win2003-win7plus-winvista-winxp", "d", function (a, c, b, e, d, f, j, k) {
        a = (a = (a = (a = (a = (a = m || "Windows" == d && C(f, new x(5, 1))) || "Windows" == d && C(f, new x(5, 2))) || "Windows" == d && C(f, new x(6, 0))) || "Windows" == d && B(f, new x(6, 1))) || "Macintosh" == d && B(f, new x(10, 4)) || "Macintosh" == d && !y(f)) || ("Ubuntu" == d || "Linux" == d) || k.r && "Android" == d;
        return !a ? m : "Gecko" == b ? 1 === z(e, new x(1, 9, 1)) : m
    }));
    V(new U("ie6to8-win2003-win7plus-winvista-winxp", "i", function (a, c, b, e, d, f, j) {
        a = (b = (b = (b = (b = m || "Windows" == d && C(f, new x(5, 1))) || "Windows" == d && C(f, new x(5, 2))) || "Windows" == d && C(f, new x(6, 0))) || "Windows" == d && B(f, new x(6, 1))) ? "MSIE" == a ? B(c, new x(6, 0)) && (j === g || 9 > j) : g : m;
        return a
    }));
    V(new U("ie9plus-win7plus-winvista", "d", function (a, c, b, e, d, f, j) {
        a = (c = (c = m || "Windows" == d && B(f, new x(6, 1))) || "Windows" == d && C(f, new x(6, 0))) ? "MSIE" == a ? 9 <= j : g : m;
        return a
    }));
    V(new U("ieany-winphone8plus", "d", function (a, c, b, e, d, f, j, k) {
        c = m || k.Fa && "Windows Phone" == d && B(f, new x(8));
        return !c ? m : "MSIE" == a
    }));
    V(new U("opera10-linux-win2003-win7plus-winvista-winxp", "a", function (a, c, b, e, d, f) {
        b = (b = (b = (b = m || "Windows" == d && C(f, new x(5, 1))) || "Windows" == d && C(f, new x(5, 2))) || "Windows" == d && C(f, new x(6, 0))) || "Windows" == d && B(f, new x(6, 1));
        return !b && !("Ubuntu" == d || "Linux" == d) ? m : "Opera" == a ? B(c, new x(10, 54)) && A(c, new x(11, 10)) : m
    }));
    V(new U("opera10-osx", "b", function (a, c, b, e, d, f) {
        b = m || "Macintosh" == d && B(f, new x(10, 4)) || "Macintosh" == d && !y(f);
        return !b ? m : "Opera" == a ? B(c, new x(10, 54)) && A(c, new x(11, 10)) : m
    }));
    V(new U("opera11plus-androidany-linux-osx-win2003-win7plus-winvista-winxp", "d", function (a, c, b, e, d, f, j, k) {
        b = (b = (b = (b = (b = (b = m || "Windows" == d && C(f, new x(5, 1))) || "Windows" == d && C(f, new x(5, 2))) || "Windows" == d && C(f, new x(6, 0))) || "Windows" == d && B(f, new x(6, 1))) || "Macintosh" == d && B(f, new x(10, 4)) || "Macintosh" == d && !y(f)) || ("Ubuntu" == d || "Linux" == d) || k.r && "Android" == d;
        return !b ? m : "Opera" == a ? B(c, new x(11, 10)) : m
    }));
    V(new U("safari3to5-osx", "b", function (a, c, b, e, d, f) {
        c = m || "Macintosh" == d && B(f, new x(10, 4)) || "Macintosh" == d && !y(f);
        return !c ? m : "Safari" == a && "AppleWebKit" == b ? B(e, new x(525, 13)) && A(e, new x(534, 50)) : m
    }));
    V(new U("safari3to5-win2003-win7plus-winvista-winxp", "a", function (a, c, b, e, d, f) {
        c = (c = (c = (c = m || "Windows" == d && C(f, new x(5, 1))) || "Windows" == d && C(f, new x(5, 2))) || "Windows" == d && C(f, new x(6, 0))) || "Windows" == d && B(f, new x(6, 1));
        return !c ? m : "Safari" == a && "AppleWebKit" == b ? B(e, new x(525, 13)) && A(e, new x(534, 50)) : m
    }));
    V(new U("safari5plus-osx-win2003-win7plus-winvista-winxp", "d", function (a, c, b, e, d, f) {
        c = (c = (c = (c = (c = m || "Windows" == d && C(f, new x(5, 1))) || "Windows" == d && C(f, new x(5, 2))) || "Windows" == d && C(f, new x(6, 0))) || "Windows" == d && B(f, new x(6, 1))) || "Macintosh" == d && B(f, new x(10, 4)) || "Macintosh" == d && !y(f);
        return !c ? m : "Safari" == a && "AppleWebKit" == b ? B(e, new x(534, 50)) : m
    }));
    V(new U("safariany-ipad4-iphone4", "a", function (a, c, b, e, d, f, j, k) {
        c = (c = m || (k.N && "iPad" == d ? B(f, new x(4, 2)) && A(f, new x(5)) : m)) || (k.O && ("iPhone" == d || "iPod" == d) ? B(f, new x(4, 2)) && A(f, new x(5)) : m);
        return !c ? m : "Safari" == a && "AppleWebKit" == b || "Unknown" == a && "AppleWebKit" == b && ("iPhone" == d || "iPad" == d) ? h : m
    }));
    V(new U("safariany-ipad5plus-iphone5plus", "d", function (a, c, b, e, d, f, j, k) {
        c = (c = m || (k.N && "iPad" == d ? B(f, new x(5)) : m)) || (k.O && ("iPhone" == d || "iPod" == d) ? B(f, new x(5)) : m);
        return !c ? m : "Safari" == a && "AppleWebKit" == b || "Unknown" == a && "AppleWebKit" == b && ("iPhone" == d || "iPad" == d) ? h : m
    }));
    V(new U("silk1to2-android2to3-osx", "a", function (a, c, b, e, d, f, j, k) {
        b = (b = m || k.r && "Android" == d && B(f, new x(2, 2)) && A(f, new x(3, 1))) || "Macintosh" == d && B(f, new x(10, 4)) || "Macintosh" == d && !y(f);
        return !b ? m : k.r && "Silk" == a ? A(c, new x(2)) : m
    }));
    V(new U("silk2plus-android3to4-linux", "f", function (a, c, b, e, d, f, j, k) {
        b = m || k.r && "Android" == d && B(f, new x(3, 1)) && A(f, new x(4, 1));
        return !b && !("Ubuntu" == d || "Linux" == d) ? m : k.r && "Silk" == a ? B(c, new x(2)) : m
    }));
    V(new U("silk2plus-android4plus", "a", function (a, c, b, e, d, f, j, k) {
        b = m || k.r && "Android" == d && B(f, new x(4, 1));
        return !b ? m : k.r && "Silk" == a ? B(c, new x(2)) : m
    }));
    var X = new function () {
            this.ca = [];
            this.H = {}
        };
    Sa(new Ra("AllFonts", function (a, c) {
        return c
    }));
    Sa(new Ra("DefaultFourFontsWithSingleFvdFamilies", function (a, c, b) {
        for (var e = 0; e < c.length; e++) {
            var d = c[e],
                f = a.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + d;
            b.push(new Ia(f, [d]))
        }
        a = {};
        for (d = 0; d < c.length; d++) b = c[d], e = b.charAt(1), (a[e] || (a[e] = [])).push(b);
        b = [
            [4, 3, 2, 1, 5, 6, 7, 8, 9],
            [7, 8, 9, 6, 5, 4, 3, 2, 1]
        ];
        e = [];
        for (d = 0; d < b.length; d++)
            for (var f = b[d], j = 0; j < f.length; j++) {
                var k = f[j];
                if (a[k]) {
                    e = e.concat(a[k]);
                    break
                }
            }
        b = e;
        e = {};
        a = [];
        for (d = 0; d < b.length; d++) f = b[d], e[f] || (e[f] = h, a.push(f));
        b = [];
        for (e = 0; e < c.length; e++) {
            d = c[e];
            for (f = 0; f < a.length; f++) j = a[f], j == d && b.push(j)
        }
        return b
    }));
    X.H.a = "AllFonts";
    X.H.b = "AllFonts";
    X.H.d = "AllFonts";
    X.H.f = "AllFonts";
    X.H.i = "DefaultFourFontsWithSingleFvdFamilies";
    var Y = new function () {
            this.I = {}
        };
    Y.I.a = [];
    Y.I.b = [];
    Y.I.d = [];
    Y.I.f = ["observeddomain"];
    Y.I.i = ["observeddomain", "fontmask"];
    var Wa = (new ma(navigator.userAgent, document)).parse();
    window.Typekit || (window.Typekit = {});
    if (!window.Typekit.load) {
        var Xa = window.Typekit.config || {}, Ya = l;
        Xa.k && (Ya = new T(Xa.k));
        var Za = new Oa(Ya, new q(window), Wa, document.documentElement),
            $a = new Qa(window);
        window.Typekit.load = function () {
            Za.load.apply(Za, arguments)
        };
        window.Typekit.addKit = function () {
            Za.V.apply(Za, arguments)
        }
    }
    var ab, bb = l,
        cb = l,
        db = l,
        eb, Z, $, R = window.Typekit.config || {};
    R.b && (bb = new T(R.b), cb = new Ta(window, document, bb, R.bu));
    R.p && (db = new T(R.p));
    eb = new function () {
        var a = db;
        this.na = cb;
        this.Ba = a
    };
    $ = new W(new q(window));
    $.ea = eb;
    Z = new Ja;
    Z.O = !R.si;
    Z.N = !R.st;
    Z.r = !R.sa;
    Z.Fa = !R.sw;
    Z.oa = !R.sb;
    $.pa = Z;
    R.w && ($.Ea = R.w);
    R.f && (ab = new T(R.f), $.$ = ab);
    var i;
    if (R.fn)
        for (i = 0; i < R.fn.length; i += 2) $.o.push(new Ga(R.fn[i], R.fn[i + 1]));
    if (R.c)
        for (i = 0; i < R.c.length; i += 2) $.Q.push(new Ba);
    $.Z = Y;
    $.W = La;
    $.ba = X;
    var fb;
    if (fb = $a) fb = !! $a.D.__webfonttypekitmodule__;
    fb ? ($a.V($), $a.load()) : (Ma($, Wa), window.Typekit.addKit($));
})(this, document);