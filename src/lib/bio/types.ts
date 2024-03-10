import type { PositionType } from '$lib/timeline/types';

export type BioType = {
	avatarSrc: string;
	avatarFallback: string;
	username: string;
	about: string;
	currentPosition: PositionType;
};
