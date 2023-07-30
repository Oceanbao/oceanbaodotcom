import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

import type { Frontmatter } from '$lib/types';

export const load = (async (event) => {
	try {
		const post = await import(`../../../posts/${event.params.slug}.md`);

		const content = post.default;
		const frontmatter: Frontmatter = post.metadata;

		return {
			content,
			frontmatter
		};
	} catch (e) {
		throw error(404, `Could not find ${event.params.slug}`);
	}
}) satisfies PageLoad;
