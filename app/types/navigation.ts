/**
 * Navigation Related Types
 * Types for navigation items, menus, and locale switching
 */

export interface NavItem {
  name: string
  link: string
  icon?: string
}

export interface LocaleItem {
  code: string
  name?: string
}

export interface BreadcrumbItem {
  label: string
  to?: string
  icon?: string
}
