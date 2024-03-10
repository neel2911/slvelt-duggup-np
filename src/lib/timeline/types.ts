export type ArticleType = { imgSrc: string; postDescription: string };

export type RegularPostType = {
	postType: 'regular';
	date: string;
	articles: ArticleType[];
};

export type PositionType = {
	brandLogoSrc: string;
	fallbackBrandInitials: string;
	brandName: string;
	position: string;
	date?: string;
	location?: string;
	jobType?: string;
};

export type SpecialPostType = {
	postType: 'special';
	position: PositionType;
};

export type TimelineType = Array<RegularPostType | SpecialPostType>;
