<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import type { PositionType } from '$lib/timeline/types';
	export let currentPosition: PositionType;
</script>

<div class="flex flex-col items-end">
	<Avatar.Root class="h-9 w-9">
		<Avatar.Image src={currentPosition.brandLogoSrc} alt="brand logo" />
		<Avatar.Fallback>{currentPosition.fallbackBrandInitials}</Avatar.Fallback>
	</Avatar.Root>
	<div class="text-base font-bold text-black">{currentPosition.brandName}</div>
	<div class="text-xs text-[#7A9299]">{currentPosition.position}</div>
</div>
