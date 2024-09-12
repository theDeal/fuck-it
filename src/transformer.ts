import * as ts from 'typescript';

function transformer(program: ts.Program): ts.TransformerFactory<ts.SourceFile> {
    return (context: ts.TransformationContext) => {
        const visitor: ts.Visitor = (node) => {
            // Check if the node is a variable declaration
            if (ts.isVariableDeclaration(node)) {
                // Check if the variable has the type annotation 'fuck it'
                if (node.type && node.type.getText() === 'fuck it') {
                    // Replace 'fuck it' with 'any'
                    const updatedDeclaration = ts.factory.updateVariableDeclaration(
                        node,
                        node.name,
                        node.exclamationToken,
                        ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword), // Replace with 'any'
                        node.initializer
                    );
                    return updatedDeclaration;
                }
            }
            return ts.visitEachChild(node, visitor, context);
        };

        // The actual transformation function applied to the SourceFile
        return (node: ts.SourceFile): ts.SourceFile => {
            return ts.visitEachChild(node, visitor, context) as ts.SourceFile;
        };
    };
}

export default transformer;
