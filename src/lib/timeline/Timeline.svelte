<script lang="ts">
	import RegularPost from '$lib/timeline/RegularPost.svelte';
	import SpecialPost from '$lib/timeline/SpecialPost.svelte';
	import type { TimelineType } from '$lib/timeline/types';
	export let timeline: TimelineType;
</script>

<div class="mt-5">
	{#each timeline as item}
		{#if item.postType === 'regular'}
			<RegularPost date={item.date} articles={item.articles} />
		{:else}
			<SpecialPost position={item.position} />
		{/if}
	{/each}
</div>
