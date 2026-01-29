"use client";

import { Icon } from "@/src/components/icons";
import { Button } from "@/src/components/ui/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/src/components/ui/input-group";
import { Eye } from "lucide-react";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Label } from "@/src/components/ui/label";
// import { LoginOtpSendModal } from "../../modals";
import { FormControl, FormField, FormItem, Form } from "@/src/components/ui/form";

const LoginSection = () => {
	const {
		isPasswordVisible,
		onTogglePasswordVisibility,
		isRememberMeChecked,
		onToggleRememberMe,
		isLoginOtpSendModalOpen,
		onToggleLoginOtpSendModal,
		loginForm,
		onLoginClick,
	} = useLoginSection();

	return (
		<div className="flex-1 flex flex-col items-center justify-center">
			<div className="w-full max-w-[500px] flex flex-col justify-center gap-3">
				<h2 className="text-4xl font-semibold">Welcome to Grubpac!</h2>
				<p className="text-lg">
					Enter your registered details to access your account.
				</p>
				<Form {...loginForm}>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							onLoginClick();
						}}
						className="w-full flex flex-col gap-3"
					>
						<FormField
							control={loginForm.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<InputGroup className="h-11 mt-2">
											<InputGroupInput
												placeholder="Email ID"
												className="text-base placeholder:text-base"
												{...field}
											/>
											<InputGroupAddon>
												<Icon name="user" />
											</InputGroupAddon>
										</InputGroup>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={loginForm.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<InputGroup className="h-11">
											<InputGroupInput
												placeholder="Password"
												className="text-base placeholder:text-base"
												type={
													isPasswordVisible
														? "text"
														: "password"
												}
												{...field}
											/>
											<InputGroupAddon>
												<Icon name="key" />
											</InputGroupAddon>
											<InputGroupAddon align="inline-end">
												<Button
													appearance="ghost"
													variant="neutral"
													className="hover:bg-transparent active:bg-transparent"
													onClick={
														onTogglePasswordVisibility
													}
												>
													<Eye className="text-primary" />
												</Button>
											</InputGroupAddon>
										</InputGroup>
									</FormControl>
								</FormItem>
							)}
						/>

						<div className="w-full flex items-center justify-between">
							<div className="flex gap-1">
								<Checkbox
									className="h-5 w-5"
									checked={isRememberMeChecked}
									onCheckedChange={onToggleRememberMe}
								/>
								<Label className="ml-1">Remember me</Label>
							</div>

							<Button
								appearance="ghost"
								variant="neutral"
								className="text-base p-0 hover:bg-transparent active:bg-transparent"
								type="submit"
							>
								<p>FORGOT PASSWORD</p>
							</Button>
						</div>
						<Button
							className="mt-2 text-base"
							size="lg"
							disabled={!loginForm.formState.isValid}
							type="submit"
						>
							<p>CONTINUE</p>
						</Button>
					</form>
				</Form>

				<p className="w-full flex items-center justify-center text-center">
					or
				</p>
				<Button
					variant="neutral"
					appearance="outlined"
					size="lg"
					className="text-base"
					onClick={onToggleLoginOtpSendModal}
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
		</div>
	);
};

export default LoginSection;
