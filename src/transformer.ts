import * as ts from 'typescript';

function transformer(program: ts.Program): ts.TransformerFactory<ts.SourceFile> {
    return (context: ts.TransformationContext) => {
        const visitor: ts.Visitor = (node) => {
            // Check if the node is a variable declaration and has a type
            if (ts.isVariableDeclaration(node) && node.type) {
                // Check if the type is the "any" keyword
                if (node.type.kind === ts.SyntaxKind.AnyKeyword) {
                    // Replace with a custom 'FUCK IT' format (non-standard syntax)
                    const newNode = ts.factory.updateVariableDeclaration(
                        node,
                        ts.factory.createIdentifier(node.name.getText() + ' FUCK IT'),
                        node.exclamationToken,
                        undefined, // We don't want to insert a type node here
                        node.initializer
                    );
                    return newNode;
                }
            }
            return ts.visitEachChild(node, visitor, context);
        };

        return (node: ts.SourceFile): ts.SourceFile => {
            return ts.visitEachChild(node, visitor, context) as ts.SourceFile;
        };
    };
}

export default transformer;
