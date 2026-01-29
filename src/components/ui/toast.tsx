"use client";
import toast from "react-hot-toast";
import React from "react";
import { Icon } from "@/components/icons";
import Link from "next/link";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export function showSuccess(
	title: string,
	message: string,
	hideDetails = false,
	href = "",
	buttonText = "VIEW DETAILS"
) {
	toast.custom(
		(t) => (
			<div
				className="w-full flex items-center justify-between gap-3 bg-success-50 border border-success-450 px-4 py-3 rounded-(--radius)"
				style={{ zIndex: 10000 }}
			>
				<div className="flex gap-4 items-center">
					<FaRegCircleCheck
						strokeWidth={1}
						className="w-6 h-6 text-success-450"
					/>
					<span className="font-semibold text-success-700 text-lg">
						{title}
					</span>
					<span className="text-success-700">{message}</span>
				</div>
				<div className="flex items-center gap-3">
					{href && (
						<Link
							href={`${href ? href : ""}`}
							className={`${
								hideDetails ? "hidden" : ""
							} text-success-450 hover:text-success-600 px-4 font-medium border border-success-450 rounded-radius bg-white`}
						>
							{buttonText}
						</Link>
					)}
					<button
						onClick={() => toast.dismiss(t.id)}
						className="text-success-450 hover:text-success-600 px-2"
					>
						<IoMdClose strokeWidth={1} className="w-5 h-5" />
					</button>
				</div>
			</div>
		),
		{ position: "top-center" }
	);
}

export function showError(message: string) {
	toast.custom(
		<div className="w-full flex items-center justify-between px-4 py-3 rounded-(--radius) z-50 bg-error-50 border border-error-450 shadow-sm">
			<div className="flex gap-4 items-center text-error-700">
				<Icon name="warning" className="w-5 h-5 text-error-450" />
				<span className="text-base">{message}</span>
			</div>
		</div>,
		{ position: "top-center" }
	);
}
