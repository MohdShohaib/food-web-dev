import { Vertical } from "@/types/models/vertical";
import { Icon } from "@/types/models/icon";

export type SupportCategoriesStatus = "active" | "suspended" | "deleted";
export type FaqQuestionPublishingStatus = "published" | "draft";
export type FaqCategoryStatus = "active" | "suspended" | "deleted";

export interface SupportQuestion {
	id: string;
	question: string;
	answer: string;
	publishing_status: FaqQuestionPublishingStatus;
	status: FaqCategoryStatus;
	attachments: string[];
	created_at: string;
	updated_at: string;
	categories: SupportQuestionCategory[];
}

export interface SupportCategory {
	id: string;
	icon_id: string | null;
	vertical_id: string;
	description: string | null;
	name: string;
	index: number;
	status: SupportCategoriesStatus;
	created_at: string;
	updated_at: string;
	vertical: Vertical;
	icon: Icon;
	_count: {
		questions: number;
	};
}

interface SupportQuestionCategory {
	id: string;
	category_id: string;
	question_id: string;
	created_at: string;
	updated: string;
	category: SupportCategory;
}
