<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	export let currentpostion: {
		imgSrc: string;
		fallbackText: string;
		brandName: string;
		position: string;
	};
</script>

<div class="flex flex-col items-end">
	<Avatar.Root class="h-9 w-9">
		<Avatar.Image src={currentpostion.imgSrc} alt="brand logo" />
		<Avatar.Fallback>{currentpostion.fallbackText}</Avatar.Fallback>
	</Avatar.Root>
	<div class="text-base font-bold text-black">{currentpostion.brandName}</div>
	<div class="text-xs text-[#7A9299]">{currentpostion.position}</div>
</div>
