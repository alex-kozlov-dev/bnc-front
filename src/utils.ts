export const prop = <T extends {}>(key: keyof T) => (obj: T) => obj[key]

export const isTruthy = <T extends any>(item: T): item is Exclude<T, null | false | 0 | ''> => !!item
