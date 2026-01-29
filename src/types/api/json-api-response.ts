export type JsonApiResponse<D = void> = {
	code: number;
} & (
	| {
			success: true;
			message?: string;
			data?: D;
	  }
	| {
			success: false;
			error: string;
	  }
);
