webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _NavCore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavCore */ "./components/NavCore.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styles */ "./styles/styles.js");
var _jsxFileName = "/Users/morgancrena/Desktop/Mini Desktop/Codesmith NY12/Production Project/firecomm.io-2.0/components/Nav.jsx";






var NavStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "Nav__NavStyle",
  componentId: "sc-8cs43r-0"
})(["height:50px;display:flex;width:100vw;font-size:17.5px;justify-content:", ";background-color:", ";img{margin-top:4px;}.logo{margin-top:2px;font-size:30px;font-weight:700;width:225px;color:", ";}.logo a{margin-left:20px;font-size:25px;}.logo a:hover{text-decoration:none;}.justify-left{justify-content:left !important;}a{display:flex;flex-direction:column;justify-content:center;}a:hover{cursor:pointer;text-decoration:underline;}i{color:", ";font-size:40px;}"], function (props) {
  return props.left ? "left" : "space-between";
}, function (props) {
  return props.main ? props.theme.mainColor : props.theme.offColor;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.white;
});
var MobileNav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Nav__MobileNav",
  componentId: "sc-8cs43r-1"
})(["{display:gric}"]);

var Nav = function Nav(props) {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    console.log("windowwidth", props.windowWidth);
  });

  if (props.windowWidth >= _constants__WEBPACK_IMPORTED_MODULE_4__["mobileBreakpoint"]) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavStyle, {
      main: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_styles__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_styles__WEBPACK_IMPORTED_MODULE_5__["VerticalCenter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/static/assets/logo_inverted.png",
      width: "35px",
      height: "40px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_styles__WEBPACK_IMPORTED_MODULE_5__["VerticalCenter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Firecomm")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavCore__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavStyle, {
      main: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_styles__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_styles__WEBPACK_IMPORTED_MODULE_5__["VerticalCenter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/static/assets/logo_inverted.png",
      width: "35px",
      height: "40px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_styles__WEBPACK_IMPORTED_MODULE_5__["VerticalCenter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Firecomm"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavStyle, {
      main: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavCore__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    })));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.699ad1161ad0ca3b3b44.hot-update.js.map