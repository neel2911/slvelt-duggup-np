<script lang="ts">
	import Label from '$lib/components/ui/label/label.svelte';
	import Card from '$lib/timeline/Card.svelte';
	import type { ArticleType } from '$lib/timeline/types';
	export let date: string;
	export let articles: ArticleType[] = [];
</script>

<div class="flex justify-center">
	<div class="flex w-[1250px] items-center">
		<div
			class="relative flex h-[288px] w-[180px] items-center border-r-2 border-dotted border-[#778FB1] justify-end"
		>
			<Label class="text-[#7A9299] text-xs font-norma mr-[40px]">{date}</Label>
			<img
				src="/small-tick.svg"
				alt="small-tick"
				height={16}
				width={16}
				class="absolute right-[-9px]"
			/>
		</div>
		<div class="flex w-[764px] ml-[40px] justify-between">
			{#each articles as item}
				<Card imgSrc={item.imgSrc} alt="article image" postDescription={item.postDescription} />
			{/each}
		</div>
	</div>
</div>
