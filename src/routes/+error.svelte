<script lang="ts">
	import { page } from "$app/state";

	const message =
		page.status >= 500 && page.status <= 599
			? "An internal server error occurred. Kindly refresh the page or try again later."
			: page.status === 404
				? "The requested resource was not found."
				: page.error?.message;
</script>

<h2 class="uppercase">{page.status} error</h2>
<p>{message}</p>
