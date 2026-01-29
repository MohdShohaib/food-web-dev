import type { SuperAdminUser } from "@/types/models";

const SuperAdminUser: SuperAdminUser = {
	id: "01KFZ135A0BJDCGQ1VW1AH9CZP",
	name: "Ankan Bhattacharya",
	client_id: "DEL-123",
	organization_name: "Behrouz",
	password: null,
	country: "India",
	country_code: "+91",
	mobile_number: "9876543210",
	email: "ankan@behrouz.com",
	state: "Delhi",
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
};

export const getMockSuperAdminUser = () => {
	return SuperAdminUser;
};
