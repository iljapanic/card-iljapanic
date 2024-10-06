import type { Profile } from '@/lib/types'

export const profile: Profile = {
	name: 'Ilja Panić',
	title: 'Technologist & Designer',
	company: 'Resolve',
	description:
		'Crafting bespoke software and product experiences. Currently building Resolve — an AI-enabled knowledge-sharing platform for climate action.',
	email: process.env.EMAIL!,
	phone: process.env.PHONE_NUMBER,
	socials: [
		{
			type: 'linkedin',
			url: 'https://www.linkedin.com/in/iljapanic',
		},
		{
			type: 'whatsapp',
			url: `https://wa.me/${process.env.WHATSAPP_NUMBER}`,
		},
		// {
		// 	type: 'x',
		// 	url: 'https://x.com/iljapanic',
		// },
	],
	links: [
		{
			title: 'Resolve',
			url: 'https://resolve.global/',
		},
		{
			title: 'The Convergence',
			url: 'https://theconvergence.co/',
		},
		{
			title: 'Personal website',
			url: 'https://iljapanic.com',
		},
	],
}
