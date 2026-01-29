type QueryArgs<T = undefined> = {
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";
	path: string;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	queryParams?: Record<any, any>;
	body?: T;
	additionalHeaders?: Record<string, string>;
} & (
	| {
			authorized?: false;
	  }
	| {
			authorized: true;
			authToken: string;
	  }
);

interface ConstructorArgs {
	baseUrl: string;
}

export class HttpClient {
	private readonly baseUrl: string;

	constructor(args: ConstructorArgs) {
		this.baseUrl = args.baseUrl;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	buildQueryString(params: Record<string, any> = {}) {
		const search = new URLSearchParams();
		Object.entries(params || {}).forEach(([key, value]) => {
			if (value === undefined || value === null || value === "") return;
			if (Array.isArray(value)) {
				value.forEach((v) => {
					if (v !== undefined && v !== null)
						search.append(key, String(v));
				});
			} else {
				search.append(key, String(value));
			}
		});
		const qs = search.toString();
		return qs ? qs : "";
	}

	query<T>(args: QueryArgs<T>) {
		let finalUrl = `${this.baseUrl}${args.path}`;

		if (args.queryParams) {
			finalUrl += `?${this.buildQueryString(args.queryParams)}`;
		}

		const headers: Record<string, string> = {
			"content-type": "application/json",
		};

		if (args.authorized) {
			headers["authorization"] = `Bearer ${args.authToken}`;
		}

		if (args.additionalHeaders) {
			for (const [key, value] of Object.entries(args.additionalHeaders)) {
				if (value) {
					headers[key.toLowerCase()] = value;
				}
			}
		}

		return fetch(finalUrl, {
			method: args.method,
			body: args.body ? JSON.stringify(args.body) : undefined,
			headers,
		});
	}
}
