export interface SessionData {
    locale: string
    tasks: { text: string; done?: boolean }[]
}

export const initialSession: SessionData = {
    locale: "en",
    tasks: []
}
