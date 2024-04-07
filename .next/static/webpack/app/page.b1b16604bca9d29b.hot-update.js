"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_affiche_mot_AfficheMot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/affiche-mot/AfficheMot */ \"(app-pages-browser)/./src/components/affiche-mot/AfficheMot.tsx\");\n/* harmony import */ var _components_insert_mot_InsertMot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/insert-mot/InsertMot */ \"(app-pages-browser)/./src/components/insert-mot/InsertMot.tsx\");\n/* harmony import */ var _components_abandon_Abandon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/abandon/Abandon */ \"(app-pages-browser)/./src/components/abandon/Abandon.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// --------- Récupération des données de l'API\nasync function getData() {\n    // Appel à l'API en method POST\n    const res = await fetch(\"https://node-hangman-api-production.up.railway.ap\", {\n        method: \"POST\"\n    });\n    if (!res.ok) {\n        throw new Error(\"Erreur data, l'API ne fonctionne pas\");\n    }\n    return res.json();\n}\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // État pour suivre les lettres insérées\n    const [insertedLetters, setInsertedLetters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [victory, setVictory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let apiError = true;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData().then(setData).catch(()=>{\n            // Si il y a une erreur de récupération de l'API, boleen à true pour dire qu'il y a un problème\n            apiError = false;\n        });\n    }, []);\n    const handleLetterInsert = (letter)=>{\n        // Mettre à jour les lettres insérées avec les anciens\n        setInsertedLetters([\n            ...insertedLetters,\n            letter\n        ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Vérifie que les données soient bien présent\n        if (data) {\n            // Contient l'ensemble des lettres du bon mots\n            const allLettersInserted = data.word.split(\"\")// Compare les lettres du vraie mot avec ceux insérer par l'utilisateur grâce à la function every\n            .every((letter)=>insertedLetters.includes(letter));\n            // Met l'état victoire à true, par useState\n            if (allLettersInserted) {\n                setVictory(true);\n            }\n        }\n    // À chaque changement, il vérifie si on a gagner ou non\n    }, [\n        data,\n        insertedLetters\n    ]);\n    // Message d'erreur si l'API ne fonctionne pas\n    if (apiError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"gestion-error\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"L'API ne fonctionne pas, vous pouvez revenir plus tard. Ou bien\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"allComponent\",\n        children: [\n            data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrap-affiche\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"classAbandon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_abandon_Abandon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            data: data\n                        }, void 0, false, {\n                            fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Le jeu du pendu\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_affiche_mot_AfficheMot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: data,\n                                insertedLetters: insertedLetters\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this),\n            !victory && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_insert_mot_InsertMot__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data,\n                onLetterInsert: handleLetterInsert,\n                maxEssai: 5\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"O4JofmXrmxyhxxmOBQF01mdBtYE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBRVU7QUFDSDtBQUNQO0FBRW5ELDhDQUE4QztBQUM5QyxlQUFlTTtJQUNiLCtCQUErQjtJQUMvQixNQUFNQyxNQUFNLE1BQU1DLE1BQU0scURBQXFEO1FBQzNFQyxRQUFRO0lBQ1Y7SUFDQSxJQUFJLENBQUNGLElBQUlHLEVBQUUsRUFBRTtRQUNYLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9KLElBQUlLLElBQUk7QUFDakI7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFhO0lBQzdDLHdDQUF3QztJQUN4QyxNQUFNLENBQUNlLGlCQUFpQkMsbUJBQW1CLEdBQUdoQiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ25FLE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3ZDLElBQUltQixXQUFXO0lBRWZsQixnREFBU0EsQ0FBQztRQUNSSSxVQUNHZSxJQUFJLENBQUNOLFNBQ0xPLEtBQUssQ0FBQztZQUNMLCtGQUErRjtZQUMvRkYsV0FBVztRQUNiO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUcscUJBQXFCLENBQUNDO1FBQzFCLHNEQUFzRDtRQUN0RFAsbUJBQW1CO2VBQUlEO1lBQWlCUTtTQUFPO0lBQ2pEO0lBRUF0QixnREFBU0EsQ0FBQztRQUNSLDhDQUE4QztRQUM5QyxJQUFJWSxNQUFNO1lBQ1IsOENBQThDO1lBQzlDLE1BQU1XLHFCQUFxQlgsS0FBS1ksSUFBSSxDQUNqQ0MsS0FBSyxDQUFDLEdBQ1AsaUdBQWlHO2FBQ2hHQyxLQUFLLENBQUMsQ0FBQ0osU0FBV1IsZ0JBQWdCYSxRQUFRLENBQUNMO1lBRTlDLDJDQUEyQztZQUMzQyxJQUFJQyxvQkFBb0I7Z0JBQ3RCTixXQUFXO1lBQ2I7UUFDRjtJQUNBLHdEQUF3RDtJQUMxRCxHQUFHO1FBQUNMO1FBQU1FO0tBQWdCO0lBRTFCLDhDQUE4QztJQUM5QyxJQUFJSSxVQUFVO1FBQ1oscUJBQ0UsOERBQUNVO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDOzBCQUFFOzs7Ozs7Ozs7OztJQUdUO0lBRUEscUJBQ0UsOERBQUNGO1FBQUlDLFdBQVU7O1lBRVpqQixzQkFDQyw4REFBQ2dCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUMxQixtRUFBT0E7NEJBQUNTLE1BQU1BOzs7Ozs7Ozs7OztrQ0FFakIsOERBQUNnQjs7MENBQ0MsOERBQUNHOzBDQUFHOzs7Ozs7MENBQ0osOERBQUM5QiwwRUFBVUE7Z0NBQ1RXLE1BQU1BO2dDQUNORSxpQkFBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNeEIsQ0FBQ0UseUJBQ0EsOERBQUNkLHdFQUFTQTtnQkFDUlUsTUFBTUE7Z0JBQ05vQixnQkFBZ0JYO2dCQUNoQlksVUFBVTs7Ozs7Ozs7Ozs7O0FBS3BCO0dBMUV3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW90IGZyb20gXCJAL3R5cGVzL2RhdGFcIjtcbmltcG9ydCBBZmZpY2hlTW90IGZyb20gXCJAL2NvbXBvbmVudHMvYWZmaWNoZS1tb3QvQWZmaWNoZU1vdFwiO1xuaW1wb3J0IEluc2VydE1vdCBmcm9tIFwiQC9jb21wb25lbnRzL2luc2VydC1tb3QvSW5zZXJ0TW90XCI7XG5pbXBvcnQgQWJhbmRvbiBmcm9tIFwiQC9jb21wb25lbnRzL2FiYW5kb24vQWJhbmRvblwiO1xuXG4vLyAtLS0tLS0tLS0gUsOpY3Vww6lyYXRpb24gZGVzIGRvbm7DqWVzIGRlIGwnQVBJXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCk6IFByb21pc2U8TW90PiB7XG4gIC8vIEFwcGVsIMOgIGwnQVBJIGVuIG1ldGhvZCBQT1NUXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9ub2RlLWhhbmdtYW4tYXBpLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgfSk7XG4gIGlmICghcmVzLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyZXVyIGRhdGEsIGwnQVBJIG5lIGZvbmN0aW9ubmUgcGFzXCIpO1xuICB9XG4gIHJldHVybiByZXMuanNvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxNb3QgfCBudWxsPihudWxsKTtcbiAgLy8gw4l0YXQgcG91ciBzdWl2cmUgbGVzIGxldHRyZXMgaW5zw6lyw6llc1xuICBjb25zdCBbaW5zZXJ0ZWRMZXR0ZXJzLCBzZXRJbnNlcnRlZExldHRlcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3ZpY3RvcnksIHNldFZpY3RvcnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgYXBpRXJyb3IgPSB0cnVlO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YSgpXG4gICAgICAudGhlbihzZXREYXRhKVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgLy8gU2kgaWwgeSBhIHVuZSBlcnJldXIgZGUgcsOpY3Vww6lyYXRpb24gZGUgbCdBUEksIGJvbGVlbiDDoCB0cnVlIHBvdXIgZGlyZSBxdSdpbCB5IGEgdW4gcHJvYmzDqG1lXG4gICAgICAgIGFwaUVycm9yID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUxldHRlckluc2VydCA9IChsZXR0ZXI6IHN0cmluZykgPT4ge1xuICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxlcyBsZXR0cmVzIGluc8OpcsOpZXMgYXZlYyBsZXMgYW5jaWVuc1xuICAgIHNldEluc2VydGVkTGV0dGVycyhbLi4uaW5zZXJ0ZWRMZXR0ZXJzLCBsZXR0ZXJdKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFbDqXJpZmllIHF1ZSBsZXMgZG9ubsOpZXMgc29pZW50IGJpZW4gcHLDqXNlbnRcbiAgICBpZiAoZGF0YSkge1xuICAgICAgLy8gQ29udGllbnQgbCdlbnNlbWJsZSBkZXMgbGV0dHJlcyBkdSBib24gbW90c1xuICAgICAgY29uc3QgYWxsTGV0dGVyc0luc2VydGVkID0gZGF0YS53b3JkXG4gICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAvLyBDb21wYXJlIGxlcyBsZXR0cmVzIGR1IHZyYWllIG1vdCBhdmVjIGNldXggaW5zw6lyZXIgcGFyIGwndXRpbGlzYXRldXIgZ3LDomNlIMOgIGxhIGZ1bmN0aW9uIGV2ZXJ5XG4gICAgICAgIC5ldmVyeSgobGV0dGVyKSA9PiBpbnNlcnRlZExldHRlcnMuaW5jbHVkZXMobGV0dGVyKSk7XG5cbiAgICAgIC8vIE1ldCBsJ8OpdGF0IHZpY3RvaXJlIMOgIHRydWUsIHBhciB1c2VTdGF0ZVxuICAgICAgaWYgKGFsbExldHRlcnNJbnNlcnRlZCkge1xuICAgICAgICBzZXRWaWN0b3J5KHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDDgCBjaGFxdWUgY2hhbmdlbWVudCwgaWwgdsOpcmlmaWUgc2kgb24gYSBnYWduZXIgb3Ugbm9uXG4gIH0sIFtkYXRhLCBpbnNlcnRlZExldHRlcnNdKTtcblxuICAvLyBNZXNzYWdlIGQnZXJyZXVyIHNpIGwnQVBJIG5lIGZvbmN0aW9ubmUgcGFzXG4gIGlmIChhcGlFcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlc3Rpb24tZXJyb3JcIj5cbiAgICAgICAgPHA+TCdBUEkgbmUgZm9uY3Rpb25uZSBwYXMsIHZvdXMgcG91dmV6IHJldmVuaXIgcGx1cyB0YXJkLiBPdSBiaWVuPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGxDb21wb25lbnRcIj5cbiAgICAgIHsvKiBTaSBsJ0FQSSBlc3QgYmllbiBjaGFyZ8OpLCBhbG9ycyBvbiBhZmZpY2hlIGxlIG1vdCDDoCBkZXZpbmVyICovfVxuICAgICAge2RhdGEgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtYWZmaWNoZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xhc3NBYmFuZG9uXCI+XG4gICAgICAgICAgICA8QWJhbmRvbiBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+TGUgamV1IGR1IHBlbmR1PC9oMT5cbiAgICAgICAgICAgIDxBZmZpY2hlTW90XG4gICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgIGluc2VydGVkTGV0dGVycz17aW5zZXJ0ZWRMZXR0ZXJzfVxuICAgICAgICAgICAgPjwvQWZmaWNoZU1vdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgey8qIFNpIGwndXRpbGlzYXRldXIgbidhIHBhcyBlbmNvcmUgZ2FnbsOpLCBhbG9ycyBpbCBwZXV0IGluc8OpcmVyICovfVxuICAgICAgeyF2aWN0b3J5ICYmIChcbiAgICAgICAgPEluc2VydE1vdFxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgb25MZXR0ZXJJbnNlcnQ9e2hhbmRsZUxldHRlckluc2VydH1cbiAgICAgICAgICBtYXhFc3NhaT17NX1cbiAgICAgICAgPjwvSW5zZXJ0TW90PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWZmaWNoZU1vdCIsIkluc2VydE1vdCIsIkFiYW5kb24iLCJnZXREYXRhIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJvayIsIkVycm9yIiwianNvbiIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImluc2VydGVkTGV0dGVycyIsInNldEluc2VydGVkTGV0dGVycyIsInZpY3RvcnkiLCJzZXRWaWN0b3J5IiwiYXBpRXJyb3IiLCJ0aGVuIiwiY2F0Y2giLCJoYW5kbGVMZXR0ZXJJbnNlcnQiLCJsZXR0ZXIiLCJhbGxMZXR0ZXJzSW5zZXJ0ZWQiLCJ3b3JkIiwic3BsaXQiLCJldmVyeSIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImgxIiwib25MZXR0ZXJJbnNlcnQiLCJtYXhFc3NhaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});