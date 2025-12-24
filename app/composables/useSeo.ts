/**
 * Reusable SEO Composable
 * Provides consistent SEO configuration across all pages
 */

interface SeoOptions {
  title: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  tags?: string[]
  noIndex?: boolean
}

interface ArticleStructuredData {
  title: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: string
}

export const useSeo = () => {
  const config = useRuntimeConfig()
  const route = useRoute()
  const { locale } = useI18n()

  const baseUrl = config.public.siteUrl || 'https://qinaryan.com'
  const siteName = 'QINARYAN'
  const defaultImage = `${baseUrl}/og-image.png`
  const twitterHandle = '@qinaryan'

  /**
   * Set page SEO meta tags
   */
  const setPageSeo = (options: SeoOptions) => {
    const {
      title,
      description = 'Komunitas pengembang digital yang berfokus pada pengembangan teknologi modern untuk kebutuhan pendidikan, organisasi, dan masyarakat.',
      image = defaultImage,
      url = `${baseUrl}${route.fullPath}`,
      type = 'website',
      publishedTime,
      modifiedTime,
      author,
      tags = [],
      noIndex = false
    } = options

    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
    const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

    // Basic meta tags
    useSeoMeta({
      title: fullTitle,
      description,
      
      // Open Graph
      ogTitle: fullTitle,
      ogDescription: description,
      ogImage: imageUrl,
      ogUrl: url,
      ogType: type,
      ogSiteName: siteName,
      ogLocale: locale.value === 'id' ? 'id_ID' : 'en_US',
      
      // Twitter Card
      twitterCard: 'summary_large_image',
      twitterTitle: fullTitle,
      twitterDescription: description,
      twitterImage: imageUrl,
      twitterSite: twitterHandle,
      twitterCreator: author ? `@${author}` : twitterHandle,
      
      // Article specific (for blog/portfolio)
      ...(type === 'article' && {
        articlePublishedTime: publishedTime,
        articleModifiedTime: modifiedTime,
        articleAuthor: author ? [author] : undefined,
        articleTag: tags,
      }),
      
      // Robots
      robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    })

    // Canonical URL
    useHead({
      link: [
        { rel: 'canonical', href: url }
      ],
      htmlAttrs: {
        lang: locale.value
      }
    })
  }

  /**
   * Set portfolio/article page SEO
   */
  const setArticleSeo = (options: {
    title: string
    description?: string
    image?: string
    date?: string
    author?: string
    tags?: string[]
    category?: string
  }) => {
    setPageSeo({
      title: options.title,
      description: options.description,
      image: options.image,
      type: 'article',
      publishedTime: options.date,
      author: options.author || 'QINARYAN Team',
      tags: options.tags,
    })

    // Add structured data for article
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: options.title,
            description: options.description,
            image: options.image?.startsWith('http') 
              ? options.image 
              : `${baseUrl}${options.image}`,
            datePublished: options.date,
            author: {
              '@type': 'Organization',
              name: options.author || 'QINARYAN',
              url: baseUrl
            },
            publisher: {
              '@type': 'Organization',
              name: siteName,
              logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/qinaryan.png`
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${baseUrl}${route.fullPath}`
            },
            keywords: options.tags?.join(', '),
            articleSection: options.category
          })
        }
      ]
    })
  }

  /**
   * Set portfolio list page SEO
   */
  const setPortfolioListSeo = (options?: {
    title?: string
    description?: string
  }) => {
    setPageSeo({
      title: options?.title || 'Portofolio',
      description: options?.description || 'Lihat hasil karya dan proyek yang telah kami kerjakan untuk berbagai klien dan organisasi.',
    })

    // Add structured data for portfolio list
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: options?.title || 'Portofolio QINARYAN',
            description: options?.description || 'Lihat hasil karya dan proyek yang telah kami kerjakan.',
            url: `${baseUrl}${route.fullPath}`,
            isPartOf: {
              '@type': 'WebSite',
              name: siteName,
              url: baseUrl
            }
          })
        }
      ]
    })
  }

  /**
   * Set home page SEO
   */
  const setHomeSeo = () => {
    setPageSeo({
      title: 'QINARYAN - Berkarya dengan Teknologi',
      description: 'Komunitas pengembang digital yang berfokus pada pengembangan teknologi modern untuk kebutuhan pendidikan, organisasi, dan masyarakat.',
    })

    // Add Organization structured data
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteName,
            url: baseUrl,
            logo: `${baseUrl}/qinaryan.png`,
            description: 'Komunitas pengembang digital yang berfokus pada pengembangan teknologi modern.',
            sameAs: [
              'https://github.com/qinaryan',
              'https://instagram.com/qinaryan',
              'https://linkedin.com/company/qinaryan'
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'qinaryan@gmail.com',
              contactType: 'customer service'
            }
          })
        }
      ]
    })
  }

  return {
    setPageSeo,
    setArticleSeo,
    setPortfolioListSeo,
    setHomeSeo,
    baseUrl,
    siteName
  }
}
