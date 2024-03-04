/*!
   JW Player version 8.31.0
   Copyright (c) 2024, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.31.0/notice.txt
*/
(() => {
  var e,
    t,
    n = {
      696: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => r,
        });
        const r = {
          advertising: {
            admessage: "This ad will end in xx",
            cuetext: "Advertisement",
            displayHeading: "Advertisement",
            loadingAd: "Loading ad",
            podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
            skipmessage: "Skip ad in xx",
            skiptext: "Skip",
          },
          airplay: "AirPlay",
          audioTracks: "Audio Tracks",
          auto: "Auto",
          buffer: "Loading",
          cast: "Chromecast",
          cc: "Closed Captions",
          close: "Close",
          errors: {
            badConnection:
              "This video cannot be played because of a problem with your internet connection.",
            cantLoadPlayer: "Sorry, the video player failed to load.",
            cantPlayInBrowser: "The video cannot be played in this browser.",
            cantPlayVideo: "This video file cannot be played.",
            errorCode: "Error Code",
            liveStreamDown: "The live stream is either down or has ended.",
            protectedContent:
              "There was a problem providing access to protected content.",
            technicalError:
              "This video cannot be played because of a technical error.",
          },
          exitFullscreen: "Exit Fullscreen",
          fullscreen: "Fullscreen",
          hd: "Quality",
          liveBroadcast: "Live",
          logo: "Logo",
          mute: "Mute",
          next: "Next",
          nextUp: "Next Up",
          notLive: "Not Live",
          off: "Off",
          pause: "Pause",
          pipIcon: "Picture in Picture (PiP)",
          play: "Play",
          playback: "Play",
          playbackRates: "Playback Rates",
          player: "Video Player",
          poweredBy: "Powered by",
          prev: "Previous",
          related: {
            autoplaymessage: "Next up in xx",
            heading: "More Videos",
          },
          replay: "Replay",
          rewind: "Rewind 10 Seconds",
          settings: "Settings",
          sharing: {
            copied: "Copied",
            email: "Email",
            embed: "Embed",
            heading: "Share",
            link: "Link",
          },
          slider: "Seek",
          stop: "Stop",
          unmute: "Unmute",
          videoInfo: "About This Video",
          volume: "Volume",
          volumeSlider: "Volume",
          shortcuts: {
            playPause: "Play/Pause",
            volumeToggle: "Mute/Unmute",
            fullscreenToggle: "Fullscreen/Exit Fullscreen",
            seekPercent: "Seek %",
            keyboardShortcuts: "Keyboard Shortcuts",
            increaseVolume: "Increase Volume",
            decreaseVolume: "Decrease Volume",
            seekForward: "Seek Forward",
            seekBackward: "Seek Backward",
            spacebar: "SPACE",
            captionsToggle: "Captions On/Off",
          },
          captionsStyles: {
            subtitleSettings: "Subtitle Settings",
            color: "Font Color",
            fontOpacity: "Font Opacity",
            userFontScale: "Font Size",
            fontFamily: "Font Family",
            edgeStyle: "Character Edge",
            backgroundColor: "Background Color",
            backgroundOpacity: "Background Opacity",
            windowColor: "Window Color",
            windowOpacity: "Window Opacity",
            white: "White",
            black: "Black",
            red: "Red",
            green: "Green",
            blue: "Blue",
            yellow: "Yellow",
            magenta: "Magenta",
            cyan: "Cyan",
            none: "None",
            raised: "Raised",
            depressed: "Depressed",
            uniform: "Uniform",
            dropShadow: "Drop Shadow",
          },
          disabled: "Disabled",
          enabled: "Enabled",
          reset: "Reset",
        };
      },
      9128: (e, t, n) => {
        "use strict";

        function r(e, t, n) {
          const r = [],
            i = {},
            o = function () {
              for (; r.length > 0; ) {
                const { command: t, args: n } = r.shift();
                (i[t] || e[t]).apply(e, n);
              }
            };
          t.forEach((t) => {
            const s = e[t];
            (i[t] = s),
              (e[t] = function (...e) {
                n()
                  ? r.push({
                      command: t,
                      args: e,
                    })
                  : (o(), s && s.apply(this, e));
              });
          }),
            Object.defineProperty(this, "queue", {
              enumerable: !0,
              get: () => r,
            }),
            (this.flush = o),
            (this.empty = function () {
              r.length = 0;
            }),
            (this.off = function () {
              t.forEach((t) => {
                const n = i[t];
                n && ((e[t] = n), delete i[t]);
              });
            }),
            (this.destroy = function () {
              this.off(), this.empty();
            });
        }
        n.d(t, {
          Z: () => r,
        });
      },
      4742: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => r,
        });
        const r = {
          debug: !1,
        };
      },
      5191: (e, t, n) => {
        "use strict";
        n.d(t, {
          R: () => i,
          a: () => r,
        });
        const r = function (e) {
            return e.slice && "px" === e.slice(-2) && (e = e.slice(0, -2)), e;
          },
          i = function (e, t) {
            if (-1 === t.toString().indexOf("%")) return 0;
            if ("string" != typeof e || !e) return 0;
            if (/^\d*\.?\d+%$/.test(e)) return e;
            const n = e.indexOf(":");
            if (-1 === n) return 0;
            const r = parseFloat(e.substr(0, n)),
              i = parseFloat(e.substr(n + 1));
            return r <= 0 || i <= 0 ? 0 : (i / r) * 100 + "%";
          };
      },
      5083: (e, t, n) => {
        "use strict";
        n.d(t, {
          G0: () => d,
          ZP: () => p,
          ke: () => u,
        });
        var r = n(5191),
          i = n(1569),
          o = n(9888),
          s = n(6042),
          a = n(8348),
          l = n(696),
          c = n(8518);
        const u = {
            autoPause: {
              viewability: !1,
              pauseAds: !1,
            },
            autostart: !1,
            allowFullscreen: !0,
            bandwidthEstimate: null,
            bitrateSelection: null,
            castAvailable: !1,
            controls: !0,
            cues: [],
            defaultPlaybackRate: 1,
            displaydescription: !0,
            displaytitle: !0,
            displayPlaybackLabel: !1,
            enableShortcuts: !0,
            floating: {
              mode: "never",
            },
            height: 360,
            intl: {},
            item: 0,
            language: "en",
            liveTimeout: null,
            localization: l.Z,
            mute: !1,
            nextUpDisplay: !0,
            playbackRateControls: !1,
            playbackRates: [0.5, 1, 1.25, 1.5, 2],
            renderCaptionsNatively: !1,
            repeat: !1,
            stretching: "uniform",
            volume: 90,
            width: 640,
          },
          d = function (e) {
            return e < 5 ? 5 : e;
          },
          p = function (e, t) {
            var p, h;
            const f = {};
            t &&
              (function (e, t) {
                if (null == e)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                return Object.prototype.hasOwnProperty.call(Object(e), t);
              })(t, "mute") &&
              ("boolean" == typeof t.mute && (f.mute = t.mute), delete t.mute);
            const g = Object.assign(
              {},
              f,
              null == (p = window) || null == (h = p.jwplayer)
                ? void 0
                : h.defaults,
              t,
              e
            );
            !(function (e) {
              Object.keys(e).forEach((t) => {
                "id" !== t && (e[t] = (0, o.serialize)(e[t]));
              });
            })(g);
            const m = g.forceLocalizationDefaults ? u.language : (0, c.G3)(),
              y = (0, c.tK)(g.intl);
            g.localization = (0, c.Mh)(l.Z, (0, c.Pm)(g, y, m));
            const v = Object.assign({}, u, g);
            "." === v.base && (v.base = (0, i.getScriptPath)("jwplayer.js")),
              (v.base = (v.base || (0, i.loadFrom)()).replace(/\/?$/, "/")),
              (n.p = v.base),
              (v.width = (0, r.a)(v.width)),
              (v.height = (0, r.a)(v.height)),
              (v.aspectratio = (0, r.R)(v.aspectratio, v.width)),
              "string" == typeof v.volume && (v.volume = parseFloat(v.volume)),
              (v.volume = (0, s.qh)(v.volume)
                ? Math.min(Math.max(0, v.volume), 100)
                : u.volume),
              (v.mute = Boolean(v.mute)),
              (v.language = m),
              (v.intl = y);
            const b = v.playlistIndex;
            b && (v.item = b), (0, s.hj)(v.item) || (v.item = 0);
            const w = g.autoPause;
            w &&
              (v.autoPause.viewability =
                !("viewability" in w) || Boolean(w.viewability));
            const k = v.playbackRateControls;
            if (k) {
              let e = v.playbackRates;
              Array.isArray(k) && (e = k),
                (e = e
                  .filter((e) => (0, s.hj)(e) && e >= 0.25 && e <= 4)
                  .map((e) => Math.round(100 * e) / 100)),
                e.indexOf(1) < 0 && e.push(1),
                e.sort(),
                (v.playbackRateControls = !0),
                (v.playbackRates = e);
            }
            (!v.playbackRateControls ||
              v.playbackRates.indexOf(v.defaultPlaybackRate) < 0) &&
              (v.defaultPlaybackRate = 1),
              (v.playbackRate = v.defaultPlaybackRate),
              v.aspectratio || delete v.aspectratio;
            const C = v.playlist;
            if (C)
              Array.isArray(C.playlist) &&
                ((v.feedData = C), (v.playlist = C.playlist));
            else {
              const e = (0, s.ei)(v, [
                "title",
                "description",
                "type",
                "mediaid",
                "image",
                "images",
                "file",
                "sources",
                "tracks",
                "preload",
                "duration",
                "chapters",
              ]);
              v.playlist = [e];
            }
            (v.qualityLabels = v.qualityLabels || v.hlslabels),
              delete v.duration;
            let j = v.liveTimeout;
            null !== j &&
              ((0, s.qh)(j) ? 0 !== j && (j = Math.max(30, j)) : (j = null),
              (v.liveTimeout = j));
            const P = parseFloat(v.bandwidthEstimate),
              x = parseFloat(v.bitrateSelection);
            return (
              (v.bandwidthEstimate = (0, s.qh)(P)
                ? P
                : (function (e) {
                    const t = parseFloat(e);
                    return (0, s.qh)(t) ? Math.max(t, 1) : u.bandwidthEstimate;
                  })(v.defaultBandwidthEstimate)),
              (v.bitrateSelection = (0, s.qh)(x) ? x : u.bitrateSelection),
              (v.liveSyncDuration = d(v.liveSyncDuration)),
              (v.backgroundLoading = (0, s.jn)(v.backgroundLoading)
                ? v.backgroundLoading
                : a.Features.backgroundLoading),
              v
            );
          };
      },
      2894: (e, t, n) => {
        "use strict";
        n.d(t, {
          Ep: () => o,
          Jt: () => s,
          Tr: () => i,
          Zq: () => a,
        });
        var r = n(4446);
        const i = {},
          o = function (e, t) {
            return () => {
              throw new r.rG(r.pJ, e, t);
            };
          },
          s = function (e, t) {
            return () => {
              throw new r.rG(null, e, t);
            };
          },
          a = function () {
            return n
              .e(681)
              .then(
                function (e) {
                  return n(2739).default;
                }.bind(null, n)
              )
              .catch(o(r.fU + 101));
          };
      },
      623: (e, t, n) => {
        "use strict";
        n.d(t, {
          ZP: () => ne,
          c2: () => ee,
        });
        var r = n(9128),
          i = n(2445),
          o = n(2894),
          s = n(393),
          a = n(8320),
          l = n(2963),
          c = n(670),
          u = n(4601),
          d = n(4446),
          p = n(8348);
        let h = null;
        const f = function () {
            const e = window.IntersectionObserverEntry;
            return (
              !e ||
              !("IntersectionObserver" in window) ||
              !("intersectionRatio" in e.prototype)
            );
          },
          g = function () {
            return (
              f()
                ? n
                    .e(943)
                    .then(
                      function (e) {
                        return n(6337);
                      }.bind(null, n)
                    )
                    .catch((0, o.Ep)(d.fU + 120))
                : Promise.resolve()
            ).then(o.Zq);
          },
          m = function (e) {
            const t = e.get("controls"),
              r = f(),
              i = (function (e, t) {
                const n = e.get("playlist");
                if (Array.isArray(n) && n.length) {
                  const r = (0, a.bx)(e.get("item"), n.length),
                    i = (0, a.T5)((0, s.Z)(n[r]), e);
                  for (let n = 0; n < i.length; n++) {
                    const r = i[n],
                      o = e.getProviders();
                    for (let e = 0; e < l.B.length; e++) {
                      const n = l.B[e];
                      if (o.providerSupports(n, r)) return n.name === t;
                    }
                  }
                }
                return !1;
              })(e, "html5");
            return p.OS.tizen
              ? g()
              : t && r && i
              ? (function () {
                  const e = n
                    .e(605)
                    .then(
                      function (e) {
                        n(6337);
                        const t = n(2739).default;
                        return (
                          (u.v.controls = n(5827).default),
                          (0, c.Z)(n(9181).default),
                          t
                        );
                      }.bind(null, n)
                    )
                    .catch((0, o.Ep)(d.fU + 105));
                  return (o.Tr.html5 = e), e;
                })()
              : t && i
              ? (function () {
                  const e = n
                    .e(207)
                    .then(
                      function (e) {
                        const t = n(2739).default;
                        return (
                          (u.v.controls = n(5827).default),
                          (0, c.Z)(n(9181).default),
                          t
                        );
                      }.bind(null, n)
                    )
                    .catch((0, o.Ep)(d.fU + 104));
                  return (o.Tr.html5 = e), e;
                })()
              : t && r
              ? n
                  .e(493)
                  .then(
                    function (e) {
                      n(6337);
                      const t = n(2739).default;
                      return (u.v.controls = n(5827).default), t;
                    }.bind(null, n)
                  )
                  .catch((0, o.Ep)(d.fU + 103))
              : t
              ? n
                  .e(581)
                  .then(
                    function (e) {
                      const t = n(2739).default;
                      return (u.v.controls = n(5827).default), t;
                    }.bind(null, n)
                  )
                  .catch((0, o.Ep)(d.fU + 102))
              : g();
          };
        var y = n(1643),
          v = n(7263),
          b = n(676),
          w = n(8518),
          k = n(1241),
          C = n(8381);
        const j = function (e, t, n) {
            const r = e.attributes;
            (r.playlist = (0, a.ZP)(t)), (r.feedData = n);
          },
          P = function (e) {
            const t = e.get("playlist");
            return new Promise((n, r) => {
              if ("string" != typeof t) {
                const r = e.get("feedData") || {};
                return j(e, t, r), n();
              }
              const i = new v.Z();
              i.on(y.Ow, function (t) {
                const r = t.playlist;
                delete t.playlist, j(e, r, t), n();
              }),
                i.on(y.pn, (t) => {
                  j(e, [], {}), r((0, d.l9)(t, d.xk));
                }),
                i.load(t);
            });
          },
          x = function (e) {
            return e.attributes._destroyed;
          };
        var S = n(1918),
          O = n(6599),
          E = n(7010);
        const T = function (e) {
            const t = e.get("skin") ? e.get("skin").url : void 0;
            if (
              "string" == typeof t &&
              !(function (e) {
                const t = document.styleSheets;
                for (let n = 0, r = t.length; n < r; n++)
                  if (t[n].href === e) return !0;
                return !1;
              })(t)
            ) {
              const e = !0;
              return new b.ZP(t, e).load().catch((e) => e);
            }
            return Promise.resolve();
          },
          A = (e) => {
            const t = e.get("advertising");
            return Boolean(null == t ? void 0 : t.outstream);
          },
          Z = (e) =>
            A(e)
              ? Promise.resolve()
              : P(e)
                  .then(() => {
                    if (e.get("drm") || (0, S.w0)(e.get("playlist")))
                      return (0, S.lD)(e.get("edition"));
                  })
                  .then(() => {
                    return P((t = e)).then(() => {
                      if (x(t)) return;
                      const e = (0, a.s7)(t.get("playlist"), t);
                      t.attributes.playlist = e;
                      try {
                        (0, a._)(e);
                      } catch (e) {
                        throw ((e.code += d.xk), e);
                      }
                      const n = t.getProviders(),
                        r = (0, a.bx)(t.get("item"), e.length),
                        { provider: i, name: s } = n.choose(e[r].sources[0]);
                      return "function" == typeof i
                        ? i
                        : o.Tr.html5 && "html5" === s
                        ? o.Tr.html5
                        : n.load(s).catch((e) => {
                            throw (0, d.l9)(e, d.y4);
                          });
                    });
                    var t;
                  }),
          _ = (e) => {
            const t = e.attributes,
              n = t.error;
            if (n && n.code === O.u5) {
              const e = t.pid,
                n = t.ph,
                r = new O.ZP(t.key),
                i = 7776e6;
              if (n > 0 && n < 4 && e && r.duration() > -i) {
                return new b.ZP(`//content.jwplatform.com/libraries/${e}.js`)
                  .load()
                  .then(() => {
                    const e = window.jwplayer.defaults.key,
                      n = new O.ZP(e);
                    n.error() ||
                      n.token() !== r.token() ||
                      ((t.key = e),
                      (t.edition = n.edition()),
                      (t.error = n.error()));
                  })
                  .catch(() => {});
              }
            }
            return Promise.resolve();
          },
          M = (e, t) => {
            const n = [_(e)];
            return A(e) || n.push(Promise.resolve()), Promise.all(n);
          },
          F = (e, t) =>
            (function (e, t) {
              return n
                .e(168)
                .then(
                  ((r) => new (0, n(5545).default)(t).setup(e)).bind(null, n)
                )
                .catch((0, o.Ep)(d.fU + 130));
            })(e, t).then(() => T(e)),
          I = (e, t) => {
            const n = () =>
              (function (e, t) {
                return (0, k.Z)(e, t);
              })(e, t);
            return (0, E.Z)() ? F(e, t).then(n).catch(n) : n();
          },
          B = function (e) {
            const { attributes: t } = e,
              { language: n, base: r, setupConfig: i, intl: o } = t,
              s = (0, w.Pm)(i, o, n);
            return !(0, w.q2)(n) || (0, w.dl)(s)
              ? Promise.resolve()
              : new Promise((i) =>
                  (0, w.Dq)(r, n)
                    .then(({ response: n }) => {
                      if (!x(e)) {
                        if (!n) throw new d.rG(null, d.wH);
                        (t.localization = (0, w.Mh)(n, s)), i();
                      }
                    })
                    .catch((e) => {
                      i(e.code === d.wH ? e : (0, d.l9)(e, d.A6));
                    })
                );
          },
          L = (e) =>
            new Promise((t) => {
              if (e.attributes.liveSyncDuration > 45)
                return t((0, d.l9)(new Error(), d.wM));
              const n =
                Array.isArray(e.attributes.playlist) &&
                e.attributes.playlist.map((e) => e.chapters);
              return null != n && n.length ? (0, C.T2)(n, t) : t();
            }),
          N = function (e) {
            let t;
            (this.start = function (n) {
              const r = I(e, n),
                i = Promise.all([
                  ((o = e), h || (h = m(o)), h),
                  L(e),
                  r,
                  Z(e),
                  M(e),
                  T(e),
                  B(e),
                ]);
              var o;
              const s = new Promise((e, n) => {
                t = setTimeout(() => {
                  n(new d.rG(d.pJ, d.T6));
                }, 6e4);
                const r = () => {
                  clearTimeout(t), setTimeout(e, 6e4);
                };
                i.then(r).catch(r);
              });
              return Promise.race([i, s])
                .catch((e) => {
                  const t = () => {
                    throw e;
                  };
                  return r.then(t).catch(t);
                })
                .then((e) =>
                  (function (e) {
                    if (!e || !e.length)
                      return {
                        core: null,
                        warnings: [],
                      };
                    const t = e
                      .reduce((e, t) => e.concat(t), [])
                      .filter((e) => (null == e ? void 0 : e.code));
                    return {
                      core: e[0],
                      warnings: t,
                    };
                  })(e)
                );
            }),
              (this.destroy = function () {
                clearTimeout(t), e.set("_destroyed", !0), (e = null);
              });
          };
        var D = n(2303),
          $ = n(7411),
          R = n(9888),
          q = n(4742);
        let z = {
          removeItem(e) {},
        };
        try {
          z = window.localStorage || z;
        } catch (e) {}
        const U = class {
          constructor(e, t) {
            (this.namespace = e), (this.items = t);
          }
          getAllItems() {
            return this.items.reduce((e, t) => {
              const n = z[`${this.namespace}.${t}`];
              return (
                n &&
                  (e[t] =
                    "captions" !== t ? (0, R.serialize)(n) : JSON.parse(n)),
                e
              );
            }, {});
          }
          track(e) {
            this.items.forEach((t) => {
              e.on(`change:${t}`, (e, n) => {
                try {
                  "captions" === t && (n = JSON.stringify(n)),
                    (z[`${this.namespace}.${t}`] = n);
                } catch (e) {
                  q.Z.debug && console.error(e);
                }
              });
            });
          }
          clear() {
            this.items.forEach((e) => {
              z.removeItem(`${this.namespace}.${e}`);
            });
          }
        };
        var H = n(7753),
          V = n(9918),
          G = n(328),
          W = n(4225),
          K = n(7683),
          Q = n(4609),
          X = n(5882);
        n(4671), n(9926);
        const J = function (e, t) {
            t &&
              t.code &&
              (t.sourceError && console.error(t.sourceError),
              console.error(d.rG.logMessage(t.code)));
          },
          Y = function (e) {
            e && e.code && console.warn(d.rG.logMessage(e.code));
          },
          ee = function (e, t) {
            if (!document.body.contains(e.currentContainer)) {
              const t = document.getElementById(e.get("id"));
              t && (e.currentContainer = t);
            }
            e.currentContainer.parentElement &&
              e.currentContainer.parentElement.replaceChild(
                t,
                e.currentContainer
              ),
              (e.currentContainer = t);
          },
          te = function (e) {
            (this._events = {}),
              (this.modelShim = new H.Z()),
              (this.modelShim._qoeItem = new $.Z()),
              (this.mediaShim = {}),
              (this.setup = new N(this.modelShim)),
              (this.currentContainer = this.originalContainer = e),
              (this.apiQueue = new r.Z(
                this,
                [
                  "load",
                  "play",
                  "pause",
                  "seek",
                  "stop",
                  "playlistItem",
                  "playlistNext",
                  "playlistPrev",
                  "next",
                  "preload",
                  "setAllowFullscreen",
                  "setConfig",
                  "setCurrentAudioTrack",
                  "setCurrentCaptions",
                  "setCurrentQuality",
                  "setFullscreen",
                  "setPip",
                  "requestPip",
                  "addButton",
                  "removeButton",
                  "castToggle",
                  "requestCast",
                  "setMute",
                  "setVolume",
                  "setPlaybackRate",
                  "addCues",
                  "setCues",
                  "getCues",
                  "setPlaylistItem",
                  "stopCasting",
                  "getChapters",
                  "getCurrentChapter",
                  "setChapter",
                  "resize",
                  "setCaptions",
                  "setControls",
                ],
                () => !0
              ));
          };
        Object.assign(te.prototype, {
          on: G.ZP.on,
          once: G.ZP.once,
          off: G.ZP.off,
          trigger: G.ZP.trigger,
          init(e, t) {
            const n = this.modelShim,
              r = new U("jwplayer", [
                "volume",
                "mute",
                "captionLabel",
                "captions",
                "bandwidthEstimate",
                "bitrateSelection",
                "qualityLabel",
                "enableShortcuts",
              ]),
              o = null == r ? void 0 : r.getAllItems();
            (n.attributes = n.attributes || {}),
              Object.assign(this.mediaShim, V.L4);
            const s = e,
              a = (0, i.ZP)(Object.assign({}, e), o);
            (a.id = t.id),
              (a.setupConfig = s),
              Object.assign(n.attributes, a, V.bv),
              (n.getProviders = function () {
                return new D.Z(a);
              }),
              (n.setProvider = function () {});
            let l = (0, K.Z)();
            {
              n.get("backgroundLoading") ||
                (l = (0, Q.Z)(l.getPrimedElement(), l));
              const e = (this.primeUi = new X.ZP(
                (0, X.GU)(this.originalContainer)
              ).once("gesture", () => {
                l.prime(), this.preload(), e.destroy();
              }));
            }
            return (
              n.on("change:errorEvent", J),
              this.setup
                .start(t)
                .then((e) => {
                  const i = e.core;
                  if (!i) throw (0, d.l9)(null, d.y7);
                  if (!this.setup) return;
                  this.on(y.cM, Y),
                    e.warnings.forEach((e) => {
                      this.trigger(y.cM, e);
                    });
                  const o = this.modelShim.clone();
                  if (o.error) throw o.error;
                  const s = this.apiQueue.queue.slice(0);
                  this.apiQueue.destroy(),
                    Object.assign(this, i.prototype),
                    this.playerSetup(
                      o,
                      t,
                      this.originalContainer,
                      this._events,
                      s,
                      l
                    );
                  const a = this._model;
                  return (
                    n.off("change:errorEvent", J),
                    a.on("change:errorEvent", J),
                    r.track(a),
                    this.updatePlaylist(
                      a.get("playlist"),
                      a.get("feedData")
                    ).catch((e) => {
                      const t = e.code === d._M ? d.IB : d.xk;
                      throw (0, d.l9)(e, t);
                    })
                  );
                })
                .then(() => {
                  this.setup && this.playerReady();
                })
                .catch((e) => {
                  this.setup &&
                    (function (e, t, n) {
                      Promise.resolve().then(() => {
                        const r = (0, d.Mm)(d.ud, d.nk, n),
                          i = e._model || e.modelShim;
                        (r.message =
                          r.message || i.get("localization").errors[r.key]),
                          delete r.key;
                        const o = i.get("contextual");
                        if (!o) {
                          const t = (0, W.Z)(e, r);
                          W.Z.cloneIcon &&
                            t
                              .querySelector(".jw-icon")
                              .appendChild(W.Z.cloneIcon("error")),
                            ee(e, t);
                        }
                        i.set("errorEvent", r),
                          i.set("state", y.Vy),
                          e.trigger(y.HH, r),
                          o && t.remove();
                      });
                    })(this, t, e);
                })
            );
          },
          playerDestroy() {
            this.destroy && this.destroy(),
              this.apiQueue && this.apiQueue.destroy(),
              this.setup && this.setup.destroy(),
              this.primeUi && this.primeUi.destroy(),
              this.currentContainer !== this.originalContainer &&
                ee(this, this.originalContainer),
              this.off(),
              (this._events =
                this._model =
                this.modelShim =
                this.apiQueue =
                this.primeUi =
                this.setup =
                  null);
          },
          getContainer() {
            return this.currentContainer;
          },
          get(e) {
            if (this.modelShim)
              return e in this.mediaShim
                ? this.mediaShim[e]
                : this.modelShim.get(e);
          },
          getItemQoe() {
            return this.modelShim._qoeItem;
          },
          getItemPromise: () => null,
          setItemCallback(e) {
            this.modelShim &&
              (this.modelShim.attributes.playlistItemCallback = e);
          },
          getConfig() {
            return Object.assign({}, this.modelShim.attributes, this.mediaShim);
          },
          getCurrentCaptions() {
            return this.get("captionsIndex");
          },
          getWidth() {
            return this.get("containerWidth");
          },
          getHeight() {
            return this.get("containerHeight");
          },
          getMute() {
            return this.get("mute");
          },
          getProvider() {
            return this.get("provider");
          },
          getState() {
            return this.get("state");
          },
          getAbsolutePosition: () => null,
          getAudioTracks: () => null,
          getCaptionsList: () => null,
          getQualityLevels: () => null,
          getVisualQuality: () => null,
          getCurrentQuality: () => -1,
          getCurrentAudioTrack: () => -1,
          getSafeRegion: () => ({
            x: 0,
            y: 0,
            width: 0,
            height: 0,
          }),
          isBeforeComplete: () => !1,
          isBeforePlay: () => !1,
          createInstream: () => null,
          skipAd() {},
          getMediaElement() {},
          attachMedia() {},
          detachMedia() {},
        });
        const ne = te;
      },
      4446: (e, t, n) => {
        "use strict";
        n.d(t, {
          A6: () => w,
          DD: () => d,
          EY: () => m,
          H4: () => O,
          IB: () => c,
          MD: () => j,
          Mm: () => A,
          Sp: () => S,
          T6: () => o,
          Y7: () => b,
          YQ: () => u,
          _M: () => g,
          aD: () => v,
          fU: () => a,
          l9: () => Z,
          nk: () => i,
          nm: () => _,
          o2: () => f,
          pJ: () => P,
          rG: () => T,
          tJ: () => h,
          ud: () => E,
          ul: () => C,
          wH: () => k,
          wM: () => y,
          xk: () => l,
          y4: () => p,
          y7: () => s,
          zO: () => x,
        });
        var r = n(6042);
        const i = 1e5,
          o = 100001,
          s = 100002,
          a = 101e3,
          l = 102e3,
          c = 102700,
          u = 200001,
          d = 202e3,
          p = 104e3,
          h = 203e3,
          f = 203640,
          g = 203700,
          m = 204e3,
          y = 300100,
          v = 300200,
          b = 306e3,
          w = 308e3,
          k = 308640,
          C = "cantPlayVideo",
          j = "badConnection",
          P = "cantLoadPlayer",
          x = "cantPlayInBrowser",
          S = "liveStreamDown",
          O = "protectedContent",
          E = "technicalError";
        class T {
          constructor(e, t, n) {
            (this.code = (0, r.qh)(t) ? t : 0),
              (this.sourceError = n || null),
              e ? (this.key = e) : delete this.key;
          }
          static logMessage(e) {
            const t = e % 1e3,
              n = Math.floor((e - t) / 1e3);
            let r = e.toString();
            t >= 400 && t < 600 && (r = `${n}400-${n}599`);
            return `JW Player ${
              e > 299999 && e < 4e5 ? "Warning" : "Error"
            } ${e}. For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#${r}`;
          }
        }
        const A = function (e, t, n) {
            return n instanceof T && n.code ? n : new T(e, t, n);
          },
          Z = function (e, t) {
            const n = A(E, t, e);
            return (n.code = ((e && e instanceof T && e.code) || 0) + t), n;
          },
          _ = function (e) {
            const { name: t, message: n } = e;
            switch (t) {
              case "AbortError":
                return /pause/.test(n)
                  ? 303213
                  : /load/.test(n)
                  ? 303212
                  : 303210;
              case "NotAllowedError":
                return 303220;
              case "NotSupportedError":
                return 303230;
              default:
                return 303200;
            }
          };
      },
      6391: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => r,
        });
        const r = [];
      },
      7411: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => l,
        });
        var r = n(5004);
        const i = window.performance || {
            timing: {},
          },
          o = i.timing.navigationStart || (0, r.z)();
        "now" in i || (i.now = () => (0, r.z)() - o);
        const s = () => o + i.now();
        var a = function (e, t) {
          if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
          return Object.prototype.hasOwnProperty.call(Object(e), t);
        };
        const l = class {
          constructor() {
            (this.startTimes = {}),
              (this.sum = {}),
              (this.counts = {}),
              (this.ticks = {});
          }
          start(e) {
            (this.startTimes[e] = s()),
              (this.counts[e] = this.counts[e] + 1 || 1);
          }
          end(e) {
            if (!this.startTimes[e]) return;
            const t = s() - this.startTimes[e];
            delete this.startTimes[e], (this.sum[e] = this.sum[e] + t || t);
          }
          dump() {
            const e = Object.assign({}, this.sum);
            for (const t in this.startTimes)
              if (a(this.startTimes, t)) {
                const n = s() - this.startTimes[t];
                e[t] = e[t] + n || n;
              }
            return {
              counts: Object.assign({}, this.counts),
              sums: e,
              events: Object.assign({}, this.ticks),
            };
          }
          tick(e) {
            this.ticks[e] = s();
          }
          clear(e) {
            delete this.ticks[e];
          }
          between(e, t) {
            return this.ticks[t] && this.ticks[e]
              ? this.ticks[t] - this.ticks[e]
              : null;
          }
        };
      },
      4601: (e, t, n) => {
        "use strict";
        n.d(t, {
          v: () => s,
          z: () => a,
        });
        var r = n(2894),
          i = n(8348);
        let o = null;
        const s = {},
          a = function () {
            return (
              o ||
                (o = i.OS.tizenApp
                  ? n
                      .e(74)
                      .then(
                        function (e) {
                          const t = n(3112).default;
                          return (s.controls = t), t;
                        }.bind(null, n)
                      )
                      .catch(function () {
                        (o = null), (0, r.Jt)(301133)();
                      })
                  : n
                      .e(716)
                      .then(
                        function (e) {
                          const t = n(5827).default;
                          return (s.controls = t), t;
                        }.bind(null, n)
                      )
                      .catch(function () {
                        (o = null), (0, r.Jt)(301130)();
                      })),
              o
            );
          };
      },
      8348: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            Browser: () => a,
            Features: () => c,
            OS: () => l,
          });
        var r = n(2268);
        const i = (e, t) => {
            const n = e.exec(t);
            if (n && n.length > 1) return n[1];
          },
          o = navigator.userAgent,
          s = () => {},
          a = {
            get androidNative() {
              return (0, r.O7)();
            },
            get chrome() {
              return (0, r.i7)();
            },
            get edge() {
              return (0, r.un)();
            },
            get facebook() {
              return (0, r.DF)();
            },
            get firefox() {
              return (0, r.pZ)();
            },
            get ie() {
              return (0, r.w1)();
            },
            get msie() {
              return (0, r.A)();
            },
            get safari() {
              return (0, r.G6)();
            },
            get version() {
              return ((e, t) => {
                let n, r, i, o;
                if (e.chrome)
                  n =
                    -1 !== t.indexOf("Chrome")
                      ? t.substring(t.indexOf("Chrome") + 7)
                      : t.substring(t.indexOf("CriOS") + 6);
                else if (e.safari) n = t.substring(t.indexOf("Version") + 8);
                else if (e.firefox) n = t.substring(t.indexOf("Firefox") + 8);
                else if (e.edge) {
                  let e = t.indexOf("Edge");
                  -1 === e ? (e = t.indexOf("Edg") + 4) : (e += 5),
                    (n = t.substring(e));
                } else
                  e.ie &&
                    (-1 !== t.indexOf("rv:")
                      ? (n = t.substring(t.indexOf("rv:") + 3))
                      : -1 !== t.indexOf("MSIE") &&
                        (n = t.substring(t.indexOf("MSIE") + 5)));
                return (
                  n &&
                    (-1 !== (o = n.indexOf(";")) && (n = n.substring(0, o)),
                    -1 !== (o = n.indexOf(" ")) && (n = n.substring(0, o)),
                    -1 !== (o = n.indexOf(")")) && (n = n.substring(0, o)),
                    (r = parseInt(n, 10)),
                    (i = parseInt(n.split(".")[1], 10))),
                  {
                    version: n,
                    major: r,
                    minor: i,
                  }
                );
              })(this, o);
            },
          },
          l = {
            get android() {
              return (0, r.Dt)();
            },
            get iOS() {
              return (0, r.gn)();
            },
            get mobile() {
              return (0, r.tq)();
            },
            get mac() {
              return (0, r.id)();
            },
            get iPad() {
              return (0, r.zc)();
            },
            get iPhone() {
              return (0, r.xb)();
            },
            get windows() {
              return o.indexOf("Windows") > -1;
            },
            get tizen() {
              return (0, r.yS)();
            },
            get tizenApp() {
              return (0, r.Q6)();
            },
            get version() {
              return ((e, t) => {
                let n, r, o;
                if (e.windows)
                  switch (((n = i(/Windows(?: NT|)? ([._\d]+)/, t)), n)) {
                    case "6.1":
                      n = "7.0";
                      break;
                    case "6.2":
                      n = "8.0";
                      break;
                    case "6.3":
                      n = "8.1";
                  }
                else
                  e.android
                    ? (n = i(/Android ([._\d]+)/, t))
                    : e.iOS
                    ? (n = i(/OS ([._\d]+)/, t))
                    : e.mac
                    ? (n = i(/Mac OS X ([._\d]+)/, t))
                    : e.tizen && (n = i(/Tizen ([._\d]+)/, t));
                if (n) {
                  r = parseInt(n, 10);
                  const e = n.split(/[._]/);
                  e && (o = parseInt(e[1], 10));
                }
                return {
                  version: n,
                  major: r,
                  minor: o,
                };
              })(this, o);
            },
          },
          c = {
            get flash() {
              return (0, r.NO)();
            },
            get flashVersion() {
              return (0, r.dI)();
            },
            get iframe() {
              return (0, r.cL)();
            },
            get passiveEvents() {
              return (() => {
                let e = !1;
                try {
                  const t = Object.defineProperty({}, "passive", {
                    get: () => (e = !0),
                  });
                  window.addEventListener("testPassive", s, t),
                    window.removeEventListener("testPassive", s, t);
                } catch (e) {}
                return e;
              })();
            },
            get backgroundLoading() {
              return !(l.iOS || a.safari || l.tizen);
            },
          };
      },
      1643: (e, t, n) => {
        "use strict";
        n.d(t, {
          $_: () => j,
          $j: () => _,
          AQ: () => I,
          Ax: () => P,
          B1: () => m,
          Bs: () => be,
          Ew: () => D,
          FU: () => $,
          Gj: () => me,
          HH: () => U,
          Hy: () => re,
          Ib: () => he,
          Je: () => q,
          Jl: () => F,
          K5: () => v,
          Kb: () => r,
          Ms: () => T,
          NZ: () => Z,
          O1: () => J,
          Ow: () => ae,
          P: () => g,
          QF: () => pe,
          R2: () => G,
          RF: () => Ce,
          Rc: () => A,
          Rt: () => C,
          SL: () => fe,
          Sv: () => h,
          TJ: () => W,
          U3: () => b,
          UF: () => de,
          UW: () => ie,
          UZ: () => ee,
          V$: () => L,
          Vy: () => l,
          WE: () => x,
          Wp: () => d,
          Z_: () => ge,
          _5: () => s,
          _B: () => ce,
          aM: () => te,
          aQ: () => z,
          bc: () => i,
          cM: () => k,
          cq: () => R,
          cy: () => B,
          gO: () => se,
          gy: () => X,
          h7: () => we,
          ik: () => c,
          j0: () => le,
          jt: () => ue,
          k3: () => S,
          l5: () => ve,
          nQ: () => u,
          nv: () => p,
          oZ: () => K,
          ot: () => f,
          pi: () => N,
          pn: () => w,
          qG: () => ke,
          r0: () => a,
          rx: () => Y,
          s$: () => M,
          sF: () => oe,
          t6: () => je,
          tP: () => y,
          uL: () => O,
          uT: () => V,
          uc: () => H,
          ug: () => ne,
          wh: () => E,
          xQ: () => o,
          xf: () => ye,
          yH: () => Q,
        });
        const r = "buffering",
          i = "idle",
          o = "complete",
          s = "paused",
          a = "playing",
          l = "error",
          c = "loading",
          u = "stalled",
          d = "drag",
          p = "dragStart",
          h = "dragEnd",
          f = "click",
          g = "doubleClick",
          m = "over",
          y = "move",
          v = "enter",
          b = "out",
          w = l,
          k = "warning",
          C = "adClick",
          j = "mediaLoaded",
          P = "adPause",
          x = "adPlay",
          S = "adSkipped",
          O = "adTime",
          E = "autostartNotAllowed",
          T = o,
          A = "ready",
          Z = "seek",
          _ = "beforePlay",
          M = "beforeComplete",
          F = "bufferFull",
          I = "absolutePositionReady",
          B = "displayClick",
          L = "playlistComplete",
          N = "cast",
          D = "mediaError",
          $ = "firstFrame",
          R = "playAttempt",
          q = "playAttemptFailed",
          z = "seeked",
          U = "setupError",
          H = "state",
          V = "bufferChange",
          G = "time",
          W = "ratechange",
          K = "mediaType",
          Q = "volume",
          X = "mute",
          J = "metadataCueParsed",
          Y = "meta",
          ee = "levels",
          te = "levelsChanged",
          ne = "visualQuality",
          re = "controls",
          ie = "fullscreen",
          oe = "resize",
          se = "playlistItem",
          ae = "playlist",
          le = "audioTracks",
          ce = "audioTrackChanged",
          ue = "subtitlesTracks",
          de = "subtitlesTrackChanged",
          pe = "playbackRateChanged",
          he = "logoClick",
          fe = "captionsList",
          ge = "captionsChanged",
          me = "providerFirstFrame",
          ye = "userAction",
          ve = "instreamClick",
          be = "breakpoint",
          we = "fullscreenchange",
          ke = "bandwidthEstimate",
          Ce = "float",
          je = "chapter";
      },
      9918: (e, t, n) => {
        "use strict";
        n.d(t, {
          L4: () => i,
          OG: () => s,
          bv: () => r,
          ni: () => o,
        });
        const r = {
            audioMode: !1,
            itemMeta: {},
            playbackRate: 1,
            playRejected: !1,
            state: n(1643).bc,
            itemReady: !1,
            controlsEnabled: !1,
          },
          i = {
            position: 0,
            duration: 0,
            buffer: 0,
            currentTime: 0,
          },
          o = 120,
          s = 25;
      },
      7753: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => i,
        });
        var r = n(328);
        class i extends r.ZP {
          constructor() {
            super(), (this.attributes = Object.create(null));
          }
          addAttributes(e) {
            Object.keys(e).forEach((t) => {
              this.add(t, e[t]);
            });
          }
          add(e, t) {
            Object.defineProperty(this, e, {
              get: () => this.attributes[e],
              set: (t) => {
                this.set(e, t);
              },
              enumerable: !1,
            }),
              (this.attributes[e] = t);
          }
          get(e) {
            return this.attributes[e];
          }
          set(e, t) {
            if (this.attributes[e] === t) return;
            const n = this.attributes[e];
            (this.attributes[e] = t), this.trigger(`change:${e}`, this, t, n);
          }
          clone() {
            const e = {},
              t = this.attributes;
            if (t) for (const n in t) e[n] = t[n];
            return e;
          }
          change(e, t, n) {
            this.on(`change:${e}`, t, n);
            const r = this.get(e);
            return t.call(n, this, r, r), this;
          }
        }
      },
      7941: (e, t, n) => {
        "use strict";
        n.d(t, {
          dZ: () => o,
          my: () => a,
          qk: () => s,
          r1: () => i,
        });
        var r = n(2957);
        const i = (e) => {
            let t = "";
            return (
              e &&
                (e.localName
                  ? (t = e.localName)
                  : e.baseName && (t = e.baseName)),
              t
            );
          },
          o = (e) => {
            let t = "";
            return (
              e &&
                (e.textContent
                  ? (t = (0, r.fy)(e.textContent))
                  : e.text && (t = (0, r.fy)(e.text))),
              t
            );
          },
          s = (e, t) => e.childNodes[t],
          a = (e) => (e.childNodes ? e.childNodes.length : 0);
      },
      6769: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => h,
        });
        var r = n(7941),
          i = n(2957);
        const o = (e) => {
            const t = [];
            for (let n = 0; n < (0, r.my)(e); n++) {
              const i = e.childNodes[n];
              "jwplayer" === i.prefix &&
                "mediatypes" === (0, r.r1)(i).toLowerCase() &&
                t.push((0, r.dZ)(i));
            }
            return t;
          },
          s = (e) => {
            const t = {
              zh: "Chinese",
              nl: "Dutch",
              en: "English",
              fr: "French",
              de: "German",
              it: "Italian",
              ja: "Japanese",
              pt: "Portuguese",
              ru: "Russian",
              es: "Spanish",
            };
            return t[e] ? t[e] : e;
          },
          a = function (e, t) {
            const n = [];
            for (let l = 0; l < (0, r.my)(e); l++) {
              const c = e.childNodes[l];
              if ("media" === c.prefix) {
                if (!(0, r.r1)(c)) continue;
                switch ((0, r.r1)(c).toLowerCase()) {
                  case "content":
                    if (
                      ((0, i.Dc)(c, "duration") &&
                        (t.duration = (0, i.m9)((0, i.Dc)(c, "duration"))),
                      (0, i.Dc)(c, "url"))
                    ) {
                      t.sources || (t.sources = []);
                      const e = {
                          file: (0, i.Dc)(c, "url"),
                          type: (0, i.Dc)(c, "type"),
                          width: (0, i.Dc)(c, "width"),
                          label: (0, i.Dc)(c, "label"),
                        },
                        n = o(c);
                      n.length && (e.mediaTypes = n), t.sources.push(e);
                    }
                    (0, r.my)(c) > 0 && (t = a(c, t));
                    break;
                  case "title":
                    t.title = (0, r.dZ)(c);
                    break;
                  case "description":
                    t.description = (0, r.dZ)(c);
                    break;
                  case "guid":
                    t.mediaid = (0, r.dZ)(c);
                    break;
                  case "thumbnail":
                    t.image || (t.image = (0, i.Dc)(c, "url"));
                    break;
                  case "group":
                    a(c, t);
                    break;
                  case "subtitle": {
                    const e = {
                      file: (0, i.Dc)(c, "url"),
                      kind: "captions",
                    };
                    (0, i.Dc)(c, "lang").length > 0 &&
                      (e.label = s((0, i.Dc)(c, "lang"))),
                      n.push(e);
                    break;
                  }
                }
              }
            }
            t.tracks || (t.tracks = []);
            for (let e = 0; e < n.length; e++) t.tracks.push(n[e]);
            return t;
          },
          l = a;
        var c = n(9888);
        const u = function (e, t) {
          const n = "default",
            o = "label",
            s = "file",
            a = [],
            l = [],
            u = t;
          for (let u = 0; u < e.childNodes.length; u++) {
            const d = e.childNodes[u];
            if ("jwplayer" === d.prefix) {
              const e = (0, r.r1)(d);
              "source" === e
                ? (delete t.sources,
                  a.push({
                    file: (0, i.Dc)(d, s),
                    default: (0, i.Dc)(d, n),
                    label: (0, i.Dc)(d, o),
                    type: (0, i.Dc)(d, "type"),
                  }))
                : "track" === e
                ? (delete t.tracks,
                  l.push({
                    file: (0, i.Dc)(d, s),
                    default: (0, i.Dc)(d, n),
                    kind: (0, i.Dc)(d, "kind"),
                    label: (0, i.Dc)(d, o),
                  }))
                : ((t[e] = (0, c.serialize)((0, r.dZ)(d))),
                  "file" === e && t.sources && delete t.sources);
            }
            t[s] || (t[s] = t.link);
          }
          if (a.length) {
            t.sources = [];
            for (let e = 0; e < a.length; e++) {
              const t = a[e];
              t.file.length > 0 &&
                ((t[n] = "true" === a[e][n]),
                t.label || delete t.label,
                u.sources.push(t));
            }
          }
          if (l.length) {
            t.tracks = [];
            for (let e = 0; e < l.length; e++) {
              const t = l[e];
              t.file &&
                t.file.length > 0 &&
                ((t[n] = "true" === l[e][n]),
                (t.kind = l[e].kind.length ? l[e].kind : "captions"),
                t.label || delete t.label,
                u.tracks.push(t));
            }
          }
          return u;
        };
        var d = n(393);
        const p = (e) => {
          const t = {};
          for (let n = 0; n < e.childNodes.length; n++) {
            const o = e.childNodes[n],
              s = (0, r.r1)(o);
            if (s)
              switch (s.toLowerCase()) {
                case "enclosure":
                  t.file = (0, i.Dc)(o, "url");
                  break;
                case "title":
                  t.title = (0, r.dZ)(o);
                  break;
                case "guid":
                  t.mediaid = (0, r.dZ)(o);
                  break;
                case "pubdate":
                  t.date = (0, r.dZ)(o);
                  break;
                case "description":
                  t.description = (0, r.dZ)(o);
                  break;
                case "link":
                  t.link = (0, r.dZ)(o);
                  break;
                case "category":
                  t.tags ? (t.tags += (0, r.dZ)(o)) : (t.tags = (0, r.dZ)(o));
              }
          }
          return new d.Z(u(e, l(e, t)));
        };

        function h(e) {
          const t = [];
          t.feedData = {};
          for (let n = 0; n < (0, r.my)(e); n++) {
            const i = (0, r.qk)(e, n);
            if ("channel" === (0, r.r1)(i).toLowerCase())
              for (let e = 0; e < (0, r.my)(i); e++) {
                const n = (0, r.qk)(i, e),
                  o = (0, r.r1)(n).toLowerCase();
                "item" === o
                  ? t.push(p(n))
                  : o && (t.feedData[o] = (0, r.dZ)(n));
              }
          }
          return t;
        }
      },
      2557: (e, t, n) => {
        "use strict";
        n.d(t, {
          t: () => r,
          u: () => i,
        });
        class r {
          constructor(e, t) {
            (this.defaultLanguage = e), (this.timestamps = t);
          }
        }
        class i {
          constructor({ title: e = {}, group: t, time: n, image: r }) {
            (this.title = {}),
              (this.time = n),
              (this.group = t),
              (this.image = r),
              Object.keys(e).forEach((t) => {
                const n = e[t];
                this.addTitle(t, n);
              });
          }
          addTitle(e, t) {
            this.title[e] = t;
          }
        }
      },
      393: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => l,
        });
        var r = n(6053);
        const i = ["captions", "metadata", "thumbnails", "chapters"],
          o = function (e) {
            if (!e || !e.file) return;
            const t = Object.assign(
              {},
              {
                kind: "captions",
                default: !1,
              },
              e
            );
            var n;
            return (
              (t.kind =
                ((n = t.kind), -1 !== i.indexOf(n) ? t.kind : "captions")),
              (t.default = Boolean(t.default)),
              t
            );
          };
        var s = n(9918);
        const a = Array.isArray,
          l = function (e) {
            a((e = e || {}).tracks) || delete e.tracks;
            const t = Object.assign(
              {},
              {
                sources: [],
                tracks: [],
                minDvrWindow: s.ni,
              },
              e
            );
            t.sources !== Object(t.sources) ||
              a(t.sources) ||
              (t.sources = [(0, r.Z)(t.sources)]),
              (a(t.sources) && 0 !== t.sources.length) ||
                (e.levels
                  ? (t.sources = e.levels)
                  : (t.sources = [(0, r.Z)(e)]));
            for (let e = 0; e < t.sources.length; e++) {
              const n = t.sources[e];
              if (!n) continue;
              const i = n.default;
              (n.default = !!i && "true" === i.toString()),
                t.sources[e].label || (t.sources[e].label = e.toString()),
                (t.sources[e] = (0, r.Z)(t.sources[e]));
            }
            return (
              (t.sources = t.sources.filter(Boolean)),
              a(t.tracks) || (t.tracks = []),
              a(t.captions) &&
                ((t.tracks = t.tracks.concat(t.captions)), delete t.captions),
              (t.tracks = t.tracks.map(o).filter(Boolean)),
              t
            );
          };
      },
      7263: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => c,
        });
        var r = n(1643),
          i = n(7941),
          o = n(6769),
          s = n(6886),
          a = n(328),
          l = n(4446);
        const c = function () {
          const e = Object.assign(this, a.ZP),
            t = function (t) {
              t instanceof l.rG && !t.code && (t = new l.rG(l.ul, 0)),
                e.trigger(r.pn, t);
            },
            n = function (n) {
              try {
                const t = n.responseXML ? n.responseXML.childNodes : null;
                let s,
                  a = null;
                if (t) {
                  for (
                    let e = 0;
                    e < t.length && ((a = t[e]), 8 === a.nodeType);
                    e++
                  );
                  if (
                    (a && "xml" === (0, i.r1)(a) && (a = a.nextSibling),
                    a && "rss" === (0, i.r1)(a))
                  ) {
                    const e = (0, o.Z)(a);
                    s = Object.assign(
                      {
                        playlist: e,
                      },
                      e.feedData
                    );
                  }
                }
                if (!s)
                  try {
                    const e = JSON.parse(n.responseText);
                    if (Array.isArray(e))
                      s = {
                        playlist: e,
                      };
                    else {
                      if (!Array.isArray(e.playlist))
                        throw Error("Playlist is not an array");
                      s = e;
                    }
                  } catch (e) {
                    throw new l.rG(l.ul, 621, e);
                  }
                e.trigger(r.Ow, s);
              } catch (e) {
                t(e);
              }
            };
          (this.load = function (e) {
            (0, s.h)(e, n, (e, n, r, i) => {
              t(i);
            });
          }),
            (this.destroy = function () {
              this.off();
            });
        };
      },
      8320: (e, t, n) => {
        "use strict";
        n.d(t, {
          ZP: () => v,
          s7: () => f,
          T5: () => y,
          YF: () => h,
          _: () => g,
          bx: () => m,
        });
        const r = {
            none: !0,
            metadata: !0,
            auto: !0,
          },
          i = (e, t) => (r[e] ? e : r[t] ? t : "metadata");
        var o = n(393),
          s = n(6053),
          a = n(2303),
          l = n(4446);
        const c = (e, t) => (void 0 === e ? t : e),
          u = (e, t, n) => {
            n in t && (e[n] = t[n]);
          },
          d = (e, t) => {
            const { attributes: n } = t,
              { sources: r, allSources: o, preload: a, drm: l } = e,
              d = c(e.withCredentials, n.withCredentials);
            return (o || r)
              .map(function (t) {
                if (t !== Object(t)) return null;
                u(t, n, "androidhls"),
                  u(t, n, "hlsjsdefault"),
                  u(t, n, "safarihlsjs"),
                  ((e, t, n) => {
                    if (e.liveSyncDuration) return;
                    const r = t.liveSyncDuration ? t : n;
                    u(e, r, "liveSyncDuration");
                  })(t, e, n),
                  u(t, n, "_hlsjsProgressive"),
                  (t.preload = i(t.preload, a));
                const r = t.drm || l || n.drm;
                r && (t.drm = r);
                const o = c(t.withCredentials, d);
                return void 0 !== o && (t.withCredentials = o), (0, s.Z)(t);
              })
              .filter(Boolean);
          },
          p = (e, t) => {
            (t && t.choose) || (t = new a.Z());
            const n = ((e, t) => {
              for (let n = 0; n < e.length; n++) {
                const r = e[n],
                  { providerToCheck: i } = t.choose(r);
                if (i)
                  return {
                    type: r.type,
                    provider: i,
                  };
              }
              return null;
            })(e, t);
            if (!n) return [];
            const r = n.provider,
              i = n.type;
            return e.filter(function (e) {
              return e.type === i && t.providerSupports(r, e);
            });
          },
          h = (e, t, n) => {
            const r = e.getProviders(),
              o = e.get("preload"),
              s = e.get("jwStart"),
              a = Object.assign({}, t);
            if (
              ((a.preload = i(t.preload, o)),
              (a.allSources = d(a, e)),
              (a.sources = p(a.allSources, r)),
              a.sources.length)
            )
              return (
                (a.file = a.sources[0].file),
                (a.feedData = n),
                s &&
                  -1 !== s &&
                  e.get("generateSEOMetadata") &&
                  (a.starttime = s),
                ((e) => {
                  const t = e.sources[0].liveSyncDuration;
                  return t && (e.liveSyncDuration = e.dvrSeekLimit = t), e;
                })(a)
              );
          },
          f = (e, t, n) => {
            const r = Object.assign({}, n);
            return delete r.playlist, e.map((e) => h(t, e, r)).filter(Boolean);
          },
          g = (e) => {
            if (!Array.isArray(e) || 0 === e.length) throw new l.rG(l.ul, 630);
          },
          m = (e, t) => {
            let n = (parseInt(e, 10) || 0) % t;
            return n < 0 && (n += t), n;
          },
          y = (e, t) => p(d(e, t), t.getProviders()),
          v = function (e) {
            return (Array.isArray(e) ? e : [e]).map(o.Z);
          };
      },
      6053: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => o,
        });
        var r = n(7034),
          i = n(2957);
        const o = function (e) {
          if (!e || !e.file) return;
          const t = Object.assign(
            {},
            {
              default: !1,
              type: "",
            },
            e
          );
          t.file = (0, i.fy)(`${t.file}`);
          const n = /^[^/]+\/(?:x-)?([^/]+)$/,
            o = t.type;
          if (
            (n.test(o) && ((t.mimeType = o), (t.type = o.replace(n, "$1"))),
            (0, r.isYouTube)(t.file)
              ? (t.type = "youtube")
              : (0, r.isRtmp)(t.file)
              ? (t.type = "rtmp")
              : t.type || (t.type = (0, i.AO)(t.file)),
            t.type)
          ) {
            switch (t.type) {
              case "m3u8":
              case "vnd.apple.mpegurl":
                t.type = "hls";
                break;
              case "dash+xml":
                t.type = "dash";
                break;
              case "m4a":
                t.type = "aac";
                break;
              case "smil":
                t.type = "rtmp";
            }
            return (
              Object.keys(t).forEach(function (e) {
                "" === t[e] && delete t[e];
              }),
              t
            );
          }
        };
      },
      4101: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => u,
        });
        var r = n(676),
          i = n(9888),
          o = n(2957),
          s = n(4446),
          a = n(3487);
        const l = function (e) {
            if ("string" != typeof e) return;
            const t = (e = e.split("?")[0]).indexOf("://");
            if (t > 0) return 0;
            const n = e.indexOf("/"),
              r = (0, o.AO)(e);
            return !(t < 0 && n < 0) || (r && isNaN(r)) ? 1 : 2;
          },
          c = function (e) {
            (this.url = e), (this.promise_ = null);
          };
        Object.defineProperties(c.prototype, {
          promise: {
            get() {
              return this.load();
            },
            set() {},
          },
        }),
          Object.assign(c.prototype, {
            load() {
              let e = this.promise_;
              if (!e) {
                if (2 === l(this.url)) return Promise.resolve(this);
                const t = new r.ZP(
                  ((e) => {
                    switch (l(e)) {
                      case 0:
                        return e;
                      case 1:
                        return (0, i.getAbsolutePath)(e, window.location.href);
                    }
                  })(this.url)
                );
                (this.loader = t),
                  (e = t.load().then(() => this)),
                  (this.promise_ = e);
              }
              return e;
            },
            registerPlugin(e, t, n) {
              (this.name = e), (this.target = t), (this.js = n);
            },
            getNewInstance(e, t, n) {
              const r = this.js;
              if ("function" != typeof r)
                throw new s.rG(null, (0, a.bX)(this.url) + 100);
              const i = new r(e, t, n);
              return (
                (i.addToPlayer = function () {
                  const e = this.getContainer().querySelector(".jw-overlays");
                  e &&
                    ((n.left = e.style.left),
                    (n.top = e.style.top),
                    e.appendChild(n));
                }),
                (i.resizeHandler = function () {
                  const e = this.getContainer().querySelector(".jw-overlays");
                  e && i.resize(e.clientWidth, e.clientHeight);
                }),
                i
              );
            },
          });
        const u = c;
      },
      1241: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => d,
          f: () => u,
        });
        var r = n(4446),
          i = n(3487);
        const o = function () {
          this.load = function (e, t, n, o) {
            return n && "object" == typeof n
              ? Promise.all(
                  Object.keys(n)
                    .filter((e) => e)
                    .map((s) => {
                      const a = n[s];
                      return t
                        .setupPlugin(s)
                        .then((t) => {
                          if (!o.attributes._destroyed)
                            return (0, i.MK)(t, a, e);
                        })
                        .catch(
                          (e) => (
                            t.removePlugin(s),
                            e.code ? e : new r.rG(null, (0, i.bX)(s), e)
                          )
                        );
                    })
                )
              : Promise.resolve();
          };
        };
        var s = n(4101),
          a = n(5499);
        const l = {};
        const c = new (class {
            setupPlugin(e) {
              const t = this.getPlugin(e);
              if (t)
                return (
                  t.url !== e &&
                    (0, a.c)(
                      `JW Plugin "${(0, i.Nq)(e)}" already loaded from "${
                        t.url
                      }". Ignoring "${e}."`
                    ),
                  t.promise
                );
              return this.addPlugin(e).load();
            }
            addPlugin(e) {
              const t = (0, i.Nq)(e);
              let n = l[t];
              return n || ((n = new s.Z(e)), (l[t] = n)), n;
            }
            getPlugin(e) {
              return l[(0, i.Nq)(e)];
            }
            removePlugin(e) {
              delete l[(0, i.Nq)(e)];
            }
            getPlugins() {
              return l;
            }
          })(),
          u = function (e, t, n) {
            const r = c.addPlugin(e);
            r.js || r.registerPlugin(e, t, n);
          };

        function d(e, t) {
          const n = e.get("plugins");
          window.jwplayerPluginJsonp = u;
          return (e.pluginLoader = e.pluginLoader || new o())
            .load(t, c, n, e)
            .then((t) => {
              if (!e.attributes._destroyed)
                return delete window.jwplayerPluginJsonp, t;
            });
        }
      },
      7164: (e, t, n) => {
        "use strict";
        n.d(t, {
          MK: () => s,
          Nq: () => i,
          bX: () => o,
        });
        var r = n(5950);
        const i = function (e) {
            const t = /\/((.(?!\/))+?)\.js/i.exec(e),
              n = (null == t ? void 0 : t[1]) || e;
            return n && "jwpsrv-dnt" === n ? "jwpsrv" : n;
          },
          o = (e) => 305e3,
          s = (e, t, n) => {
            const i = e.name,
              o = Object.assign({}, t, (0, r.vl)(e.url));
            const s = document.createElement("div");
            (s.id = `${n.id}_${i}`), (s.className = "jw-plugin jw-reset");
            const a = e.getNewInstance(n, o, s);
            return n.addPlugin(i, a), a;
          };
      },
      7683: (e, t, n) => {
        "use strict";
        n.d(t, {
          V: () => o,
          Z: () => s,
        });
        var r = n(658);
        const i = (e) => {
            e.src || e.load();
          },
          o = (e) => {
            const t = document.createElement("video");
            return (
              (t.className = "jw-video jw-reset"),
              t.setAttribute("tabindex", "-1"),
              t.setAttribute("disableRemotePlayback", ""),
              t.setAttribute("webkit-playsinline", ""),
              t.setAttribute("playsinline", ""),
              e &&
                Object.keys(e).forEach((n) => {
                  t.setAttribute(n, e[n]);
                }),
              t
            );
          };

        function s() {
          const e = r.Jx,
            t = [],
            n = [];
          for (let r = 0; r < e; r++) {
            const e = o();
            t.push(e), n.push(e), i(e);
          }
          const s = n.shift(),
            a = n.shift();
          let l = !1;
          return {
            primed: () => l,
            prime() {
              t.forEach(i), (l = !0);
            },
            played() {
              l = !0;
            },
            getPrimedElement: () => n.shift() || null,
            getAdElement: () => s,
            getTestElement: () => a,
            clean(e) {
              if (e.src) {
                e.removeAttribute("src");
                try {
                  e.load();
                } catch (e) {}
              }
            },
            recycle(e) {
              e && !n.some((t) => t === e) && (this.clean(e), n.push(e));
            },
            syncVolume(e) {
              const n = Math.min(Math.max(0, e / 100), 1);
              t.forEach((e) => {
                e.volume = n;
              });
            },
            syncMute(e) {
              t.forEach((t) => {
                t.muted = e;
              });
            },
          };
        }
      },
      658: (e, t, n) => {
        "use strict";
        n.d(t, {
          HB: () => o,
          Jx: () => r,
          l_: () => i,
        });
        const r = 4,
          i = 5,
          o = 1;
      },
      4609: (e, t, n) => {
        "use strict";

        function r(e, t) {
          return Object.assign({}, t, {
            prime() {
              e.src || e.load();
            },
            getPrimedElement: () => e,
            clean() {
              t.clean(e);
            },
            recycle() {
              t.clean(e);
            },
          });
        }
        n.d(t, {
          Z: () => r,
        });
      },
      6528: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => l,
        });
        var r = n(1643),
          i = n(1384);
        const o = function () {},
          s = () => !1,
          a = {
            name: "default",
          },
          l = {
            supports: s,
            play: o,
            pause: o,
            preload: o,
            load: o,
            stop: o,
            volume: o,
            mute: o,
            seek: o,
            resize: o,
            remove: o,
            destroy: o,
            setVisibility: o,
            setFullscreen(e) {
              return (0, i.CX)(this, e);
            },
            getFullscreen: s,
            supportsFullscreen: s,
            getContainer: o,
            setContainer: o,
            getName: () => a,
            getQualityLevels: o,
            getCurrentQuality: o,
            setCurrentQuality: o,
            getAudioTracks: o,
            getCurrentAudioTrack: o,
            setCurrentAudioTrack: o,
            getSeekRange() {
              return {
                start: 0,
                end: this.getDuration(),
              };
            },
            setPlaybackRate: o,
            getPlaybackRate: () => 1,
            getBandwidthEstimate: () => null,
            getLiveLatency: () => null,
            attachMedia: o,
            detachMedia: o,
            init: o,
            setState(e) {
              (this.state = e),
                this.trigger(r.uc, {
                  newstate: e,
                });
            },
            sendMediaType(e) {
              const { type: t, mimeType: n } = e[0],
                i =
                  "aac" === t ||
                  "mp3" === t ||
                  "mpeg" === t ||
                  (n && 0 === n.indexOf("audio/"));
              this.trigger(r.oZ, {
                mediaType: i ? "audio" : "video",
              });
            },
            getDuration: () => 0,
            trigger: o,
          };
      },
      1628: (e, t, n) => {
        "use strict";
        n.d(t, {
          V: () => i,
        });
        var r = n(8348);
        const i = (e) =>
          "hls" === e.type && r.OS.android
            ? !1 !== e.androidhls &&
              !r.Browser.firefox &&
              parseFloat(r.OS.version.version || "0") >= 4.4
            : null;
      },
      12: (e, t, n) => {
        "use strict";
        n.d(t, {
          U: () => r,
        });
        const r = {};
      },
      670: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => a,
        });
        var r = n(12),
          i = n(2963),
          o = n(6528),
          s = n(6042);
        n(328);

        function a(e) {
          const t = e.getName().name;
          if (!r.U[t]) {
            if (
              !(0, s.sE)(
                i.B,
                (0, s.wB)({
                  name: t,
                })
              )
            ) {
              if (!(0, s.mf)(e.supports))
                throw new Error(
                  "Tried to register a provider with an invalid object"
                );
              i.B.unshift({
                name: t,
                supports: e.supports,
              });
            }
            0, (0, s.ce)(e.prototype, o.Z), (r.U[t] = e);
          }
        }
      },
      6593: (e, t, n) => {
        "use strict";
        n.d(t, {
          B: () => l,
          H: () => a,
        });
        var r = n(1628),
          i = n(7034),
          o = n(9025);
        const s = {
            aac: "audio/mp4",
            mp4: "video/mp4",
            f4v: "video/mp4",
            m4v: "video/mp4",
            mov: "video/mp4",
            mp3: "audio/mpeg",
            mpeg: "audio/mpeg",
            ogv: "video/ogg",
            ogg: "video/ogg",
            oga: "video/ogg",
            vorbis: "video/ogg",
            webm: "video/webm",
            f4a: "video/aac",
            m3u8: "application/vnd.apple.mpegurl",
            m3u: "application/vnd.apple.mpegurl",
            hls: "application/vnd.apple.mpegurl",
          },
          a = (e) => {
            if (!o.Z || !o.Z.canPlayType) return !1;
            if (!1 === (0, r.V)(e)) return !1;
            const t = e.file,
              n = e.type;
            if ((0, i.isRtmp)(t, n)) return !1;
            let a = e.mimeType || s[n];
            if (!a) return !1;
            const l = e.mediaTypes;
            return (
              null != l && l.length && (a = [a].concat(l.slice()).join("; ")),
              Boolean(o.Z.canPlayType(a))
            );
          },
          l = [
            {
              name: "html5",
              supports: a,
            },
          ];
      },
      1384: (e, t, n) => {
        "use strict";
        n.d(t, {
          CX: () => l,
          IP: () => d,
          If: () => a,
          Nm: () => u,
        });
        var r = n(1643);
        let i,
          o,
          s = !1;
        const a = () => s,
          l = function (e, t) {
            if ((t = Boolean(t))) {
              try {
                const t =
                  e.video.webkitEnterFullscreen ||
                  e.video.webkitEnterFullScreen;
                t && t.apply(e.video);
              } catch (e) {
                return !1;
              }
              return e.getFullscreen();
            }
            const n =
              e.video.webkitExitFullscreen || e.video.webkitExitFullScreen;
            return n && n.apply(e.video), t;
          },
          c = function (e, t, n) {
            (s = n),
              e.trigger(r.h7, {
                target: t.target,
                jwstate: n,
              });
          },
          u = function (e, t) {
            (i = (t) => c(e, t, !0)),
              (o = (t) => c(e, t, !1)),
              t.addEventListener("webkitbeginfullscreen", i),
              t.addEventListener("webkitendfullscreen", o);
          },
          d = (e) => {
            e.removeEventListener("webkitbeginfullscreen", i),
              e.removeEventListener("webkitendfullscreen", o);
          };
      },
      6875: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => r,
        });
        const r =
          "hidden" in document
            ? function () {
                return !document.hidden;
              }
            : "webkitHidden" in document
            ? function () {
                return !document.webkitHidden;
              }
            : function () {
                return !0;
              };
      },
      6886: (e, t, n) => {
        "use strict";
        n.d(t, {
          E: () => a,
          h: () => p,
        });
        var r = n(9888),
          i = n(7034),
          o = n(4446);
        const s = function () {},
          a = (e) => {
            (e.onload = null),
              (e.onprogress = null),
              (e.onreadystatechange = null),
              (e.onerror = null),
              "abort" in e && e.abort();
          },
          l = (e, t, n, r) => {
            e.onerror(t, e.url, e.xhr, new o.rG(t, n, r));
          },
          c = (e, t, n) => {
            const r = t.documentElement;
            if (
              !n.requireValidXML ||
              ("parsererror" !== r.nodeName &&
                !r.getElementsByTagName("parsererror").length)
            )
              return (
                e.responseXML ||
                  (e = Object.assign({}, e, {
                    responseXML: t,
                  })),
                n.oncomplete(e)
              );
            l(n, o.ul, 601);
          },
          u = (e) =>
            function (t) {
              const n = t.currentTarget || e.xhr;
              if ((clearTimeout(e.timeoutId), e.responseType)) {
                if ("json" === e.responseType)
                  return ((e, t) => {
                    if (
                      !e.response ||
                      ("string" == typeof e.response &&
                        '"' !== e.responseText.substr(1))
                    )
                      try {
                        e = Object.assign({}, e, {
                          response: JSON.parse(e.responseText),
                        });
                      } catch (e) {
                        return void l(t, o.ul, 611, e);
                      }
                    return t.oncomplete(e);
                  })(n, e);
              } else {
                let t,
                  s = n.responseXML;
                if (s)
                  try {
                    t = s.firstChild;
                  } catch (e) {}
                if (s && t) return c(n, s, e);
                var i;
                if (e.useDomParser && n.responseText && !s)
                  if (
                    ((s = (0, r.parseXML)(n.responseText)),
                    null != (i = s) && i.firstChild)
                  )
                    return c(n, s, e);
                if (e.requireValidXML) return void l(e, o.ul, 602);
              }
              e.oncomplete(n);
            };
        let d;
        const p = (e, t, n, r) => {
          var c;
          let p;
          e === Object(e) && (e = (r = e).url);
          const h = Object.assign(
              {
                xhr: null,
                url: e,
                withCredentials: !1,
                retryWithoutCredentials: !1,
                timeout: 6e4,
                timeoutId: -1,
                oncomplete: t || s,
                onerror: n || s,
                mimeType: r && !r.responseType ? "text/xml" : "",
                requireValidXML: !1,
                responseType: null != (c = r) && c.plainText ? "text" : "",
                useDomParser: !1,
                requestFilter: null,
              },
              r
            ),
            f = d("Error loading file", h);
          if ("XMLHttpRequest" in window) {
            if (
              ((p = h.xhr = h.xhr || new window.XMLHttpRequest()),
              "function" == typeof h.requestFilter)
            ) {
              let t;
              try {
                t = h.requestFilter({
                  url: e,
                  xhr: p,
                });
              } catch (e) {
                return f(e, 5), p;
              }
              t && "open" in t && "send" in t && (p = h.xhr = t);
            }
            (p.onreadystatechange = ((e) =>
              function (t) {
                const n = t.currentTarget || e.xhr;
                if (4 === n.readyState) {
                  clearTimeout(e.timeoutId);
                  const r = n.status;
                  if (r >= 400) return void l(e, o.ul, r < 600 ? r : 6);
                  if (200 === r) return u(e)(t);
                  0 === r &&
                    (0, i.isFileProtocol)() &&
                    !/^[a-z][a-z0-9+.-]*:/.test(e.url) &&
                    l(e, o.ul, 7);
                }
              })(h)),
              (p.onerror = f),
              "overrideMimeType" in p
                ? h.mimeType && p.overrideMimeType(h.mimeType)
                : (h.useDomParser = !0);
            try {
              (e = e.replace(/#.*$/, "")), p.open("GET", e, !0);
            } catch (e) {
              return f(e, 3), p;
            }
            if (h.responseType)
              try {
                p.responseType = h.responseType;
              } catch (e) {}
            h.timeout &&
              ((h.timeoutId = setTimeout(function () {
                a(p), l(h, o.ud, 1);
              }, h.timeout)),
              (p.onabort = function () {
                clearTimeout(h.timeoutId);
              }));
            try {
              h.withCredentials &&
                "withCredentials" in p &&
                (p.withCredentials = !0),
                p.send();
            } catch (e) {
              f(e, 4);
            }
            return p;
          }
          l(h, o.ud, 2);
        };
        d = (e, t) =>
          function (e, n) {
            const r = e.currentTarget || t.xhr;
            if (
              (clearTimeout(t.timeoutId),
              t.retryWithoutCredentials && t.xhr.withCredentials)
            ) {
              a(r);
              const e = Object.assign({}, t, {
                xhr: null,
                withCredentials: !1,
                retryWithoutCredentials: !1,
              });
              p(e);
            } else
              !n && r.status >= 400 && r.status < 600 && (n = r.status),
                l(t, n ? o.ul : o.ud, n || 6, e);
          };
      },
      328: (e, t, n) => {
        "use strict";
        n.d(t, {
          IH: () => c,
          S1: () => u,
          X$: () => d,
          ZP: () => a,
          on: () => l,
          wj: () => p,
        });
        var r = function (e, t) {
          if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
          return Object.prototype.hasOwnProperty.call(Object(e), t);
        };
        const i = (e, t, n, r) => {
            let i = -1;
            const o = e.length;
            for (; ++i < o; ) {
              const o = e[i];
              if (r)
                try {
                  o.callback.apply(o.context || n, t);
                } catch (e) {
                  console.log(`Error in "${r}" event handler:`, e);
                }
              else o.callback.apply(o.context || n, t);
            }
          },
          o = /\s+/,
          s = (e, t, n, i) => {
            if (!n) return !0;
            if ("object" == typeof n) {
              for (const o in n) r(n, o) && e[t].apply(e, [o, n[o]].concat(i));
              return !1;
            }
            if (o.test(n)) {
              const r = n.split(o);
              for (let n = 0, o = r.length; n < o; n++)
                e[t].apply(e, [r[n]].concat(i));
              return !1;
            }
            return !0;
          };
        class a {
          on(e, t, n) {
            if (!s(this, "on", e, [t, n]) || !t) return this;
            const r = this._events || (this._events = {});
            return (
              (r[e] || (r[e] = [])).push({
                callback: t,
                context: n,
              }),
              this
            );
          }
          once(e, t, n) {
            if (!s(this, "once", e, [t, n]) || !t) return this;
            let r = 0;
            const i = this,
              o = function () {
                r++ || (i.off(e, o), t.apply(this, arguments));
              };
            return (o._callback = t), this.on(e, o, n);
          }
          off(e, t, n) {
            if (!this._events || !s(this, "off", e, [t, n])) return this;
            if (!e && !t && !n) return delete this._events, this;
            const r = e ? [e] : Object.keys(this._events);
            for (let i = 0, o = r.length; i < o; i++) {
              e = r[i];
              const o = this._events[e];
              if (o) {
                const r = (this._events[e] = []);
                if (t || n)
                  for (let e = 0, i = o.length; e < i; e++) {
                    const i = o[e];
                    ((t && t !== i.callback && t !== i.callback._callback) ||
                      (n && n !== i.context)) &&
                      r.push(i);
                  }
                r.length || delete this._events[e];
              }
            }
            return this;
          }
          trigger(e, ...t) {
            if (!this._events) return this;
            if (!s(this, "trigger", e, t)) return this;
            const n = this._events[e],
              r = this._events.all;
            return n && i(n, t, this), r && i(r, arguments, this), this;
          }
          triggerSafe(e, ...t) {
            if (!this._events) return this;
            if (!s(this, "trigger", e, t)) return this;
            const n = this._events[e],
              r = this._events.all;
            return n && i(n, t, this, e), r && i(r, arguments, this, e), this;
          }
        }
        const l = a.prototype.on,
          c = a.prototype.once,
          u = a.prototype.off,
          d = a.prototype.trigger,
          p = a.prototype.triggerSafe;
        (a.on = l), (a.once = c), (a.off = u), (a.trigger = d);
      },
      2268: (e, t, n) => {
        "use strict";
        n.d(t, {
          A: () => d,
          DF: () => c,
          Dt: () => v,
          G6: () => m,
          NO: () => C,
          O7: () => b,
          Q6: () => h,
          cL: () => k,
          dI: () => j,
          gn: () => y,
          i7: () => f,
          id: () => l,
          pZ: () => o,
          tq: () => w,
          un: () => u,
          w1: () => g,
          xb: () => s,
          yS: () => p,
          zc: () => a,
        });
        const r = (e) => null !== navigator.userAgent.match(e),
          i = () =>
            "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
          o = () => r(/firefox\//i),
          s = () => r(/iP(hone|od)/i),
          a = () => r(/iPad/i) || i(),
          l = () => r(/Macintosh/i) && !i(),
          c = () => r(/FBAV/i),
          u = () => r(/\sEdge?\/\d+/i),
          d = () => r(/msie/i),
          p = () => r(/SMART-TV/),
          h = () => p() && !r(/SamsungBrowser/),
          f = () =>
            r(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !u() && !r(/UCBrowser/i),
          g = () =>
            !r(/\sEdg\/\d+/i) && (u() || r(/trident\/.+rv:\s*11/i) || d()),
          m = () =>
            r(/safari/i) &&
            !r(/(?:Chrome|CriOS|chromium|android|phantom)/i) &&
            !p(),
          y = () => r(/iP(hone|ad|od)/i) || i(),
          v = function () {
            return "boolean" == typeof v.mock_
              ? v.mock_
              : r(/Android/i) && !r(/Windows Phone/i);
          },
          b = () =>
            !(r(/chrome\/[123456789]/i) && !r(/chrome\/18/i) && !o()) && v();
        v.mock_ = null;
        const w = () => y() || v() || r(/Windows Phone/i),
          k = function () {
            if ("boolean" == typeof k.mock_) return k.mock_;
            try {
              return window.self !== window.top;
            } catch (e) {
              return !0;
            }
          };
        k.mock_ = null;
        const C = () => !1,
          j = () => 0;
      },
      8381: (e, t, n) => {
        "use strict";
        n.d(t, {
          $W: () => a,
          Mf: () => c,
          T2: () => u,
          _b: () => l,
        });
        var r = n(8518),
          i = n(2557),
          o = n(4446);
        const s = (e) => (t) => 0 === t.indexOf(e),
          a = function (e, t) {
            const n = [];
            if (!e || !e.timestamps || !e.timestamps.length) return n;
            const i = e.timestamps.sort((e, t) => e.begin - t.begin);
            return (
              i.forEach((o, a) => {
                const l = ((e, t = "en") => {
                    let n = (0, r.G3)();
                    const i = Object.keys(e.title),
                      o = i[0];
                    for (; !e.title[n]; ) {
                      const e = i.find(s(n));
                      if (e) {
                        n = e;
                        break;
                      }
                      const t = n.lastIndexOf("-");
                      if (t <= 0) {
                        n = null;
                        break;
                      }
                      n = n.slice(0, t);
                    }
                    return n || (i.indexOf(t) >= 0 ? t : o);
                  })(o, e.defaultLanguage),
                  c = o.title[l],
                  u = o.time,
                  d = o.image;
                let p = t;
                a + 1 < i.length && (p = i[a + 1].time);
                const h = {
                  begin: u,
                  end: p,
                  text: c,
                  cueType: "chapters",
                };
                d && (h.image = d), n.push(h);
              }),
              n
            );
          },
          l = function (e, t) {
            const n = (0, r.G3)(),
              o = e.reduce(function (e, t) {
                if (!t || !t.cueType || "chapters" === t.cueType) {
                  const r = new i.u({
                    time: t.begin,
                    image: t.image,
                  });
                  r.addTitle(n, t.text), e.push(r);
                }
                return e;
              }, []);
            return t ? ((t.timestamps = o), t) : new i.t(n, o);
          },
          c = function (e, t) {
            if ("number" != typeof e || e < 0 || !t || !t.length) return null;
            let n = null;
            for (let r = 0; r < t.length; r++) {
              const i = t[r];
              i.time > e || ((!n || i.time > n.time) && (n = i));
            }
            return n;
          },
          u = function (e, t) {
            let n = !0;
            return (
              e.forEach((e) => {
                if (!e) return;
                if (!e.defaultLanguage || !e.timestamps) return void (n = !1);
                e.timestamps.some(
                  (e) => !e.title || null === e.time || void 0 === e.time
                ) && (n = !1);
              }),
              t(n ? null : (0, o.l9)(new Error(), o.aD))
            );
          };
      },
      974: (e, t, n) => {
        "use strict";
        n.d(t, {
          HY: () => f,
          iv: () => d,
          oB: () => u,
          oI: () => a,
          vs: () => p,
        });
        var r = n(2957),
          i = n(9563),
          o = n.n(i),
          s = function (e, t) {
            if (null == e)
              throw new TypeError("Cannot convert undefined or null to object");
            return Object.prototype.hasOwnProperty.call(Object(e), t);
          };
        const a = o().clear,
          l = (e) => {
            e = e.split("-");
            for (let t = 1; t < e.length; t++)
              e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
            return e.join("");
          },
          c = (e, t) =>
            "" === t || null == t
              ? ""
              : "string" == typeof t && isNaN(t)
              ? /png|gif|jpe?g/i.test(t) && t.indexOf("url") < 0
                ? `url(${t})`
                : t
              : 0 === t || "z-index" === e || "opacity" === e
              ? `${t}`
              : /color/i.test(e)
              ? `#${(0, r.vk)(t.toString(16).replace(/^0x/i, ""), 6)}`
              : `${Math.ceil(t)}px`,
          u = (e, t) => {
            if (null == e) return;
            let n;
            void 0 === e.length && (e = [e]);
            const r = {};
            for (n in t) s(t, n) && (r[n] = c(n, t[n]));
            for (let t = 0; t < e.length; t++) {
              const i = e[t];
              let o;
              if (null != i)
                for (n in r)
                  s(r, n) &&
                    ((o = l(n)), i.style[o] !== r[n] && (i.style[o] = r[n]));
            }
          },
          d = (e, t, n, r) => {
            n = n || "all-players";
            let i = "";
            if ("object" == typeof t) {
              const e = document.createElement("div");
              u(e, t);
              let n = e.style.cssText;
              s(t, "content") && n && (n = `${n} content: "${t.content}";`),
                r && n && (n = n.replace(/;/g, " !important;")),
                (i = `{${n}}`);
            } else "string" == typeof t && (i = t);
            "" !== i && "{}" !== i
              ? o().style([[e, e + i]], n)
              : o().clear(n, e);
          },
          p = (e, t) => {
            u(e, {
              transform: t,
            });
          };
        let h;
        const f = (e, t) => {
          let n = "rgb";
          const r = void 0 !== t && 100 !== t;
          if ((r && (n += "a"), !h)) {
            const e = document.createElement("canvas");
            (e.height = 1),
              (e.width = 1),
              (h = e.getContext("2d", {
                willReadFrequently: !0,
              }));
          }
          e ? isNaN(parseInt(e, 16)) || (e = `#${e}`) : (e = "#000000"),
            h.clearRect(0, 0, 1, 1),
            (h.fillStyle = e),
            h.fillRect(0, 0, 1, 1);
          const i = h.getImageData(0, 0, 1, 1).data;
          return (
            (n += `(${i[0]}, ${i[1]}, ${i[2]}`),
            r && (n += ", " + t / 100),
            `${n})`
          );
        };
      },
      5004: (e, t, n) => {
        "use strict";
        n.d(t, {
          z: () => r,
        });
        const r =
          Date.now ||
          function () {
            return new Date().getTime();
          };
      },
      2799: (e, t, n) => {
        "use strict";
        n.d(t, {
          A8: () => T,
          AH: () => Z,
          EU: () => m,
          FK: () => v,
          IV: () => j,
          L_: () => P,
          P$: () => S,
          SH: () => A,
          UM: () => F,
          Ww: () => I,
          az: () => g,
          bJ: () => f,
          cS: () => E,
          cn: () => C,
          gB: () => h,
          i3: () => _,
          kq: () => O,
          nG: () => M,
          nh: () => y,
          oH: () => d,
          og: () => x,
          pv: () => c,
          s1: () => k,
        });
        var r = n(2957),
          i = n(6042),
          o = n(8348);
        const s = window.DOMParser;
        let a,
          l = !0;
        const c = (e, t) => e.classList.contains(t),
          u = (e) => {
            if (
              (a ||
                ((a = new s()),
                (l = (() => {
                  try {
                    if (a.parseFromString("", "text/html")) return !0;
                  } catch (e) {}
                  return !1;
                })())),
              l)
            )
              return a.parseFromString(e, "text/html").body;
            const t = document.implementation.createHTMLDocument("");
            return (
              e.toLowerCase().indexOf("<!doctype") > -1
                ? (t.documentElement.innerHTML = e)
                : (t.body.innerHTML = e),
              t.body
            );
          },
          d = (e) => {
            const t = e.querySelectorAll("script,object,iframe,meta");
            for (let e = t.length; e--; ) {
              const n = t[e];
              n.parentNode.removeChild(n);
            }
            return e;
          },
          p =
            /^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/,
          h = (e) => {
            const t = e.attributes;
            for (let n = t.length; n--; ) {
              const r = t[n].name;
              if ((/^on/.test(r) && e.removeAttribute(r), /href/.test(r))) {
                const i = t[n].value;
                (!/javascript:|javascript&colon;/.test(i) && p.test(i)) ||
                  (e.removeAttribute(r), console.warn("Invalid or unsafe URL"));
              }
            }
            return e;
          },
          f = (e) => {
            const t = u(e);
            d(t);
            const n = t.querySelectorAll("*");
            for (let e = n.length; e--; ) {
              const t = n[e];
              h(t);
            }
            return t;
          },
          g = (e) => f(e).firstChild,
          m = (e) => {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
          },
          y = (e, t) => {
            m(e),
              ((e, t) => {
                if (!t) return;
                const n = document.createDocumentFragment(),
                  r = f(t).childNodes;
                for (let e = 0; e < r.length; e++)
                  n.appendChild(r[e].cloneNode(!0));
                e.appendChild(n);
              })(e, t);
          },
          v = (e) => e + (e.toString().indexOf("%") > 0 ? "" : "px"),
          b = (e) => ((0, i.HD)(e.className) ? e.className.split(" ") : []),
          w = (e, t) => {
            (t = (0, r.fy)(t)), e.className !== t && (e.className = t);
          },
          k = (e) => (e.classList ? e.classList : b(e)),
          C = (e, t) => {
            const n = b(e);
            (Array.isArray(t) ? t : t.split(" ")).forEach(function (e) {
              (0, i.r3)(n, e) || n.push(e);
            }),
              w(e, n.join(" "));
          },
          j = (e, t) => {
            const n = b(e),
              r = Array.isArray(t) ? t : t.split(" ");
            w(e, (0, i.e5)(n, r).join(" "));
          },
          P = (e, t, n) => {
            let r = e.className || "";
            t.test(r) ? (r = r.replace(t, n)) : n && (r += ` ${n}`), w(e, r);
          },
          x = (e, t, n) => {
            const r = c(e, t);
            (n = (0, i.jn)(n) ? n : !r) !== r && (n ? C(e, t) : j(e, t));
          },
          S = (e, t, n) => {
            e.setAttribute(t, n);
          },
          O = (e) => {
            const t = document.createElement("link");
            (t.rel = "stylesheet"),
              (t.href = e),
              document.getElementsByTagName("head")[0].appendChild(t);
          },
          E = (e) => {
            e && m(e);
          },
          T = (e) => {
            const t = {
              left: 0,
              right: 0,
              width: 0,
              height: 0,
              top: 0,
              bottom: 0,
            };
            if (!e || !document.body.contains(e)) return t;
            const n = e.getBoundingClientRect(),
              r = window.pageYOffset,
              i = window.pageXOffset;
            return n.width || n.height || n.left || n.top
              ? ((t.left = n.left + i),
                (t.right = n.right + i),
                (t.top = n.top + r),
                (t.bottom = n.bottom + r),
                (t.width = n.right - n.left),
                (t.height = n.bottom - n.top),
                t)
              : t;
          },
          A = (e, t) => {
            e.insertBefore(t, e.firstChild);
          },
          Z = (e) => e.nextElementSibling,
          _ = (e) => e.previousElementSibling,
          M = (e, t, n = {}, r = document) => {
            if (!p.test(e)) return;
            let i = r.createElement("a");
            (i.href = e),
              (i.target = t),
              (i = h(Object.assign(i, n))),
              o.Browser.firefox
                ? i.dispatchEvent(
                    new MouseEvent("click", {
                      bubbles: !0,
                      cancelable: !0,
                      view: window,
                    })
                  )
                : i.click();
          },
          F = () => {
            const e = window.screen.orientation;
            return (
              (!!e &&
                ("landscape-primary" === e.type ||
                  "landscape-secondary" === e.type)) ||
              90 === window.orientation ||
              -90 === window.orientation
            );
          },
          I = (e) =>
            ((e) => {
              const t = document.createElement("textarea");
              return (t.innerHTML = e), t.value;
            })(e)
              .replace(/&|<|>|"|''/gm, function (e) {
                return `&#${e.charCodeAt(0)};`;
              })
              .replace(
                /&#60;(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)&#62;/gim,
                "<$1$2>"
              );
      },
      4429: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => b,
        });
        var r = n(1569),
          i = n(7034),
          o = n(9888),
          s = n(2957),
          a = n(7411),
          l = n(4742);
        const c = function (e, t) {
          (this.name = e),
            (this.message = t.message || t.toString()),
            (this.error = t);
        };
        var u = n(6042),
          d = n(2268),
          p = n(2799),
          h = n(974),
          f = n(6886),
          g = n(1261),
          m = n(5499),
          y = n(6234),
          v = function (e, t) {
            if (null == e)
              throw new TypeError("Cannot convert undefined or null to object");
            return Object.prototype.hasOwnProperty.call(Object(e), t);
          };
        const b = Object.assign({}, o, i, r, {
          addClass: p.cn,
          hasClass: p.pv,
          removeClass: p.IV,
          replaceClass: p.L_,
          toggleClass: p.og,
          classList: p.s1,
          styleDimension: p.FK,
          createElement: p.az,
          emptyElement: p.EU,
          addStyleSheet: p.kq,
          bounds: p.A8,
          openLink: p.nG,
          replaceInnerHtml: p.nh,
          css: h.iv,
          clearCss: h.oI,
          style: h.oB,
          transform: h.vs,
          getRgba: h.HY,
          ajax: f.h,
          crossdomain: (e) => {
            const t = window.URL;
            try {
              const n = new t(e, location.origin);
              return (
                `${location.protocol}//${location.host}` !=
                `${n.protocol}//${n.host}`
              );
            } catch (e) {}
            return !0;
          },
          tryCatch: function (e, t, n = []) {
            if (l.Z.debug) return e.apply(t || this, n);
            try {
              return e.apply(t || this, n);
            } catch (t) {
              return new c(e.name, t);
            }
          },
          Error: c,
          Timer: a.Z,
          log: m.c,
          genId: y.B,
          between: g.v,
          foreach: function (e, t) {
            for (const n in e) v(e, n) && t(n, e[n]);
          },
          flashVersion: d.dI,
          isIframe: d.cL,
          indexOf: u.cq,
          trim: s.fy,
          pad: s.vk,
          extension: s.AO,
          hms: s.WZ,
          seconds: s.m9,
          prefix: s.O4,
          suffix: s.uA,
          noop: () => {},
        });
      },
      7543: (e, t, n) => {
        "use strict";
        n.d(t, {
          C: () => r,
        });
        const r = (e) =>
          !!(e = e || window.event) &&
          Boolean(e) &&
          /^(?:mouse|pointer|touch|gesture|click|key)/.test(e.type);
      },
      8518: (e, t, n) => {
        "use strict";
        n.d(t, {
          Cq: () => g,
          Dq: () => P,
          G3: () => y,
          Mh: () => S,
          Pm: () => C,
          dl: () => j,
          id: () => f,
          q2: () => w,
          t6: () => b,
          tK: () => h,
        });
        var r = n(6042),
          i = n(2268),
          o = n(6886),
          s = n(7034),
          a = n(696);
        const l = {},
          c = {
            aa: "Afar",
            ab: "Abkhazian",
            ae: "Avestan",
            af: "Afrikaans",
            ak: "Akan",
            am: "Amharic",
            ar: "Arabic",
            an: "Aragonese",
            as: "Assamese",
            av: "Avaric",
            ay: "Aymara",
            az: "Azerbaijani",
            ba: "Bashkir",
            be: "Belarusian",
            bg: "Bulgarian",
            bh: "Bihari languages",
            bi: "Bislama",
            bm: "Bambara",
            bn: "Bengali",
            bo: "Tibetan",
            br: "Breton",
            bs: "Bosnian",
            ca: "Catalan",
            ce: "Chechen",
            ch: "Chamorro",
            co: "Corsican",
            cr: "Cree",
            cs: "Czech",
            cu: "Church Slavic",
            cv: "Chuvash",
            cy: "Welsh",
            da: "Danish",
            de: "German",
            dv: "Divehi",
            dz: "Dzongkha",
            ee: "Ewe",
            el: "Greek",
            en: "English",
            eo: "Esperanto",
            es: "Spanish",
            et: "Estonian",
            eu: "Basque",
            fa: "Persian",
            ff: "Fulah",
            fi: "Finnish",
            fj: "Fijian",
            fo: "Faroese",
            fr: "French",
            fy: "Western Frisian",
            ga: "Irish",
            gd: "Gaelic",
            gl: "Galician",
            gn: "Guarani",
            gu: "Gujarati",
            gv: "Manx",
            ha: "Hausa",
            he: "Hebrew",
            hi: "Hindi",
            ho: "Hiri Motu",
            hr: "Croatian",
            ht: "Haitian",
            hu: "Hungarian",
            hy: "Armenian",
            hz: "Herero",
            ia: "Interlingua",
            id: "Indonesian",
            ie: "Interlingue",
            ig: "Igbo",
            ii: "Sichuan Yi",
            ik: "Inupiaq",
            io: "Ido",
            is: "Icelandic",
            it: "Italian",
            iu: "Inuktitut",
            ja: "Japanese",
            jv: "Javanese",
            ka: "Georgian",
            kg: "Kongo",
            ki: "Kikuyu",
            kj: "Kuanyama",
            kk: "Kazakh",
            kl: "Kalaallisut",
            km: "Central Khmer",
            kn: "Kannada",
            ko: "Korean",
            kr: "Kanuri",
            ks: "Kashmiri",
            ku: "Kurdish",
            kv: "Komi",
            kw: "Cornish",
            ky: "Kirghiz",
            la: "Latin",
            lb: "Luxembourgish",
            lg: "Ganda",
            li: "Limburgan",
            lo: "Lao",
            ln: "Lingala",
            lt: "Lithuanian",
            lu: "Luba-Katanga",
            lv: "Latvian",
            mg: "Malagasy",
            mh: "Marshallese",
            mi: "Maori",
            mk: "Macedonian",
            ml: "Malayalam",
            mn: "Mongolian",
            mr: "Marathi",
            ms: "Malay",
            mt: "Maltese",
            my: "Burmese",
            na: "Nauru",
            nb: "Bokmål",
            nd: "Ndebele",
            ne: "Nepali",
            ng: "Ndonga",
            nl: "Dutch",
            nn: "Norwegian Nynorsk",
            no: "Norwegian",
            nr: "Ndebele",
            nv: "Navajo",
            ny: "Chichewa",
            oc: "Occitan",
            oj: "Ojibwa",
            om: "Oromo",
            or: "Oriya",
            os: "Ossetian",
            pa: "Panjabi",
            pi: "Pali",
            pl: "Polish",
            pt: "Portuguese",
            ps: "Pushto",
            qu: "Quechua",
            rm: "Romansh",
            rn: "Rundi",
            ro: "Romanian",
            ru: "Russian",
            rw: "Kinyarwanda",
            sa: "Sanskrit",
            sc: "Sardinian",
            sd: "Sindhi",
            se: "Northern Sami",
            sg: "Sango",
            si: "Sinhala",
            sk: "Slovak",
            sl: "Slovenian",
            sm: "Samoan",
            sn: "Shona",
            so: "Somali",
            sq: "Albanian",
            sr: "Serbian",
            ss: "Swati",
            st: "Sotho",
            su: "Sundanese",
            sw: "Swahili",
            sv: "Swedish",
            ta: "Tamil",
            te: "Telugu",
            tg: "Tajik",
            th: "Thai",
            ti: "Tigrinya",
            tk: "Turkmen",
            tl: "Tagalog",
            tn: "Tswana",
            to: "Tonga",
            tr: "Turkish",
            ts: "Tsonga",
            tt: "Tatar",
            tw: "Twi",
            ty: "Tahitian",
            ug: "Uighur",
            uk: "Ukrainian",
            ur: "Urdu",
            uz: "Uzbek",
            ve: "Venda",
            vi: "Vietnamese",
            vo: "Volapük",
            wa: "Walloon",
            wo: "Wolof",
            xh: "Xhosa",
            yi: "Yiddish",
            yo: "Yoruba",
            za: "Zhuang",
            zh: "Chinese",
            zu: "Zulu",
          },
          u = (0, r.U_)(c),
          d = (e) => e.toLowerCase().replace("-", "_"),
          p = (e) => {
            const t = d(e),
              n = t.indexOf("_");
            return -1 === n ? t : t.substring(0, n);
          },
          h = (e) =>
            e ? Object.keys(e).reduce((t, n) => ((t[d(n)] = e[n]), t), {}) : {},
          f = (e) => {
            if (e) return 3 === e.length ? e : c[p(e)] || e;
          },
          g = (e) => u[e] || "",
          m = (e) => {
            const t = e.querySelector("html");
            return t ? t.getAttribute("lang") : null;
          },
          y = function () {
            if ("string" == typeof y.mock_) return y.mock_;
            let e = m(document);
            if (!e && (0, i.cL)())
              try {
                e = m(window.top.document);
              } catch (e) {}
            return e || navigator.language || "en";
          };
        y.mock_ = null;
        const v = [
            "ar",
            "da",
            "de",
            "el",
            "es",
            "fi",
            "fr",
            "he",
            "id",
            "it",
            "ja",
            "ko",
            "nb",
            "nl",
            "nn",
            "no",
            "oc",
            "pt",
            "ro",
            "ru",
            "sl",
            "sv",
            "th",
            "tr",
            "vi",
            "zh",
          ],
          b = (e) =>
            8207 === e.charCodeAt(0) ||
            /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(e),
          w = function (e) {
            return "boolean" == typeof w.mock_ ? w.mock_ : v.indexOf(p(e)) >= 0;
          };
        w.mock_ = null;
        const k = (e, t, n) => {
            const r = e[n] || t[n];
            r && (e[n] = r);
          },
          C = (e, t, n) =>
            Object.assign(
              {},
              ((e) => {
                const {
                    advertising: t,
                    related: n,
                    sharing: r,
                    abouttext: i,
                  } = e,
                  o = Object.assign({}, e.localization);
                t &&
                  ((o.advertising = o.advertising || {}),
                  k(o.advertising, t, "admessage"),
                  k(o.advertising, t, "cuetext"),
                  k(o.advertising, t, "loadingAd"),
                  k(o.advertising, t, "podmessage"),
                  k(o.advertising, t, "skipmessage"),
                  k(o.advertising, t, "skiptext")),
                  "string" == typeof o.related
                    ? (o.related = {
                        heading: o.related,
                      })
                    : (o.related = o.related || {}),
                  n && k(o.related, n, "autoplaymessage"),
                  r &&
                    ((o.sharing = o.sharing || {}),
                    k(o.sharing, r, "heading"),
                    k(o.sharing, r, "copied")),
                  i && k(o, e, "abouttext");
                const s = o.close || o.nextUpClose;
                return s && (o.close = s), o;
              })(e),
              t[p(n)],
              t[d(n)]
            ),
          j = function (e) {
            return "boolean" == typeof j.mock_
              ? j.mock_
              : (0, s.isDeepKeyCompliant)(
                  a.Z,
                  e,
                  (e, t) => "string" == typeof t[e]
                );
          };
        j.mock_ = null;
        const P = function (e, t) {
          if ("function" == typeof P.mock_) return P.mock_;
          let n = l[t];
          if (!n) {
            const i = `${e}translations/${
              ((r = p(t)), /^n[bn]$/.test(r) ? "no" : r)
            }.json`;
            l[t] = n = new Promise((e, n) => {
              (0, o.h)({
                url: i,
                oncomplete: e,
                onerror: (e, r, i, o) => {
                  (l[t] = null), n(o);
                },
                responseType: "json",
              });
            });
          }
          var r;
          return n;
        };
        P.mock_ = null;
        const x = (e, t, n, r) => {
            e[t] = Object.assign({}, n[t], r[t]);
          },
          S = (e, t) => {
            const n = Object.assign({}, e, t);
            return (
              x(n, "errors", e, t),
              x(n, "related", e, t),
              x(n, "sharing", e, t),
              x(n, "advertising", e, t),
              x(n, "shortcuts", e, t),
              x(n, "captionsStyles", e, t),
              n
            );
          };
      },
      5499: (e, t, n) => {
        "use strict";
        n.d(t, {
          c: () => r,
        });
        const r =
          "function" == typeof console.log
            ? console.log.bind(console)
            : () => {};
      },
      1261: (e, t, n) => {
        "use strict";
        n.d(t, {
          v: () => r,
        });
        const r = function (e, t, n) {
          return Math.max(Math.min(e, n), t);
        };
      },
      9888: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            getAbsolutePath: () => s,
            isAbsolutePath: () => o,
            parseDimension: () => c,
            parseXML: () => a,
            serialize: () => l,
            timeFormat: () => u,
            timeFormatAria: () => d,
          });
        var r = n(6042),
          i = n(5950);
        const o = (e) => /^(?:(?:https?|file):)?\/\//.test(e),
          s = (e, t) => (0, i.kd)(e, t),
          a = (e) => {
            let t = null;
            try {
              (t = new window.DOMParser().parseFromString(e, "text/xml")),
                t.querySelector("parsererror") && (t = null);
            } catch (e) {}
            return t;
          },
          l = (e) => {
            if (void 0 === e) return null;
            if ("string" == typeof e && e.length < 6) {
              const t = e.toLowerCase();
              if ("true" === t) return !0;
              if ("false" === t) return !1;
              if (!(0, r.i2)(Number(e)) && !(0, r.i2)(parseFloat(e)))
                return Number(e);
            }
            return e;
          },
          c = (e) =>
            (0, r.qh)(e)
              ? e
              : "" === e
              ? 0
              : e.lastIndexOf("%") > -1
              ? e
              : parseInt(e.replace("px", ""), 10),
          u = (e, t) => {
            if (
              ((0, r.i2)(e) && (e = parseInt(e.toString(), 10)),
              (0, r.i2)(e) || !isFinite(e) || (e <= 0 && !t))
            )
              return "00:00";
            const n = e < 0 ? "-" : "";
            e = Math.abs(e);
            const i = Math.floor(e / 3600),
              o = Math.floor((e - 3600 * i) / 60),
              s = Math.floor(e % 60);
            return `${n + (i ? `${i}:` : "") + (o < 10 ? "0" : "") + o}:${
              s < 10 ? "0" : ""
            }${s}`;
          },
          d = (e) => {
            if (
              ((0, r.i2)(e) && (e = parseInt(e.toString(), 10)),
              (0, r.i2)(e) || !isFinite(e) || e <= 0)
            )
              return "0 seconds";
            const t = Math.floor(e / 3600),
              n = Math.floor((e - 3600 * t) / 60),
              i = Math.floor(e % 60);
            return (
              (t ? t + (t >= 1 ? ` hour${t > 1 ? "s" : ""}, ` : "") : "") +
              (n ? n + (n >= 1 ? ` minute${n > 1 ? "s" : ""}, ` : "") : "") +
              i +
              (i >= 1 ? " second" + (i > 1 ? "s" : "") : "")
            );
          };
      },
      1569: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            getScriptPath: () => o,
            loadFrom: () => l,
            repo: () => s,
            versionCheck: () => a,
          });
        var r = n(6601),
          i = n(7034);
        const o = function (e) {
            {
              const t = document.getElementsByTagName("script");
              for (let n = 0; n < t.length; n++) {
                const r = t[n].src;
                if (r) {
                  const t = r.lastIndexOf(`/${e}`);
                  if (t >= 0) return r.substr(0, t + 1);
                }
              }
            }
            return "";
          },
          s = function () {
            const e = "//ssl.p.jwpcdn.com/player/v/8.31.0";
            return `${e && (0, i.isFileProtocol)() ? "https:" : ""}${e}`;
          },
          a = function (e) {
            const t = `0${e}`.split(/\W/),
              n = r.i.split(/\W/),
              i = parseFloat(t[0]),
              o = parseFloat(n[0]);
            return (
              !(i > o) &&
              !(i === o && parseFloat(`0${t[1]}`) > parseFloat(n[1]))
            );
          },
          l = function () {
            return s();
          };
      },
      6234: (e, t, n) => {
        "use strict";
        n.d(t, {
          B: () => o,
          F: () => r,
        });
        const r = 12,
          i = () => {
            try {
              const e = window.crypto || window.msCrypto;
              if (null != e && e.getRandomValues)
                return e.getRandomValues(new Uint32Array(1))[0].toString(36);
            } catch (e) {}
            return Math.random().toString(36).slice(2, 9);
          },
          o = (e) => {
            let t = "";
            for (; t.length < e; ) t += i();
            return t.slice(0, e);
          };
      },
      1776: (e, t, n) => {
        "use strict";
        n.d(t, {
          U: () => r,
          W: () => i,
        });
        const r = window.requestAnimationFrame || ((e) => setTimeout(e, 17)),
          i = window.cancelAnimationFrame || clearTimeout;
      },
      676: (e, t, n) => {
        "use strict";
        n.d(t, {
          ZP: () => c,
        });
        var r = n(328),
          i = n(1643);
        const o = {},
          s = (e) => {
            const t = document.createElement("link");
            return (
              (t.type = "text/css"), (t.rel = "stylesheet"), (t.href = e), t
            );
          },
          a = (e, t) => {
            const n = document.createElement("script");
            return (
              (n.type = "text/javascript"),
              (n.charset = "utf-8"),
              (n.async = !0),
              (n.timeout = t || 45e3),
              (n.src = e),
              n
            );
          },
          l = function (e, t, n) {
            const r = this;
            let l = 0;
            const c = (e) => {
                (l = 2), r.trigger(i.pn, e).off();
              },
              u = (e) => {
                (l = 3), r.trigger(i.xQ, e).off();
              };
            (this.getStatus = function () {
              return l;
            }),
              (this.load = function () {
                let r = o[e];
                return (
                  0 !== l ||
                    (r && r.then(u).catch(c),
                    (l = 1),
                    (r = new Promise((r, i) => {
                      const o = (t ? s : a)(e, n);
                      let l;
                      const d = function () {
                          (o.onerror = o.onload = null), clearTimeout(l);
                        },
                        p = function (e) {
                          d(), c(e), i(e);
                        };
                      (l = setTimeout(() => {
                        p(new Error(`Network timeout ${e}`));
                      }, 45e3)),
                        (o.onerror = function () {
                          p(new Error(`Failed to load ${e}`));
                        }),
                        (o.onload = function (e) {
                          d(), u(e), r(e);
                        });
                      const h =
                        document.getElementsByTagName("head")[0] ||
                        document.documentElement;
                      h.insertBefore(o, h.firstChild);
                    })),
                    (o[e] = r)),
                  r
                );
              });
          };
        Object.assign(l.prototype, r.ZP);
        const c = l;
      },
      2957: (e, t, n) => {
        "use strict";
        n.d(t, {
          AO: () => l,
          Dc: () => a,
          O4: () => p,
          U5: () => d,
          WZ: () => c,
          fy: () => o,
          m9: () => u,
          uA: () => h,
          vk: () => s,
          zz: () => f,
        });
        var r = n(6042);
        const i = window.parseFloat,
          o = (e) => e.replace(/^\s+|\s+$/g, ""),
          s = (e, t, n) => {
            for (e = `${e}`, n = n || "0"; e.length < t; ) e = n + e;
            return e;
          },
          a = (e, t) => {
            const n = e.attributes;
            for (let e = 0; e < n.length; e++)
              if (n[e].name && n[e].name.toLowerCase() === t.toLowerCase())
                return n[e].value.toString();
            return "";
          },
          l = (e) => {
            if (!e || "rtmp" === e.substr(0, 4)) return "";
            const t = /[(,]format=(m3u8|mpd)-/i.exec(e);
            if (t) return t[1];
            const n = e.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1");
            return n !== e
              ? n.toLowerCase()
              : (e = e.split("?")[0].split("#")[0]).lastIndexOf(".") > -1
              ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase()
              : "";
          },
          c = (e) => {
            const t = ((e / 60) | 0) % 60,
              n = e % 60;
            return `${s(((e / 3600) | 0).toString(), 2)}:${s(
              t.toString(),
              2
            )}:${s(n.toFixed(3), 6)}`;
          },
          u = (e, t) => {
            if (!e) return 0;
            if ((0, r.qh)(e)) return e;
            const n = e.replace(",", "."),
              o = n.slice(-1),
              s = n.split(":"),
              a = s.length;
            let l = 0;
            if ("s" === o) l = i(n);
            else if ("m" === o) l = 60 * i(n);
            else if ("h" === o) l = 3600 * i(n);
            else if (a > 1) {
              let e = a - 1;
              4 === a && (t && (l = i(s[e]) / t), (e -= 1)),
                (l += i(s[e])),
                (l += 60 * i(s[e - 1])),
                a >= 3 && (l += 3600 * i(s[e - 2]));
            } else l = i(n);
            return (0, r.qh)(l) ? l : 0;
          },
          d = (e, t, n) => {
            if ((0, r.HD)(e) && "%" === e.slice(-1)) {
              const n = i(e);
              return t && (0, r.qh)(t) && (0, r.qh)(n) ? (t * n) / 100 : null;
            }
            return u(e, n);
          },
          p = (e, t) => e.map((e) => t + e),
          h = (e, t) => e.map((e) => e + t),
          f = (e) => Boolean(e) && (0, r.HD)(e) && "%" === e.slice(-1);
      },
      5882: (e, t, n) => {
        "use strict";
        n.d(t, {
          GU: () => k,
          ZP: () => F,
          dO: () => x,
        });
        var r = n(8348),
          i = n(1643),
          o = n(328),
          s = n(5004),
          a = n(2799);
        const l = "ontouchstart" in window,
          c = "PointerEvent" in window && !r.OS.android,
          u = !(c || (l && r.OS.mobile)),
          d = "window",
          p = "init",
          h = "select",
          f = "keydown",
          { passiveEvents: g } = r.Features,
          m = !!g && {
            passive: !0,
          };
        let y, v;
        const b = (e, t, n) => {
            const { el: r } = e,
              i = ((e, t, n) => {
                const { target: r, touches: i, changedTouches: o } = t;
                let s,
                  { pointerType: a } = t;
                i || o
                  ? ((s = null != i && i.length ? i[0] : o[0]),
                    (a = a || "touch"))
                  : ((s = t), (a = a || "mouse"));
                const { pageX: l, pageY: c } = s;
                return {
                  type: e,
                  pointerType: a,
                  pageX: l,
                  pageY: c,
                  sourceEvent: t,
                  currentTarget: n,
                  target: r,
                };
              })(t, n, r);
            e.trigger(t, i);
          },
          w = (e, t, n) => {
            const { el: r } = e,
              { target: i } = n;
            e.trigger(t, {
              type: t,
              sourceEvent: n,
              currentTarget: r,
              target: i,
            });
          },
          k = (e) => {
            const t = e.ownerDocument || e;
            return t.defaultView || t.parentWindow || window;
          },
          C = (e, t, n, r, i = m) => {
            let o = e.handlers[t],
              s = e.options[t];
            if (
              (o || ((o = e.handlers[t] = {}), (s = e.options[t] = {})), o[n])
            )
              throw new Error(`${t} ${n} already registered`);
            (o[n] = r), (s[n] = i);
            const { el: a } = e,
              l = t === d ? k(a) : a;
            l && l.addEventListener(n, r, i);
          },
          j = (e) => {
            const { el: t } = e;
            null !== e.pointerId &&
              (t.releasePointerCapture(e.pointerId), (e.pointerId = null));
          },
          P = (e, t) => {
            const { el: n, handlers: r, options: i } = e,
              o = t === d ? k(n) : n,
              s = r[t],
              a = i[t];
            s &&
              (Object.keys(s).forEach((e) => {
                const t = a[e];
                "boolean" == typeof t
                  ? o.removeEventListener(e, s[e], t)
                  : o.removeEventListener(e, s[e]);
              }),
              (r[t] = null),
              (i[t] = null));
          },
          x = (e) =>
            !(!Boolean(e.ctrlKey) || "click" !== e.type) ||
            ("which" in e ? 3 === e.which : "button" in e && 2 === e.button),
          S = (e, t) => {
            if (
              (v || (v = new F(document).on("interaction")),
              e.handlers[p] || e.handlers[h])
            )
              return;
            const { el: n } = e;
            C(e, t, "blur", () => {
              (0, a.IV)(n, "jw-tab-focus"), (e.clicking = !1);
            }),
              C(e, t, "focus", () => {
                v.event && v.event.type === f && (0, a.cn)(n, "jw-tab-focus");
              });
          },
          O = (e, t, n, r) => {
            c
              ? C(e, t, "pointerdown", n, r)
              : (u && C(e, t, "mousedown", n, r), C(e, t, "touchstart", n, r));
          },
          E = (e) => {
            if (e.handlers[h]) return;
            const { el: t } = e;
            S(e, h),
              O(e, h, (n) => {
                const { target: r } = n;
                x(n) ||
                  (Boolean(e.directSelect) && r !== t) ||
                  (n.isPrimary && "BUTTON" === r.tagName && r.focus(),
                  (e.lastStart = (0, s.z)()),
                  (e.clicking = !0));
              }),
              C(e, h, "click", (n) => {
                x(n) ||
                  (Boolean(e.directSelect) && n.target !== t) ||
                  (((0, s.z)() - e.lastStart > 500 && !0 === e.clicking) ||
                    (((e, t) => {
                      e.enableDoubleClick &&
                        ((0, s.z)() - e.lastClick < 300
                          ? (b(e, i.P, t), (e.lastClick = 0))
                          : (e.lastClick = (0, s.z)()));
                    })(e, n),
                    b(e, i.ot, n)),
                  (e.clicking = !1));
              });
          },
          T = (e) =>
            0 === e.type.indexOf("touch")
              ? (e.originalEvent || e).changedTouches[0]
              : e,
          A = (e) => {
            if (e.handlers[p]) return;
            const { el: t, passive: n } = e,
              r = !!g && {
                passive: n,
              },
              o = (t) => {
                if (e.dragged) b(e, i.Wp, t);
                else {
                  const { pageX: n, pageY: r } = T(t),
                    o = n - e.startX,
                    s = r - e.startY;
                  o * o + s * s > 36 &&
                    (b(e, i.nv, t), (e.dragged = !0), b(e, i.Wp, t));
                }
                var r;
                n ||
                  "touchmove" !== t.type ||
                  ((r = t).preventDefault && r.preventDefault());
              },
              s = (t) => {
                clearTimeout(y),
                  e.el &&
                    (j(e),
                    P(e, d),
                    e.dragged && ((e.dragged = !1), b(e, i.Sv, t)));
              };
            S(e, p),
              O(
                e,
                p,
                (i) => {
                  if (((0, a.IV)(t, "jw-tab-focus"), x(i))) return;
                  const { target: l, type: c } = i;
                  if (e.directSelect && l !== t) return;
                  const { pageX: u, pageY: p } = T(i);
                  if (
                    ((e.dragged = !1),
                    (e.startX = u),
                    (e.startY = p),
                    P(e, d),
                    "pointerdown" === c && i.isPrimary)
                  ) {
                    if (!n) {
                      const { pointerId: n } = i;
                      (e.pointerId = n), t.setPointerCapture(n);
                    }
                    C(e, d, "pointermove", o, r),
                      C(e, d, "pointercancel", s),
                      C(e, d, "pointerup", s);
                  } else
                    "mousedown" === c
                      ? (C(e, d, "mousemove", o, r), C(e, d, "mouseup", s))
                      : "touchstart" === c &&
                        (C(e, d, "touchmove", o, r),
                        C(e, d, "touchcancel", s),
                        C(e, d, "touchend", s));
                },
                r
              );
          },
          Z = {
            drag(e) {
              A(e);
            },
            dragStart(e) {
              A(e);
            },
            dragEnd(e) {
              A(e);
            },
            click(e) {
              E(e);
            },
            doubleClick(e) {
              (e.enableDoubleClick = !0), E(e);
            },
            longPress(e) {
              const t = "longPress";
              if (r.OS.iOS) {
                const n = () => {
                  clearTimeout(y);
                };
                C(e, t, "touchstart", (r) => {
                  n(),
                    (y = setTimeout(() => {
                      b(e, t, r);
                    }, 500));
                }),
                  C(e, t, "touchmove", n),
                  C(e, t, "touchcancel", n),
                  C(e, t, "touchend", n);
              } else e.el.oncontextmenu = (n) => (b(e, t, n), !1);
            },
            focus(e) {
              const t = "focus";
              C(e, t, t, (n) => {
                w(e, t, n);
              });
            },
            blur(e) {
              const t = "blur";
              C(e, t, t, (n) => {
                w(e, t, n);
              });
            },
            over(e) {
              (c || u) &&
                C(e, i.B1, c ? "pointerover" : "mouseover", (t) => {
                  "touch" !== t.pointerType && b(e, i.B1, t);
                });
            },
            out(e) {
              if (c) {
                const { el: t } = e;
                C(e, i.U3, "pointerout", (n) => {
                  if ("touch" !== n.pointerType && "clientX" in n) {
                    const r = document.elementFromPoint(n.clientX, n.clientY);
                    t.contains(r) || b(e, i.U3, n);
                  }
                });
              } else
                u &&
                  C(e, i.U3, "mouseout", (t) => {
                    b(e, i.U3, t);
                  });
            },
            move(e) {
              (c || u) &&
                C(e, i.tP, c ? "pointermove" : "mousemove", (t) => {
                  "touch" !== t.pointerType && b(e, i.tP, t);
                });
            },
            enter(e) {
              C(e, i.K5, f, (t) => {
                ("Enter" !== t.key && 13 !== t.keyCode) ||
                  (t.stopPropagation(), w(e, i.K5, t));
              });
            },
            keydown(e) {
              C(
                e,
                f,
                f,
                (t) => {
                  w(e, f, t);
                },
                !1
              );
            },
            gesture(e) {
              const t = "gesture",
                n = (n) => b(e, t, n);
              C(e, t, "click", n), C(e, t, f, n);
            },
            interaction(e) {
              const t = "interaction",
                n = (t) => {
                  e.event = t;
                };
              C(e, t, "mousedown", n, !0), C(e, t, f, n, !0);
            },
            tap() {},
            doubleTap() {},
          },
          _ = /\s+/,
          M = (e) => e && !(_.test(e) || "object" == typeof e);
        class F extends o.ZP {
          constructor(e, t) {
            super();
            const n = !(t = t || {}).preventScrolling;
            (this.directSelect = Boolean(t.directSelect)),
              (this.dragged = !1),
              (this.enableDoubleClick = !1),
              (this.el = e),
              (this.handlers = {}),
              (this.options = {}),
              (this.lastClick = 0),
              (this.lastStart = 0),
              (this.passive = n),
              (this.pointerId = null),
              (this.startX = 0),
              (this.startY = 0),
              (this.event = null),
              (this.clicking = !1);
          }
          on(e, t, n) {
            return M(e) && (this.handlers[e] || Z[e](this)), super.on(e, t, n);
          }
          off(e, t, n) {
            if (M(e)) P(this, e);
            else if (!e) {
              const { handlers: e } = this;
              Object.keys(e).forEach((e) => {
                P(this, e);
              });
            }
            return super.off(e, t, n);
          }
          destroy() {
            this.el && (this.off(), c && j(this), (this.el = null));
          }
        }
      },
      6042: (e, t, n) => {
        "use strict";
        n.d(t, {
          Cb: () => ie,
          HD: () => F,
          Kn: () => x,
          P2: () => Ce,
          S6: () => O,
          UI: () => L,
          U_: () => je,
          Yj: () => H,
          ZP: () => Te,
          _e: () => ge,
          a9: () => Oe,
          ar: () => fe,
          ce: () => Pe,
          cq: () => ue,
          dp: () => Y,
          e1: () => ce,
          e5: () => me,
          ei: () => Se,
          hX: () => K,
          hj: () => M,
          i2: () => B,
          jn: () => ne,
          l7: () => xe,
          mf: () => _,
          o8: () => re,
          qh: () => Ee,
          r3: () => de,
          sE: () => G,
          u4: () => R,
          vM: () => ae,
          wB: () => he,
          xV: () => te,
          yR: () => U,
        });
        var r = n(5004),
          i = function (e, t) {
            if (null == e)
              throw new TypeError("Cannot convert undefined or null to object");
            return Object.prototype.hasOwnProperty.call(Object(e), t);
          };
        const o = {},
          s = Array.prototype,
          a = Object.prototype,
          l = Function.prototype,
          c = s.slice,
          u = s.concat,
          d = a.toString,
          p = a.hasOwnProperty,
          h = s.map,
          f = s.reduce,
          g = s.forEach,
          m = s.filter,
          y = s.every,
          v = s.some,
          b = s.indexOf,
          w = Array.isArray,
          k = Object.keys,
          C = l.bind,
          j = window.isFinite,
          P = function (e, t) {
            return p.call(e, t);
          },
          x = function (e) {
            return e === Object(e);
          },
          S = function (e) {
            if (!x(e)) return [];
            if (k) return k(e);
            const t = [];
            for (const n in e) P(e, n) && t.push(n);
            return t;
          },
          O = function (e, t, n) {
            let r, i;
            if (null == e) return e;
            if (g && e.forEach === g) e.forEach(t, n);
            else if (e.length === Number(e.length)) {
              for (r = 0, i = e.length; r < i; r++)
                if (t.call(n, e[r], r, e) === o) return;
            } else {
              const s = S(e);
              for (r = 0, i = s.length; r < i; r++)
                if (t.call(n, e[s[r]], s[r], e) === o) return;
            }
            return e;
          },
          E = O,
          T = [];
        O(["Function", "String", "Number", "Date", "RegExp"], function (e) {
          T[e] = function (t) {
            return d.call(t) == `[object ${e}]`;
          };
        });
        const A = T.Date,
          Z = T.RegExp,
          _ = T.Function,
          M = T.Number,
          F = T.String,
          I =
            w ||
            function (e) {
              return "[object Array]" == d.call(e);
            },
          B = function (e) {
            return M(e) && e != Number(e);
          },
          L = function (e, t, n) {
            const r = [];
            return null == e
              ? r
              : h && e.map === h
              ? e.map(t, n)
              : (O(e, function (e, i, o) {
                  r.push(t.call(n, e, i, o));
                }),
                r);
          },
          N = L,
          D = function () {},
          $ = function (e, t, ...n) {
            if (C && e.bind === C) return C.apply(e, [t].concat(n));
            if (!_(e)) throw new TypeError();
            const r = function (...i) {
              if (!(this instanceof r)) return e.apply(t, n.concat(i));
              D.prototype = e.prototype;
              const o = new D();
              D.prototype = null;
              const s = e.apply(o, n.concat(i));
              return Object(s) === s ? s : o;
            };
            return r;
          },
          R = function (e, t, n, r) {
            let i = arguments.length > 2;
            if ((null == e && (e = []), f && e.reduce === f))
              return r && (t = $(t, r)), i ? e.reduce(t, n) : e.reduce(t);
            if (
              (O(e, function (e, o, s) {
                i ? (n = t.call(r, n, e, o, s)) : ((n = e), (i = !0));
              }),
              !i)
            )
              throw new TypeError(
                "Reduce of empty array with no initial value"
              );
            return n;
          },
          q = R,
          z = R,
          U = function (e) {
            return e;
          },
          H = function (e, t, n) {
            t || (t = U);
            let r = !1;
            return null == e
              ? r
              : v && e.some === v
              ? e.some(t, n)
              : (O(e, function (e, i, s) {
                  if (r || (r = t.call(n, e, i, s))) return o;
                }),
                Boolean(r));
          },
          V = H,
          G = function (e, t, n) {
            let r;
            return (
              H(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return (r = e), !0;
              }),
              r
            );
          },
          W = G,
          K = function (e, t, n) {
            const r = [];
            return null == e
              ? r
              : m && e.filter === m
              ? e.filter(t, n)
              : (O(e, function (e, i, o) {
                  t.call(n, e, i, o) && r.push(e);
                }),
                r);
          },
          Q = K,
          X = function (e, t, n) {
            t || (t = U);
            let r = !0;
            return null == e
              ? r
              : y && e.every === y
              ? e.every(t, n)
              : (O(e, function (e, i, s) {
                  if (!(r = r && t.call(n, e, i, s))) return o;
                }),
                Boolean(r));
          },
          J = X,
          Y = function (e) {
            return null == e
              ? 0
              : e.length === Number(e.length)
              ? e.length
              : S(e).length;
          },
          ee = function (e, t) {
            let n;
            return function (...r) {
              return --e > 0 && (n = t.apply(this, r)), e <= 1 && (t = null), n;
            };
          };
        T.Function = function (e) {
          return "function" == typeof e;
        };
        const te = function (e) {
            return j(e) && !B(parseFloat(e));
          },
          ne = function (e) {
            return !0 === e || !1 === e || "[object Boolean]" == d.call(e);
          },
          re = function (e) {
            return void 0 === e;
          },
          ie = function (e) {
            return function (t) {
              return t[e];
            };
          },
          oe = function (e) {
            return null == e ? U : _(e) ? e : ie(e);
          },
          se = function (e) {
            return function (t, n, r) {
              const i = {};
              return (
                (n = oe(n)),
                O(t, function (o, s) {
                  const a = n.call(r, o, s, t);
                  e(i, a, o);
                }),
                i
              );
            };
          },
          ae = se(function (e, t, n) {
            P(e, t) ? e[t].push(n) : (e[t] = [n]);
          }),
          le = se(function (e, t, n) {
            e[t] = n;
          }),
          ce = function (e, t, n, r) {
            const i = (n = oe(n)).call(r, t);
            let o = 0,
              s = e.length;
            for (; o < s; ) {
              const t = (o + s) >>> 1;
              n.call(r, e[t]) < i ? (o = t + 1) : (s = t);
            }
            return o;
          },
          ue = function (e, t, n) {
            if (null == e) return -1;
            let r = 0;
            const i = e.length;
            if (n) {
              if ("number" != typeof n)
                return (r = ce(e, t)), e[r] === t ? r : -1;
              r = n < 0 ? Math.max(0, i + n) : n;
            }
            if (b && e.indexOf === b) return e.indexOf(t, n);
            for (; r < i; r++) if (e[r] === t) return r;
            return -1;
          },
          de = function (e, t) {
            return (
              null != e &&
              (e.length !== Number(e.length) &&
                (e = (function (e) {
                  const t = S(e),
                    n = S.length,
                    r = Array(n);
                  for (let i = 0; i < n; i++) r[i] = e[t[i]];
                  return r;
                })(e)),
              ue(e, t) >= 0)
            );
          },
          pe = de,
          he = function (e) {
            return function (t) {
              if (t === e) return !0;
              for (const n in e) if (e[n] !== t[n]) return !1;
              return !0;
            };
          },
          fe = function (e, t) {
            return K(e, he(t));
          },
          ge = function (e, t) {
            return G(e, he(t));
          },
          me = function (e, ...t) {
            const n = u.apply(s, t);
            return K(e, function (e) {
              return !de(n, e);
            });
          },
          ye = function (e, ...t) {
            return function (...n) {
              let r = 0;
              const i = t.slice();
              for (let e = 0, t = i.length; e < t; e++)
                P(i[e], "partial") && (i[e] = n[r++]);
              for (; r < arguments.length; ) i.push(n[r++]);
              return e.apply(this, i);
            };
          },
          ve = ye(ee, 2),
          be = function (e, t, ...n) {
            return setTimeout(function () {
              return e.apply(null, n);
            }, t);
          },
          we = ye(
            be,
            {
              partial: ye,
            },
            1
          ),
          ke = r.z,
          Ce = function (e, t, n) {
            let r,
              i,
              o,
              s = null,
              a = 0;
            n || (n = {});
            const l = function () {
              (a = !1 === n.leading ? 0 : ke()),
                (s = null),
                (o = e.apply(r, i)),
                (r = i = null);
            };
            return function (...c) {
              const u = ke();
              a || !1 !== n.leading || (a = u);
              const d = t - (u - a);
              return (
                (r = this),
                (i = c),
                d <= 0
                  ? (clearTimeout(s),
                    (s = null),
                    (a = u),
                    (o = e.apply(r, i)),
                    (r = i = null))
                  : s || !1 === n.trailing || (s = setTimeout(l, d)),
                o
              );
            };
          },
          je = function (e) {
            const t = {},
              n = S(e);
            for (let r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
            return t;
          },
          Pe = function (e, ...t) {
            return (
              O(t, function (t) {
                if (t) for (const n in t) void 0 === e[n] && (e[n] = t[n]);
              }),
              e
            );
          },
          xe =
            Object.assign ||
            function (e, ...t) {
              return (
                O(t, function (t) {
                  if (t) for (const n in t) i(t, n) && (e[n] = t[n]);
                }),
                e
              );
            },
          Se = function (e, ...t) {
            const n = {};
            return (
              (t = [].concat(...t)),
              O(t, function (t) {
                t in e && (n[t] = e[t]);
              }),
              n
            );
          },
          Oe = function (e) {
            return function () {
              return e;
            };
          },
          Ee = (e) => M(e) && !B(e),
          Te = {
            after: function (e, t) {
              return function (...n) {
                if (--e < 1) return t.apply(this, n);
              };
            },
            all: X,
            any: H,
            before: ee,
            bind: $,
            clone: function (e) {
              return x(e) ? (I(e) ? e.slice() : xe({}, e)) : e;
            },
            collect: N,
            compact: function (e) {
              return K(e, U);
            },
            constant: Oe,
            contains: de,
            debounce: (e, t = 100) => {
              let n;
              return function (...r) {
                clearTimeout(n),
                  (n = setTimeout(() => {
                    e.apply(this, r);
                  }, t));
              };
            },
            defaults: Pe,
            defer: we,
            delay: be,
            detect: W,
            difference: me,
            each: O,
            every: J,
            extend: xe,
            filter: K,
            find: G,
            findWhere: ge,
            foldl: q,
            forEach: E,
            groupBy: ae,
            has: P,
            identity: U,
            include: pe,
            indexBy: le,
            indexOf: ue,
            inject: z,
            invert: je,
            isArray: I,
            isBoolean: ne,
            isDate: A,
            isFinite: te,
            isFunction: _,
            isNaN: B,
            isNull: function (e) {
              return null === e;
            },
            isNumber: M,
            isObject: x,
            isRegExp: Z,
            isString: F,
            isUndefined: re,
            isValidNumber: Ee,
            keys: S,
            last: function (e, t, n) {
              if (null != e)
                return null == t || n
                  ? e[e.length - 1]
                  : c.call(e, Math.max(e.length - t, 0));
            },
            map: L,
            matches: he,
            max: function (e, t, n) {
              if (!t && I(e) && e[0] === Number(e[0]) && e.length < 65535)
                return Math.max(...e);
              let r = -1 / 0,
                i = -1 / 0;
              return (
                O(e, function (e, o, s) {
                  const a = t ? t.call(n, e, o, s) : e;
                  a > i && ((r = e), (i = a));
                }),
                r
              );
            },
            memoize: function (e, t) {
              const n = {};
              return (
                t || (t = U),
                function (...r) {
                  const i = t.apply(this, r);
                  return P(n, i) ? n[i] : (n[i] = e.apply(this, r));
                }
              );
            },
            now: ke,
            omit: function (e, ...t) {
              const n = {};
              for (const r in e) de(t, r) || (n[r] = e[r]);
              return n;
            },
            once: ve,
            partial: ye,
            pick: Se,
            pluck: function (e, t) {
              return L(e, ie(t));
            },
            property: ie,
            propertyOf: function (e) {
              return null == e
                ? function () {}
                : function (t) {
                    return e[t];
                  };
            },
            reduce: R,
            reject: function (e, t, n) {
              return K(
                e,
                function (e, r, i) {
                  return !t.call(n, e, r, i);
                },
                n
              );
            },
            result: function (e, t) {
              if (null == e) return;
              const n = e[t];
              return _(n) ? n.call(e) : n;
            },
            select: Q,
            size: Y,
            some: V,
            sortedIndex: ce,
            throttle: Ce,
            where: fe,
            without: function (e, ...t) {
              return me(e, t);
            },
          };
      },
      5950: (e, t, n) => {
        "use strict";
        n.d(t, {
          O9: () => a,
          _N: () => s,
          kd: () => u,
          ke: () => l,
          vl: () => o,
        });
        const r = /^[^:/?#]+:?\/\/[^/?#]+/,
          i = (e) => {
            if (e) return new URL(e, window.location);
          },
          o = function (e) {
            if (!e) return {};
            const t = i(e),
              n = {};
            for (const e of t.searchParams.keys())
              if (!n[e]) {
                const r = t.searchParams.getAll(e);
                n[e] = 1 === r.length ? r[0] : r;
              }
            return n;
          },
          s = function (e) {
            if (!e) return -1;
            const t = new URLSearchParams(e).get("jw_start") || -1;
            return isNaN(t) || t < -1 ? -1 : Number(t);
          },
          a = function (e, t = "{seek_to_second_number}") {
            if (!e) return;
            const n = new URL(e);
            n.searchParams.set("jw_start", "");
            let r = n.toString();
            return (r = r.replace(/jw_start=?/i, `jw_start=${t}`)), r;
          },
          l = (e, t) => {
            if (e) return new URLSearchParams(e).has(t);
          },
          c = (e) => !!e && null !== e.match(r),
          u = (e, t) => {
            if ((t || (t = document.location.href), !e || !c(t))) return "";
            if (c(e)) return e;
            return new URL(e, t).toString();
          };
      },
      7034: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            exists: () => i,
            isDeepKeyCompliant: () => u,
            isFileProtocol: () => s,
            isHTTPS: () => o,
            isRtmp: () => a,
            isYouTube: () => l,
            typeOf: () => c,
          });
        const r = window.location.protocol,
          i = (e) => {
            switch (typeof e) {
              case "string":
                return e.length > 0;
              case "object":
                return null !== e;
              case "undefined":
                return !1;
              default:
                return !0;
            }
          },
          o = () => "https:" === r,
          s = () => "file:" === r,
          a = (e, t) => 0 === e.indexOf("rtmp:") || "rtmp" === t,
          l = (e, t) =>
            "youtube" === t ||
            /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e),
          c = (e) => {
            if (null === e) return "null";
            const t = typeof e;
            return "object" === t && Array.isArray(e) ? "array" : t;
          },
          u = (e, t, n) => {
            const r = Object.keys(e);
            return (
              Object.keys(t).length >= r.length &&
              r.every((r) => {
                const i = e[r],
                  o = t[r];
                return i && "object" == typeof i
                  ? !(!o || "object" != typeof o) && u(i, o, n)
                  : n(r, e);
              })
            );
          };
      },
      9025: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => r,
        });
        const r = document.createElement("video");
      },
      6601: (e, t, n) => {
        "use strict";
        n.d(t, {
          i: () => r,
        });
        const r =
          "8.31.0+commercial_master.553.ads-dai@mono.ads-freewheel@mono.ads-googima@mono.ads-vast@mono.hls.js@1.4.10.jwplayer@mono.jwplayer-ads-header-bidding@github:jwplayer/jwplayer-ads-header-bidding#v7.6.0.jwplayer-analytics@github:jwplayer/jwplayer-analytics#v3.43.2.jwplayer-analytics-kraken@v0.0.4.plugin-gapro@mono";
      },
      4225: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => s,
        });
        const r = (e, t, n, r) =>
          `<div id="${e}" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="${e}"].jw-error{background:#000;overflow:hidden;position:relative}[id="${e}"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="${e}"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset-text" dir="auto" data-nosnippet>${
            t || ""
          }<span class="jw-break jw-reset"></span>${
            r ? `(${n}: ${r})`.replace(/\s+/g, "&nbsp;") : ""
          }</div></div></div></div>`;
        var i = n(2799),
          o = n(974);

        function s(e, t) {
          const { message: n, code: s } = t,
            a = r(
              e.get("id"),
              n,
              e.get("localization").errors.errorCode,
              s.toString()
            ),
            l = e.get("width"),
            c = e.get("height"),
            u = (0, i.az)(a);
          return (
            (0, o.oB)(u, {
              width: l.toString().indexOf("%") > 0 ? l : `${l}px`,
              height: c.toString().indexOf("%") > 0 ? c : `${c}px`,
            }),
            u
          );
        }
      },
      9926: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => c,
        });
        var r = n(1776),
          i = n(2799),
          o = n(974);
        const s = [];
        let a = -1;
        const l = () => {
          (0, r.W)(a),
            (a = (0, r.U)(() => {
              s.forEach((e) => {
                e.view.updateBounds();
                const t = e.view.model.get("containerWidth");
                (e.resized = e.width !== t), (e.width = t);
              }),
                s.forEach((e) => {
                  e.contractElement.scrollLeft = 2 * e.width;
                }),
                s.forEach((e) => {
                  (0, o.oB)(e.expandChild, {
                    width: e.width + 1,
                  }),
                    e.resized &&
                      e.view.model.get("visibility") &&
                      e.view.updateStyles();
                }),
                s.forEach((e) => {
                  e.expandElement.scrollLeft = e.width + 1;
                }),
                s.forEach((e) => {
                  e.resized && e.view.checkResized();
                });
            }));
        };
        class c {
          constructor(e, t, n) {
            const r = {
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
              },
              a = {
                width: "100%",
                height: "100%",
              },
              c = (0, i.az)(
                '<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>'
              ),
              u = c.firstChild,
              d = u.firstChild,
              p = u.nextSibling;
            (0, o.oB)(
              [u, p],
              Object.assign(
                {
                  overflow: "auto",
                },
                r,
                a
              )
            ),
              (0, o.oB)(c, Object.assign({}, r, a)),
              (this.expandElement = u),
              (this.expandChild = d),
              (this.contractElement = p),
              (this.hiddenElement = c),
              (this.element = e),
              (this.view = t),
              (this.model = n),
              (this.width = 0),
              (this.resized = !1),
              e.firstChild ? e.insertBefore(c, e.firstChild) : e.appendChild(c),
              e.addEventListener("scroll", l, !0),
              s.push(this),
              l();
          }
          destroy() {
            if (this.view) {
              const e = s.indexOf(this);
              -1 !== e && s.splice(e, 1),
                this.element.removeEventListener("scroll", l, !0),
                this.element.removeChild(this.hiddenElement),
                (this.view = this.model = null);
            }
          }
        }
      },
      4671: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => f,
        });
        var r = n(6875);
        const i = [],
          o = [],
          s = [],
          a = {};
        let l,
          c = !1;
        const u = (e, t) => {
            for (let n = t.length; n--; ) {
              const r = t[n];
              if (e.target === r.getContainer()) {
                r.setIntersection(e);
                break;
              }
            }
          },
          d = () => {
            i.forEach((e) => {
              e.model.set("activeTab", (0, r.Z)());
            });
          },
          p = (e, t) => {
            const n = t.indexOf(e);
            -1 !== n && t.splice(n, 1);
          },
          h = (e) => {
            s.forEach((t) => {
              t(e);
            });
          };
        document.addEventListener("visibilitychange", d),
          document.addEventListener("webkitvisibilitychange", d),
          window.addEventListener("beforeunload", () => {
            document.removeEventListener("visibilitychange", d),
              document.removeEventListener("webkitvisibilitychange", d),
              window.removeEventListener("scroll", h);
          });
        const f = {
          add(e) {
            i.push(e);
          },
          remove(e) {
            p(e, i);
          },
          addScrollHandler(e) {
            c || ((c = !0), window.addEventListener("scroll", h)), s.push(e);
          },
          removeScrollHandler(e) {
            const t = s.indexOf(e);
            -1 !== t && s.splice(t, 1);
          },
          addWidget(e) {
            o.push(e);
          },
          removeWidget(e) {
            p(e, o);
          },
          size: () => i.length,
          observe(e) {
            (() => {
              const e = window.IntersectionObserver;
              l ||
                (l = new e(
                  (e) => {
                    if (null != e && e.length)
                      for (let t = e.length; t--; ) {
                        const n = e[t];
                        u(n, i), u(n, o);
                      }
                  },
                  {
                    threshold: [
                      0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
                    ],
                  }
                ));
            })(),
              a[e.id] || ((a[e.id] = !0), l.observe(e));
          },
          unobserve(e) {
            l && a[e.id] && (delete a[e.id], l.unobserve(e));
          },
        };
      },
      2445: (e, t, n) => {
        "use strict";
        n.d(t, {
          ZP: () => k,
          qG: () => w,
        });
        var r = n(5083),
          i = n(1569),
          o = n(6042),
          s = n(7034),
          a = n(576),
          l = n(6599),
          c = n(386);
        const u = "__CONTEXTUAL__",
          d = (e, t) => {
            const n = e.querySelector(t);
            if (n) return n.getAttribute("content");
          };
        var p = n(4737),
          h = n.n(p),
          f = n(67);
        const g = (e) =>
            "string" == typeof e &&
            /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(e),
          m = (e) => `https:${e}`,
          y = (e) => {
            const t = (0, c.Z)(e.edition),
              n = e.related,
              r = !t("discovery") || n !== Object(n),
              i = !n || "none" !== n.displayMode,
              o = n || {};
            let s = void 0 === o.oncomplete ? "none" : o.oncomplete,
              a = o.autoplaytimer;
            !1 === s || e.repeat ? (s = "hide") : "none" === s && (a = 0);
            const l = ("autoplay" === s && a <= 0) || "none" === s;
            return Object.assign({}, n, {
              disableRelated: r,
              showButton: i,
              oncomplete: s,
              autoplaytimer: a,
              shouldAutoAdvance: l,
            });
          },
          v = (e) => {
            let t = "";
            "https:" !== window.location.protocol &&
              "http:" !== window.location.protocol &&
              (t = "https:");
            const n = {
              bidding: "//ssl.p.jwpcdn.com/player/v/8.31.0/bidding.js",
              jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.31.0/jwpsrv.js",
              dai: "//ssl.p.jwpcdn.com/player/v/8.31.0/dai.js",
              vast: "//ssl.p.jwpcdn.com/player/v/8.31.0/vast.js",
              googima: "//ssl.p.jwpcdn.com/player/v/8.31.0/googima.js",
              freewheel: "//ssl.p.jwpcdn.com/player/v/8.31.0/freewheel.js",
              gapro: "//ssl.p.jwpcdn.com/player/v/8.31.0/gapro.js",
              interactive: "//ssl.p.jwpcdn.com/player/v/8.31.0/interactive.js",
            }[e];
            return n ? t + n : "";
          },
          b = (e, t, n) => {
            if (t) {
              (e[t.client || v(n)] = t), delete t.client;
            }
          },
          w = (e) => {
            const t = Object.assign({}, e.plugins),
              n = (0, c.Z)(e.edition);
            if (n("ads")) {
              const n = Object.assign({}, e.advertising),
                r = n.client;
              if (r) {
                (t[v(r) || r] = n), delete n.client;
              }
              n.bids && b(t, n.bids, "bidding");
            }
            if (n("jwpsrv")) {
              let n = e.analytics;
              n !== Object(n) && (n = {}), b(t, n, "jwpsrv");
            }
            return b(t, e.ga, "gapro"), b(t, e.interactive, "interactive"), t;
          },
          k = function (e, t) {
            let c = (0, r.ZP)(e, t);
            const p = c.key || a.default.key,
              v = new l.ZP(p),
              b = v.edition();
            if (
              ("free" === v.edition() &&
                (c = Object.assign(
                  {
                    skin: {
                      active: "#ff0046",
                      timeslider: {
                        progress: "none",
                      },
                    },
                    logo: {
                      position: "control-bar",
                      file: h(),
                    },
                  },
                  r.ke,
                  (0, o.ei)(c, [
                    "analytics",
                    "aspectratio",
                    "base",
                    "file",
                    "height",
                    "playlist",
                    "sources",
                    "timeSlider",
                    "width",
                  ])
                )),
              (c.key = p),
              (c.edition = b),
              (c.error = v.error()),
              (c.generateSEOMetadata = c.generateSEOMetadata || !1),
              "unlimited" === b)
            ) {
              const e = (0, i.getScriptPath)("jwplayer.js");
              if (!e)
                throw new Error(
                  "Error setting up player: Could not locate jwplayer.js script tag"
                );
              n.p = e;
            }
            var k, C, j;
            if (
              ((c.related = y(c)),
              c.ab &&
                (c.ab = ((e) => {
                  let t = e.ab;
                  return (
                    t.clone && (t = t.clone()),
                    Object.keys(t.tests).forEach((n) => {
                      t.tests[n].forEach((t) => {
                        t.addConfig && t.addConfig(e, t.selection);
                      });
                    }),
                    t
                  );
                })(c)),
              (c.plugins = w(c)),
              (k = c.playlist),
              (0, o.HD)(k) &&
                k.indexOf(u) > -1 &&
                ((c.playlist = ((e, t) => {
                  var n;
                  const r =
                      null == e ||
                      null == e.querySelector ||
                      null == (n = e.querySelector("title"))
                        ? void 0
                        : n.textContent,
                    i = d(e, 'meta[property="og:title"]');
                  let o = encodeURIComponent(i || r || "");
                  const s =
                    d(e, 'meta[property="og:description"]') ||
                    d(e, 'meta[name="description"]');
                  return (
                    s && (o += `&page_description=${encodeURIComponent(s)}`),
                    t.replace(u, o)
                  );
                })(document, c.playlist)),
                (c.contextual = !0)),
              (0, s.isFileProtocol)())
            ) {
              const { playlist: e, related: t } = c;
              g(e) && (c.playlist = m(e)),
                t && g(t.file) && (t.file = m(t.file));
            }
            return (
              c.__abSendDomainToFeeds &&
                ((j = c.playlist), /\.jwplatform.com|\.jwplayer.com/.test(j)) &&
                (c.playlist =
                  (C = c.playlist) +
                  `${
                    -1 !== C.indexOf("?") ? "&" : "?"
                  }page_domain=${encodeURIComponent((0, f.X)())}`),
              c
            );
          };
      },
      576: (e, t, n) => {
        "use strict";
        n.d(t, {
          default: () => Q,
        });
        var r = n(1096),
          i = n.n(r);
        window.Promise || (window.Promise = i());
        var o = n(1569),
          s = n(6391),
          a = n(2963),
          l = n(670);
        const c = {
          availableProviders: a.B,
          registerProvider: l.Z,
        };
        var u = n(1241);
        c.registerPlugin = function (e, t, n) {
          "jwpsrv" !== e && (0, u.f)(e, t, n);
        };
        const d = c;
        var p = n(6601),
          h = n(4742),
          f = n(8348),
          g = n(623),
          m = n(1643),
          y = n(7411),
          v = n(328),
          b = n(4429),
          w = n(6042);
        let k = 0;
        const C = function (e, t) {
            const n = new g.ZP(t);
            return (
              n.on(m.Rc, (t) => {
                e._qoe.tick("ready"),
                  (t.setupTime = e._qoe.between("setup", "ready"));
              }),
              n.on("all", (t, n) => {
                e.trigger(t, n);
              }),
              n
            );
          },
          j = function (e, t) {
            const n = e.plugins,
              r = Object.keys(n).map((e) => {
                const t = n[e];
                return delete n[e], t;
              });
            t.get("setupConfig") && e.trigger("remove"),
              e.off(),
              t.playerDestroy(),
              r.forEach((e) => {
                if (e.destroy)
                  try {
                    e.destroy();
                  } catch (e) {}
              }),
              t.getContainer().removeAttribute("data-jwplayer-id");
          };

        function P(e) {
          const t = ++k,
            n = e.id || `player-${t}`,
            r = new y.Z(),
            i = {};
          let o = C(this, e);
          r.tick("init"),
            e.setAttribute("data-jwplayer-id", n),
            Object.defineProperties(this, {
              id: {
                enumerable: !0,
                get: () => n,
              },
              uniqueId: {
                enumerable: !0,
                get: () => t,
              },
              plugins: {
                enumerable: !0,
                get: () => i,
              },
              _qoe: {
                enumerable: !0,
                get: () => r,
              },
              version: {
                enumerable: !0,
                get: () => p.i,
              },
              Events: {
                enumerable: !0,
                get: () => v.ZP,
              },
              utils: {
                enumerable: !0,
                get: () => b.Z,
              },
              _: {
                enumerable: !0,
                get: () => w.ZP,
              },
            }),
            Object.assign(this, {
              _events: {},
              setup(t) {
                return (
                  r.clear("ready"),
                  r.tick("setup"),
                  o && j(this, o),
                  (o = C(this, e)),
                  o.init(t, this),
                  this.on(t.events, null, this)
                );
              },
              remove() {
                return (
                  this.getPip() && this.setPip(!1),
                  (function (e) {
                    for (let t = s.Z.length; t--; )
                      if (s.Z[t].uniqueId === e.uniqueId) {
                        s.Z.splice(t, 1);
                        break;
                      }
                  })(this),
                  o && j(this, o),
                  Object.keys(i).forEach((e) => {
                    delete i[e];
                  }),
                  this
                );
              },
              qoe() {
                const e = o.getItemQoe();
                return {
                  setupTime: this._qoe.between("setup", "ready"),
                  firstFrame: e.getFirstFrame ? e.getFirstFrame() : null,
                  player: this._qoe.dump(),
                  item: e.dump(),
                };
              },
              addCues(e) {
                return Array.isArray(e) && o.addCues(e), this;
              },
              getAudioTracks: () => o.getAudioTracks(),
              getBuffer: () => o.get("buffer"),
              getCaptions: () => o.get("captions"),
              getCaptionsList: () => o.getCaptionsList(),
              getConfig: () => o.getConfig(),
              getContainer: () => o.getContainer(),
              getControls: () => o.get("controls"),
              getCues: () => o.getCues(),
              getCurrentAudioTrack: () => o.getCurrentAudioTrack(),
              getCurrentCaptions: () => o.getCurrentCaptions(),
              getCurrentQuality: () => o.getCurrentQuality(),
              getCurrentTime: () => o.get("currentTime"),
              getAbsolutePosition: () => o.getAbsolutePosition(),
              getDuration: () => o.get("duration"),
              getEnvironment: () => f,
              getFullscreen: () => o.get("fullscreen"),
              getHeight: () => o.getHeight(),
              getItemMeta: () => o.get("itemMeta") || {},
              getMute: () => o.getMute(),
              getContainerPercentViewable: () => o.get("intersectionRatio"),
              getPercentViewable: () => o.get("visibility"),
              getPip: () => o.get("pip"),
              getPlaybackRate: () => o.get("playbackRate"),
              getPlaylist: () => o.get("playlist"),
              getPlaylistIndex: () => o.get("item"),
              getPlaylistItem(e) {
                if (!b.Z.exists(e)) return o.get("playlistItem");
                const t = this.getPlaylist();
                return t ? t[e] : null;
              },
              getPosition: () => o.get("position"),
              getProvider: () => o.getProvider(),
              getQualityLevels: () => o.getQualityLevels(),
              getSafeRegion: (e = !0) => o.getSafeRegion(e),
              getState: () => o.getState(),
              getStretching: () => o.get("stretching"),
              getContainerViewable: () => o.get("containerViewable"),
              getViewable: () => o.get("viewable"),
              getVisualQuality: () => o.getVisualQuality(),
              getVolume: () => o.get("volume"),
              getWidth: () => o.getWidth(),
              setCaptions(e) {
                return o.setCaptions(e), this;
              },
              setConfig(e) {
                return o.setConfig(e), this;
              },
              setControls(e) {
                return o.setControls(e), this;
              },
              setCurrentAudioTrack(e) {
                o.setCurrentAudioTrack(e);
              },
              setCurrentCaptions(e) {
                o.setCurrentCaptions(e);
              },
              setCurrentQuality(e) {
                o.setCurrentQuality(e);
              },
              setFullscreen(e) {
                return o.setFullscreen(e), this;
              },
              setAllowFullscreen(e) {
                return o.setAllowFullscreen(e), this;
              },
              setMute(e) {
                return o.setMute(e), this;
              },
              setPip(e) {
                return o.setPip(e), this;
              },
              setPlaybackRate(e) {
                return o.setPlaybackRate(e), this;
              },
              setPlaylistItem(e, t) {
                return o.setPlaylistItem(e, t), this;
              },
              setCues(e) {
                return Array.isArray(e) && o.setCues(e), this;
              },
              setVolume(e) {
                return o.setVolume(e), this;
              },
              load(e, t) {
                return o.load(e, t), this;
              },
              play(e) {
                return o.play(e), this;
              },
              pause(e) {
                return o.pause(e), this;
              },
              playToggle(e) {
                switch (this.getState()) {
                  case m.r0:
                  case m.Kb:
                    return this.pause(e);
                  default:
                    return this.play(e);
                }
              },
              seek(e, t) {
                return o.seek(e, t), this;
              },
              playlistItem(e, t) {
                return o.playlistItem(e, t), this;
              },
              playlistNext(e) {
                return o.playlistNext(e), this;
              },
              playlistPrev(e) {
                return o.playlistPrev(e), this;
              },
              next(e) {
                return o.next(e), this;
              },
              requestPip(e) {
                return o.requestPip(e), this;
              },
              castToggle() {
                return o.castToggle(), this;
              },
              stopCasting() {
                return o.stopCasting(), this;
              },
              requestCast(e) {
                return o.requestCast(e), this;
              },
              createInstream: () => o.createInstream(),
              stop() {
                return o.stop(), this;
              },
              resize(e, t) {
                return o.resize(e, t), this;
              },
              addButton(e, t, n, r, i) {
                return o.addButton(e, t, n, r, i), this;
              },
              removeButton(e) {
                return o.removeButton(e), this;
              },
              getMediaElement: () => o.getMediaElement(),
              attachMedia() {
                return o.attachMedia(), this;
              },
              detachMedia() {
                return o.detachMedia(), this;
              },
              isBeforeComplete: () => o.isBeforeComplete(),
              isBeforePlay: () => o.isBeforePlay(),
              setPlaylistItemCallback(e, t) {
                o.setItemCallback(e, t);
              },
              removePlaylistItemCallback() {
                o.setItemCallback(null);
              },
              getPlaylistItemPromise: (e) => o.getItemPromise(e),
              getFloating: () => Boolean(o.get("isFloating")),
              setFloating(e) {
                o.setConfig({
                  floating: {
                    mode: e ? "always" : "never",
                  },
                });
              },
              getChapters: () => o.getChapters(),
              getCurrentChapter: () => o.getCurrentChapter(),
              setChapter: (e) => o.setChapter(e),
            });
        }
        Object.assign(P.prototype, {
          on(e, t, n) {
            return v.on.call(this, e, t, n);
          },
          once(e, t, n) {
            return v.IH.call(this, e, t, n);
          },
          off(e, t, n) {
            return v.S1.call(this, e, t, n);
          },
          trigger(e, t) {
            return (
              ((t = w.ZP.isObject(t) ? Object.assign({}, t) : {}).type = e),
              h.Z.debug ? v.X$.call(this, e, t) : v.wj.call(this, e, t)
            );
          },
          getPlugin(e) {
            return this.plugins[e];
          },
          addPlugin(e, t) {
            (this.plugins[e] = t),
              this.on("ready", t.addToPlayer),
              t.resize && this.on("resize", t.resizeHandler);
          },
          registerPlugin(e, t, n) {
            (0, u.f)(e, t, n);
          },
          getAdBlock: () => !1,
          playAd(e) {},
          pauseAd(e) {},
          skipAd() {},
        }),
          (n.p = (0, o.loadFrom)());
        const x = (e) => {
            for (let t = 0; t < s.Z.length; t++)
              if (s.Z[t].id === e) return s.Z[t];
            return null;
          },
          S = function (e) {
            let t, n;
            if (
              (e
                ? "string" == typeof e
                  ? ((t = x(e)), t || (n = document.getElementById(e)))
                  : "number" == typeof e
                  ? (t = s.Z[e])
                  : e.nodeType &&
                    ((n = e),
                    (t = x(n.id || n.getAttribute("data-jwplayer-id"))))
                : (t = s.Z[0]),
              t)
            )
              return t;
            if (n) {
              const e = new P(n);
              return s.Z.push(e), e;
            }
            return {
              registerPlugin: u.f,
            };
          },
          O = (e) => {
            Object.defineProperties(e, {
              api: {
                get: () => d,
                set() {},
              },
              version: {
                get: () => p.i,
                set() {},
              },
              debug: {
                get: () => h.Z.debug,
                set(e) {
                  h.Z.debug = Boolean(e);
                },
              },
            });
          };
        O(S);
        const E = S;
        var T = n(5882),
          A = n(6599),
          Z = n(676),
          _ = n(5592),
          M = n(6769),
          F = n(9025);
        const I = w.ZP.extend,
          B = {};
        (B._ = w.ZP),
          (B.utils = Object.assign(b.Z, {
            key: A.ZP,
            extend: I,
            scriptloader: Z.ZP,
            rssparser: {
              parse: M.Z,
            },
            tea: _.p,
            UI: T.ZP,
          })),
          (B.utils.css.style = B.utils.style),
          (B.vid = F.Z);
        const L = B;
        var N = n(7543);
        const D = /^(?:on(?:ce)?|off|trigger)$/,
          $ = (e) => {
            console.warn(
              `The API method jwplayer().${e}() is disabled in the free edition of JW Player.`
            );
          },
          R = (e, t, n) => {
            try {
              const r = ((e, t) => {
                switch (e) {
                  case "setup":
                    return Boolean(t);
                  case "getSafeRegion":
                  case "pauseAd":
                  case "setControls":
                  case "setFullscreen":
                  case "setMute":
                    return Boolean(t) === t ? t : void 0;
                  case "setPlaylistItem":
                  case "getPlaylistItem":
                    return (0 | t) === t ? t : void 0;
                  case "setPlaybackRate":
                  case "setVolume":
                    return Number(t);
                  case "setConfig":
                    return Object.keys(Object(t)).join(",");
                  case "on":
                  case "once":
                  case "off":
                  case "trigger":
                  case "getPlugin":
                  case "addPlugin":
                  case "registerPlugin":
                    return `${t}`;
                }
                return null;
              })(t, n);
              e.trackExternalAPIUsage(t, r);
            } catch (e) {
              h.Z.debug && console.warn(e);
            }
          },
          q = (e, t) => {
            if (t.length) {
              const n = e.getPlugin("jwpsrv");
              null != n &&
                n.trackExternalAPIUsage &&
                (t.forEach((e) => {
                  R(n, e[0], e[1]);
                }),
                (t.length = 0));
            }
          },
          z = (e, t, n, r, i) =>
            function (...o) {
              const s = o[0],
                a = t._trackCallQueue || (t._trackCallQueue = []),
                l = D.test(n),
                c = l && o[1] && o[1]._callback,
                u =
                  i.edition ||
                  ((e, t, n) => {
                    const r = e.getConfig()[n];
                    return (t[n] = r), r;
                  })(t, i, "edition");
              if ("free" === u) {
                if (
                  [
                    "addButton",
                    "addCues",
                    "detachMedia",
                    "load",
                    "next",
                    "pause",
                    "play",
                    "playlistItem",
                    "playlistNext",
                    "playlistPrev",
                    "playToggle",
                    "resize",
                    "seek",
                    "setCaptions",
                    "setConfig",
                    "setControls",
                    "setCues",
                    "setFullscreen",
                    "setMute",
                    "setPlaybackRate",
                    "setPlaylistItem",
                    "setVolume",
                    "stop",
                  ].indexOf(n) > -1
                )
                  return $(n), e;
                if (
                  [
                    "createInstream",
                    "setCurrentAudioTrack",
                    "setCurrentCaptions",
                    "setCurrentQuality",
                  ].indexOf(n) > -1
                )
                  return $(n), null;
              }
              if ((c || a.push([n, s]), l)) return q(t, a), t[n].apply(e, o);
              ((e, t) => {
                const n = {
                  reason:
                    "play" !== e && "seek" !== e && "pause" !== e && (0, N.C)()
                      ? "interaction"
                      : "external",
                };
                switch (e) {
                  case "play":
                  case "pause":
                  case "playToggle":
                  case "playlistNext":
                  case "playlistPrev":
                  case "next":
                    t[0] = n;
                    break;
                  case "seek":
                  case "playlistItem":
                    t[1] = n;
                }
              })(n, o);
              const d = t[n](...o);
              return (
                "remove" === n
                  ? t.off.call(e)
                  : "setup" === n &&
                    (t.off.call(e),
                    t.off(s.events, null, t),
                    t.on.call(e, s.events, null, e),
                    t.on("all", (n, o) => {
                      if ("ready" === n) {
                        const n = Object.keys(t).filter(
                            (e) =>
                              "_" !== e[0] &&
                              -1 === r.indexOf(e) &&
                              "function" == typeof t[e]
                          ),
                          o = r.concat(n);
                        n.forEach((n) => {
                          e[n] = z(e, t, n, o, i);
                        });
                      }
                      t.trigger.call(e, n, o), q(t, a);
                    })),
                q(t, a),
                d === t ? e : d
              );
            },
          U = ["getMediaElement"],
          H = (e, t, n, r) => {
            const i = Object.keys(n);
            i.forEach((o) => {
              const s = n[o];
              -1 === U.indexOf(o) &&
                ("function" == typeof s && "Events" !== o
                  ? (e[o] = z(e, t, o, i, r))
                  : "_events" === o
                  ? (e._events = {})
                  : Object.defineProperty(e, o, {
                      enumerable: !0,
                      get: () => n[o],
                    }));
            });
          },
          V = function (e) {
            const t = {};
            H(this, e, e, t), H(this, e, P.prototype, t);
          },
          G = window;
        Object.assign(E, L);
        const W = function (e) {
          const t = E(e);
          return t.uniqueId ? t._publicApi || (t._publicApi = new V(t)) : t;
        };
        Object.assign(W, L),
          O(W),
          "function" == typeof G.define &&
            G.define.amd &&
            G.define([], function () {
              return W;
            });
        let K = W;
        G.jwplayer && (K = G.jwplayer);
        const Q = K;
      },
      3487: (e, t, n) => {
        "use strict";
        n.d(t, {
          MK: () => i,
          Nq: () => o,
          bX: () => s,
        });
        var r = n(7164);
        const i = r.MK,
          o = r.Nq,
          s = function (e) {
            let t = (0, r.bX)(e);
            if (!e) return t;
            switch ((0, r.Nq)(e)) {
              case "jwpsrv":
                t = 305001;
                break;
              case "googima":
                t = 305002;
                break;
              case "vast":
                t = 305003;
                break;
              case "freewheel":
                t = 305004;
                break;
              case "dai":
                t = 305005;
                break;
              case "gapro":
                t = 305006;
                break;
              case "bidding":
                t = 305007;
            }
            return t;
          };
      },
      1918: (e, t, n) => {
        "use strict";
        n.d(t, {
          Gb: () => u,
          d3: () => d,
          lD: () => c,
          w0: () => l,
        });
        var r = n(386);
        const i = [
            {
              configName: "clearkey",
              keyName: "org.w3.clearkey",
            },
            {
              configName: "widevine",
              keyName: "com.widevine.alpha",
            },
            {
              configName: "playready",
              keyName: "com.microsoft.playready",
            },
          ],
          o = [],
          s = {};
        let a;
        const l = (e) =>
            e.some(
              (e) => Boolean(e.drm) || e.sources.some((e) => Boolean(e.drm))
            ),
          c = (e) =>
            a ||
            (((Boolean(navigator.requestMediaKeySystemAccess) &&
              Boolean(
                window.MediaKeySystemAccess.prototype.getConfiguration
              )) ||
              Boolean(window.MSMediaKeys)) &&
            (0, r.Z)(e)("drm")
              ? (i.forEach((e) => {
                  const t = ((n = e.keyName),
                  (r = [
                    {
                      initDataTypes: ["cenc"],
                      videoCapabilities: [
                        {
                          contentType: 'video/mp4;codecs="avc1.4d401e"',
                        },
                      ],
                      audioCapabilities: [
                        {
                          contentType: 'audio/mp4;codecs="mp4a.40.2"',
                        },
                      ],
                    },
                  ]),
                  navigator.requestMediaKeySystemAccess
                    ? navigator.requestMediaKeySystemAccess(n, r)
                    : new Promise((e, t) => {
                        let r;
                        try {
                          r = new window.MSMediaKeys(n);
                        } catch (e) {
                          return void t(e);
                        }
                        e(r);
                      }))
                    .then(function () {
                      s[e.configName] = !0;
                    })
                    .catch(function () {
                      s[e.configName] = !1;
                    });
                  var n, r;
                  o.push(t);
                }),
                (a = Promise.all(o)),
                a)
              : Promise.resolve()),
          u = (e) => s[e],
          d = (e) => {
            if (a) return Object.keys(e).some((e) => u(e));
          };
      },
      2963: (e, t, n) => {
        "use strict";
        n.d(t, {
          B: () => m,
        });
        var r = n(6593),
          i = n(8348),
          o = n(386),
          s = n(1918),
          a = n(9025);
        const l = (e) => {
            var t;
            (null != (t = e) && t.length && Array.isArray(e)) ||
              (e = ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"']);
            const n = window.MediaSource;
            return (
              !(!n || !n.isTypeSupported) &&
              e.every((e) => n.isTypeSupported(e))
            );
          },
          c = (e) =>
            /hls|m3u8/.test(
              ((null == e ? void 0 : e.type) || "").toLowerCase()
            ) ||
            ((null == e ? void 0 : e.file) || "")
              .toLowerCase()
              .indexOf(".m3u8") > -1,
          u = (e) =>
            /mpd|dash/.test(
              ((null == e ? void 0 : e.type) || "").toLowerCase()
            ) ||
            ((null == e ? void 0 : e.file) || "")
              .toLowerCase()
              .indexOf("mpd-time-csf") > -1,
          d = r.B.find((e) => "html5" === e.name),
          p = d.supports,
          h = function (...e) {
            const [t, n] = e,
              r = p.apply(this, e);
            if (u(t)) return !1;
            if (r && t.drm && c(t)) {
              const e = (0, o.Z)(n)("drm");
              if (e && t.drm.fairplay) {
                const e = window.WebKitMediaKeys;
                return null == e || null == e.isTypeSupported
                  ? void 0
                  : e.isTypeSupported("com.apple.fps.1_0", "video/mp4");
              }
              return e;
            }
            return r;
          },
          f = (e) => {
            if (e.drm || !c(e)) return !1;
            const t = Boolean(
                null == a.Z || null == a.Z.canPlayType
                  ? void 0
                  : a.Z.canPlayType("application/vnd.apple.mpegURL")
              ),
              n =
                "boolean" == typeof (null == e ? void 0 : e.safarihlsjs) &&
                e.safarihlsjs;
            "boolean" != typeof (null == e ? void 0 : e.hlsjsdefault) ||
              e.hlsjsdefault,
              "boolean" != typeof (null == e ? void 0 : e.androidhls) ||
                e.androidhls;
            return (
              !(t && i.Browser.safari && !n) &&
              (!t ||
                !i.OS.android ||
                !1 === e.androidhls ||
                !1 !== e.hlsjsdefault) &&
              l(e.mediaTypes)
            );
          },
          g = (e) =>
            !(e.drm && !(0, s.d3)(e.drm)) && l(e.mediaTypes) && (u(e) || c(e));
        (d.supports = h),
          r.B.push({
            name: "shaka",
            supports: g,
          }),
          r.B.unshift({
            name: "hlsjs",
            supports: f,
          });
        const m = r.B;
      },
      2303: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => d,
        });
        var r = n(2963),
          i = n(12),
          o = n(670),
          s = n(2894);
        const a = {
          html5: () =>
            n
              .e(250)
              .then(
                function (e) {
                  const t = n(9181).default;
                  return (0, o.Z)(t), t;
                }.bind(null, n)
              )
              .catch((0, s.Ep)(152)),
        };
        Object.assign(a, {
          shaka: () =>
            n
              .e(371)
              .then(
                function (e) {
                  const t = n(2287).default;
                  return (0, o.Z)(t), t;
                }.bind(null, n)
              )
              .catch((0, s.Ep)(154)),
          hlsjs: () =>
            n
              .e(98)
              .then(
                function (e) {
                  const t = n(9054).default;
                  return (0, o.Z)(t), t;
                }.bind(null, n)
              )
              .catch((0, s.Ep)(153)),
        });
        const l = a,
          c = function (e) {
            this.config = e || {};
          };
        Object.assign(c.prototype, {
          load(e) {
            const t = l[e],
              n = () => Promise.reject(new Error("Failed to load media"));
            return t
              ? t().then(() => {
                  const t = i.U[e];
                  return t || n();
                })
              : n();
          },
          providerSupports: (e, t) => e.supports(t),
          choose(e) {
            if (e === Object(e)) {
              const t = r.B.length;
              for (let n = 0; n < t; n++) {
                const o = r.B[n];
                if (this.providerSupports(o, e)) {
                  return {
                    priority: t - n - 1,
                    name: o.name,
                    type: e.type,
                    providerToCheck: o,
                    provider: i.U[o.name],
                  };
                }
              }
            }
            return {};
          },
        });
        const u = c;
        u.prototype.providerSupports = function (e, t) {
          return e.supports(t, this.config.edition);
        };
        const d = u;
      },
      5140: (e, t, n) => {
        "use strict";
        n.d(t, {
          t: () => r,
        });
        const r = window.atob;
        window.btoa;
      },
      386: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => f,
        });
        const r = "free",
          i = "starter",
          o = "business",
          s = "premium",
          a = "enterprise",
          l = "developer",
          c = "platinum",
          u = "ads",
          d = "unlimited",
          p = "trial",
          h = "invalid";

        function f(e) {
          const t = {
            setup: [r, i, o, s, a, l, u, d, p, c],
            drm: [a, l, u, d, p],
            ads: [u, d, p, c, a, l, o],
            jwpsrv: [r, i, o, s, a, l, u, p, c, h],
            discovery: [u, a, l, p, d],
          };
          return function (n) {
            return t[n] && t[n].indexOf(e) > -1;
          };
        }
      },
      7010: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => o,
        });
        var r = n(5950);
        const i = function (e, t) {
          return e.location !== e.parent.location && (0, r.ke)(t, "isAMP");
        };

        function o() {
          return i(window, document.location.search);
        }
      },
      560: (e, t, n) => {
        "use strict";
        n.d(t, {
          Z: () => i,
        });
        const r = () => r._iframe;
        (r.mock = (e) => {
          r._iframe = e;
        }),
          (r.unmock = () => {
            r._iframe = r._original;
          }),
          (r._iframe = window.top !== window.self),
          (r._original = r._iframe);
        const i = r;
      },
      6599: (e, t, n) => {
        "use strict";
        n.d(t, {
          ZP: () => c,
          u5: () => a,
        });
        var r = n(5592),
          i = n(386),
          o = n(5140),
          s = n(4446);
        const a = 100013,
          l = "invalid";
        const c = class {
          constructor(e) {
            (this.keyData = ((e) => {
              let t, n, s;
              try {
                const a = (0, r.p)(
                  e || "",
                  (0, o.t)("NDh2aU1Cb0NHRG5hcDFRZQ==")
                ).split("/");
                if (
                  ((t = a[0]),
                  "pro" === t && (t = "premium"),
                  (0, i.Z)(t)("setup") || (t = l),
                  a.length > 2)
                ) {
                  n = a[1];
                  const e = parseInt(a[2], 10);
                  e > 0 && ((s = new Date()), s.setTime(e));
                }
              } catch (e) {
                t = l;
              }
              return {
                edition: t,
                token: n,
                expiration: s,
              };
            })(e)),
              (this.edition = function () {
                return this.keyData.edition;
              }),
              (this.token = function () {
                return this.keyData.token;
              }),
              (this.expiration = function () {
                return this.keyData.expiration;
              }),
              (this.duration = function () {
                return this.keyData.expiration
                  ? this.keyData.expiration.getTime() - new Date().getTime()
                  : 0;
              }),
              (this.error = function () {
                let t;
                return (
                  void 0 === e
                    ? (t = 100011)
                    : this.keyData.edition !== l && this.keyData.token
                    ? this.duration() < 0 && (t = a)
                    : (t = 100012),
                  t ? new s.rG(s.pJ, t) : null
                );
              });
          }
        };
      },
      67: (e, t, n) => {
        "use strict";
        n.d(t, {
          X: () => i,
        });
        var r = n(560);
        const i = () => {
          let e = window.location.host;
          if ((0, r.Z)()) {
            e = (
              document.referrer
                ? ((e) => {
                    const t = document.createElement("a");
                    return (t.href = e), t;
                  })(document.referrer)
                : {}
            ).host;
            try {
              e = e || window.top.location.host;
            } catch (e) {}
          }
          return e;
        };
      },
      5592: (e, t, n) => {
        "use strict";
        n.d(t, {
          p: () => a,
        });
        var r = n(5140);
        const i = (e) => unescape(encodeURIComponent(e)),
          o = (e) => {
            const t = new Array(Math.ceil(e.length / 4));
            for (let n = 0; n < t.length; n++)
              t[n] =
                e.charCodeAt(4 * n) +
                (e.charCodeAt(4 * n + 1) << 8) +
                (e.charCodeAt(4 * n + 2) << 16) +
                (e.charCodeAt(4 * n + 3) << 24);
            return t;
          },
          s = (e) => {
            const t = new Array(e.length);
            for (let n = 0; n < e.length; n++)
              t[n] = String.fromCharCode(
                255 & e[n],
                (e[n] >>> 8) & 255,
                (e[n] >>> 16) & 255,
                (e[n] >>> 24) & 255
              );
            return t.join("");
          },
          a = function (e, t) {
            if (((e = String(e)), (t = String(t)), 0 === e.length)) return "";
            const n = o((0, r.t)(e)),
              a = o(i(t).slice(0, 16)),
              l = n.length,
              c = 2654435769;
            let u,
              d,
              p = n[l - 1],
              h = n[0],
              f = Math.floor(6 + 52 / l) * c;
            for (; f; ) {
              d = (f >>> 2) & 3;
              for (let e = l - 1; e >= 0; e--)
                (p = n[e > 0 ? e - 1 : l - 1]),
                  (u =
                    (((p >>> 5) ^ (h << 2)) + ((h >>> 3) ^ (p << 4))) ^
                    ((f ^ h) + (a[(3 & e) ^ d] ^ p))),
                  (h = n[e] -= u);
              f -= c;
            }
            return ((e) => {
              try {
                return decodeURIComponent(escape(e));
              } catch (t) {
                return e;
              }
            })(s(n).replace(/\0+$/, ""));
          };
      },
      1096: function (e) {
        e.exports = (function () {
          "use strict";

          function e() {}

          function t(e) {
            if (!(this instanceof t))
              throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            (this._state = 0),
              (this._handled = !1),
              (this._value = void 0),
              (this._deferreds = []),
              s(e, this);
          }

          function n(e, n) {
            for (; 3 === e._state; ) e = e._value;
            0 !== e._state
              ? ((e._handled = !0),
                t._immediateFn(function () {
                  var t = 1 === e._state ? n.onFulfilled : n.onRejected;
                  if (null !== t) {
                    var o;
                    try {
                      o = t(e._value);
                    } catch (e) {
                      return void i(n.promise, e);
                    }
                    r(n.promise, o);
                  } else (1 === e._state ? r : i)(n.promise, e._value);
                }))
              : e._deferreds.push(n);
          }

          function r(e, n) {
            try {
              if (n === e)
                throw new TypeError(
                  "A promise cannot be resolved with itself."
                );
              if (n && ("object" == typeof n || "function" == typeof n)) {
                var r = n.then;
                if (n instanceof t)
                  return (e._state = 3), (e._value = n), void o(e);
                if ("function" == typeof r)
                  return void s(
                    (function (e, t) {
                      return function () {
                        e.apply(t, arguments);
                      };
                    })(r, n),
                    e
                  );
              }
              (e._state = 1), (e._value = n), o(e);
            } catch (t) {
              i(e, t);
            }
          }

          function i(e, t) {
            (e._state = 2), (e._value = t), o(e);
          }

          function o(e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              t._immediateFn(function () {
                e._handled || t._unhandledRejectionFn(e._value);
              });
            for (var r = 0, i = e._deferreds.length; i > r; r++)
              n(e, e._deferreds[r]);
            e._deferreds = null;
          }

          function s(e, t) {
            var n = !1;
            try {
              e(
                function (e) {
                  n || ((n = !0), r(t, e));
                },
                function (e) {
                  n || ((n = !0), i(t, e));
                }
              );
            } catch (e) {
              if (n) return;
              (n = !0), i(t, e);
            }
          }
          var a = setTimeout;
          return (
            (t.prototype.catch = function (e) {
              return this.then(null, e);
            }),
            (t.prototype.then = function (t, r) {
              var i = new this.constructor(e);
              return (
                n(
                  this,
                  new (function (e, t, n) {
                    (this.onFulfilled = "function" == typeof e ? e : null),
                      (this.onRejected = "function" == typeof t ? t : null),
                      (this.promise = n);
                  })(t, r, i)
                ),
                i
              );
            }),
            (t.prototype.finally = function (e) {
              var t = this.constructor;
              return this.then(
                function (n) {
                  return t.resolve(e()).then(function () {
                    return n;
                  });
                },
                function (n) {
                  return t.resolve(e()).then(function () {
                    return t.reject(n);
                  });
                }
              );
            }),
            (t.all = function (e) {
              return new t(function (t, n) {
                function r(e, s) {
                  try {
                    if (s && ("object" == typeof s || "function" == typeof s)) {
                      var a = s.then;
                      if ("function" == typeof a)
                        return void a.call(
                          s,
                          function (t) {
                            r(e, t);
                          },
                          n
                        );
                    }
                    (i[e] = s), 0 == --o && t(i);
                  } catch (e) {
                    n(e);
                  }
                }
                if (!e || void 0 === e.length)
                  throw new TypeError("Promise.all accepts an array");
                var i = Array.prototype.slice.call(e);
                if (0 === i.length) return t([]);
                for (var o = i.length, s = 0; i.length > s; s++) r(s, i[s]);
              });
            }),
            (t.resolve = function (e) {
              return e && "object" == typeof e && e.constructor === t
                ? e
                : new t(function (t) {
                    t(e);
                  });
            }),
            (t.reject = function (e) {
              return new t(function (t, n) {
                n(e);
              });
            }),
            (t.race = function (e) {
              return new t(function (t, n) {
                for (var r = 0, i = e.length; i > r; r++) e[r].then(t, n);
              });
            }),
            (t._immediateFn =
              ("function" == typeof setImmediate &&
                function (e) {
                  setImmediate(e);
                }) ||
              function (e) {
                a(e, 0);
              }),
            (t._unhandledRejectionFn = function (e) {
              void 0 !== console &&
                console &&
                console.warn("Possible Unhandled Promise Rejection:", e);
            }),
            t
          );
        })();
      },
      9563: (e) => {
        var t,
          n,
          r = {},
          i = {},
          o =
            ((t = function () {
              return document.head || document.getElementsByTagName("head")[0];
            }),
            function () {
              return void 0 === n && (n = t.apply(this, arguments)), n;
            });

        function s(e) {
          var t = document.createElement("style");
          return (
            (t.type = "text/css"),
            t.setAttribute("data-jwplayer-id", e),
            (function (e) {
              o().appendChild(e);
            })(t),
            t
          );
        }

        function a(e, t) {
          var n,
            r,
            o,
            a = i[e];
          a ||
            (a = i[e] =
              {
                element: s(e),
                counter: 0,
              });
          var l = a.counter++;
          return (
            (n = a.element),
            (o = function () {
              u(n, l, "");
            }),
            (r = function (e) {
              u(n, l, e);
            })(t.css),
            function (e) {
              if (e) {
                if (e.css === t.css && e.media === t.media) return;
                r((t = e).css);
              } else o();
            }
          );
        }
        e.exports = {
          style: function (e, t) {
            !(function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n],
                  o = (r[e] || {})[i.id];
                if (o) {
                  for (var s = 0; s < o.parts.length; s++)
                    o.parts[s](i.parts[s]);
                  for (; s < i.parts.length; s++)
                    o.parts.push(a(e, i.parts[s]));
                } else {
                  var l = [];
                  for (s = 0; s < i.parts.length; s++) l.push(a(e, i.parts[s]));
                  (r[e] = r[e] || {}),
                    (r[e][i.id] = {
                      id: i.id,
                      parts: l,
                    });
                }
              }
            })(
              t,
              (function (e) {
                for (var t = [], n = {}, r = 0; r < e.length; r++) {
                  var i = e[r],
                    o = i[0],
                    s = {
                      css: i[1],
                      media: i[2],
                    };
                  n[o]
                    ? n[o].parts.push(s)
                    : t.push(
                        (n[o] = {
                          id: o,
                          parts: [s],
                        })
                      );
                }
                return t;
              })(e)
            );
          },
          clear: function (e, t) {
            var n = r[e];
            if (!n) return;
            if (t) {
              var i = n[t];
              if (i) for (var o = 0; o < i.parts.length; o += 1) i.parts[o]();
              return;
            }
            for (var s = Object.keys(n), a = 0; a < s.length; a += 1)
              for (var l = n[s[a]], c = 0; c < l.parts.length; c += 1)
                l.parts[c]();
            delete r[e];
          },
        };
        var l,
          c =
            ((l = []),
            function (e, t) {
              return (l[e] = t), l.filter(Boolean).join("\n");
            });

        function u(e, t, n) {
          if (e.styleSheet) e.styleSheet.cssText = c(t, n);
          else {
            var r = document.createTextNode(n),
              i = e.childNodes[t];
            i ? e.replaceChild(r, i) : e.appendChild(r);
          }
        }
      },
      4737: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 29.3" class="jw-svg-icon jw-svg-icon-watermark" focusable="false"><path d="M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z"></path><polygon points="58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61"></polygon><path d="M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z"></path><path d="M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z"></path><polygon points="113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18"></polygon><polygon points="123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29"></polygon><path d="M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z"></path><path d="M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z"></path></svg>';
      },
    },
    r = {};

  function i(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var o = (r[e] = {
      id: e,
      loaded: !1,
      exports: {},
    });
    return n[e].call(o.exports, o, o.exports, i), (o.loaded = !0), o.exports;
  }
  (i.m = n),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (
        i.d(t, {
          a: t,
        }),
        t
      );
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n],
          });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((t, n) => (i.f[n](e, t), t), []))),
    (i.u = (e) =>
      ({
        63: "polyfills.webvtt",
        74: "jwplayer.controls.tizen",
        98: "provider.hlsjs",
        168: "jwplayer.amp",
        207: "jwplayer.core.controls.html5",
        250: "provider.html5",
        347: "vttparser",
        365: "related",
        371: "provider.shaka",
        493: "jwplayer.core.controls.polyfills",
        520: "provider.airplay",
        581: "jwplayer.core.controls",
        605: "jwplayer.core.controls.polyfills.html5",
        681: "jwplayer.core",
        716: "jwplayer.controls",
        926: "jwplayer.stats",
        943: "polyfills.intersection-observer",
        977: "provider.cast",
      }[e] + ".js")),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "jwplayer:"),
    (i.l = (n, r, o, s) => {
      if (e[n]) e[n].push(r);
      else {
        var a, l;
        if (void 0 !== o)
          for (
            var c = document.getElementsByTagName("script"), u = 0;
            u < c.length;
            u++
          ) {
            var d = c[u];
            if (
              d.getAttribute("src") == n ||
              d.getAttribute("data-webpack") == t + o
            ) {
              a = d;
              break;
            }
          }
        a ||
          ((l = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 55),
          i.nc && a.setAttribute("nonce", i.nc),
          a.setAttribute("data-webpack", t + o),
          (a.src = n)),
          (e[n] = [r]);
        var p = (t, r) => {
            (a.onerror = a.onload = null), clearTimeout(h);
            var i = e[n];
            if (
              (delete e[n],
              a.parentNode && a.parentNode.removeChild(a),
              i && i.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          h = setTimeout(
            p.bind(null, void 0, {
              type: "timeout",
              target: a,
            }),
            55e3
          );
        (a.onerror = p.bind(null, a.onerror)),
          (a.onload = p.bind(null, a.onload)),
          l && document.head.appendChild(a);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (i.p = ""),
    (() => {
      var e = {
        313: 0,
      };
      i.f.j = (t, n) => {
        var r = i.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var o = new Promise((n, i) => (r = e[t] = [n, i]));
            n.push((r[2] = o));
            var s = i.p + i.u(t),
              a = new Error();
            i.l(
              s,
              (n) => {
                if (i.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (a.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + s + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = o),
                    (a.request = s),
                    r[1](a);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, n) => {
          var r,
            o,
            [s, a, l] = n,
            c = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (r in a) i.o(a, r) && (i.m[r] = a[r]);
            if (l) l(i);
          }
          for (t && t(n); c < s.length; c++)
            (o = s[c]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        n = (self.webpackChunkjwplayer = self.webpackChunkjwplayer || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (i.nc = void 0);
  var o = i(576);
  window.jwplayer = o.default;
})();

var jwDefaults = {
  aspectratio: "16:9",
  autostart: false,
  controls: true,
  displaydescription: true,
  displaytitle: true,
  height: "100%",
  width: "100%",
  key: "oxjsCbtaD5svPxasbHpf+UVt1+07c6nh5bovmj182GwG21MxQF4wuFwYp2VF0JHl",
  mute: false,
  ph: 1,
  pid: "KB5zFt7A",
  playbackRateControls: true,
  // "preload": "metadata",
  // "repeat": false,
  // "pipIcon": "disabled",
  stretching: "uniform",
  // "abouttext" : "SPIDY 🚀",
  // "aboutlink" : "/",
  captions: {
    backgroundColor: "#000000",
    backgroundOpacity: 75,
    color: "#FFFFFF",
    edgeStyle: "none",
    fontFamily: "sans-serif",
    fontOpacity: 100,
    fontSize: 15,
    windowColor: "#000000",
    windowOpacity: 0,
  },
  autoPause: {
    viewability: false,
  },
  // "skin": {
  //   "controlbar": {
  //     "background": "rgba(0,0,0,0)",
  //     "icons": "rgba(255,255,255,0.8)",
  //     "iconsActive": "#FFFFFF",
  //     "text": "#FFFFFF"
  //   },
  //   "menus": {
  //     "background": "#333333",
  //     "text": "rgba(255,255,255,0.8)",
  //     "textActive": "#FFFFFF"
  //   },
  //   "timeslider": {
  //     "progress": "#ff0000",
  //     "rail": "rgba(255,255,255,0.3)"
  //   },
  //   "tooltips": {
  //     "background": "#FFFFFF",
  //     "text": "#000000"
  //   }
  // },
};
jwplayer.defaults = jwDefaults;
