<script>
	import { burnout } from './stores';
	/**
	 * @param {number} burn
	 * @param {number} change
	 */
	function burnoutMath(burn, change) {
		return burn + change;
	}
</script>

<button
	on:click={() => ($burnout = burnoutMath($burnout, 1))}
	aria-label="Decrease the counter by one"
>
	<svg aria-hidden="true" viewBox="0 0 1 1">
		<path d="M0,0.5 L1,0.5" />
	</svg>
</button>
