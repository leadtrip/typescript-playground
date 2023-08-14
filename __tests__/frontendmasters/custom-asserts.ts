export function assertEquals<T>(
    found: T,
    expected: T,
    message: string
) {
    if (found !== expected)
        throw new Error(
            `❌ Assertion failed: ${message}\nexpected: ${expected}\nfound: ${found}`
        )
    console.log(`✅ OK ${message}`)
}

export function assertOk(value: any, message: string) {
    if (!value)
        throw new Error(`❌ Assertion failed: ${message}`)
    console.log(`✅ OK ${message}`)
}