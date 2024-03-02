"use strict";
exports.id = "component---src-pages-dayleft-js";
exports.ids = ["component---src-pages-dayleft-js"];
exports.modules = {

/***/ "./src/pages/dayleft.js?export=default":
/*!*********************************************!*\
  !*** ./src/pages/dayleft.js?export=default ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_claender_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/claender.webp */ "./src/images/claender.webp");


const DaysLeft = () => {
  const {
    0: daysLeft,
    1: setDaysLeft
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const calculateDaysLeft = () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const endOfYear = new Date(currentYear, 11, 31);
      const millisecondsInADay = 24 * 60 * 60 * 1000;
      const daysLeftCount = Math.round((endOfYear - currentDate) / millisecondsInADay);
      setDaysLeft(daysLeftCount);
    };
    calculateDaysLeft();

    // Berechnen der verbleibenden Tage in einem Intervall von 1 Tag
    const interval = setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);

    // Aufräumen
    return () => clearInterval(interval);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-1/2 text-white h-60 flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "h-64 rounded-lg shadow-lg",
    src: _images_claender_webp__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Bild-Kalender"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-black bg-opacity-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "position absolute text-3xl font-bold"
  }, "Es sind noch ", daysLeft, " Tage bis zum Jahresende."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DaysLeft);

/***/ }),

/***/ "./src/images/claender.webp":
/*!**********************************!*\
  !*** ./src/images/claender.webp ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/claender-def94228db1d269e28377a6d3d6e56f0.webp");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-dayleft-js.js.map