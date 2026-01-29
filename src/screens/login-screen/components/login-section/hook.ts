import { saveAuthToken } from "@/actions";
import { showError, showSuccess } from "@/components/ui/toast";
import { DASHBOARD_BASE_PATH } from "@/constants/configs";
import { useAPIErrorHandler } from "@/hooks/error-handler";
import { useLogin } from "@/services/api/auth";
import { useAuthStateStore, useAuthTokenStore } from "@/store";
import { utils } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const LoginFormSchema = z.object({
	email: z.email({ message: "Please provide a valid email address" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.max(20, {
			message: "Password must be at most 20 characters long",
		}),
});

export const useLoginSection = () => {
	const router = useRouter();

	const { setAuthToken } = useAuthTokenStore();
	const { setIsAuthenticated } = useAuthStateStore();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
	const [isRememberMeChecked, setIsRememberMeChecked] =
		useState<boolean>(false);
	const [isLoginOtpSendModalOpen, setIsLoginOtpSendModalOpen] =
		useState<boolean>(false);

	const { APIErrorHandler } = useAPIErrorHandler();

	const loginErrorHandler = APIErrorHandler();

	const loginForm = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { mutateAsync: login, isPending: isLoggingIn } = useLogin();

	const onLoginClick = async () => {
		if (isLoggingIn) {
			showError("Please wait while we log you in...");
			return;
		}

		if (
			loginForm.formState.errors.email &&
			loginForm.formState.errors.email.message
		) {
			showError(loginForm.formState.errors.email.message);
			return;
		}

		if (
			loginForm.formState.errors.password &&
			loginForm.formState.errors.password.message
		) {
			showError(loginForm.formState.errors.password.message);
			return;
		}

		try {
			const response = await login({
				email: loginForm.getValues("email"),
				password: loginForm.getValues("password"),
			});

			if (!response) {
				throw new Error("Something went wrong!");
			}

			await saveAuthToken({
				token: response.token,
				rememberMe: isRememberMeChecked,
			});

			setIsAuthenticated(true);
			setAuthToken(response.token);
			router.replace(DASHBOARD_BASE_PATH);

			showSuccess("Login successful", "You are now logged in");
		} catch (error) {
			loginErrorHandler(error);
		}
	};

	return {
		loginForm,
		email,
		onEmailChange: utils.uiInteractions.onTextInputChange(setEmail),
		password,
		onPasswordChange: utils.uiInteractions.onTextInputChange(setPassword),
		isPasswordVisible,
		onTogglePasswordVisibility:
			utils.uiInteractions.toggleBooleanState(setIsPasswordVisible),
		isRememberMeChecked,
		onToggleRememberMe: utils.uiInteractions.toggleBooleanState(
			setIsRememberMeChecked
		),
		isLoginOtpSendModalOpen,
		onToggleLoginOtpSendModal: utils.uiInteractions.toggleBooleanState(
			setIsLoginOtpSendModalOpen
		),
		onLoginClick,
	};
};
