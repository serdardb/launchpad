window.actionCount = 0;
window.ActivePool = [];
window.ComingPool = [];
window.ClosePool = [];
window.counts = {
    ActivePool: 0,
    ComingPool: 0,
    ClosePool: 0
};
window.renderFunction = function (){
    if (
        window.counts.ActivePool === 2 &&
        window.counts.ComingPool === 2 &&
        window.counts.ClosePool === 2
    ) {
        let combinedArray = window.ActivePool.concat(window.ComingPool, window.ClosePool);
        fetch(window.aipad_callback, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Gönderilen verinin tipi JSON olarak belirlendi
            },
            body: JSON.stringify({data: combinedArray}),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Yanıtı JSON olarak çözme
            })
            .then(data => {
                console.log('Başarılı:', data);
                // Burada gelen yanıtı kullanabilirsiniz
            })
            .catch(error => {
                console.error('Hata:', error);
                // Hata durumunda buraya düşer
            });
    }
};
(this["webpackJsonpaipad-frontend"] = this["webpackJsonpaipad-frontend"] || []).push([
    [0], {
        132: function(e) {
            e.exports = JSON.parse('{"name":"aipad-frontend","version":"1.0.4","private":true,"dependencies":{"@binance-chain/bsc-connector":"^1.0.0","@ethersproject/providers":"^5.4.5","@fortawesome/fontawesome-svg-core":"^1.2.34","@fortawesome/react-fontawesome":"^0.1.14","@rumess/react-flip-countdown":"^1.1.2","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","@web3-react/core":"^6.1.9","@web3-react/injected-connector":"^6.0.7","@web3-react/walletconnect-connector":"^6.2.0","axios":"^0.19.2","babel-polyfill":"^6.26.0","big-number":"^2.0.0","bignumber.js":"^9.0.1","bip39":"^3.0.2","bootstrap":"^5.2.3","connected-react-router":"^6.8.0","crypto":"^1.0.1","ethereumjs-wallet":"^0.6.0","exact-math":"^2.2.3","fraction.js":"^4.0.13","global":"^4.4.0","history":"^4.10.1","http-status-codes":"^1.4.0","i":"^0.3.6","i18next":"^20.3.2","jquery":"^3.5.1","js-sha3":"^0.8.0","keccak":"^3.0.1","lodash":"^4.17.20","md5":"^2.2.1","moment":"^2.24.0","npm":"^6.14.11","public-ip":"^4.0.0","qrcode.react":"^1.0.0","query-string":"^6.14.1","react":"^16.12.0","react-block-ui":"^1.3.3","react-bootstrap":"^2.7.0","react-device-detect":"^1.17.0","react-dom":"^16.12.0","react-i18next":"^11.11.0","react-redux":"^7.2.0","react-router-dom":"^5.1.2","react-scripts":"3.4.0","react-toastify":"^8.0.0","redux":"^4.0.5","redux-logger":"^3.0.6","redux-persist":"^6.0.0","redux-saga":"^1.1.3","sass":"^1.57.1","scrypt-js":"^3.0.1","styled-components":"^5.0.1","validator":"^12.2.0","web3":"^1.3.3","web3modal":"^1.9.3"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')
        },
        133: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardsStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardsWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"initiateDate","type":"uint256"}],"name":"Unstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_INT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"apy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"endDate","type":"uint256"}],"name":"calculateFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTotalStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_apy","type":"uint256"}],"name":"distributeRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"feeBurnPcts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"feeDurations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRewardAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"feeRewardPcts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardsDistributedLastDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakers","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"getStakersRange","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"getStakersRewards","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"info","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"infoWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"infoWalletFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_rewardsAddress","type":"address"},{"internalType":"uint256","name":"_maxStakingAmount","type":"uint256"},{"internalType":"uint256","name":"_apy","type":"uint256"},{"internalType":"uint256","name":"_unstakingPeriod","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxStakingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDistributedLastDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_apy","type":"uint256"}],"name":"setAPY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_feeDurations","type":"uint256[]"},{"internalType":"uint256[]","name":"_feeBurnPcts","type":"uint256[]"},{"internalType":"uint256[]","name":"_feeRewardPcts","type":"uint256[]"},{"internalType":"address","name":"_feeRewardAddress","type":"address"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxStakingAmount","type":"uint256"}],"name":"setMaxStakingAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsAddress","type":"address"}],"name":"setRewardAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsDistributedLastDate","type":"uint256"}],"name":"setRewardsDistributedLastDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_unstakingPeriod","type":"uint256"}],"name":"setUnstakingPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakerAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakerAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewardsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"t","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"transferToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"unstakeAmount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        140: function(e, t, n) {
            e.exports = n(198)
        },
        150: function(e, t) {},
        158: function(e, t, n) {},
        163: function(e, t, n) {},
        165: function(e, t, n) {},
        166: function(e, t, n) {},
        167: function(e, t, n) {},
        187: function(e, t, n) {},
        188: function(e, t, n) {},
        191: function(e, t, n) {},
        195: function(e, t, n) {},
        198: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                i = n(35),
                o = n.n(i),
                c = n(7),
                l = n(33),
                s = Object(l.a)(),
                u = n(31),
                p = {
                    56: "https://bscscan.com",
                    97: "https://testnet.bscscan.com"
                },
                m = {
                    56: "",
                    97: ""
                },
                d = {
                    56: "0xE55d97A97ae6A17706ee281486E98A84095d8AAf",
                    97: "0xe0d24e7695fd9dcc57a097388811fbaeece68ce7",
                    1: "0xE55d97A97ae6A17706ee281486E98A84095d8AAf"
                },
                f = "https://app.aipad.tech",
                h = {
                    56: ["https://bsc-dataseed.binance.org/", "https://bsc-dataseed1.defibit.io/", "https://bsc-dataseed1.ninicoin.io/", "https://bsc-dataseed3.binance.org/", "https://bsc-dataseed4.defibit.io/", "https://bsc-dataseed3.ninicoin.io/"],
                    97: ["https://data-seed-prebsc-1-s2.binance.org:8545/"],
                    1: ["https://mainnet.infura.io/v3/e6d8a9c75b2e4e8c9d1e4c57446ffded"],
                    42161: ["https://endpoints.omniatech.io/v1/arbitrum/one/public"]
                },
                y = [56],
                v = "injected",
                b = "bsc",
                E = "WalletConnect",
                g = h[56],
                w = n(23),
                T = n(6),
                O = n(17),
                _ = n(12),
                x = n(10),
                N = n(11),
                j = n(26),
                S = n(27),
                L = n(58),
                k = n(22),
                A = n(88),
                C = n(137),
                I = function(e) {
                    Object(j.a)(n, e);
                    var t = Object(S.a)(n);

                    function n(e, a, r) {
                        return Object(x.a)(this, n), t.call(this, e)
                    }
                    return Object(N.a)(n)
                }(Object(C.a)(Error));

            function P() {
                P = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var M = Object(N.a)((function e(t, n, a) {
                var r = this;
                Object(x.a)(this, e), this.isMetaMask = !1, this.chainId = 56, this.url = "", this.host = "", this.path = "", this.nextId = 1, this.batchTimeoutId = null, this.batch = [], this.clearBatch = Object(_.a)(P().mark((function e() {
                    var t, n, a, i, o, c, l, s, u, p, m, d, f, h;
                    return P().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return console.info("Clearing batch", r.batch), t = r.batch, r.batch = [], r.batchTimeoutId = null, e.prev = 4, e.next = 7, fetch(r.url, {
                                    method: "POST",
                                    headers: {
                                        "content-type": "application/json",
                                        accept: "application/json"
                                    },
                                    body: JSON.stringify(t.map((function(e) {
                                        return e.request
                                    })))
                                });
                            case 7:
                                n = e.sent, e.next = 14;
                                break;
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(4), t.forEach((function(e) {
                                    return (0, e.reject)(new Error("Failed to send batch call"))
                                })), e.abrupt("return");
                            case 14:
                                if (n.ok) {
                                    e.next = 17;
                                    break
                                }
                                return t.forEach((function(e) {
                                    return (0, e.reject)(new I("".concat(n.status, ": ").concat(n.statusText), -32e3))
                                })), e.abrupt("return");
                            case 17:
                                return e.prev = 17, e.next = 20, n.json();
                            case 20:
                                a = e.sent, e.next = 27;
                                break;
                            case 23:
                                return e.prev = 23, e.t1 = e.catch(17), t.forEach((function(e) {
                                    return (0, e.reject)(new Error("Failed to parse JSON response"))
                                })), e.abrupt("return");
                            case 27:
                                i = t.reduce < Object(O.a)({}, id, BatchItem) > {}, o = Object(A.a)(a);
                                try {
                                    for (o.s(); !(c = o.n()).done;) l = c.value, s = i[l.id], u = s.resolve, p = s.reject, m = s.request.method, u && ("error" in l ? p(new I(null === l || void 0 === l || null === (d = l.error) || void 0 === d ? void 0 : d.message, null === l || void 0 === l || null === (f = l.error) || void 0 === f ? void 0 : f.code, null === l || void 0 === l || null === (h = l.error) || void 0 === h ? void 0 : h.data)) : "result" in l ? u(l.result) : p(new I("Received unexpected JSON-RPC response to ".concat(m, " request."), -32e3, l)))
                                } catch (y) {
                                    o.e(y)
                                } finally {
                                    o.f()
                                }
                            case 30:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [4, 10],
                        [17, 23]
                    ])
                }))), this.sendAsync = function(e, t) {
                    r.request(e.method, e.params).then((function(n) {
                        return t(null, {
                            jsonrpc: "2.0",
                            id: e.id,
                            result: n
                        })
                    })).catch((function(e) {
                        return t(e, null)
                    }))
                }, this.request = function() {
                    var e = Object(_.a)(P().mark((function e(t, n) {
                        var a, i;
                        return P().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("string" === typeof t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", r.request(t.method, t.params));
                                case 2:
                                    if ("eth_chainId" !== t) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", "0x".concat(r.chainId.toString(16)));
                                case 4:
                                    return i = new Promise((function(e, a) {
                                        r.batch.push({
                                            request: {
                                                jsonrpc: "2.0",
                                                id: r.nextId++,
                                                method: t,
                                                params: n
                                            },
                                            resolve: e,
                                            reject: a
                                        })
                                    })), r.batchTimeoutId = null !== (a = r.batchTimeoutId) && void 0 !== a ? a : setTimeout(r.clearBatch, r.batchWaitTimeMs), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(), this.chainId = t, this.url = n;
                var i = new URL(n);
                this.host = i.host, this.path = i.pathname, this.batchWaitTimeMs = null !== a && void 0 !== a ? a : 50
            }));

            function B() {
                B = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var G = function(e) {
                    Object(j.a)(n, e);
                    var t = Object(S.a)(n);

                    function n(e) {
                        var a, r = e.urls,
                            i = e.defaultChainId;
                        return Object(x.a)(this, n), Object(k.a)(i || 1 === Object.keys(r).length, "defaultChainId is a required argument with >1 url"), (a = t.call(this, {
                            supportedChainIds: Object.keys(r).map((function(e) {
                                return Number(e)
                            }))
                        })).providers = [], a.currentChainId = i || Number(Object.keys(r)[0]), a.providers = Object.keys(r).reduce((function(e, t) {
                            return e[Number(t)] = new M(Number(t), r[Number(t)]), e
                        }), {}), a
                    }
                    return Object(N.a)(n, [{
                        key: "provider",
                        value: function() {
                            return this.providers[this.currentChainId]
                        }
                    }, {
                        key: "activate",
                        value: function() {
                            var e = Object(_.a)(B().mark((function e() {
                                return B().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", {
                                                provider: this.providers[this.currentChainId],
                                                chainId: this.currentChainId,
                                                account: null
                                            });
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getProvider",
                        value: function() {
                            var e = Object(_.a)(B().mark((function e() {
                                return B().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.providers[this.currentChainId]);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getChainId",
                        value: function() {
                            var e = Object(_.a)(B().mark((function e() {
                                return B().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.currentChainId);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getAccount",
                        value: function() {
                            var e = Object(_.a)(B().mark((function e() {
                                return B().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", null);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "deactivate",
                        value: function() {
                            return null
                        }
                    }]), n
                }(L.AbstractConnector),
                F = G,
                R = n(128),
                D = n(59);

            function U() {
                var e = Object(u.d)(),
                    t = Object(u.d)("NETWORK");
                return e.active ? e : t
            }
            var W = new D.a({
                supportedChainIds: y
            });

            function J(e) {
                var t = e.children,
                    n = Object(u.d)().active,
                    r = Object(u.d)("NETWORK"),
                    i = r.active,
                    o = r.error,
                    c = r.activate,
                    l = new F({
                        urls: Object(O.a)({}, 56, g)
                    }),
                    s = function() {
                        var e = Object(u.d)(),
                            t = e.activate,
                            n = e.active,
                            r = Object(a.useState)(!1),
                            i = Object(T.a)(r, 2),
                            o = i[0],
                            c = i[1];
                        return Object(a.useEffect)((function() {
                            W.isAuthorized().then((function(e) {
                                var n = window.localStorage.getItem("connectorId");
                                e && n || R.isMobile && window.ethereum && n ? t(W, void 0, !0).catch((function() {
                                    c(!0)
                                })) : c(!0)
                            }))
                        }), [t]), Object(a.useEffect)((function() {
                            n && c(!0)
                        }), [n]), o
                    }();
                Object(a.useEffect)((function() {
                    !s || i || o || n || c(l)
                }), [s, i, o, c, n, l]),
                    function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = Object(u.d)(),
                            n = t.active,
                            r = t.error,
                            i = t.activate;
                        Object(a.useEffect)((function() {
                            var t = window.ethereum;
                            if (t && t.on && !n && !r && !e) {
                                var a = function() {
                                        i(W, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after chain changed", e)
                                        }))
                                    },
                                    o = function(e) {
                                        e.length > 0 && i(W, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after accounts changed", e)
                                        }))
                                    };
                                return t.on("chainChanged", a), t.on("accountsChanged", o),
                                    function() {
                                        t.removeListener && (t.removeListener("chainChanged", a), t.removeListener("accountsChanged", o))
                                    }
                            }
                        }), [n, r, e, i])
                    }(!s);
                var p = Object(a.useState)(!1),
                    m = Object(T.a)(p, 2),
                    d = (m[0], m[1]);
                return Object(a.useEffect)((function() {
                    var e = setTimeout((function() {
                        d(!0)
                    }), 600);
                    return function() {
                        clearTimeout(e)
                    }
                }), []), s ? t : null
            }
            var K = {
                    GET_PROJECTS: "/api/projects",
                    GET_PROJECT_DETAILS: "/api/projects/:id",
                    GET_STAKING_ENABLE: "/api/staking",
                    GET_CALENDAR: "/api/calendar",
                    GET_KYC: "/api/kycs",
                    GET_BALANCE: "/api/tiers"
                },
                Y = {
                    NORMAL_ERROR: "Oop! Have an error",
                    APPROVE_TOKEN_SUCCESS: "Approve Success",
                    APPROVE_TOKEN_FAILS: "Failed to Approve Tokens",
                    BUY_TOKEN_SUCCESS: "Successfully Joined Pool",
                    BUY_TOKEN_FAIL: "Failed to Join Pool",
                    SYNC_KYC_SUCCESS: "Sync kyc to TRONPAD Success",
                    SYNC_KYC_FAIL: "Failed  to Sync kyc to TRONPAD ",
                    WRONG_NET_WORK: {
                        56: "Wrong network! You need connect to Binance Smart Chain  network!",
                        42161: "Wrong network! You need connect to Arbitrum One  network!"
                    }
                },
                H = "/projects",
                q = "REQUEST_SUBMIT",
                z = "REQUEST_DONE",
                V = "GET_PROJECTS_SUCCESS",
                X = "GET_PROJECT_SELECTED",
                Q = "SUBMIT_GET_PROJECTS",
                $ = "SUBMIT_PROJECT_SELECTED",
                Z = "SET_JOB_COUNT_DOWN_OPEN",
                ee = "SET_JOB_COUNT_DOWN_CLOSE",
                te = "SET_JOB_COUNT_DOWN_ROUND",
                ne = "SET_JOB_COUNT_DOWN_FCFS_TIME",
                ae = "SET_LATEST_BLOCK",
                re = n(72),
                ie = n.n(re),
                oe = n(29);

            function ce() {
                return !(!ie.a.ethereum || !ie.a.ethereum.isMetaMask)
            }

            function le(e) {
                return Object(oe.BigNumber)(e).multipliedBy(Math.pow(10, 18)).integerValue()
            }
            var se = [{
                title: "Metamask",
                icon: "/images/metamask.svg",
                connectorId: v,
                enable: ce()
            }, {
                title: "TrustWallet",
                icon: "/images/trust.svg",
                connectorId: v,
                enable: !(!ie.a.ethereum || !ie.a.ethereum.isTrust)
            }, {
                title: "Binance Chain Wallet",
                icon: "/images/bscwallet.svg",
                connectorId: b,
                enable: !!ie.a.BinanceChain
            }];
            var ue = n(13),
                pe = n.n(ue),
                me = function() {
                    return Object(c.c)((function(e) {
                        return Object(ue.get)(e, "utils.latestBlock", 0)
                    }))
                },
                de = function() {
                    return Object(c.c)((function(e) {
                        return Object(ue.get)(e, "utils.walletUtils", null)
                    }))
                },
                fe = function() {
                    return Object(c.c)((function(e) {
                        return Object(ue.get)(e, "project.selectedProject", null)
                    }))
                },
                he = function() {
                    return Object(c.c)((function(e) {
                        return Object(ue.get)(e, "project.selectedProject.name", "")
                    }))
                },
                ye = function() {
                    return Object(c.c)((function(e) {
                        return Object(ue.get)(e, "project.selectedProject.symbol", "")
                    }))
                };

            function ve() {
                var e = Object(c.b)(),
                    t = Object(u.d)(),
                    n = t.chainId,
                    r = t.library,
                    i = t.account,
                    o = Object(a.useState)({
                        chainId: n,
                        blockNumber: null
                    }),
                    l = Object(T.a)(o, 2),
                    s = l[0],
                    p = l[1],
                    m = Object(a.useCallback)((function(e) {
                        p((function(t) {
                            return n === t.chainId ? "number" !== typeof t.blockNumber ? {
                                chainId: n,
                                blockNumber: e
                            } : {
                                chainId: n,
                                blockNumber: Math.max(e, t.blockNumber)
                            } : t
                        }))
                    }), [n, p]);
                Object(a.useEffect)((function() {
                    if (r && n) return p({
                        chainId: n,
                        blockNumber: null
                    }), r.getBlockNumber().then(m).catch((function(e) {
                        return console.error("Failed to get block number for chainId: ".concat(n), e)
                    })), r.on("block", m),
                        function() {
                            r.removeListener("block", m)
                        }
                }), [e, n, r, m]);
                var d = function(e, t) {
                    var n = Object(a.useState)(e),
                        r = Object(T.a)(n, 2),
                        i = r[0],
                        o = r[1];
                    return Object(a.useEffect)((function() {
                        var n = setTimeout((function() {
                            o(e)
                        }), t);
                        return function() {
                            clearTimeout(n)
                        }
                    }), [e, t]), i
                }(s, 1e3);
                Object(a.useEffect)((function() {
                    d.chainId && d.blockNumber && (console.log("BlockNumber latest:", d.blockNumber), e({
                        type: ae,
                        data: d.blockNumber
                    }))
                }), [e, d.blockNumber, d.chainId]);
                var f = de(),
                    h = me();
                return Object(a.useEffect)((function() {}), [f, i, e, h, n]), null
            }
            var be = n(203),
                Ee = function() {
                    return r.a.createElement("div", {
                        className: "ai-page"
                    }, r.a.createElement(be.a, null, r.a.createElement("h1", {
                        className: "ai-page-title glitch",
                        "data-text": "Cookies Policy"
                    }, "Cookies Policy"), r.a.createElement("div", {
                        className: "ai-page-inner"
                    }, r.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto quibusdam nam minus, corrupti laborum eum enim laudantium! Hic dignissimos doloremque nulla iste cumque omnis! Ipsa, debitis. Distinctio, repellendus maiores."))))
                },
                ge = function() {
                    return r.a.createElement("div", {
                        className: "ai-page"
                    }, r.a.createElement(be.a, null, r.a.createElement("h1", {
                        className: "ai-page-title glitch",
                        "data-text": "Privacy Policy"
                    }, "Privacy Policy"), r.a.createElement("div", {
                        className: "ai-page-inner"
                    }, r.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto quibusdam nam minus, corrupti laborum eum enim laudantium! Hic dignissimos doloremque nulla iste cumque omnis! Ipsa, debitis. Distinctio, repellendus maiores."))))
                },
                we = "/projects",
                Te = "/projects/:contract",
                Oe = "/privacy-policy",
                _e = "/cookies-policy",
                xe = "/terms-conditions",
                Ne = {
                    REQUEST_SUBMIT: "REQUEST_SUBMIT",
                    REQUEST_DONE: "REQUEST_DONE",
                    CONNECT_WALLET_SUCCESS: "CONNECT_WALLET_SUCCESS",
                    LOG_OUT_WALLET_SUCCESS: "LOG_OUT_WALLET_SUCCESS",
                    ENABLE_WALLET_SUCCESS: "ENABLE_WALLET_SUCCESS",
                    SET_SHOW_MODAL_HELP: "SET_SHOW_MODAL_HELP",
                    GET_PROJECTS_SUCCESS: "GET_PROJECTS_SUCCESS",
                    GET_LIST_CONTRACTS_INFO: "GET_LIST_CONTRACTS_INFO",
                    GET_PROJECT_SELECTED: "GET_PROJECT_SELECTED",
                    SUBMIT_GET_PROJECTS: "SUBMIT_GET_PROJECTS",
                    TAB_SELECTED_CHANGE: "TAB_SELECTED_CHANGE",
                    SUBMIT_PROJECT_SELECTED: "SUBMIT_PROJECT_SELECTED",
                    GET_PROJECT_SELECTED_SUCCESS: "GET_PROJECT_SELECTED_SUCCESS",
                    SET_CURRENT_CONTRACT_SELECTED: "SET_CURRENT_CONTRACT_SELECTED",
                    SET_LIST_CONTRACT_SELECTED: "SET_LIST_CONTRACT_SELECTED",
                    SET_JOB_PROJECT_SELECTED: "SET_JOB_PROJECT_SELECTED",
                    SET_JOB_GET_WALLET_INFO: "SET_JOB_GET_WALLET_INFO",
                    SET_JOB_COUNT_DOWN_OPEN: "SET_JOB_COUNT_DOWN_OPEN",
                    SET_JOB_COUNT_DOWN_CLOSE: "SET_JOB_COUNT_DOWN_CLOSE",
                    SET_JOB_COUNT_DOWN_ROUND: "SET_JOB_COUNT_DOWN_ROUND",
                    SET_JOB_COUNT_DOWN_FCFS_TIME: "SET_JOB_COUNT_DOWN_FCFS_TIME",
                    SET_JOB_GET_KYC: "SET_JOB_GET_KYC",
                    SET_JOB_GET_PROJECTS: "SET_JOB_GET_PROJECTS",
                    CLEAR_INTERVAL_PROJECTS_JOB: "CLEAR_INTERVAL_PROJECTS_JOB",
                    GET_INFO_WALLET: "GET_INFO_WALLET",
                    GET_KYC_INFO: "GET_KYC_INFO",
                    GET_KYC_3RD: "GET_KYC_3RD",
                    CLEAR_KYC_STATE: "CLEAR_KYC_STATE",
                    SET_JOB_GET_BALANCE: "SET_JOB_GET_BALANCE",
                    GET_STAKING_INFO: "GET_STAKING_INFO",
                    SET_JOB_GET_STAKING_INFO: "SET_GET_STAKING_INFO",
                    GET_STAKING_WALLET_INFO: "GET_STAKING_WALLET_INFO",
                    SET_JOB_GET_STAKING_WALLET_INFO: "SET_GET_STAKING_WALLET_INFO",
                    SET_JOB_COUNTDOWN_STAKE_TIME: "SET_JOB_COUNTDOWN_STAKE_TIME",
                    SUBMIT_GET_BALANCE: "SUBMIT_GET_BALANCE",
                    GET_AIPAD_WALLET_BALANCE: "GET_AIPAD_WALLET_BALANCE",
                    GET_BNB_BALANCE: "GET_BNB_BALANCE",
                    CLEAR_STAKING_JOB: "CLEAR_STAKING_JOB",
                    SET_STAKING_ENABLE: "SET_STAKING_ENABLE",
                    SET_JOB_GET_STAKING_STATUS: "SET_JOB_GET_STAKING_STATUS",
                    SET_LATEST_BLOCK: "SET_LATEST_BLOCK",
                    SET_TIER_ADDRESS: "SET_TIER_ADDRESS"
                },
                je = "APPROVING",
                Se = "APPROVED",
                Le = "APPROVE_FAILS",
                ke = "CLAIM_FAIL",
                Ae = "CLAIM_SUCCESS",
                Ce = "BUY_SUCCESS",
                Ie = "BUY_FAIL",
                Pe = "STAKING_DEPOSIT_FAIL",
                Me = "STAKING_DEPOSIT_SUBMIT",
                Be = "STAKING_DEPOSIT_SUCCESS",
                Ge = "STAKING_INITIATE_WITHDRAWAL_SUBMIT",
                Fe = "STAKING_INITIATE_WITHDRAWAL_FAIL",
                Re = "STAKING_INITIATE_WITHDRAWAL_SUCCESS",
                De = "STAKING_EXECUTE_WITHDRAWAL_SUBMIT",
                Ue = "STAKING_EXECUTE_WITHDRAWAL_FAIL",
                We = "STAKING_EXECUTE_WITHDRAWAL_SUCCESS",
                Je = "STAKING_EXECUTE_WITHDRAW_REWARDS_SUBMIT",
                Ke = "STAKING_EXECUTE_WITHDRAW_REWARDS_FAIL",
                Ye = "STAKING_EXECUTE_WITHDRAW_REWARDS_SUCCESS",
                He = "STAKING_REWARDS_SUBMIT",
                qe = "STAKING_REWARDS_FAIL",
                ze = "STAKING_REWARDS_SUCCESS";

            function Ve() {
                return {
                    type: Ne.SUBMIT_GET_PROJECTS
                }
            }

            function Xe(e) {
                return {
                    type: Ne.SUBMIT_PROJECT_SELECTED,
                    data: e
                }
            }
            var Qe, $e = n(209),
                Ze = n(89),
                et = n(25),
                tt = n(206),
                nt = n(129);
            if ("undefined" === typeof g) throw new Error("REACT_APP_NETWORK_URL must be a defined environment variable");
            new G({
                urls: Object(O.a)({}, 56, g),
                defaultChainId: 56
            });
            var at = new D.a({
                    supportedChainIds: y
                }),
                rt = new Ze.BscConnector({
                    supportedChainIds: [56]
                }),
                it = new nt.a({
                    rpc: Object(O.a)({}, 56, g),
                    qrcode: !0,
                    pollingInterval: 15e3
                });
            Qe = {}, Object(O.a)(Qe, v, at), Object(O.a)(Qe, b, rt), Object(O.a)(Qe, E, it);

            function ot() {
                ot = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var ct = function() {
                    var e, t = Object(u.d)(),
                        n = t.activate,
                        r = t.deactivate,
                        i = (e = {}, Object(O.a)(e, v, at), Object(O.a)(e, b, rt), e);
                    return {
                        login: Object(a.useCallback)((function(e) {
                            var t = i[e];
                            if (t) try {
                                n(t, function() {
                                    var e = Object(_.a)(ot().mark((function e(t) {
                                        return ot().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    window.localStorage.removeItem("connectorId"), t instanceof u.a ? et.b.warn(Y.WRONG_NET_WORK[56]) : t instanceof D.b || t instanceof Ze.NoBscProviderError ? et.b.error("No provider was found") : t instanceof D.c ? et.b.error("Please authorize to access your account") : (et.b.error(t.message), setTimeout((function() {
                                                        window.location.reload()
                                                    }), 2e3));
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }())
                            } catch (a) {
                                console.log(a)
                            } else et.b.error("The connector config is wrong")
                        }), []),
                        logout: r
                    }
                },
                lt = (n(158), function(e) {
                    var t = e.type,
                        n = void 0 === t ? "button" : t,
                        a = e.variant,
                        i = void 0 === a ? "" : a,
                        o = e.size,
                        c = void 0 === o ? "md" : o,
                        l = e.buttonText,
                        s = void 0 === l ? "Test" : l,
                        u = e.icon,
                        p = e.onClick,
                        m = e.disabled,
                        d = void 0 !== m && m;
                    return r.a.createElement("button", {
                        type: n,
                        className: "ai-btn ".concat(c, " ").concat(i),
                        disabled: d,
                        onClick: p
                    }, r.a.createElement("span", {
                        className: "decor"
                    }), u || r.a.createElement(r.a.Fragment, null), s)
                }),
                st = function(e) {
                    var t = e.text,
                        n = Object(a.useState)(t),
                        i = Object(T.a)(n, 2),
                        o = i[0];
                    i[1];
                    return r.a.createElement("span", {
                        className: "ai-btn sm w-auto px-3 mx-3 warning",
                        style: {
                            cursor: "text",
                            minWidth: 120
                        }
                    }, o)
                },
                ut = function(e) {
                    var t, n = e.buttonSize,
                        i = void 0 === n ? "sm" : n,
                        o = ct().login,
                        c = Object(a.useState)(!1),
                        l = Object(T.a)(c, 2),
                        s = l[0],
                        u = l[1],
                        p = Object(a.useCallback)((function(e) {
                            try {
                                o(e.connectorId), window.localStorage.setItem("connectorId", e.connectorId), u(!1)
                            } catch (t) {
                                console.log(t)
                            }
                        }), [o]);
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement(lt, {
                        size: i,
                        buttonText: "Connect wallet",
                        onClick: function() {
                            return u(!0)
                        }
                    }), r.a.createElement($e.a, {
                        size: "sm",
                        className: "ai-modal",
                        centered: !0,
                        show: s,
                        onHide: function() {
                            u(!1)
                        }
                    }, r.a.createElement($e.a.Header, {
                        closeButton: !0
                    }, r.a.createElement($e.a.Title, null, "Connect to wallet")), r.a.createElement($e.a.Body, null, null === (t = se.filter((function(e) {
                        return e.enable
                    }))) || void 0 === t ? void 0 : t.map((function(e, t) {
                        return r.a.createElement(lt, {
                            size: "md w-100 ".concat(0 === t ? "mb-3" : ""),
                            key: t,
                            icon: r.a.createElement("img", {
                                className: "me-2",
                                src: e.icon,
                                height: "26",
                                alt: e.connectorId
                            }),
                            buttonText: e.title,
                            onClick: function() {
                                return p(e)
                            }
                        })
                    })))))
                };
            var pt = function(e, t, n, a) {
                    var r = t,
                        i = setInterval((function() {
                            var t = (new Date).getTime(),
                                n = r - t,
                                o = Math.floor(n / 864e5),
                                c = Math.floor(n % 864e5 / 36e5),
                                l = Math.floor(n % 36e5 / 6e4),
                                s = Math.floor(n % 6e4 / 1e3);
                            try {
                                document.getElementById(e).innerHTML = o + "d " + c + "h " + l + "m " + s + "s ", n <= 0 && (a(i), clearInterval(i), document.getElementById(e).innerHTML = "0d 0h 0m 0s")
                            } catch (u) {}
                        }), 1e3);
                    n(i)
                },
                mt = n(30),
                dt = n.n(mt),
                ft = n(68),
                ht = function(e, t) {
                    return ft.div(ft.floor(ft.mul(e, ft.pow(10, t))), ft.pow(10, t)).toFixed(t)
                };
            var yt = function(e, t, n) {
                    if (e) return e.substring(0, t) + "..." + e.substring(e.length, e.length - n)
                },
                vt = function(e, t) {
                    if (null === e || void 0 === e) return 0;
                    "string" === typeof e && (e = Number(e));
                    var n = e.toString().split(".");
                    if (n.length >= 2) {
                        if (n[1].length > t) {
                            var a = n[1].substring(0, t);
                            return "".concat(n[0], ".").concat(a)
                        }
                        return e.toFixed(t)
                    }
                    return e.toFixed(t)
                },
                bt = ht,
                Et = function(e, t, n) {
                    if ("number" === typeof e) return "".concat(ht(e / Math.pow(10, t), n));
                    if ("string" === typeof e) {
                        if (!e.includes("-")) return "".concat(ht(e / Math.pow(10, t), n));
                        var a = e.split("-");
                        if (a.length >= 2) {
                            var r = ht(a[0] / Math.pow(10, t) || 0, n),
                                i = ht(a[1] / Math.pow(10, t) || 0, n);
                            return "".concat(r, " / ").concat(i)
                        }
                    }
                },
                gt = function(e) {
                    if ("number" == typeof e) return dt()(1e3 * e || 0).utc().format("YY-MM-DD HH:mm");
                    if ("string" == typeof e) {
                        if (!e.includes("-")) return dt()(1e3 * e || 0).utc().format("YY-MM-DD HH:mm");
                        var t = e.split("-");
                        if (t.length >= 2) {
                            var n = dt()(1e3 * t[0] || 0).utc().format("YY-MM-DD HH:mm"),
                                a = dt()(1e3 * t[1] || 0).utc().format("YY-MM-DD HH:mm");
                            return "".concat(n, " <span class='mx-1 text-secondary'>to</span> ").concat(a)
                        }
                    }
                },
                wt = function(e) {
                    var t = e.selectedProject;
                    return r.a.createElement("div", {
                        className: "ai-card-info pool"
                    }, r.a.createElement("div", {
                        className: "ai-card-info-title"
                    }, "Pool information"), r.a.createElement("div", {
                        className: "ai-card-info-inner"
                    }, r.a.createElement("div", {
                        className: "table-responsive"
                    }, r.a.createElement("table", {
                        className: "table mb-0"
                    }, r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", null, "Opens"), void 0 === t.openTime ? r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, "TBA")) : r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, dt()(1e3 * t.openTime || 0).utc().format("MM-DD HH:mm"), " UTC"))), r.a.createElement("tr", null, r.a.createElement("td", null, "FCFS Opens"), void 0 === t.fcfsOpenTime ? r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, "TBA")) : r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, dt()(1e3 * t.fcfsOpenTime || 0).utc().format("MM-DD HH:mm"), " UTC"))), r.a.createElement("tr", null, r.a.createElement("td", null, "Closes"), void 0 === t.closeTime ? r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, "TBA")) : r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, dt()(1e3 * t.closeTime || 0).utc().format("MM-DD HH:mm"), " UTC"))), r.a.createElement("tr", null, r.a.createElement("td", null, "Swap Rate"), void 0 !== t.openTime ? r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0",
                        id: "idBusdConvert"
                    }, r.a.createElement("span", {
                        className: "text-nowrap"
                    }, "1 ", t.symbol), r.a.createElement("span", {
                        className: "text-nowrap"
                    }, " = ", t.rate.toFixed(4), " ", t.projectTokenSymbol))) : r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0",
                        id: "idBusdConvert"
                    }, "TBA"))), r.a.createElement("tr", null, r.a.createElement("td", null, "Cap"), void 0 !== t.openTime ? r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, t.maxTotalParticipationAllocated, " ", t.symbol)) : r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, "TBA"))), r.a.createElement("tr", null, r.a.createElement("td", null, "Total Users Participated"), r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, t.totalCountUserParticipated || 0))), r.a.createElement("tr", null, r.a.createElement("td", null, "Total Funds Swapped"), void 0 !== t.openTime ? r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0 text-nowrap"
                    }, t.totalFundParticipated.toFixed(4) || 0, " ", t.symbol || "")) : r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, "0"))), r.a.createElement("tr", null, r.a.createElement("td", null, "Access Type"), r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, t.isPrivate ? "Private" : "Public"))), r.a.createElement("tr", null, r.a.createElement("td", {
                        colSpan: 2
                    })))))))
                },
                Tt = function(e) {
                    return r.a.createElement("div", {
                        className: "ai-card-info schedule"
                    }, r.a.createElement("div", {
                        className: "ai-card-info-title"
                    }, "Schedule"), r.a.createElement("div", {
                        className: "ai-card-info-inner"
                    }, r.a.createElement("div", {
                        className: "table-responsive"
                    }, r.a.createElement("table", {
                        className: "table mb-0 pp-table-info text-white"
                    }, r.a.createElement("tbody", null, r.a.createElement("tr", {
                        className: "card-header",
                        style: {
                            border: "none"
                        }
                    }, r.a.createElement("td", null, "Round"), r.a.createElement("td", null, "Opens"), r.a.createElement("td", null, "Closes")), e.roundInfo.length > 0 && e.roundInfo.map((function(e, t) {
                        return r.a.createElement("tr", {
                            key: t
                        }, r.a.createElement("td", null, e.round), r.a.createElement("td", null, r.a.createElement("h5", {
                            className: "mb-0"
                        }, dt()(1e3 * e.opens || 0).utc().format("MM-DD HH:mm"), " UTC")), r.a.createElement("td", null, r.a.createElement("h5", {
                            className: "mb-0"
                        }, dt()(1e3 * e.closes || 0).utc().format("MM-DD HH:mm"), " UTC")))
                    })))))))
                };

            function Ot() {
                Ot = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var _t = function() {
                var e = Object(_.a)(Ot().mark((function e(t, n) {
                    var a, r, i, o, c;
                    return Ot().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = t.tokenAddress, r = t.tokenSymbol, i = t.tokenDecimals, o = t.tokenImage, e.prev = 1, e.next = 4, window.ethereum.request({
                                    method: "wallet_watchAsset",
                                    params: {
                                        type: "ERC20",
                                        options: {
                                            address: a,
                                            symbol: r,
                                            decimals: i,
                                            image: o
                                        }
                                    }
                                });
                            case 4:
                                (c = e.sent) ? (n({
                                    status: "ADD_TOKEN_SUCCESS",
                                    data: c
                                }), console.log("Thanks for your interest!")) : (n({
                                    status: "ADD_TOKEN_FAILS",
                                    data: c
                                }), console.log("Your loss!")), e.next = 12;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1), n({
                                    status: "ADD_TOKEN_FAILS",
                                    data: null
                                }), console.log(e.t0);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }();

            function xt() {
                xt = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var Nt = function(e) {
                    var t = Object(c.b)(),
                        n = de(),
                        i = Object(a.useState)(1),
                        o = Object(T.a)(i, 2),
                        l = o[0],
                        s = o[1],
                        u = Object(a.useState)([]),
                        p = Object(T.a)(u, 2),
                        m = p[0],
                        d = p[1];
                    Object(a.useEffect)((function() {
                        e && (d(e.allocationInfo), s(e.layout))
                    }), [e]);
                    var f = function(a) {
                            n && (t({
                                type: q
                            }), n.claim({
                                contractAddress: e.contractAddress,
                                index: a
                            }, (function(n) {
                                "CLAIM_SUCCESS" === n.status && (t({
                                    type: z
                                }), et.b.success("Tokens Successfully Claimed"), e.handleBuyClick()), "CLAIM_FAIL" === n.status && (t({
                                    type: z
                                }), et.b.error("Failed to claim tokens, Please contact support"), e.handleBuyClick())
                            })))
                        },
                        h = function() {
                            var t = Object(_.a)(xt().mark((function t() {
                                return xt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            e.tokenAddress ? _t({
                                                tokenAddress: e.tokenAddress,
                                                tokenSymbol: e.tokenSymbol,
                                                tokenDecimals: e.decimals,
                                                tokenImage: ""
                                            }, (function(e) {
                                                "ADD_TOKEN_SUCCESS" === e.status && et.b.success("Successfully added token to MetaMask"), "ADD_TOKEN_FAILS" === e.status && et.b.error("Failed to add token to MetaMask")
                                            })) : et.b.error("Token incorrect!");
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                    return r.a.createElement("div", {
                        className: "py-3"
                    }, r.a.createElement("div", {
                        className: "ai-card-info allocation"
                    }, r.a.createElement("div", {
                        className: "ai-card-info-title d-flex flex-wrap justify-content-between align-items-center mb-3",
                        style: {
                            gap: "10px"
                        }
                    }, r.a.createElement("span", null, "Your Allocation"), e.allocationInfo.length >= 0 && r.a.createElement(lt, {
                        size: "sm wd me-0",
                        onClick: function() {
                            return h()
                        },
                        buttonText: r.a.createElement(r.a.Fragment, null, "Add token to ", r.a.createElement("b", null, "MetaMask"))
                    })), r.a.createElement("div", {
                        className: "ai-card-info-inner"
                    }, r.a.createElement("div", {
                        className: "d-lg-none d-block mt-4"
                    }, m.length > 0 && 1 === l && m.map((function(t, n) {
                        return r.a.createElement("div", {
                            className: "allocation-card mb-4",
                            key: n
                        }, r.a.createElement("div", null, "#", t.no), r.a.createElement("div", null, r.a.createElement("span", null, "Allocation"), r.a.createElement("h4", null, bt(t.allocationAmount / Math.pow(10, e.decimals) || 0, 4), " ", e.tokenSymbol)), r.a.createElement("div", null, r.a.createElement("span", null, "Date"), r.a.createElement("h4", null, 0 !== t.timestamp && "0" !== t.timestamp ? r.a.createElement("div", null, dt()(1e3 * t.timestamp || 0).utc().format("YYYY-MM-DD HH:mm:ss"), " UTC ") : "DEX Listing")), r.a.createElement("div", null, r.a.createElement("span", null, "Claimed"), r.a.createElement("h4", null, bt(t.claimedAmount / Math.pow(10, e.decimals) || 0, 4), " ", e.tokenSymbol)), r.a.createElement("div", null, r.a.createElement(lt, {
                            size: "sm w-100",
                            buttonText: "Claim Tokens",
                            disabled: !("OPEN" === t.status),
                            onClick: function() {
                                return f(n)
                            }
                        })))
                    })), m.length > 0 && 2 === l && m.map((function(t, n) {
                        return r.a.createElement("div", {
                            className: "allocation-card mb-4",
                            key: n
                        }, r.a.createElement("div", null, "#", t.no), r.a.createElement("div", null, r.a.createElement("span", null, "Allocation"), r.a.createElement("h4", null, Et(t.allocationAmount, e.decimals, 4))), r.a.createElement("div", null, r.a.createElement("span", null, "Percentage"), r.a.createElement("h4", null, (t.percentage / 100).toFixed(2), "%")), r.a.createElement("div", null, r.a.createElement("span", null, "Date"), r.a.createElement("h4", null, 0 !== t.timestamp && "0" !== t.timestamp ? r.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: gt(t.timestamp)
                            }
                        }) : "DEX Listing")), r.a.createElement("div", null, r.a.createElement("span", null, "Claimed"), r.a.createElement("h4", null, bt(t.claimedAmount / Math.pow(10, e.decimals) || 0, 4))), r.a.createElement("div", null, r.a.createElement(lt, {
                            size: "sm w-100",
                            buttonText: "Claim Tokens",
                            disabled: !("OPEN" === t.status),
                            onClick: function() {
                                return f(n)
                            }
                        })))
                    }))), r.a.createElement("div", {
                        className: "d-none d-lg-block"
                    }, r.a.createElement("div", {
                        className: "table-responsive"
                    }, r.a.createElement("table", {
                        className: "table pp-table-info text-white"
                    }, r.a.createElement("tbody", null, r.a.createElement("tr", {
                        className: "card-header",
                        style: {
                            border: "none"
                        }
                    }, r.a.createElement("td", null, "No."), r.a.createElement("td", null, "Allocation"), 2 === l && r.a.createElement("td", null, "Percentage"), r.a.createElement("td", null, "Date"), r.a.createElement("td", null, "Claimed"), ce() && r.a.createElement("td", {
                        className: "text-center",
                        style: {
                            width: "200px",
                            maxWidth: "200px"
                        }
                    }, "Action")), m.length > 0 && 1 === l && m.map((function(t, n) {
                        return r.a.createElement("tr", {
                            key: n
                        }, r.a.createElement("td", null, r.a.createElement("h5", {
                            className: "mb-0"
                        }, t.no)), r.a.createElement("td", null, r.a.createElement("h5", {
                            className: "mb-0"
                        }, bt(t.allocationAmount / Math.pow(10, e.decimals) || 0, 4), " ", e.tokenSymbol)), r.a.createElement("td", null, r.a.createElement("h5", {
                            className: "mb-0"
                        }, 0 !== t.timestamp && "0" !== t.timestamp ? r.a.createElement("div", null, dt()(1e3 * t.timestamp || 0).utc().format("YYYY-MM-DD HH:mm:ss"), " UTC ") : "DEX Listing")), r.a.createElement("td", null, r.a.createElement("h5", {
                            className: "mb-0"
                        }, bt(t.claimedAmount / Math.pow(10, e.decimals) || 0, 4), " ", e.tokenSymbol)), r.a.createElement("td", {
                            className: "text-center",
                            style: {
                                maxWidth: "200px"
                            }
                        }, r.a.createElement(lt, {
                            size: "sm",
                            buttonText: "Claim Tokens",
                            disabled: !("OPEN" === t.status),
                            onClick: function() {
                                return f(n)
                            }
                        })))
                    })), m.length > 0 && 2 === l && m.map((function(t, n) {
                        return r.a.createElement("tr", {
                            key: n
                        }, r.a.createElement("td", null, r.a.createElement("h5", {
                            className: "mb-0"
                        }, t.no)), r.a.createElement("td", null, r.a.createElement("h5", {
                            className: "mb-0"
                        }, Et(t.allocationAmount, e.decimals, 4))), r.a.createElement("td", null, r.a.createElement("h5", {
                            className: "mb-0"
                        }, (t.percentage / 100).toFixed(2), "%")), r.a.createElement("td", null, r.a.createElement("h5", {
                            className: "mb-0"
                        }, 0 !== t.timestamp && "0" !== t.timestamp ? r.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: gt(t.timestamp)
                            }
                        }) : "DEX Listing")), r.a.createElement("td", null, r.a.createElement("h5", {
                            className: "mb-0"
                        }, bt(t.claimedAmount / Math.pow(10, e.decimals) || 0, 4))), r.a.createElement("td", {
                            className: "text-center",
                            style: {
                                maxWidth: "200px"
                            }
                        }, r.a.createElement(lt, {
                            size: "sm",
                            buttonText: "Claim Tokens",
                            disabled: !("OPEN" === t.status),
                            onClick: function() {
                                return f(n)
                            }
                        })))
                    })))))))))
                },
                jt = function(e) {
                    var t = Object(c.b)(),
                        n = fe(),
                        i = de(),
                        o = Object(a.useState)(0),
                        l = Object(T.a)(o, 2),
                        s = l[0],
                        u = l[1],
                        p = he(),
                        m = ye(),
                        d = Object(a.useState)(!1),
                        f = Object(T.a)(d, 2),
                        h = f[0],
                        y = f[1],
                        v = Object(a.useState)(!1),
                        b = Object(T.a)(v, 2),
                        E = b[0],
                        g = b[1];
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement(lt, {
                        disabled: e.disabled,
                        buttonText: "Approve",
                        size: "ms-0 me-2",
                        variant: "success",
                        onClick: function() {
                            return g(!0)
                        }
                    }), r.a.createElement($e.a, {
                        size: "md",
                        className: "ai-modal",
                        centered: !0,
                        show: E,
                        onHide: function() {
                            g(!1)
                        }
                    }, r.a.createElement($e.a.Header, {
                        closeButton: !0
                    }, r.a.createElement($e.a.Title, null, "Join ", p, " Pool")), r.a.createElement($e.a.Body, null, r.a.createElement("div", {
                        className: "form-group"
                    }, r.a.createElement("div", {
                        className: "form-label"
                    }, m, " Amount"), r.a.createElement("div", {
                        className: "ai-amout-input"
                    }, r.a.createElement("input", {
                        type: "number",
                        className: "form-control form-control-lg",
                        placeholder: 0,
                        defaultValue: 0,
                        autoFocus: !0,
                        onChange: function(t) {
                            return function(t) {
                                var n = Number(t.target.value);
                                0 < n && n <= e.walletInfo.remainingAllocation && n <= e.walletInfo.tokenBalance ? y(!0) : y(!1), u(n), e.handleInputAmount(n)
                            }(t)
                        },
                        id: "inputAmountApprove"
                    }), r.a.createElement("span", {
                        style: {
                            cursor: "pointer"
                        },
                        onClick: function() {
                            return e.walletInfo.tokenBalance > 0 && e.walletInfo.remainingAllocation <= e.walletInfo.tokenBalance ? (u(vt(e.walletInfo.remainingAllocation, 6)), document.getElementById("inputAmountApprove").value = vt(e.walletInfo.remainingAllocation, 6), void y(!0)) : e.walletInfo.remainingAllocation > 0 && e.walletInfo.remainingAllocation > e.walletInfo.tokenBalance ? (u(vt(e.walletInfo.tokenBalance, 6)), document.getElementById("inputAmountApprove").value = vt(e.walletInfo.tokenBalance, 6), void y(!0)) : void y(!1)
                        }
                    }, "MAX"))), r.a.createElement("div", {
                        className: "text-end"
                    }, "Your balance: ", r.a.createElement("b", {
                        className: "text-white"
                    }, null === e || void 0 === e ? void 0 : e.tokenBalance, " ", null === e || void 0 === e ? void 0 : e.symbol)), r.a.createElement("div", {
                        className: "mt-4"
                    }, r.a.createElement(lt, {
                        disabled: !h,
                        onClick: function() {
                            i && n && (t({
                                type: q
                            }), i.approve({
                                contractAddress: n.contract,
                                tokenContractAddress: n.tokenAddress,
                                amount: Number(s)
                            }, (function(n) {
                                "APPROVED" === n.status && (t({
                                    type: z
                                }), e.handleBuyClick(), document.getElementById("inputAmountApprove").value = 0, y(!1), et.b.success("Approve Success!"), g(!1)), "APPROVE_FAILS" === n.status && (t({
                                    type: z
                                }), et.b.error("Failed to Approve Tokens"))
                            })).catch((function(e) {
                                et.b.error("Token Approve Fails! Please try again!"), t({
                                    type: z
                                })
                            })))
                        },
                        buttonText: "Approve",
                        size: "w-100",
                        variant: "warning"
                    })))))
                },
                St = function(e) {
                    var t = Object(c.b)(),
                        n = fe(),
                        i = de(),
                        o = Object(a.useState)(0),
                        l = Object(T.a)(o, 2),
                        s = l[0],
                        u = l[1],
                        p = he(),
                        m = ye(),
                        d = Object(a.useState)(!1),
                        f = Object(T.a)(d, 2),
                        h = f[0],
                        y = f[1],
                        v = Object(a.useState)(!1),
                        b = Object(T.a)(v, 2),
                        E = b[0],
                        g = b[1];
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement(lt, {
                        disabled: e.disabled,
                        size: "ms-0",
                        buttonText: "Join Pool",
                        onClick: function() {
                            return g(!0)
                        }
                    }), r.a.createElement($e.a, {
                        size: "md",
                        className: "ai-modal",
                        centered: !0,
                        show: E,
                        onHide: function() {
                            g(!1)
                        }
                    }, r.a.createElement($e.a.Header, {
                        closeButton: !0
                    }, r.a.createElement($e.a.Title, null, "Join ", p, " Pool")), r.a.createElement($e.a.Body, null, r.a.createElement("div", {
                        className: "form-group"
                    }, r.a.createElement("div", {
                        className: "form-label"
                    }, m, " Amount"), r.a.createElement("div", {
                        className: "ai-amout-input"
                    }, r.a.createElement("input", {
                        type: "number",
                        className: "form-control form-control-lg",
                        placeholder: 0,
                        defaultValue: 0,
                        autoFocus: !0,
                        onChange: function(t) {
                            return function(t) {
                                var n = Number(t.target.value);
                                0 < n && n <= e.remainingAllocation && n <= e.walletInfo.remainingAllocation && n <= e.walletInfo.tokenBalance ? y(!0) : y(!1), u(n), e.handleInputAmount(n)
                            }(t)
                        },
                        id: "inputAmountSwap"
                    }), r.a.createElement("span", {
                        style: {
                            cursor: "pointer"
                        },
                        onClick: function() {
                            if (0 !== Number(e.allocationNumber) && !Number(0 === e.remainingAllocation)) return e.allocationNumber > 0 && e.allocationNumber < e.remainingAllocation && e.allocationNumber < e.walletInfo.tokenBalance ? (document.getElementById("inputAmountSwap").value = vt(e.allocationNumber, 6), u(vt(e.allocationNumber, 6)), void y(!0)) : e.remainingAllocation > 0 && e.remainingAllocation < e.walletInfo.tokenBalance ? (document.getElementById("inputAmountSwap").value = vt(e.remainingAllocation, 6), u(vt(e.remainingAllocation, 6)), void y(!0)) : e.walletInfo.tokenBalance > 0 && e.remainingAllocation >= e.walletInfo.tokenBalance ? (document.getElementById("inputAmountSwap").value = vt(e.walletInfo.tokenBalance, 6), u(vt(e.walletInfo.tokenBalance, 6)), void y(!0)) : void y(!1);
                            y(!1)
                        }
                    }, "MAX"))), r.a.createElement("div", {
                        className: "text-end"
                    }, "Your balance: ", r.a.createElement("b", {
                        className: "text-white"
                    }, null === e || void 0 === e ? void 0 : e.tokenBalance, " ", null === e || void 0 === e ? void 0 : e.symbol)), r.a.createElement("div", {
                        className: "mt-4"
                    }, r.a.createElement(lt, {
                        disabled: !h,
                        onClick: function() {
                            i && n && (t({
                                type: q
                            }), i.buyTokens({
                                contractAddress: n.contract,
                                tokenAddress: n.tokenAddress,
                                amount: Number(s)
                            }, (function(n) {
                                "BUY_SUCCESS" === n.status && (t({
                                    type: z
                                }), e.handleBuyClick(), y(!1), document.getElementById("inputAmountSwap").value = 0, et.b.success("Successfully Joined Pool!"), g(!1)), "BUY_FAIL" === n.status && (t({
                                    type: z
                                }), et.b.error("Failed to Join Pool"))
                            })).catch((function(e) {
                                t({
                                    type: z
                                }), et.b.error("Failed to Join Pool! Please try again!"), console.log(e)
                            })))
                        },
                        buttonText: "Join",
                        size: "w-100",
                        variant: "warning"
                    })))))
                },
                Lt = (n(163), function(e) {
                    var t = e.selectedProject;
                    return r.a.createElement("div", {
                        className: "ai-card-info token"
                    }, r.a.createElement("div", {
                        className: "ai-card-info-title"
                    }, "Token information"), r.a.createElement("div", {
                        className: "ai-card-info-inner"
                    }, r.a.createElement("div", {
                        className: "table-responsive"
                    }, r.a.createElement("table", {
                        className: "table mb-0"
                    }, r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", null, "Name"), r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, t.name))), r.a.createElement("tr", null, r.a.createElement("td", null, "Token Symbol"), r.a.createElement("td", {
                        className: "text-end"
                    }, r.a.createElement("h5", {
                        className: "mb-0"
                    }, t.projectTokenSymbol))))))))
                }),
                kt = n(204),
                At = n(205);

            function Ct() {
                Ct = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var It = function() {
                    var e = Object(c.b)(),
                        t = Object(w.g)(),
                        n = Object(a.useState)(""),
                        i = Object(T.a)(n, 2),
                        o = i[0],
                        l = i[1],
                        u = Object(a.useState)(0),
                        p = Object(T.a)(u, 2),
                        m = p[0],
                        d = p[1],
                        f = Object(a.useState)(0),
                        h = Object(T.a)(f, 2),
                        y = h[0],
                        v = h[1],
                        b = Object(a.useState)(0),
                        E = Object(T.a)(b, 2),
                        g = E[0],
                        O = E[1],
                        x = Object(a.useState)(0),
                        N = Object(T.a)(x, 2),
                        j = N[0],
                        S = N[1],
                        L = Object(a.useState)(0),
                        k = Object(T.a)(L, 2),
                        A = k[0],
                        C = k[1],
                        I = Object(a.useState)(0),
                        P = Object(T.a)(I, 2),
                        M = P[0],
                        B = P[1],
                        G = Object(a.useState)(!1),
                        F = Object(T.a)(G, 2),
                        R = F[0],
                        D = F[1],
                        W = Object(a.useState)(null),
                        J = Object(T.a)(W, 2),
                        K = J[0],
                        Y = J[1],
                        q = Object(a.useState)(""),
                        z = Object(T.a)(q, 2),
                        V = z[0],
                        X = z[1],
                        Q = Object(a.useState)(0),
                        $ = Object(T.a)(Q, 2),
                        ae = $[0],
                        re = $[1],
                        ie = Object(a.useState)(""),
                        oe = Object(T.a)(ie, 2),
                        ce = oe[0],
                        le = oe[1],
                        se = Object(a.useState)(0),
                        pe = Object(T.a)(se, 2),
                        he = pe[0],
                        ye = pe[1],
                        ve = Object(a.useState)(0),
                        Ee = Object(T.a)(ve, 2),
                        ge = Ee[0],
                        we = Ee[1],
                        Te = Object(a.useState)([]),
                        Oe = Object(T.a)(Te, 2),
                        _e = Oe[0],
                        xe = Oe[1],
                        je = Object(a.useState)(1),
                        Se = Object(T.a)(je, 2),
                        Le = Se[0],
                        ke = Se[1],
                        Ae = Object(a.useState)(!1),
                        Ce = Object(T.a)(Ae, 2),
                        Ie = Ce[0],
                        Pe = Ce[1],
                        Me = Object(a.useState)(!1),
                        Be = Object(T.a)(Me, 2),
                        Ge = Be[0],
                        Fe = Be[1],
                        Re = Object(c.c)((function(e) {
                            return Object(ue.get)(e, "utils.blocking", !1)
                        })),
                        De = Object(a.useState)({
                            remainingAllocation: 0,
                            tokenBalance: 0
                        }),
                        Ue = Object(T.a)(De, 2),
                        We = Ue[0],
                        Je = Ue[1],
                        Ke = U().account,
                        Ye = me(),
                        He = fe(),
                        qe = de(),
                        ze = Object(c.c)((function(e) {
                            return Object(ue.get)(e, "project.selectedProject.infoRound", [])
                        })),
                        Qe = Object(a.useState)(0),
                        $e = Object(T.a)(Qe, 2),
                        Ze = $e[0],
                        et = $e[1],
                        tt = Object(a.useState)(0),
                        nt = Object(T.a)(tt, 2),
                        at = nt[0],
                        rt = nt[1],
                        it = Object(a.useState)(0),
                        ot = Object(T.a)(it, 2),
                        ct = ot[0],
                        lt = ot[1];
                    Object(a.useEffect)((function() {
                        var n = t.contract;
                        n && "string" === typeof n ? (l(n), e(Xe(n)), e(function(e) {
                            return {
                                type: Ne.SET_CURRENT_CONTRACT_SELECTED,
                                data: e
                            }
                        }(n))) : s.push(H)
                    }), [Re, e, t]), Object(a.useEffect)((function() {
                        o && e(Xe(o))
                    }), [Ye, o, e]), Object(a.useEffect)((function() {
                        He && (He.closeTime !== Ze && et(He.closeTime), He.openTime !== at && rt(He.openTime), He.fcfsOpenTime !== ct && lt(He.fcfsOpenTime), Pe(He.yourAllocationVisible), Y(He))
                    }), [He]), Object(a.useEffect)((function() {
                        at > 0 && pt("idOpenTime-".concat(He.contract), 1e3 * at, (function(t) {
                            e({
                                type: Z,
                                data: t
                            })
                        }), (function(t) {
                            st(o), e(Xe(o))
                        }))
                    }), [at, e, o]), Object(a.useEffect)((function() {
                        Ze > 0 && pt("idTimeClose-".concat(He.contract), 1e3 * Ze, (function(t) {
                            e({
                                type: ee,
                                data: t
                            })
                        }), (function(t) {
                            st(o), e(Xe(o))
                        }))
                    }), [Ze, e, A]), Object(a.useEffect)((function() {
                        ct > 0 && pt("idFcfsOpenTime-".concat(He.contract), 1e3 * ct, (function(t) {
                            e({
                                type: ne,
                                data: t
                            })
                        }), (function(t) {
                            st(o), e(Xe(o))
                        }))
                    }), [ct, e, A]), Object(a.useEffect)((function() {
                        he > 0 && He && pt("idRoundTime-".concat(He.contract), 1e3 * he, (function(t) {
                            e({
                                type: te,
                                data: t
                            })
                        }), (function(t) {
                            st(o), e(Xe(o))
                        }))
                    }), [he, He, e]), Object(a.useEffect)((function() {
                        Number(g) > Number(ge) ? Fe(!0) : Fe(!1)
                    }), [ge, g, A]), Object(a.useEffect)((function() {
                        function n() {
                            return (n = Object(_.a)(Ct().mark((function e() {
                                var n;
                                return Ct().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(n = t.contract)) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 4, st(n);
                                        case 4:
                                            return e.next = 6, mt();
                                        case 6:
                                            return e.next = 8, dt(n);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }
                        Ke && qe && K && (e(Ve()), function() {
                            n.apply(this, arguments)
                        }())
                    }), [Ke, qe, M, o, K, Ye, e, t]);
                    var st = function() {
                            var e = Object(_.a)(Ct().mark((function e(t) {
                                return Ct().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            qe && qe.getInfoWallet(t).then((function(e) {
                                                if (Je({
                                                    remainingAllocation: e.remainingAllocation / Math.pow(10, K.decimal),
                                                    tokenBalance: e.tokenBalance / Math.pow(10, K.decimal),
                                                    ethBalance: e.ethBalance
                                                }), v(e.ethBalance), d(e.tokenBalance / Math.pow(10, K.decimal)), S(e.userParticipation / Math.pow(10, K.decimal)), O(e.remainingAllocation / Math.pow(10, K.decimal)), X(e.tier), re(e.roundState), le(e.roundStateText), document.getElementById("idTextRoundState") && (document.getElementById("idTextRoundState").innerHTML = e.roundStateText), he != e.roundTimestamp && ye(e.roundTimestamp), 1 === e.roundState || 3 === e.roundState) {
                                                    if ("C" !== K.state && "P" !== K.state && "TBA" !== K.address) return He.isPrivate ? 0 === e.remainingAllocation ? void D(!1) : void D(!0) : (D(!0), void O(K.maxSingleParticipationAllocated));
                                                    D(!1)
                                                } else D(!1)
                                            })).catch((function(e) {
                                                console.log(e)
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        mt = function() {
                            var e = Object(_.a)(Ct().mark((function e() {
                                return Ct().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            qe.getAllowance(He.tokenAddress, He.contract).then((function(e) {
                                                we(e)
                                            })).catch((function(e) {
                                                console.log(e)
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        dt = function(e) {
                            qe.getInfoAllocations(e).then((function(e) {
                                ke(e.layout), xe(e.infoAllocation)
                            })).catch((function(e) {
                                console.log(e)
                            }))
                        };
                    return r.a.createElement(r.a.Fragment, null, He ? r.a.createElement("div", {
                        className: "ai-project-detail"
                    }, r.a.createElement(be.a, null, r.a.createElement(kt.a, {
                        className: "align-items-center"
                    }, r.a.createElement("div", {
                        className: "d-block d-lg-none mb-3"
                    }, r.a.createElement("div", {
                        className: "ai-project-d"
                    }, r.a.createElement("div", {
                        className: "ai-project-d-logo"
                    }, r.a.createElement("img", {
                        src: He.logo,
                        alt: He.name
                    })))), r.a.createElement(At.a, {
                        lg: "9"
                    }, r.a.createElement("h1", {
                        className: "ai-project-d-name glitch",
                        "data-text": He.name
                    }, He.name)), r.a.createElement(At.a, {
                        lg: "3"
                    }, r.a.createElement("div", {
                        className: "ai-project-d-socials justify-content-start justify-content-lg-end"
                    }, He.pancakeswap && r.a.createElement("a", {
                        href: He.pancakeswap,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("img", {
                        height: "20",
                        src: "/images/pancake-swap.png",
                        alt: ""
                    })), He.website && r.a.createElement("a", {
                        href: He.website,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("i", {
                        className: "fas fa-globe-americas"
                    })), He.twitter && r.a.createElement("a", {
                        href: He.twitter,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("i", {
                        className: "fab fa-twitter"
                    })), He.medium && r.a.createElement("a", {
                        href: He.medium,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("i", {
                        className: "fab fa-medium-m"
                    })), He.telegram && r.a.createElement("a", {
                        href: He.telegram,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("i", {
                        className: "fab fa-telegram-plane"
                    }))))), r.a.createElement("div", {
                        className: "ai-project-d-description"
                    }, He.description), r.a.createElement(kt.a, {
                        className: "mb-5"
                    }, r.a.createElement(At.a, {
                        lg: "4",
                        className: "d-none d-lg-block"
                    }, r.a.createElement("div", {
                        className: "ai-project-d"
                    }, r.a.createElement("div", {
                        className: "ai-project-d-logo"
                    }, r.a.createElement("img", {
                        src: He.logo,
                        alt: He.name
                    })))), r.a.createElement(At.a, {
                        lg: "8"
                    }, r.a.createElement("div", {
                        className: "ai-project-intro"
                    }, r.a.createElement(kt.a, {
                        className: "gx-xl-5"
                    }, r.a.createElement(At.a, {
                        md: "5"
                    }, r.a.createElement("div", {
                        className: "position-relative"
                    }, r.a.createElement("div", {
                        className: "items-morex"
                    }, ("O" === He.state || "F" === He.state) && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
                        className: "pp-status-open text-success"
                    }, r.a.createElement("i", {
                        className: "mdi mdi-circle text-success"
                    }), " ", "Open")), "C" === He.state && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
                        className: "pp-status-closed text-danger"
                    }, r.a.createElement("i", {
                        className: "mdi mdi-circle text-danger"
                    }), " ", "Closed")), "P" === He.state && r.a.createElement(r.a.Fragment, null, void 0 !== He.openTime ? r.a.createElement("span", {
                        className: "pp-status-opening text-warning"
                    }, r.a.createElement("i", {
                        className: "mdi mdi-circle  text-warning"
                    }), " ", "Opens in", " ", r.a.createElement("b", {
                        id: "idOpenTime-".concat(He.contract)
                    }, "0d 0h 0m 0s")) : r.a.createElement("span", {
                        className: "pp-status-opening text-warning"
                    }, r.a.createElement("i", {
                        className: "mdi mdi-circle  text-warning"
                    }), "TBA"))), "P" !== He.state && r.a.createElement("div", {
                        className: "mb-4"
                    }, Ke && r.a.createElement("div", {
                        className: "pp-card-info"
                    }, r.a.createElement("hr", {
                        class: "mb-2 mt-2"
                    }), r.a.createElement("div", {
                        className: "pp-card-col w-100"
                    }, "Your balance", r.a.createElement("br", null), r.a.createElement("div", {
                        className: "d-flex justify-content-between align-items-center"
                    }, r.a.createElement("strong", {
                        className: "text-white text-white",
                        id: "idBusdBalance"
                    }, vt(m, 4), " ", He.symbol)), "BNB" !== He.symbol && r.a.createElement("div", {
                        className: "d-flex justify-content-between align-items-center"
                    }, r.a.createElement("strong", {
                        id: "idKcsBalance",
                        className: "text-white text-white"
                    }, vt(y, 4), " BNB")), r.a.createElement("hr", {
                        class: "mb-2 mt-2"
                    }), r.a.createElement("div", {
                        className: "pp-card-col mb-3 mb-md-0"
                    }, "Your approved amount:", r.a.createElement("br", null), r.a.createElement("b", {
                        className: "text-white text-white"
                    }, vt(ge, 4), " ", He.symbol))), r.a.createElement("div", {
                        className: "pp-card-col w-100 mt-3"
                    }, V && r.a.createElement("div", null, "Your tier", r.a.createElement("br", null), r.a.createElement("b", {
                        className: "text-white text-white"
                    }, V))))), "P" === He.state && Ke && r.a.createElement("div", {
                        className: "mb-4"
                    }, r.a.createElement("div", {
                        className: "card card-img-holder bg-gradient-danger mx-auto mx-lg-0"
                    }, r.a.createElement("div", {
                        className: "card-body py-3 px-3 px-md-4"
                    }, Ke && r.a.createElement("div", {
                        className: "pp-card-info mt-2"
                    }, r.a.createElement("div", {
                        className: "pp-card-col"
                    }, "Your balance", r.a.createElement("br", null), void 0 !== He.openTime ? r.a.createElement("div", {
                        className: "d-flex justify-content-between align-items-center"
                    }, r.a.createElement("h4", {
                        className: "mb-0"
                    }, r.a.createElement("strong", {
                        id: "idBusdBalance"
                    }, vt(m, 4) || 0, "\xa0", He.symbol)), "P" !== He.state && r.a.createElement("h6", {
                        id: "idBusdConvert"
                    }, "1 ", He.symbol, " = ", He.rate, " ", He.projectTokenSymbol)) : r.a.createElement("div", null), "BNB" !== He.symbol && r.a.createElement("div", {
                        className: "d-flex justify-content-between align-items-center"
                    }, r.a.createElement("h4", {
                        className: "mb-0"
                    }, r.a.createElement("strong", {
                        id: "idethBalance"
                    }, vt(y, 4) || 0, " BNB"))))))))), Ke ? r.a.createElement(r.a.Fragment, null) : r.a.createElement(ut, {
                        buttonSize: "md wd"
                    })), r.a.createElement(At.a, {
                        md: "7"
                    }, r.a.createElement("div", {
                        className: "position-relative"
                    }, "P" !== He.state && r.a.createElement("div", null, "O" == He.state && r.a.createElement("div", {
                        className: "pp-card-info"
                    }, Ke ? 4 !== ae ? r.a.createElement("div", {
                        className: "pp-card-col w-100"
                    }, ce && r.a.createElement("div", null, r.a.createElement("span", {
                        id: "idTextRoundState"
                    }, " ", ce), r.a.createElement("br", null)), r.a.createElement("b", {
                        id: "idRoundTime-".concat(He.contract),
                        className: "text-white"
                    }, " 0d 0h 0m 0s")) : r.a.createElement("div", {
                        className: "items-morex"
                    }, "ROUND CLOSED") : r.a.createElement("div", {
                        className: "pp-card-col w-100"
                    }, "First Come First Serve ", r.a.createElement("u", null, "opens"), " in:", r.a.createElement("br", null), r.a.createElement("b", {
                        id: "idFcfsOpenTime-".concat(He.contract),
                        className: "text-white"
                    }, " 0d 0h 0m 0s"))), "F" == He.state && r.a.createElement("div", {
                        className: "pp-card-info"
                    }, Ke ? 4 !== ae ? r.a.createElement("div", {
                        className: "pp-card-col w-100"
                    }, r.a.createElement("span", {
                        id: "idTextRoundState"
                    }, " ", ce), r.a.createElement("br", null), r.a.createElement("b", {
                        id: "idRoundTime-".concat(He.contract),
                        className: "text-white"
                    }, " 0d 0h 0m 0s")) : r.a.createElement("div", {
                        className: "items-morex"
                    }, "ROUND CLOSED") : r.a.createElement("div", {
                        className: "pp-card-col w-100"
                    }, "Closing in:", r.a.createElement("br", null), r.a.createElement("b", {
                        id: "idTimeClose-".concat(He.contract),
                        className: "text-white"
                    }, " 0d 0h 0m 0s"))), "C" == He.state && r.a.createElement("div", {
                        className: "pp-card-info text-white"
                    }, r.a.createElement("div", {
                        className: "items-morex"
                    }, "CLOSED")), Ke && r.a.createElement("div", null, r.a.createElement("hr", {
                        className: "mb-2 mt-2"
                    }), r.a.createElement("div", {
                        className: "pp-card-info"
                    }, r.a.createElement("div", {
                        className: "d-flex justify-content-between w-100"
                    }, r.a.createElement("div", {
                        className: "pp-card-col w-100"
                    }, "Swapped", r.a.createElement("br", null), r.a.createElement("b", {
                        id: "idUseParticipation",
                        className: "text-white"
                    }, vt(j, 4), " ", He.symbol), r.a.createElement("div", null, r.a.createElement("b", {
                        className: "text-white"
                    }, " ", "".concat(vt(j * He.rate, 4), " ").concat(He.projectTokenSymbol)))), r.a.createElement("div", {
                        className: "pp-card-col w-100"
                    }, "Remaining Allocation", r.a.createElement("br", null), r.a.createElement("b", {
                        id: "idBusdMaxBuy",
                        className: "text-white"
                    }, vt(g, 4), " ", He.symbol))))), r.a.createElement("hr", {
                        className: "mb-2 mt-2"
                    }), r.a.createElement("div", {
                        className: "pp-card-info"
                    }, r.a.createElement("div", {
                        className: "d-flex justify-content-between w-100"
                    }, "O" !== He.state ? r.a.createElement("div", {
                        className: "pp-card-col w-100"
                    }, "Swap progress", r.a.createElement("br", null), r.a.createElement("div", {
                        className: "ai-project-progress"
                    }, r.a.createElement("div", {
                        className: "ai-project-progress-percent",
                        style: {
                            width: "".concat(100 * (He.totalFundParticipated / He.maxTotalParticipationAllocated || 0), "%")
                        }
                    }), r.a.createElement("div", {
                        className: "ai-project-progress-label"
                    }, r.a.createElement("span", null, r.a.createElement("b", null, (100 * (He.totalFundParticipated / He.maxTotalParticipationAllocated || 0)).toFixed(2), "%")), r.a.createElement("span", null, r.a.createElement("b", null, He.totalFundParticipated.toFixed(4), "/", He.maxTotalParticipationAllocated, " ", He.symbol))))) : r.a.createElement("div", {
                        className: "pp-card-col w-100 ai-project-progress-wrap light-progress disabled"
                    }, r.a.createElement("div", {
                        className: "ai-project-progress text-center"
                    }, r.a.createElement("div", {
                        className: "ai-project-progress-percent ai-project-progress-percent-card"
                    }), r.a.createElement("div", {
                        className: "ai-project-progress-label"
                    }, r.a.createElement("span", {
                        className: "participants-center"
                    }, "Allocation round"), r.a.createElement("span", {
                        className: "participants-center",
                        style: {
                            top: "8px"
                        }
                    }, He.totalCountUserParticipated, " Participants")))))))))), Ke ? r.a.createElement("div", {
                        className: "mt-4 pt-4",
                        style: {
                            borderTop: "1px rgba(255,255,255,.1) solid"
                        }
                    }, "P" !== He.state && r.a.createElement("div", {
                        className: "d-flex flex-wrap",
                        style: {
                            gap: "15px"
                        }
                    }, r.a.createElement(jt, {
                        disabled: !Ge,
                        remainingAllocation: g,
                        walletInfo: We,
                        handleBuyClick: function() {
                            return B(M + 1)
                        },
                        handleInputAmount: function(e) {
                            return C(e)
                        },
                        tokenBalance: vt(m, 4)
                    }), r.a.createElement(St, {
                        disabled: !R || 0 == ge,
                        walletInfo: We,
                        allocationNumber: ge,
                        remainingAllocation: g,
                        handleBuyClick: function() {
                            return B(M + 1)
                        },
                        countClick: M,
                        tokenBalance: vt(m, 4),
                        symbol: null === He || void 0 === He ? void 0 : He.symbol,
                        handleInputAmount: function(e) {
                            return C(e)
                        }
                    }))) : r.a.createElement(r.a.Fragment, null)))), r.a.createElement(kt.a, {
                        className: "gx-xl-5"
                    }, r.a.createElement(At.a, {
                        lg: "6"
                    }, r.a.createElement(wt, {
                        selectedProject: He
                    })), r.a.createElement(At.a, {
                        lg: "6"
                    }, r.a.createElement(Lt, {
                        selectedProject: He
                    }), r.a.createElement(Tt, {
                        roundInfo: ze
                    }))), Ie && r.a.createElement(Nt, {
                        allocationInfo: _e,
                        tokenSymbol: He.projectTokenSymbol,
                        decimals: K.decimal,
                        contractAddress: o,
                        tokenAddress: K.projectTokenContract,
                        handleBuyClick: function() {
                            return B(M + 1)
                        },
                        claim: He.claim,
                        layout: Le
                    }))) : r.a.createElement("div", {
                        className: "p-4 text-center"
                    }, "Loading..."))
                },
                Pt = n(80),
                Mt = n.n(Pt),
                Bt = function() {
                    return r.a.createElement("div", {
                        className: "ai-banner"
                    }, r.a.createElement(be.a, null, r.a.createElement(kt.a, {
                        className: "align-items-center"
                    }, r.a.createElement(At.a, {
                        lg: "6",
                        className: "order-lg-1 order-2 mt-4 mt-lg-0"
                    }, r.a.createElement("h1", {
                        className: "glitch",
                        "data-text": "WELCOME TO AIPAD"
                    }, "WELCOME TO AIPAD"), r.a.createElement("div", null, "Welcome to #AIPad, the revolutionary #launchpad focused on #AI", r.a.createElement("br", null), "We are thrilled to have you join our community and be part of this exciting journey."), r.a.createElement("div", {
                        className: "mt-4 mt-lg-5 d-flex"
                    }, r.a.createElement("a", {
                        href: "https://www.aipad.tech/",
                        target: "_blank",
                        className: "ai-btn ms-0 me-3",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("span", {
                        className: "decor"
                    }), "\ud83e\udd16Homepage"), r.a.createElement("a", {
                        href: "https://www.aipad.tech/leaderboard",
                        target: "_blank",
                        className: "ai-btn ms-0 me-3",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("span", {
                        className: "decor"
                    }), "\ud83d\udd25Leader board"), r.a.createElement("a", {
                        onClick: function(e) {
                            e.preventDefault(), Mt()("html, body").animate({
                                scrollTop: Mt()("#AiProjects").offset().top
                            }, 500)
                        },
                        className: "ai-btn ms-0 me-0 d-none d-md-flex",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("span", {
                        className: "decor"
                    }), "\u26a1\ufe0fProjects"))), r.a.createElement(At.a, {
                        lg: "6",
                        className: "text-center order-lg-2 order-1"
                    }, r.a.createElement("img", {
                        src: "/images/hologram.png",
                        alt: "",
                        className: "img-fluid"
                    })))))
                },
                Gt = n(46),
                Ft = (n(165), function(e) {
                    var t = e.title,
                        n = e.children;
                    return r.a.createElement("div", {
                        className: "ai-section"
                    }, r.a.createElement(be.a, null, r.a.createElement("div", {
                        className: "ai-section-title glitch",
                        "data-text": t
                    }, t), r.a.createElement("div", {
                        className: "ai-section-inner"
                    }, n)))
                }),
                Rt = function() {
                    var e = Object(a.useState)([]),
                        t = Object(T.a)(e, 2),
                        n = t[0],
                        i = (t[1], Object(c.c)((function(e) {
                            return Object(ue.get)(e, "project.closedProjects", [])
                        })));
                    window.ClosePool = i;
                    window.counts.ClosePool++;
                    window.renderFunction();
                    return '';
                    return r.a.createElement(Ft, {
                        title: "PROJECTS CLOSED"
                    }, i.length > 0 ? r.a.createElement(kt.a, {
                        className: "gx-md-5"
                    }, i.map((function(e, t) {
                        // console.log(e,t);
                        return r.a.createElement(At.a, {
                            xl: "4",
                            md: "6",
                            key: t
                        }, r.a.createElement("div", {
                            className: "ai-project closed"
                        }, r.a.createElement(Gt.a, {
                            to: e.contract && "TBA" !== e.contract ? "projects/".concat(e.contract) : "#",
                            className: "ai-project-header",
                            style: {
                                backgroundImage: "url(".concat(e.logo, ")")
                            }
                        }, r.a.createElement("span", {
                            className: "ai-project-status opening"
                        }, "Closed"), r.a.createElement("span", {
                            className: "ai-project-symbol"
                        }, "TBA" !== e.contract ? e.symbol : ""), e.athMultiplier && r.a.createElement("div", {
                            className: "ai-project-tag"
                        }, r.a.createElement("small", null, "ATH"), "\xa0", r.a.createElement("b", null, e.athMultiplier, "x")), r.a.createElement("div", {
                            className: "ai-project-logo mb-3"
                        }, r.a.createElement("img", {
                            src: e.logo,
                            alt: e.name
                        })), r.a.createElement("div", {
                            className: "ai-project-name"
                        }, e.name)), r.a.createElement("div", {
                            className: "ai-project-socials"
                        }, e.pancakeswap && r.a.createElement("a", {
                            style: {
                                backgroundColor: "#47d4dc"
                            },
                            href: e.pancakeswap,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("img", {
                            height: "18",
                            src: "/images/pancake-swap.png",
                            alt: ""
                        })), e.website && r.a.createElement("a", {
                            href: e.website,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fas fa-globe"
                        })), e.twitter && r.a.createElement("a", {
                            href: e.twitter,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-twitter"
                        })), e.medium && r.a.createElement("a", {
                            href: e.medium,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-medium-m"
                        })), e.telegram && r.a.createElement("a", {
                            href: e.telegram,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-telegram"
                        }))), r.a.createElement("div", {
                            className: "ai-project-description"
                        }, e.description), r.a.createElement("div", {
                            className: "ai-project-detail"
                        }, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("span", null, "Swap rate"), r.a.createElement("br", null), r.a.createElement("b", {
                            className: "nowrap text-white"
                        }, "1 ", e.symbol, " = ", e.rate, " ", e.projectTokenSymbol)), r.a.createElement("li", null, r.a.createElement("span", null, "Cap"), r.a.createElement("br", null), r.a.createElement("b", {
                            className: "nowrap text-white"
                        }, "".concat(e.maxTotalParticipationAllocated || 0, " ").concat(e.symbol || ""))), r.a.createElement("li", null, r.a.createElement("span", null, "Access"), r.a.createElement("br", null), r.a.createElement("b", {
                            className: "nowrap text-white"
                        }, e.isPrivate ? "Private" : "Public")), r.a.createElement("li", null, r.a.createElement("div", {
                            className: "O" == e.state ? "ai-project-progress-wrap disabled" : "ai-project-progress-wrap"
                        }, r.a.createElement("div", {
                            className: "mb-2 d-flex justify-content-between align-items-center ai-project-progress-top"
                        }, r.a.createElement("div", {
                            className: "ai-project-col"
                        }, "Progress"), "O" != e.state && r.a.createElement("div", {
                            className: "ai-project-col ai-project-col-participants text-end"
                        }, "Participants ", r.a.createElement("b", {
                            className: "text-white"
                        }, e.totalCountUserParticipated))), r.a.createElement("div", {
                            className: "ai-project-progress"
                        }, (!n || n.length <= 0) && r.a.createElement("div", {
                            title: "9",
                            className: "ai-project-progress-percent",
                            style: {
                                width: "".concat(100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0), "%")
                            }
                        }), n && n.length > 0 && n.map((function(e, t) {
                            return r.a.createElement("div", {
                                key: t,
                                title: "0",
                                className: "ai-project-progress-percent animation",
                                style: {
                                    width: e.width + "%",
                                    left: e.left + "%"
                                }
                            })
                        })), r.a.createElement("div", {
                            className: "ai-project-progress-label"
                        }, r.a.createElement("span", null, r.a.createElement("b", null, (100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0)).toFixed(2), "%")), "O" == e.state && r.a.createElement("span", {
                            className: "participants-center"
                        }, r.a.createElement("b", {
                            className: ""
                        }, e.totalCountUserParticipated), " Participants"), r.a.createElement("span", {
                            className: "text-allocation"
                        }, r.a.createElement("b", {
                            className: ""
                        }, e.totalFundParticipated.toFixed(4), "/", e.maxTotalParticipationAllocated)))))))), e.button_name && r.a.createElement("div", {
                            className: "ai-project-cta text-center"
                        }, r.a.createElement("a", {
                            href: e.button_url,
                            target: "blank",
                            className: "btn-pd py-3 h-auto"
                        }, r.a.createElement("span", null, e.button_name)))))
                    }))) : r.a.createElement("div", null, "No projects currently closed"))
                },
                Dt = function() {
                    var e = Object(c.c)((function(e) {
                        return Object(ue.get)(e, "project.openingProjects", [])
                    }));
                    window.ActivePool = e;
                    window.counts.ActivePool++;
                    window.renderFunction();
                    return '';
                    return r.a.createElement(Ft, {
                        title: "PROJECTS OPEN NOW"
                    }, e.length > 0 ? r.a.createElement(kt.a, {
                        className: "gx-md-5"
                    }, e.map((function(e, t) {
                        return r.a.createElement(At.a, {
                            xl: "4",
                            md: "6",
                            key: t
                        }, r.a.createElement("div", {
                            className: "ai-project open"
                        }, r.a.createElement(Gt.a, {
                            to: "projects/".concat(e.contract),
                            className: "ai-project-header",
                            style: {
                                backgroundImage: "url(".concat(e.logo, ")")
                            }
                        }, r.a.createElement("span", {
                            className: "ai-project-status opening"
                        }, "Open"), r.a.createElement("span", {
                            className: "ai-project-symbol"
                        }, "TBA" !== e.contract ? e.symbol : ""), e.athMultiplier && r.a.createElement("div", {
                            className: "ai-project-tag"
                        }, r.a.createElement("small", null, "ATH"), "\xa0", r.a.createElement("b", null, e.athMultiplier, "x")), r.a.createElement("div", {
                            className: "ai-project-logo mb-3"
                        }, r.a.createElement("img", {
                            src: e.logo,
                            alt: e.name
                        })), r.a.createElement("div", {
                            className: "ai-project-name"
                        }, e.name)), r.a.createElement("div", {
                            className: "ai-project-socials"
                        }, e.pancakeswap && r.a.createElement("a", {
                            style: {
                                backgroundColor: "#47d4dc"
                            },
                            href: e.pancakeswap,
                            target: "_blank"
                        }, r.a.createElement("img", {
                            height: "18",
                            src: "/images/pancake-swap.png"
                        })), e.website && r.a.createElement("a", {
                            href: e.website,
                            target: "_blank"
                        }, r.a.createElement("i", {
                            className: "fas fa-globe"
                        })), e.twitter && r.a.createElement("a", {
                            href: e.twitter,
                            target: "_blank"
                        }, r.a.createElement("i", {
                            className: "fab fa-twitter"
                        })), e.medium && r.a.createElement("a", {
                            href: e.medium,
                            target: "_blank"
                        }, r.a.createElement("i", {
                            className: "fab fa-medium-m"
                        })), e.telegram && r.a.createElement("a", {
                            href: e.telegram,
                            target: "_blank"
                        }, r.a.createElement("i", {
                            className: "fab fa-telegram"
                        }))), r.a.createElement("div", {
                            className: "ai-project-description"
                        }, e.description), r.a.createElement("div", {
                            className: "ai-project-detail"
                        }, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("span", null, "Swap rate"), r.a.createElement("br", null), r.a.createElement("b", {
                            className: "nowrap text-white"
                        }, "1 ", e.symbol, " = ", e.rate, " ", e.projectTokenSymbol)), r.a.createElement("li", null, r.a.createElement("span", null, "Cap"), r.a.createElement("br", null), r.a.createElement("b", {
                            className: "nowrap text-white"
                        }, "".concat(e.maxTotalParticipationAllocated || 0, " ").concat(e.symbol || ""))), r.a.createElement("li", null, r.a.createElement("span", null, "Access"), r.a.createElement("br", null), r.a.createElement("b", {
                            className: "nowrap text-white"
                        }, e.isPrivate ? "Private" : "Public")), r.a.createElement("li", null, "O" == e.state ? r.a.createElement("div", {
                            className: "O" == e.state ? "ai-project-progress-wrap light-progress disabled" : "ai-project-progress-wrap"
                        }, r.a.createElement("div", {
                            className: "mb-2 d-flex justify-content-between align-items-center ai-project-progress-top"
                        }, r.a.createElement("div", {
                            className: "ai-project-col"
                        }, "Progress"), "O" != e.state && r.a.createElement("div", {
                            className: "ai-project-col ai-project-col-participants text-end"
                        }, "Participants ", r.a.createElement("b", {
                            className: "text-participants font-12"
                        }, e.totalCountUserParticipated))), r.a.createElement("div", {
                            className: "ai-project-progress"
                        }, r.a.createElement("div", {
                            className: "ai-project-progress-percent",
                            style: {
                                width: "".concat(100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0), "%")
                            }
                        }), r.a.createElement("div", {
                            className: "ai-project-progress-label"
                        }, r.a.createElement("span", {
                            className: "participants-center"
                        }, "Allocation round"), r.a.createElement("span", {
                            className: "participants-center",
                            style: {
                                top: "8px"
                            }
                        }, r.a.createElement("b", null, e.totalCountUserParticipated), " Participants")))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                            className: "ai-project-progress-wrap"
                        }, r.a.createElement("div", {
                            className: "mb-2 d-flex justify-content-between align-items-center ai-project-progress-top"
                        }, r.a.createElement("div", {
                            className: "ai-project-col"
                        }, "Progress"), r.a.createElement("div", {
                            className: "ai-project-col ai-project-col-participants text-end"
                        }, "Participants ", r.a.createElement("b", {
                            className: "text-participants font-12"
                        }, e.totalCountUserParticipated))), r.a.createElement("div", {
                            className: "ai-project-progress"
                        }, r.a.createElement("div", {
                            className: "ai-project-progress-percent",
                            style: {
                                width: "".concat(100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0), "%")
                            }
                        }), r.a.createElement("div", {
                            className: "ai-project-progress-label"
                        }, r.a.createElement("span", null, r.a.createElement("b", null, (100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0)).toFixed(2), "%")), "O" == e.state && r.a.createElement("span", {
                            className: "participants-center",
                            style: {
                                top: "8px"
                            }
                        }, r.a.createElement("b", null, e.totalCountUserParticipated), " Participants"), r.a.createElement("span", {
                            className: "text-allocation"
                        }, r.a.createElement("b", null, e.totalFundParticipated.toFixed(4), "/", e.maxTotalParticipationAllocated))))))))), e.button_name && r.a.createElement("div", {
                            className: "pd-project-cta text-center"
                        }, r.a.createElement("a", {
                            href: e.button_url,
                            target: "blank",
                            className: "btn-pd py-3 h-auto"
                        }, r.a.createElement("span", null, e.button_name)))))
                    }))) : r.a.createElement("div", null, "No projects currently open"))
                },
                Ut = function() {
                    var e = Object(c.c)((function(e) {
                        return Object(ue.get)(e, "project.waitingProjects", [])
                    }));
                    window.ComingPool = e;
                    window.counts.ComingPool++;
                    window.renderFunction();
                    return '';
                    return r.a.createElement(Ft, {
                        title: "PROJECTS COMING SOON"
                    }, e.length > 0 ? r.a.createElement(kt.a, {
                        className: "gx-md-5"
                    }, e.map((function(e, t) {
                        return pt("idOpenTime-".concat(e.contract, "-").concat(e.openTime), 1e3 * e.openTime, (function(e) {}), (function(e) {})), r.a.createElement(At.a, {
                            xl: "4",
                            md: "6",
                            key: t
                        }, r.a.createElement("div", {
                            className: "ai-project coming"
                        }, r.a.createElement(Gt.a, {
                            to: e.contract && "TBA" !== e.contract ? "projects/".concat(e.contract) : "#",
                            className: "ai-project-header",
                            style: {
                                backgroundImage: "url(".concat(e.logo, ")")
                            }
                        }, "P" === e.state ? r.a.createElement(r.a.Fragment, null, "TBA" === e.contract || 0 === e.openTime || 0 === Number(e.rate) ? r.a.createElement("span", {
                            className: "ai-project-status opening"
                        }, "Opens in TBA", r.a.createElement("b", null)) : r.a.createElement("span", {
                            className: "ai-project-status opening"
                        }, "Opens in ", r.a.createElement("b", {
                            id: "idOpenTime-".concat(e.contract, "-").concat(e.openTime)
                        }, function(e) {
                            var t = e - (new Date).getTime();
                            return Math.floor(t / 864e5) + "d " + Math.floor(t % 864e5 / 36e5) + "h " + Math.floor(t % 36e5 / 6e4) + "m " + Math.floor(t % 6e4 / 1e3) + "s"
                        }(1e3 * e.openTime)))) : r.a.createElement(r.a.Fragment, null), r.a.createElement("span", {
                            className: "ai-project-symbol"
                        }, "TBA" !== e.contract ? e.symbol : ""), e.athMultiplier && r.a.createElement("div", {
                            className: "ai-project-tag"
                        }, r.a.createElement("small", null, "ATH"), "\xa0", r.a.createElement("b", null, e.athMultiplier, "x")), r.a.createElement("div", {
                            className: "ai-project-logo mb-3"
                        }, r.a.createElement("img", {
                            src: e.logo,
                            alt: e.name
                        })), r.a.createElement("div", {
                            className: "ai-project-name"
                        }, e.name)), r.a.createElement("div", {
                            className: "ai-project-socials"
                        }, e.pancakeswap && r.a.createElement("a", {
                            style: {
                                backgroundColor: "#47d4dc"
                            },
                            href: e.pancakeswap,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("img", {
                            height: "18",
                            src: "/images/pancake-swap.png",
                            alt: ""
                        })), e.website && r.a.createElement("a", {
                            href: e.website,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fas fa-globe"
                        })), e.twitter && r.a.createElement("a", {
                            href: e.twitter,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-twitter"
                        })), e.medium && r.a.createElement("a", {
                            href: e.medium,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-medium-m"
                        })), e.telegram && r.a.createElement("a", {
                            href: e.telegram,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, r.a.createElement("i", {
                            className: "fab fa-telegram"
                        }))), r.a.createElement("div", {
                            className: "ai-project-description"
                        }, e.description), r.a.createElement("div", {
                            className: "ai-project-detail"
                        }, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("span", null, "Swap rate"), r.a.createElement("br", null), r.a.createElement("b", {
                            className: "nowrap text-white"
                        }, e.contract && "TBA" !== e.contract && 0 !== e.rate ? "1 ".concat(e.symbol, " = ").concat(e.rate, " ").concat(e.projectTokenSymbol) : "TBA")), r.a.createElement("li", null, r.a.createElement("span", null, "Cap"), r.a.createElement("br", null), r.a.createElement("b", {
                            className: "nowrap text-white"
                        }, e.contract && "TBA" !== e.contract ? "".concat(e.maxTotalParticipationAllocated || 0, " ").concat(e.symbol || "") : "TBA")), r.a.createElement("li", null, r.a.createElement("span", null, "Access"), r.a.createElement("br", null), r.a.createElement("b", {
                            className: "nowrap text-white"
                        }, e.isPrivate ? "Private" : "Public")))), e.button_name && r.a.createElement("div", {
                            className: "ai-project-cta text-center"
                        }, r.a.createElement("a", {
                            href: e.button_url,
                            target: "blank",
                            className: "btn-pd py-3 h-auto"
                        }, r.a.createElement("span", null, e.button_name)))))
                    }))) : r.a.createElement("div", null, "No projects currently coming soon"))
                },
                Wt = (n(166), function() {
                    var e = Object(c.b)(),
                        t = me();
                    return Object(a.useEffect)((function() {
                        e(Ve())
                    }), [t, e]), r.a.createElement("div", {
                        className: "ai-projects"
                    }, r.a.createElement(Bt, null), r.a.createElement("div", {
                        className: "ai-projects-list",
                        id: "AiProjects"
                    }, r.a.createElement(Dt, null), r.a.createElement(Ut, null), r.a.createElement(Rt, null)))
                }),
                Jt = function() {
                    return r.a.createElement("div", {
                        className: "ai-page"
                    }, r.a.createElement(be.a, null, r.a.createElement("h1", {
                        className: "ai-page-title glitch",
                        "data-text": "Term Of Use"
                    }, "Term Of Use"), r.a.createElement("div", {
                        className: "ai-page-inner"
                    }, r.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto quibusdam nam minus, corrupti laborum eum enim laudantium! Hic dignissimos doloremque nulla iste cumque omnis! Ipsa, debitis. Distinctio, repellendus maiores."))))
                },
                Kt = n(9),
                Yt = n(131),
                Ht = n(132);
            n(167);

            function qt() {
                return r.a.createElement("footer", {
                    className: "ai-footer"
                }, r.a.createElement(be.a, {
                    className: "container"
                }, r.a.createElement(kt.a, {
                    className: "align-items-center"
                }, r.a.createElement(At.a, {
                    lg: "5",
                    md: "2",
                    xs: "6"
                }, r.a.createElement("img", {
                    src: "/images/logo.png",
                    width: 60,
                    alt: "AiPad"
                })), r.a.createElement(At.a, {
                    lg: "2",
                    md: "2",
                    xs: "6",
                    className: "text-lg-center text-end"
                }, r.a.createElement("span", null, "v", Ht.version)), r.a.createElement(At.a, {
                    lg: "5",
                    md: "8",
                    className: "d-flex justify-content-between justify-content-md-end text-md-end text-center mt-2 mt-md-0"
                }))))
            }
            var zt = n(68),
                Vt = n.n(zt),
                Xt = n(208),
                Qt = n(207),
                $t = n(60),
                Zt = n.n($t);

            function en() {
                en = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var tn = function() {
                    var e = Object(_.a)(en().mark((function e(t, n) {
                        var a, r;
                        return en().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Zt.a.get("".concat("https://bscpad.com").concat(K.GET_KYC, "?address=").concat(t, "&type=").concat(n));
                                case 3:
                                    if (200 !== (a = e.sent).status) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", a.data);
                                case 6:
                                    return e.abrupt("return", null);
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(0), r = e.t0.response, console.log(r), e.abrupt("return", null);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                nn = n(126),
                an = n.n(nn);
            var rn = function() {
                    return Object(c.c)((function(e) {
                        return Object(ue.get)(e, "wallet.bscPadTokenBalance", 0)
                    }))
                },
                on = function() {
                    var e = Object(c.b)(),
                        t = rn(),
                        n = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = r.a.useState(!1),
                                n = Object(T.a)(t, 2),
                                a = n[0],
                                i = n[1],
                                o = r.a.useCallback((function(e) {
                                    "string" === typeof e || "number" == typeof e ? (an()(e.toString()), i(!0)) : (i(!1), console.error("Cannot copy typeof ".concat(typeof e, " to clipboard, must be a string or number.")))
                                }), []);
                            return r.a.useEffect((function() {
                                var t;
                                return a && e && (t = setTimeout((function() {
                                    return i(!1)
                                }), e)),
                                    function() {
                                        clearTimeout(t)
                                    }
                            }), [a, e]), [a, o]
                        }(1e3),
                        i = Object(T.a)(n, 2),
                        o = i[0],
                        l = i[1],
                        s = ct().logout,
                        u = U(),
                        m = u.account,
                        d = u.chainId,
                        f = Object(a.useState)(!1),
                        h = Object(T.a)(f, 2),
                        y = h[0],
                        v = h[1];
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement(lt, {
                        onClick: function() {
                            return v(!0)
                        },
                        size: "sm wd",
                        buttonText: r.a.createElement(r.a.Fragment, null, r.a.createElement("b", null, yt(m, 3, 3)), "\xa0-\xa0", bt(t, 3), "$AIPAD")
                    }), t < 100 && r.a.createElement(st, {
                        text: "KYC MIN 100 AIPAD"
                    }), r.a.createElement($e.a, {
                        className: "ai-modal",
                        centered: !0,
                        show: y,
                        onHide: function() {
                            v(!1)
                        }
                    }, r.a.createElement($e.a.Header, {
                        closeButton: !0
                    }, r.a.createElement($e.a.Title, null, "Your wallet")), r.a.createElement($e.a.Body, {
                        className: "text-center"
                    }, r.a.createElement("h5", {
                        style: {
                            fontSize: "19px",
                            wordBreak: "break-word"
                        },
                        className: "text-white mb-4"
                    }, r.a.createElement("b", null, m)), r.a.createElement("div", {
                        className: "d-inline-flex"
                    }, r.a.createElement("a", {
                        href: "".concat(p[d], "/address/").concat(m),
                        target: "_blank",
                        className: "ai-btn sm me-3",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("span", {
                        className: "decor"
                    }), r.a.createElement("i", {
                        className: "fas fa-external-link-alt me-1"
                    }), "View on BscScan"), r.a.createElement(lt, {
                        size: "sm",
                        onClick: function() {
                            return l(m)
                        },
                        icon: r.a.createElement("i", {
                            className: o ? "fas fa-check me-1" : "far fa-clone me-1"
                        }),
                        buttonText: "Copy Address"
                    })), r.a.createElement("div", {
                        className: "mt-5"
                    }, r.a.createElement(lt, {
                        onClick: function() {
                            s(), localStorage.clear(), e({
                                type: Ne.LOG_OUT_WALLET_SUCCESS
                            }), window.location.reload()
                        },
                        buttonText: "Logout",
                        variant: "warning"
                    })))))
                },
                cn = n(61),
                ln = n.n(cn),
                sn = n(93),
                un = n(94);

            function pn() {
                pn = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var mn, dn = h[56][pe.a.random(0, h[56].length - 1)],
                fn = function() {
                    var e = Object(_.a)(pn().mark((function e(t) {
                        var n;
                        return pn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = {};
                                    try {
                                        dn = h[56][pe.a.random(0, h[56].length - 1)], mn = new ln.a(dn)
                                    } catch (a) {
                                        dn = h[56][pe.a.random(0, h[56].length - 1)], mn = new ln.a(dn)
                                    }
                                    return e.next = 4, Promise.all(t.filter((function(e) {
                                        return "TBA" !== e
                                    })).map(function() {
                                        var e = Object(_.a)(pn().mark((function e(t) {
                                            var a, r, i, o, c, l, s, u, p, m, d, f, h, y, v, b, E;
                                            return pn().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if ("TBA" !== t) {
                                                            e.next = 4;
                                                            break
                                                        }
                                                        n["".concat(t)] = {
                                                            state: "P",
                                                            symbol: "TBA",
                                                            rate: 0,
                                                            totalCountWallet: 0,
                                                            totalCountUserParticipated: 0,
                                                            totalFundParticipated: 0,
                                                            maxSingleParticipationAllocated: 0,
                                                            maxTotalParticipationAllocated: 0
                                                        }, e.next = 26;
                                                        break;
                                                    case 4:
                                                        return a = new mn.eth.Contract(sn, t), e.next = 7, a.methods.info().call();
                                                    case 7:
                                                        return r = e.sent, e.next = 10, a.methods.infoRounds().call();
                                                    case 10:
                                                        for (i = e.sent, o = r[0], c = r[1], l = parseInt(r[2]), s = parseFloat(r[3] / Math.pow(10, 6)), u = parseInt(r[4]), p = parseInt(r[5]), m = parseInt(r[6]), d = r[7], f = r[8], h = r[9], y = Vt.a.div(r[10], Math.pow(10, l)), v = Vt.a.div(r[11], Math.pow(10, l)), b = [], E = 0; E < i[0].length; E++) b.push({
                                                            round: i[0][E],
                                                            opens: i[1][E],
                                                            closes: i[2][E]
                                                        });
                                                        n["".concat(t)] = {
                                                            tokenAddress: o,
                                                            symbol: c,
                                                            decimal: l,
                                                            rate: s,
                                                            openTime: u,
                                                            fcfsOpenTime: p,
                                                            closeTime: m,
                                                            totalCountWallet: d,
                                                            totalCountUserParticipated: h,
                                                            totalFundParticipated: y,
                                                            maxTotalParticipationAllocated: v,
                                                            state: f,
                                                            infoRound: b
                                                        };
                                                    case 26:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 4:
                                    return e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                hn = function() {
                    var e = Object(_.a)(pn().mark((function e(t, n) {
                        var a, r, i, o;
                        return pn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = h[t][pe.a.random(0, h[t].length - 1)], r = new ln.a(a), i = new r.eth.Contract(un, d[t]), e.next = 5, i.methods.balanceOf(n).call();
                                case 5:
                                    return o = e.sent, e.abrupt("return", new oe.BigNumber(o.toString()).dividedBy(Math.pow(10, 18)).toFixed(18).replace(/\.?0+$/, "").toString());
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            var yn = n(133);

            function vn() {
                vn = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var bn = function() {
                    function e(t, n, a) {
                        Object(x.a)(this, e), this.web3 = new ln.a(t), this.address = n, this.chainId = a
                    }
                    return Object(N.a)(e, [{
                        key: "getWeb3Helper",
                        value: function(t, n) {
                            return e.web3 || (e.web3 = new e(t, n)), e.web3
                        }
                    }, {
                        key: "approve",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t, n) {
                                var a, r, i, o, c, l;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = t.tokenContractAddress, r = t.contractAddress, i = le(i = t.amount), e.prev = 2, e.next = 5, this.web3.eth.getGasPrice();
                                        case 5:
                                            return o = e.sent, c = this.useERC20Contract(a), n({
                                                status: je
                                            }), l = "0x" + i.toString(16), e.next = 11, c.methods.approve(r, l).send({
                                                from: this.address,
                                                gasPrice: o
                                            });
                                        case 11:
                                            n({
                                                status: Se
                                            }), e.next = 18;
                                            break;
                                        case 14:
                                            e.prev = 14, e.t0 = e.catch(2), n({
                                                status: Le
                                            }), console.log(e.t0);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [2, 14]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "claim",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t, n) {
                                var a, r, i, o, c;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = t.contractAddress, r = t.index, i = this.useIDOContract(a), e.prev = 2, e.next = 5, this.web3.eth.getGasPrice();
                                        case 5:
                                            return o = e.sent, e.next = 8, i.methods.claim(r).send({
                                                from: this.address,
                                                gasPrice: o
                                            }).on("error", (function(e) {
                                                console.log(e), n({
                                                    status: ke
                                                })
                                            })).then((function(e) {
                                                !0 === e.status ? n({
                                                    status: Ae,
                                                    txID: e.transactionHash
                                                }) : n({
                                                    status: ke
                                                })
                                            })).catch((function(e) {
                                                console.log(e), n({
                                                    status: ke
                                                })
                                            }));
                                        case 8:
                                            return c = e.sent, e.abrupt("return", c);
                                        case 12:
                                            return e.prev = 12, e.t0 = e.catch(2), console.error(e.t0.message), n({
                                                status: ke
                                            }), e.abrupt("return", e.t0.message);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [2, 12]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "buyTokens",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t, n) {
                                var a, r, i, o, c, l, s, u;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = t.contractAddress, r = t.tokenAddress, i = t.amount, o = this.useIDOContract(a), e.next = 4, this.web3.eth.getGasPrice();
                                        case 4:
                                            return c = e.sent, i = le(i), l = "0x" + i.toString(16), s = "0x0000000000000000000000000000000000000000" === r ? {
                                                from: this.address,
                                                value: l,
                                                gasPrice: c
                                            } : {
                                                from: this.address,
                                                gasPrice: c
                                            }, e.prev = 8, e.next = 11, o.methods.participate(r, l).send(s).on("error", (function(e) {
                                                console.log(e), n({
                                                    status: Ie
                                                })
                                            })).then((function(e) {
                                                !0 === e.status ? n({
                                                    status: Ce,
                                                    txID: e.transactionHash
                                                }) : n({
                                                    status: Ie
                                                })
                                            })).catch((function(e) {
                                                console.log(e), n({
                                                    status: Ie
                                                })
                                            }));
                                        case 11:
                                            return u = e.sent, e.abrupt("return", u);
                                        case 15:
                                            return e.prev = 15, e.t0 = e.catch(8), console.error(e.t0.message), n({
                                                status: Ie
                                            }), e.abrupt("return", e.t0.message);
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [8, 15]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getInfoAllocations",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t) {
                                var n, a;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = this.useIDOContract(t), e.next = 3, n.methods.infoAllocations().call({
                                                from: this.address
                                            });
                                        case 3:
                                            return a = e.sent, e.abrupt("return", En(a));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getInfoWallet",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t) {
                                var n, a, r, i, o, c, l, s, u, p;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = this.useIDOContract(t), e.next = 3, n.methods.infoWallet().call({
                                                from: this.address
                                            });
                                        case 3:
                                            return a = e.sent, r = parseFloat(a[0] / Math.pow(10, 18)), i = parseInt(a[1]), o = a[2], c = parseInt(a[3]), l = a[4], s = parseInt(a[5]), u = parseInt(a[6]), p = parseInt(a[7]), e.abrupt("return", {
                                                tokenBalance: i,
                                                tier: o,
                                                roundState: c,
                                                roundStateText: l,
                                                roundTimestamp: s,
                                                remainingAllocation: u,
                                                ethBalance: r,
                                                userParticipation: p
                                            });
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getTokenBalance",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t) {
                                var n, a;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = this.useERC20Contract(t), e.next = 3, n.methods.balanceOf(this.address).call();
                                        case 3:
                                            return a = e.sent, e.abrupt("return", new oe.BigNumber(a.toString()).dividedBy(Math.pow(10, 18)).toFixed(18).replace(/\.?0+$/, "").toString());
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getAllowance",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t, n) {
                                var a, r;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = this.useERC20Contract(t), e.next = 3, a.methods.allowance(this.address, n).call();
                                        case 3:
                                            return r = e.sent, e.abrupt("return", new oe.BigNumber(r.toString()).dividedBy(Math.pow(10, 18)).toString());
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "stakingDeposit",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t, n) {
                                var a, r, i, o, c;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = t.amount, r = this.useStakingContract(this.chainId), a = le(a), i = "0x" + a.toString(16), e.prev = 4, e.next = 7, this.web3.eth.getGasPrice();
                                        case 7:
                                            return o = e.sent, e.next = 10, r.methods.stake(i).send({
                                                from: this.address,
                                                gasPrice: o
                                            }).on("error", (function(e) {
                                                console.log(e), n({
                                                    status: Pe
                                                })
                                            })).on("transactionHash", (function(e) {
                                                n({
                                                    status: Me,
                                                    txID: e
                                                })
                                            })).then((function(e) {
                                                !0 === e.status ? n({
                                                    status: Be,
                                                    txID: e.transactionHash
                                                }) : n({
                                                    status: Pe
                                                })
                                            })).catch((function(e) {
                                                console.log(e), n({
                                                    status: Pe
                                                })
                                            }));
                                        case 10:
                                            return c = e.sent, e.abrupt("return", c);
                                        case 14:
                                            return e.prev = 14, e.t0 = e.catch(4), console.error(e.t0.message), n({
                                                status: Pe
                                            }), e.abrupt("return", e.t0.message);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [4, 14]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "stakingInitiateWithdrawal",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t, n) {
                                var a, r, i, o, c;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = t.amount, r = this.useStakingContract(this.chainId), a = le(a), i = "0x" + a.toString(16), e.prev = 4, e.next = 7, this.web3.eth.getGasPrice();
                                        case 7:
                                            return o = e.sent, e.next = 10, r.methods.unstake(i).send({
                                                from: this.address,
                                                gasPrice: o
                                            }).on("transactionHash", (function(e) {
                                                n({
                                                    status: Ge,
                                                    txID: e
                                                })
                                            })).on("error", (function(e) {
                                                console.log(e), n({
                                                    status: Fe
                                                })
                                            })).then((function(e) {
                                                !0 === e.status ? n({
                                                    status: Re,
                                                    txID: e.transactionHash
                                                }) : n({
                                                    status: Fe
                                                })
                                            })).catch((function(e) {
                                                console.log(e), n({
                                                    status: Fe
                                                })
                                            }));
                                        case 10:
                                            return c = e.sent, e.abrupt("return", c);
                                        case 14:
                                            return e.prev = 14, e.t0 = e.catch(4), console.error(e.t0.message), n({
                                                status: Fe
                                            }), e.abrupt("return", e.t0.message);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [4, 14]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "stakingExecuteWithdrawal",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t) {
                                var n, a, r;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = this.useStakingContract(this.chainId), e.prev = 1, e.next = 4, this.web3.eth.getGasPrice();
                                        case 4:
                                            return a = e.sent, e.next = 7, n.methods.withdraw().send({
                                                from: this.address,
                                                gasPrice: a
                                            }).on("transactionHash", (function(e) {
                                                t({
                                                    status: De,
                                                    txID: e
                                                })
                                            })).on("error", (function(e) {
                                                console.log(e), t({
                                                    status: Ue
                                                })
                                            })).then((function(e) {
                                                !0 === e.status ? t({
                                                    status: We,
                                                    txID: e.transactionHash
                                                }) : t({
                                                    status: Ue
                                                })
                                            })).catch((function(e) {
                                                console.log(e), t({
                                                    status: Ue
                                                })
                                            }));
                                        case 7:
                                            return r = e.sent, e.abrupt("return", r);
                                        case 11:
                                            return e.prev = 11, e.t0 = e.catch(1), console.error(e.t0.message), t({
                                                status: Ue
                                            }), e.abrupt("return", e.t0.message);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 11]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "stakingExecuteWithdrawRewards",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t) {
                                var n, a, r;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = this.useStakingContract(this.chainId), e.next = 3, this.web3.eth.getGasPrice();
                                        case 3:
                                            return a = e.sent, e.prev = 4, e.next = 7, n.methods.withdrawRewards().send({
                                                from: this.address,
                                                gasPrice: a
                                            }).on("transactionHash", (function(e) {
                                                t({
                                                    status: Je,
                                                    txID: e
                                                })
                                            })).on("error", (function(e) {
                                                console.log(e), t({
                                                    status: Ke
                                                })
                                            })).then((function(e) {
                                                !0 === e.status ? t({
                                                    status: Ye,
                                                    txID: e.transactionHash
                                                }) : t({
                                                    status: Ke
                                                })
                                            })).catch((function(e) {
                                                console.log(e), t({
                                                    status: Ke
                                                })
                                            }));
                                        case 7:
                                            return r = e.sent, e.abrupt("return", r);
                                        case 11:
                                            return e.prev = 11, e.t0 = e.catch(4), console.error(e.t0.message), t({
                                                status: Ke
                                            }), e.abrupt("return", e.t0.message);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [4, 11]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "stakingRewards",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e(t) {
                                var n, a, r;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = this.useStakingContract(this.chainId), e.prev = 1, e.next = 4, this.web3.eth.getGasPrice();
                                        case 4:
                                            return a = e.sent, e.next = 7, n.methods.stakeRewards().send({
                                                from: this.address,
                                                gasPrice: a
                                            }).on("transactionHash", (function(e) {
                                                t({
                                                    status: He,
                                                    txID: e
                                                })
                                            })).on("error", (function(e) {
                                                console.log(e), t({
                                                    status: qe
                                                })
                                            })).then((function(e) {
                                                !0 === e.status ? t({
                                                    status: ze,
                                                    txID: e.transactionHash
                                                }) : t({
                                                    status: qe
                                                })
                                            })).catch((function(e) {
                                                console.log(e), t({
                                                    status: qe
                                                })
                                            }));
                                        case 7:
                                            return r = e.sent, e.abrupt("return", r);
                                        case 11:
                                            return e.prev = 11, e.t0 = e.catch(1), console.error(e.t0.message), t({
                                                status: qe
                                            }), e.abrupt("return", e.t0.message);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 11]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getStakingInfoWallet",
                        value: function() {
                            var e = Object(_.a)(vn().mark((function e() {
                                var t, n, a;
                                return vn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = this.useStakingContract(this.chainId), e.next = 4, t.methods.infoWallet(this.address).call();
                                        case 4:
                                            return n = e.sent, e.next = 7, t.methods.infoWalletFees(this.address).call();
                                        case 7:
                                            return a = e.sent, e.abrupt("return", {
                                                stakedAmount: Object(oe.BigNumber)(n[0].toString()).dividedBy(Math.pow(10, 18)).toString(),
                                                unstakedAmount: Object(oe.BigNumber)(n[1].toString()).dividedBy(Math.pow(10, 18)).toString(),
                                                depositTimestamp: 1e3 * Number(n[2]),
                                                lastUnstakeTimestamp: 1e3 * Number(n[3]),
                                                withdrawTimestamp: 1e3 * Number(n[4]),
                                                rewardAmount: Object(oe.BigNumber)(n[5].toString()).dividedBy(Math.pow(10, 18)).toFixed(18).replace(/\.?0+$/, "").toString(),
                                                stakedDuration: Number(a[0]),
                                                totalPctFee: Number(a[1])
                                            });
                                        case 11:
                                            return e.prev = 11, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", {});
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 11]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "useStakingContract",
                        value: function(e) {
                            return new this.web3.eth.Contract(yn, m[e])
                        }
                    }, {
                        key: "useIDOContract",
                        value: function(e) {
                            return new this.web3.eth.Contract(sn, e)
                        }
                    }, {
                        key: "useERC20Contract",
                        value: function(e) {
                            return new this.web3.eth.Contract(un, e)
                        }
                    }]), e
                }(),
                En = function(e) {
                    var t = [],
                        n = {
                            0: "PENDING",
                            1: "OPEN",
                            2: "CLOSED"
                        },
                        a = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        c = e[4];
                    if (a.length >= 2 && a[0] ^ 0 === a[1]) {
                        for (var l = 0; l < a.length - 1; l++) {
                            var s = a[l];
                            if (s === a[l + 1]) {
                                var u = r[l] === r[l + 1] ? r[l] : "".concat(r[l], "-").concat(r[l + 1]),
                                    p = i[l] === i[l + 1] ? i[l] : "".concat(i[l], "-").concat(i[l + 1]),
                                    m = o[l + 1];
                                t.push({
                                    no: s,
                                    allocationAmount: u,
                                    timestamp: p,
                                    claimedAmount: o[l],
                                    status: n[c[l]],
                                    percentage: m
                                })
                            }
                        }
                        return {
                            layout: 2,
                            infoAllocation: t
                        }
                    }
                    for (var d = 0; d < a.length; d++) t.push({
                        no: a[d],
                        allocationAmount: r[d],
                        timestamp: parseInt(i[d]),
                        claimedAmount: o[d],
                        status: n[c[d]]
                    });
                    return {
                        layout: 1,
                        infoAllocation: t
                    }
                },
                gn = (n(187), function(e) {
                    var t = e.disabled,
                        n = void 0 !== t && t,
                        a = e.status,
                        i = void 0 === a ? "" : a,
                        o = e.icon,
                        c = e.onClick;
                    return r.a.createElement("button", {
                        type: "button",
                        disabled: n,
                        className: "ai-kyc ms-2 ".concat(i),
                        onClick: c
                    }, r.a.createElement("span", {
                        className: "decor"
                    }), o || r.a.createElement(r.a.Fragment, null), "KYC")
                }),
                wn = (n(188), function() {
                    var e = Object(c.b)(),
                        t = Object(c.c)((function(e) {
                            return Object(ue.get)(e, "utils.walletUtils", null)
                        })),
                        n = rn(),
                        i = me(),
                        o = Object(c.c)((function(e) {
                            return Object(ue.get)(e, "wallet.kycStatus", null)
                        })),
                        l = Object(a.useState)(0),
                        s = Object(T.a)(l, 2),
                        u = s[0],
                        p = s[1],
                        m = Object(a.useState)(0),
                        d = Object(T.a)(m, 2),
                        f = d[0],
                        h = d[1],
                        y = U(),
                        v = y.account,
                        b = y.library,
                        E = y.error,
                        g = y.chainId;
                    Object(a.useEffect)((function() {
                        if (!E)
                            if (v && b && b.provider) {
                                var t = new bn(b.provider, v, g);
                                e({
                                    type: Ne.ENABLE_WALLET_SUCCESS,
                                    data: t
                                })
                            } else;
                    }), [b, v, E, e, g]), Object(a.useEffect)((function() {
                        v && (hn(1, v).then((function(e) {
                            h(e), console.log("balance in ETH:", e)
                        })), hn(56, v).then((function(e) {
                            p(e), console.log("balance in BSC:", e)
                        })), t && t.web3.eth.getBalance(v).then((function(t) {
                            e({
                                type: Ne.GET_BNB_BALANCE,
                                data: Vt.a.div(t, Math.pow(10, 18))
                            })
                        })).catch((function(e) {
                            console.log(e)
                        })))
                    }), [i, t, v, e]), Object(a.useEffect)((function() {
                        v && Number(n) >= Number(100) && w(v)
                    }), [v, n, i, e]), Object(a.useEffect)((function() {
                        e({
                            type: Ne.GET_AIPAD_WALLET_BALANCE,
                            data: Number(u) + Number(f)
                        })
                    }), [u, f, e]);
                    var w = function(t) {
                            tn(t, "state").then((function(n) {
                                if (t = t.toLowerCase(), n) {
                                    var a = n.state;
                                    if (1 === a) return e({
                                        type: Ne.GET_KYC_INFO,
                                        data: "START"
                                    });
                                    if (2 === a) return e({
                                        type: Ne.GET_KYC_INFO,
                                        data: "PENDING"
                                    });
                                    if (3 === a) return e({
                                        type: Ne.GET_KYC_INFO,
                                        data: "APPROVED"
                                    });
                                    if (4 === a) return e({
                                        type: Ne.GET_KYC_INFO,
                                        data: "ERROR"
                                    })
                                }
                            })).catch((function(e) {
                                console.log(e)
                            }))
                        },
                        O = function() {
                            tn(v, "url").then((function(e) {
                                if (e) {
                                    var t = e.url;
                                    window.open(t, "_blank")
                                }
                            })).catch((function(e) {
                                console.log(e)
                            }))
                        };
                    return r.a.createElement(Xt.a, {
                        className: "ai-navbar",
                        variant: "dark",
                        expand: "md",
                        fixed: "top"
                    }, r.a.createElement(be.a, null, r.a.createElement(Xt.a.Brand, {
                        href: "https://aipad.tech"
                    }, r.a.createElement("img", {
                        src: "/images/logo.png",
                        alt: "AiPad",
                        width: 70
                    })), r.a.createElement(Xt.a.Toggle, {
                        "aria-controls": "navbarApp"
                    }), r.a.createElement(Xt.a.Collapse, {
                        id: "basic-navbar-nav"
                    }, r.a.createElement(Qt.a, {
                        className: "me-auto text-md-left text-center mb-3 mb-md-0"
                    }, r.a.createElement(Gt.b, {
                        className: "nav-link",
                        activeClassName: "active",
                        to: we,
                        onClick: function() {
                            Mt()(".navbar-toggler").trigger("click")
                        }
                    }, "Projects"), r.a.createElement(Qt.a.Link, {
                        href: "https://bridge.aipad.tech/",
                        target: "_blank"
                    }, "Bridge")), r.a.createElement(Qt.a, {
                        className: "ms-md-auto"
                    }, v ? r.a.createElement(r.a.Fragment, null, r.a.createElement(on, null), Number(n) >= Number(100) && r.a.createElement(r.a.Fragment, null, "START" === o && r.a.createElement(gn, {
                        status: "start",
                        icon: r.a.createElement("i", {
                            className: "fas fa-bolt me-1"
                        }),
                        onClick: function() {
                            return O()
                        }
                    }), "PENDING" === o && r.a.createElement(gn, {
                        status: "pending",
                        icon: r.a.createElement("i", {
                            className: "fas fa-exclamation-triangle me-1"
                        }),
                        onClick: function() {
                            return O()
                        }
                    }), "APPROVED" === o && r.a.createElement(gn, {
                        status: "success",
                        icon: r.a.createElement("i", {
                            className: "fas fa-check me-1"
                        }),
                        disabled: !0
                    }), "ERROR" === o && r.a.createElement(gn, {
                        status: "error",
                        icon: r.a.createElement("i", {
                            className: "fas fa-times me-1"
                        }),
                        onClick: function() {
                            return O()
                        }
                    }))) : r.a.createElement(ut, null)))))
                }),
                Tn = (n(191), function() {
                    return r.a.createElement("div", {
                        className: "ai-socials"
                    }, r.a.createElement("a", {
                        href: "https://twitter.com/aipadtech",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("i", {
                        className: "fab fa-twitter"
                    })), r.a.createElement("a", {
                        href: "https://t.me/AIPADTECH",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("i", {
                        className: "fab fa-telegram-plane"
                    })), r.a.createElement("a", {
                        href: "https://www.tiktok.com/@a.i.pad",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("i", {
                        className: "fab fa-tiktok"
                    })))
                }),
                On = ["children"],
                _n = function(e) {
                    var t = e.children,
                        n = (Object(Kt.a)(e, On), Object(c.c)((function(e) {
                            return Object(ue.get)(e, "utils.blocking", !1)
                        })));
                    return r.a.createElement(Yt.a, {
                        tag: "div",
                        blocking: n
                    }, r.a.createElement(wn, null), r.a.createElement("main", null, t), r.a.createElement(qt, null), r.a.createElement(Tn, null))
                },
                xn = ["component"],
                Nn = function(e) {
                    var t = e.component,
                        n = Object(Kt.a)(e, xn);
                    return r.a.createElement(w.b, Object.assign({}, n, {
                        render: function(e) {
                            return r.a.createElement(_n, null, r.a.createElement(t, e))
                        }
                    }))
                },
                jn = (n(192), n(193), n(194), n(195), function() {
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement(w.c, {
                        history: s
                    }, r.a.createElement(J, null, r.a.createElement(ve, null), r.a.createElement(w.d, null, r.a.createElement(Nn, {
                        exact: !0,
                        path: we,
                        component: Wt
                    }), r.a.createElement(Nn, {
                        exact: !0,
                        path: Te,
                        component: It
                    }), r.a.createElement(Nn, {
                        exact: !0,
                        path: Oe,
                        component: ge
                    }), r.a.createElement(Nn, {
                        exact: !0,
                        path: _e,
                        component: Ee
                    }), r.a.createElement(Nn, {
                        exact: !0,
                        path: xe,
                        component: Jt
                    }), r.a.createElement(w.a, {
                        from: "**",
                        to: we
                    })))), r.a.createElement(et.a, null))
                }),
                Sn = n(45),
                Ln = n(210),
                kn = n(107),
                An = n(134),
                Cn = n.n(An),
                In = n(135),
                Pn = n.n(In),
                Mn = n(2),
                Bn = {
                    latestBlock: 0,
                    blocking: !1,
                    leftBarActive: !0,
                    isConnectWallet: !1,
                    walletAddress: null,
                    walletUtils: null,
                    showModalHelp: !1
                },
                Gn = {
                    projects: [],
                    openingProjects: [],
                    waitingProjects: [],
                    closedProjects: [],
                    selectedProject: null,
                    currentWalletInfo: null,
                    contractsInfo: [],
                    currentSelectedContractAddress: null,
                    jobGetProjects: 0,
                    jobGetProjectSelected: 0,
                    jobGetWalletInfo: 0,
                    jobCountDownOpen: 0,
                    jobCountDownClose: 0,
                    jobCountDownRoundTime: 0,
                    jobCountDownFcfsTime: 0
                },
                Fn = {
                    walletInfo: {},
                    kycStatus: null,
                    kycURL: "",
                    jobKyc: 0,
                    stakingInfo: {},
                    stakingWalletInfo: {},
                    jobUnStakeTime: 0,
                    bscPadTokenBalance: 0,
                    bnbBalance: 0,
                    jobGetBalance: 0,
                    jobStakingStatus: 0,
                    tier: null
                },
                Rn = {
                    selectedTabIndex: 1
                },
                Dn = Object(Sn.b)({
                    utils: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bn,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ne.REQUEST_SUBMIT:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    blocking: !0
                                });
                            case Ne.REQUEST_DONE:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    blocking: !1
                                });
                            case Ne.CLICK_LEFT_BAR_ACTIVE:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    leftBarActive: !e.leftBarActive
                                });
                            case Ne.CONNECT_WALLET_SUCCESS:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    isConnectWallet: !0,
                                    walletAddress: t.data
                                });
                            case Ne.ENABLE_WALLET_SUCCESS:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    isConnectWallet: !0,
                                    walletUtils: t.data
                                });
                            case Ne.LOG_OUT_WALLET_SUCCESS:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    isConnectWallet: !1,
                                    walletAddress: null,
                                    walletUtils: null
                                });
                            case Ne.SET_SHOW_MODAL_HELP:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    showModalHelp: !0
                                });
                            case Ne.SET_LATEST_BLOCK:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    latestBlock: t.data
                                });
                            default:
                                return e
                        }
                    },
                    project: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gn,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ne.GET_PROJECTS_SUCCESS:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    projects: t.data.projects,
                                    openingProjects: t.data.openingProjects,
                                    waitingProjects: t.data.waitingProjects,
                                    closedProjects: t.data.closedProjects
                                });
                            case Ne.GET_LIST_CONTRACTS_INFO:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    contractsInfo: t.data
                                });
                            case Ne.GET_PROJECT_SELECTED:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    selectedProject: t.data
                                });
                            case Ne.SET_CURRENT_CONTRACT_SELECTED:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    currentSelectedContractAddress: t.data
                                });
                            case Ne.SET_JOB_PROJECT_SELECTED:
                                return clearInterval(e.jobGetProjectSelected), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobGetProjectSelected: t.data
                                });
                            case Ne.SET_JOB_GET_WALLET_INFO:
                                return clearInterval(e.jobGetWalletInfo), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobGetWalletInfo: t.data
                                });
                            case Ne.SET_JOB_COUNT_DOWN_OPEN:
                                return clearInterval(e.jobCountDownOpen), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobCountDownOpen: t.data
                                });
                            case Ne.SET_JOB_COUNT_DOWN_CLOSE:
                                return clearInterval(e.jobCountDownClose), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobCountDownClose: t.data
                                });
                            case Ne.SET_JOB_COUNT_DOWN_ROUND:
                                return clearInterval(e.jobCountDownRoundTime), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobCountDownRoundTime: t.data
                                });
                            case Ne.SET_JOB_COUNT_DOWN_FCFS_TIME:
                                return clearInterval(e.jobCountDownFcfsTime), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobCountDownFcfsTime: t.data
                                });
                            case Ne.SET_JOB_GET_PROJECTS:
                                return clearInterval(e.jobGetProjects), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobGetProjects: t.data
                                });
                            case Ne.CLEAR_INTERVAL_PROJECTS_JOB:
                                return clearInterval(e.jobGetProjectSelected), clearInterval(e.jobGetWalletInfo), clearInterval(e.jobGetProjects), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobGetProjectSelected: 0,
                                    jobGetWalletInfo: 0,
                                    jobGetProjects: 0
                                });
                            default:
                                return e
                        }
                    },
                    wallet: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fn,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ne.GET_INFO_WALLET:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    walletInfo: t.data
                                });
                            case Ne.GET_KYC_INFO:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    kycStatus: t.data
                                });
                            case Ne.GET_KYC_3RD:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    kycURL: t.data
                                });
                            case Ne.SET_JOB_GET_KYC:
                                return clearInterval(e.jobKyc), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobKyc: t.data
                                });
                            case Ne.CLEAR_KYC_STATE:
                                return clearInterval(e.jobKyc), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    kycStatus: null
                                });
                            case Ne.GET_STAKING_INFO:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    stakingInfo: t.data
                                });
                            case Ne.GET_STAKING_WALLET_INFO:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    stakingWalletInfo: t.data
                                });
                            case Ne.SET_JOB_COUNTDOWN_STAKE_TIME:
                                return clearInterval(e.jobUnStakeTime), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobUnStakeTime: t.data
                                });
                            case Ne.GET_AIPAD_WALLET_BALANCE:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    bscPadTokenBalance: t.data
                                });
                            case Ne.GET_BNB_BALANCE:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    bnbBalance: t.data
                                });
                            case Ne.SET_JOB_GET_BALANCE:
                                return clearInterval(e.jobGetBalance), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobGetBalance: t.data
                                });
                            case Ne.CLEAR_INTERVAL_PROJECTS_JOB:
                                return clearInterval(e.jobUnStakeTime), clearInterval(e.stakingWalletInfo), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobUnStakeTime: 0,
                                    stakingWalletInfo: 0
                                });
                            case Ne.SET_JOB_GET_STAKING_STATUS:
                                return clearInterval(e.jobStakingStatus), Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    jobStakingStatus: t.data
                                });
                            case Ne.SET_TIER_ADDRESS:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    tier: t.data
                                });
                            default:
                                return e
                        }
                    },
                    app: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rn,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case Ne.TAB_SELECTED_CHANGE:
                                return Object(Mn.a)(Object(Mn.a)({}, e), {}, {
                                    selectedTabIndex: t.tabIndex
                                });
                            default:
                                return e
                        }
                    }
                }),
                Un = n(136),
                Wn = n(37);

            function Jn() {
                Jn = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var Kn = function() {
                    var e = Object(_.a)(Jn().mark((function e() {
                        var t, n;
                        return Jn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Zt.a.get("".concat(f).concat(K.GET_PROJECTS));
                                case 3:
                                    if (200 !== (t = e.sent).status) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", t.data);
                                case 6:
                                    return e.abrupt("return", []);
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(0), n = e.t0.response, console.log(n), e.abrupt("return", []);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Yn = function() {
                    var e = Object(_.a)(Jn().mark((function e(t) {
                        var n;
                        return Jn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Zt.a.get("".concat(f).concat(K.GET_PROJECT_DETAILS.replace(":id", t)));
                                case 3:
                                    if (200 !== (n = e.sent).status) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        status: 200,
                                        data: n.data
                                    });
                                case 8:
                                    return e.abrupt("return", {
                                        status: 404,
                                        data: null
                                    });
                                case 9:
                                    e.next = 15;
                                    break;
                                case 11:
                                    return e.prev = 11, e.t0 = e.catch(0), e.t0.response, e.abrupt("return", {
                                        status: 404,
                                        data: null
                                    });
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 11]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();

            function Hn() {
                Hn = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var qn = Hn().mark(Qn),
                zn = Hn().mark($n),
                Vn = Hn().mark(Zn),
                Xn = Hn().mark(ea);

            function Qn() {
                var e, t, n, a;
                return Hn().wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return r.prev = 0, r.next = 3, Object(Wn.b)(Kn);
                        case 3:
                            if (e = r.sent, t = [], e.forEach((function(e) {
                                "string" === typeof e.contract && "C" !== e.state && t.push(e.contract)
                            })), !(t.length > 0)) {
                                r.next = 26;
                                break
                            }
                            return n = [], a = [], r.prev = 9, r.next = 12, Object(Wn.b)(fn, t);
                        case 12:
                            a = r.sent, r.next = 21;
                            break;
                        case 15:
                            return r.prev = 15, r.t0 = r.catch(9), console.log("err==>", r.t0), r.next = 20, Object(Wn.b)(fn, t);
                        case 20:
                            a = r.sent;
                        case 21:
                            return e.forEach((function(t) {
                                var r = t,
                                    i = a[t.contract],
                                    o = Object.assign(r, i),
                                    c = e.find((function(e) {
                                        return e.symbol === t.projectTokenSymbol
                                    }));
                                o.athMultiplier = c ? c.ath_multiplier : null, n.push(o)
                            })), r.next = 24, Object(Wn.d)({
                                type: V,
                                data: {
                                    projects: n,
                                    openingProjects: n.filter((function(e) {
                                        return "O" === e.state || "F" === e.state
                                    })),
                                    waitingProjects: n.filter((function(e) {
                                        return "P" === e.state
                                    })),
                                    closedProjects: n.filter((function(e) {
                                        return "C" === e.state
                                    }))
                                }
                            });
                        case 24:
                            r.next = 28;
                            break;
                        case 26:
                            return r.next = 28, Object(Wn.d)({
                                type: V,
                                data: {
                                    projects: e,
                                    openingProjects: e.filter((function(e) {
                                        return "O" === e.state
                                    })),
                                    waitingProjects: e.filter((function(e) {
                                        return "P" === e.state
                                    })),
                                    closedProjects: e.filter((function(e) {
                                        return "C" === e.state
                                    }))
                                }
                            });
                        case 28:
                            r.next = 34;
                            break;
                        case 30:
                            return r.prev = 30, r.t1 = r.catch(0), console.log(r.t1), r.abrupt("return", null);
                        case 34:
                        case "end":
                            return r.stop()
                    }
                }), qn, null, [
                    [0, 30],
                    [9, 15]
                ])
            }

            function $n(e) {
                var t, n, a, r;
                return Hn().wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return t = e.data, i.next = 3, Object(Wn.b)(Yn, t);
                        case 3:
                            if (200 !== (n = i.sent).status) {
                                i.next = 11;
                                break
                            }
                            return i.next = 7, Object(Wn.b)(fn, [t]);
                        case 7:
                            return a = i.sent, r = Object.assign(n.data, a[t]), i.next = 11, Object(Wn.d)({
                                type: X,
                                data: r
                            });
                        case 11:
                        case "end":
                            return i.stop()
                    }
                }), zn)
            }

            function Zn() {
                return Hn().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(Wn.e)(Q, Qn);
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), Vn)
            }

            function ea() {
                return Hn().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(Wn.e)($, $n);
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), Xn)
            }

            function ta() {
                ta = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (S) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new x(r || []);
                    return a(o, "_invoke", {
                        value: w(e, n, c)
                    }), o
                }

                function u(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (S) {
                        return {
                            type: "throw",
                            arg: S
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function m() {}

                function d() {}

                function f() {}
                var h = {};
                l(h, i, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && n.call(v, i) && (h = v);
                var b = f.prototype = m.prototype = Object.create(h);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    a(this, "_invoke", {
                        value: function(a, i) {
                            function o() {
                                return new t((function(r, o) {
                                    ! function a(r, i, o, c) {
                                        var l = u(e[r], e, i);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                a("next", e, o, c)
                                            }), (function(e) {
                                                a("throw", e, o, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, o(s)
                                            }), (function(e) {
                                                return a("throw", e, o, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(a, i, r, o)
                                }))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }

                function w(e, t, n) {
                    var a = "suspendedStart";
                    return function(r, i) {
                        if ("executing" === a) throw new Error("Generator is already running");
                        if ("completed" === a) {
                            if ("throw" === r) throw i;
                            return j()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = T(o, n);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing";
                            var l = u(e, t, n);
                            if ("normal" === l.type) {
                                if (a = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function T(e, t) {
                    var n = t.method,
                        a = e.iterator[n];
                    if (void 0 === a) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                    var r = u(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = f, a(b, "constructor", {
                    value: f,
                    configurable: !0
                }), a(f, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(f, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(g.prototype), l(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, a, r, i) {
                    void 0 === i && (i = Promise);
                    var o = new g(s(t, n, a, r), i);
                    return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, i, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var a in t) n.push(a);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var a = n.pop();
                                if (a in t) return e.value = a, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return a("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc"),
                                    l = n.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return a(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            var na = ta().mark(aa);

            function aa() {
                return ta().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(Wn.a)([Object(Wn.c)(Zn), Object(Wn.c)(ea)]);
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), na)
            }
            var ra = {
                key: "root",
                storage: Cn.a,
                blacklist: ["utils", "systemInfo"],
                stateReconciler: Pn.a
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function ia(e) {
                var t = new tt.a(e);
                return t.pollingInterval = 15e3, t
            }
            var oa = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = Sn.c,
                        a = {},
                        r = Object(Un.a)(a),
                        i = [r, Object(Ln.a)(t)],
                        o = [Sn.a.apply(void 0, i)],
                        c = (Object(kn.a)(ra, Dn), Object(Sn.d)(Dn, e, n.apply(void 0, o))),
                        l = Object(kn.b)(c);
                    return r.run(aa), {
                        store: c,
                        persistor: l
                    }
                }({}, s).store,
                ca = Object(u.c)("NETWORK");
            o.a.render(r.a.createElement(c.a, {
                store: oa
            }, r.a.createElement(u.b, {
                getLibrary: ia
            }, r.a.createElement(ca, {
                getLibrary: ia
            }, r.a.createElement(jn, null)))), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        },
        93: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"raiseToken","type":"address"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"openTimestamp","type":"uint256"},{"internalType":"uint256","name":"closeTimestamp","type":"uint256"},{"internalType":"uint256","name":"cap","type":"uint256"},{"internalType":"uint256","name":"fcfsDurationSeconds","type":"uint256"},{"internalType":"uint256","name":"fcfsFactor","type":"uint256"},{"internalType":"address","name":"releaseToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"destination","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"destination","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Participated","type":"event"},{"inputs":[],"name":"_cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_closeTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_closed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_fcfsDurationSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_fcfsFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_openTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_participationAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_participationAmountAllocRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_participationCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_qualifierCompetition","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_qualifierTier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_qualifierTierCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_qualifierToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_raiseToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_releaseToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_releaseTokenPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_releases","outputs":[{"internalType":"uint256","name":"fromTimestamp","type":"uint256"},{"internalType":"uint256","name":"toTimestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_roundCloseTimestamps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_roundNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_roundOpenTimestamps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tierBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tierFCFSMultipliers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tierFCFSOpenSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tierNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tierWeights","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buildRounds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tierIndex","type":"uint256"}],"name":"calculateAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"claimMulti","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tierIndex","type":"uint256"}],"name":"getFCFSMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"info","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"infoAllocations","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"infoRounds","outputs":[{"internalType":"string[]","name":"","type":"string[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"infoTiers","outputs":[{"internalType":"string[]","name":"","type":"string[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"infoWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"infoWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"participate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"qualifierTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raiseTokenBalance","outputs":[{"internalType":"uint256","name":"balanceRaising","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raiseTokenDecimals","outputs":[{"internalType":"uint256","name":"decimals","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raiseTokenSymbol","outputs":[{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"releaseTokenDecimals","outputs":[{"internalType":"uint256","name":"decimals","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cap","type":"uint256"}],"name":"setCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"closed","type":"bool"}],"name":"setClosed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tierFCFSOpenSeconds","type":"uint256[]"},{"internalType":"uint256[]","name":"tierFCFSMultipliers","type":"uint256[]"},{"internalType":"uint256","name":"fcfsFactor","type":"uint256"}],"name":"setFCFS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"setParticipation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"qualifierToken","type":"address"}],"name":"setQualifierToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"openTimestamp","type":"uint256"},{"internalType":"uint256","name":"closeTimestamp","type":"uint256"},{"internalType":"uint256","name":"fcfsDurationSeconds","type":"uint256"}],"name":"setTimestamps","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"qualifierAddresses","type":"address[]"},{"internalType":"uint256[]","name":"qualifierTiers","type":"uint256[]"},{"internalType":"bool[]","name":"qualifierCompetition","type":"bool[]"}],"name":"setup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"pair","type":"address"}],"name":"setupReleaseToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"fromTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"toTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"percents","type":"uint256[]"}],"name":"setupReleases","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"transferNativeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"transferToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        94: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')
        }
    },
    [
        [140, 1, 2]
    ]
]);
