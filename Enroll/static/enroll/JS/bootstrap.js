/*!
  * Bootstrap v5.0.0-beta2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper)
}(this, (function (t) {
    "use strict";

    function e(t) {
        if (t && t.__esModule) return t;
        var e = Object.create(null);
        return t && Object.keys(t).forEach((function (n) {
            if ("default" !== n) {
                var i = Object.getOwnPropertyDescriptor(t, n);
                Object.defineProperty(e, n, i.get ? i : {
                    enumerable: !0, get: function () {
                        return t[n]
                    }
                })
            }
        })), e.default = t, Object.freeze(e)
    }

    var n = e(t);

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function s() {
        return (s = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }

    function r(t, e) {
        var n, i;
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, n = t, i = e, (Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(n, i)
    }

    var a, l, c = function (t) {
            do {
                t += Math.floor(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        }, u = function (t) {
            var e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), e = n && "#" !== n ? n.trim() : null
            }
            return e
        }, h = function (t) {
            var e = u(t);
            return e && document.querySelector(e) ? e : null
        }, d = function (t) {
            var e = u(t);
            return e ? document.querySelector(e) : null
        }, f = function (t) {
            if (!t) return 0;
            var e = window.getComputedStyle(t), n = e.transitionDuration, i = e.transitionDelay, o = Number.parseFloat(n),
                s = Number.parseFloat(i);
            return o || s ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
        }, p = function (t) {
            t.dispatchEvent(new Event("transitionend"))
        }, g = function (t) {
            return (t[0] || t).nodeType
        }, m = function (t, e) {
            var n = !1, i = e + 5;
            t.addEventListener("transitionend", (function e() {
                n = !0, t.removeEventListener("transitionend", e)
            })), setTimeout((function () {
                n || p(t)
            }), i)
        }, _ = function (t, e, n) {
            Object.keys(n).forEach((function (i) {
                var o, s = n[i], r = e[i],
                    a = r && g(r) ? "element" : null == (o = r) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(a)) throw new TypeError(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + s + '".')
            }))
        }, v = function (t) {
            if (!t) return !1;
            if (t.style && t.parentNode && t.parentNode.style) {
                var e = getComputedStyle(t), n = getComputedStyle(t.parentNode);
                return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
            }
            return !1
        }, b = function () {
            return function () {
            }
        }, y = function (t) {
            return t.offsetHeight
        }, w = function () {
            var t = window.jQuery;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        }, E = "rtl" === document.documentElement.dir, T = function (t, e) {
            var n;
            n = function () {
                var n = w();
                if (n) {
                    var i = n.fn[t];
                    n.fn[t] = e.jQueryInterface, n.fn[t].Constructor = e, n.fn[t].noConflict = function () {
                        return n.fn[t] = i, e.jQueryInterface
                    }
                }
            }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : n()
        }, A = (a = {}, l = 1, {
            set: function (t, e, n) {
                void 0 === t.bsKey && (t.bsKey = {key: e, id: l}, l++), a[t.bsKey.id] = n
            }, get: function (t, e) {
                if (!t || void 0 === t.bsKey) return null;
                var n = t.bsKey;
                return n.key === e ? a[n.id] : null
            }, delete: function (t, e) {
                if (void 0 !== t.bsKey) {
                    var n = t.bsKey;
                    n.key === e && (delete a[n.id], delete t.bsKey)
                }
            }
        }), k = function (t, e, n) {
            A.set(t, e, n)
        }, L = function (t, e) {
            return A.get(t, e)
        }, C = /[^.]*(?=\..*)\.|.*/, D = /\..*/, S = /::\d+$/, N = {}, O = 1,
        I = {mouseenter: "mouseover", mouseleave: "mouseout"},
        j = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function P(t, e) {
        return e && e + "::" + O++ || t.uidEvent || O++
    }

    function x(t) {
        var e = P(t);
        return t.uidEvent = e, N[e] = N[e] || {}, N[e]
    }

    function H(t, e, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(t), o = 0, s = i.length; o < s; o++) {
            var r = t[i[o]];
            if (r.originalHandler === e && r.delegationSelector === n) return r
        }
        return null
    }

    function B(t, e, n) {
        var i = "string" == typeof e, o = i ? n : e, s = t.replace(D, ""), r = I[s];
        return r && (s = r), j.has(s) || (s = t), [i, o, s]
    }

    function M(t, e, n, i, o) {
        if ("string" == typeof e && t) {
            n || (n = i, i = null);
            var s = B(e, n, i), r = s[0], a = s[1], l = s[2], c = x(t), u = c[l] || (c[l] = {}),
                h = H(u, a, r ? n : null);
            if (h) h.oneOff = h.oneOff && o; else {
                var d = P(a, e.replace(C, "")), f = r ? function (t, e, n) {
                    return function i(o) {
                        for (var s = t.querySelectorAll(e), r = o.target; r && r !== this; r = r.parentNode) for (var a = s.length; a--;) if (s[a] === r) return o.delegateTarget = r, i.oneOff && K.off(t, o.type, n), n.apply(r, [o]);
                        return null
                    }
                }(t, n, i) : function (t, e) {
                    return function n(i) {
                        return i.delegateTarget = t, n.oneOff && K.off(t, i.type, e), e.apply(t, [i])
                    }
                }(t, n);
                f.delegationSelector = r ? n : null, f.originalHandler = a, f.oneOff = o, f.uidEvent = d, u[d] = f, t.addEventListener(l, f, r)
            }
        }
    }

    function R(t, e, n, i, o) {
        var s = H(e[n], i, o);
        s && (t.removeEventListener(n, s, Boolean(o)), delete e[n][s.uidEvent])
    }

    var K = {
        on: function (t, e, n, i) {
            M(t, e, n, i, !1)
        }, one: function (t, e, n, i) {
            M(t, e, n, i, !0)
        }, off: function (t, e, n, i) {
            if ("string" == typeof e && t) {
                var o = B(e, n, i), s = o[0], r = o[1], a = o[2], l = a !== e, c = x(t), u = e.startsWith(".");
                if (void 0 === r) {
                    u && Object.keys(c).forEach((function (n) {
                        !function (t, e, n, i) {
                            var o = e[n] || {};
                            Object.keys(o).forEach((function (s) {
                                if (s.includes(i)) {
                                    var r = o[s];
                                    R(t, e, n, r.originalHandler, r.delegationSelector)
                                }
                            }))
                        }(t, c, n, e.slice(1))
                    }));
                    var h = c[a] || {};
                    Object.keys(h).forEach((function (n) {
                        var i = n.replace(S, "");
                        if (!l || e.includes(i)) {
                            var o = h[n];
                            R(t, c, a, o.originalHandler, o.delegationSelector)
                        }
                    }))
                } else {
                    if (!c || !c[a]) return;
                    R(t, c, a, r, s ? n : null)
                }
            }
        }, trigger: function (t, e, n) {
            if ("string" != typeof e || !t) return null;
            var i, o = w(), s = e.replace(D, ""), r = e !== s, a = j.has(s), l = !0, c = !0, u = !1, h = null;
            return r && o && (i = o.Event(e, n), o(t).trigger(i), l = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), u = i.isDefaultPrevented()), a ? (h = document.createEvent("HTMLEvents")).initEvent(s, l, !0) : h = new CustomEvent(e, {
                bubbles: l,
                cancelable: !0
            }), void 0 !== n && Object.keys(n).forEach((function (t) {
                Object.defineProperty(h, t, {
                    get: function () {
                        return n[t]
                    }
                })
            })), u && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== i && i.preventDefault(), h
        }
    }, W = function () {
        function t(t) {
            t && (this._element = t, k(t, this.constructor.DATA_KEY, this))
        }

        return t.prototype.dispose = function () {
            var t, e;
            t = this._element, e = this.constructor.DATA_KEY, A.delete(t, e), this._element = null
        }, t.getInstance = function (t) {
            return L(t, this.DATA_KEY)
        }, o(t, null, [{
            key: "VERSION", get: function () {
                return "5.0.0-beta2"
            }
        }]), t
    }(), U = function (t) {
        function e() {
            return t.apply(this, arguments) || this
        }

        r(e, t);
        var n = e.prototype;
        return n.close = function (t) {
            var e = t ? this._getRootElement(t) : this._element, n = this._triggerCloseEvent(e);
            null === n || n.defaultPrevented || this._removeElement(e)
        }, n._getRootElement = function (t) {
            return d(t) || t.closest(".alert")
        }, n._triggerCloseEvent = function (t) {
            return K.trigger(t, "close.bs.alert")
        }, n._removeElement = function (t) {
            var e = this;
            if (t.classList.remove("show"), t.classList.contains("fade")) {
                var n = f(t);
                K.one(t, "transitionend", (function () {
                    return e._destroyElement(t)
                })), m(t, n)
            } else this._destroyElement(t)
        }, n._destroyElement = function (t) {
            t.parentNode && t.parentNode.removeChild(t), K.trigger(t, "closed.bs.alert")
        }, e.jQueryInterface = function (t) {
            return this.each((function () {
                var n = L(this, "bs.alert");
                n || (n = new e(this)), "close" === t && n[t](this)
            }))
        }, e.handleDismiss = function (t) {
            return function (e) {
                e && e.preventDefault(), t.close(this)
            }
        }, o(e, null, [{
            key: "DATA_KEY", get: function () {
                return "bs.alert"
            }
        }]), e
    }(W);
    K.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', U.handleDismiss(new U)), T("alert", U);
    var F = function (t) {
        function e() {
            return t.apply(this, arguments) || this
        }

        return r(e, t), e.prototype.toggle = function () {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }, e.jQueryInterface = function (t) {
            return this.each((function () {
                var n = L(this, "bs.button");
                n || (n = new e(this)), "toggle" === t && n[t]()
            }))
        }, o(e, null, [{
            key: "DATA_KEY", get: function () {
                return "bs.button"
            }
        }]), e
    }(W);

    function z(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function Y(t) {
        return t.replace(/[A-Z]/g, (function (t) {
            return "-" + t.toLowerCase()
        }))
    }

    K.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (function (t) {
        t.preventDefault();
        var e = t.target.closest('[data-bs-toggle="button"]'), n = L(e, "bs.button");
        n || (n = new F(e)), n.toggle()
    })), T("button", F);
    var X = {
        setDataAttribute: function (t, e, n) {
            t.setAttribute("data-bs-" + Y(e), n)
        }, removeDataAttribute: function (t, e) {
            t.removeAttribute("data-bs-" + Y(e))
        }, getDataAttributes: function (t) {
            if (!t) return {};
            var e = {};
            return Object.keys(t.dataset).filter((function (t) {
                return t.startsWith("bs")
            })).forEach((function (n) {
                var i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = z(t.dataset[n])
            })), e
        }, getDataAttribute: function (t, e) {
            return z(t.getAttribute("data-bs-" + Y(e)))
        }, offset: function (t) {
            var e = t.getBoundingClientRect();
            return {top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft}
        }, position: function (t) {
            return {top: t.offsetTop, left: t.offsetLeft}
        }
    }, q = function (t, e) {
        var n;
        return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, Element.prototype.querySelectorAll.call(e, t))
    }, Q = function (t, e) {
        return void 0 === e && (e = document.documentElement), Element.prototype.querySelector.call(e, t)
    }, V = function (t, e) {
        var n;
        return (n = []).concat.apply(n, t.children).filter((function (t) {
            return t.matches(e)
        }))
    }, $ = function (t, e) {
        for (var n = t.previousElementSibling; n;) {
            if (n.matches(e)) return [n];
            n = n.previousElementSibling
        }
        return []
    }, G = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, Z = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, J = function (t) {
        function e(e, n) {
            var i;
            return (i = t.call(this, e) || this)._items = null, i._interval = null, i._activeElement = null, i._isPaused = !1, i._isSliding = !1, i.touchTimeout = null, i.touchStartX = 0, i.touchDeltaX = 0, i._config = i._getConfig(n), i._indicatorsElement = Q(".carousel-indicators", i._element), i._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, i._pointerEvent = Boolean(window.PointerEvent), i._addEventListeners(), i
        }

        r(e, t);
        var n = e.prototype;
        return n.next = function () {
            this._isSliding || this._slide("next")
        }, n.nextWhenVisible = function () {
            !document.hidden && v(this._element) && this.next()
        }, n.prev = function () {
            this._isSliding || this._slide("prev")
        }, n.pause = function (t) {
            t || (this._isPaused = !0), Q(".carousel-item-next, .carousel-item-prev", this._element) && (p(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, n.cycle = function (t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, n.to = function (t) {
            var e = this;
            this._activeElement = Q(".active.carousel-item", this._element);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) K.one(this._element, "slid.bs.carousel", (function () {
                return e.to(t)
            })); else {
                if (n === t) return this.pause(), void this.cycle();
                var i = t > n ? "next" : "prev";
                this._slide(i, this._items[t])
            }
        }, n.dispose = function () {
            t.prototype.dispose.call(this), K.off(this._element, ".bs.carousel"), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, n._getConfig = function (t) {
            return t = s({}, G, t), _("carousel", t, Z), t
        }, n._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                this.touchDeltaX = 0, e > 0 && (E ? this.next() : this.prev()), e < 0 && (E ? this.prev() : this.next())
            }
        }, n._addEventListeners = function () {
            var t = this;
            this._config.keyboard && K.on(this._element, "keydown.bs.carousel", (function (e) {
                return t._keydown(e)
            })), "hover" === this._config.pause && (K.on(this._element, "mouseenter.bs.carousel", (function (e) {
                return t.pause(e)
            })), K.on(this._element, "mouseleave.bs.carousel", (function (e) {
                return t.cycle(e)
            }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }, n._addTouchEventListeners = function () {
            var t = this, e = function (e) {
                !t._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType ? t._pointerEvent || (t.touchStartX = e.touches[0].clientX) : t.touchStartX = e.clientX
            }, n = function (e) {
                !t._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType || (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) {
                    return t.cycle(e)
                }), 500 + t._config.interval))
            };
            q(".carousel-item img", this._element).forEach((function (t) {
                K.on(t, "dragstart.bs.carousel", (function (t) {
                    return t.preventDefault()
                }))
            })), this._pointerEvent ? (K.on(this._element, "pointerdown.bs.carousel", (function (t) {
                return e(t)
            })), K.on(this._element, "pointerup.bs.carousel", (function (t) {
                return n(t)
            })), this._element.classList.add("pointer-event")) : (K.on(this._element, "touchstart.bs.carousel", (function (t) {
                return e(t)
            })), K.on(this._element, "touchmove.bs.carousel", (function (e) {
                return function (e) {
                    e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
                }(e)
            })), K.on(this._element, "touchend.bs.carousel", (function (t) {
                return n(t)
            })))
        }, n._keydown = function (t) {
            /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), E ? this.next() : this.prev()) : "ArrowRight" === t.key && (t.preventDefault(), E ? this.prev() : this.next()))
        }, n._getItemIndex = function (t) {
            return this._items = t && t.parentNode ? q(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
        }, n._getItemByDirection = function (t, e) {
            var n = "next" === t, i = "prev" === t, o = this._getItemIndex(e), s = this._items.length - 1;
            if ((i && 0 === o || n && o === s) && !this._config.wrap) return e;
            var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }, n._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t), i = this._getItemIndex(Q(".active.carousel-item", this._element));
            return K.trigger(this._element, "slide.bs.carousel", {relatedTarget: t, direction: e, from: i, to: n})
        }, n._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
                var e = Q(".active", this._indicatorsElement);
                e.classList.remove("active"), e.removeAttribute("aria-current");
                for (var n = q("[data-bs-target]", this._indicatorsElement), i = 0; i < n.length; i++) if (Number.parseInt(n[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                    n[i].classList.add("active"), n[i].setAttribute("aria-current", "true");
                    break
                }
            }
        }, n._updateInterval = function () {
            var t = this._activeElement || Q(".active.carousel-item", this._element);
            if (t) {
                var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
            }
        }, n._slide = function (t, e) {
            var n = this, i = Q(".active.carousel-item", this._element), o = this._getItemIndex(i),
                s = e || i && this._getItemByDirection(t, i), r = this._getItemIndex(s), a = Boolean(this._interval),
                l = "next" === t ? "carousel-item-start" : "carousel-item-end",
                c = "next" === t ? "carousel-item-next" : "carousel-item-prev", u = "next" === t ? "left" : "right";
            if (s && s.classList.contains("active")) this._isSliding = !1; else if (!this._triggerSlideEvent(s, u).defaultPrevented && i && s) {
                if (this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s), this._activeElement = s, this._element.classList.contains("slide")) {
                    s.classList.add(c), y(s), i.classList.add(l), s.classList.add(l);
                    var h = f(i);
                    K.one(i, "transitionend", (function () {
                        s.classList.remove(l, c), s.classList.add("active"), i.classList.remove("active", c, l), n._isSliding = !1, setTimeout((function () {
                            K.trigger(n._element, "slid.bs.carousel", {relatedTarget: s, direction: u, from: o, to: r})
                        }), 0)
                    })), m(i, h)
                } else i.classList.remove("active"), s.classList.add("active"), this._isSliding = !1, K.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: s,
                    direction: u,
                    from: o,
                    to: r
                });
                a && this.cycle()
            }
        }, e.carouselInterface = function (t, n) {
            var i = L(t, "bs.carousel"), o = s({}, G, X.getDataAttributes(t));
            "object" == typeof n && (o = s({}, o, n));
            var r = "string" == typeof n ? n : o.slide;
            if (i || (i = new e(t, o)), "number" == typeof n) i.to(n); else if ("string" == typeof r) {
                if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                i[r]()
            } else o.interval && o.ride && (i.pause(), i.cycle())
        }, e.jQueryInterface = function (t) {
            return this.each((function () {
                e.carouselInterface(this, t)
            }))
        }, e.dataApiClickHandler = function (t) {
            var n = d(this);
            if (n && n.classList.contains("carousel")) {
                var i = s({}, X.getDataAttributes(n), X.getDataAttributes(this)),
                    o = this.getAttribute("data-bs-slide-to");
                o && (i.interval = !1), e.carouselInterface(n, i), o && L(n, "bs.carousel").to(o), t.preventDefault()
            }
        }, o(e, null, [{
            key: "Default", get: function () {
                return G
            }
        }, {
            key: "DATA_KEY", get: function () {
                return "bs.carousel"
            }
        }]), e
    }(W);
    K.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", J.dataApiClickHandler), K.on(window, "load.bs.carousel.data-api", (function () {
        for (var t = q('[data-bs-ride="carousel"]'), e = 0, n = t.length; e < n; e++) J.carouselInterface(t[e], L(t[e], "bs.carousel"))
    })), T("carousel", J);
    var tt = {toggle: !0, parent: ""}, et = {toggle: "boolean", parent: "(string|element)"}, nt = function (t) {
        function e(e, n) {
            var i;
            (i = t.call(this, e) || this)._isTransitioning = !1, i._config = i._getConfig(n), i._triggerArray = q('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');
            for (var o = q('[data-bs-toggle="collapse"]'), s = 0, r = o.length; s < r; s++) {
                var a = o[s], l = h(a), c = q(l).filter((function (t) {
                    return t === e
                }));
                null !== l && c.length && (i._selector = l, i._triggerArray.push(a))
            }
            return i._parent = i._config.parent ? i._getParent() : null, i._config.parent || i._addAriaAndCollapsedClass(i._element, i._triggerArray), i._config.toggle && i.toggle(), i
        }

        r(e, t);
        var n = e.prototype;
        return n.toggle = function () {
            this._element.classList.contains("show") ? this.hide() : this.show()
        }, n.show = function () {
            var t = this;
            if (!this._isTransitioning && !this._element.classList.contains("show")) {
                var n, i;
                this._parent && 0 === (n = q(".show, .collapsing", this._parent).filter((function (e) {
                    return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse")
                }))).length && (n = null);
                var o = Q(this._selector);
                if (n) {
                    var s = n.find((function (t) {
                        return o !== t
                    }));
                    if ((i = s ? L(s, "bs.collapse") : null) && i._isTransitioning) return
                }
                if (!K.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                    n && n.forEach((function (t) {
                        o !== t && e.collapseInterface(t, "hide"), i || k(t, "bs.collapse", null)
                    }));
                    var r = this._getDimension();
                    this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[r] = 0, this._triggerArray.length && this._triggerArray.forEach((function (t) {
                        t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
                    })), this.setTransitioning(!0);
                    var a = "scroll" + (r[0].toUpperCase() + r.slice(1)), l = f(this._element);
                    K.one(this._element, "transitionend", (function () {
                        t._element.classList.remove("collapsing"), t._element.classList.add("collapse", "show"), t._element.style[r] = "", t.setTransitioning(!1), K.trigger(t._element, "shown.bs.collapse")
                    })), m(this._element, l), this._element.style[r] = this._element[a] + "px"
                }
            }
        }, n.hide = function () {
            var t = this;
            if (!this._isTransitioning && this._element.classList.contains("show") && !K.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                var e = this._getDimension();
                this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", y(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
                var n = this._triggerArray.length;
                if (n > 0) for (var i = 0; i < n; i++) {
                    var o = this._triggerArray[i], s = d(o);
                    s && !s.classList.contains("show") && (o.classList.add("collapsed"), o.setAttribute("aria-expanded", !1))
                }
                this.setTransitioning(!0), this._element.style[e] = "";
                var r = f(this._element);
                K.one(this._element, "transitionend", (function () {
                    t.setTransitioning(!1), t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), K.trigger(t._element, "hidden.bs.collapse")
                })), m(this._element, r)
            }
        }, n.setTransitioning = function (t) {
            this._isTransitioning = t
        }, n.dispose = function () {
            t.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
        }, n._getConfig = function (t) {
            return (t = s({}, tt, t)).toggle = Boolean(t.toggle), _("collapse", t, et), t
        }, n._getDimension = function () {
            return this._element.classList.contains("width") ? "width" : "height"
        }, n._getParent = function () {
            var t = this, e = this._config.parent;
            return g(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = Q(e), q('[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]', e).forEach((function (e) {
                var n = d(e);
                t._addAriaAndCollapsedClass(n, [e])
            })), e
        }, n._addAriaAndCollapsedClass = function (t, e) {
            if (t && e.length) {
                var n = t.classList.contains("show");
                e.forEach((function (t) {
                    n ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", n)
                }))
            }
        }, e.collapseInterface = function (t, n) {
            var i = L(t, "bs.collapse"), o = s({}, tt, X.getDataAttributes(t), "object" == typeof n && n ? n : {});
            if (!i && o.toggle && "string" == typeof n && /show|hide/.test(n) && (o.toggle = !1), i || (i = new e(t, o)), "string" == typeof n) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]()
            }
        }, e.jQueryInterface = function (t) {
            return this.each((function () {
                e.collapseInterface(this, t)
            }))
        }, o(e, null, [{
            key: "Default", get: function () {
                return tt
            }
        }, {
            key: "DATA_KEY", get: function () {
                return "bs.collapse"
            }
        }]), e
    }(W);
    K.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        var e = X.getDataAttributes(this), n = h(this);
        q(n).forEach((function (t) {
            var n, i = L(t, "bs.collapse");
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, nt.collapseInterface(t, n)
        }))
    })), T("collapse", nt);
    var it = new RegExp("ArrowUp|ArrowDown|Escape"), ot = E ? "top-end" : "top-start", st = E ? "top-start" : "top-end",
        rt = E ? "bottom-end" : "bottom-start", at = E ? "bottom-start" : "bottom-end",
        lt = E ? "left-start" : "right-start", ct = E ? "right-start" : "left-start", ut = {
            offset: [0, 2],
            flip: !0,
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        }, ht = {
            offset: "(array|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)"
        }, dt = function (e) {
            function i(t, n) {
                var i;
                return (i = e.call(this, t) || this)._popper = null, i._config = i._getConfig(n), i._menu = i._getMenuElement(), i._inNavbar = i._detectNavbar(), i._addEventListeners(), i
            }

            r(i, e);
            var a = i.prototype;
            return a.toggle = function () {
                if (!this._element.disabled && !this._element.classList.contains("disabled")) {
                    var t = this._element.classList.contains("show");
                    i.clearMenus(), t || this.show()
                }
            }, a.show = function () {
                if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
                    var e = i.getParentFromElement(this._element), o = {relatedTarget: this._element};
                    if (!K.trigger(this._element, "show.bs.dropdown", o).defaultPrevented) {
                        if (this._inNavbar) X.setDataAttribute(this._menu, "popper", "none"); else {
                            if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            var s = this._element;
                            "parent" === this._config.reference ? s = e : g(this._config.reference) ? (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])) : "object" == typeof this._config.reference && (s = this._config.reference);
                            var r = this._getPopperConfig(), a = r.modifiers.find((function (t) {
                                return "applyStyles" === t.name && !1 === t.enabled
                            }));
                            this._popper = t.createPopper(s, this._menu, r), a && X.setDataAttribute(this._menu, "popper", "static")
                        }
                        var l;
                        "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (l = []).concat.apply(l, document.body.children).forEach((function (t) {
                            return K.on(t, "mouseover", null, (function () {
                            }))
                        })), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), K.trigger(this._element, "shown.bs.dropdown", o)
                    }
                }
            }, a.hide = function () {
                if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
                    var t = {relatedTarget: this._element};
                    K.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), X.removeDataAttribute(this._menu, "popper"), K.trigger(this._element, "hidden.bs.dropdown", t))
                }
            }, a.dispose = function () {
                e.prototype.dispose.call(this), K.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
            }, a.update = function () {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
            }, a._addEventListeners = function () {
                var t = this;
                K.on(this._element, "click.bs.dropdown", (function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                }))
            }, a._getConfig = function (t) {
                if (t = s({}, this.constructor.Default, X.getDataAttributes(this._element), t), _("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !g(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
                return t
            }, a._getMenuElement = function () {
                return function (t, e) {
                    for (var n = t.nextElementSibling; n;) {
                        if (n.matches(e)) return [n];
                        n = n.nextElementSibling
                    }
                    return []
                }(this._element, ".dropdown-menu")[0]
            }, a._getPlacement = function () {
                var t = this._element.parentNode;
                if (t.classList.contains("dropend")) return lt;
                if (t.classList.contains("dropstart")) return ct;
                var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return t.classList.contains("dropup") ? e ? st : ot : e ? at : rt
            }, a._detectNavbar = function () {
                return null !== this._element.closest(".navbar")
            }, a._getOffset = function () {
                var t = this, e = this._config.offset;
                return "string" == typeof e ? e.split(",").map((function (t) {
                    return Number.parseInt(t, 10)
                })) : "function" == typeof e ? function (n) {
                    return e(n, t._element)
                } : e
            }, a._getPopperConfig = function () {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: "preventOverflow",
                        options: {altBoundary: this._config.flip, boundary: this._config.boundary}
                    }, {name: "offset", options: {offset: this._getOffset()}}]
                };
                return "static" === this._config.display && (t.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }]), s({}, t, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig)
            }, i.dropdownInterface = function (t, e) {
                var n = L(t, "bs.dropdown");
                if (n || (n = new i(t, "object" == typeof e ? e : null)), "string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }, i.jQueryInterface = function (t) {
                return this.each((function () {
                    i.dropdownInterface(this, t)
                }))
            }, i.clearMenus = function (t) {
                if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key)) for (var e = q('[data-bs-toggle="dropdown"]'), n = 0, i = e.length; n < i; n++) {
                    var o = L(e[n], "bs.dropdown"), s = {relatedTarget: e[n]};
                    if (t && "click" === t.type && (s.clickEvent = t), o) {
                        var r, a = o._menu;
                        if (e[n].classList.contains("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && a.contains(t.target) || K.trigger(e[n], "hide.bs.dropdown", s).defaultPrevented)) "ontouchstart" in document.documentElement && (r = []).concat.apply(r, document.body.children).forEach((function (t) {
                            return K.off(t, "mouseover", null, (function () {
                            }))
                        })), e[n].setAttribute("aria-expanded", "false"), o._popper && o._popper.destroy(), a.classList.remove("show"), e[n].classList.remove("show"), X.removeDataAttribute(a, "popper"), K.trigger(e[n], "hidden.bs.dropdown", s)
                    }
                }
            }, i.getParentFromElement = function (t) {
                return d(t) || t.parentNode
            }, i.dataApiKeydownHandler = function (t) {
                if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !it.test(t.key)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
                    var e = i.getParentFromElement(this), n = this.classList.contains("show");
                    if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : $(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void i.clearMenus();
                    if (n || "ArrowUp" !== t.key && "ArrowDown" !== t.key) if (n && "Space" !== t.key) {
                        var o = q(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(v);
                        if (o.length) {
                            var s = o.indexOf(t.target);
                            "ArrowUp" === t.key && s > 0 && s--, "ArrowDown" === t.key && s < o.length - 1 && s++, o[s = -1 === s ? 0 : s].focus()
                        }
                    } else i.clearMenus(); else (this.matches('[data-bs-toggle="dropdown"]') ? this : $(this, '[data-bs-toggle="dropdown"]')[0]).click()
                }
            }, o(i, null, [{
                key: "Default", get: function () {
                    return ut
                }
            }, {
                key: "DefaultType", get: function () {
                    return ht
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.dropdown"
                }
            }]), i
        }(W);
    K.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', dt.dataApiKeydownHandler), K.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", dt.dataApiKeydownHandler), K.on(document, "click.bs.dropdown.data-api", dt.clearMenus), K.on(document, "keyup.bs.dropdown.data-api", dt.clearMenus), K.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) {
        t.preventDefault(), t.stopPropagation(), dt.dropdownInterface(this, "toggle")
    })), K.on(document, "click.bs.dropdown.data-api", ".dropdown form", (function (t) {
        return t.stopPropagation()
    })), T("dropdown", dt);
    var ft = {backdrop: !0, keyboard: !0, focus: !0},
        pt = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean"}, gt = function (t) {
            function e(e, n) {
                var i;
                return (i = t.call(this, e) || this)._config = i._getConfig(n), i._dialog = Q(".modal-dialog", e), i._backdrop = null, i._isShown = !1, i._isBodyOverflowing = !1, i._ignoreBackdropClick = !1, i._isTransitioning = !1, i._scrollbarWidth = 0, i
            }

            r(e, t);
            var n = e.prototype;
            return n.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, n.show = function (t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    this._element.classList.contains("fade") && (this._isTransitioning = !0);
                    var n = K.trigger(this._element, "show.bs.modal", {relatedTarget: t});
                    this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), K.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (function (t) {
                        return e.hide(t)
                    })), K.on(this._dialog, "mousedown.dismiss.bs.modal", (function () {
                        K.one(e._element, "mouseup.dismiss.bs.modal", (function (t) {
                            t.target === e._element && (e._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function () {
                        return e._showElement(t)
                    })))
                }
            }, n.hide = function (t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning && !K.trigger(this._element, "hide.bs.modal").defaultPrevented) {
                    this._isShown = !1;
                    var n = this._element.classList.contains("fade");
                    if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), K.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), K.off(this._element, "click.dismiss.bs.modal"), K.off(this._dialog, "mousedown.dismiss.bs.modal"), n) {
                        var i = f(this._element);
                        K.one(this._element, "transitionend", (function (t) {
                            return e._hideModal(t)
                        })), m(this._element, i)
                    } else this._hideModal()
                }
            }, n.dispose = function () {
                [window, this._element, this._dialog].forEach((function (t) {
                    return K.off(t, ".bs.modal")
                })), t.prototype.dispose.call(this), K.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function () {
                this._adjustDialog()
            }, n._getConfig = function (t) {
                return t = s({}, ft, t), _("modal", t, pt), t
            }, n._showElement = function (t) {
                var e = this, n = this._element.classList.contains("fade"), i = Q(".modal-body", this._dialog);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && y(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
                var o = function () {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, K.trigger(e._element, "shown.bs.modal", {relatedTarget: t})
                };
                if (n) {
                    var s = f(this._dialog);
                    K.one(this._dialog, "transitionend", o), m(this._dialog, s)
                } else o()
            }, n._enforceFocus = function () {
                var t = this;
                K.off(document, "focusin.bs.modal"), K.on(document, "focusin.bs.modal", (function (e) {
                    document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
                }))
            }, n._setEscapeEvent = function () {
                var t = this;
                this._isShown ? K.on(this._element, "keydown.dismiss.bs.modal", (function (e) {
                    t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
                })) : K.off(this._element, "keydown.dismiss.bs.modal")
            }, n._setResizeEvent = function () {
                var t = this;
                this._isShown ? K.on(window, "resize.bs.modal", (function () {
                    return t._adjustDialog()
                })) : K.off(window, "resize.bs.modal")
            }, n._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function () {
                    document.body.classList.remove("modal-open"), t._resetAdjustments(), t._resetScrollbar(), K.trigger(t._element, "hidden.bs.modal")
                }))
            }, n._removeBackdrop = function () {
                this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
            }, n._showBackdrop = function (t) {
                var e = this, n = this._element.classList.contains("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), K.on(this._element, "click.dismiss.bs.modal", (function (t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
                    })), n && y(this._backdrop), this._backdrop.classList.add("show"), !n) return void t();
                    var i = f(this._backdrop);
                    K.one(this._backdrop, "transitionend", t), m(this._backdrop, i)
                } else if (!this._isShown && this._backdrop) {
                    this._backdrop.classList.remove("show");
                    var o = function () {
                        e._removeBackdrop(), t()
                    };
                    if (this._element.classList.contains("fade")) {
                        var s = f(this._backdrop);
                        K.one(this._backdrop, "transitionend", o), m(this._backdrop, s)
                    } else o()
                } else t()
            }, n._triggerBackdropTransition = function () {
                var t = this;
                if (!K.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                    var n = f(this._dialog);
                    K.off(this._element, "transitionend"), K.one(this._element, "transitionend", (function () {
                        t._element.classList.remove("modal-static"), e || (K.one(t._element, "transitionend", (function () {
                            t._element.style.overflowY = ""
                        })), m(t._element, n))
                    })), m(this._element, n), this._element.focus()
                }
            }, n._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                (!this._isBodyOverflowing && t && !E || this._isBodyOverflowing && !t && E) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !E || !this._isBodyOverflowing && t && E) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function () {
                var t = this;
                this._isBodyOverflowing && (this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (function (e) {
                    return e + t._scrollbarWidth
                })), this._setElementAttributes(".sticky-top", "marginRight", (function (e) {
                    return e - t._scrollbarWidth
                })), this._setElementAttributes("body", "paddingRight", (function (e) {
                    return e + t._scrollbarWidth
                }))), document.body.classList.add("modal-open")
            }, n._setElementAttributes = function (t, e, n) {
                q(t).forEach((function (t) {
                    var i = t.style[e], o = window.getComputedStyle(t)[e];
                    X.setDataAttribute(t, e, i), t.style[e] = n(Number.parseFloat(o)) + "px"
                }))
            }, n._resetScrollbar = function () {
                this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight"), this._resetElementAttributes("body", "paddingRight")
            }, n._resetElementAttributes = function (t, e) {
                q(t).forEach((function (t) {
                    var n = X.getDataAttribute(t, e);
                    void 0 === n && t === document.body ? t.style[e] = "" : (X.removeDataAttribute(t, e), t.style[e] = n)
                }))
            }, n._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, e.jQueryInterface = function (t, n) {
                return this.each((function () {
                    var i = L(this, "bs.modal"),
                        o = s({}, ft, X.getDataAttributes(this), "object" == typeof t && t ? t : {});
                    if (i || (i = new e(this, o)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](n)
                    }
                }))
            }, o(e, null, [{
                key: "Default", get: function () {
                    return ft
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.modal"
                }
            }]), e
        }(W);
    K.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
        var e = this, n = d(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), K.one(n, "show.bs.modal", (function (t) {
            t.defaultPrevented || K.one(n, "hidden.bs.modal", (function () {
                v(e) && e.focus()
            }))
        }));
        var i = L(n, "bs.modal");
        if (!i) {
            var o = s({}, X.getDataAttributes(n), X.getDataAttributes(this));
            i = new gt(n, o)
        }
        i.toggle(this)
    })), T("modal", gt);
    var mt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        _t = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        vt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function bt(t, e, n) {
        var i;
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var o = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(e), r = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function (t, n) {
            var i, o = r[t], a = o.nodeName.toLowerCase();
            if (!s.includes(a)) return o.parentNode.removeChild(o), "continue";
            var l = (i = []).concat.apply(i, o.attributes), c = [].concat(e["*"] || [], e[a] || []);
            l.forEach((function (t) {
                (function (t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (e.includes(n)) return !mt.has(n) || Boolean(_t.test(t.nodeValue) || vt.test(t.nodeValue));
                    for (var i = e.filter((function (t) {
                        return t instanceof RegExp
                    })), o = 0, s = i.length; o < s; o++) if (i[o].test(n)) return !0;
                    return !1
                })(t, c) || o.removeAttribute(t.nodeName)
            }))
        }, l = 0, c = r.length; l < c; l++) a(l);
        return o.body.innerHTML
    }

    var yt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), wt = new Set(["sanitize", "allowList", "sanitizeFn"]), Et = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        }, Tt = {AUTO: "auto", TOP: "top", RIGHT: E ? "left" : "right", BOTTOM: "bottom", LEFT: E ? "right" : "left"},
        At = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        }, kt = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        }, Lt = function (e) {
            function i(t, i) {
                var o;
                if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                return (o = e.call(this, t) || this)._isEnabled = !0, o._timeout = 0, o._hoverState = "", o._activeTrigger = {}, o._popper = null, o.config = o._getConfig(i), o.tip = null, o._setListeners(), o
            }

            r(i, e);
            var a = i.prototype;
            return a.enable = function () {
                this._isEnabled = !0
            }, a.disable = function () {
                this._isEnabled = !1
            }, a.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, a.toggle = function (t) {
                if (this._isEnabled) if (t) {
                    var e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, a.dispose = function () {
                clearTimeout(this._timeout), K.off(this._element, this.constructor.EVENT_KEY), K.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, e.prototype.dispose.call(this)
            }, a.show = function () {
                var e = this;
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (this.isWithContent() && this._isEnabled) {
                    var n = K.trigger(this._element, this.constructor.Event.SHOW), i = function t(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var n = e.getRootNode();
                                return n instanceof ShadowRoot ? n : null
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                        }(this._element),
                        o = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
                    if (!n.defaultPrevented && o) {
                        var s = this.getTipElement(), r = c(this.constructor.NAME);
                        s.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && s.classList.add("fade");
                        var a = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this._element) : this.config.placement,
                            l = this._getAttachment(a);
                        this._addAttachmentClass(l);
                        var u = this._getContainer();
                        k(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || u.appendChild(s), K.trigger(this._element, this.constructor.Event.INSERTED), this._popper = t.createPopper(this._element, s, this._getPopperConfig(l)), s.classList.add("show");
                        var h, d,
                            p = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
                        p && (h = s.classList).add.apply(h, p.split(" ")), "ontouchstart" in document.documentElement && (d = []).concat.apply(d, document.body.children).forEach((function (t) {
                            K.on(t, "mouseover", (function () {
                            }))
                        }));
                        var g = function () {
                            var t = e._hoverState;
                            e._hoverState = null, K.trigger(e._element, e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
                        };
                        if (this.tip.classList.contains("fade")) {
                            var _ = f(this.tip);
                            K.one(this.tip, "transitionend", g), m(this.tip, _)
                        } else g()
                    }
                }
            }, a.hide = function () {
                var t = this;
                if (this._popper) {
                    var e = this.getTipElement(), n = function () {
                        "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), K.trigger(t._element, t.constructor.Event.HIDDEN), t._popper && (t._popper.destroy(), t._popper = null)
                    };
                    if (!K.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                        var i;
                        if (e.classList.remove("show"), "ontouchstart" in document.documentElement && (i = []).concat.apply(i, document.body.children).forEach((function (t) {
                            return K.off(t, "mouseover", b)
                        })), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
                            var o = f(e);
                            K.one(e, "transitionend", n), m(e, o)
                        } else n();
                        this._hoverState = ""
                    }
                }
            }, a.update = function () {
                null !== this._popper && this._popper.update()
            }, a.isWithContent = function () {
                return Boolean(this.getTitle())
            }, a.getTipElement = function () {
                if (this.tip) return this.tip;
                var t = document.createElement("div");
                return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
            }, a.setContent = function () {
                var t = this.getTipElement();
                this.setElementContent(Q(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
            }, a.setElementContent = function (t, e) {
                if (null !== t) return "object" == typeof e && g(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = bt(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
            }, a.getTitle = function () {
                var t = this._element.getAttribute("data-bs-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t
            }, a.updateAttachment = function (t) {
                return "right" === t ? "end" : "left" === t ? "start" : t
            }, a._initializeOnDelegatedTarget = function (t, e) {
                var n = this.constructor.DATA_KEY;
                return (e = e || L(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), k(t.delegateTarget, n, e)), e
            }, a._getOffset = function () {
                var t = this, e = this.config.offset;
                return "string" == typeof e ? e.split(",").map((function (t) {
                    return Number.parseInt(t, 10)
                })) : "function" == typeof e ? function (n) {
                    return e(n, t._element)
                } : e
            }, a._getPopperConfig = function (t) {
                var e = this, n = {
                    placement: t,
                    modifiers: [{
                        name: "flip",
                        options: {altBoundary: !0, fallbackPlacements: this.config.fallbackPlacements}
                    }, {name: "offset", options: {offset: this._getOffset()}}, {
                        name: "preventOverflow",
                        options: {boundary: this.config.boundary}
                    }, {name: "arrow", options: {element: "." + this.constructor.NAME + "-arrow"}}, {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: function (t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }],
                    onFirstUpdate: function (t) {
                        t.options.placement !== t.placement && e._handlePopperPlacementChange(t)
                    }
                };
                return s({}, n, "function" == typeof this.config.popperConfig ? this.config.popperConfig(n) : this.config.popperConfig)
            }, a._addAttachmentClass = function (t) {
                this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
            }, a._getContainer = function () {
                return !1 === this.config.container ? document.body : g(this.config.container) ? this.config.container : Q(this.config.container)
            }, a._getAttachment = function (t) {
                return Tt[t.toUpperCase()]
            }, a._setListeners = function () {
                var t = this;
                this.config.trigger.split(" ").forEach((function (e) {
                    if ("click" === e) K.on(t._element, t.constructor.Event.CLICK, t.config.selector, (function (e) {
                        return t.toggle(e)
                    })); else if ("manual" !== e) {
                        var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        K.on(t._element, n, t.config.selector, (function (e) {
                            return t._enter(e)
                        })), K.on(t._element, i, t.config.selector, (function (e) {
                            return t._leave(e)
                        }))
                    }
                })), this._hideModalHandler = function () {
                    t._element && t.hide()
                }, K.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, a._fixTitle = function () {
                var t = this._element.getAttribute("title"),
                    e = typeof this._element.getAttribute("data-bs-original-title");
                (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
            }, a._enter = function (t, e) {
                e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function () {
                    "show" === e._hoverState && e.show()
                }), e.config.delay.show) : e.show())
            }, a._leave = function (t, e) {
                e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function () {
                    "out" === e._hoverState && e.hide()
                }), e.config.delay.hide) : e.hide())
            }, a._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                return !1
            }, a._getConfig = function (t) {
                var e = X.getDataAttributes(this._element);
                return Object.keys(e).forEach((function (t) {
                    wt.has(t) && delete e[t]
                })), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = s({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = bt(t.template, t.allowList, t.sanitizeFn)), t
            }, a._getDelegateConfig = function () {
                var t = {};
                if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, a._cleanTipClass = function () {
                var t = this.getTipElement(), e = t.getAttribute("class").match(yt);
                null !== e && e.length > 0 && e.map((function (t) {
                    return t.trim()
                })).forEach((function (e) {
                    return t.classList.remove(e)
                }))
            }, a._handlePopperPlacementChange = function (t) {
                var e = t.state;
                e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
            }, i.jQueryInterface = function (t) {
                return this.each((function () {
                    var e = L(this, "bs.tooltip"), n = "object" == typeof t && t;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this, n)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, o(i, null, [{
                key: "Default", get: function () {
                    return At
                }
            }, {
                key: "NAME", get: function () {
                    return "tooltip"
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.tooltip"
                }
            }, {
                key: "Event", get: function () {
                    return kt
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType", get: function () {
                    return Et
                }
            }]), i
        }(W);
    T("tooltip", Lt);
    var Ct = new RegExp("(^|\\s)bs-popover\\S+", "g"), Dt = s({}, Lt.Default, {
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), St = s({}, Lt.DefaultType, {content: "(string|element|function)"}), Nt = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }, Ot = function (t) {
        function e() {
            return t.apply(this, arguments) || this
        }

        r(e, t);
        var n = e.prototype;
        return n.isWithContent = function () {
            return this.getTitle() || this._getContent()
        }, n.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(Q(".popover-header", t), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)), this.setElementContent(Q(".popover-body", t), e), t.classList.remove("fade", "show")
        }, n._addAttachmentClass = function (t) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
        }, n._getContent = function () {
            return this._element.getAttribute("data-bs-content") || this.config.content
        }, n._cleanTipClass = function () {
            var t = this.getTipElement(), e = t.getAttribute("class").match(Ct);
            null !== e && e.length > 0 && e.map((function (t) {
                return t.trim()
            })).forEach((function (e) {
                return t.classList.remove(e)
            }))
        }, e.jQueryInterface = function (t) {
            return this.each((function () {
                var n = L(this, "bs.popover"), i = "object" == typeof t ? t : null;
                if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, i), k(this, "bs.popover", n)), "string" == typeof t)) {
                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                    n[t]()
                }
            }))
        }, o(e, null, [{
            key: "Default", get: function () {
                return Dt
            }
        }, {
            key: "NAME", get: function () {
                return "popover"
            }
        }, {
            key: "DATA_KEY", get: function () {
                return "bs.popover"
            }
        }, {
            key: "Event", get: function () {
                return Nt
            }
        }, {
            key: "EVENT_KEY", get: function () {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType", get: function () {
                return St
            }
        }]), e
    }(Lt);
    T("popover", Ot);
    var It = {offset: 10, method: "auto", target: ""},
        jt = {offset: "number", method: "string", target: "(string|element)"}, Pt = function (t) {
            function e(e, n) {
                var i;
                return (i = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e, i._config = i._getConfig(n), i._selector = i._config.target + " .nav-link, " + i._config.target + " .list-group-item, " + i._config.target + " .dropdown-item", i._offsets = [], i._targets = [], i._activeTarget = null, i._scrollHeight = 0, K.on(i._scrollElement, "scroll.bs.scrollspy", (function () {
                    return i._process()
                })), i.refresh(), i._process(), i
            }

            r(e, t);
            var n = e.prototype;
            return n.refresh = function () {
                var t = this, e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    n = "auto" === this._config.method ? e : this._config.method,
                    i = "position" === n ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), q(this._selector).map((function (t) {
                    var e = h(t), o = e ? Q(e) : null;
                    if (o) {
                        var s = o.getBoundingClientRect();
                        if (s.width || s.height) return [X[n](o).top + i, e]
                    }
                    return null
                })).filter((function (t) {
                    return t
                })).sort((function (t, e) {
                    return t[0] - e[0]
                })).forEach((function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                }))
            }, n.dispose = function () {
                t.prototype.dispose.call(this), K.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function (t) {
                if ("string" != typeof (t = s({}, It, "object" == typeof t && t ? t : {})).target && g(t.target)) {
                    var e = t.target.id;
                    e || (e = c("scrollspy"), t.target.id = e), t.target = "#" + e
                }
                return _("scrollspy", t, jt), t
            }, n._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }, n._activate = function (t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map((function (e) {
                    return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
                })), n = Q(e.join(","));
                n.classList.contains("dropdown-item") ? (Q(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), function (t, e) {
                    for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && n.push(i), i = i.parentNode;
                    return n
                }(n, ".nav, .list-group").forEach((function (t) {
                    $(t, ".nav-link, .list-group-item").forEach((function (t) {
                        return t.classList.add("active")
                    })), $(t, ".nav-item").forEach((function (t) {
                        V(t, ".nav-link").forEach((function (t) {
                            return t.classList.add("active")
                        }))
                    }))
                }))), K.trigger(this._scrollElement, "activate.bs.scrollspy", {relatedTarget: t})
            }, n._clear = function () {
                q(this._selector).filter((function (t) {
                    return t.classList.contains("active")
                })).forEach((function (t) {
                    return t.classList.remove("active")
                }))
            }, e.jQueryInterface = function (t) {
                return this.each((function () {
                    var n = L(this, "bs.scrollspy");
                    if (n || (n = new e(this, "object" == typeof t && t)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                }))
            }, o(e, null, [{
                key: "Default", get: function () {
                    return It
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.scrollspy"
                }
            }]), e
        }(W);
    K.on(window, "load.bs.scrollspy.data-api", (function () {
        q('[data-bs-spy="scroll"]').forEach((function (t) {
            return new Pt(t, X.getDataAttributes(t))
        }))
    })), T("scrollspy", Pt);
    var xt = function (t) {
        function e() {
            return t.apply(this, arguments) || this
        }

        r(e, t);
        var n = e.prototype;
        return n.show = function () {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
                var e, n = d(this._element), i = this._element.closest(".nav, .list-group");
                if (i) {
                    var o = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                    e = (e = q(o, i))[e.length - 1]
                }
                var s = e ? K.trigger(e, "hide.bs.tab", {relatedTarget: this._element}) : null;
                if (!(K.trigger(this._element, "show.bs.tab", {relatedTarget: e}).defaultPrevented || null !== s && s.defaultPrevented)) {
                    this._activate(this._element, i);
                    var r = function () {
                        K.trigger(e, "hidden.bs.tab", {relatedTarget: t._element}), K.trigger(t._element, "shown.bs.tab", {relatedTarget: e})
                    };
                    n ? this._activate(n, n.parentNode, r) : r()
                }
            }
        }, n._activate = function (t, e, n) {
            var i = this,
                o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V(e, ".active") : q(":scope > li > .active", e))[0],
                s = n && o && o.classList.contains("fade"), r = function () {
                    return i._transitionComplete(t, o, n)
                };
            if (o && s) {
                var a = f(o);
                o.classList.remove("show"), K.one(o, "transitionend", r), m(o, a)
            } else r()
        }, n._transitionComplete = function (t, e, n) {
            if (e) {
                e.classList.remove("active");
                var i = Q(":scope > .dropdown-menu .active", e.parentNode);
                i && i.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), y(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && q(".dropdown-toggle").forEach((function (t) {
                return t.classList.add("active")
            })), t.setAttribute("aria-expanded", !0)), n && n()
        }, e.jQueryInterface = function (t) {
            return this.each((function () {
                var n = L(this, "bs.tab") || new e(this);
                if ("string" == typeof t) {
                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                    n[t]()
                }
            }))
        }, o(e, null, [{
            key: "DATA_KEY", get: function () {
                return "bs.tab"
            }
        }]), e
    }(W);
    K.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
        t.preventDefault(), (L(this, "bs.tab") || new xt(this)).show()
    })), T("tab", xt);
    var Ht = {animation: "boolean", autohide: "boolean", delay: "number"},
        Bt = {animation: !0, autohide: !0, delay: 5e3}, Mt = function (t) {
            function e(e, n) {
                var i;
                return (i = t.call(this, e) || this)._config = i._getConfig(n), i._timeout = null, i._setListeners(), i
            }

            r(e, t);
            var n = e.prototype;
            return n.show = function () {
                var t = this;
                if (!K.trigger(this._element, "show.bs.toast").defaultPrevented) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    var e = function () {
                        t._element.classList.remove("showing"), t._element.classList.add("show"), K.trigger(t._element, "shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function () {
                            t.hide()
                        }), t._config.delay))
                    };
                    if (this._element.classList.remove("hide"), y(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var n = f(this._element);
                        K.one(this._element, "transitionend", e), m(this._element, n)
                    } else e()
                }
            }, n.hide = function () {
                var t = this;
                if (this._element.classList.contains("show") && !K.trigger(this._element, "hide.bs.toast").defaultPrevented) {
                    var e = function () {
                        t._element.classList.add("hide"), K.trigger(t._element, "hidden.bs.toast")
                    };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var n = f(this._element);
                        K.one(this._element, "transitionend", e), m(this._element, n)
                    } else e()
                }
            }, n.dispose = function () {
                this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), K.off(this._element, "click.dismiss.bs.toast"), t.prototype.dispose.call(this), this._config = null
            }, n._getConfig = function (t) {
                return t = s({}, Bt, X.getDataAttributes(this._element), "object" == typeof t && t ? t : {}), _("toast", t, this.constructor.DefaultType), t
            }, n._setListeners = function () {
                var t = this;
                K.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (function () {
                    return t.hide()
                }))
            }, n._clearTimeout = function () {
                clearTimeout(this._timeout), this._timeout = null
            }, e.jQueryInterface = function (t) {
                return this.each((function () {
                    var n = L(this, "bs.toast");
                    if (n || (n = new e(this, "object" == typeof t && t)), "string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t](this)
                    }
                }))
            }, o(e, null, [{
                key: "DefaultType", get: function () {
                    return Ht
                }
            }, {
                key: "Default", get: function () {
                    return Bt
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.toast"
                }
            }]), e
        }(W);
    return T("toast", Mt), {
        Alert: U,
        Button: F,
        Carousel: J,
        Collapse: nt,
        Dropdown: dt,
        Modal: gt,
        Popover: Ot,
        ScrollSpy: Pt,
        Tab: xt,
        Toast: Mt,
        Tooltip: Lt
    }
}));
//# sourceMappingURL=bootstrap.min.js.map