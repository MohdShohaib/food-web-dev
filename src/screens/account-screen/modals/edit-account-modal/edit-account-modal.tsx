"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { User } from "@/types/models";
import { useEditAccountModal } from "./hook";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";

interface Props {
	open: boolean;
	onClose: () => void;
	onSubmit: () => Promise<void>;
	user: User;
}

const EditAccountModal = (props: Props) => {
	const { open, onClose, onSubmit, user } = props;

	const {
		name,
		onNameChange,
		email,
		onEmailChange,
		phone,
		onPhoneChange,
		countryCode,
		onCountryCodeChange,
		organizationName,
		onOrganizationNameChange,
		onCloseClick,
	} = useEditAccountModal({
		user,
		onClose,
	});

	return (
		<Dialog
			open={open}
			onOpenChange={(open) => (!open ? onCloseClick() : undefined)}
		>
			<DialogContent className="max-w-fit lg:max-w-fit p-6">
				<DialogHeader className="w-full flex flex-col">
					<DialogTitle className="hidden"></DialogTitle>
					<div className="w-full flex flex-col items-center justify-center">
						<h2 className="text-2xl font-semibold mt-5">
							Edit your profile
						</h2>
						<p className="mt-2 text-base text-neutral-400 text-center ">
							Changes will be saved to your account and used
							across the app.
						</p>
					</div>
				</DialogHeader>
				<div className="w-full grid grid-cols-12 mt-3 text-neutral-500">
					<div className="col-span-4 flex items-center gap-1.5">
						Name:
					</div>
					<div className="col-span-8 flex items-center justify-between gap-1.5">
						<p>{name}</p>
						<Button
							appearance="ghost"
							variant="neutral"
							className="bg-transparent active:bg-transparent hover:bg-transparent"
							size="icon"
						>
							<Icon name="penLine" className="text-primary" />
						</Button>
					</div>
				</div>
				<div className="w-full grid grid-cols-12 text-neutral-500">
					<div className="col-span-4 flex items-center gap-1.5">
						Email:
					</div>
					<div className="col-span-8 flex items-center justify-between gap-1.5">
						<p>{email}</p>
						<Button
							appearance="ghost"
							variant="neutral"
							className="bg-transparent active:bg-transparent hover:bg-transparent"
							size="icon"
						>
							<Icon name="penLine" className="text-primary" />
						</Button>
					</div>
				</div>
				<div className="w-full grid grid-cols-12 text-neutral-500">
					<div className="col-span-4 flex items-center gap-1.5">
						Contact:
					</div>
					<div className="col-span-8 flex items-center justify-between gap-1.5">
						<p>{`${user.profile.country_code} ${user.profile.mobile_number}`}</p>
						<Button
							appearance="ghost"
							variant="neutral"
							className="bg-transparent active:bg-transparent hover:bg-transparent"
							size="icon"
						>
							<Icon name="penLine" className="text-primary" />
						</Button>
					</div>
				</div>
				<div className="w-full grid grid-cols-12 text-neutral-500">
					<div className="col-span-4 flex items-center gap-1.5">
						Password:
					</div>
					<div className="col-span-8 flex items-center justify-between gap-1.5">
						<p>{user.profile.password ? "********" : "-"}</p>
						<Button
							appearance="ghost"
							variant="neutral"
							className="bg-transparent active:bg-transparent hover:bg-transparent"
							size="icon"
						>
							<Icon name="penLine" className="text-primary" />
						</Button>
					</div>
				</div>
				<div className="w-full grid grid-cols-12 text-neutral-500">
					<div className="col-span-4 flex items-center gap-1.5">
						Organization:
					</div>
					<div className="col-span-8 flex items-center justify-between gap-1.5">
						<p>{organizationName ?? "-"}</p>
						<Button
							appearance="ghost"
							variant="neutral"
							className="bg-transparent active:bg-transparent hover:bg-transparent"
							size="icon"
						>
							<Icon name="penLine" className="text-primary" />
						</Button>
					</div>
				</div>
				<Button
					appearance="outlined"
					variant="primary"
					className="text-base mt-5"
					size="lg"
				>
					<p>SAVE CHANGES</p>
				</Button>
				<Button
					appearance="ghost"
					variant="neutral"
					className="text-base"
					size="lg"
					onClick={onCloseClick}
				>
					<p>CANCEL</p>
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default EditAccountModal;
