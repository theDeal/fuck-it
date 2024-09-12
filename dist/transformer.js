"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
function transformer(program) {
    return function (context) {
        var visitor = function (node) {
            // Check if the node is a variable declaration
            if (ts.isVariableDeclaration(node)) {
                // Check if the variable has the type annotation 'fuck it'
                if (node.type && node.type.getText() === 'fuck it') {
                    // Replace 'fuck it' with 'any'
                    var updatedDeclaration = ts.factory.updateVariableDeclaration(node, node.name, node.exclamationToken, ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword), // Replace with 'any'
                    node.initializer);
                    return updatedDeclaration;
                }
            }
            return ts.visitEachChild(node, visitor, context);
        };
        // The actual transformation function applied to the SourceFile
        return function (node) {
            return ts.visitEachChild(node, visitor, context);
        };
    };
}
exports.default = transformer;
