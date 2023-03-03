import { listFields, objectField } from "./listFields"

export const getInfoAttributes = (): listFields => {
    return JSON.parse(JSON.stringify(objectField))
}
export const getInfoAttribute = (name: string) => {
    const attributes = getInfoAttributes()
    return attributes[name]
}
export const getInfoLabelAttribute = (name: string) => {
    const attributes = getInfoAttribute(name)
    return attributes['label']
}
export const getInfoTypeAttribute = (name: string) => {
    const attributes = getInfoAttribute(name)
    return attributes['type']
}
