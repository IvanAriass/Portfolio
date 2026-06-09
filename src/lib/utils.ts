type ClassValue = string | boolean | undefined | null | ClassValue[]

export function cn(...classes: ClassValue[]): string {
  const flat: string[] = []
  const flatten = (arr: ClassValue[]) => {
    for (const c of arr) {
      if (Array.isArray(c)) flatten(c)
      else if (c) flat.push(String(c))
    }
  }
  flatten(classes)
  return flat.join(' ')
}
