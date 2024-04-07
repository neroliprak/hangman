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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InsertMot: function() { return /* binding */ InsertMot; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _insert_mot_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insert-mot.css */ \"(app-pages-browser)/./src/components/insert-mot/insert-mot.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst InsertMot = (param)=>{\n    let { data, onLetterInsert, maxEssai } = param;\n    _s();\n    // Tableau contenant les différentes lettres insérés, initialisé à un tableau vide\n    const [tabLetters, setTabLetters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Pour accéder à la lettre de l'input, initialisé à rien\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Compteur d'essai\n    const [essai, setEssai] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(maxEssai);\n    //   Gestion d'événement au soumission du formulaire\n    const handleSubmit = (event)=>{\n        // ___Évite le rechargement de page\n        event.preventDefault();\n        // ___Récupère la valeur sans les espaces en trop (finalement inutile, puisque j'ai mis maxLength = {1}...)\n        if (!inputRef.current || !inputRef.current.value.trim()) return;\n        const value = inputRef.current.value.trim();\n        // ___Je vérifie si les lettres insérés par l'utilisateur ne l'a pas déjà été, en regardant dans son historique (tabLetters)\n        if (tabLetters.includes(value)) {\n            alert(\"La lettre a d\\xe9j\\xe0 \\xe9t\\xe9 ins\\xe9r\\xe9e\");\n            return;\n        }\n        // Je vérifie le nombre d'essaie de l'utilisateur\n        if (essai <= 0) {\n            alert(\"Vous avez d\\xe9pass\\xe9 la limite d'essai: \".concat(maxEssai));\n            return;\n        }\n        setTabLetters((prevTabLetters)=>[\n                ...prevTabLetters,\n                value\n            ]);\n        inputRef.current.value = \"\";\n        onLetterInsert(value);\n        const isCorrect = isLetterCorrect(value);\n        // À chaque essai de l'utilisateur, il augmente de 1, si il a bon, il ne décrémente pas\n        if (!isCorrect) {\n            setEssai(essai - 1);\n        }\n    };\n    const isLetterCorrect = (letter)=>{\n        return data.word.includes(letter);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrap-insert-mot\",\n        children: [\n            essai <= 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"color-red\",\n                children: [\n                    \"Le mot complet \\xe9tait : \",\n                    data.word\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"insert-mot-form\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"color-red\",\n                        children: [\n                            \"Votre nombre d'essais restant : \",\n                            essai\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"mot\",\n                        children: \"Entrez une lettre :\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"mot\",\n                        maxLength: 1,\n                        ref: inputRef\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Ajouter\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wrap-idependant-letter\",\n                children: tabLetters.map((letter, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"independant-letter \".concat(isLetterCorrect(letter) ? \"correct\" : \"\"),\n                        children: letter\n                    }, index, false, {\n                        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/hangman/src/components/insert-mot/InsertMot.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InsertMot, \"SfAQL3aOiQMsROqGIGTLn/Gl21M=\");\n_c = InsertMot;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InsertMot);\nvar _c;\n$RefreshReg$(_c, \"InsertMot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2luc2VydC1tb3QvSW5zZXJ0TW90LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBQ3RCO0FBR25CLE1BQU1HLFlBQVk7UUFBQyxFQUN4QkMsSUFBSSxFQUNKQyxjQUFjLEVBQ2RDLFFBQVEsRUFLVDs7SUFDQyxrRkFBa0Y7SUFDbEYsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFXLEVBQUU7SUFDekQseURBQXlEO0lBQ3pELE1BQU1RLFdBQVdQLDZDQUFNQSxDQUFtQjtJQUMxQyxtQkFBbUI7SUFDbkIsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDSztJQUVuQyxvREFBb0Q7SUFDcEQsTUFBTU0sZUFBd0QsQ0FBQ0M7UUFDN0QsbUNBQW1DO1FBQ25DQSxNQUFNQyxjQUFjO1FBQ3BCLDJHQUEyRztRQUMzRyxJQUFJLENBQUNMLFNBQVNNLE9BQU8sSUFBSSxDQUFDTixTQUFTTSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxJQUFJO1FBQ3pELE1BQU1ELFFBQVFQLFNBQVNNLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJO1FBQ3pDLDRIQUE0SDtRQUM1SCxJQUFJVixXQUFXVyxRQUFRLENBQUNGLFFBQVE7WUFDOUJHLE1BQU07WUFDTjtRQUNGO1FBQ0EsaURBQWlEO1FBQ2pELElBQUlULFNBQVMsR0FBRztZQUNkUyxNQUFNLDhDQUFpRCxPQUFUYjtZQUM5QztRQUNGO1FBQ0FFLGNBQWMsQ0FBQ1ksaUJBQW1CO21CQUFJQTtnQkFBZ0JKO2FBQU07UUFDNURQLFNBQVNNLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHO1FBQ3pCWCxlQUFlVztRQUVmLE1BQU1LLFlBQVlDLGdCQUFnQk47UUFFbEMsdUZBQXVGO1FBQ3ZGLElBQUksQ0FBQ0ssV0FBVztZQUNkVixTQUFTRCxRQUFRO1FBQ25CO0lBQ0Y7SUFDQSxNQUFNWSxrQkFBa0IsQ0FBQ0M7UUFDdkIsT0FBT25CLEtBQUtvQixJQUFJLENBQUNOLFFBQVEsQ0FBQ0s7SUFDNUI7SUFDQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7WUFDWmhCLFNBQVMsbUJBQ1IsOERBQUNpQjtnQkFBRUQsV0FBVTs7b0JBQVk7b0JBQXdCdEIsS0FBS29CLElBQUk7Ozs7Ozs7MEJBRTVELDhEQUFDSTtnQkFBS0YsV0FBVTtnQkFBa0JHLFVBQVVqQjs7a0NBQzFDLDhEQUFDZTt3QkFBRUQsV0FBVTs7NEJBQVk7NEJBQWlDaEI7Ozs7Ozs7a0NBQzFELDhEQUFDb0I7Ozs7O2tDQUNELDhEQUFDQTs7Ozs7a0NBQ0QsOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFNOzs7Ozs7a0NBQ3JCLDhEQUFDRjs7Ozs7a0NBQ0QsOERBQUNHO3dCQUFNQyxNQUFLO3dCQUFPQyxJQUFHO3dCQUFNQyxXQUFXO3dCQUFHQyxLQUFLNUI7Ozs7OztrQ0FDL0MsOERBQUNxQjs7Ozs7a0NBQ0QsOERBQUNRO3dCQUFPSixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDVDtnQkFBSUMsV0FBVTswQkFFWm5CLFdBQVdnQyxHQUFHLENBQUMsQ0FBQ2hCLFFBQVFpQixzQkFDdkIsOERBQUNiO3dCQUVDRCxXQUFXLHNCQUVWLE9BRENKLGdCQUFnQkMsVUFBVSxZQUFZO2tDQUd2Q0E7dUJBTElpQjs7Ozs7Ozs7Ozs7Ozs7OztBQVdqQixFQUFFO0dBN0VXckM7S0FBQUE7QUErRWIsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5zZXJ0LW1vdC9JbnNlcnRNb3QudHN4PzJlZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vaW5zZXJ0LW1vdC5jc3NcIjtcbmltcG9ydCBNb3QgZnJvbSBcIkAvdHlwZXMvZGF0YVwiO1xuXG5leHBvcnQgY29uc3QgSW5zZXJ0TW90ID0gKHtcbiAgZGF0YSxcbiAgb25MZXR0ZXJJbnNlcnQsXG4gIG1heEVzc2FpLFxufToge1xuICBkYXRhOiBNb3Q7XG4gIG9uTGV0dGVySW5zZXJ0OiAobGV0dGVyOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG1heEVzc2FpOiBudW1iZXI7XG59KSA9PiB7XG4gIC8vIFRhYmxlYXUgY29udGVuYW50IGxlcyBkaWZmw6lyZW50ZXMgbGV0dHJlcyBpbnPDqXLDqXMsIGluaXRpYWxpc8OpIMOgIHVuIHRhYmxlYXUgdmlkZVxuICBjb25zdCBbdGFiTGV0dGVycywgc2V0VGFiTGV0dGVyc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICAvLyBQb3VyIGFjY8OpZGVyIMOgIGxhIGxldHRyZSBkZSBsJ2lucHV0LCBpbml0aWFsaXPDqSDDoCByaWVuXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICAvLyBDb21wdGV1ciBkJ2Vzc2FpXG4gIGNvbnN0IFtlc3NhaSwgc2V0RXNzYWldID0gdXNlU3RhdGUobWF4RXNzYWkpO1xuXG4gIC8vICAgR2VzdGlvbiBkJ8OpdsOpbmVtZW50IGF1IHNvdW1pc3Npb24gZHUgZm9ybXVsYWlyZVxuICBjb25zdCBoYW5kbGVTdWJtaXQ6IFJlYWN0LkZvcm1FdmVudEhhbmRsZXI8SFRNTEZvcm1FbGVtZW50PiA9IChldmVudCkgPT4ge1xuICAgIC8vIF9fX8OJdml0ZSBsZSByZWNoYXJnZW1lbnQgZGUgcGFnZVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gX19fUsOpY3Vww6hyZSBsYSB2YWxldXIgc2FucyBsZXMgZXNwYWNlcyBlbiB0cm9wIChmaW5hbGVtZW50IGludXRpbGUsIHB1aXNxdWUgaidhaSBtaXMgbWF4TGVuZ3RoID0gezF9Li4uKVxuICAgIGlmICghaW5wdXRSZWYuY3VycmVudCB8fCAhaW5wdXRSZWYuY3VycmVudC52YWx1ZS50cmltKCkpIHJldHVybjtcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0UmVmLmN1cnJlbnQudmFsdWUudHJpbSgpO1xuICAgIC8vIF9fX0plIHbDqXJpZmllIHNpIGxlcyBsZXR0cmVzIGluc8OpcsOpcyBwYXIgbCd1dGlsaXNhdGV1ciBuZSBsJ2EgcGFzIGTDqWrDoCDDqXTDqSwgZW4gcmVnYXJkYW50IGRhbnMgc29uIGhpc3RvcmlxdWUgKHRhYkxldHRlcnMpXG4gICAgaWYgKHRhYkxldHRlcnMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICBhbGVydChcIkxhIGxldHRyZSBhIGTDqWrDoCDDqXTDqSBpbnPDqXLDqWVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEplIHbDqXJpZmllIGxlIG5vbWJyZSBkJ2Vzc2FpZSBkZSBsJ3V0aWxpc2F0ZXVyXG4gICAgaWYgKGVzc2FpIDw9IDApIHtcbiAgICAgIGFsZXJ0KGBWb3VzIGF2ZXogZMOpcGFzc8OpIGxhIGxpbWl0ZSBkJ2Vzc2FpOiAke21heEVzc2FpfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUYWJMZXR0ZXJzKChwcmV2VGFiTGV0dGVycykgPT4gWy4uLnByZXZUYWJMZXR0ZXJzLCB2YWx1ZV0pO1xuICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xuICAgIG9uTGV0dGVySW5zZXJ0KHZhbHVlKTtcblxuICAgIGNvbnN0IGlzQ29ycmVjdCA9IGlzTGV0dGVyQ29ycmVjdCh2YWx1ZSk7XG5cbiAgICAvLyDDgCBjaGFxdWUgZXNzYWkgZGUgbCd1dGlsaXNhdGV1ciwgaWwgYXVnbWVudGUgZGUgMSwgc2kgaWwgYSBib24sIGlsIG5lIGTDqWNyw6ltZW50ZSBwYXNcbiAgICBpZiAoIWlzQ29ycmVjdCkge1xuICAgICAgc2V0RXNzYWkoZXNzYWkgLSAxKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGlzTGV0dGVyQ29ycmVjdCA9IChsZXR0ZXI6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBkYXRhLndvcmQuaW5jbHVkZXMobGV0dGVyKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtaW5zZXJ0LW1vdFwiPlxuICAgICAge2Vzc2FpIDw9IDAgJiYgKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2xvci1yZWRcIj5MZSBtb3QgY29tcGxldCDDqXRhaXQgOiB7ZGF0YS53b3JkfTwvcD5cbiAgICAgICl9XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbnNlcnQtbW90LWZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sb3ItcmVkXCI+Vm90cmUgbm9tYnJlIGQnZXNzYWlzIHJlc3RhbnQgOiB7ZXNzYWl9PC9wPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibW90XCI+RW50cmV6IHVuZSBsZXR0cmUgOjwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1vdFwiIG1heExlbmd0aD17MX0gcmVmPXtpbnB1dFJlZn0gLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFqb3V0ZXI8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1pZGVwZW5kYW50LWxldHRlclwiPlxuICAgICAgICB7LyogSmUgcGFyY291cnMgdGFiTGV0dGVycyBwb3VyIGFmZmljaGVyIGxlcyBsZXR0cmVzIGluc8OpcsOpcyBwYXIgbCd1dGlsaXNhdGV1ciAqL31cbiAgICAgICAge3RhYkxldHRlcnMubWFwKChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BpbmRlcGVuZGFudC1sZXR0ZXIgJHtcbiAgICAgICAgICAgICAgaXNMZXR0ZXJDb3JyZWN0KGxldHRlcikgPyBcImNvcnJlY3RcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsZXR0ZXJ9XG4gICAgICAgICAgPC9wPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zZXJ0TW90O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJJbnNlcnRNb3QiLCJkYXRhIiwib25MZXR0ZXJJbnNlcnQiLCJtYXhFc3NhaSIsInRhYkxldHRlcnMiLCJzZXRUYWJMZXR0ZXJzIiwiaW5wdXRSZWYiLCJlc3NhaSIsInNldEVzc2FpIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInRyaW0iLCJpbmNsdWRlcyIsImFsZXJ0IiwicHJldlRhYkxldHRlcnMiLCJpc0NvcnJlY3QiLCJpc0xldHRlckNvcnJlY3QiLCJsZXR0ZXIiLCJ3b3JkIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImJyIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJtYXhMZW5ndGgiLCJyZWYiLCJidXR0b24iLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/insert-mot/InsertMot.tsx\n"));

/***/ })

});