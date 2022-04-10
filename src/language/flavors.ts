interface IgnoreLanguage {
	readonly filename: string;
	readonly name: string;
}

const LANGUAGE_FLAVORS = [
	["alex"],
	["AWS Elastic Beanstalk", "eb"],
	["Bazaar", "bzr"],
	["Concurrent Versions System", "cvs"],
	["Chef"],
	["Cloud Foundry", "cf"],
	["Darcs", "boring"],
	["DeployHQ", "deploy"],
	["Docker"],
	["ESLint"],
	["Eleventy"],
	["Floobits", "floo"],
	["Git"],
	["Google Cloud", "gcloud"],
	["Heroku Slug Compiler", "slug"],
	["JSHint"],
	["Helm"],
	["markdownlint"],
	["Mercurial", "hg"],
	["Monotone", "mtn-"],
	["Mozilla Jetpack", "jpm"],
	["npm"],
	["nodemon"],
	["Nuxt"],
	["Perforce", "p4"],
	["Prettier"],
	["Solhint"],
	["Stylelint"],
	["Stylint"],
	["Swagger Codegen", "swagger-codegen-"],
	["Syncthing", "st"],
	["Team Foundation", "tf"],
	["Tokei"],
	["Up"],
	["Vercel"],
	["VSCode Extension API", "vscode"],
	["Yarn"],
] as const;

export const flavors = LANGUAGE_FLAVORS.map<IgnoreLanguage>(([name, ext]) => ({
	filename: `.${(ext ?? name).toLowerCase()}ignore`,
	name,
}));
