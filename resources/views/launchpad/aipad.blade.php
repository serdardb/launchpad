<!doctype html>
<html lang="en">
<head>
    <base href="/" />
    <meta charset="utf-8" />
    <link rel="icon" href="https://app.aipad.tech/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,shrink-to-fit=no" />
    <meta name="author" content="AiPad">
    <meta name="description" content="AiPad - The revolutionary #launchpad focused on #AI" />
    <link rel="apple-touch-icon" href="https://app.aipad.tech/images/logo.png" />
    <link rel="manifest" href="https://app.aipad.tech/manifest.json" />
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css" />
    <link rel="stylesheet" href="https://app.aipad.tech/css/style.css" />
    <title>AiPad - The revolutionary #launchpad focused on #AI</title>
    <link href="https://app.aipad.tech/static/css/2.2a1e9575.chunk.css" rel="stylesheet">
    <link href="https://app.aipad.tech/static/css/main.556319b5.chunk.css" rel="stylesheet">
</head>
<body><noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
<div class="ic-loading" id="LAVLoader"><img src="https://app.aipad.tech/images/logo.png" height="80" alt="loading..." /></div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://app.aipad.tech/js/script.js"></script>
<script>
    ! function(e) {
        function r(r) {
            for (var n, a, i = r[0], c = r[1], f = r[2], p = 0, s = []; p < i.length; p++) a = i[p], Object.prototype.hasOwnProperty.call(o, a) && o[a] && s.push(o[a][0]), o[a] = 0;
            for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
            for (l && l(r); s.length;) s.shift()();
            return u.push.apply(u, f || []), t()
        }

        function t() {
            for (var e, r = 0; r < u.length; r++) {
                for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
                    var c = t[i];
                    0 !== o[c] && (n = !1)
                }
                n && (u.splice(r--, 1), e = a(a.s = t[0]))
            }
            return e
        }
        var n = {},
            o = {
                1: 0
            },
            u = [];

        function a(r) {
            if (n[r]) return n[r].exports;
            var t = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(t.exports, t, t.exports, a), t.l = !0, t.exports
        }
        a.e = function(e) {
            var r = [],
                t = o[e];
            if (0 !== t)
                if (t) r.push(t[2]);
                else {
                    var n = new Promise((function(r, n) {
                        t = o[e] = [r, n]
                    }));
                    r.push(t[2] = n);
                    var u, i = document.createElement("script");
                    i.charset = "utf-8", i.timeout = 120, a.nc && i.setAttribute("nonce", a.nc), i.src = function(e) {
                        return a.p + "static/js/" + ({} [e] || e) + "." + {
                            3: "6315396b",
                            4: "33e5f1fc"
                        } [e] + ".chunk.js"
                    }(e);
                    var c = new Error;
                    u = function(r) {
                        i.onerror = i.onload = null, clearTimeout(f);
                        var t = o[e];
                        if (0 !== t) {
                            if (t) {
                                var n = r && ("load" === r.type ? "missing" : r.type),
                                    u = r && r.target && r.target.src;
                                c.message = "Loading chunk " + e + " failed.\n(" + n + ": " + u + ")", c.name = "ChunkLoadError", c.type = n, c.request = u, t[1](c)
                            }
                            o[e] = void 0
                        }
                    };
                    var f = setTimeout((function() {
                        u({
                            type: "timeout",
                            target: i
                        })
                    }), 12e4);
                    i.onerror = i.onload = u, document.head.appendChild(i)
                } return Promise.all(r)
        }, a.m = e, a.c = n, a.d = function(e, r, t) {
            a.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: t
            })
        }, a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.t = function(e, r) {
            if (1 & r && (e = a(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (a.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e)
                for (var n in e) a.d(t, n, function(r) {
                    return e[r]
                }.bind(null, n));
            return t
        }, a.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return a.d(r, "a", r), r
        }, a.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, a.p = "/", a.oe = function(e) {
            throw console.error(e), e
        };
        var i = this["webpackJsonpaipad-frontend"] = this["webpackJsonpaipad-frontend"] || [],
            c = i.push.bind(i);
        i.push = r, i = i.slice();
        for (var f = 0; f < i.length; f++) r(i[f]);
        var l = c;
        t()
    }([])
</script>
<script src="https://app.aipad.tech/static/js/2.bfeb0f60.chunk.js"></script>
<script>
    window.aipad_callback = "{{ route('api.aipad_callback') }}";
</script>
<script src="{{ asset('aipad.js') }}"></script>
</body>
</html>
