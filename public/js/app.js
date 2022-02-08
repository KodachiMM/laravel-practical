(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/App.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/App.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ "./resources/js/components/NavBar.vue");
/* harmony import */ var _Notification_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue */ "./resources/js/components/Notification.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NavBar: _NavBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    Notification: _Notification_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {},
  methods: {
    showNotification: function showNotification(status, text) {
      this.$notify({
        title: status,
        text: text,
        type: status,
        group: 'generic'
      }, 2000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavBar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavBar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    user: function user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    logout: function logout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('logout');

              case 2:
                _this.$router.push({
                  name: 'login'
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Notification.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Notification.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CheckCircleIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_0__.CheckCircleIcon,
    XCircleIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_0__.XCircleIcon
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/App.vue?vue&type=template&id=332fccf4":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/App.vue?vue&type=template&id=332fccf4 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NavBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavBar");

  var _component_Notification = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Notification");

  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavBar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Notification), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view, {
    "class": "p-6 min-h-screen",
    onNotification: $options.showNotification
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var Component = _ref.Component;
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(Component)))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onNotification"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "shadow-md bg-white"
};
var _hoisted_2 = {
  "class": "max-w-screen-lg mx-auto flex justify-between"
};
var _hoisted_3 = {
  "class": "flex"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Laravel Practical ");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create Form ");

var _hoisted_6 = {
  key: 0,
  "class": "flex"
};
var _hoisted_7 = {
  key: 1,
  "class": "flex"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Login ");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Register ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "flex p-4 font-bold tracking-wider text-lg",
    to: {
      name: 'home'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "flex p-4 items-center",
    "active-class": "font-semibold text-gray-800",
    to: {
      name: 'create-form'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  })]), $options.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.logout && $options.logout.apply($options, arguments);
    }),
    "class": "p-4 flex items-center cursor-pointer"
  }, " Logout ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "p-4 tracking-widest flex items-center text-gray-600",
    "active-class": "font-semibold text-gray-800",
    to: {
      name: 'login'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "p-4 tracking-widest flex items-center text-gray-600",
    "active-class": "font-semibold text-gray-800",
    to: {
      name: 'register'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  })]))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "fixed inset-0 flex items-start justify-end p-6 px-4 py-20 pointer-events-none"
};
var _hoisted_2 = {
  "class": "w-full max-w-sm"
};
var _hoisted_3 = {
  "class": "px-4 py-2 -mx-3"
};
var _hoisted_4 = {
  "class": "mx-3"
};
var _hoisted_5 = {
  "class": "text-sm text-gray-600"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CheckCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CheckCircleIcon");

  var _component_XCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("XCircleIcon");

  var _component_Notification = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Notification", true);

  var _component_NotificationGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NotificationGroup");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NotificationGroup, {
    group: "generic"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Notification, {
        enter: "transform ease-out duration-300 transition",
        "enter-from": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4",
        "enter-to": "translate-y-0 opacity-100 sm:translate-x-0",
        leave: "transition ease-in duration-500",
        "leave-from": "opacity-100",
        "leave-to": "opacity-0",
        move: "transition duration-500",
        "move-delay": "delay-300"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
          var notifications = _ref.notifications;
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(notifications, function (notification) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              "class": "flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md",
              key: notification.id
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["flex items-center justify-center w-12", {
                'bg-green-500': notification.type === 'success',
                'bg-red-500': notification.type === 'failed'
              }])
            }, [notification.type === 'success' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CheckCircleIcon, {
              key: 0,
              "class": "w-6 w-6 text-white"
            })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), notification.type === 'failed' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_XCircleIcon, {
              key: 1,
              "class": "w-6 w-6 text-white"
            })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
            /* CLASS */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["font-semibold capitalize", {
                'text-green-500': notification.type === 'success',
                'text-red-500': notification.type === 'failed'
              }])
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notification.title), 3
            /* TEXT, CLASS */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notification.text), 1
            /* TEXT */
            )])])]);
          }), 128
          /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      })])])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var notiwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notiwind */ "./node_modules/notiwind/dist/index.esm.js");
/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App.vue */ "./resources/js/components/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./resources/js/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./resources/js/store/index.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");






axios.defaults.withCredentials = true;
_store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch('getUser').then(function () {
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_components_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]).use(_router__WEBPACK_IMPORTED_MODULE_3__["default"]).use(_store__WEBPACK_IMPORTED_MODULE_4__["default"]).use(notiwind__WEBPACK_IMPORTED_MODULE_1__["default"]).mount('#app');
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/router/index.js":
/*!**************************************!*\
  !*** ./resources/js/router/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes.js */ "./resources/js/router/routes.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./resources/js/store/index.js");



