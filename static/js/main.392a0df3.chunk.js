(this["webpackJsonpi-will-be-soon"] =
  this["webpackJsonpi-will-be-soon"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        l = n(1),
        i = n.n(l),
        c = n(4),
        a = n.n(c),
        o = (n(13), n(5)),
        s = n(2),
        m = n.n(s),
        u = "static/media/1.2f61e5bf.png",
        p = "static/media/2.76ba9c48.png",
        f = "static/media/3.6bfebc59.png",
        d = "static/media/4.bac6d924.png",
        b = "static/media/5.6e47bb5b.png",
        g = "static/media/6.5e590ce1.png",
        h = "static/media/7.202a542a.png",
        v = "static/media/8.50b409e8.png",
        j = "static/media/9.f69cd60b.png",
        w = "static/media/10.ee0f99b3.png",
        O = n(6),
        x = n.n(O),
        y = n(7),
        _ = n.n(y),
        N =
          (n(15),
          function (e) {
            var t = Object(l.useRef)(null),
              n = e.className,
              i = e.image,
              c = e.phoneNumber,
              a = m()("preview", n),
              o = "8 888 888 88 88";
            if (e.previewMode) {
              return (
                (a = m()(a, "preview--small")),
                Object(r.jsxs)("div", {
                  className: a,
                  onClick: function () {
                    return e.onIllustrationChange(i);
                  },
                  children: [
                    Object(r.jsx)("p", {
                      className: "preview__phone-number ",
                      children: c || o,
                    }),
                    Object(r.jsx)("img", {
                      className: "preview__illustration",
                      src: i,
                      alt:
                        "\u0418\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
                    }),
                  ],
                })
              );
            }
            if (!e.previewMode) {
              var s = 15 !== c.length;
              return Object(r.jsxs)("div", {
                className: a,
                children: [
                  Object(r.jsxs)("p", {
                    className: "preview__paragraph",
                    children: [
                      "\u0422\u0412\u041e\u0419 \u041d\u041e\u041c\u0415\u0420 ",
                      Object(r.jsx)("span", {
                        className: "preview__arrow",
                        children: "\u2193",
                      }),
                    ],
                  }),
                  Object(r.jsxs)("div", {
                    className: "preview__cut-here",
                    ref: t,
                    children: [
                      Object(r.jsx)("div", {
                        className: "preview__phone-number-container",
                        children: Object(r.jsx)(x.a, {
                          className: "preview__phone-number",
                          mask: "9 999 999 99 99",
                          maskChar: null,
                          onChange: e.onPhoneNumberChange,
                          value: c,
                          placeholder: o,
                        }),
                      }),
                      Object(r.jsx)("img", {
                        className: "preview__illustration",
                        src: i,
                        alt:
                          "\u0418\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
                      }),
                    ],
                  }),
                  Object(r.jsx)(z, {
                    currentIllustration: i,
                    className: "preview__cards",
                    phoneNumber: c,
                    onIllustrationChange: e.onIllustrationChange,
                  }),
                  Object(r.jsx)("button", {
                    className: "preview__save-button",
                    onClick: function () {
                      t &&
                        t.current &&
                        _()(t.current, { scale: 5 }).then(function (e) {
                          !(function (e) {
                            var t = document.createElement("a");
                            (t.href = e),
                              (t.download =
                                "\u0421\u043a\u043e\u0440\u043e\u0411\u0443\u0434\u0443.png"),
                              t.click();
                          })(e.toDataURL("image/png"));
                        });
                    },
                    disabled: s,
                    children:
                      "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
                  }),
                ],
              });
            }
            return null;
          }),
        z =
          (n(16),
          function (e) {
            var t = e.phoneNumber,
              n = e.onIllustrationChange,
              l = e.className,
              i = e.currentIllustration,
              c = [u, p, f, d, b, g, h, v, j, w],
              a = m()("cards", l);
            return Object(r.jsx)("div", {
              className: a,
              children: c.map(function (e) {
                return Object(r.jsx)(
                  N,
                  {
                    className: m()("cards__preview", {
                      "cards__preview--current": e === i,
                    }),
                    phoneNumber: t,
                    image: e,
                    onIllustrationChange: function () {
                      n(e);
                    },
                    previewMode: !0,
                  },
                  e
                );
              }),
            });
          });
      function k() {
        return (k =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function R(e, t) {
        if (null == e) return {};
        var n,
          r,
          l = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              l = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (l[n] = e[n]));
        }
        return l;
      }
      var E = l.createElement("polygon", {
          fill: "black",
          points: "0,0 2047,0 2047,614 0,614 ",
        }),
        I = l.createElement("path", {
          fill: "#fefefe",
          fillRule: "nonzero",
          d:
            "M390 256c11,-7 19,-15 26,-23 7,-8 11,-18 14,-29 5,-21 2,-38 -9,-49 -11,-11 -30,-17 -55,-17l-121 0 -60 247 122 0c27,0 50,-6 69,-18 10,-7 19,-15 25,-25 7,-9 11,-20 13,-31 3,-14 2,-25 -2,-34 -4,-9 -11,-16 -22,-21zm-74 35c13,0 18,6 15,16 -1,6 -4,10 -8,13 -3,2 -8,3 -15,3l-28 0 8 -32 28 0zm15 -91c12,0 17,5 15,15 -2,5 -4,9 -8,11 -3,2 -8,3 -14,3l-21 0 8 -29 20 0zm169 121c-19,0 -26,-9 -22,-25l38 -158 -80 0 -37 153c-4,15 -5,29 -3,41 1,12 6,23 13,32 7,8 17,15 29,19 13,5 28,7 45,7 18,0 34,-2 48,-7 15,-4 28,-11 39,-19 12,-9 21,-20 29,-32 8,-12 14,-26 17,-41l38 -153 -81 0 -39 158c-4,16 -15,25 -34,25zm82 64l173 0 18 -70 -93 0 43 -177 -81 0 -60 247zm153 0l174 0 17 -70 -93 0 43 -177 -80 0 -61 247zm404 -146c4,-16 5,-30 3,-42 -2,-13 -7,-23 -14,-32 -7,-9 -17,-15 -30,-20 -12,-5 -28,-7 -45,-7l-104 0 -60 247 104 0c17,0 33,-2 48,-7 15,-5 29,-11 40,-20 12,-9 21,-19 29,-32 8,-12 14,-26 18,-42l11 -45zm-91 43c-3,12 -7,20 -14,25 -6,6 -16,8 -29,8l-18 0 26 -107 19 0c12,0 20,2 24,8 4,5 5,14 2,25l-10 41zm119 -122c-23,17 -39,42 -47,74l-13 55c-8,32 -4,57 11,75 15,17 40,26 75,26 35,0 65,-9 89,-26 23,-18 39,-43 47,-75l13 -55c8,-32 4,-57 -11,-74 -15,-18 -40,-27 -75,-27 -36,0 -65,9 -89,27zm35 69c4,-17 17,-26 37,-26 20,0 28,9 24,26l-16 65c-4,18 -17,26 -37,26 -20,0 -28,-8 -24,-26l16 -65zm141 -91l-17 70 88 0 -121 132 -11 45 201 0 17 -70 -91 0 121 -131 12 -46 -199 0zm244 88l4 -18 102 0 17 -70 -183 0 -60 247 185 0 17 -70 -104 0 5 -20 82 0 17 -69 -82 0zm129 159l19 -76 13 0 37 172 93 0 -46 -185c26,-15 43,-38 51,-71 3,-14 4,-26 2,-37 -1,-11 -5,-20 -11,-27 -6,-8 -14,-13 -25,-17 -10,-4 -22,-6 -36,-6l-117 0 -60 247 80 0zm44 -177l26 0c6,0 10,1 12,4 2,3 3,8 2,13 -2,5 -4,9 -8,13 -4,3 -9,5 -14,5l-27 0 9 -35z",
        }),
        P = l.createElement("polygon", {
          fill: "#fefefe",
          fillRule: "nonzero",
          points: "1845,481 161,481 178,412 1850,412 ",
        });
      function C(e, t) {
        var n = e.title,
          r = e.titleId,
          i = R(e, ["title", "titleId"]);
        return l.createElement(
          "svg",
          k(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlSpace: "preserve",
              width: "33.4652mm",
              height: "10.0395mm",
              style: {
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              },
              viewBox: "0 0 2047 614",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r,
            },
            i
          ),
          n ? l.createElement("title", { id: r }, n) : null,
          E,
          I,
          P
        );
      }
      var S = l.forwardRef(C);
      n.p;
      function M() {
        return (M =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function B(e, t) {
        if (null == e) return {};
        var n,
          r,
          l = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              l = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (l[n] = e[n]));
        }
        return l;
      }
      var L = l.createElement("path", {
          fill: "black",
          d:
            "M91 0l138 0c50,0 91,41 91,91l0 138c0,50 -41,91 -91,91l-138 0c-50,0 -91,-41 -91,-91l0 -138c0,-50 41,-91 91,-91zm0 28l138 0c35,0 63,29 63,63l0 138c0,35 -28,63 -63,63l-138 0c-34,0 -63,-28 -63,-63l0 -138c0,-34 29,-63 63,-63z",
        }),
        D = l.createElement("path", {
          fill: "black",
          d:
            "M88 106l-31 0c-8,0 -8,6 0,21 18,40 40,70 65,88 15,7 30,12 50,9 5,0 7,-5 7,-13 3,-22 12,-16 22,-6 10,12 17,20 27,20l33 0c10,-1 11,-8 3,-19 -9,-10 -18,-18 -26,-27 -6,-5 -6,-12 3,-23 11,-12 21,-26 27,-40 3,-6 0,-9 -6,-10l-37 0c-4,0 -7,3 -10,8l-19 36c-12,15 -18,15 -18,0l1 -33c0,-9 -3,-15 -11,-16 -11,-1 -22,-1 -33,0 -5,1 -9,3 -11,6 -2,2 -1,4 2,3 6,1 9,5 9,12l1 27c-1,11 -5,15 -11,11 -10,-11 -19,-26 -27,-46 -2,-6 -6,-8 -10,-8z",
        });
      function F(e, t) {
        var n = e.title,
          r = e.titleId,
          i = B(e, ["title", "titleId"]);
        return l.createElement(
          "svg",
          M(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlSpace: "preserve",
              width: "8.0358mm",
              height: "8.0358mm",
              style: {
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              },
              viewBox: "0 0 320 320",
              ref: t,
              "aria-labelledby": r,
            },
            i
          ),
          n ? l.createElement("title", { id: r }, n) : null,
          L,
          D
        );
      }
      var Q = l.forwardRef(F);
      n.p;
      function T() {
        return (T =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function J(e, t) {
        if (null == e) return {};
        var n,
          r,
          l = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              l = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (l[n] = e[n]));
        }
        return l;
      }
      var U = l.createElement(
        "g",
        { id: "_1214526576" },
        l.createElement("path", {
          fill: "black",
          d:
            "M84 40c23,0 43,20 43,44 0,23 -20,43 -43,43 -24,0 -44,-20 -44,-43 0,-24 20,-44 44,-44zm0 16c15,0 28,12 28,28 0,15 -13,28 -28,28 -16,0 -28,-13 -28,-28 0,-16 12,-28 28,-28z",
        }),
        l.createElement("path", {
          fill: "black",
          d:
            "M129 28c6,0 11,5 11,11 0,6 -5,10 -11,10 -6,0 -10,-4 -10,-10 0,-6 4,-11 10,-11z",
        }),
        l.createElement("path", {
          fill: "black",
          d:
            "M48 0l72 0c26,0 47,21 47,48l0 72c0,26 -21,47 -47,47l-72 0c-27,0 -48,-21 -48,-47l0 -72c0,-27 21,-48 48,-48zm0 15l72 0c18,0 32,15 32,33l0 72c0,18 -14,32 -32,32l-72 0c-18,0 -33,-14 -33,-32l0 -72c0,-18 15,-33 33,-33z",
        })
      );
      function X(e, t) {
        var n = e.title,
          r = e.titleId,
          i = J(e, ["title", "titleId"]);
        return l.createElement(
          "svg",
          T(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlSpace: "preserve",
              width: "8.0358mm",
              height: "8.0358mm",
              style: {
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              },
              viewBox: "0 0 167 167",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              ref: t,
              "aria-labelledby": r,
            },
            i
          ),
          n ? l.createElement("title", { id: r }, n) : null,
          U
        );
      }
      var A = l.forwardRef(X),
        G =
          (n.p,
          n(17),
          function (e) {
            var t = e.className,
              n = "https://www.instagram.com/bulldozerarts",
              l = "https://www.vk.com/bulldozerarts",
              i = "bulldozerarts@gmail.com",
              c = [
                {
                  icon: Object(r.jsx)(S, {}),
                  link: "mailto:".concat(i),
                  title: i,
                  target: "_self",
                },
                {
                  icon: Object(r.jsx)(A, {}),
                  link: n,
                  title: n,
                  target: "_blank",
                },
                {
                  icon: Object(r.jsx)(Q, {}),
                  link: l,
                  title: l,
                  target: "_blank",
                },
              ],
              a = m()("colontitle", t);
            return Object(r.jsxs)("p", {
              className: a,
              children: [
                Object(r.jsx)("span", { children: "DESIGN BY" }),
                " ",
                c.map(function (e, t) {
                  var n = m()("colontitle__link", {
                    "colontitle__link--with-large-margin": 0 === t,
                  });
                  return Object(r.jsx)(
                    "a",
                    {
                      className: n,
                      href: e.link,
                      target: e.target,
                      title: e.title,
                      rel: "noreferrer",
                      children: e.icon,
                    },
                    t
                  );
                }),
                " ",
                Object(r.jsx)("span", { children: "BULLDOZERARTS" }),
              ],
            });
          }),
        Y =
          (n(18),
          function () {
            var e = Object(l.useState)(""),
              t = Object(o.a)(e, 2),
              n = t[0],
              i = t[1],
              c = Object(l.useState)(u),
              a = Object(o.a)(c, 2),
              s = a[0],
              m = a[1],
              p = function (e) {
                m(e);
              };
            return Object(r.jsxs)("div", {
              className: "form container",
              children: [
                Object(r.jsxs)("div", {
                  className: "form__preview-container",
                  children: [
                    Object(r.jsx)(N, {
                      className: "form__preview",
                      image: s,
                      phoneNumber: n,
                      onPhoneNumberChange: function (e) {
                        var t = e.target.value;
                        i(t);
                      },
                      onIllustrationChange: p,
                    }),
                    Object(r.jsx)(G, { className: "form__colontitle" }),
                  ],
                }),
                Object(r.jsx)(z, {
                  currentIllustration: s,
                  className: "form__cards",
                  phoneNumber: n,
                  onIllustrationChange: p,
                }),
              ],
            });
          }),
        Z = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 20))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  l = t.getFCP,
                  i = t.getLCP,
                  c = t.getTTFB;
                n(e), r(e), l(e), i(e), c(e);
              });
        };
      a.a.render(
        Object(r.jsx)(i.a.StrictMode, { children: Object(r.jsx)(Y, {}) }),
        document.getElementById("root")
      ),
        Z();
    },
  ],
  [[19, 1, 2]],
]);
//# sourceMappingURL=main.392a0df3.chunk.js.map
