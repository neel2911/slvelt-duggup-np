import type { ProfileType } from './types';

export const data: ProfileType = {
	bio: {
		avatarSrc: '/avatars/02.svg',
		avatarFallback: 'KK',
		username: 'Krishna Kiran',
		about:
			'Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.',
		currentPosition: {
			brandLogoSrc: '/social-logo.svg',
			fallbackBrandInitials: 'SL',
			brandName: 'Duggup',
			position: 'Co-Founder and CEO'
		}
	},
	timeline: [
		{
			postType: 'regular',
			date: 'Dec 2023',
			articles: [
				{
					imgSrc: '/posts/01.svg',
					postDescription: 'No amount of technology can convert a bad story into a good story.'
				},
				{
					imgSrc: '/posts/02.svg',
					postDescription:
						"Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas."
				}
			]
		},
		{
			postType: 'special',
			position: {
				brandLogoSrc: '/company-logo/01.svg',
				fallbackBrandInitials: 'SL',
				brandName: 'Duggup',
				location: 'San Francisco Bay Area',
				date: 'Nov 2023',
				position: 'Co-Founder and CEO',
				jobType: 'Full-time · Remote'
			}
		},
		{
			postType: 'regular',
			date: 'Dec 2023',
			articles: [
				{
					imgSrc: '/posts/03.svg',
					postDescription: 'Startup Lesson I am reflecting. Don\'t build for the "average person".'
				},
				{
					imgSrc: '/posts/04.svg',
					postDescription: 'Your biggest regrets at 80 will be acts of omission.'
				}
			]
		},
		{
			postType: 'special',
			position: {
				brandLogoSrc: '/company-logo/02.svg',
				fallbackBrandInitials: 'SL',
				brandName: 'BetterUp',
				location: 'San Francisco Bay Area',
				date: 'Sep 2022',
				position: 'VP Engineering',
				jobType: 'Full-time'
			}
		}
	]
};
