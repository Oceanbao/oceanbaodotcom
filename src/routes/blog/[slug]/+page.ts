import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async (event) => {
	try {
		const post = await import(`../../../posts/${event.params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${event.params.slug}`);
	}
}) satisfies PageLoad;
