<script lang="ts">
	let props = $props();
	let parentProps = { ...props, fill: undefined };
</script>

<svg width="24" height="24" viewBox="0 0 24 24" {...parentProps}>
	<path fill={props.fill ?? "#ceff00"} d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
</svg>
