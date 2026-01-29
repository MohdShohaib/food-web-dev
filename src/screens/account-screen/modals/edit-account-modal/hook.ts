import { User } from "@/types/models";
import { utils } from "@/utils";
import { useEffect, useState } from "react";

interface Args {
	user: User;
	onClose: () => void;
}

export const useEditAccountModal = (args: Args) => {
	const { user, onClose } = args;

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [countryCode, setCountryCode] = useState<string>("");
	const [organizationName, setOrganizationName] = useState<string | null>(
		null
	);

	const onCloseClick = () => {
		setName("");
		setEmail("");
		setPhone("");
		setCountryCode("");
		setOrganizationName(null);
		onClose();
	};

	useEffect(() => {
		console.log("user modal", user);
		if (user) {
			setName(
				user.type === "super_admin"
					? user.profile.name
					: user.profile.first_name
			);
			setEmail(user.profile.email!);
			setPhone(user.profile.mobile_number!);
			setCountryCode(user.profile.country_code!);
			setOrganizationName(
				user.type === "super_admin"
					? user.profile.organization_name
					: null
			);
		}
	}, [user]);

	return {
		name,
		onNameChange: utils.uiInteractions.onTextInputChange(setName),
		email,
		onEmailChange: utils.uiInteractions.onTextInputChange(setEmail),
		phone,
		onPhoneChange: utils.uiInteractions.onTextInputChange(setPhone),
		countryCode,
		onCountryCodeChange:
			utils.uiInteractions.onTextInputChange(setCountryCode),
		organizationName,
		onOrganizationNameChange: (e: React.ChangeEvent<HTMLInputElement>) =>
			setOrganizationName(e.target.value),
		onCloseClick,
	};
};
