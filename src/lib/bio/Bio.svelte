<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import CurrentPosition from './CurrentPosition.svelte';
	export let profile: {
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
</script>

<div class="flex flex-nowrap items-center justify-center mt-[50px]">
	<div>
		<Avatar.Root class="h-[120px] w-[120px]">
			<Avatar.Image src={profile.avatarSrc} alt={profile.avatarFallback} />
			<Avatar.Fallback>{profile.avatarFallback}</Avatar.Fallback>
		</Avatar.Root>
		<div class="text-2xl w-[120px] text-center font-bold text-[#4B5C6D]">{profile.username}</div>
	</div>
	<div class="flex flex-col w-[834px] ml-10">
		<div class="flex items-center justify-between">
			<p class="flex line-clamp-3 text-sm text-[#141618] w-[584px]">
				{profile.bio}
			</p>
			<CurrentPosition currentpostion={profile.currentposition} />
		</div>
		<div class="flex items-center justify-between mt-5">
			<div>
				<Button variant="outline" class="text-neutral-800 border-b-4 border-neutral-800">
					Followed
				</Button>
			</div>
			<div class="flex align-center">
				<Button variant="link" class="text-neutral-800">
					My website
					<img src="/link-external.svg" alt="external link" height="16" width="16" class="ml-3" />
				</Button>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild>
						<Button variant="ghost" size="icon">
							<img src="/options.svg" alt="options" height="16" width="16" />
						</Button>
					</DropdownMenu.Trigger>
				</DropdownMenu.Root>
			</div>
		</div>
	</div>
</div>
