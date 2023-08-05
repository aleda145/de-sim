import { writable } from 'svelte/store';
import { browser } from '$app/environment';
// Get the value out of storage on load.
let stored = 0
if (browser){

    stored = localStorage.burnout
}
export const burnout = writable(stored || 75);

if (browser) {
    burnout.subscribe((value) => localStorage.burnout = value)
}
