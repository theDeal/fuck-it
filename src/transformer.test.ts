import * as ts from 'typescript';
import transformer from './transformer';

const source = `
    let foo: any = 42;
`;

function compile(input: string) {
    const sourceFile = ts.createSourceFile('test.ts', input, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    const program = ts.createProgram({ rootNames: ['test.ts'], options: {} });
    const result = ts.transform(sourceFile, [transformer(program)]);
    const transformedSourceFile = result.transformed[0] as ts.SourceFile;
    const printer = ts.createPrinter();
    return printer.printFile(transformedSourceFile);
}

test('should replace "any" type with "FUCK IT" in non-standard format', () => {
    const output = compile(source);
    expect(output).toContain('let foo FUCK IT = 42;');
});
