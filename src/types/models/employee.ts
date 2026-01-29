import { SuperAdminUser } from "./user";

export type employee_role = "manager" | "delivery" | "super_admin";
export type employee_status = "active" | "inactive" | "suspended" | "deleted";

export interface Employee {
	id: string;
	first_name: string;
	last_name: string;
	email: string;
	country_code: string;
	mobile_number: string;
	employee_id: string;
	password: string | null;
	role: employee_role;
	status: employee_status;
	joining_date: string;
	client_id: string | null;
	restaurant_id: string | null;
	created_at: string;
	updated_at: string;
	client: SuperAdminUser | null;
}
