/**
 * @type {import('next').NextConfig}
 */

module.exports = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/ecommerce-coffee',
				permanent: true
			}
		];
	}
};
