"use client";

import { InnerPageHeader } from "@/components/elements";
import { RESTAURANTS_BASE_PATH } from "@/constants/configs";
import { useCreateRestaurant } from "./hook";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";

const CreateRestaurantsScreen = () => {
	const { createRestaurantForm } = useCreateRestaurant();

	return (
		<div className="w-full min-h-screen flex flex-col bg-background font-inter text-foreground">
			<InnerPageHeader
				backButton
				defaultFallbackRoute={RESTAURANTS_BASE_PATH}
			/>
			<div className="w-full flex-1 flex flex-col p-4">
				<p className="text-2xl font-semibold text-foreground">
					{"Where's"} Your Business Operating?
				</p>
				<p className="text-muted-foreground mt-1">
					Add your restaurant to start managing your Grubpacs
					efficiently.
				</p>
				<div className="w-full flex-1 pt-10 flex items-center justify-center">
					<Form {...createRestaurantForm}>
						<form
							className="w-full max-w-[1400px] flex flex-col"
							onSubmit={(e) => {
								e.preventDefault();
							}}
						>
							<div className="w-full flex gap-5 ">
								<div className="flex-1 flex flex-col gap-2 justify-center items-start">
									<Label className="text-neutral-500 text-base">
										Restaurant Name
									</Label>
									<FormField
										control={createRestaurantForm.control}
										name="name"
										render={({ field }) => (
											<FormItem className="w-full">
												<FormControl>
													<Input
														placeholder="Name your property"
														className="mt-1 w-full h-12 text-base placeholder:text-base"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<Label className="text-neutral-500 text-base mt-6">
										Add the address (optional)
									</Label>
									<div className="w-full flex gap-2 mt-1">
										<FormField
											control={
												createRestaurantForm.control
											}
											name="pincode"
											render={({ field }) => (
												<FormItem className="flex-1">
													<FormControl>
														<Input
															placeholder="Pincode"
															className="mt-1 w-full h-12 text-base placeholder:text-base"
															{...field}
														/>
													</FormControl>
												</FormItem>
											)}
										/>
										<FormField
											control={
												createRestaurantForm.control
											}
											name="state"
											render={({ field }) => (
												<FormItem className="flex-1">
													<FormControl>
														<Input
															placeholder="State"
															className="mt-1 w-full h-12 text-base placeholder:text-base"
															{...field}
														/>
													</FormControl>
												</FormItem>
											)}
										/>
										<FormField
											control={
												createRestaurantForm.control
											}
											name="city"
											render={({ field }) => (
												<FormItem className="flex-1">
													<FormControl>
														<Input
															placeholder="City"
															className="mt-1 w-full h-12 text-base placeholder:text-base"
															{...field}
														/>
													</FormControl>
												</FormItem>
											)}
										/>
									</div>
									<FormField
										control={createRestaurantForm.control}
										name="address_line_one"
										render={({ field }) => (
											<FormItem className="w-full">
												<FormControl>
													<Input
														placeholder="Line 1"
														className="mt-1 w-full h-12 text-base placeholder:text-base"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										control={createRestaurantForm.control}
										name="address_line_two"
										render={({ field }) => (
											<FormItem className="w-full">
												<FormControl>
													<Input
														placeholder="Line 2"
														className="mt-1 w-full h-12 text-base placeholder:text-base"
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>
									<Label className="text-neutral-500 text-base mt-6">
										Status
									</Label>
									<Controller
										control={createRestaurantForm.control}
										name="status"
										render={({ field }) => (
											<RadioGroup
												name={field.name}
												value={field.value}
												onValueChange={field.onChange}
												className="flex items-center gap-6 mt-2"
												orientation="horizontal"
											>
												<div className="flex items-center gap-2">
													<RadioGroupItem
														value="active"
														id="status-active"
													/>
													<Label
														htmlFor="status-active"
														className="cursor-pointer text-sm font-medium text-neutral-500"
													>
														Active
													</Label>
												</div>
												<div className="flex items-center gap-2">
													<RadioGroupItem
														value="inactive"
														id="status-inactive"
													/>
													<Label
														htmlFor="status-inactive"
														className="cursor-pointer text-sm font-medium text-neutral-500"
													>
														Inactive
													</Label>
												</div>
											</RadioGroup>
										)}
									/>
								</div>
								<div className="flex-1 h-96 bg-accent"></div>
							</div>
							<div className="w-full flex justify-end items-center mt-6">
								<Button
									variant="primary"
									disabled={
										!createRestaurantForm.formState.isValid
									}
								>
									<Icon name="check" />
									<p>SAVE DETAILS</p>
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default CreateRestaurantsScreen;
