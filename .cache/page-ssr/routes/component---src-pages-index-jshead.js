"use strict";
exports.id = "component---src-pages-index-jshead";
exports.ids = ["component---src-pages-index-jshead"];
exports.modules = {

/***/ "./src/pages/dayleft.js":
/*!******************************!*\
  !*** ./src/pages/dayleft.js ***!
  \******************************/
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
    className: "text-white h-60 flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " bg-opacity-30 z-10 hover:shadow-xl p-4 rounded-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-3xl font-bold"
  }, "Es sind noch ", daysLeft, " Tage bis zum Jahresende."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DaysLeft);

/***/ }),

/***/ "./src/pages/footer.js":
/*!*****************************!*\
  !*** ./src/pages/footer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    class: "bg-white rounded-lg shadow m-4 dark:bg-gray-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    class: "text-sm text-gray-500 sm:text-center dark:text-gray-400"
  }, "\xA9 2024 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://wievieletagehatdasjahrnoch.de/",
    class: "hover:underline"
  }, "wievieletagehatdasjahrnoch\u2122"), ". All Rights Reserved."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    class: "flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    class: "hover:underline me-4 md:me-6"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    class: "hover:underline me-4 md:me-6"
  }, "Privacy Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    class: "hover:underline me-4 md:me-6"
  }, "Impressum")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    class: "hover:underline"
  }, "Contact")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/pages/index.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/index.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/pages/navbar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/pages/footer.js");
/* harmony import */ var _dayleft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dayleft */ "./src/pages/dayleft.js");
/* harmony import */ var _images_clockonwrist_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/clockonwrist.webp */ "./src/images/clockonwrist.webp");





