export function matchInArray(string: string, expressions: RegExp[]) {
    const len = expressions.length;
    let i = 0;

    for (; i < len; i++) {
        if (string.match(expressions[i])) {
            return true;
        }
    }

    return false;
}
