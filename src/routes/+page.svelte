<script lang="ts">
	import Bio from "$lib/img/bio.webp";
	import { Helpers } from "$lib/helpers";

	const frameworks = Object.values(Helpers.dev)
		.map(({ name }) => name)
		.join(", ");
</script>

<h1 class="uppercase">Davy Kamanzi</h1>
<div class="flex max-w-4xl max-md:flex-col max-md:items-center md:flex-row">
	<img class="h-60 border-2 border-solid border-black" src={Bio} alt="Davy Kamanzi" />
	<div class="px-4">
		<h2>Web developer</h2>
		<p>
			Full-stack engineer delivering robust, error-resistant applications. Proficient in HTML5, CSS3, JavaScript (ES6+), and
			SQL, with a particular focus on SvelteKit, Supabase, and PostgreSQL. Dedicated to sharpening my skills by learning
			from seasoned engineers and exploring new technologies.
		</p>
		<ul class="my-2 list-none p-0">
			<li><strong>Languages:</strong> HTML, CSS, JavaScript, Liquid, SQL</li>
			<li><strong>Frameworks/systems:</strong> {frameworks}</li>
		</ul>
	</div>
</div>
