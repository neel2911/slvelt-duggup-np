<script lang="ts">
	import Bio from '$lib/bio/Bio.svelte';
	import Header from '$lib/header/Header.svelte';
	import Timeline from '$lib/timeline/Timeline.svelte';
	import type { ProfileType } from './types';
	import { data } from './data';
	const profile: ProfileType = data;
</script>

<Header />
<Bio bio={profile.bio} />
<Timeline timeline={profile.timeline} />
