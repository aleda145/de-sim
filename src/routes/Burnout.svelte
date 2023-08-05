<script>
	import { burnout } from './stores';
	/**
	 * @param {number} burn
	 */
	function burnoutMath(burn) {
		if (burn < 50) {
			return 50;
		}
		return 49;
	}
</script>

<button
	on:click={() => ($burnout = burnoutMath($burnout))}
	aria-label="Decrease the counter by one"
>
	<svg aria-hidden="true" viewBox="0 0 1 1">
		<path d="M0,0.5 L1,0.5" />
	</svg>
</button>
