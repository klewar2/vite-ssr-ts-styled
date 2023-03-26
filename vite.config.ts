import react from "@vitejs/plugin-react-swc";
import ssr from "vite-plugin-ssr/plugin";
import type { UserConfig } from "vite";

const config: UserConfig = {
    plugins: [
        react({
            plugins: [
                [
                    "@swc/plugin-styled-components",
                    {
                        displayName: true,
                    },
                ],
            ],
        }),
        ssr(),
    ],
    ssr: {
        noExternal: ["styled-components", "@emotion/*"],
    },
};

export default config;
