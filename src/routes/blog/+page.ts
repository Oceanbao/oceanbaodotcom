import type { PageLoad } from './$types';
import type { Frontmatter } from '$lib/types';

export const load = (async (event) => {
	const response = await event.fetch('api/posts');
	const posts: Frontmatter[] = await response.json();

	const categories = new Map<string, number>();
	posts.forEach((post) => {
		post.categories.forEach((cat) => {
			const currVal = categories.get(cat);
			if (currVal === undefined) {
				categories.set(cat, 1);
			} else {
				categories.set(cat, currVal + 1);
			}
		});
	});
	return { posts, categories };
}) satisfies PageLoad;
