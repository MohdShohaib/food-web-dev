"use client";

import { ShortLogo } from "@/components/brand";
import { Icon } from "@/components/icons";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { useLoginOtpSendModal } from "./hook";
import { Form } from "react-hook-form";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

interface Props {
	open: boolean;
	onClose: () => void;
	onSubmit: () => Promise<void>;
}

const LoginOtpSendModal = (props: Props) => {
	const { open, onClose, onSubmit } = props;

	const { otpLoginForm } = useLoginOtpSendModal();

	return (
		<Dialog
			open={open}
			onOpenChange={(open) => (!open ? onClose() : undefined)}
		>
			<DialogContent>
				<DialogHeader className="w-full flex flex-col">
					<DialogTitle className="hidden"></DialogTitle>
					<ShortLogo />
					<div className="w-full flex flex-col items-center justify-center">
						<h2 className="text-3xl font-medium -mt-2">
							OTP Login
						</h2>
						<p className="mt-1 text-sm">
							Enter your registered email ID
						</p>
					</div>
				</DialogHeader>
				<div className="w-full flex flex-col gap-4">
					<Form {...otpLoginForm}>
						<form
							onSubmit={(e) => {
								e.preventDefault();
							}}
						>
							<FormField
								control={otpLoginForm.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<InputGroup className="h-11 mt-4">
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
							<Button
								type="submit"
								appearance={"outlined"}
								disabled={!otpLoginForm.formState.isValid}
								size="lg"
								className="mt-8 w-full text-base"
							>
								<p>NEXT</p>
							</Button>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default LoginOtpSendModal;
