/**
 * UI Component Types
 * Types for UI components, sections, and visual elements
 */

// ============================================
// Hero Section Types
// ============================================

export interface HeroStat {
  value: string
  label: string
  description: string
}

/** @deprecated Use HeroStat instead */
export type Stat = HeroStat

export interface HeroSectionProps {
  title: string
  subtitle: string
  badge?: string
  primaryButton?: string
  secondaryButton?: string
  stats?: HeroStat[]
}

// ============================================
// Partners/Logo Carousel Types
// ============================================

export interface Partner {
  name: string
  logo: string
  url?: string
}

export interface LogoCarouselProps {
  title?: string
  badge?: string
  speed?: number
  pauseOnHover?: boolean
  partners?: Partner[]
}

// ============================================
// About Section Types
// ============================================

export interface AboutSectionProps {
  title: string
  subtitle: string
  ctaText?: string
  servicesTitle?: string
}

// ============================================
// CTA Section Types
// ============================================

export interface TrustIndicator {
  text: string
  icon?: string
}

export interface CtaSectionProps {
  title: string
  description: string
  badge?: string
  badgeIcon?: string
  primaryButtonText?: string
  primaryIcon?: string
  secondaryButtonText?: string
  secondaryIcon?: string
  showTrustIndicators?: boolean
  trustText1?: string
  trustText2?: string
  trustText3?: string
}

// ============================================
// Why Us / Advantages Types
// ============================================

export interface Advantage {
  title: string
  description: string
  icon: string
  size?: 'normal' | 'large' | 'wide' | 'tall'
}

// ============================================
// Community Section Types
// ============================================

export interface Member {
  icon: string
  title: string
  description: string
}

// ============================================
// Focus Areas / Features Types
// ============================================

export interface Feature {
  icon: string
  title: string
  description: string
  tags: string
}

// ============================================
// FAQ Types
// ============================================

export interface FaqLink {
  text: string
  url: string
}

export interface FaqItem {
  question: string
  answer: string
  icon?: string
  link?: FaqLink
}

// ============================================
// Testimonial Types
// ============================================

export interface Testimonial {
  id: number
  quote: string
  name: string
  position: string
  rating: string
  image: string
}

// ============================================
// Team Types
// ============================================

export interface Socials {
  github?: string
  linkedin?: string
  twitter?: string
  website?: string
}

export interface TeamMember {
  name: string
  role: string
  bio?: string
  image?: string
  skills?: string[]
  socials?: Socials
}

// ============================================
// Common UI Types
// ============================================

export type Size = 'sm' | 'md' | 'lg'
export type Alignment = 'left' | 'center' | 'right'
export type BentoSize = 'normal' | 'large' | 'wide' | 'tall'

export interface GlowingEffectConfig {
  blur?: number
  inactiveZone?: number
  proximity?: number
  spread?: number
  variant?: 'default' | 'white'
  glow?: boolean
  disabled?: boolean
  movementDuration?: number
  borderWidth?: number
}

// ============================================
// Section Props Types
// ============================================

export interface FocusAreasSectionProps {
  title: string
  subtitle: string
  badge?: string
  features: Feature[]
}

export interface WhyUsSectionProps {
  title: string
  badge?: string
  quote?: string
  advantages: Advantage[]
}

export interface CommunitySectionProps {
  title: string
  subtitle: string
  badge?: string
  members: Member[]
  closingText1?: string
  closingHighlight?: string
}

export interface TestimonialSectionProps {
  title: string
  subtitle: string
  badge?: string
  testimonials: Testimonial[]
  autoplay?: boolean
  autoplayInterval?: number
}

export interface FaqSectionProps {
  title: string
  subtitle: string
  badge?: string
  items: FaqItem[]
  showCta?: boolean
  ctaText?: string
  ctaButtonText?: string
}

// ============================================
// Animation Types
// ============================================

export interface MotionAnimation {
  opacity?: number
  y?: number
  x?: number
  scale?: number
}

export interface MotionTransition {
  duration?: number
  ease?: string
  delay?: number
}

export interface MotionConfig {
  initial: MotionAnimation
  visible: MotionAnimation & { transition?: MotionTransition }
}
