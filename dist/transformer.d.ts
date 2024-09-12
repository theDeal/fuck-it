import * as ts from 'typescript';
declare function transformer(program: ts.Program): ts.TransformerFactory<ts.SourceFile>;
export default transformer;
