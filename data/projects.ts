import { tech } from '@/data/tech'

export type TechKeys = keyof typeof tech

export interface Project {
	id: string
	name: string
	images: string[]
	github?: string
	link?: string
	tech: TechKeys[]
	description: string
	gradient: string
}

export const projects: Project[] = [
	// {
	// 	id: 'cam',
	// 	name: 'Core Adoption Manager',
	// 	images: ['cam-1.png', 'cam-2.png', 'cam-3.png'],
	// 	tech: ['next', 'supabase', 'tailwind', 'contentful'],
	// 	description:
	// 		'An internal account generation tool used by the sales team to allow prospective districts and schools to access digital products. It implements user auth, custom analytics tracking, Salesforce integration, faceted search from Algolia, all powered by Contentful as the CMS.',
	// 	gradient: 'bg-gradient-to-r from-emerald-500 to-lime-600'
	// },
	// {
	// 	id: 'quotes',
	// 	name: 'Quotes App',
	// 	images: ['quotes-1.png', 'quotes-2.png', 'quotes-4.png', 'quotes-4.png'],
	// 	tech: ['next', 'firebase', 'tailwind', 'contentful'],
	// 	description:
	// 		'A customer facing e-commerce like platform that allows customers to create quotes for physical products on behalf of their school/district. It integrates and syncs up with the sales pipeline via Salesforce, and utilizes Contentful as a CMS for storing products.',
	// 	gradient: 'bg-gradient-to-r from-emerald-500 to-lime-600',
	// 	link: 'https://quotes.americanreading.com/products/standard'
	// },
	// {
	// 	id: 'arc-website',
	// 	name: 'ARC Website',
	// 	images: ['arc-website-1.png', 'arc-website-2.png', 'arc-website-3.png'],
	// 	tech: ['gatsby', 'supabase', 'tailwind', 'contentful'],
	// 	description:
	// 		'The newly redesigned American Reading Company website. Built from the ground up with Gatsby for blazing fast page loads, Contentful as the CMS for easy content updates and Supabase for all our database and authentication needs.',
	// 	gradient: 'bg-gradient-to-r from-emerald-500 to-lime-600',
	// 	link: 'https://americanreading.com/'
	// }
]
