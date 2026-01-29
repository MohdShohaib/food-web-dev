import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const CreateRestaurantSchema = z.object({
	name: z
		.string({
			error: "Name is required",
		})
		.trim()
		.min(1, "Name is required"),
	pincode: z
		.string({
			error: "Pincode is required",
		})
		.trim(),
	state: z
		.string({
			error: "State is required",
		})
		.trim()
		.min(1, "State is required"),
	city: z
		.string({
			error: "City is required",
		})
		.trim()
		.min(1, "City is required"),
	address_line_one: z
		.string({
			error: "Address is required",
		})
		.trim()
		.min(1, "Address is required"),
	address_line_two: z
		.string({
			error: "Address is required",
		})
		.trim()
		.optional(),
	status: z.enum(["active", "inactive"]),
});

export const useCreateRestaurant = () => {
	const createRestaurantForm = useForm<
		z.infer<typeof CreateRestaurantSchema>
	>({
		resolver: zodResolver(CreateRestaurantSchema),
		defaultValues: {
			name: "",
			pincode: "",
			state: "",
			city: "",
			address_line_one: "",
			address_line_two: "",
			status: "active",
		},
	});

	return {
		createRestaurantForm,
	};
};
