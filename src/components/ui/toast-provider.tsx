"use client";
import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
	return (
		<Toaster
			position="top-center"
			toastOptions={{
				duration: 4000,
				style: {
					borderRadius: "var(--radius)",
					padding: 0,
					boxShadow:
						"0 2px 8px 0 rgb(var(--black) / 0.04), 0 4px 16px 0 rgb(var(--black) / 0.08)",
					minWidth: 0,
					background: "rgb(var(--background))",
					color: "rgb(var(--foreground))",
				},
				success: {
					iconTheme: {
						primary: "rgb(var(--success-450))",
						secondary: "rgb(var(--white))",
					},
				},
				error: {
					iconTheme: {
						primary: "rgb(var(--error-450))",
						secondary: "rgb(var(--white))",
					},
				},
			}}
			containerStyle={{
				top: 12,
				zIndex: 10000,
			}}
		/>
	);
}
