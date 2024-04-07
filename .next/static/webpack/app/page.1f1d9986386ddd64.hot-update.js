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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_affiche_mot_AfficheMot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/affiche-mot/AfficheMot */ \"(app-pages-browser)/./src/components/affiche-mot/AfficheMot.tsx\");\n/* harmony import */ var _components_insert_mot_InsertMot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/insert-mot/InsertMot */ \"(app-pages-browser)/./src/components/insert-mot/InsertMot.tsx\");\n/* harmony import */ var _components_abandon_Abandon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/abandon/Abandon */ \"(app-pages-browser)/./src/components/abandon/Abandon.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// --------- Récupération des données de l'API\nasync function getData() {\n    // Appel à l'API en method POST\n    const res = await fetch(\"https://node-hangman-api-production.up.railway.app/\", {\n        method: \"POST\"\n    });\n    if (!res.ok) {\n        throw new Error(\"Erreur data, l'API ne fonctionne pas\");\n    }\n    return res.json();\n}\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // État pour suivre les lettres insérées\n    const [insertedLetters, setInsertedLetters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [victory, setVictory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [apiError, setApiError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData().then(setData).catch(()=>{\n            // Si il y a une erreur de récupération de l'API, boleen à true pour dire qu'il y a un problème\n            setApiError(true);\n        });\n    }, []);\n    const handleLetterInsert = (letter)=>{\n        // Mettre à jour les lettres insérées avec les anciens\n        setInsertedLetters([\n            ...insertedLetters,\n            letter\n        ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Vérifie que les données soient bien présent\n        if (data) {\n            // Contient l'ensemble des lettres du bon mots\n            const allLettersInserted = data.word.split(\"\")// Compare les lettres du vraie mot avec ceux insérer par l'utilisateur grâce à la function every\n            .every((letter)=>insertedLetters.includes(letter));\n            // Met l'état victoire à true, par useState\n            if (allLettersInserted) {\n                setVictory(true);\n            }\n        }\n    // À chaque changement, il vérifie si on a gagner ou non\n    }, [\n        data,\n        insertedLetters\n    ]);\n    // Message d'erreur si l'API ne fonctionne pas\n    if (apiError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"gestion-error\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"L'API ne fonctionne pas, vous pouvez revenir plus tard. Ou bien regarder ce \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://neroliprak.fr/\",\n                        children: \"portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 23\n                    }, this),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"allComponent\",\n        children: [\n            data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrap-affiche\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"classAbandon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_abandon_Abandon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            data: data\n                        }, void 0, false, {\n                            fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Le jeu du pendu\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_affiche_mot_AfficheMot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: data,\n                                insertedLetters: insertedLetters\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this),\n            !victory && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_insert_mot_InsertMot__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data !== null && data !== void 0 ? data : {\n                    word: \"\"\n                },\n                onLetterInsert: handleLetterInsert,\n                maxEssai: 7\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"x7TE/FYSpnl5DKp2NVhc+D8Ox84=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBRVU7QUFDSDtBQUNQO0FBRW5ELDhDQUE4QztBQUM5QyxlQUFlTTtJQUNiLCtCQUErQjtJQUMvQixNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLHVEQUNBO1FBQ0VDLFFBQVE7SUFDVjtJQUVGLElBQUksQ0FBQ0YsSUFBSUcsRUFBRSxFQUFFO1FBQ1gsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0osSUFBSUssSUFBSTtBQUNqQjtBQUVlLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQWE7SUFDN0Msd0NBQXdDO0lBQ3hDLE1BQU0sQ0FBQ2UsaUJBQWlCQyxtQkFBbUIsR0FBR2hCLCtDQUFRQSxDQUFXLEVBQUU7SUFDbkUsTUFBTSxDQUFDaUIsU0FBU0MsV0FBVyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDbUIsVUFBVUMsWUFBWSxHQUFHcEIsK0NBQVFBLENBQUM7SUFFekNDLGdEQUFTQSxDQUFDO1FBQ1JJLFVBQ0dnQixJQUFJLENBQUNQLFNBQ0xRLEtBQUssQ0FBQztZQUNMLCtGQUErRjtZQUMvRkYsWUFBWTtRQUNkO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUcscUJBQXFCLENBQUNDO1FBQzFCLHNEQUFzRDtRQUN0RFIsbUJBQW1CO2VBQUlEO1lBQWlCUztTQUFPO0lBQ2pEO0lBRUF2QixnREFBU0EsQ0FBQztRQUNSLDhDQUE4QztRQUM5QyxJQUFJWSxNQUFNO1lBQ1IsOENBQThDO1lBQzlDLE1BQU1ZLHFCQUFxQlosS0FBS2EsSUFBSSxDQUNqQ0MsS0FBSyxDQUFDLEdBQ1AsaUdBQWlHO2FBQ2hHQyxLQUFLLENBQUMsQ0FBQ0osU0FBV1QsZ0JBQWdCYyxRQUFRLENBQUNMO1lBRTlDLDJDQUEyQztZQUMzQyxJQUFJQyxvQkFBb0I7Z0JBQ3RCUCxXQUFXO1lBQ2I7UUFDRjtJQUNBLHdEQUF3RDtJQUMxRCxHQUFHO1FBQUNMO1FBQU1FO0tBQWdCO0lBRTFCLDhDQUE4QztJQUM5QyxJQUFJSSxVQUFVO1FBQ1oscUJBQ0UsOERBQUNXO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDOztvQkFBRTtrQ0FFVyw4REFBQ0M7d0JBQUVDLE1BQUs7a0NBQXlCOzs7Ozs7b0JBQWE7Ozs7Ozs7Ozs7OztJQUlsRTtJQUVBLHFCQUNFLDhEQUFDSjtRQUFJQyxXQUFVOztZQUVabEIsc0JBQ0MsOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDM0IsbUVBQU9BOzRCQUFDUyxNQUFNQTs7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDaUI7OzBDQUNDLDhEQUFDSzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDakMsMEVBQVVBO2dDQUNUVyxNQUFNQTtnQ0FDTkUsaUJBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTXhCLENBQUNFLHlCQUNBLDhEQUFDZCx3RUFBU0E7Z0JBQ1JVLE1BQU1BLGlCQUFBQSxrQkFBQUEsT0FBUTtvQkFBRWEsTUFBTTtnQkFBRztnQkFDekJVLGdCQUFnQmI7Z0JBQ2hCYyxVQUFVOzs7Ozs7Ozs7Ozs7QUFLcEI7R0E3RXdCekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb3QgZnJvbSBcIkAvdHlwZXMvZGF0YVwiO1xuaW1wb3J0IEFmZmljaGVNb3QgZnJvbSBcIkAvY29tcG9uZW50cy9hZmZpY2hlLW1vdC9BZmZpY2hlTW90XCI7XG5pbXBvcnQgSW5zZXJ0TW90IGZyb20gXCJAL2NvbXBvbmVudHMvaW5zZXJ0LW1vdC9JbnNlcnRNb3RcIjtcbmltcG9ydCBBYmFuZG9uIGZyb20gXCJAL2NvbXBvbmVudHMvYWJhbmRvbi9BYmFuZG9uXCI7XG5cbi8vIC0tLS0tLS0tLSBSw6ljdXDDqXJhdGlvbiBkZXMgZG9ubsOpZXMgZGUgbCdBUElcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKTogUHJvbWlzZTxNb3Q+IHtcbiAgLy8gQXBwZWwgw6AgbCdBUEkgZW4gbWV0aG9kIFBPU1RcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL25vZGUtaGFuZ21hbi1hcGktcHJvZHVjdGlvbi51cC5yYWlsd2F5LmFwcC9cIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIH1cbiAgKTtcbiAgaWYgKCFyZXMub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgZGF0YSwgbCdBUEkgbmUgZm9uY3Rpb25uZSBwYXNcIik7XG4gIH1cbiAgcmV0dXJuIHJlcy5qc29uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPE1vdCB8IG51bGw+KG51bGwpO1xuICAvLyDDiXRhdCBwb3VyIHN1aXZyZSBsZXMgbGV0dHJlcyBpbnPDqXLDqWVzXG4gIGNvbnN0IFtpbnNlcnRlZExldHRlcnMsIHNldEluc2VydGVkTGV0dGVyc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbdmljdG9yeSwgc2V0VmljdG9yeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthcGlFcnJvciwgc2V0QXBpRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YSgpXG4gICAgICAudGhlbihzZXREYXRhKVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgLy8gU2kgaWwgeSBhIHVuZSBlcnJldXIgZGUgcsOpY3Vww6lyYXRpb24gZGUgbCdBUEksIGJvbGVlbiDDoCB0cnVlIHBvdXIgZGlyZSBxdSdpbCB5IGEgdW4gcHJvYmzDqG1lXG4gICAgICAgIHNldEFwaUVycm9yKHRydWUpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVMZXR0ZXJJbnNlcnQgPSAobGV0dGVyOiBzdHJpbmcpID0+IHtcbiAgICAvLyBNZXR0cmUgw6Agam91ciBsZXMgbGV0dHJlcyBpbnPDqXLDqWVzIGF2ZWMgbGVzIGFuY2llbnNcbiAgICBzZXRJbnNlcnRlZExldHRlcnMoWy4uLmluc2VydGVkTGV0dGVycywgbGV0dGVyXSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBWw6lyaWZpZSBxdWUgbGVzIGRvbm7DqWVzIHNvaWVudCBiaWVuIHByw6lzZW50XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIC8vIENvbnRpZW50IGwnZW5zZW1ibGUgZGVzIGxldHRyZXMgZHUgYm9uIG1vdHNcbiAgICAgIGNvbnN0IGFsbExldHRlcnNJbnNlcnRlZCA9IGRhdGEud29yZFxuICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgLy8gQ29tcGFyZSBsZXMgbGV0dHJlcyBkdSB2cmFpZSBtb3QgYXZlYyBjZXV4IGluc8OpcmVyIHBhciBsJ3V0aWxpc2F0ZXVyIGdyw6JjZSDDoCBsYSBmdW5jdGlvbiBldmVyeVxuICAgICAgICAuZXZlcnkoKGxldHRlcikgPT4gaW5zZXJ0ZWRMZXR0ZXJzLmluY2x1ZGVzKGxldHRlcikpO1xuXG4gICAgICAvLyBNZXQgbCfDqXRhdCB2aWN0b2lyZSDDoCB0cnVlLCBwYXIgdXNlU3RhdGVcbiAgICAgIGlmIChhbGxMZXR0ZXJzSW5zZXJ0ZWQpIHtcbiAgICAgICAgc2V0VmljdG9yeSh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gw4AgY2hhcXVlIGNoYW5nZW1lbnQsIGlsIHbDqXJpZmllIHNpIG9uIGEgZ2FnbmVyIG91IG5vblxuICB9LCBbZGF0YSwgaW5zZXJ0ZWRMZXR0ZXJzXSk7XG5cbiAgLy8gTWVzc2FnZSBkJ2VycmV1ciBzaSBsJ0FQSSBuZSBmb25jdGlvbm5lIHBhc1xuICBpZiAoYXBpRXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZXN0aW9uLWVycm9yXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEwnQVBJIG5lIGZvbmN0aW9ubmUgcGFzLCB2b3VzIHBvdXZleiByZXZlbmlyIHBsdXMgdGFyZC4gT3UgYmllblxuICAgICAgICAgIHJlZ2FyZGVyIGNlIDxhIGhyZWY9XCJodHRwczovL25lcm9saXByYWsuZnIvXCI+cG9ydGZvbGlvPC9hPi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGxDb21wb25lbnRcIj5cbiAgICAgIHsvKiBTaSBsJ0FQSSBlc3QgYmllbiBjaGFyZ8OpLCBhbG9ycyBvbiBhZmZpY2hlIGxlIG1vdCDDoCBkZXZpbmVyICovfVxuICAgICAge2RhdGEgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtYWZmaWNoZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xhc3NBYmFuZG9uXCI+XG4gICAgICAgICAgICA8QWJhbmRvbiBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+TGUgamV1IGR1IHBlbmR1PC9oMT5cbiAgICAgICAgICAgIDxBZmZpY2hlTW90XG4gICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgIGluc2VydGVkTGV0dGVycz17aW5zZXJ0ZWRMZXR0ZXJzfVxuICAgICAgICAgICAgPjwvQWZmaWNoZU1vdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgey8qIFNpIGwndXRpbGlzYXRldXIgbidhIHBhcyBlbmNvcmUgZ2FnbsOpLCBhbG9ycyBpbCBwZXV0IGluc8OpcmVyICovfVxuICAgICAgeyF2aWN0b3J5ICYmIChcbiAgICAgICAgPEluc2VydE1vdFxuICAgICAgICAgIGRhdGE9e2RhdGEgPz8geyB3b3JkOiBcIlwiIH19XG4gICAgICAgICAgb25MZXR0ZXJJbnNlcnQ9e2hhbmRsZUxldHRlckluc2VydH1cbiAgICAgICAgICBtYXhFc3NhaT17N31cbiAgICAgICAgPjwvSW5zZXJ0TW90PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQWZmaWNoZU1vdCIsIkluc2VydE1vdCIsIkFiYW5kb24iLCJnZXREYXRhIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJvayIsIkVycm9yIiwianNvbiIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImluc2VydGVkTGV0dGVycyIsInNldEluc2VydGVkTGV0dGVycyIsInZpY3RvcnkiLCJzZXRWaWN0b3J5IiwiYXBpRXJyb3IiLCJzZXRBcGlFcnJvciIsInRoZW4iLCJjYXRjaCIsImhhbmRsZUxldHRlckluc2VydCIsImxldHRlciIsImFsbExldHRlcnNJbnNlcnRlZCIsIndvcmQiLCJzcGxpdCIsImV2ZXJ5IiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYSIsImhyZWYiLCJoMSIsIm9uTGV0dGVySW5zZXJ0IiwibWF4RXNzYWkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});