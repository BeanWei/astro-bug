import { join } from 'path'

export default function() {
	return {
		name: '@astrojs/test-integration',
			hooks: {
				'astro:config:setup': ({ injectRoute }) => {
          injectRoute({
						pattern: '/test-[slug]',
						entryPoint: join(process.cwd(), "endpoint.ts")
					});
				}
			}
	}
}
