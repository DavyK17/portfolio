<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

	type Props = SVGAttributes<SVGSVGElement> & {
		pathClass?: string;
	};

	let { class: className, pathClass = "fill-none stroke-current", ...rest }: Props = $props();
</script>

<svg class={className} viewBox="0 0 24 24" {...rest}>
	<path class={pathClass} d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
</svg>
