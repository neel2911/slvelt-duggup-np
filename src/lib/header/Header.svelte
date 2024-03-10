<script>
	import MainNav from '$lib/header/MainNav.svelte';
	import UserNav from '$lib/header/UserNav.svelte';
</script>

<div class="border-dotted border-b">
	<div class="flex h-16 items-center px-4">
		<img src="/duggup-logo.svg" alt="duggup Logo" width={108} height={27} />
		<div class="ml-auto flex items-center space-x-4">
			<MainNav className="mx-6" />
			<UserNav />
		</div>
	</div>
</div>
