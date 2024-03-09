<script lang="ts">
	import RegularPost from './RegularPost.svelte';
	import SpecialPost from './SpecialPost.svelte';
	export let timeline: Array<
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
</script>

<div class="mt-5">
	{#each timeline as item}
		{#if item.postType === 'regular'}
			<RegularPost date={item.date} cardList={item.cardList} />
		{:else}
			<SpecialPost position={item.position} />
		{/if}
	{/each}
</div>
