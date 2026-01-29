export interface SuperAdminUser {
	id: string;
	name: string;
	client_id: string;
	organization_name: string;
	password: string | null;
	country: string | null;
	state: string | null;
	email: string | null;
	mobile_number: string | null;
	country_code: string | null;
	created_at: string;
	updated_at: string;
}

export interface EmployeeUser {
	id: string;
	first_name: string;
	last_name: string;
	country_code: string;
	mobile_number: string;
	password: string | null;
	email: string;
	employee_id: string;
	joining_date: string;
	client_id: string | null;
	restaurant_id: string | null;
	role: "manager" | "delivery";
	created_at: string;
	updated_at: string;
}

export type User =
	| ({
			type: "super_admin";
	  } & {
			profile: SuperAdminUser;
	  })
	| ({
			type: "manager" | "delivery";
	  } & {
			profile: EmployeeUser;
	  });
