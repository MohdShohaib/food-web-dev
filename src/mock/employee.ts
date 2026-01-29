import { Employee } from "@/types/models";
import { getMockSuperAdminUser } from "./super-admin-user";

const Employees: Employee[] = [
	{
		id: "01KFZPGDDDYMXHKMH6VV",
		first_name: "Neha",
		last_name: "Bhaskar",
		email: "neha@behrouz.com",
		country_code: "+91",
		mobile_number: "9876543210",
		employee_id: "BEH-123",
		password: null,
		role: "manager",
		status: "active",
		joining_date: new Date().toISOString(),
		client_id: "DEL-123",
		restaurant_id: null,
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		client: getMockSuperAdminUser(),
	},
];
