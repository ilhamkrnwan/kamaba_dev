
export interface TeamCardProps {
	name: string
	role: string
	bio?: string
	image?: string
	skills?: string[]
	socials?: Socials
	className?: string
}

export interface TeamMember {
	id: number
	name: string
	role: string
	profileImage?: string
	revealImage?: string
	socials?: {
		github?: string
		linkedin?: string
		instagram?: string
	}
}

export interface TeamSectionProps {
	title?: string
	subtitle?: string
	badge?: string
	members?: TeamMember[]
	speed?: number
	pauseOnHover?: boolean
}
/**
 * Types Index - Auto-imported types for Nuxt 4
 * All types exported from this file will be auto-imported across the application
 */

// Re-export all types
export * from './api'
export * from './navigation'
export * from './ui'
export * from './content'
export * from './todo'
