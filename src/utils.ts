export const prop = <T extends {}>(key: keyof T) => (obj: T) => obj[key]
