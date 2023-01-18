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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _public_background_sunny_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/background/sunny.png */ \"./public/background/sunny.png\");\n/* harmony import */ var _public_background_rain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/background/rain.png */ \"./public/background/rain.png\");\n/* harmony import */ var _public_background_cloudy_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/background/cloudy.png */ \"./public/background/cloudy.png\");\n/* harmony import */ var _public_background_snow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/background/snow.png */ \"./public/background/snow.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [background, setBackground] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_public_background_sunny_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#65bf2e\");\n    var apiKey = \"99f42d70d7447c0cadd6b0124b3ed194\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\") {\n            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                if (response.data.weather[0].main == \"Rain\") {\n                    setBackground(_public_background_rain_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src);\n                } else if (response.data.weather[0].main == \"Clouds\") {\n                    setBackground(_public_background_cloudy_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src);\n                } else if (response.data.weather[0].main == \"Snow\") {\n                    setBackground(_public_background_snow_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src);\n                }\n                setErrorMessage(\"\");\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n            });\n            setLocation(\"\");\n            setBackground(_public_background_sunny_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src);\n            setColor(\"#65bf2e\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Wazzup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Weather app created by Can\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/weather-news.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Comfortaa&family=M+PLUS+Rounded+1c:wght@700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().input),\n                        value: location,\n                        onChange: (event)=>setLocation(event.target.value),\n                        placeholder: \"Enter Location\",\n                        onKeyDown: searchLocation,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().button),\n                        children: \"Check the weather\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),\n                        style: {\n                            backgroundImage: \"url(\".concat(background, \")\")\n                        },\n                        children: [\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: errorMessage\n                            }, void 0, false, {\n                                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 9\n                            }, this),\n                            weather && weather.map((w, index)=>{\n                                return(// <div key={index}>\n                                //   <div>{w.description}</div>\n                                //   <div>{w.main}</div>\n                                // </div>\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().weathercontent),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().city),\n                                            children: data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().currentweather),\n                                            style: {\n                                                backgroundColor: {\n                                                    color\n                                                }\n                                            },\n                                            children: w.main\n                                        }, index, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Wind: \",\n                                                data.wind.speed,\n                                                \"m/s\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Temperature: \",\n                                                data.main.temp,\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Feels Like: \",\n                                                data.main.feels_like,\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this));\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"9Y7XtvQxE0UcJdr1Y3V4IJW+5LE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQixPQUFrQixPQUFYeEMsWUFBVzt3QkFBRTs7NEJBRTNDRiw4QkFDQSw4REFBQzJDOzBDQUFHM0M7Ozs7Ozs0QkFHSkYsV0FBV0EsUUFBUThDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxRQUFVO2dDQUNuQyxPQUNFLG9CQUFvQjtnQ0FDcEIsK0JBQStCO2dDQUMvQix3QkFBd0I7Z0NBQ3hCLFNBQVM7OENBQ1QsOERBQUNQO29DQUFJVCxXQUFXNUMsK0VBQXFCOztzREFDbkMsOERBQUM4RDs0Q0FBR2xCLFdBQVc1QyxxRUFBVztzREFBR1UsS0FBSzZCLElBQUk7Ozs7OztzREFFdEMsOERBQUNjOzRDQUFnQlQsV0FBVzVDLCtFQUFxQjs0Q0FDL0N1RCxPQUFPO2dEQUFDVSxpQkFBZ0I7b0RBQUM5QztnREFBSzs0Q0FBQztzREFDL0J3QyxFQUFFekIsSUFBSTsyQ0FGRTBCOzs7OztzREFHViw4REFBQ0g7O2dEQUFFO2dEQUFPL0MsS0FBS3dELElBQUksQ0FBQ0MsS0FBSztnREFBQzs7Ozs7OztzREFDMUIsOERBQUNWOztnREFBRTtnREFBYy9DLEtBQUt3QixJQUFJLENBQUNrQyxJQUFJO2dEQUFDOzs7Ozs7O3NEQUNoQyw4REFBQ1g7O2dEQUFFO2dEQUFhL0MsS0FBS3dCLElBQUksQ0FBQ21DLFVBQVU7Z0RBQUM7Ozs7Ozs7Ozs7Ozs7NEJBRzNDOzs7Ozs7Ozs7Ozs7Ozs7QUFNUixDQUFDO0dBOUZ1QjlEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHN1bm55IGZyb20gJy4uL3B1YmxpYy9iYWNrZ3JvdW5kL3N1bm55LnBuZydcbmltcG9ydCByYWluIGZyb20gJy4uL3B1YmxpYy9iYWNrZ3JvdW5kL3JhaW4ucG5nJ1xuaW1wb3J0IGNsb3VkeSBmcm9tICcuLi9wdWJsaWMvYmFja2dyb3VuZC9jbG91ZHkucG5nJ1xuaW1wb3J0IHNub3cgZnJvbSAnLi4vcHVibGljL2JhY2tncm91bmQvc25vdy5wbmcnXG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgXG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbYmFja2dyb3VuZCwgc2V0QmFja2dyb3VuZF0gPSB1c2VTdGF0ZShzdW5ueS5zcmMpO1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKCcjNjViZjJlJyk7XG5cbiAgdmFyIGFwaUtleSA9IFwiOTlmNDJkNzBkNzQ0N2MwY2FkZDZiMDEyNGIzZWQxOTRcIjtcbiAgdmFyIGxhbmcgPVwiZW5cIjtcbiAgdmFyIHVuaXRzID1cIm1ldHJpY1wiO1xuXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JnVuaXRzPSR7dW5pdHN9JiZhcHBpZD0ke2FwaUtleX0mbGFuZz0ke2xhbmd9YFxuXG4gIGNvbnN0IHNlYXJjaExvY2F0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpXG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgc2V0V2VhdGhlcihyZXNwb25zZS5kYXRhLndlYXRoZXIpO1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS53ZWF0aGVyWzBdLm1haW4gPT0gJ1JhaW4nKSB7XG4gICAgICAgICAgc2V0QmFja2dyb3VuZChyYWluLnNyYylcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLndlYXRoZXJbMF0ubWFpbiA9PSAnQ2xvdWRzJykge1xuICAgICAgICAgIHNldEJhY2tncm91bmQoY2xvdWR5LnNyYylcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLndlYXRoZXJbMF0ubWFpbiA9PSAnU25vdycpIHtcbiAgICAgICAgICBzZXRCYWNrZ3JvdW5kKHNub3cuc3JjKVxuICAgICAgICB9IFxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIilcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlBsZWFzZSBlbnRlciBhbm90aGVyIGxvY2F0aW9uXCIpXG4gICAgICAgIHNldERhdGEoe30pXG4gICAgICAgIHNldFdlYXRoZXIoKVxuICAgICAgfSlcbiAgICAgIHNldExvY2F0aW9uKCcnKVxuICAgICAgc2V0QmFja2dyb3VuZChzdW5ueS5zcmMpXG4gICAgICBzZXRDb2xvcignIzY1YmYyZScpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XYXp6dXA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiV2VhdGhlciBhcHAgY3JlYXRlZCBieSBDYW5cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi93ZWF0aGVyLW5ld3MucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhJmZhbWlseT1NK1BMVVMrUm91bmRlZCsxYzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgdmFsdWU9e2xvY2F0aW9ufVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TG9jYXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBMb2NhdGlvblwiXG4gICAgICAgIG9uS2V5RG93bj17c2VhcmNoTG9jYXRpb259XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAvPlxuICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5DaGVjayB0aGUgd2VhdGhlcjwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9XG4gICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmR9KWB9fT5cbiAgICAgIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlICYmXG4gICAgICAgIDxwPntlcnJvck1lc3NhZ2V9PC9wPlxuICAgICAgfVxuICAgICAgIHtcbiAgICAgICAgd2VhdGhlciAmJiB3ZWF0aGVyLm1hcCgodywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgLy8gPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIC8vICAgPGRpdj57dy5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIC8vICAgPGRpdj57dy5tYWlufTwvZGl2PlxuICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndlYXRoZXJjb250ZW50fT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNpdHl9PntkYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgey8qIDxoMz57ZGF0YS5zeXMuY291bnRyeX08L2gzPiAqL31cbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50d2VhdGhlcn1cbiAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjp7Y29sb3J9fX1cbiAgICAgICAgICAgICAgPnt3Lm1haW59PC9kaXY+XG4gICAgICAgICAgICAgIDxwPldpbmQ6IHtkYXRhLndpbmQuc3BlZWR9bS9zPC9wPlxuICAgICAgICAgICAgICA8cD5UZW1wZXJhdHVyZToge2RhdGEubWFpbi50ZW1wfcKwQzwvcD5cbiAgICAgICAgICAgICAgPHA+RmVlbHMgTGlrZToge2RhdGEubWFpbi5mZWVsc19saWtlfcKwQzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgXG4gICAgICAgIH0pXG4gICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwiYXhpb3MiLCJzdW5ueSIsInJhaW4iLCJjbG91ZHkiLCJzbm93IiwiSG9tZSIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJkYXRhIiwic2V0RGF0YSIsIndlYXRoZXIiLCJzZXRXZWF0aGVyIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJzcmMiLCJjb2xvciIsInNldENvbG9yIiwiYXBpS2V5IiwibGFuZyIsInVuaXRzIiwidXJsIiwic2VhcmNoTG9jYXRpb24iLCJldmVudCIsImtleSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsIm1haW4iLCJjYXRjaCIsImVyciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm9uS2V5RG93biIsInR5cGUiLCJidXR0b24iLCJkaXYiLCJ3cmFwcGVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwIiwibWFwIiwidyIsImluZGV4Iiwid2VhdGhlcmNvbnRlbnQiLCJoMSIsImNpdHkiLCJjdXJyZW50d2VhdGhlciIsImJhY2tncm91bmRDb2xvciIsIndpbmQiLCJzcGVlZCIsInRlbXAiLCJmZWVsc19saWtlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});