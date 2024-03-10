import type { BioType } from '$lib/bio/types';
import type { TimelineType } from '$lib/timeline/types';

export type ProfileType = {
	bio: BioType;
	timeline: TimelineType;
};
