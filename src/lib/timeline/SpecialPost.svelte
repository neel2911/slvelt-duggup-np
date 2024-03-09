<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
	export let position: {
		brandLogoSrc?: string;
		fallbackName?: string;
		brandName?: string;
		location?: string;
		date?: string;
		position?: string;
		jobType?: string;
	};
</script>

<div class="flex justify-center">
	<div class="flex w-[1250px] items-center">
		<div
			class="text-[#7A9299] relative flex h-[157px] w-[180px] items-center border-r-2 border-dotted border-[#778FB1] justify-end"
		>
			<div class="flex flex-col items-end mr-[40px]">
				<Avatar.Root class="h-12 w-12">
					<Avatar.Image src={position.brandLogoSrc} alt="brand logo" />
					<Avatar.Fallback>{position.fallbackName}</Avatar.Fallback>
				</Avatar.Root>
				<div class="text-base font-bold text-black">{position.brandName}</div>
				<div class="text-xs text-[#7A9299] font-norma text-right">
					{position.location}
					<br />
					Joined
					<br />
					{position.date}
				</div>
			</div>
			<img
				src="/big-tick.svg"
				alt="small-tick"
				height={27}
				width={28}
				class="absolute right-[-15px]"
			/>
			<img
				src="/chevron-up.svg"
				alt="chevron up"
				height={16}
				width={16}
				class="absolute right-[-9px] top-0"
			/>
		</div>
		<div class="flex w-[764px] ml-[40px] justify-between">
			<Alert.Root>
				<Alert.Title class="text-xl font-bold text-[#141618]">{position.location}</Alert.Title>
				<Alert.Description class="text-xs text-[#7A9299]">{position.jobType}</Alert.Description>
			</Alert.Root>
		</div>
	</div>
</div>
