<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	export let imgSrc: string;
	export let alt: string;
	export let postDescription: string;
</script>

<Card.Root class="w-[344px] h-[226px] overflow-hidden">
	<Card.Header class="p-0">
		<img src={imgSrc} {alt} width={342} height={136} />
	</Card.Header>
	<Card.Description class="p-6">
		<p class="line-clamp-2">{postDescription}</p>
	</Card.Description>
</Card.Root>
