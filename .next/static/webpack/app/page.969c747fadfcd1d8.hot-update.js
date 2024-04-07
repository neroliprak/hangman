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

/***/ "(app-pages-browser)/./src/components/insert-mot/InsertMot.tsx":
/*!*************************************************!*\
  !*** ./src/components/insert-mot/InsertMot.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InsertMot: function() { return /* binding */ InsertMot; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _insert_mot_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insert-mot.css */ \"(app-pages-browser)/./src/components/insert-mot/insert-mot.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst InsertMot = (param)=>{\n    let { data, onLetterInsert, maxEssai } = param;\n    _s();\n    // Tableau contenant les différentes lettres insérés, initialisé à un tableau vide\n    const [tabLetters, setTabLetters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Pour accéder à la lettre de l'input, initialisé à rien\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Compteur d'essai\n    const [essai, setEssai] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(maxEssai);\n    //   Gestion d'événement au soumission du formulaire\n    const handleSubmit = (event)=>{\n        // ___Évite le rechargement de page\n        event.preventDefault();\n        // ___Récupère la valeur sans les espaces en trop (finalement inutile, puisque j'ai mis maxLength = {1}...)\n        if (!inputRef.current || !inputRef.current.value.trim()) return;\n        const value = inputRef.current.value.trim();\n        // ___Je vérifie si les lettres insérés par l'utilisateur ne l'a pas déjà été, en regardant dans son historique (tabLetters)\n        if (tabLetters.includes(value)) {\n            alert(\"La lettre a d\\xe9j\\xe0 \\xe9t\\xe9 ins\\xe9r\\xe9e\");\n            return;\n        }\n        // Je vérifie le nombre d'essaie de l'utilisateur\n        if (essai <= 0) {\n            alert(\"Vous avez d\\xe9pass\\xe9 la limite d'essai: \".concat(maxEssai));\n            return;\n        }\n        setTabLetters((prevTabLetters)=>[\n                ...prevTabLetters,\n                value\n            ]);\n        inputRef.current.value = \"\";\n        onLetterInsert(value);\n        const isCorrect = isLetterCorrect(value);\n        // À chaque essai de l'utilisateur, il augmente de 1, si il a bon, il ne décrémente pas\n        if (!isCorrect) {\n            setEssai(essai - 1);\n        }\n    };\n    const isLetterCorrect = (letter)=>{\n        return data.word.includes(letter);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            essai <= 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"defaite\",\n                children: [\n                    \"Vous avez perdu, le mot \\xe9tait : \",\n                    data.word\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrap-insert-mot\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"insert-mot-form\",\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"color-red\",\n                                children: [\n                                    \"Votre nombre d'essais restant : \",\n                                    essai\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"mot\",\n                                children: \"Entrez une lettre :\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"mot\",\n                                maxLength: 1,\n                                ref: inputRef\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Ajouter\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"wrap-idependant-letter\",\n                        children: tabLetters.map((letter, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"independant-letter \".concat(isLetterCorrect(letter) ? \"correct\" : \"\"),\n                                children: letter\n                            }, index, false, {\n                                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InsertMot, \"SfAQL3aOiQMsROqGIGTLn/Gl21M=\");\n_c = InsertMot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InsertMot);\nvar _c;\n$RefreshReg$(_c, \"InsertMot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2luc2VydC1tb3QvSW5zZXJ0TW90LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBQ3RCO0FBR25CLE1BQU1HLFlBQVk7UUFBQyxFQUN4QkMsSUFBSSxFQUNKQyxjQUFjLEVBQ2RDLFFBQVEsRUFLVDs7SUFDQyxrRkFBa0Y7SUFDbEYsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFXLEVBQUU7SUFDekQseURBQXlEO0lBQ3pELE1BQU1RLFdBQVdQLDZDQUFNQSxDQUFtQjtJQUMxQyxtQkFBbUI7SUFDbkIsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDSztJQUVuQyxvREFBb0Q7SUFDcEQsTUFBTU0sZUFBd0QsQ0FBQ0M7UUFDN0QsbUNBQW1DO1FBQ25DQSxNQUFNQyxjQUFjO1FBQ3BCLDJHQUEyRztRQUMzRyxJQUFJLENBQUNMLFNBQVNNLE9BQU8sSUFBSSxDQUFDTixTQUFTTSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxJQUFJO1FBQ3pELE1BQU1ELFFBQVFQLFNBQVNNLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJO1FBQ3pDLDRIQUE0SDtRQUM1SCxJQUFJVixXQUFXVyxRQUFRLENBQUNGLFFBQVE7WUFDOUJHLE1BQU07WUFDTjtRQUNGO1FBQ0EsaURBQWlEO1FBQ2pELElBQUlULFNBQVMsR0FBRztZQUNkUyxNQUFNLDhDQUFpRCxPQUFUYjtZQUM5QztRQUNGO1FBQ0FFLGNBQWMsQ0FBQ1ksaUJBQW1CO21CQUFJQTtnQkFBZ0JKO2FBQU07UUFDNURQLFNBQVNNLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHO1FBQ3pCWCxlQUFlVztRQUVmLE1BQU1LLFlBQVlDLGdCQUFnQk47UUFFbEMsdUZBQXVGO1FBQ3ZGLElBQUksQ0FBQ0ssV0FBVztZQUNkVixTQUFTRCxRQUFRO1FBQ25CO0lBQ0Y7SUFDQSxNQUFNWSxrQkFBa0IsQ0FBQ0M7UUFDdkIsT0FBT25CLEtBQUtvQixJQUFJLENBQUNOLFFBQVEsQ0FBQ0s7SUFDNUI7SUFDQSxxQkFDRSw4REFBQ0U7O1lBQ0VmLFNBQVMsbUJBQ1IsOERBQUNnQjtnQkFBRUMsV0FBVTs7b0JBQVU7b0JBQWlDdkIsS0FBS29CLElBQUk7Ozs7Ozs7MEJBRW5FLDhEQUFDQztnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFLRCxXQUFVO3dCQUFrQkUsVUFBVWpCOzswQ0FDMUMsOERBQUNjO2dDQUFFQyxXQUFVOztvQ0FBWTtvQ0FBaUNqQjs7Ozs7OzswQ0FDMUQsOERBQUNvQjs7Ozs7MENBQ0QsOERBQUNBOzs7OzswQ0FDRCw4REFBQ0M7Z0NBQU1DLFNBQVE7MENBQU07Ozs7OzswQ0FDckIsOERBQUNGOzs7OzswQ0FDRCw4REFBQ0c7Z0NBQU1DLE1BQUs7Z0NBQU9DLElBQUc7Z0NBQU1DLFdBQVc7Z0NBQUdDLEtBQUs1Qjs7Ozs7OzBDQUMvQyw4REFBQ3FCOzs7OzswQ0FDRCw4REFBQ1E7Z0NBQU9KLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7OztrQ0FFeEIsOERBQUNUO3dCQUFJRSxXQUFVO2tDQUVacEIsV0FBV2dDLEdBQUcsQ0FBQyxDQUFDaEIsUUFBUWlCLHNCQUN2Qiw4REFBQ2Q7Z0NBRUNDLFdBQVcsc0JBRVYsT0FEQ0wsZ0JBQWdCQyxVQUFVLFlBQVk7MENBR3ZDQTsrQkFMSWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWW5CLEVBQUU7R0EvRVdyQztLQUFBQTtBQWlGYiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbnNlcnQtbW90L0luc2VydE1vdC50c3g/MmVmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9pbnNlcnQtbW90LmNzc1wiO1xuaW1wb3J0IE1vdCBmcm9tIFwiQC90eXBlcy9kYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBJbnNlcnRNb3QgPSAoe1xuICBkYXRhLFxuICBvbkxldHRlckluc2VydCxcbiAgbWF4RXNzYWksXG59OiB7XG4gIGRhdGE6IE1vdDtcbiAgb25MZXR0ZXJJbnNlcnQ6IChsZXR0ZXI6IHN0cmluZykgPT4gdm9pZDtcbiAgbWF4RXNzYWk6IG51bWJlcjtcbn0pID0+IHtcbiAgLy8gVGFibGVhdSBjb250ZW5hbnQgbGVzIGRpZmbDqXJlbnRlcyBsZXR0cmVzIGluc8OpcsOpcywgaW5pdGlhbGlzw6kgw6AgdW4gdGFibGVhdSB2aWRlXG4gIGNvbnN0IFt0YWJMZXR0ZXJzLCBzZXRUYWJMZXR0ZXJzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIC8vIFBvdXIgYWNjw6lkZXIgw6AgbGEgbGV0dHJlIGRlIGwnaW5wdXQsIGluaXRpYWxpc8OpIMOgIHJpZW5cbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIC8vIENvbXB0ZXVyIGQnZXNzYWlcbiAgY29uc3QgW2Vzc2FpLCBzZXRFc3NhaV0gPSB1c2VTdGF0ZShtYXhFc3NhaSk7XG5cbiAgLy8gICBHZXN0aW9uIGQnw6l2w6luZW1lbnQgYXUgc291bWlzc2lvbiBkdSBmb3JtdWxhaXJlXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdDogUmVhY3QuRm9ybUV2ZW50SGFuZGxlcjxIVE1MRm9ybUVsZW1lbnQ+ID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gX19fw4l2aXRlIGxlIHJlY2hhcmdlbWVudCBkZSBwYWdlXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBfX19Sw6ljdXDDqHJlIGxhIHZhbGV1ciBzYW5zIGxlcyBlc3BhY2VzIGVuIHRyb3AgKGZpbmFsZW1lbnQgaW51dGlsZSwgcHVpc3F1ZSBqJ2FpIG1pcyBtYXhMZW5ndGggPSB7MX0uLi4pXG4gICAgaWYgKCFpbnB1dFJlZi5jdXJyZW50IHx8ICFpbnB1dFJlZi5jdXJyZW50LnZhbHVlLnRyaW0oKSkgcmV0dXJuO1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXRSZWYuY3VycmVudC52YWx1ZS50cmltKCk7XG4gICAgLy8gX19fSmUgdsOpcmlmaWUgc2kgbGVzIGxldHRyZXMgaW5zw6lyw6lzIHBhciBsJ3V0aWxpc2F0ZXVyIG5lIGwnYSBwYXMgZMOpasOgIMOpdMOpLCBlbiByZWdhcmRhbnQgZGFucyBzb24gaGlzdG9yaXF1ZSAodGFiTGV0dGVycylcbiAgICBpZiAodGFiTGV0dGVycy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIGFsZXJ0KFwiTGEgbGV0dHJlIGEgZMOpasOgIMOpdMOpIGluc8OpcsOpZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSmUgdsOpcmlmaWUgbGUgbm9tYnJlIGQnZXNzYWllIGRlIGwndXRpbGlzYXRldXJcbiAgICBpZiAoZXNzYWkgPD0gMCkge1xuICAgICAgYWxlcnQoYFZvdXMgYXZleiBkw6lwYXNzw6kgbGEgbGltaXRlIGQnZXNzYWk6ICR7bWF4RXNzYWl9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRhYkxldHRlcnMoKHByZXZUYWJMZXR0ZXJzKSA9PiBbLi4ucHJldlRhYkxldHRlcnMsIHZhbHVlXSk7XG4gICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XG4gICAgb25MZXR0ZXJJbnNlcnQodmFsdWUpO1xuXG4gICAgY29uc3QgaXNDb3JyZWN0ID0gaXNMZXR0ZXJDb3JyZWN0KHZhbHVlKTtcblxuICAgIC8vIMOAIGNoYXF1ZSBlc3NhaSBkZSBsJ3V0aWxpc2F0ZXVyLCBpbCBhdWdtZW50ZSBkZSAxLCBzaSBpbCBhIGJvbiwgaWwgbmUgZMOpY3LDqW1lbnRlIHBhc1xuICAgIGlmICghaXNDb3JyZWN0KSB7XG4gICAgICBzZXRFc3NhaShlc3NhaSAtIDEpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaXNMZXR0ZXJDb3JyZWN0ID0gKGxldHRlcjogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGRhdGEud29yZC5pbmNsdWRlcyhsZXR0ZXIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZXNzYWkgPD0gMCAmJiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlZmFpdGVcIj5Wb3VzIGF2ZXogcGVyZHUsIGxlIG1vdCDDqXRhaXQgOiB7ZGF0YS53b3JkfTwvcD5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtaW5zZXJ0LW1vdFwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbnNlcnQtbW90LWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2xvci1yZWRcIj5Wb3RyZSBub21icmUgZCdlc3NhaXMgcmVzdGFudCA6IHtlc3NhaX08L3A+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtb3RcIj5FbnRyZXogdW5lIGxldHRyZSA6PC9sYWJlbD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1vdFwiIG1heExlbmd0aD17MX0gcmVmPXtpbnB1dFJlZn0gLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Bam91dGVyPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWlkZXBlbmRhbnQtbGV0dGVyXCI+XG4gICAgICAgICAgey8qIEplIHBhcmNvdXJzIHRhYkxldHRlcnMgcG91ciBhZmZpY2hlciBsZXMgbGV0dHJlcyBpbnPDqXLDqXMgcGFyIGwndXRpbGlzYXRldXIgKi99XG4gICAgICAgICAge3RhYkxldHRlcnMubWFwKChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbmRlcGVuZGFudC1sZXR0ZXIgJHtcbiAgICAgICAgICAgICAgICBpc0xldHRlckNvcnJlY3QobGV0dGVyKSA/IFwiY29ycmVjdFwiIDogXCJcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xldHRlcn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluc2VydE1vdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSW5zZXJ0TW90IiwiZGF0YSIsIm9uTGV0dGVySW5zZXJ0IiwibWF4RXNzYWkiLCJ0YWJMZXR0ZXJzIiwic2V0VGFiTGV0dGVycyIsImlucHV0UmVmIiwiZXNzYWkiLCJzZXRFc3NhaSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJ0cmltIiwiaW5jbHVkZXMiLCJhbGVydCIsInByZXZUYWJMZXR0ZXJzIiwiaXNDb3JyZWN0IiwiaXNMZXR0ZXJDb3JyZWN0IiwibGV0dGVyIiwid29yZCIsImRpdiIsInAiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJiciIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibWF4TGVuZ3RoIiwicmVmIiwiYnV0dG9uIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/insert-mot/InsertMot.tsx\n"));

/***/ })

});