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

/***/ "./src/pages/components/PopupStartGame.tsx":
/*!*************************************************!*\
  !*** ./src/pages/components/PopupStartGame.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid2_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid2,TextField,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Grid2,TextField,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _styles_popup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/popup.module.css */ \"./src/pages/styles/popup.module.css\");\n/* harmony import */ var _styles_popup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_popup_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PopupStartGame() {\n    _s();\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const question = \"quel est la capital de la France\";\n    const handleChangeResponse = (event)=>{\n        const { value } = event.target;\n        setResponse(value);\n    };\n    const handleSubmit = ()=>{\n        console.log('hey ! - handle submit response');\n    };\n    const isDisable = ()=>{\n        return response === '';\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        className: (_styles_popup_module_css__WEBPACK_IMPORTED_MODULE_1___default().styleBox),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                className: (_styles_popup_module_css__WEBPACK_IMPORTED_MODULE_1___default().styleTypograpgy),\n                children: \"Question :\"\n            }, void 0, false, {\n                fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/components/PopupStartGame.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid2, {\n                className: (_styles_popup_module_css__WEBPACK_IMPORTED_MODULE_1___default().styleGridQuestion),\n                children: question\n            }, void 0, false, {\n                fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/components/PopupStartGame.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                className: (_styles_popup_module_css__WEBPACK_IMPORTED_MODULE_1___default().styleTypograpgy),\n                children: \"Response :\"\n            }, void 0, false, {\n                fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/components/PopupStartGame.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid2, {\n                sx: {\n                    textAlign: 'center'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                    multiline: true,\n                    fullWidth: true,\n                    minRows: 2,\n                    maxRows: 4,\n                    variant: \"outlined\"\n                }, void 0, false, {\n                    fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/components/PopupStartGame.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/components/PopupStartGame.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                sx: {\n                    textAlign: 'center'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid2_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    onClick: handleSubmit,\n                    disabled: isDisable(),\n                    variant: \"contained\",\n                    color: \"success\",\n                    sx: {\n                        borderRadius: '14px'\n                    },\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/components/PopupStartGame.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/components/PopupStartGame.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/celina/Bureau/cleanCodeProject/projet/4-AL1-ESGI-leitner-system/frontend/src/pages/components/PopupStartGame.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(PopupStartGame, \"teEhHdFydR0COjJNARuL9EDEZdU=\");\n_c = PopupStartGame;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupStartGame);\nvar _c;\n$RefreshReg$(_c, \"PopupStartGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Qb3B1cFN0YXJ0R2FtZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwRTtBQUMzQjtBQUNkO0FBRWpDLFNBQVNPOztJQUNMLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNSSxXQUFXO0lBRWpCLE1BQU1DLHVCQUF1QixDQUFDQztRQUMxQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRCxNQUFNRSxNQUFNO1FBQzlCTCxZQUFZSTtJQUNoQjtJQUVBLE1BQU1FLGVBQWU7UUFDakJDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLE1BQU1DLFlBQVk7UUFDZCxPQUFPVixhQUFhO0lBQ3RCO0lBRUYscUJBQ0ksOERBQUNSLDBHQUFHQTtRQUFDbUIsV0FBV2QsMEVBQWM7OzBCQUMxQiw4REFBQ0QsaUhBQVVBO2dCQUFDZSxXQUFXZCxpRkFBcUI7MEJBQUU7Ozs7OzswQkFHOUMsOERBQUNILDRHQUFLQTtnQkFBQ2lCLFdBQVdkLG1GQUF1QjswQkFDcENLOzs7Ozs7MEJBRUwsOERBQUNOLGlIQUFVQTtnQkFBQ2UsV0FBV2QsaUZBQXFCOzBCQUFFOzs7Ozs7MEJBRzlDLDhEQUFDSCw0R0FBS0E7Z0JBQUNxQixJQUFJO29CQUFFQyxXQUFXO2dCQUFTOzBCQVNyQiw0RUFBQ3JCLGdIQUFTQTtvQkFDTnNCLFNBQVM7b0JBQ1RDLFNBQVM7b0JBQ1RDLFNBQVM7b0JBQ1RDLFNBQVM7b0JBQ1RDLFNBQVE7Ozs7Ozs7Ozs7OzBCQUl4Qiw4REFBQzdCLDBHQUFHQTtnQkFBQ3VCLElBQUk7b0JBQUVDLFdBQVc7Z0JBQVM7MEJBQzNCLDRFQUFDdkIsNkdBQU1BO29CQUFDNkIsU0FBU2Y7b0JBQWNnQixVQUFVYjtvQkFBYVcsU0FBUTtvQkFBWUcsT0FBTTtvQkFBVVQsSUFBSTt3QkFBRVUsY0FBYztvQkFBTzs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEk7R0FyRFMxQjtLQUFBQTtBQXVEVCxpRUFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsiL2hvbWUvY2VsaW5hL0J1cmVhdS9jbGVhbkNvZGVQcm9qZWN0L3Byb2pldC80LUFMMS1FU0dJLWxlaXRuZXItc3lzdGVtL2Zyb250ZW5kL3NyYy9wYWdlcy9jb21wb25lbnRzL1BvcHVwU3RhcnRHYW1lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgR3JpZDIsIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL3BvcHVwLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUG9wdXBTdGFydEdhbWUoKSB7XG4gICAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgcXVlc3Rpb24gPSBcInF1ZWwgZXN0IGxhIGNhcGl0YWwgZGUgbGEgRnJhbmNlXCI7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VSZXNwb25zZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBzZXRSZXNwb25zZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaGV5ICEgLSBoYW5kbGUgc3VibWl0IHJlc3BvbnNlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNEaXNhYmxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UgPT09ICcnO1xuICAgICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZS5zdHlsZUJveH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlLnN0eWxlVHlwb2dyYXBneX0+XG4gICAgICAgICAgICAgICAgUXVlc3Rpb24gOiBcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxHcmlkMiBjbGFzc05hbWU9e3N0eWxlLnN0eWxlR3JpZFF1ZXN0aW9ufT5cbiAgICAgICAgICAgICAgICB7cXVlc3Rpb259XG4gICAgICAgICAgICA8L0dyaWQyPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzdHlsZS5zdHlsZVR5cG9ncmFwZ3l9PlxuICAgICAgICAgICAgICAgIFJlc3BvbnNlIDogXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8R3JpZDIgc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICB7LyogPFRleHRGaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuc3R5bGVUZXh0RmVpbGR9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlUmVzcG9uc2UodmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblJvd3M9ezJ9ICAgICAgICAgICAvLyBIYXV0ZXVyIG1pbmltYWxlICgyIGxpZ25lcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzPXs0fSAgICAgICAgICAgLy8gSGF1dGV1ciBtYXhpbWFsZSAoNiBsaWduZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZDI+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGRpc2FibGVkPXtpc0Rpc2FibGUoKX0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic3VjY2Vzc1wiIHN4PXt7IGJvcmRlclJhZGl1czogJzE0cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBTdGFydEdhbWU7Il0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkdyaWQyIiwiVGV4dEZpZWxkIiwiVHlwb2dyYXBoeSIsInN0eWxlIiwidXNlU3RhdGUiLCJQb3B1cFN0YXJ0R2FtZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJxdWVzdGlvbiIsImhhbmRsZUNoYW5nZVJlc3BvbnNlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJpc0Rpc2FibGUiLCJjbGFzc05hbWUiLCJzdHlsZUJveCIsInN0eWxlVHlwb2dyYXBneSIsInN0eWxlR3JpZFF1ZXN0aW9uIiwic3giLCJ0ZXh0QWxpZ24iLCJtdWx0aWxpbmUiLCJmdWxsV2lkdGgiLCJtaW5Sb3dzIiwibWF4Um93cyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJjb2xvciIsImJvcmRlclJhZGl1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/PopupStartGame.tsx\n"));

/***/ })

});