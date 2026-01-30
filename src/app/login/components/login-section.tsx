"use client";

import { Button } from "@/components/ui/button";
import { Eye, EyeOff, KeyRound, UserRound } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { LoginOtpSendModal } from "../../modals";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Input } from "@/components/ui/input";
import { setAuth } from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginFormSchema = z.object({
	email: z.email({ message: "Please provide a valid email address" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.max(20, {
			message: "Password must be at most 20 characters long",
		}),
});


const LoginSection = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const { register, handleSubmit, formState: { errors, isValid } } = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<z.infer<typeof LoginFormSchema>> = async (data) => {
		// Handle login logic here
		dispatch(setAuth({ user: { id: "1234567890", name: "John Doe", phone: "1234567890", email: data.email, role: "superAdmin", } }));
		router.replace("/dashboard");
		toast.success("Logged in successfully!");
	};

	return (
		<div className="flex-1 flex flex-col items-center justify-center">
			<div className="w-full max-w-[500px] flex flex-col justify-center gap-3">
				<h2 className="text-4xl font-semibold">Welcome to Grubpac!</h2>
				<p className="text-lg">
					Enter your registered details to access your account.
				</p>
				<form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3">
					<div className="relative mt-2">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<UserRound size={18} className="text-gray-500 dark:text-gray-400" />
						</div>
						<Input
							id="email"
							type="email"
							autoComplete="email"
							required
							className="w-full px-10 h-11 placeholder:text-base"
							placeholder="Email ID"
							{...register("email", { required: true })}
						/>
					</div>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<KeyRound size={18} className="text-gray-500 dark:text-gray-400" />
						</div>
						<Input
							id="password"
							type={showPassword ? "text" : "password"}
							autoComplete="current-password"
							required
							className="w-full px-10 h-11 placeholder:text-base"
							placeholder="Password"
							{...register("password", { required: true })}
						/>
						<button
							type="button"
							className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? (
								<EyeOff size={18} className="text-gray-500 dark:text-gray-400" />
							) : (
								<Eye size={18} className="text-gray-500 dark:text-gray-400" />
							)}
						</button>
					</div>

					<div className="w-full flex items-center justify-between">
						<div className="flex gap-1">
							<Checkbox
								className="h-5 w-5"
								checked={isRememberMeChecked}
							// onCheckedChange={(setIsRememberMeChecked)}
							/>
							<Label className="ml-1">Remember me</Label>
						</div>

						<Button
							appearance="ghost"
							variant="neutral"
							className="text-base p-0 hover:bg-transparent active:bg-transparent"
						>
							<p>FORGOT PASSWORD</p>
						</Button>
					</div>
					<Button
						className="mt-2 text-base"
						size="lg"
						disabled={!isValid}
						type="submit"
					>
						<p>CONTINUE</p>
					</Button>
				</form>

				<p className="w-full flex items-center justify-center text-center">
					or
				</p>
				<Button
					variant="neutral"
					appearance="outlined"
					size="lg"
					className="text-base"
				// onClick={onToggleLoginOtpSendModal}
				>
					<p>LOGIN USING OTP</p>
				</Button>
				{/* <LoginOtpSendModal
					open={isLoginOtpSendModalOpen}
					onClose={onToggleLoginOtpSendModal}
					onSubmit={async () => {}}
				/> */}
				<div className="mt-4 w-full flex items-center justify-around">
					<Button
						appearance="ghost"
						variant="neutral"
						className="text-base"
					>
						<p>PRIVACY POLICY</p>
					</Button>

					<Button
						appearance="ghost"
						variant="neutral"
						className="text-base"
					>
						<p>TERMS OF SERVICE</p>
					</Button>
				</div>
			</div>
		</div >
	);
};

export default LoginSection;
