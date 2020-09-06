import { flow, toNumber, defaultTo } from 'lodash/fp'

export function querySelectorAll(
  context: HTMLElement | Document | null,
  selector: string
) {
  if (!context) {
    return []
  }

  return Array.from(context.querySelectorAll<HTMLElement>(selector))
}

export function querySelectors(
  context: HTMLElement | Document,
  selectors: string[]
) {
  return selectors.map((selector) =>
    context.querySelector<HTMLElement>(selector)
  )
}

export function textContent(element: HTMLElement | null, defaultValue = '') {
  return element?.textContent?.replace(/\t/g, '').trim() ?? defaultValue
}

export function numberContent(element: HTMLElement | null, defaultValue = 0) {
  return flow(textContent, toNumber, defaultTo(defaultValue))(element)
}

export function altContent(element: HTMLElement | null) {
  return (
    element?.textContent?.trim() ||
    element?.querySelector('img')?.getAttribute('alt') ||
    ''
  )
}
