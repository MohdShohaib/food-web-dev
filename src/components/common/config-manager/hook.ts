import { useAppConfigStore } from "@/store";
import { useGetConfig } from "@/services/api/common";
import { useAPIErrorHandler } from "@/hooks/error-handler";
import { useEffect } from "react";
import { BaseConfig } from "@/types/models";
import {
	FAQ_ATTACHMENT_BACKEND_KEY,
	ICON_BACKEND_KEY,
} from "@/constants/configs";

export const useConfigManager = () => {
	const { setConfig, setIsConfigLoading } = useAppConfigStore();
	const { APIErrorHandler } = useAPIErrorHandler();

	const configErrorHandler = APIErrorHandler();

	const {
		data: configData,
		isPending: isGettingConfigData,
		error: getConfigError,
	} = useGetConfig();

	useEffect(() => {
		if (getConfigError) {
			configErrorHandler(getConfigError);
		}
	}, [getConfigError]);

	useEffect(() => {
		if (configData && configData.configs) {
			console.log(configData.configs);

			const newConfigs: BaseConfig = {
				icons_base_url: "",
				faq_attachment_base_url: "",
			};

			for (const config of configData.configs) {
				if (config.key === ICON_BACKEND_KEY) {
					newConfigs.icons_base_url = config.value;
				} else if (config.key === FAQ_ATTACHMENT_BACKEND_KEY) {
					newConfigs.faq_attachment_base_url = config.value;
				}
			}

			setConfig(newConfigs);
		}
	}, [configData]);

	useEffect(() => {
		setIsConfigLoading(isGettingConfigData);
	}, [isGettingConfigData]);
};
