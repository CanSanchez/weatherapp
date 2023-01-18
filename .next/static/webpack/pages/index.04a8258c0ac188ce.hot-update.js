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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _public_background_sunny_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/background/sunny.png */ \"./public/background/sunny.png\");\n/* harmony import */ var _public_background_rain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/background/rain.png */ \"./public/background/rain.png\");\n/* harmony import */ var _public_background_cloudy_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/background/cloudy.png */ \"./public/background/cloudy.png\");\n/* harmony import */ var _public_background_snow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/background/snow.png */ \"./public/background/snow.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [background, setBackground] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_public_background_sunny_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#65bf2e\");\n    var apiKey = \"99f42d70d7447c0cadd6b0124b3ed194\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\" || event.onClick) {\n            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                if (response.data.weather[0].main == \"Rain\") {\n                    setBackground(_public_background_rain_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src);\n                    setColor(\"#415771\");\n                } else if (response.data.weather[0].main == \"Clouds\") {\n                    setBackground(_public_background_cloudy_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src);\n                    setColor(\"#ffa60f\");\n                } else if (response.data.weather[0].main == \"Snow\") {\n                    setBackground(_public_background_snow_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src);\n                    setColor(\"#2698f0\");\n                }\n                setErrorMessage(\"\");\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n            });\n            setLocation(\"\");\n            setBackground(_public_background_sunny_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src);\n            setColor(\"#65bf2e\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Wazzup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Weather app created by Can\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/weather-news.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Comfortaa&family=M+PLUS+Rounded+1c:wght@700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().input),\n                        value: location,\n                        onChange: (event)=>setLocation(event.target.value),\n                        placeholder: \"Enter Location\",\n                        onKeyDown: searchLocation,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().button),\n                        onClick: ()=>searchLocation,\n                        children: \"Check the weather\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),\n                        style: {\n                            backgroundImage: \"url(\".concat(background, \")\")\n                        },\n                        children: [\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: errorMessage\n                            }, void 0, false, {\n                                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                lineNumber: 87,\n                                columnNumber: 9\n                            }, this),\n                            weather && weather.map((w, index)=>{\n                                return(// <div key={index}>\n                                //   <div>{w.description}</div>\n                                //   <div>{w.main}</div>\n                                // </div>\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().weathercontent),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().city),\n                                            children: data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().currentweather),\n                                            style: {\n                                                backgroundColor: color\n                                            },\n                                            children: w.main\n                                        }, index, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                                            children: w.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                                            children: [\n                                                \"Wind: \",\n                                                data.wind.speed,\n                                                \"m/s\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                                            children: [\n                                                \"Temperature: \",\n                                                data.main.temp,\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                                            children: [\n                                                \"Feels Like: \",\n                                                data.main.feels_like,\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this));\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"9Y7XtvQxE0UcJdr1Y3V4IJW+5LE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUg7a0NBQ1o7Ozs7OztrQ0FFRiw4REFBQzZCO3dCQUFJVCxXQUFXN0Msd0VBQWM7d0JBQzlCd0QsT0FBTzs0QkFBQ0MsaUJBQWlCLE9BQWtCLE9BQVh6QyxZQUFXO3dCQUFFOzs0QkFFM0NGLDhCQUNBLDhEQUFDNEM7MENBQUc1Qzs7Ozs7OzRCQUdKRixXQUFXQSxRQUFRK0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLFFBQVU7Z0NBQ25DLE9BQ0Usb0JBQW9CO2dDQUNwQiwrQkFBK0I7Z0NBQy9CLHdCQUF3QjtnQ0FDeEIsU0FBUzs4Q0FDVCw4REFBQ1A7b0NBQUlULFdBQVc3QywrRUFBcUI7O3NEQUNuQyw4REFBQytEOzRDQUFHbEIsV0FBVzdDLHFFQUFXO3NEQUFHVSxLQUFLOEIsSUFBSTs7Ozs7O3NEQUV0Qyw4REFBQ2M7NENBQWdCVCxXQUFXN0MsK0VBQXFCOzRDQUMvQ3dELE9BQU87Z0RBQUNVLGlCQUFpQi9DOzRDQUFLO3NEQUM5QnlDLEVBQUV6QixJQUFJOzJDQUZFMEI7Ozs7O3NEQUdWLDhEQUFDSDs0Q0FBRWIsV0FBVzdDLDRFQUFrQjtzREFBRzRELEVBQUVPLFdBQVc7Ozs7OztzREFDaEQsOERBQUNUOzRDQUFFYixXQUFXN0MsNEVBQWtCOztnREFBRTtnREFBT1UsS0FBSzBELElBQUksQ0FBQ0MsS0FBSztnREFBQzs7Ozs7OztzREFDekQsOERBQUNYOzRDQUFFYixXQUFXN0MsNEVBQWtCOztnREFBRTtnREFBY1UsS0FBS3lCLElBQUksQ0FBQ21DLElBQUk7Z0RBQUM7Ozs7Ozs7c0RBQy9ELDhEQUFDWjs0Q0FBRWIsV0FBVzdDLDRFQUFrQjs7Z0RBQUU7Z0RBQWFVLEtBQUt5QixJQUFJLENBQUNvQyxVQUFVO2dEQUFDOzs7Ozs7Ozs7Ozs7OzRCQUcxRTs7Ozs7Ozs7Ozs7Ozs7O0FBTVIsQ0FBQztHQXBHdUJoRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBzdW5ueSBmcm9tICcuLi9wdWJsaWMvYmFja2dyb3VuZC9zdW5ueS5wbmcnXG5pbXBvcnQgcmFpbiBmcm9tICcuLi9wdWJsaWMvYmFja2dyb3VuZC9yYWluLnBuZydcbmltcG9ydCBjbG91ZHkgZnJvbSAnLi4vcHVibGljL2JhY2tncm91bmQvY2xvdWR5LnBuZydcbmltcG9ydCBzbm93IGZyb20gJy4uL3B1YmxpYy9iYWNrZ3JvdW5kL3Nub3cucG5nJ1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIFxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2JhY2tncm91bmQsIHNldEJhY2tncm91bmRdID0gdXNlU3RhdGUoc3Vubnkuc3JjKTtcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnIzY1YmYyZScpO1xuXG4gIHZhciBhcGlLZXkgPSBcIjk5ZjQyZDcwZDc0NDdjMGNhZGQ2YjAxMjRiM2VkMTk0XCI7XG4gIHZhciBsYW5nID1cImVuXCI7XG4gIHZhciB1bml0cyA9XCJtZXRyaWNcIjtcblxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSYmYXBwaWQ9JHthcGlLZXl9Jmxhbmc9JHtsYW5nfWBcblxuICBjb25zdCBzZWFyY2hMb2NhdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiIHx8IGV2ZW50Lm9uQ2xpY2spIHtcbiAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpXG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgc2V0V2VhdGhlcihyZXNwb25zZS5kYXRhLndlYXRoZXIpO1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS53ZWF0aGVyWzBdLm1haW4gPT0gJ1JhaW4nKSB7XG4gICAgICAgICAgc2V0QmFja2dyb3VuZChyYWluLnNyYylcbiAgICAgICAgICBzZXRDb2xvcignIzQxNTc3MScpXG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS53ZWF0aGVyWzBdLm1haW4gPT0gJ0Nsb3VkcycpIHtcbiAgICAgICAgICBzZXRCYWNrZ3JvdW5kKGNsb3VkeS5zcmMpXG4gICAgICAgICAgc2V0Q29sb3IoJyNmZmE2MGYnKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEud2VhdGhlclswXS5tYWluID09ICdTbm93Jykge1xuICAgICAgICAgIHNldEJhY2tncm91bmQoc25vdy5zcmMpXG4gICAgICAgICAgc2V0Q29sb3IoJyMyNjk4ZjAnKVxuICAgICAgICB9IFxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIilcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlBsZWFzZSBlbnRlciBhbm90aGVyIGxvY2F0aW9uXCIpXG4gICAgICAgIHNldERhdGEoe30pXG4gICAgICAgIHNldFdlYXRoZXIoKVxuICAgICAgfSlcbiAgICAgIHNldExvY2F0aW9uKCcnKVxuICAgICAgc2V0QmFja2dyb3VuZChzdW5ueS5zcmMpXG4gICAgICBzZXRDb2xvcignIzY1YmYyZScpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XYXp6dXA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiV2VhdGhlciBhcHAgY3JlYXRlZCBieSBDYW5cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi93ZWF0aGVyLW5ld3MucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhJmZhbWlseT1NK1BMVVMrUm91bmRlZCsxYzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgdmFsdWU9e2xvY2F0aW9ufVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TG9jYXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBMb2NhdGlvblwiXG4gICAgICAgIG9uS2V5RG93bj17c2VhcmNoTG9jYXRpb259XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAvPlxuICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgIG9uQ2xpY2s9eygpPT5zZWFyY2hMb2NhdGlvbn1cbiAgICAgICA+Q2hlY2sgdGhlIHdlYXRoZXI8L2J1dHRvbj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfVxuICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kfSlgfX0+XG4gICAgICB7XG4gICAgICAgIGVycm9yTWVzc2FnZSAmJlxuICAgICAgICA8cD57ZXJyb3JNZXNzYWdlfTwvcD5cbiAgICAgIH1cbiAgICAgICB7XG4gICAgICAgIHdlYXRoZXIgJiYgd2VhdGhlci5tYXAoKHcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAvLyAgIDxkaXY+e3cuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAvLyAgIDxkaXY+e3cubWFpbn08L2Rpdj5cbiAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53ZWF0aGVyY29udGVudH0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jaXR5fT57ZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgIHsvKiA8aDM+e2RhdGEuc3lzLmNvdW50cnl9PC9oMz4gKi99XG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudHdlYXRoZXJ9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yfX1cbiAgICAgICAgICAgICAgPnt3Lm1haW59PC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57dy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5XaW5kOiB7ZGF0YS53aW5kLnNwZWVkfW0vczwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlRlbXBlcmF0dXJlOiB7ZGF0YS5tYWluLnRlbXB9wrBDPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+RmVlbHMgTGlrZToge2RhdGEubWFpbi5mZWVsc19saWtlfcKwQzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgXG4gICAgICAgIH0pXG4gICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwiYXhpb3MiLCJzdW5ueSIsInJhaW4iLCJjbG91ZHkiLCJzbm93IiwiSG9tZSIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJkYXRhIiwic2V0RGF0YSIsIndlYXRoZXIiLCJzZXRXZWF0aGVyIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJzcmMiLCJjb2xvciIsInNldENvbG9yIiwiYXBpS2V5IiwibGFuZyIsInVuaXRzIiwidXJsIiwic2VhcmNoTG9jYXRpb24iLCJldmVudCIsImtleSIsIm9uQ2xpY2siLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwiY2xlYXIiLCJsb2ciLCJtYWluIiwiY2F0Y2giLCJlcnIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbktleURvd24iLCJ0eXBlIiwiYnV0dG9uIiwiZGl2Iiwid3JhcHBlciIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicCIsIm1hcCIsInciLCJpbmRleCIsIndlYXRoZXJjb250ZW50IiwiaDEiLCJjaXR5IiwiY3VycmVudHdlYXRoZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkZXNjcmlwdGlvbiIsIndpbmQiLCJzcGVlZCIsInRlbXAiLCJmZWVsc19saWtlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});