const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "bg-gradient-to-b from-blue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    class: "bg-white sm:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    class: "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
  }, "Wie viele Tage hat das Jahr 2024 noch?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    class: "mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48"
  }, "Was denkst du, wie viele Tage es noch zu deinem Geburtstag sind? Finde es hier heraus."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dayleft__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 m-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/404",
    class: "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green hover:shadow-xl focus:ring-4 focus:ring-blue-300"
  }, "Zum Zeitrechner", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    class: "w-3.5 h-3.5 ms-2 rtl:rotate-180",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 14 10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M1 5h12m0 0L9 1m4 4L9 9"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/blog",
    class: "py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:shadow-xl focus:z-10 focus:ring-4"
  }, "Mehr")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grid sm:grid-cols-1 md:grid-cols-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "m-4 md:w-96 bg-white rounded-lg hover:shadow-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/wie-viele-tage-hat-das-jahr-noch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    class: "rounded-t-lg",
    src: _images_clockonwrist_webp__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "F\xFCllbild"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/wie-viele-tage-hat-das-jahr-noch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    class: "mb-2 text-2xl font-bold tracking-tight"
  }, "Wie viele Tage hat das jahr noch?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    class: "mb-3 font-normal"
  }, "Eine Reise durch das Kalenderjahr, von den ersten Tagen im Januar bis zum festlichen Finale im Dezember."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/wie-viele-tage-hat-das-jahr-noch",
    class: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg focus:ring-4 focus:outline-none"
  }, "weiter lesen", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    class: "rtl:rotate-180 w-3.5 h-3.5 ms-2",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 14 10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M1 5h12m0 0L9 1m4 4L9 9"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "m-4 md:w-96 bg-white rounded-lg hover:shadow-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/Wie-man-die-verbleibenden-Tage-des-Jahres-ideal-nutzen-kann"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    class: "rounded-t-lg",
    src: _images_clockonwrist_webp__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "F\xFCllbild"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/Wie-man-die-verbleibenden-Tage-des-Jahres-ideal-nutzen-kann"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    class: "mb-2 text-2xl font-bold tracking-tight"
  }, "Wie man die verbleibenden Tage des Jahres ideal nutzen kann")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    class: "mb-3 font-normal"
  }, "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/Wie-man-die-verbleibenden-Tage-des-Jahres-ideal-nutzen-kann",
    class: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg focus:ring-4 focus:outline-none"
  }, "weiter lesen", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    class: "rtl:rotate-180 w-3.5 h-3.5 ms-2",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 14 10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M1 5h12m0 0L9 1m4 4L9 9"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "m-4 md:w-96 bg-white rounded-lg hover:shadow-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    class: "rounded-t-lg",
    src: _images_clockonwrist_webp__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "F\xFCllbild"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    class: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  }, "Die psychologische Auswirkung des Countdowns")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    class: "mb-3 font-normal text-gray-700"
  }, "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    class: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
  }, "weiter lesen", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    class: "rtl:rotate-180 w-3.5 h-3.5 ms-2",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 14 10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M1 5h12m0 0L9 1m4 4L9 9"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "m-4 md:w-96 bg-white rounded-lg hover:shadow-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    class: "rounded-t-lg",
    src: _images_clockonwrist_webp__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "F\xFCllbild"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    class: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  }, "Feiertage, Ereignisse und Meilensteine")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    class: "mb-3 font-normal text-gray-700 dark:text-gray-400"
  }, "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    class: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  }, "weiter lesen", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    class: "rtl:rotate-180 w-3.5 h-3.5 ms-2",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 14 10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M1 5h12m0 0L9 1m4 4L9 9"
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-black h-60 flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx-4 md:w-1/2 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-xl text-justify"
  }, "Ein Jahr besteht aus insgesamt 365 Tagen. Doch wie viele Tage bleiben bis zum Ende des Jahres? Diese Antwort findest du hier auf unserer Website. Es ist von gro\xDFer Bedeutung, zu wissen, wie viele Tage das Jahr noch z\xE4hlt. Zeitmanagement ist eine \xE4u\xDFerst wichtige F\xE4higkeit, die einem hilft, sein Leben im Blick zu behalten. Wenn du wei\xDFt, wie viele Tage im Jahr noch verbleiben, wird dir dies erheblich erleichtert. Du kannst besser planen und Ziele setzen, basierend auf der verbleibenden Anzahl an Tagen.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx-4 md:w-1/2 mt-5 md:m-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "text-6xl text-bolder"
  }, "Wieso ist Zeit Management wichtig?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-center items-center sm:mt-4 md:mt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-black h-60 flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx-4 md:w-1/2 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-xl text-justify"
  }, "Zeitmanagement ist eine entscheidende F\xE4higkeit, die in allen Bereichen des Lebens von gro\xDFer Bedeutung ist. Es geht darum, die Zeit, die uns zur Verf\xFCgung steht, effizient und effektiv zu nutzen, um unsere Ziele zu erreichen und ein ausgewogenes Leben zu f\xFChren. Eine der wichtigsten Gr\xFCnde f\xFCr gutes Zeitmanagement ist die Steigerung der Effizienz. Durch eine kluge Zeiteinteilung k\xF6nnen wir unsere Produktivit\xE4t erh\xF6hen. Indem wir unsere Aufgaben priorisieren und Zeit f\xFCr diejenigen Aktivit\xE4ten reservieren, die uns am meisten voranbringen, vermeiden wir unn\xF6tige Verz\xF6gerungen und maximieren unseren Output.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grid sm:grid-cols-1 md:grid-cols-2 md:w-1/2 mt-4 m-auto gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "sm:mx-4 md:mx-0 text-xl text-justify"
  }, "Ein weiterer Vorteil eines effektiven Zeitmanagements ist die Reduzierung von Stress. Indem wir unsere Zeit gut planen und organisieren, vermeiden wir das Gef\xFChl, \xFCberfordert oder \xFCberw\xE4ltigt zu sein. Dies erm\xF6glicht es uns, gelassener und stressfreier durch den Tag zu gehen und unsere mentale Gesundheit zu sch\xFCtzen.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sm:mx-4 md:mx-0 w-auto h-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    class: "rounded-lg",
    src: _images_clockonwrist_webp__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "F\xFCllbild"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-center items-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-black h-auto flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx-4 md:w-1/2 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-xl text-justify"
  }, "Zeitmanagement spielt auch eine wichtige Rolle bei der Erreichung unserer Ziele. Es hilft uns, unsere Ziele klar zu definieren und die notwendigen Schritte zu unternehmen, um sie zu erreichen. Durch eine effektive Nutzung unserer Zeit und die Fokussierung auf die Aufgaben, die uns unserem Ziel n\xE4herbringen, steigern wir unsere Erfolgschancen und verwirklichen unsere Tr\xE4ume. Dar\xFCber hinaus tr\xE4gt gutes Zeitmanagement zu einer besseren Work-Life-Balance bei. Durch eine gute Zeitplanung k\xF6nnen wir Arbeit und pers\xF6nliches Leben besser in Einklang bringen. Indem wir unsere Zeit entsprechend einteilen und Priorit\xE4ten setzen, k\xF6nnen wir genug Zeit f\xFCr Familie, Freunde, Hobbys und Erholung reservieren, was zu einem ausgeglicheneren und erf\xFCllteren Leben f\xFChrt. Nicht zuletzt hilft uns Zeitmanagement, Chancen besser zu nutzen. Zeit ist eine begrenzte Ressource, und es ist wichtig, sie optimal zu nutzen. Indem wir unsere Zeit effektiv managen, k\xF6nnen wir uns die Gelegenheiten, die sich uns bieten, besser zunutze machen. Wir verpassen weniger Chancen und sind besser darauf vorbereitet, wenn sich neue M\xF6glichkeiten ergeben. Insgesamt ist Zeitmanagement eine grundlegende F\xE4higkeit, die uns dabei hilft, unser Leben besser zu organisieren, unsere Ziele zu erreichen und ein erf\xFClltes Leben zu f\xFChren. Es erm\xF6glicht uns, unsere Zeit so einzusetzen, dass wir das Beste aus jedem Tag herausholen k\xF6nnen.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Home Page");

/***/ }),

/***/ "./src/pages/navbar.js":
/*!*****************************!*\
  !*** ./src/pages/navbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Navbar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    class: "bg-white border-gray-200 rounded-lg shadow mx-4 sticky top-4 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/",
    class: "flex items-center space-x-3 rtl:space-x-reverse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    class: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
  }, "wievieletagehatdasjahrnoch.de")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    "data-collapse-toggle": "navbar-default",
    type: "button",
    class: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    "aria-controls": "navbar-default",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    class: "sr-only"
  }, "Open main menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    class: "w-5 h-5",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 17 14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M1 1h15M1 7h15M1 13h15"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "hidden w-full md:block md:w-auto",
    id: "navbar-default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    class: "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/",
    class: "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500",
    "aria-current": "page"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/blog",
    class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  }, "Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/",
    class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  }, "Wie viele Tage?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/impressum",
    class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  }, "Impressum")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/404",
    class: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  }, "Feiertage"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

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

/***/ }),

/***/ "./src/images/clockonwrist.webp":
/*!**************************************!*\
  !*** ./src/images/clockonwrist.webp ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/clockonwrist-9e6e66942c79b6940109d42c3da89590.webp");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map