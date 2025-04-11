<script lang="ts">
	import { page } from "$app/state";
	import Menu from "$lib/svg/Menu.svelte";

	let props = $props();
	let nav: HTMLElement;
	let slidingMenu: HTMLDivElement;

	const isActive = (slug: string = ""): boolean => page.url.pathname.startsWith(`/${slug}`);
	const toggleMenu = () => {
		nav.classList.toggle("nav-open");
		slidingMenu.classList.toggle("menu-open");
	};
</script>

{#snippet menu()}
	<ul>
		<li>
			<a class:active={isActive()} href="/">Home</a>
		</li>
		<li>
			<a class:active={isActive("projects")} href="/projects">Projects</a>
		</li>
		<li>
			<a class:active={isActive("contact")} href="/contact">Contact</a>
		</li>
	</ul>
{/snippet}

<nav bind:this={nav} {...props}>
	<div id="mobile-menu">
		{@render menu()}
	</div>
	<div id="sliding-menu" bind:this={slidingMenu}>
		<button class="h-fit w-fit" onclick={toggleMenu}>
			<Menu class="me-4 h-8 w-auto" />
		</button>
		{@render menu()}
	</div>
</nav>
