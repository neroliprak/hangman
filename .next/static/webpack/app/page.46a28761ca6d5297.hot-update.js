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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_affiche_mot_AfficheMot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/affiche-mot/AfficheMot */ \"(app-pages-browser)/./src/components/affiche-mot/AfficheMot.tsx\");\n/* harmony import */ var _components_insert_mot_InsertMot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/insert-mot/InsertMot */ \"(app-pages-browser)/./src/components/insert-mot/InsertMot.tsx\");\n/* harmony import */ var _components_abandon_Abandon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/abandon/Abandon */ \"(app-pages-browser)/./src/components/abandon/Abandon.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// --------- Récupération des données de l'API\nasync function getData() {\n    // Appel à l'API en method POST\n    const res = await fetch(\"https://node-hangman-api-production.up.railway.ap\", {\n        method: \"POST\"\n    });\n    if (!res.ok) {\n        throw new Error(\"Erreur data, l'API ne fonctionne pas\");\n    }\n    return res.json();\n}\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // État pour suivre les lettres insérées\n    const [insertedLetters, setInsertedLetters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [victory, setVictory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let apiError = true;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData().then(setData).catch(()=>{\n            // Si il y a une erreur de récupération de l'API, boleen à true pour dire qu'il y a un problème\n            apiError = false;\n        });\n    }, []);\n    const handleLetterInsert = (letter)=>{\n        // Mettre à jour les lettres insérées avec les anciens\n        setInsertedLetters([\n            ...insertedLetters,\n            letter\n        ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Vérifie que les données soient bien présent\n        if (data) {\n            // Contient l'ensemble des lettres du bon mots\n            const allLettersInserted = data.word.split(\"\")// Compare les lettres du vraie mot avec ceux insérer par l'utilisateur grâce à la function every\n            .every((letter)=>insertedLetters.includes(letter));\n            // Met l'état victoire à true, par useState\n            if (allLettersInserted) {\n                setVictory(true);\n            }\n        }\n    // À chaque changement, il vérifie si on a gagner ou non\n    }, [\n        data,\n        insertedLetters\n    ]);\n    // Message d'erreur si l'API ne fonctionne pas\n    if (apiError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"gestion-error\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"L'API ne fonctionne pas, vous pouvez revenir plus tard. Ou bien regarder ce portfolio : \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://neroliprak.fr/\",\n                        children: \"Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 35\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"allComponent\",\n        children: [\n            data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrap-affiche\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"classAbandon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_abandon_Abandon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            data: data\n                        }, void 0, false, {\n                            fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Le jeu du pendu\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_affiche_mot_AfficheMot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: data,\n                                insertedLetters: insertedLetters\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this),\n            !victory && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_insert_mot_InsertMot__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data,\n                onLetterInsert: handleLetterInsert,\n                maxEssai: 5\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"O4JofmXrmxyhxxmOBQF01mdBtYE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBRVU7QUFDSDtBQUNQO0FBRW5ELDhDQUE4QztBQUM5QyxlQUFlTTtJQUNiLCtCQUErQjtJQUMvQixNQUFNQyxNQUFNLE1BQU1DLE1BQU0scURBQXFEO1FBQzNFQyxRQUFRO0lBQ1Y7SUFDQSxJQUFJLENBQUNGLElBQUlHLEVBQUUsRUFBRTtRQUNYLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9KLElBQUlLLElBQUk7QUFDakI7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFhO0lBQzdDLHdDQUF3QztJQUN4QyxNQUFNLENBQUNlLGlCQUFpQkMsbUJBQW1CLEdBQUdoQiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ25FLE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3ZDLElBQUltQixXQUFXO0lBRWZsQixnREFBU0EsQ0FBQztRQUNSSSxVQUNHZSxJQUFJLENBQUNOLFNBQ0xPLEtBQUssQ0FBQztZQUNMLCtGQUErRjtZQUMvRkYsV0FBVztRQUNiO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUcscUJBQXFCLENBQUNDO1FBQzFCLHNEQUFzRDtRQUN0RFAsbUJBQW1CO2VBQUlEO1lBQWlCUTtTQUFPO0lBQ2pEO0lBRUF0QixnREFBU0EsQ0FBQztRQUNSLDhDQUE4QztRQUM5QyxJQUFJWSxNQUFNO1lBQ1IsOENBQThDO1lBQzlDLE1BQU1XLHFCQUFxQlgsS0FBS1ksSUFBSSxDQUNqQ0MsS0FBSyxDQUFDLEdBQ1AsaUdBQWlHO2FBQ2hHQyxLQUFLLENBQUMsQ0FBQ0osU0FBV1IsZ0JBQWdCYSxRQUFRLENBQUNMO1lBRTlDLDJDQUEyQztZQUMzQyxJQUFJQyxvQkFBb0I7Z0JBQ3RCTixXQUFXO1lBQ2I7UUFDRjtJQUNBLHdEQUF3RDtJQUMxRCxHQUFHO1FBQUNMO1FBQU1FO0tBQWdCO0lBRTFCLDhDQUE4QztJQUM5QyxJQUFJSSxVQUFVO1FBQ1oscUJBQ0UsOERBQUNVO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDOztvQkFBRTtrQ0FFdUIsOERBQUNDO3dCQUFFQyxNQUFLO2tDQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJakU7SUFFQSxxQkFDRSw4REFBQ0o7UUFBSUMsV0FBVTs7WUFFWmpCLHNCQUNDLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQzFCLG1FQUFPQTs0QkFBQ1MsTUFBTUE7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ2dCOzswQ0FDQyw4REFBQ0s7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ2hDLDBFQUFVQTtnQ0FDVFcsTUFBTUE7Z0NBQ05FLGlCQUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU14QixDQUFDRSx5QkFDQSw4REFBQ2Qsd0VBQVNBO2dCQUNSVSxNQUFNQTtnQkFDTnNCLGdCQUFnQmI7Z0JBQ2hCYyxVQUFVOzs7Ozs7Ozs7Ozs7QUFLcEI7R0E3RXdCeEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb3QgZnJvbSBcIkAvdHlwZXMvZGF0YVwiO1xuaW1wb3J0IEFmZmljaGVNb3QgZnJvbSBcIkAvY29tcG9uZW50cy9hZmZpY2hlLW1vdC9BZmZpY2hlTW90XCI7XG5pbXBvcnQgSW5zZXJ0TW90IGZyb20gXCJAL2NvbXBvbmVudHMvaW5zZXJ0LW1vdC9JbnNlcnRNb3RcIjtcbmltcG9ydCBBYmFuZG9uIGZyb20gXCJAL2NvbXBvbmVudHMvYWJhbmRvbi9BYmFuZG9uXCI7XG5cbi8vIC0tLS0tLS0tLSBSw6ljdXDDqXJhdGlvbiBkZXMgZG9ubsOpZXMgZGUgbCdBUElcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKTogUHJvbWlzZTxNb3Q+IHtcbiAgLy8gQXBwZWwgw6AgbCdBUEkgZW4gbWV0aG9kIFBPU1RcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL25vZGUtaGFuZ21hbi1hcGktcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICB9KTtcbiAgaWYgKCFyZXMub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgZGF0YSwgbCdBUEkgbmUgZm9uY3Rpb25uZSBwYXNcIik7XG4gIH1cbiAgcmV0dXJuIHJlcy5qc29uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPE1vdCB8IG51bGw+KG51bGwpO1xuICAvLyDDiXRhdCBwb3VyIHN1aXZyZSBsZXMgbGV0dHJlcyBpbnPDqXLDqWVzXG4gIGNvbnN0IFtpbnNlcnRlZExldHRlcnMsIHNldEluc2VydGVkTGV0dGVyc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbdmljdG9yeSwgc2V0VmljdG9yeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBhcGlFcnJvciA9IHRydWU7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREYXRhKClcbiAgICAgIC50aGVuKHNldERhdGEpXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAvLyBTaSBpbCB5IGEgdW5lIGVycmV1ciBkZSByw6ljdXDDqXJhdGlvbiBkZSBsJ0FQSSwgYm9sZWVuIMOgIHRydWUgcG91ciBkaXJlIHF1J2lsIHkgYSB1biBwcm9ibMOobWVcbiAgICAgICAgYXBpRXJyb3IgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTGV0dGVySW5zZXJ0ID0gKGxldHRlcjogc3RyaW5nKSA9PiB7XG4gICAgLy8gTWV0dHJlIMOgIGpvdXIgbGVzIGxldHRyZXMgaW5zw6lyw6llcyBhdmVjIGxlcyBhbmNpZW5zXG4gICAgc2V0SW5zZXJ0ZWRMZXR0ZXJzKFsuLi5pbnNlcnRlZExldHRlcnMsIGxldHRlcl0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVsOpcmlmaWUgcXVlIGxlcyBkb25uw6llcyBzb2llbnQgYmllbiBwcsOpc2VudFxuICAgIGlmIChkYXRhKSB7XG4gICAgICAvLyBDb250aWVudCBsJ2Vuc2VtYmxlIGRlcyBsZXR0cmVzIGR1IGJvbiBtb3RzXG4gICAgICBjb25zdCBhbGxMZXR0ZXJzSW5zZXJ0ZWQgPSBkYXRhLndvcmRcbiAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgIC8vIENvbXBhcmUgbGVzIGxldHRyZXMgZHUgdnJhaWUgbW90IGF2ZWMgY2V1eCBpbnPDqXJlciBwYXIgbCd1dGlsaXNhdGV1ciBncsOiY2Ugw6AgbGEgZnVuY3Rpb24gZXZlcnlcbiAgICAgICAgLmV2ZXJ5KChsZXR0ZXIpID0+IGluc2VydGVkTGV0dGVycy5pbmNsdWRlcyhsZXR0ZXIpKTtcblxuICAgICAgLy8gTWV0IGwnw6l0YXQgdmljdG9pcmUgw6AgdHJ1ZSwgcGFyIHVzZVN0YXRlXG4gICAgICBpZiAoYWxsTGV0dGVyc0luc2VydGVkKSB7XG4gICAgICAgIHNldFZpY3RvcnkodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIMOAIGNoYXF1ZSBjaGFuZ2VtZW50LCBpbCB2w6lyaWZpZSBzaSBvbiBhIGdhZ25lciBvdSBub25cbiAgfSwgW2RhdGEsIGluc2VydGVkTGV0dGVyc10pO1xuXG4gIC8vIE1lc3NhZ2UgZCdlcnJldXIgc2kgbCdBUEkgbmUgZm9uY3Rpb25uZSBwYXNcbiAgaWYgKGFwaUVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VzdGlvbi1lcnJvclwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBMJ0FQSSBuZSBmb25jdGlvbm5lIHBhcywgdm91cyBwb3V2ZXogcmV2ZW5pciBwbHVzIHRhcmQuIE91IGJpZW5cbiAgICAgICAgICByZWdhcmRlciBjZSBwb3J0Zm9saW8gOiA8YSBocmVmPVwiaHR0cHM6Ly9uZXJvbGlwcmFrLmZyL1wiPlBvcnRmb2xpbzwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGxDb21wb25lbnRcIj5cbiAgICAgIHsvKiBTaSBsJ0FQSSBlc3QgYmllbiBjaGFyZ8OpLCBhbG9ycyBvbiBhZmZpY2hlIGxlIG1vdCDDoCBkZXZpbmVyICovfVxuICAgICAge2RhdGEgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtYWZmaWNoZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xhc3NBYmFuZG9uXCI+XG4gICAgICAgICAgICA8QWJhbmRvbiBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+TGUgamV1IGR1IHBlbmR1PC9oMT5cbiAgICAgICAgICAgIDxBZmZpY2hlTW90XG4gICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgIGluc2VydGVkTGV0dGVycz17aW5zZXJ0ZWRMZXR0ZXJzfVxuICAgICAgICAgICAgPjwvQWZmaWNoZU1vdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgey8qIFNpIGwndXRpbGlzYXRldXIgbidhIHBhcyBlbmNvcmUgZ2FnbsOpLCBhbG9ycyBpbCBwZXV0IGluc8OpcmVyICovfVxuICAgICAgeyF2aWN0b3J5ICYmIChcbiAgICAgICAgPEluc2VydE1vdFxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgb25MZXR0ZXJJbnNlcnQ9e2hhbmRsZUxldHRlckluc2VydH1cbiAgICAgICAgICBtYXhFc3NhaT17NX1cbiAgICAgICAgPjwvSW5zZXJ0TW90PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWZmaWNoZU1vdCIsIkluc2VydE1vdCIsIkFiYW5kb24iLCJnZXREYXRhIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJvayIsIkVycm9yIiwianNvbiIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImluc2VydGVkTGV0dGVycyIsInNldEluc2VydGVkTGV0dGVycyIsInZpY3RvcnkiLCJzZXRWaWN0b3J5IiwiYXBpRXJyb3IiLCJ0aGVuIiwiY2F0Y2giLCJoYW5kbGVMZXR0ZXJJbnNlcnQiLCJsZXR0ZXIiLCJhbGxMZXR0ZXJzSW5zZXJ0ZWQiLCJ3b3JkIiwic3BsaXQiLCJldmVyeSIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImEiLCJocmVmIiwiaDEiLCJvbkxldHRlckluc2VydCIsIm1heEVzc2FpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});