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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _public_background_sunny_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/background/sunny.png */ \"./public/background/sunny.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    var apiKey = \"99f42d70d7447c0cadd6b0124b3ed194\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\") {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                setErrorMessage(\"\");\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n            });\n            setLocation(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Wazzup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Weather app created by Can\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/weather-news.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Comfortaa&family=M+PLUS+Rounded+1c:wght@700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                        value: location,\n                        onChange: (event)=>setLocation(event.target.value),\n                        placeholder: \"Enter Location\",\n                        onKeyDown: searchLocation,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                        children: \"Check the weather\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n                        children: [\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: errorMessage\n                            }, void 0, false, {\n                                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 9\n                            }, this),\n                            weather && weather.map((w, index)=>{\n                                return(// <div key={index}>\n                                //   <div>{w.description}</div>\n                                //   <div>{w.main}</div>\n                                // </div>\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().weathercontent),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().city),\n                                            children: data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().currentweather),\n                                            children: w.main\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Wind: \",\n                                                data.wind.speed,\n                                                \"m/s\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Temperature: \",\n                                                data.main.temp,\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Feels Like: \",\n                                                data.main.feels_like,\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this));\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"BMtC4rq9CoLWwzflO5cRFkRSmXI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dEQUFDOzs7Ozs7Ozs7Ozs7OzRCQUczQzs7Ozs7Ozs7Ozs7Ozs7O0FBTVIsQ0FBQztHQWhGdUJ0RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBzdW5ueSBmcm9tICcuLi9wdWJsaWMvYmFja2dyb3VuZC9zdW5ueS5wbmcnXG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgXG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIHZhciBhcGlLZXkgPSBcIjk5ZjQyZDcwZDc0NDdjMGNhZGQ2YjAxMjRiM2VkMTk0XCI7XG4gIHZhciBsYW5nID1cImVuXCI7XG4gIHZhciB1bml0cyA9XCJtZXRyaWNcIjtcblxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSYmYXBwaWQ9JHthcGlLZXl9Jmxhbmc9JHtsYW5nfWBcblxuICBjb25zdCBzZWFyY2hMb2NhdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKVxuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIHNldFdlYXRoZXIocmVzcG9uc2UuZGF0YS53ZWF0aGVyKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYW5vdGhlciBsb2NhdGlvblwiKVxuICAgICAgICBzZXREYXRhKHt9KVxuICAgICAgICBzZXRXZWF0aGVyKClcbiAgICAgIH0pXG4gICAgICBzZXRMb2NhdGlvbignJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldhenp1cDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZWF0aGVyIGFwcCBjcmVhdGVkIGJ5IENhblwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3dlYXRoZXItbmV3cy5wbmdcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21mb3J0YWEmZmFtaWx5PU0rUExVUytSb3VuZGVkKzFjOndnaHRANzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICB2YWx1ZT17bG9jYXRpb259XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRMb2NhdGlvbihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIExvY2F0aW9uXCJcbiAgICAgICAgb25LZXlEb3duPXtzZWFyY2hMb2NhdGlvbn1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgIC8+XG4gICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PkNoZWNrIHRoZSB3ZWF0aGVyPC9idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICB7XG4gICAgICAgIGVycm9yTWVzc2FnZSAmJlxuICAgICAgICA8cD57ZXJyb3JNZXNzYWdlfTwvcD5cbiAgICAgIH1cbiAgICAgICB7XG4gICAgICAgIHdlYXRoZXIgJiYgd2VhdGhlci5tYXAoKHcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAvLyAgIDxkaXY+e3cuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAvLyAgIDxkaXY+e3cubWFpbn08L2Rpdj5cbiAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53ZWF0aGVyY29udGVudH0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jaXR5fT57ZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgIHsvKiA8aDM+e2RhdGEuc3lzLmNvdW50cnl9PC9oMz4gKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudHdlYXRoZXJ9Pnt3Lm1haW59PC9kaXY+XG4gICAgICAgICAgICAgIDxwPldpbmQ6IHtkYXRhLndpbmQuc3BlZWR9bS9zPC9wPlxuICAgICAgICAgICAgICA8cD5UZW1wZXJhdHVyZToge2RhdGEubWFpbi50ZW1wfcKwQzwvcD5cbiAgICAgICAgICAgICAgPHA+RmVlbHMgTGlrZToge2RhdGEubWFpbi5mZWVsc19saWtlfcKwQzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgXG4gICAgICAgIH0pXG4gICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwiYXhpb3MiLCJzdW5ueSIsIkhvbWUiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwiZGF0YSIsInNldERhdGEiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImFwaUtleSIsImxhbmciLCJ1bml0cyIsInVybCIsInNlYXJjaExvY2F0aW9uIiwiZXZlbnQiLCJrZXkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwiY2xlYXIiLCJsb2ciLCJjYXRjaCIsImVyciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbktleURvd24iLCJ0eXBlIiwiYnV0dG9uIiwiZGl2Iiwid3JhcHBlciIsInAiLCJtYXAiLCJ3IiwiaW5kZXgiLCJ3ZWF0aGVyY29udGVudCIsImgxIiwiY2l0eSIsImN1cnJlbnR3ZWF0aGVyIiwid2luZCIsInNwZWVkIiwidGVtcCIsImZlZWxzX2xpa2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});