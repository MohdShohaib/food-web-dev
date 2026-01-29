import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const SendOtpSchema = z.object({
	email: z.email({ message: "Please provide a valid email address" }),
});

export const useLoginOtpSendModal = () => {
	const otpLoginForm = useForm<z.infer<typeof SendOtpSchema>>({
		resolver: zodResolver(SendOtpSchema),
		defaultValues: {
			email: "",
		},
	});

	return {
		otpLoginForm,
	};
};
