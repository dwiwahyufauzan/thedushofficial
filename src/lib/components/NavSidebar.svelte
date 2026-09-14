<script lang="ts">
	// ============================================================
	// NavSidebar.svelte — Navigasi sidebar vertikal ala BMTH
	// Desktop: fixed kiri dengan mix-blend-difference
	// Mobile: full-screen overlay dengan hamburger button
	// ============================================================
	import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let isMenuOpen = $state(false);

	const navItems = [
		{ index: '01', label: 'Home', href: '/', text: ['H0m', 'e'] },
		{ index: '02', label: 'Music', href: '/music', text: ['Mu5i', 'c'] },
		{ index: '03', label: 'About', href: '/about', text: ['Ab0ut', ''] },
		{ index: '04', label: 'Gallery', href: '/gallery', text: ['Gal3', 'ry'] },
		{ index: '05', label: 'Gigs', href: '/gigs', text: ['G1g5', ''] },
		{ index: '06', label: 'Contact', href: '/contact', text: ['Cont4', 'ct'] }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	// Tutup menu jika escape ditekan
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isMenuOpen) {
			closeMenu();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- ============================================================
     Desktop: Fixed sidebar kiri dengan mix-blend-difference
     Mobile: Hamburger button + full-screen overlay
     ============================================================ -->
<header
	class="relative z-50 lg:fixed lg:top-0 lg:left-4 lg:flex lg:h-svh lg:items-center lg:mix-blend-difference"
>
	<!-- Hamburger Button (Mobile Only) -->
	<button
		onclick={toggleMenu}
		aria-expanded={isMenuOpen}
		aria-controls="nav-menu"
		aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
		class="fixed top-0 right-0 z-[60] m-0 cursor-pointer border-none bg-transparent p-4 text-sm font-medium tracking-widest text-white uppercase lg:hidden"
	>
		{isMenuOpen ? '_close' : '_menu'}
	</button>

	<!-- Mobile overlay background -->
	{#if isMenuOpen}
		<div
			role="presentation"
			class="fixed inset-0 z-40 bg-black/80 lg:hidden"
			onclick={closeMenu}
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 150 }}
		></div>
	{/if}

	<!-- Nav List -->
	<nav aria-label="Primary Navigation">
		<span id="nav-menu-label" class="sr-only">Primary Navigation</span>
		<ul
			id="nav-menu"
			aria-labelledby="nav-menu-label"
			class="
        fixed top-0 left-0 z-50 flex h-full
        w-48 flex-col items-start
        justify-center gap-px overflow-y-auto
        bg-white py-16
        transition-transform duration-200
        ease-in-out lg:relative
        lg:h-auto
        lg:w-auto lg:bg-transparent
        lg:py-0
        {isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      "
		>
			{#each navItems as item, i}
				{@const isActive = $page.url.pathname === item.href}
				<li class="relative block w-36 overflow-clip lg:w-36 xl:w-52">
					{#if isMenuOpen}
						<div in:fly={{ x: -20, delay: i * 60, duration: 250, easing: quintOut }}>
							<a
								href={item.href}
								onclick={closeMenu}
								aria-current={isActive ? 'page' : undefined}
								class="
                  flex flex-col p-1 pb-3 leading-none
                  uppercase transition-colors duration-100
                  hover:bg-white hover:text-black
                  xl:p-3 xl:pb-5
                  {isActive ? 'bg-white text-black' : 'text-black lg:text-white'}
                "
							>
								<!-- Index label -->
								<span class="block pb-1 font-sans text-[10px] font-medium tracking-wide lg:text-xs">
									Indx.{item.index}
								</span>

								<!-- Nav text + arrow icon -->
								<span class="flex flex-1 items-end gap-1">
									<span
										class="flex flex-1 origin-center scale-y-[1.7] justify-between font-serif text-3xl font-black -tracking-[4px] duration-100 xl:text-4xl 2xl:text-5xl"
									>
										<span>{item.text[0]}</span>
										{#if item.text[1]}
											<span>{item.text[1]}</span>
										{/if}
									</span>
									<!-- Arrow icon merah #c3423c -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25.25"
										viewBox="0 0 25 25.25"
										class="block h-auto w-4 max-w-full shrink-0 object-contain lg:-mb-1"
										aria-hidden="true"
									>
										<path
											fill="#c3423c"
											d="M25 25.25H0v-2.5h20.806L1.346 2.363 3.154.637 22.5 20.9V0H25Z"
										/>
									</svg>
								</span>

								<span class="sr-only">{item.label}</span>
							</a>
						</div>
					{:else}
						<a
							href={item.href}
							onclick={closeMenu}
							aria-current={isActive ? 'page' : undefined}
							class="
                flex flex-col p-1 pb-3 leading-none
                uppercase transition-colors duration-100
                hover:bg-white hover:text-black
                xl:p-3 xl:pb-5
                {isActive ? 'bg-white text-black' : 'text-black lg:text-white'}
              "
						>
							<!-- Index label -->
							<span class="block pb-1 font-sans text-[10px] font-medium tracking-wide lg:text-xs">
								Indx.{item.index}
							</span>

							<!-- Nav text + arrow icon -->
							<span class="flex flex-1 items-end gap-1">
								<span
									class="flex flex-1 origin-center scale-y-[1.7] justify-between font-serif text-3xl font-black -tracking-[4px] duration-100 xl:text-4xl 2xl:text-5xl"
								>
									<span>{item.text[0]}</span>
									{#if item.text[1]}
										<span>{item.text[1]}</span>
									{/if}
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25.25"
									viewBox="0 0 25 25.25"
									class="block h-auto w-4 max-w-full shrink-0 object-contain lg:-mb-1"
									aria-hidden="true"
								>
									<path
										fill="#c3423c"
										d="M25 25.25H0v-2.5h20.806L1.346 2.363 3.154.637 22.5 20.9V0H25Z"
									/>
								</svg>
							</span>

							<span class="sr-only">{item.label}</span>
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</header>
