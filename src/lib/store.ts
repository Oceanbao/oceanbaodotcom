import { writable } from 'svelte/store';

export const headerOn = writable<boolean>(false);

export const catsSelected = writable<Set<string>>(new Set<string>());
