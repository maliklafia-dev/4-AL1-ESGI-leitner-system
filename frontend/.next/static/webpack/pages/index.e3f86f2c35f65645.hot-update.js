"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid2,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Grid2,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CustomDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CustomDialog */ \"./src/pages/components/CustomDialog.tsx\");\n/* harmony import */ var _components_Inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Inputs */ \"./src/pages/components/Inputs.tsx\");\n/* harmony import */ var _components_PopupStartGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PopupStartGame */ \"./src/pages/components/PopupStartGame.tsx\");\n/* harmony import */ var _pages_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/styles/home.module.css */ \"./src/pages/styles/home.module.css\");\n/* harmony import */ var _pages_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [openQuiz, setOpenQuiz] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [addQuiz, setAddQuiz] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handlePopupOpenQuiz = ()=>{\n        setOpenQuiz(true);\n    };\n    const handlePopupCloseQuiz = ()=>{\n        setOpenQuiz(false);\n    };\n    const handleOpenPopupAddQuiz = ()=>{\n        setAddQuiz(true);\n    };\n    const handleClosePopupAddQuiz = ()=>{\n        setAddQuiz(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid2, {\n        className: (_pages_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().style),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                className: (_pages_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().styleBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                        variant: \"h5\",\n                        className: (_pages_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().positionCenter),\n                        children: \"LEITNER STYSTEM\"\n                    }, void 0, false, {\n                        fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Nice to see you Lilya\"\n                    }, void 0, false, {\n                        fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        className: (_pages_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().styleButton),\n                        onClick: handlePopupOpenQuiz,\n                        children: \"Play\"\n                    }, void 0, false, {\n                        fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        className: (_pages_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default().styleButton),\n                        onClick: handleOpenPopupAddQuiz,\n                        children: \"Add a Quiz\"\n                    }, void 0, false, {\n                        fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomDialog__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"LEITNER STYSTEM\",\n                open: openQuiz,\n                onClose: handlePopupCloseQuiz,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopupStartGame__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/index.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomDialog__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Add a Quiz\",\n                open: addQuiz,\n                onClose: handleClosePopupAddQuiz,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    closePopupCreation: handleClosePopupAddQuiz\n                }, void 0, false, {\n                    fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"QX/qD1MNaeyk8AS6G11M3owc6CA=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDOUI7QUFDb0I7QUFDWjtBQUNnQjtBQUNOO0FBRXBDLFNBQVNTOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1VLHNCQUFzQjtRQUMxQkgsWUFBWTtJQUNkO0lBRUEsTUFBTUksdUJBQXVCO1FBQzNCSixZQUFZO0lBQ2Q7SUFFQSxNQUFNSyx5QkFBeUI7UUFDN0JILFdBQVc7SUFDYjtJQUVBLE1BQU1JLDBCQUEwQjtRQUM5QkosV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNYLGtHQUFLQTtRQUFDZ0IsV0FBV1YsNEVBQVc7OzBCQUMzQiw4REFBQ1IsZ0dBQUdBO2dCQUFDa0IsV0FBV1YsK0VBQWM7O2tDQUM1Qiw4REFBQ0wsdUdBQVVBO3dCQUFDaUIsU0FBUTt3QkFBS0YsV0FBV1YscUZBQW9CO2tDQUFFOzs7Ozs7a0NBRzFELDhEQUFDYztrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDckIsbUdBQU1BO3dCQUNMaUIsV0FBV1Ysa0ZBQWlCO3dCQUM1QmdCLFNBQVNWO2tDQUNWOzs7Ozs7a0NBR0QsOERBQUNiLG1HQUFNQTt3QkFDTGlCLFdBQVdWLGtGQUFpQjt3QkFDNUJnQixTQUFTUjtrQ0FDVjs7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDWCxnRUFBWUE7Z0JBQUNvQixPQUFNO2dCQUFrQkMsTUFBTWhCO2dCQUFVaUIsU0FBU1o7MEJBQzdELDRFQUFDUixrRUFBY0E7Ozs7Ozs7Ozs7MEJBRWpCLDhEQUFDRixnRUFBWUE7Z0JBQUNvQixPQUFNO2dCQUFhQyxNQUFNZDtnQkFBU2UsU0FBU1Y7MEJBQ3ZELDRFQUFDWCwwREFBTUE7b0JBQUNzQixvQkFBb0JYOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQztHQWhEd0JSO0tBQUFBIiwic291cmNlcyI6WyIvaG9tZS9jZWxpbmEvQnVyZWF1L2NsZWFuQ29kZVByb2plY3QvcHJvamV0LzQtQUwxLUVTR0ktbGVpdG5lci1zeXN0ZW0vZnJvbnRlbmQvc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgR3JpZDIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDdXN0b21EaWFsb2cgZnJvbSBcIi4vY29tcG9uZW50cy9DdXN0b21EaWFsb2dcIjtcbmltcG9ydCBJbnB1dHMgZnJvbSBcIi4vY29tcG9uZW50cy9JbnB1dHNcIjtcbmltcG9ydCBQb3B1cFN0YXJ0R2FtZSBmcm9tIFwiLi9jb21wb25lbnRzL1BvcHVwU3RhcnRHYW1lXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vcGFnZXMvc3R5bGVzL2hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtvcGVuUXVpeiwgc2V0T3BlblF1aXpdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWRkUXVpeiwgc2V0QWRkUXVpel0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlUG9wdXBPcGVuUXVpeiA9ICgpID0+IHtcbiAgICBzZXRPcGVuUXVpeih0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVBvcHVwQ2xvc2VRdWl6ID0gKCkgPT4ge1xuICAgIHNldE9wZW5RdWl6KGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPcGVuUG9wdXBBZGRRdWl6ID0gKCkgPT4ge1xuICAgIHNldEFkZFF1aXoodHJ1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbG9zZVBvcHVwQWRkUXVpeiA9ICgpID0+IHtcbiAgICBzZXRBZGRRdWl6KGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkMiBjbGFzc05hbWU9e3N0eWxlLnN0eWxlfT5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZS5zdHlsZUJveH0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNsYXNzTmFtZT17c3R5bGUucG9zaXRpb25DZW50ZXJ9PlxuICAgICAgICAgIExFSVRORVIgU1RZU1RFTVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxwPk5pY2UgdG8gc2VlIHlvdSBMaWx5YTwvcD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuc3R5bGVCdXR0b259XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUG9wdXBPcGVuUXVpen1cbiAgICAgICAgPlxuICAgICAgICAgIFBsYXlcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnN0eWxlQnV0dG9ufVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW5Qb3B1cEFkZFF1aXp9XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgYSBRdWl6IFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgICAgPEN1c3RvbURpYWxvZyB0aXRsZT1cIkxFSVRORVIgU1RZU1RFTVwiIG9wZW49e29wZW5RdWl6fSBvbkNsb3NlPXtoYW5kbGVQb3B1cENsb3NlUXVpen0+XG4gICAgICAgIDxQb3B1cFN0YXJ0R2FtZSAvPlxuICAgICAgPC9DdXN0b21EaWFsb2c+XG4gICAgICA8Q3VzdG9tRGlhbG9nIHRpdGxlPVwiQWRkIGEgUXVpelwiIG9wZW49e2FkZFF1aXp9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlUG9wdXBBZGRRdWl6fT5cbiAgICAgICAgPElucHV0cyBjbG9zZVBvcHVwQ3JlYXRpb249e2hhbmRsZUNsb3NlUG9wdXBBZGRRdWl6fSAvPlxuICAgICAgPC9DdXN0b21EaWFsb2c+XG4gICAgPC9HcmlkMj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJHcmlkMiIsIlR5cG9ncmFwaHkiLCJ1c2VTdGF0ZSIsIkN1c3RvbURpYWxvZyIsIklucHV0cyIsIlBvcHVwU3RhcnRHYW1lIiwic3R5bGUiLCJIb21lUGFnZSIsIm9wZW5RdWl6Iiwic2V0T3BlblF1aXoiLCJhZGRRdWl6Iiwic2V0QWRkUXVpeiIsImhhbmRsZVBvcHVwT3BlblF1aXoiLCJoYW5kbGVQb3B1cENsb3NlUXVpeiIsImhhbmRsZU9wZW5Qb3B1cEFkZFF1aXoiLCJoYW5kbGVDbG9zZVBvcHVwQWRkUXVpeiIsImNsYXNzTmFtZSIsInN0eWxlQm94IiwidmFyaWFudCIsInBvc2l0aW9uQ2VudGVyIiwicCIsInN0eWxlQnV0dG9uIiwib25DbGljayIsInRpdGxlIiwib3BlbiIsIm9uQ2xvc2UiLCJjbG9zZVBvcHVwQ3JlYXRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});