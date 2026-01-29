export class UnauthorizedApiError extends Error {
	code: 401 | 403;

	constructor(code: 401 | 403) {
		super(
			"You are either logged out or maybe you are not authorized to access this resource"
		);

		this.code = code;
	}
}
