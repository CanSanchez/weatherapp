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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _public_background_sunny_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/background/sunny.png */ \"./public/background/sunny.png\");\n/* harmony import */ var _public_background_rain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/background/rain.png */ \"./public/background/rain.png\");\n/* harmony import */ var _public_background_cloudy_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/background/cloudy.png */ \"./public/background/cloudy.png\");\n/* harmony import */ var _public_background_snow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/background/snow.png */ \"./public/background/snow.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [background, setBackground] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_public_background_sunny_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#65bf2e\");\n    var apiKey = \"99f42d70d7447c0cadd6b0124b3ed194\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\") {\n            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                if (response.data.weather[0].main == \"Rain\") {\n                    setBackground(_public_background_rain_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src);\n                    setColor(\"#415771\");\n                } else if (response.data.weather[0].main == \"Clouds\") {\n                    setBackground(_public_background_cloudy_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src);\n                    setColor(\"#ffa60f\");\n                } else if (response.data.weather[0].main == \"Snow\") {\n                    setBackground(_public_background_snow_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src);\n                    setColor(\"#2698f0\");\n                }\n                setErrorMessage(\"\");\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n            });\n            setLocation(\"\");\n            setBackground(_public_background_sunny_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src);\n            setColor(\"#65bf2e\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Wazzup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Weather app created by Can\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/weather-news.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Comfortaa&family=M+PLUS+Rounded+1c:wght@700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().input),\n                        value: location,\n                        onChange: (event)=>setLocation(event.target.value),\n                        placeholder: \"Enter Location\",\n                        onKeyDown: searchLocation,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().button),\n                        onClick: searchLocation(\"Enter\"),\n                        children: \"Check the weather\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),\n                        style: {\n                            backgroundImage: \"url(\".concat(background, \")\")\n                        },\n                        children: [\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: errorMessage\n                            }, void 0, false, {\n                                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                lineNumber: 87,\n                                columnNumber: 9\n                            }, this),\n                            weather && weather.map((w, index)=>{\n                                return(// <div key={index}>\n                                //   <div>{w.description}</div>\n                                //   <div>{w.main}</div>\n                                // </div>\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().weathercontent),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().city),\n                                            children: data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().currentweather),\n                                            style: {\n                                                backgroundColor: color\n                                            },\n                                            children: w.main\n                                        }, index, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                                            children: w.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                                            children: [\n                                                \"Wind: \",\n                                                data.wind.speed,\n                                                \"m/s\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                                            children: [\n                                                \"Temperature: \",\n                                                data.main.temp,\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                                            children: [\n                                                \"Feels Like: \",\n                                                data.main.feels_like,\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this));\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"9Y7XtvQxE0UcJdr1Y3V4IJW+5LE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FFRiw4REFBQzZCO3dCQUFJVixXQUFXNUMsd0VBQWM7d0JBQzlCd0QsT0FBTzs0QkFBQ0MsaUJBQWlCLE9BQWtCLE9BQVh6QyxZQUFXO3dCQUFFOzs0QkFFM0NGLDhCQUNBLDhEQUFDNEM7MENBQUc1Qzs7Ozs7OzRCQUdKRixXQUFXQSxRQUFRK0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLFFBQVU7Z0NBQ25DLE9BQ0Usb0JBQW9CO2dDQUNwQiwrQkFBK0I7Z0NBQy9CLHdCQUF3QjtnQ0FDeEIsU0FBUzs4Q0FDVCw4REFBQ1A7b0NBQUlWLFdBQVc1QywrRUFBcUI7O3NEQUNuQyw4REFBQytEOzRDQUFHbkIsV0FBVzVDLHFFQUFXO3NEQUFHVSxLQUFLNkIsSUFBSTs7Ozs7O3NEQUV0Qyw4REFBQ2U7NENBQWdCVixXQUFXNUMsK0VBQXFCOzRDQUMvQ3dELE9BQU87Z0RBQUNVLGlCQUFpQi9DOzRDQUFLO3NEQUM5QnlDLEVBQUUxQixJQUFJOzJDQUZFMkI7Ozs7O3NEQUdWLDhEQUFDSDs0Q0FBRWQsV0FBVzVDLDRFQUFrQjtzREFBRzRELEVBQUVPLFdBQVc7Ozs7OztzREFDaEQsOERBQUNUOzRDQUFFZCxXQUFXNUMsNEVBQWtCOztnREFBRTtnREFBT1UsS0FBSzBELElBQUksQ0FBQ0MsS0FBSztnREFBQzs7Ozs7OztzREFDekQsOERBQUNYOzRDQUFFZCxXQUFXNUMsNEVBQWtCOztnREFBRTtnREFBY1UsS0FBS3dCLElBQUksQ0FBQ29DLElBQUk7Z0RBQUM7Ozs7Ozs7c0RBQy9ELDhEQUFDWjs0Q0FBRWQsV0FBVzVDLDRFQUFrQjs7Z0RBQUU7Z0RBQWFVLEtBQUt3QixJQUFJLENBQUNxQyxVQUFVO2dEQUFDOzs7Ozs7Ozs7Ozs7OzRCQUcxRTs7Ozs7Ozs7Ozs7Ozs7O0FBTVIsQ0FBQztHQXBHdUJoRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBzdW5ueSBmcm9tICcuLi9wdWJsaWMvYmFja2dyb3VuZC9zdW5ueS5wbmcnXG5pbXBvcnQgcmFpbiBmcm9tICcuLi9wdWJsaWMvYmFja2dyb3VuZC9yYWluLnBuZydcbmltcG9ydCBjbG91ZHkgZnJvbSAnLi4vcHVibGljL2JhY2tncm91bmQvY2xvdWR5LnBuZydcbmltcG9ydCBzbm93IGZyb20gJy4uL3B1YmxpYy9iYWNrZ3JvdW5kL3Nub3cucG5nJ1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIFxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2JhY2tncm91bmQsIHNldEJhY2tncm91bmRdID0gdXNlU3RhdGUoc3Vubnkuc3JjKTtcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnIzY1YmYyZScpO1xuXG4gIHZhciBhcGlLZXkgPSBcIjk5ZjQyZDcwZDc0NDdjMGNhZGQ2YjAxMjRiM2VkMTk0XCI7XG4gIHZhciBsYW5nID1cImVuXCI7XG4gIHZhciB1bml0cyA9XCJtZXRyaWNcIjtcblxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSYmYXBwaWQ9JHthcGlLZXl9Jmxhbmc9JHtsYW5nfWBcblxuICBjb25zdCBzZWFyY2hMb2NhdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKVxuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIHNldFdlYXRoZXIocmVzcG9uc2UuZGF0YS53ZWF0aGVyKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEud2VhdGhlclswXS5tYWluID09ICdSYWluJykge1xuICAgICAgICAgIHNldEJhY2tncm91bmQocmFpbi5zcmMpXG4gICAgICAgICAgc2V0Q29sb3IoJyM0MTU3NzEnKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEud2VhdGhlclswXS5tYWluID09ICdDbG91ZHMnKSB7XG4gICAgICAgICAgc2V0QmFja2dyb3VuZChjbG91ZHkuc3JjKVxuICAgICAgICAgIHNldENvbG9yKCcjZmZhNjBmJylcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLndlYXRoZXJbMF0ubWFpbiA9PSAnU25vdycpIHtcbiAgICAgICAgICBzZXRCYWNrZ3JvdW5kKHNub3cuc3JjKVxuICAgICAgICAgIHNldENvbG9yKCcjMjY5OGYwJylcbiAgICAgICAgfSBcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYW5vdGhlciBsb2NhdGlvblwiKVxuICAgICAgICBzZXREYXRhKHt9KVxuICAgICAgICBzZXRXZWF0aGVyKClcbiAgICAgIH0pXG4gICAgICBzZXRMb2NhdGlvbignJylcbiAgICAgIHNldEJhY2tncm91bmQoc3Vubnkuc3JjKVxuICAgICAgc2V0Q29sb3IoJyM2NWJmMmUnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2F6enVwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldlYXRoZXIgYXBwIGNyZWF0ZWQgYnkgQ2FuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvd2VhdGhlci1uZXdzLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWZvcnRhYSZmYW1pbHk9TStQTFVTK1JvdW5kZWQrMWM6d2dodEA3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgIHZhbHVlPXtsb2NhdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldExvY2F0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTG9jYXRpb25cIlxuICAgICAgICBvbktleURvd249e3NlYXJjaExvY2F0aW9ufVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgLz5cbiAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICBvbkNsaWNrPXtzZWFyY2hMb2NhdGlvbihcIkVudGVyXCIpfVxuICAgICAgID5DaGVjayB0aGUgd2VhdGhlcjwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9XG4gICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmR9KWB9fT5cbiAgICAgIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlICYmXG4gICAgICAgIDxwPntlcnJvck1lc3NhZ2V9PC9wPlxuICAgICAgfVxuICAgICAgIHtcbiAgICAgICAgd2VhdGhlciAmJiB3ZWF0aGVyLm1hcCgodywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgLy8gPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIC8vICAgPGRpdj57dy5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIC8vICAgPGRpdj57dy5tYWlufTwvZGl2PlxuICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndlYXRoZXJjb250ZW50fT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNpdHl9PntkYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgey8qIDxoMz57ZGF0YS5zeXMuY291bnRyeX08L2gzPiAqL31cbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50d2VhdGhlcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3J9fVxuICAgICAgICAgICAgICA+e3cubWFpbn08L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pnt3LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PldpbmQ6IHtkYXRhLndpbmQuc3BlZWR9bS9zPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+VGVtcGVyYXR1cmU6IHtkYXRhLm1haW4udGVtcH3CsEM8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5GZWVscyBMaWtlOiB7ZGF0YS5tYWluLmZlZWxzX2xpa2V9wrBDPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSBcbiAgICAgICAgfSlcbiAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJheGlvcyIsInN1bm55IiwicmFpbiIsImNsb3VkeSIsInNub3ciLCJIb21lIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImRhdGEiLCJzZXREYXRhIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJiYWNrZ3JvdW5kIiwic2V0QmFja2dyb3VuZCIsInNyYyIsImNvbG9yIiwic2V0Q29sb3IiLCJhcGlLZXkiLCJsYW5nIiwidW5pdHMiLCJ1cmwiLCJzZWFyY2hMb2NhdGlvbiIsImV2ZW50Iiwia2V5IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImNsZWFyIiwibG9nIiwibWFpbiIsImNhdGNoIiwiZXJyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNsYXNzTmFtZSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJ3cmFwcGVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwIiwibWFwIiwidyIsImluZGV4Iiwid2VhdGhlcmNvbnRlbnQiLCJoMSIsImNpdHkiLCJjdXJyZW50d2VhdGhlciIsImJhY2tncm91bmRDb2xvciIsImRlc2NyaXB0aW9uIiwid2luZCIsInNwZWVkIiwidGVtcCIsImZlZWxzX2xpa2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});