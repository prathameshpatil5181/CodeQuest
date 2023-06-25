export interface examp{
    key: number,
    input: string,
    output: string,
    explanation: string
}
export  interface prob {
    problemid: number,
    title: string,
    Statement:string,
    difficulty: string,
    acceptance: string,
    examples: examp[]
}
export interface filterprob {
    problemid: number,
    title: string,
    Statement:string,
    difficulty: string,
    acceptance: string,
}