import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	optimizeDeps: {
		esbuildOptions: {
			target: "esnext"
		}
	},
	build: {
		rollupOptions: {
			external: ["chromium-bidi/lib/cjs/bidiMapper/BidiMapper", "chromium-bidi/lib/cjs/cdp/CdpConnection"]
		},
		target: "esnext"
	}
});
