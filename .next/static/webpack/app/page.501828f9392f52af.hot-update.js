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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_affiche_mot_AfficheMot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/affiche-mot/AfficheMot */ \"(app-pages-browser)/./src/components/affiche-mot/AfficheMot.tsx\");\n/* harmony import */ var _components_insert_mot_InsertMot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/insert-mot/InsertMot */ \"(app-pages-browser)/./src/components/insert-mot/InsertMot.tsx\");\n/* harmony import */ var _components_abandon_Abandon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/abandon/Abandon */ \"(app-pages-browser)/./src/components/abandon/Abandon.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// --------- Récupération des données de l'API\nasync function getData() {\n    // Appel à l'API en method POST\n    const res = await fetch(\"https://node-hangman-api-production.up.railway.ap\", {\n        method: \"POST\"\n    });\n    if (!res.ok) {\n        throw new Error(\"Erreur data, l'API ne fonctionne pas\");\n    }\n    return res.json();\n}\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // État pour suivre les lettres insérées\n    const [insertedLetters, setInsertedLetters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [victory, setVictory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let apiError = true;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData().then(setData).catch(()=>{\n            // Si il y a une erreur de récupération de l'API, boleen à true pour dire qu'il y a un problème\n            apiError = false;\n        });\n    }, []);\n    const handleLetterInsert = (letter)=>{\n        // Mettre à jour les lettres insérées avec les anciens\n        setInsertedLetters([\n            ...insertedLetters,\n            letter\n        ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Vérifie que les données soient bien présent\n        if (data) {\n            // Contient l'ensemble des lettres du bon mots\n            const allLettersInserted = data.word.split(\"\")// Compare les lettres du vraie mot avec ceux insérer par l'utilisateur grâce à la function every\n            .every((letter)=>insertedLetters.includes(letter));\n            // Met l'état victoire à true, par useState\n            if (allLettersInserted) {\n                setVictory(true);\n            }\n        }\n    // À chaque changement, il vérifie si on a gagner ou non\n    }, [\n        data,\n        insertedLetters\n    ]);\n    // Message d'erreur si l'API ne fonctionne pas\n    if (apiError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"L'API ne fonctionne pas, vous pouvez revenir plus tard.\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"allComponent\",\n        children: [\n            data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrap-affiche\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"classAbandon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_abandon_Abandon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            data: data\n                        }, void 0, false, {\n                            fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Le jeu du pendu\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_affiche_mot_AfficheMot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: data,\n                                insertedLetters: insertedLetters\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this),\n            !victory && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_insert_mot_InsertMot__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data,\n                onLetterInsert: handleLetterInsert,\n                maxEssai: 5\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hangman/src/app/page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"O4JofmXrmxyhxxmOBQF01mdBtYE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21EO0FBRVU7QUFDSDtBQUNQO0FBRW5ELDhDQUE4QztBQUM5QyxlQUFlTTtJQUNiLCtCQUErQjtJQUMvQixNQUFNQyxNQUFNLE1BQU1DLE1BQU0scURBQXFEO1FBQzNFQyxRQUFRO0lBQ1Y7SUFDQSxJQUFJLENBQUNGLElBQUlHLEVBQUUsRUFBRTtRQUNYLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9KLElBQUlLLElBQUk7QUFDakI7QUFFZSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFhO0lBQzdDLHdDQUF3QztJQUN4QyxNQUFNLENBQUNlLGlCQUFpQkMsbUJBQW1CLEdBQUdoQiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ25FLE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3ZDLElBQUltQixXQUFXO0lBRWZsQixnREFBU0EsQ0FBQztRQUNSSSxVQUNHZSxJQUFJLENBQUNOLFNBQ0xPLEtBQUssQ0FBQztZQUNMLCtGQUErRjtZQUMvRkYsV0FBVztRQUNiO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUcscUJBQXFCLENBQUNDO1FBQzFCLHNEQUFzRDtRQUN0RFAsbUJBQW1CO2VBQUlEO1lBQWlCUTtTQUFPO0lBQ2pEO0lBRUF0QixnREFBU0EsQ0FBQztRQUNSLDhDQUE4QztRQUM5QyxJQUFJWSxNQUFNO1lBQ1IsOENBQThDO1lBQzlDLE1BQU1XLHFCQUFxQlgsS0FBS1ksSUFBSSxDQUNqQ0MsS0FBSyxDQUFDLEdBQ1AsaUdBQWlHO2FBQ2hHQyxLQUFLLENBQUMsQ0FBQ0osU0FBV1IsZ0JBQWdCYSxRQUFRLENBQUNMO1lBRTlDLDJDQUEyQztZQUMzQyxJQUFJQyxvQkFBb0I7Z0JBQ3RCTixXQUFXO1lBQ2I7UUFDRjtJQUNBLHdEQUF3RDtJQUMxRCxHQUFHO1FBQUNMO1FBQU1FO0tBQWdCO0lBRTFCLDhDQUE4QztJQUM5QyxJQUFJSSxVQUFVO1FBQ1oscUJBQ0UsOERBQUNVO3NCQUNDLDRFQUFDQzswQkFBRTs7Ozs7Ozs7Ozs7SUFHVDtJQUVBLHFCQUNFLDhEQUFDRDtRQUFJRSxXQUFVOztZQUVabEIsc0JBQ0MsOERBQUNnQjtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNGO3dCQUFJRSxXQUFVO2tDQUNiLDRFQUFDM0IsbUVBQU9BOzRCQUFDUyxNQUFNQTs7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDZ0I7OzBDQUNDLDhEQUFDRzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDOUIsMEVBQVVBO2dDQUNUVyxNQUFNQTtnQ0FDTkUsaUJBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTXhCLENBQUNFLHlCQUNBLDhEQUFDZCx3RUFBU0E7Z0JBQ1JVLE1BQU1BO2dCQUNOb0IsZ0JBQWdCWDtnQkFDaEJZLFVBQVU7Ozs7Ozs7Ozs7OztBQUtwQjtHQTFFd0J0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vdCBmcm9tIFwiQC90eXBlcy9kYXRhXCI7XG5pbXBvcnQgQWZmaWNoZU1vdCBmcm9tIFwiQC9jb21wb25lbnRzL2FmZmljaGUtbW90L0FmZmljaGVNb3RcIjtcbmltcG9ydCBJbnNlcnRNb3QgZnJvbSBcIkAvY29tcG9uZW50cy9pbnNlcnQtbW90L0luc2VydE1vdFwiO1xuaW1wb3J0IEFiYW5kb24gZnJvbSBcIkAvY29tcG9uZW50cy9hYmFuZG9uL0FiYW5kb25cIjtcblxuLy8gLS0tLS0tLS0tIFLDqWN1cMOpcmF0aW9uIGRlcyBkb25uw6llcyBkZSBsJ0FQSVxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpOiBQcm9taXNlPE1vdD4ge1xuICAvLyBBcHBlbCDDoCBsJ0FQSSBlbiBtZXRob2QgUE9TVFxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbm9kZS1oYW5nbWFuLWFwaS1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gIH0pO1xuICBpZiAoIXJlcy5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBkYXRhLCBsJ0FQSSBuZSBmb25jdGlvbm5lIHBhc1wiKTtcbiAgfVxuICByZXR1cm4gcmVzLmpzb24oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8TW90IHwgbnVsbD4obnVsbCk7XG4gIC8vIMOJdGF0IHBvdXIgc3VpdnJlIGxlcyBsZXR0cmVzIGluc8OpcsOpZXNcbiAgY29uc3QgW2luc2VydGVkTGV0dGVycywgc2V0SW5zZXJ0ZWRMZXR0ZXJzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFt2aWN0b3J5LCBzZXRWaWN0b3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IGFwaUVycm9yID0gdHJ1ZTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERhdGEoKVxuICAgICAgLnRoZW4oc2V0RGF0YSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIC8vIFNpIGlsIHkgYSB1bmUgZXJyZXVyIGRlIHLDqWN1cMOpcmF0aW9uIGRlIGwnQVBJLCBib2xlZW4gw6AgdHJ1ZSBwb3VyIGRpcmUgcXUnaWwgeSBhIHVuIHByb2Jsw6htZVxuICAgICAgICBhcGlFcnJvciA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVMZXR0ZXJJbnNlcnQgPSAobGV0dGVyOiBzdHJpbmcpID0+IHtcbiAgICAvLyBNZXR0cmUgw6Agam91ciBsZXMgbGV0dHJlcyBpbnPDqXLDqWVzIGF2ZWMgbGVzIGFuY2llbnNcbiAgICBzZXRJbnNlcnRlZExldHRlcnMoWy4uLmluc2VydGVkTGV0dGVycywgbGV0dGVyXSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBWw6lyaWZpZSBxdWUgbGVzIGRvbm7DqWVzIHNvaWVudCBiaWVuIHByw6lzZW50XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIC8vIENvbnRpZW50IGwnZW5zZW1ibGUgZGVzIGxldHRyZXMgZHUgYm9uIG1vdHNcbiAgICAgIGNvbnN0IGFsbExldHRlcnNJbnNlcnRlZCA9IGRhdGEud29yZFxuICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgLy8gQ29tcGFyZSBsZXMgbGV0dHJlcyBkdSB2cmFpZSBtb3QgYXZlYyBjZXV4IGluc8OpcmVyIHBhciBsJ3V0aWxpc2F0ZXVyIGdyw6JjZSDDoCBsYSBmdW5jdGlvbiBldmVyeVxuICAgICAgICAuZXZlcnkoKGxldHRlcikgPT4gaW5zZXJ0ZWRMZXR0ZXJzLmluY2x1ZGVzKGxldHRlcikpO1xuXG4gICAgICAvLyBNZXQgbCfDqXRhdCB2aWN0b2lyZSDDoCB0cnVlLCBwYXIgdXNlU3RhdGVcbiAgICAgIGlmIChhbGxMZXR0ZXJzSW5zZXJ0ZWQpIHtcbiAgICAgICAgc2V0VmljdG9yeSh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gw4AgY2hhcXVlIGNoYW5nZW1lbnQsIGlsIHbDqXJpZmllIHNpIG9uIGEgZ2FnbmVyIG91IG5vblxuICB9LCBbZGF0YSwgaW5zZXJ0ZWRMZXR0ZXJzXSk7XG5cbiAgLy8gTWVzc2FnZSBkJ2VycmV1ciBzaSBsJ0FQSSBuZSBmb25jdGlvbm5lIHBhc1xuICBpZiAoYXBpRXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+TCdBUEkgbmUgZm9uY3Rpb25uZSBwYXMsIHZvdXMgcG91dmV6IHJldmVuaXIgcGx1cyB0YXJkLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsQ29tcG9uZW50XCI+XG4gICAgICB7LyogU2kgbCdBUEkgZXN0IGJpZW4gY2hhcmfDqSwgYWxvcnMgb24gYWZmaWNoZSBsZSBtb3Qgw6AgZGV2aW5lciAqL31cbiAgICAgIHtkYXRhICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWFmZmljaGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsYXNzQWJhbmRvblwiPlxuICAgICAgICAgICAgPEFiYW5kb24gZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkxlIGpldSBkdSBwZW5kdTwvaDE+XG4gICAgICAgICAgICA8QWZmaWNoZU1vdFxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICBpbnNlcnRlZExldHRlcnM9e2luc2VydGVkTGV0dGVyc31cbiAgICAgICAgICAgID48L0FmZmljaGVNb3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHsvKiBTaSBsJ3V0aWxpc2F0ZXVyIG4nYSBwYXMgZW5jb3JlIGdhZ27DqSwgYWxvcnMgaWwgcGV1dCBpbnPDqXJlciAqL31cbiAgICAgIHshdmljdG9yeSAmJiAoXG4gICAgICAgIDxJbnNlcnRNb3RcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIG9uTGV0dGVySW5zZXJ0PXtoYW5kbGVMZXR0ZXJJbnNlcnR9XG4gICAgICAgICAgbWF4RXNzYWk9ezV9XG4gICAgICAgID48L0luc2VydE1vdD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFmZmljaGVNb3QiLCJJbnNlcnRNb3QiLCJBYmFuZG9uIiwiZ2V0RGF0YSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwib2siLCJFcnJvciIsImpzb24iLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJpbnNlcnRlZExldHRlcnMiLCJzZXRJbnNlcnRlZExldHRlcnMiLCJ2aWN0b3J5Iiwic2V0VmljdG9yeSIsImFwaUVycm9yIiwidGhlbiIsImNhdGNoIiwiaGFuZGxlTGV0dGVySW5zZXJ0IiwibGV0dGVyIiwiYWxsTGV0dGVyc0luc2VydGVkIiwid29yZCIsInNwbGl0IiwiZXZlcnkiLCJpbmNsdWRlcyIsImRpdiIsInAiLCJjbGFzc05hbWUiLCJoMSIsIm9uTGV0dGVySW5zZXJ0IiwibWF4RXNzYWkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});