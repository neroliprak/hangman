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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_affiche_mot_AfficheMot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/affiche-mot/AfficheMot */ \"(app-pages-browser)/./src/components/affiche-mot/AfficheMot.tsx\");\n/* harmony import */ var _components_insert_mot_InsertMot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/insert-mot/InsertMot */ \"(app-pages-browser)/./src/components/insert-mot/InsertMot.tsx\");\n/* harmony import */ var _components_abandon_Abandon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/abandon/Abandon */ \"(app-pages-browser)/./src/components/abandon/Abandon.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// --------- Récupération des données de l'API\nasync function getData() {\n    // Appel à l'API en method POST\n    const res = await fetch(\"https://node-hangman-api-production.up.railway.app\", {\n        method: \"POST\"\n    });\n    if (!res.ok) {\n        throw new Error(\"Erreur data, l'API ne fonctionne pas\");\n    }\n    return res.json();\n}\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // État pour suivre les lettres insérées\n    const [insertedLetters, setInsertedLetters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [victory, setVictory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let apiError = false;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData().then(setData).catch(()=>{\n            apiError = true;\n        });\n    }, []);\n    const handleLetterInsert = (letter)=>{\n        // Mettre à jour les lettres insérées avec les anciens\n        setInsertedLetters([\n            ...insertedLetters,\n            letter\n        ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Vérifie que les données soient bien présent\n        if (data) {\n            // Contient l'ensemble des lettres du bon mots\n            const allLettersInserted = data.word.split(\"\")// Compare les lettres du vraie mot avec ceux insérer par l'utilisateur grâce à la function every\n            .every((letter)=>insertedLetters.includes(letter));\n            // Met l'état victoire à true, par useState\n            if (allLettersInserted) {\n                setVictory(true);\n            }\n        }\n    // À chaque changement, il vérifie si on a gagner ou non\n    }, [\n        data,\n        insertedLetters\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"allComponent\",\n        children: [\n            data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrap-affiche\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"classAbandon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_abandon_Abandon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            data: data\n                        }, void 0, false, {\n                            fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Le jeu du pendu\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_affiche_mot_AfficheMot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: data,\n                                insertedLetters: insertedLetters\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this),\n            !victory && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_insert_mot_InsertMot__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data,\n                onLetterInsert: handleLetterInsert,\n                maxEssai: 5\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"O4JofmXrmxyhxxmOBQF01mdBtYE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBRVU7QUFDSDtBQUNQO0FBRW5ELDhDQUE4QztBQUM5QyxlQUFlTTtJQUNiLCtCQUErQjtJQUMvQixNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLHNEQUNBO1FBQ0VDLFFBQVE7SUFDVjtJQUVGLElBQUksQ0FBQ0YsSUFBSUcsRUFBRSxFQUFFO1FBQ1gsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0osSUFBSUssSUFBSTtBQUNqQjtBQUVlLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQWE7SUFDN0Msd0NBQXdDO0lBQ3hDLE1BQU0sQ0FBQ2UsaUJBQWlCQyxtQkFBbUIsR0FBR2hCLCtDQUFRQSxDQUFXLEVBQUU7SUFDbkUsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDdkMsSUFBSW1CLFdBQVc7SUFFZmxCLGdEQUFTQSxDQUFDO1FBQ1JJLFVBQ0dlLElBQUksQ0FBQ04sU0FDTE8sS0FBSyxDQUFDO1lBQ0xGLFdBQVc7UUFDYjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1HLHFCQUFxQixDQUFDQztRQUMxQixzREFBc0Q7UUFDdERQLG1CQUFtQjtlQUFJRDtZQUFpQlE7U0FBTztJQUNqRDtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDUiw4Q0FBOEM7UUFDOUMsSUFBSVksTUFBTTtZQUNSLDhDQUE4QztZQUM5QyxNQUFNVyxxQkFBcUJYLEtBQUtZLElBQUksQ0FDakNDLEtBQUssQ0FBQyxHQUNQLGlHQUFpRzthQUNoR0MsS0FBSyxDQUFDLENBQUNKLFNBQVdSLGdCQUFnQmEsUUFBUSxDQUFDTDtZQUU5QywyQ0FBMkM7WUFDM0MsSUFBSUMsb0JBQW9CO2dCQUN0Qk4sV0FBVztZQUNiO1FBQ0Y7SUFDQSx3REFBd0Q7SUFDMUQsR0FBRztRQUFDTDtRQUFNRTtLQUFnQjtJQUUxQixxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7WUFFWmpCLHNCQUNDLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQzFCLG1FQUFPQTs0QkFBQ1MsTUFBTUE7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ2dCOzswQ0FDQyw4REFBQ0U7MENBQUc7Ozs7OzswQ0FDSiw4REFBQzdCLDBFQUFVQTtnQ0FDVFcsTUFBTUE7Z0NBQ05FLGlCQUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU14QixDQUFDRSx5QkFDQSw4REFBQ2Qsd0VBQVNBO2dCQUNSVSxNQUFNQTtnQkFDTm1CLGdCQUFnQlY7Z0JBQ2hCVyxVQUFVOzs7Ozs7Ozs7Ozs7QUFLcEI7R0FoRXdCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb3QgZnJvbSBcIkAvdHlwZXMvZGF0YVwiO1xuaW1wb3J0IEFmZmljaGVNb3QgZnJvbSBcIkAvY29tcG9uZW50cy9hZmZpY2hlLW1vdC9BZmZpY2hlTW90XCI7XG5pbXBvcnQgSW5zZXJ0TW90IGZyb20gXCJAL2NvbXBvbmVudHMvaW5zZXJ0LW1vdC9JbnNlcnRNb3RcIjtcbmltcG9ydCBBYmFuZG9uIGZyb20gXCJAL2NvbXBvbmVudHMvYWJhbmRvbi9BYmFuZG9uXCI7XG5cbi8vIC0tLS0tLS0tLSBSw6ljdXDDqXJhdGlvbiBkZXMgZG9ubsOpZXMgZGUgbCdBUElcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKTogUHJvbWlzZTxNb3Q+IHtcbiAgLy8gQXBwZWwgw6AgbCdBUEkgZW4gbWV0aG9kIFBPU1RcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL25vZGUtaGFuZ21hbi1hcGktcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcFwiLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgfVxuICApO1xuICBpZiAoIXJlcy5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBkYXRhLCBsJ0FQSSBuZSBmb25jdGlvbm5lIHBhc1wiKTtcbiAgfVxuICByZXR1cm4gcmVzLmpzb24oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8TW90IHwgbnVsbD4obnVsbCk7XG4gIC8vIMOJdGF0IHBvdXIgc3VpdnJlIGxlcyBsZXR0cmVzIGluc8OpcsOpZXNcbiAgY29uc3QgW2luc2VydGVkTGV0dGVycywgc2V0SW5zZXJ0ZWRMZXR0ZXJzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFt2aWN0b3J5LCBzZXRWaWN0b3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IGFwaUVycm9yID0gZmFsc2U7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREYXRhKClcbiAgICAgIC50aGVuKHNldERhdGEpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBhcGlFcnJvciA9IHRydWU7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUxldHRlckluc2VydCA9IChsZXR0ZXI6IHN0cmluZykgPT4ge1xuICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxlcyBsZXR0cmVzIGluc8OpcsOpZXMgYXZlYyBsZXMgYW5jaWVuc1xuICAgIHNldEluc2VydGVkTGV0dGVycyhbLi4uaW5zZXJ0ZWRMZXR0ZXJzLCBsZXR0ZXJdKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFbDqXJpZmllIHF1ZSBsZXMgZG9ubsOpZXMgc29pZW50IGJpZW4gcHLDqXNlbnRcbiAgICBpZiAoZGF0YSkge1xuICAgICAgLy8gQ29udGllbnQgbCdlbnNlbWJsZSBkZXMgbGV0dHJlcyBkdSBib24gbW90c1xuICAgICAgY29uc3QgYWxsTGV0dGVyc0luc2VydGVkID0gZGF0YS53b3JkXG4gICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAvLyBDb21wYXJlIGxlcyBsZXR0cmVzIGR1IHZyYWllIG1vdCBhdmVjIGNldXggaW5zw6lyZXIgcGFyIGwndXRpbGlzYXRldXIgZ3LDomNlIMOgIGxhIGZ1bmN0aW9uIGV2ZXJ5XG4gICAgICAgIC5ldmVyeSgobGV0dGVyKSA9PiBpbnNlcnRlZExldHRlcnMuaW5jbHVkZXMobGV0dGVyKSk7XG5cbiAgICAgIC8vIE1ldCBsJ8OpdGF0IHZpY3RvaXJlIMOgIHRydWUsIHBhciB1c2VTdGF0ZVxuICAgICAgaWYgKGFsbExldHRlcnNJbnNlcnRlZCkge1xuICAgICAgICBzZXRWaWN0b3J5KHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDDgCBjaGFxdWUgY2hhbmdlbWVudCwgaWwgdsOpcmlmaWUgc2kgb24gYSBnYWduZXIgb3Ugbm9uXG4gIH0sIFtkYXRhLCBpbnNlcnRlZExldHRlcnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsQ29tcG9uZW50XCI+XG4gICAgICB7LyogU2kgbCdBUEkgZXN0IGJpZW4gY2hhcmfDqSwgYWxvcnMgb24gYWZmaWNoZSBsZSBtb3Qgw6AgZGV2aW5lciAqL31cbiAgICAgIHtkYXRhICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWFmZmljaGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsYXNzQWJhbmRvblwiPlxuICAgICAgICAgICAgPEFiYW5kb24gZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkxlIGpldSBkdSBwZW5kdTwvaDE+XG4gICAgICAgICAgICA8QWZmaWNoZU1vdFxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICBpbnNlcnRlZExldHRlcnM9e2luc2VydGVkTGV0dGVyc31cbiAgICAgICAgICAgID48L0FmZmljaGVNb3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHsvKiBTaSBsJ3V0aWxpc2F0ZXVyIG4nYSBwYXMgZW5jb3JlIGdhZ27DqSwgYWxvcnMgaWwgcGV1dCBpbnPDqXJlciAqL31cbiAgICAgIHshdmljdG9yeSAmJiAoXG4gICAgICAgIDxJbnNlcnRNb3RcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIG9uTGV0dGVySW5zZXJ0PXtoYW5kbGVMZXR0ZXJJbnNlcnR9XG4gICAgICAgICAgbWF4RXNzYWk9ezV9XG4gICAgICAgID48L0luc2VydE1vdD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFmZmljaGVNb3QiLCJJbnNlcnRNb3QiLCJBYmFuZG9uIiwiZ2V0RGF0YSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwib2siLCJFcnJvciIsImpzb24iLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJpbnNlcnRlZExldHRlcnMiLCJzZXRJbnNlcnRlZExldHRlcnMiLCJ2aWN0b3J5Iiwic2V0VmljdG9yeSIsImFwaUVycm9yIiwidGhlbiIsImNhdGNoIiwiaGFuZGxlTGV0dGVySW5zZXJ0IiwibGV0dGVyIiwiYWxsTGV0dGVyc0luc2VydGVkIiwid29yZCIsInNwbGl0IiwiZXZlcnkiLCJpbmNsdWRlcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25MZXR0ZXJJbnNlcnQiLCJtYXhFc3NhaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});