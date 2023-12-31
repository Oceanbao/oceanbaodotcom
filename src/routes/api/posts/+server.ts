import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import type { Frontmatter } from '$lib/types';

async function getPosts() {
	let posts: Frontmatter[] = [];

	const paths = import.meta.glob('/src/posts/*md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Frontmatter, 'slug'>;
			const post = { ...metadata, slug } satisfies Frontmatter;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export const GET = (async (event) => {
	const posts = await getPosts();
	return json(posts);
}) satisfies RequestHandler;
