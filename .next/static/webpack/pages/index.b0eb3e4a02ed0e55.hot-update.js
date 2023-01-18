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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    var apiKey = \"99f42d70d7447c0cadd6b0124b3ed194\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\") {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                setErrorMessage(\"\");\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n            });\n            setLocation(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Wazzup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Weather app created by Can\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/weather-news.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Comfortaa&family=M+PLUS+Rounded+1c:wght@700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                        value: location,\n                        onChange: (event)=>setLocation(event.target.value),\n                        placeholder: \"Enter Location\",\n                        onKeyDown: searchLocation,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                        children: \"Check the weather\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n                        children: [\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: errorMessage\n                            }, void 0, false, {\n                                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 9\n                            }, this),\n                            weather && weather.map((w, index)=>{\n                                return(// <div key={index}>\n                                //   <div>{w.description}</div>\n                                //   <div>{w.main}</div>\n                                // </div>\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().weathercontent),\n                                    style: {\n                                        backgroundImage: \"/background/sunny.png\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().city),\n                                            children: data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().currentweather),\n                                            children: w.main\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Wind: \",\n                                                data.wind.speed,\n                                                \"m/s\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Temperature: \",\n                                                data.main.temp,\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Feels Like: \",\n                                                data.main.feels_like,\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this));\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cansanchez/Desktop/Winter 2023/ADCD/weatherapp/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"BMtC4rq9CoLWwzflO5cRFkRSmXI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFPTUE7QUFQc0I7QUFDRTtBQUVlO0FBQ2I7QUFDUDtBQUlWLFNBQVNNLE9BQU87O0lBRTdCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBO0lBQ3RDLE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpELElBQUlXLFNBQVM7SUFDYixJQUFJQyxPQUFNO0lBQ1YsSUFBSUMsUUFBTztJQUVYLE1BQU1DLE1BQU0scURBQXVFRCxPQUFsQlYsVUFBUyxXQUF5QlEsT0FBaEJFLE9BQU0sWUFBeUJELE9BQWZELFFBQU8sVUFBYSxPQUFMQztJQUVsSCxNQUFNRyxpQkFBaUIsQ0FBQ0MsUUFBVTtRQUNoQyxJQUFHQSxNQUFNQyxHQUFHLEtBQUssU0FBUztZQUN4QmhCLGlEQUFTLENBQUNhLEtBQ1RLLElBQUksQ0FBQyxDQUFDQyxXQUFhO2dCQUNsQkMsUUFBUUMsS0FBSztnQkFDYmhCLFFBQVFjLFNBQVNmLElBQUk7Z0JBQ3JCZ0IsUUFBUUUsR0FBRyxDQUFDSCxTQUFTZixJQUFJO2dCQUN6QkcsV0FBV1ksU0FBU2YsSUFBSSxDQUFDRSxPQUFPO2dCQUNoQ0csZ0JBQWdCO1lBQ2xCLEdBQUdjLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBTztnQkFDZEosUUFBUUUsR0FBRyxDQUFDRTtnQkFDWmYsZ0JBQWdCO2dCQUNoQkosUUFBUSxDQUFDO2dCQUNURTtZQUNGO1lBQ0FKLFlBQVk7UUFDZCxDQUFDO0lBQ0g7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNQLGtEQUFJQTs7a0NBQ0gsOERBQUM2QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7a0NBQ3RCLDhEQUFDRjt3QkFBS0UsTUFBSzt3QkFBb0dELEtBQUk7Ozs7Ozs7Ozs7OzswQkFHckgsOERBQUNFO2dCQUFLQyxXQUFXbkMscUVBQVc7O2tDQUM1Qiw4REFBQ29DO3dCQUNDRCxXQUFXbkMsc0VBQVk7d0JBQ3ZCcUMsT0FBT2pDO3dCQUNQa0MsVUFBVXJCLENBQUFBLFFBQVNaLFlBQVlZLE1BQU1zQixNQUFNLENBQUNGLEtBQUs7d0JBQ2pERyxhQUFZO3dCQUNaQyxXQUFXekI7d0JBQ1gwQixNQUFLOzs7Ozs7a0NBRU4sOERBQUNDO3dCQUFPUixXQUFXbkMsdUVBQWE7a0NBQUU7Ozs7OztrQ0FFbkMsOERBQUM0Qzt3QkFBSVQsV0FBV25DLHdFQUFjOzs0QkFFNUJVLDhCQUNBLDhEQUFDb0M7MENBQUdwQzs7Ozs7OzRCQUdKRixXQUFXQSxRQUFRdUMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLFFBQVU7Z0NBQ25DLE9BQ0Usb0JBQW9CO2dDQUNwQiwrQkFBK0I7Z0NBQy9CLHdCQUF3QjtnQ0FDeEIsU0FBUzs4Q0FDVCw4REFBQ0w7b0NBQUlULFdBQVduQywrRUFBcUI7b0NBQ3JDbUQsT0FBTzt3Q0FBQ0MsaUJBQWdCO29DQUF1Qjs7c0RBQzdDLDhEQUFDQzs0Q0FBR2xCLFdBQVduQyxxRUFBVztzREFBR00sS0FBS3VCLElBQUk7Ozs7OztzREFFdEMsOERBQUNlOzRDQUFJVCxXQUFXbkMsK0VBQXFCO3NEQUFHZ0QsRUFBRWQsSUFBSTs7Ozs7O3NEQUM5Qyw4REFBQ1k7O2dEQUFFO2dEQUFPeEMsS0FBS2tELElBQUksQ0FBQ0MsS0FBSztnREFBQzs7Ozs7OztzREFDMUIsOERBQUNYOztnREFBRTtnREFBY3hDLEtBQUs0QixJQUFJLENBQUN3QixJQUFJO2dEQUFDOzs7Ozs7O3NEQUNoQyw4REFBQ1o7O2dEQUFFO2dEQUFheEMsS0FBSzRCLElBQUksQ0FBQ3lCLFVBQVU7Z0RBQUM7Ozs7Ozs7Ozs7Ozs7NEJBRzNDOzs7Ozs7Ozs7Ozs7Ozs7QUFNUixDQUFDO0dBakZ1QnhEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIFxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcblxuICB2YXIgYXBpS2V5ID0gXCI5OWY0MmQ3MGQ3NDQ3YzBjYWRkNmIwMTI0YjNlZDE5NFwiO1xuICB2YXIgbGFuZyA9XCJlblwiO1xuICB2YXIgdW5pdHMgPVwibWV0cmljXCI7XG5cbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9JHt1bml0c30mJmFwcGlkPSR7YXBpS2V5fSZsYW5nPSR7bGFuZ31gXG5cbiAgY29uc3Qgc2VhcmNoTG9jYXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmNsZWFyKClcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICBzZXRXZWF0aGVyKHJlc3BvbnNlLmRhdGEud2VhdGhlcik7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKVxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiUGxlYXNlIGVudGVyIGFub3RoZXIgbG9jYXRpb25cIilcbiAgICAgICAgc2V0RGF0YSh7fSlcbiAgICAgICAgc2V0V2VhdGhlcigpXG4gICAgICB9KVxuICAgICAgc2V0TG9jYXRpb24oJycpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XYXp6dXA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiV2VhdGhlciBhcHAgY3JlYXRlZCBieSBDYW5cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi93ZWF0aGVyLW5ld3MucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhJmZhbWlseT1NK1BMVVMrUm91bmRlZCsxYzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgdmFsdWU9e2xvY2F0aW9ufVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TG9jYXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBMb2NhdGlvblwiXG4gICAgICAgIG9uS2V5RG93bj17c2VhcmNoTG9jYXRpb259XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAvPlxuICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5DaGVjayB0aGUgd2VhdGhlcjwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAge1xuICAgICAgICBlcnJvck1lc3NhZ2UgJiZcbiAgICAgICAgPHA+e2Vycm9yTWVzc2FnZX08L3A+XG4gICAgICB9XG4gICAgICAge1xuICAgICAgICB3ZWF0aGVyICYmIHdlYXRoZXIubWFwKCh3LCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAvLyA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgLy8gICA8ZGl2Pnt3LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgLy8gICA8ZGl2Pnt3Lm1haW59PC9kaXY+XG4gICAgICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2VhdGhlcmNvbnRlbnR9XG4gICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTonL2JhY2tncm91bmQvc3VubnkucG5nJ319PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuY2l0eX0+e2RhdGEubmFtZX08L2gxPlxuICAgICAgICAgICAgICB7LyogPGgzPntkYXRhLnN5cy5jb3VudHJ5fTwvaDM+ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnR3ZWF0aGVyfT57dy5tYWlufTwvZGl2PlxuICAgICAgICAgICAgICA8cD5XaW5kOiB7ZGF0YS53aW5kLnNwZWVkfW0vczwvcD5cbiAgICAgICAgICAgICAgPHA+VGVtcGVyYXR1cmU6IHtkYXRhLm1haW4udGVtcH3CsEM8L3A+XG4gICAgICAgICAgICAgIDxwPkZlZWxzIExpa2U6IHtkYXRhLm1haW4uZmVlbHNfbGlrZX3CsEM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIFxuICAgICAgICB9KVxuICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiSG9tZSIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJkYXRhIiwic2V0RGF0YSIsIndlYXRoZXIiLCJzZXRXZWF0aGVyIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiYXBpS2V5IiwibGFuZyIsInVuaXRzIiwidXJsIiwic2VhcmNoTG9jYXRpb24iLCJldmVudCIsImtleSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsImNhdGNoIiwiZXJyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm9uS2V5RG93biIsInR5cGUiLCJidXR0b24iLCJkaXYiLCJ3cmFwcGVyIiwicCIsIm1hcCIsInciLCJpbmRleCIsIndlYXRoZXJjb250ZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoMSIsImNpdHkiLCJjdXJyZW50d2VhdGhlciIsIndpbmQiLCJzcGVlZCIsInRlbXAiLCJmZWVsc19saWtlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});