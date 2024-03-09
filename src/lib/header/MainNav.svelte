<script lang="ts">
	export let className: string;
	const navLink = [
		{ src: '/home.svg', alt: 'home icon', label: 'Home' },
		{ src: '/story.svg', alt: 'explore icon', label: 'Explore' },
		{ src: '/open-book.svg', alt: 'learn icon', label: 'Learn' }
	];
	import { cn } from '$lib/utils.js';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
	{#each navLink as link}
		<Button variant="link" class="text-neutral-800">
			<img src={link.src} alt={link.alt} height="16" width="16" class="mr-3" />
			{link.label}
		</Button>
	{/each}

	<Button variant="outline" class="text-neutral-800 border-b-4 border-neutral-800">
		<img src="/plus-square.svg" alt="story icon" height="16" width="16" class="mr-3" />
		Post
	</Button>
</nav>
