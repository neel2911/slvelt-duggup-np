<script lang="ts">
	import Bio from '$lib/bio/Bio.svelte';
	import Header from '$lib/header/Header.svelte';
	import Timeline from '$lib/timeline/Timeline.svelte';
	const profile: {
		user: {
			avatarSrc: string;
			avatarFallback: string;
			username: string;
			bio: string;
			currentposition: {
				imgSrc: string;
				fallbackText: string;
				brandName: string;
				position: string;
			};
		};
		timeline: Array<
			| {
					postType: 'regular';
					date: string;
					cardList: { imgSrc: string; alt: string; postDescription: string }[];
			  }
			| {
					postType: 'special';
					position: {
						brandLogoSrc: string;
						fallbackName: string;
						brandName: string;
						location: string;
						date: string;
						position: string;
						jobType: string;
					};
			  }
		>;
	} = {
		user: {
			avatarSrc: '/avatars/02.svg',
			avatarFallback: 'KK',
			username: 'Krishna Kiran',
			bio: 'Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.',
			currentposition: {
				imgSrc: '/social-logo.svg',
				fallbackText: 'SL',
				brandName: 'Duggup',
				position: 'Co-Founder and CEO'
			}
		},
		timeline: [
			{
				postType: 'regular',
				date: 'Dec 2023',
				cardList: [
					{
						imgSrc: '/posts/01.svg',
						alt: 'post 1',
						postDescription: 'No amount of technology can convert a bad story into a good story.'
					},
					{
						imgSrc: '/posts/02.svg',
						alt: 'post 2',
						postDescription:
							"Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas."
					}
				]
			},
			{
				postType: 'special',
				position: {
					brandLogoSrc: '/company-logo/01.svg',
					fallbackName: 'SL',
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
				cardList: [
					{
						imgSrc: '/posts/03.svg',
						alt: 'post 1',
						postDescription:
							'Startup Lesson I am reflecting. Don\'t build for the "average person".'
					},
					{
						imgSrc: '/posts/04.svg',
						alt: 'post 2',
						postDescription: 'Your biggest regrets at 80 will be acts of omission.'
					}
				]
			},
			{
				postType: 'special',
				position: {
					brandLogoSrc: '/company-logo/02.svg',
					fallbackName: 'SL',
					brandName: 'BetterUp',
					location: 'San Francisco Bay Area',
					date: 'Sep 2022',
					position: 'VP Engineering',
					jobType: 'Full-time'
				}
			}
		]
	};
</script>

<Header />
<Bio profile={profile.user} />
<Timeline timeline={profile.timeline} />