var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createWebHistory)(),
  routes: _routes_js__WEBPACK_IMPORTED_MODULE_0__["default"]
});
router.beforeEach(function (to, from, next) {
  if (_store__WEBPACK_IMPORTED_MODULE_1__["default"].getters.user) {
    if (to.matched.some(function (route) {
      return route.meta.guard === 'guest';
    })) {
      next({
        name: 'home'
      });
    } else {
      next();
    }
  } else {
    if (to.matched.some(function (route) {
      return route.meta.guard === 'auth';
    })) {
      next({
        name: 'login'
      });
    } else {
      next();
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./resources/js/router/routes.js":
/*!***************************************!*\
  !*** ./resources/js/router/routes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Home = function Home() {
  return __webpack_require__.e(/*! import() */ "resources_js_pages_Home_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Home */ "./resources/js/pages/Home.vue"));
};

var Login = function Login() {
  return __webpack_require__.e(/*! import() */ "resources_js_pages_Login_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Login */ "./resources/js/pages/Login.vue"));
};

var Register = function Register() {
  return __webpack_require__.e(/*! import() */ "resources_js_pages_Register_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Register */ "./resources/js/pages/Register.vue"));
};

var CreateForm = function CreateForm() {
  return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("resources_js_pages_CreateForm_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/CreateForm */ "./resources/js/pages/CreateForm.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '/',
  component: Home,
  name: 'home'
}, {
  path: '/login',
  component: Login,
  name: 'login',
  meta: {
    guard: 'guest'
  }
}, {
  path: '/register',
  component: Register,
  name: 'register',
  meta: {
    guard: 'guest'
  }
}, {
  path: '/forms/create',
  component: CreateForm,
  name: 'create-form',
  meta: {
    guard: 'auth'
  }
}, {
  path: '/:pathMatch(.*)*',
  redirect: '/'
}]);

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // import sharedMutations from 'vuex-shared-mutations';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vuex__WEBPACK_IMPORTED_MODULE_2__.createStore)({
  state: function state() {
    return {
      user: null
    };
  },
  getters: {
    user: function user(state) {
      return state.user;
    }
  },
  mutations: {
    setUser: function setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    login: function login(_ref, payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var dispatch;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch = _ref.dispatch;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/sanctum/csrf-cookie');

              case 3:
                _context2.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/v1/login', payload).then(function (_res) {
                  return dispatch('getUser');
                })["catch"](function (err) {
                  throw err.response;
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee);
      }))();
    },
    register: function register(_ref2, payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var dispatch;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch = _ref2.dispatch;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/v1/register', payload).then(function (_res) {
                  return dispatch('login', {
                    email: payload.email,
                    password: payload.password
                  });
                })["catch"](function (err) {
                  throw err.response;
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2);
      }))();
    },
    logout: function logout(_ref3) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref3.commit;
                _context4.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/v1/logout').then(function (_res) {
                  commit('setUser', null);
                })["catch"](function (_err) {});

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getUser: function getUser(_ref4) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref4.commit;
                _context5.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/v1/user').then(function (res) {
                  commit('setUser', res.data);
                })["catch"](function (err) {});

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee4);
      }))();
    },
    submitForm: function submitForm(_context, payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/v1/forms', payload).then(function (res) {
                  return res;
                })["catch"](function (err) {
                  throw err.response;
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee5);
      }))();
    } // async profile({ commit }, payload) {
    //     await axios
    //         .patch('/api/profile', payload)
    //         .then((res) => {
    //             commit('setUser', res.data.user);
    //         })
    //         .catch((err) => {
    //             throw err.response;
    //         });
    // },
    // async password({ commit }, payload) {
    //     await axios
    //         .patch('/api/password', payload)
    //         .then((res) => {})
    //         .catch((err) => {
    //             throw err.response;
    //         });
    // },
    // async verifyResend({ dispatch }, payload) {
    //     let res = await axios.post('/api/verify-resend', payload);
    //     if (res.status != 200) throw res;
    //     return res;
    // },
    // async verifyEmail({ dispatch }, payload) {
    //     let res = await axios.post(
    //         '/api/verify-email/' + payload.id + '/' + payload.hash,
    //     );
    //     if (res.status != 200) throw res;
    //     dispatch('getUser');
    //     return res;
    // },

  } // plugins: [sharedMutations({ predicate: ['setUser'] })],

}));

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/components/App.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/App.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_332fccf4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=332fccf4 */ "./resources/js/components/App.vue?vue&type=template&id=332fccf4");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./resources/js/components/App.vue?vue&type=script&lang=js");
/* harmony import */ var _home_kodachi_laravel_practical_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_kodachi_laravel_practical_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_332fccf4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/NavBar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/NavBar.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavBar_vue_vue_type_template_id_5dd24bca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue?vue&type=template&id=5dd24bca */ "./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca");
/* harmony import */ var _NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.vue?vue&type=script&lang=js */ "./resources/js/components/NavBar.vue?vue&type=script&lang=js");
/* harmony import */ var _home_kodachi_laravel_practical_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_kodachi_laravel_practical_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavBar_vue_vue_type_template_id_5dd24bca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/NavBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Notification.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Notification.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notification_vue_vue_type_template_id_6a4ce154__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=6a4ce154 */ "./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js */ "./resources/js/components/Notification.vue?vue&type=script&lang=js");
/* harmony import */ var _home_kodachi_laravel_practical_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_kodachi_laravel_practical_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Notification_vue_vue_type_template_id_6a4ce154__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Notification.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/App.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/App.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/NavBar.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/components/NavBar.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Notification.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Notification.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notification.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Notification.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/App.vue?vue&type=template&id=332fccf4":
/*!***********************************************************************!*\
  !*** ./resources/js/components/App.vue?vue&type=template&id=332fccf4 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_332fccf4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_332fccf4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=332fccf4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/App.vue?vue&type=template&id=332fccf4");


/***/ }),

/***/ "./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca":
/*!**************************************************************************!*\
  !*** ./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_template_id_5dd24bca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_template_id_5dd24bca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavBar.vue?vue&type=template&id=5dd24bca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/NavBar.vue?vue&type=template&id=5dd24bca");


/***/ }),

/***/ "./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_template_id_6a4ce154__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notification_vue_vue_type_template_id_6a4ce154__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notification.vue?vue&type=template&id=6a4ce154 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);