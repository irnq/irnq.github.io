(function (t) {
  function e(e) {
    for (var n, o, i = e[0], s = e[1], l = e[2], b = 0, d = []; b < i.length; b++)
      (o = i[b]), Object.prototype.hasOwnProperty.call(a, o) && a[o] && d.push(a[o][0]), (a[o] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
    u && u(e);
    while (d.length) d.shift()();
    return r.push.apply(r, l || []), c();
  }
  function c() {
    for (var t, e = 0; e < r.length; e++) {
      for (var c = r[e], n = !0, i = 1; i < c.length; i++) {
        var s = c[i];
        0 !== a[s] && (n = !1);
      }
      n && (r.splice(e--, 1), (t = o((o.s = c[0]))));
    }
    return t;
  }
  var n = {},
    a = { app: 0 },
    r = [];
  function o(e) {
    if (n[e]) return n[e].exports;
    var c = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(c.exports, c, c.exports, o), (c.l = !0), c.exports;
  }
  (o.m = t),
    (o.c = n),
    (o.d = function (t, e, c) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: c });
    }),
    (o.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var c = Object.create(null);
      if (
        (o.r(c),
        Object.defineProperty(c, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var n in t)
          o.d(
            c,
            n,
            function (e) {
              return t[e];
            }.bind(null, n),
          );
      return c;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default'];
            }
          : function () {
              return t;
            };
      return o.d(e, 'a', e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = '/');
  var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    s = i.push.bind(i);
  (i.push = e), (i = i.slice());
  for (var l = 0; l < i.length; l++) e(i[l]);
  var u = s;
  r.push([0, 'chunk-vendors']), c();
})({
  0: function (t, e, c) {
    t.exports = c('cd49');
  },
  '1c0d': function (t, e, c) {},
  '20b0': function (t, e, c) {},
  2146: function (t, e, c) {
    'use strict';
    c('291c');
  },
  '291c': function (t, e, c) {},
  '6ccf': function (t, e, c) {
    'use strict';
    c('20b0');
  },
  '789b': function (t, e, c) {
    'use strict';
    c('da02');
  },
  '7ef6': function (t, e, c) {
    'use strict';
    c('8cbb');
  },
  '85ca': function (t, e, c) {
    'use strict';
    c('99ba');
  },
  '85d2': function (t, e, c) {},
  '8cbb': function (t, e, c) {},
  9592: function (t, e, c) {
    'use strict';
    c('1c0d');
  },
  '99b6': function (t, e, c) {
    'use strict';
    c('85d2');
  },
  '99ba': function (t, e, c) {},
  b318: function (t, e, c) {
    'use strict';
    c('c488');
  },
  c488: function (t, e, c) {},
  cd49: function (t, e, c) {
    'use strict';
    c.r(e);
    c('e260'), c('e6cf'), c('cca6'), c('a79d');
    var n = c('7a23');
    function a(t, e, c, a, r, o) {
      var i = Object(n['o'])('Header'),
        s = Object(n['o'])('Skills'),
        l = Object(n['o'])('Portfolio'),
        u = Object(n['o'])('Certificates'),
        b = Object(n['o'])('Footer');
      return (
        Object(n['i'])(),
        Object(n['d'])(
          n['a'],
          null,
          [
            Object(n['h'])(i),
            Object(n['h'])(s),
            Object(n['h'])(l),
            Object(n['h'])(u),
            Object(n['h'])(b),
          ],
          64,
        )
      );
    }
    var r = c('bee2'),
      o = c('d4ec'),
      i = c('262e'),
      s = c('2caf'),
      l = c('9ab4'),
      u = c('ce1f'),
      b = c('d242'),
      d = c.n(b),
      j = function (t) {
        return Object(n['l'])('data-v-b6cfb1bc'), (t = t()), Object(n['j'])(), t;
      },
      p = { class: 'header' },
      f = { class: 'wrapper flex' },
      O = j(function () {
        return Object(n['e'])(
          'img',
          { class: 'header__portrait', src: d.a, alt: 'portrait' },
          null,
          -1,
        );
      }),
      h = { class: 'header__content flex' },
      v = j(function () {
        return Object(n['e'])(
          'div',
          { class: 'header__title-block flex' },
          [
            Object(n['e'])('h1', { class: 'header__title' }, 'Ilia Rybakov'),
            Object(n['e'])('h2', { class: 'header__title--subtitle' }, 'Front-end developer'),
          ],
          -1,
        );
      });
    function g(t, e, c, a, r, o) {
      var i = Object(n['o'])('Contacts');
      return (
        Object(n['i'])(),
        Object(n['d'])('header', p, [
          Object(n['e'])('div', f, [
            O,
            Object(n['e'])('div', h, [Object(n['h'])(i, { class: 'header__contacts' }), v]),
          ]),
        ])
      );
    }
    var m = { class: 'contacts flex' },
      _ = Object(n['f'])(
        '<li class="contacts__item" data-v-3b7800a3><a class="contacts__link flex" href="mailto:irnq.dev@hotmail.com" data-v-3b7800a3><svg class="contacts__icon" data-v-3b7800a3><use xlink:href="icons/icons.svg#email" data-v-3b7800a3></use></svg> irnq.dev@hotmail.com </a></li><li class="contacts__item" data-v-3b7800a3><a class="contacts__link flex" href="https://t.me/ironiqpie" data-v-3b7800a3><svg class="contacts__icon" data-v-3b7800a3><use xlink:href="icons/icons.svg#telegram" data-v-3b7800a3></use></svg>@ironiqpie</a></li><li class="contacts__item" data-v-3b7800a3><a class="contacts__link flex" href="https://github.com/irnq" data-v-3b7800a3><svg class="contacts__icon" data-v-3b7800a3><use xlink:href="icons/icons.svg#github" data-v-3b7800a3></use></svg> irnq </a></li>',
        3,
      ),
      y = [_];
    function k(t, e, c, a, r, o) {
      return Object(n['i'])(), Object(n['d'])('ul', m, y);
    }
    var S = (function (t) {
        Object(i['a'])(c, t);
        var e = Object(s['a'])(c);
        function c() {
          return Object(o['a'])(this, c), e.apply(this, arguments);
        }
        return Object(r['a'])(c);
      })(u['b']),
      x = (c('9592'), c('6b0d')),
      w = c.n(x);
    const C = w()(S, [
      ['render', k],
      ['__scopeId', 'data-v-3b7800a3'],
    ]);
    var P = C,
      q = (function (t) {
        Object(i['a'])(c, t);
        var e = Object(s['a'])(c);
        function c() {
          return Object(o['a'])(this, c), e.apply(this, arguments);
        }
        return Object(r['a'])(c);
      })(u['b']);
    q = Object(l['a'])([Object(u['a'])({ components: { Contacts: P } })], q);
    var I = q;
    c('99b6');
    const T = w()(I, [
      ['render', g],
      ['__scopeId', 'data-v-b6cfb1bc'],
    ]);
    var A = T,
      F = (c('b0c0'), { class: 'skills' }),
      M = { class: 'flex skills__list' },
      J = ['src', 'alt'];
    function z(t, e, c, a, r, o) {
      return (
        Object(n['i'])(),
        Object(n['d'])('section', F, [
          Object(n['e'])('ul', M, [
            (Object(n['i'])(!0),
            Object(n['d'])(
              n['a'],
              null,
              Object(n['n'])(t.skills, function (t) {
                return (
                  Object(n['i'])(),
                  Object(n['d'])('li', { class: 'skills__item', key: t.name }, [
                    Object(n['e'])(
                      'img',
                      { class: 'skills__icon', src: t.icon, alt: t.name },
                      null,
                      8,
                      J,
                    ),
                  ])
                );
              }),
              128,
            )),
          ]),
        ])
      );
    }
    var E = c('2909'),
      R =
        (c('99af'),
        [
          { name: 'html', icon: './icons/HTML5.svg' },
          { name: 'css', icon: './icons/CSS3.svg' },
          { name: 'js', icon: './icons/JS.svg' },
          { name: 'angular', icon: './icons/angular.svg' },
          { name: 'vue', icon: './icons/Vue.svg' },
        ]),
      H = (function (t) {
        Object(i['a'])(c, t);
        var e = Object(s['a'])(c);
        function c() {
          var t;
          return (
            Object(o['a'])(this, c),
            (t = e.apply(this, arguments)),
            (t.skills = [].concat(R, Object(E['a'])(R.concat(R)))),
            t
          );
        }
        return Object(r['a'])(c);
      })(u['b']);
    c('b318');
    const L = w()(H, [
      ['render', z],
      ['__scopeId', 'data-v-1e6c101f'],
    ]);
    var Q = L,
      Y = function (t) {
        return Object(n['l'])('data-v-00da4db8'), (t = t()), Object(n['j'])(), t;
      },
      $ = { class: 'portfolio' },
      D = { class: 'wrapper' },
      V = Y(function () {
        return Object(n['e'])('h2', { class: 'portfolio__title' }, 'My recent project', -1);
      });
    function B(t, e, c, a, r, o) {
      var i = Object(n['o'])('ProjectCard');
      return (
        Object(n['i'])(),
        Object(n['d'])('section', $, [
          Object(n['e'])('div', D, [
            V,
            (Object(n['i'])(!0),
            Object(n['d'])(
              n['a'],
              null,
              Object(n['n'])(t.projects, function (t, e) {
                return Object(n['i'])(), Object(n['c'])(i, { key: e, card: t }, null, 8, ['card']);
              }),
              128,
            )),
          ]),
        ])
      );
    }
    c('9911'), c('a4d3'), c('e01a');
    var N = function (t) {
        return Object(n['l'])('data-v-cea3140c'), (t = t()), Object(n['j'])(), t;
      },
      U = { class: 'project-card' },
      W = { class: 'project-card__content flex' },
      X = ['href'],
      G = ['src'],
      K = N(function () {
        return Object(n['e'])(
          'div',
          { class: 'overlay' },
          [Object(n['e'])('p', { class: 'overlay__button' }, 'Open')],
          -1,
        );
      }),
      Z = { class: 'project-card__main flex' },
      tt = { class: 'project-card__title' },
      et = { class: 'project-card__description' },
      ct = { class: 'project-card__footer' },
      nt = N(function () {
        return Object(n['e'])('span', { class: 'text-secondary' }, 'Technology:', -1);
      }),
      at = N(function () {
        return Object(n['e'])('div', { class: 'project-card__backface' }, null, -1);
      });
    function rt(t, e, c, a, r, o) {
      return (
        Object(n['i'])(),
        Object(n['d'])('div', U, [
          Object(n['e'])('div', W, [
            Object(n['e'])(
              'a',
              { href: t.card.link, class: 'project-card__link', target: 'blank' },
              [
                Object(n['e'])(
                  'img',
                  { src: t.card.screenshot, alt: 'Project screenshot', class: 'project-card__img' },
                  null,
                  8,
                  G,
                ),
                K,
              ],
              8,
              X,
            ),
            Object(n['e'])('div', Z, [
              Object(n['e'])('h3', tt, Object(n['p'])(t.card.title), 1),
              Object(n['e'])('p', et, Object(n['p'])(t.card.description), 1),
              Object(n['e'])('div', ct, [
                nt,
                Object(n['g'])(' ' + Object(n['p'])(t.card.technology), 1),
              ]),
            ]),
          ]),
          at,
        ])
      );
    }
    c('d3b7'), c('159b');
    var ot = c('1b40'),
      it = (function (t) {
        Object(i['a'])(c, t);
        var e = Object(s['a'])(c);
        function c() {
          return Object(o['a'])(this, c), e.apply(this, arguments);
        }
        return (
          Object(r['a'])(c, [
            {
              key: 'created',
              value: function () {
                this.observer = new IntersectionObserver(this.onElementObserved, {
                  root: this.$el,
                  threshold: 0.3,
                });
              },
            },
            {
              key: 'mounted',
              value: function () {
                this.observer.observe(this.$el);
              },
            },
            {
              key: 'onElementObserved',
              value: function (t) {
                t.forEach(function (t) {
                  var e = t.target,
                    c = t.isIntersecting;
                  c ? e.classList.add('intersected') : e.classList.remove('intersected');
                });
              },
            },
          ]),
          c
        );
      })(u['b']);
    Object(l['a'])([Object(ot['a'])({ default: null })], it.prototype, 'card', void 0);
    c('789b');
    const st = w()(it, [
      ['render', rt],
      ['__scopeId', 'data-v-cea3140c'],
    ]);
    var lt = st,
      ut = [
        {
          title: 'Project Management App',
          description:
            'Functional clone of the Trello, Todoist or other project management application. Working with backend API. Localization, authentication, CRUD requests. Final task from RSSchool Angular course. Team project.',
          technology: 'TypeScript, Angular, Angular Material, NgRX, Transloco, SCSS',
          screenshot: './img/pma.jpg',
          link: 'https://project-management-app-tii.netlify.app/',
        },
        {
          title: 'Ticket to ride',
          description:
            'A clone of the popular board game Ticket to Ride. Multiplayer for players from 2 to 6 implemented with the socket.IO. Final task from RSSchool JavaScript/Front-end course. Team project.',
          technology: 'TypeScript, Vue2, Vuex, SCSS, nodeJS, express, socketIO, mongoDB',
          screenshot: './img/ticket-to-ride.jpg',
          link: 'https://ilua-dz.github.io/rsclone/',
        },
        {
          title: 'Christmas game',
          description:
            'A game in which you can decorate the Christmas tree. You can select the toys you want using filters and sorting. You can choose the background, the tree and the garland. Hang the toys with drag-n-drop.',
          technology: 'TypeScript, SCSS',
          screenshot: './img/christmas.jpg',
          link: 'https://rolling-scopes-school.github.io/irnq-JSFE2021Q3/christmas-task/',
        },
        {
          title: 'Art quiz',
          description:
            'A simple quiz with three game modes. You must either guess the artist who painted the picture or guess the picture belonging to the author.',
          technology: 'JavaScript, SCSS',
          screenshot: './img/quiz.jpg',
          link: 'https://rolling-scopes-school.github.io/irnq-JSFE2021Q3/art-quiz/dist/',
        },
        {
          title: 'Momentum',
          description:
            'A clone of Momentum extension. Several API, custom player, interface settings, two languages.',
          technology: 'JavaScript, SCSS',
          screenshot: './img/momentum.jpg',
          link: 'https://rolling-scopes-school.github.io/irnq-JSFE2021Q3/momentum/',
        },
      ],
      bt = ut,
      dt = (function (t) {
        Object(i['a'])(c, t);
        var e = Object(s['a'])(c);
        function c() {
          var t;
          return Object(o['a'])(this, c), (t = e.apply(this, arguments)), (t.projects = bt), t;
        }
        return Object(r['a'])(c);
      })(u['b']);
    dt = Object(l['a'])([Object(u['a'])({ components: { ProjectCard: lt } })], dt);
    var jt = dt;
    c('6ccf');
    const pt = w()(jt, [
      ['render', B],
      ['__scopeId', 'data-v-00da4db8'],
    ]);
    var ft = pt,
      Ot = function (t) {
        return Object(n['l'])('data-v-00086fc0'), (t = t()), Object(n['j'])(), t;
      },
      ht = { class: 'certificates' },
      vt = { class: 'wrapper' },
      gt = Ot(function () {
        return Object(n['e'])('h2', { class: 'certificates__title' }, 'My certificates', -1);
      }),
      mt = { class: 'certificates__block flex' },
      _t = ['href'],
      yt = ['src'];
    function kt(t, e, c, a, r, o) {
      return (
        Object(n['i'])(),
        Object(n['d'])('section', ht, [
          Object(n['e'])('div', vt, [
            gt,
            Object(n['e'])('div', mt, [
              (Object(n['i'])(!0),
              Object(n['d'])(
                n['a'],
                null,
                Object(n['n'])(t.certificates, function (t) {
                  return (
                    Object(n['i'])(),
                    Object(n['d'])(
                      'a',
                      { href: t.link, class: 'certificates__item', key: t.name, target: 'blank' },
                      [
                        Object(n['e'])(
                          'img',
                          { class: 'certificates__img', src: t.img, alt: 'certificate' },
                          null,
                          8,
                          yt,
                        ),
                      ],
                      8,
                      _t,
                    )
                  );
                }),
                128,
              )),
            ]),
          ]),
        ])
      );
    }
    var St = [
        {
          name: 'Frontend',
          img: './img/5x6uucs2.jpg',
          link: 'https://app.rs.school/certificate/5x6uucs2',
        },
        {
          name: 'Angular',
          img: './img/4dtw884n.jpg',
          link: 'https://app.rs.school/certificate/4dtw884n',
        },
      ],
      xt = (function (t) {
        Object(i['a'])(c, t);
        var e = Object(s['a'])(c);
        function c() {
          var t;
          return Object(o['a'])(this, c), (t = e.apply(this, arguments)), (t.certificates = St), t;
        }
        return Object(r['a'])(c);
      })(u['b']);
    c('2146');
    const wt = w()(xt, [
      ['render', kt],
      ['__scopeId', 'data-v-00086fc0'],
    ]);
    var Ct = wt,
      Pt = { class: 'footer' },
      qt = { class: 'wrapper' };
    function It(t, e, c, a, r, o) {
      var i = Object(n['o'])('Contacts');
      return (
        Object(n['i'])(),
        Object(n['d'])('header', Pt, [Object(n['e'])('div', qt, [Object(n['h'])(i)])])
      );
    }
    var Tt = (function (t) {
      Object(i['a'])(c, t);
      var e = Object(s['a'])(c);
      function c() {
        return Object(o['a'])(this, c), e.apply(this, arguments);
      }
      return Object(r['a'])(c);
    })(u['b']);
    Tt = Object(l['a'])([Object(u['a'])({ components: { Contacts: P } })], Tt);
    var At = Tt;
    c('7ef6');
    const Ft = w()(At, [
      ['render', It],
      ['__scopeId', 'data-v-f3f10582'],
    ]);
    var Mt = Ft,
      Jt = (function (t) {
        Object(i['a'])(c, t);
        var e = Object(s['a'])(c);
        function c() {
          return Object(o['a'])(this, c), e.apply(this, arguments);
        }
        return Object(r['a'])(c);
      })(u['b']);
    Jt = Object(l['a'])(
      [
        Object(u['a'])({
          components: { Header: A, Skills: Q, Portfolio: ft, Certificates: Ct, Footer: Mt },
        }),
      ],
      Jt,
    );
    var zt = Jt;
    c('85ca');
    const Et = w()(zt, [['render', a]]);
    var Rt = Et;
    Object(n['b'])(Rt).mount('#app');
  },
  d242: function (t, e, c) {
    t.exports = c.p + 'img/portrait-200x200.c0a1d89a.jpg';
  },
  da02: function (t, e, c) {},
});
//# sourceMappingURL=app.b94f63b2.js.map
