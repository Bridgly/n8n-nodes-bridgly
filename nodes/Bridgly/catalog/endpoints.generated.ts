// Generated file. Do not edit.
export type CatalogLeafField =
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'string'; input: 'text' | 'date' | 'datetime' }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'number'; integer: boolean }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'boolean' }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'enum'; options: string[] }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'stringArray' };

export type CatalogField =
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'string'; input: 'text' | 'date' | 'datetime' }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'number'; integer: boolean }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'boolean' }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'enum'; options: string[] }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'stringArray' }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'object'; fields: CatalogLeafField[] };

export type CatalogEndpoint = { id: string; platform: string; title: string; description: string; method: 'GET' | 'POST'; path: string; fields: CatalogField[] };

export const endpoints: CatalogEndpoint[] = [
	{
		"id": "linkedin_get_company_from_url",
		"platform": "LinkedIn",
		"title": "Fetch a LinkedIn company by company slug",
		"description": "Get a LinkedIn company page from the slug in its URL, e.g. \"openai\". Returns the name, tagline, description, industry, employee count, headquarters and other locations, website, follower count, specialties, funding details and similar companies. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-company-from-url",
		"fields": [
			{
				"name": "universalName",
				"description": "The company's LinkedIn universal name — the slug in linkedin.com/company/<universalName> — or the company, school or showcase page link itself, e.g. \"openai\" or \"https://www.linkedin.com/company/openai\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_from_url",
		"platform": "LinkedIn",
		"title": "Fetch a LinkedIn profile by profile slug",
		"description": "Get a LinkedIn profile from the slug in its URL, e.g. \"williamhgates\". Returns the name, headline, location, about section, full work history, education, skills, certifications, languages, projects and more. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-from-url",
		"fields": [
			{
				"name": "memberIdentity",
				"description": "The member's public identity — the slug in linkedin.com/in/<memberIdentity> — or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_job",
		"platform": "LinkedIn",
		"title": "Fetch a LinkedIn job posting by URL",
		"description": "Get a LinkedIn job posting from its URL. Returns the title, full description, company, location, remote option, experience level, employment type, application link, posting and expiry dates, and applicant and view counts. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-job",
		"fields": [
			{
				"name": "jobUrl",
				"description": "The LinkedIn job posting URL, or its numeric job id, e.g. \"https://www.linkedin.com/jobs/view/4417164255/\" or \"4417164255\". A jobs search link with a job open (`?currentJobId=<id>`) works too.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_posts_from_company",
		"platform": "LinkedIn",
		"title": "List posts published by a LinkedIn company",
		"description": "List the posts a LinkedIn company page has published, newest first. Each post includes the text, images, shared links, publish date and reaction, comment and share counts. Page through older posts with `start`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-posts/from-company",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "universalName",
				"description": "The company universal name, or the company, school or showcase page link itself, e.g. \"openai\" or \"https://www.linkedin.com/company/openai\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_posts_from_profile",
		"platform": "LinkedIn",
		"title": "List posts published by a LinkedIn profile",
		"description": "List the posts and reposts a LinkedIn member has published, newest first, going back through their full history. Each post includes the text, images, shared links, publish date and reaction, comment and share counts. Page through older posts with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-posts/from-profile",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_post_detail",
		"platform": "LinkedIn",
		"title": "Fetch a single LinkedIn post by URN",
		"description": "Get a single LinkedIn post by its activity URN. Returns the post text, author, publish date, images, any shared article, event or job, reaction, comment and share counts, and its comments. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-post-detail",
		"fields": [
			{
				"name": "activityUrn",
				"description": "The post/update to fetch — a `urn:li:activity:<id>` or the post link, e.g. \"urn:li:activity:7300000000000000000\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_activity_comments",
		"platform": "LinkedIn",
		"title": "Fetch the comment thread on a LinkedIn post",
		"description": "Get the comments on a LinkedIn post by its activity URN. Each comment includes the text, author, time posted and like and reply counts. Page through the rest with `start`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-activity-comments",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "activityUrn",
				"description": "The activity to fetch comments for — a `urn:li:activity:<id>` or the post link, e.g. \"urn:li:activity:7300000000000000000\" or \"https://www.linkedin.com/feed/update/urn:li:activity:7300000000000000000/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "sortOrder",
				"description": "Comment ordering: \"relevance\" for LinkedIn's \"Most relevant\" ranking (default), \"recent\" for newest first.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"relevance",
					"recent"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_comments",
		"platform": "LinkedIn",
		"title": "List comments made by a LinkedIn profile",
		"description": "List the comments a LinkedIn member has written on posts across LinkedIn. Each comment includes the text, time posted, a link to it and the post it was left on. Page through older comments with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-comments",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_reactions",
		"platform": "LinkedIn",
		"title": "List posts a LinkedIn member reacted to",
		"description": "List the posts a LinkedIn member has liked or reacted to, newest first. Each item includes the reaction type, the post's text and author, and its like, comment and share counts. Page through older reactions with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-reactions",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_experience",
		"platform": "LinkedIn",
		"title": "List the work experience of a LinkedIn profile",
		"description": "List every position on a LinkedIn member's profile, including roles the full profile leaves out. Each position includes the title, company with its link and logo, employment type, location, dates and description. `count` sets how many companies come back, each with every position held there; page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-experience",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of companies to return (1–100), each with every position held there. Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_education",
		"platform": "LinkedIn",
		"title": "List the education of a LinkedIn profile",
		"description": "List every education entry on a LinkedIn member's profile. Each entry includes the school with its link and logo, degree, field of study, dates, grade, activities and description. Page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-education",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_skills",
		"platform": "LinkedIn",
		"title": "List the skills of a LinkedIn profile",
		"description": "List every skill on a LinkedIn member's profile, in the order the profile shows them, with how many members endorsed each. Page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-skills",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_certifications",
		"platform": "LinkedIn",
		"title": "List the certifications of a LinkedIn profile",
		"description": "List every license and certification on a LinkedIn member's profile, with the issuing organization, issue and expiry dates, credential ID and credential link. Page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-certifications",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_publications",
		"platform": "LinkedIn",
		"title": "List the publications of a LinkedIn profile",
		"description": "List every publication on a LinkedIn member's profile, with the publisher, publication date, description and link. Page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-publications",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_volunteering",
		"platform": "LinkedIn",
		"title": "List the volunteer experience of a LinkedIn profile",
		"description": "List every volunteer role on a LinkedIn member's profile, with the organization, cause, dates and description. Page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-volunteering",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_honors",
		"platform": "LinkedIn",
		"title": "List the honors and awards of a LinkedIn profile",
		"description": "List every honor and award on a LinkedIn member's profile, with the issuer, issue date and description. Page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-honors",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_interests_top_voices",
		"platform": "LinkedIn",
		"title": "List the Top Voices a LinkedIn profile follows",
		"description": "List the Top Voices from the interests section of a LinkedIn member's profile, each with their name, headline, profile link, photo and follower count. Page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-interests/top-voices",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_interests_companies",
		"platform": "LinkedIn",
		"title": "List the companies a LinkedIn profile follows",
		"description": "List the companies from the interests section of a LinkedIn member's profile, each with its name, page link, logo and follower count. Page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-interests/companies",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_interests_groups",
		"platform": "LinkedIn",
		"title": "List the groups of a LinkedIn profile",
		"description": "List the groups from the interests section of a LinkedIn member's profile, each with its name, link, logo and member count. Page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-interests/groups",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_interests_newsletters",
		"platform": "LinkedIn",
		"title": "List the newsletters a LinkedIn profile subscribes to",
		"description": "List the newsletters from the interests section of a LinkedIn member's profile, each with its title, description, how often it is published, link, cover image and publisher. Page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-interests/newsletters",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_profile_interests_schools",
		"platform": "LinkedIn",
		"title": "List the schools a LinkedIn profile follows",
		"description": "List the schools from the interests section of a LinkedIn member's profile, each with its name, page link, logo and follower count. Page on with the `nextStart` from the previous response. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-interests/schools",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "publicId",
				"description": "The member public identity, or the profile link itself, e.g. \"williamhgates\" or \"https://www.linkedin.com/in/williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_get_post_reactions",
		"platform": "LinkedIn",
		"title": "List the members who reacted to a LinkedIn post",
		"description": "List the members who reacted to a LinkedIn post, with each person's name, headline, profile link, profile picture and the reaction they chose. Page through the rest with `start`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-post-reactions",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "activityUrn",
				"description": "The post/update to fetch reactions for — a `urn:li:activity:<id>` or the post link, e.g. \"urn:li:activity:7300000000000000000\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_search_all",
		"platform": "LinkedIn",
		"title": "Global LinkedIn search",
		"description": "Search all of LinkedIn by keyword in one call and get matching people, companies, jobs, posts, groups and more, along with the total number of matches. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/all",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_search_companies",
		"platform": "LinkedIn",
		"title": "Search LinkedIn companies",
		"description": "Find LinkedIn companies by keyword. Each result includes the company name, industry, location, follower count, description, logo and page link. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/companies",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_search_courses",
		"platform": "LinkedIn",
		"title": "Search LinkedIn courses",
		"description": "Find LinkedIn Learning courses by keyword. Each result includes the course title, author, format, duration, release date and thumbnail. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/courses",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_search_events",
		"platform": "LinkedIn",
		"title": "Search LinkedIn events",
		"description": "Find LinkedIn events by keyword. Each result includes the event name, date, location, organizer, attendee count, whether it is online and its link. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/events",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_search_groups",
		"platform": "LinkedIn",
		"title": "Search LinkedIn groups",
		"description": "Find LinkedIn groups by keyword. Each result includes the group name, member count, description, logo and link. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/groups",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_search_jobs",
		"platform": "LinkedIn",
		"title": "Search LinkedIn jobs",
		"description": "Search LinkedIn job listings by keyword, with optional filters for location, workplace type, experience level, job type and date posted. Each result includes the job title, company, location, salary when listed and posting date. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/jobs",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "location",
				"description": "Geographic location to filter jobs by, e.g. \"San Francisco Bay Area\", \"India\", \"Remote\".",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "workplaceType",
				"description": "Restrict to jobs with this workplace arrangement.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"on-site",
					"remote",
					"hybrid"
				]
			},
			{
				"name": "experienceLevel",
				"description": "Restrict to jobs at this seniority level.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"internship",
					"entry-level",
					"associate",
					"mid-senior",
					"director",
					"executive"
				]
			},
			{
				"name": "jobType",
				"description": "Restrict to jobs with this employment type.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"full-time",
					"part-time",
					"contract",
					"temporary",
					"internship",
					"volunteer",
					"other"
				]
			},
			{
				"name": "datePosted",
				"description": "Restrict to posts published within a recent window.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"past-24h",
					"past-week",
					"past-month"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_search_posts",
		"platform": "LinkedIn",
		"title": "Search LinkedIn posts",
		"description": "Search LinkedIn posts by keyword, sorted by relevance or newest first and optionally limited to a recent time window. Each result includes the post text, author, link and reaction, comment and share counts. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/posts",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "sortOrder",
				"description": "Result ordering: \"date_posted\" for newest-first, \"relevance\" for LinkedIn ranking.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"date_posted",
					"relevance"
				]
			},
			{
				"name": "datePosted",
				"description": "Restrict to posts published within a recent window.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"past-24h",
					"past-week",
					"past-month"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_search_products",
		"platform": "LinkedIn",
		"title": "Search LinkedIn products",
		"description": "Find software products listed on LinkedIn by keyword. Each result includes the product name, category, maker, description, top features, integrations and the companies that use it. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/products",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_search_schools",
		"platform": "LinkedIn",
		"title": "Search LinkedIn schools",
		"description": "Find schools and universities on LinkedIn by keyword. Each result includes the name, location, student and alumni count, description, logo and page link. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/schools",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "linkedin_search_services",
		"platform": "LinkedIn",
		"title": "Search LinkedIn services",
		"description": "Find professionals offering services on LinkedIn by keyword. Each result includes the provider's name, headline, location, the services they offer and their service page link. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/services",
		"fields": [
			{
				"name": "start",
				"description": "Number of results to skip. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_get_post",
		"platform": "Reddit",
		"title": "Fetch a Reddit post with its comments",
		"description": "Get a Reddit post from its URL together with its comments. Returns the title, body, author, subreddit, score, upvote ratio, comment count and links, plus the comment thread. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/get-post",
		"fields": [
			{
				"name": "url",
				"description": "Link to the Reddit post to fetch (with or without query), e.g. \"https://www.reddit.com/r/programming/comments/1u3a0cd/title/\". A redd.it short link works too.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sort",
				"description": "Comment ordering. Defaults to the subreddit's suggested sort, usually \"best\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"best",
					"top",
					"new",
					"controversial",
					"old",
					"qa"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_get_comment",
		"platform": "Reddit",
		"title": "Fetch a single Reddit comment with its thread",
		"description": "Get a single Reddit comment from its permalink, together with the post it was left on and the replies beneath it. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/get-comment",
		"fields": [
			{
				"name": "permalink",
				"description": "Permalink of the Reddit comment to fetch — an absolute URL or a site-relative path, e.g. \"/r/programming/comments/1u3a0cd/title/labc123/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sort",
				"description": "Ordering of the replies. Defaults to the subreddit's suggested sort, usually \"best\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"best",
					"top",
					"new",
					"controversial",
					"old",
					"qa"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_get_subreddit",
		"platform": "Reddit",
		"title": "Reddit: Fetch subreddit metadata",
		"description": "Get the details of a subreddit by name: title, description, subscriber count, creation date, icon and banner, posting settings and the community rules. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/get-subreddit",
		"fields": [
			{
				"name": "subreddit",
				"description": "Subreddit name, with or without the \"r/\" prefix, or the subreddit link, e.g. \"programming\" or \"https://www.reddit.com/r/programming/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_get_user",
		"platform": "Reddit",
		"title": "Fetch a Reddit user profile",
		"description": "Get a Reddit user's public profile by username: post and comment karma, account creation date, avatar and whether the account is verified, a moderator or has Reddit Premium. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/get-user",
		"fields": [
			{
				"name": "username",
				"description": "Reddit username, with or without the \"u/\" prefix, or the profile link, e.g. \"spez\" or \"https://www.reddit.com/user/spez/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_list_user_posts",
		"platform": "Reddit",
		"title": "List a Reddit user's posts",
		"description": "List the most recent posts a Reddit user has submitted, with the title, body, subreddit, score, comment count and link of each. Page through older posts with `cursor`. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/list-user-posts",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "username",
				"description": "Reddit username, with or without the \"u/\" prefix, or the profile link, e.g. \"spez\" or \"https://www.reddit.com/user/spez/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "sort",
				"description": "Result ordering. Defaults to \"new\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"new",
					"hot",
					"top",
					"controversial"
				]
			},
			{
				"name": "time",
				"description": "Time window for the \"top\" and \"controversial\" sorts. Defaults to \"all\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"hour",
					"day",
					"week",
					"month",
					"year",
					"all"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_list_user_comments",
		"platform": "Reddit",
		"title": "List a Reddit user's comments",
		"description": "List the most recent comments a Reddit user has written. Each comment includes its text, score and subreddit, along with the title, link and author of the post it was left on. Page through older comments with `cursor`. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/list-user-comments",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "username",
				"description": "Reddit username, with or without the \"u/\" prefix, or the profile link, e.g. \"spez\" or \"https://www.reddit.com/user/spez/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "sort",
				"description": "Result ordering. Defaults to \"new\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"new",
					"hot",
					"top",
					"controversial"
				]
			},
			{
				"name": "time",
				"description": "Time window for the \"top\" and \"controversial\" sorts. Defaults to \"all\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"hour",
					"day",
					"week",
					"month",
					"year",
					"all"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_list_user_overview",
		"platform": "Reddit",
		"title": "List a Reddit user's mixed post/comment activity",
		"description": "List a Reddit user's recent activity, posts and comments together in the order they were made, as it appears on their profile. Page through older activity with `cursor`. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/list-user-overview",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "username",
				"description": "Reddit username, with or without the \"u/\" prefix, or the profile link, e.g. \"spez\" or \"https://www.reddit.com/user/spez/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "sort",
				"description": "Result ordering. Defaults to \"new\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"new",
					"hot",
					"top",
					"controversial"
				]
			},
			{
				"name": "time",
				"description": "Time window for the \"top\" and \"controversial\" sorts. Defaults to \"all\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"hour",
					"day",
					"week",
					"month",
					"year",
					"all"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_list_subreddit_posts",
		"platform": "Reddit",
		"title": "Reddit: List posts in a subreddit feed",
		"description": "List the posts in a subreddit sorted by hot, new, top or rising, optionally limited to a time window. Each post includes the title, body, author, score, comment count and link. Page through results with `cursor`. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/list-subreddit-posts",
		"fields": [
			{
				"name": "subreddit",
				"description": "Subreddit name, with or without the \"r/\" prefix, or the subreddit link, e.g. \"programming\" or \"https://www.reddit.com/r/programming/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sort",
				"description": "Feed ordering. Defaults to \"hot\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"hot",
					"new",
					"top",
					"rising"
				]
			},
			{
				"name": "time",
				"description": "Restrict results to a recent window. Defaults to \"all\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"hour",
					"day",
					"week",
					"month",
					"year",
					"all"
				]
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_list_subreddit_comments",
		"platform": "Reddit",
		"title": "Reddit: List recent comments in a subreddit",
		"description": "List the newest comments posted across a subreddit, with the text, author and score of each and the post it was left on. Page through results with `cursor`. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/list-subreddit-comments",
		"fields": [
			{
				"name": "subreddit",
				"description": "Subreddit name, with or without the \"r/\" prefix, or the subreddit link, e.g. \"programming\" or \"https://www.reddit.com/r/programming/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_search_all",
		"platform": "Reddit",
		"title": "Search Reddit across posts, communities and users",
		"description": "Search Reddit for a phrase and get matching posts, communities and users in one call, sorted by relevance, hot, top, new or comment count and optionally limited to a time window. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/search/all",
		"fields": [
			{
				"name": "query",
				"description": "The text to search Reddit for, e.g. \"openai\", \"best keyboard\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "subreddit",
				"description": "Restrict the search to a single subreddit (name with or without the \"r/\" prefix). Only applies to post search.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sort",
				"description": "Result ordering. Defaults to \"relevance\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"relevance",
					"hot",
					"top",
					"new",
					"comments"
				]
			},
			{
				"name": "time",
				"description": "Restrict results to a recent window. Defaults to \"all\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"hour",
					"day",
					"week",
					"month",
					"year",
					"all"
				]
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_search_communities",
		"platform": "Reddit",
		"title": "Search Reddit communities",
		"description": "Search Reddit for communities matching a phrase. Each result includes the subreddit name, description, weekly visitors and contributions, icon and link. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/search/communities",
		"fields": [
			{
				"name": "query",
				"description": "The text to search Reddit for, e.g. \"openai\", \"best keyboard\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "subreddit",
				"description": "Restrict the search to a single subreddit (name with or without the \"r/\" prefix). Only applies to post search.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sort",
				"description": "Result ordering. Defaults to \"relevance\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"relevance",
					"hot",
					"top",
					"new",
					"comments"
				]
			},
			{
				"name": "time",
				"description": "Restrict results to a recent window. Defaults to \"all\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"hour",
					"day",
					"week",
					"month",
					"year",
					"all"
				]
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_search_posts",
		"platform": "Reddit",
		"title": "Search Reddit posts",
		"description": "Search Reddit posts by phrase, across all of Reddit or within one subreddit, sorted by relevance, hot, top, new or comment count. Each result includes the title, author, subreddit, score, comment count and, when Reddit shows one, a passage matching the query. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/search/posts",
		"fields": [
			{
				"name": "query",
				"description": "The text to search Reddit for, e.g. \"openai\", \"best keyboard\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "subreddit",
				"description": "Restrict the search to a single subreddit (name with or without the \"r/\" prefix). Only applies to post search.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sort",
				"description": "Result ordering. Defaults to \"relevance\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"relevance",
					"hot",
					"top",
					"new",
					"comments"
				]
			},
			{
				"name": "time",
				"description": "Restrict results to a recent window. Defaults to \"all\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"hour",
					"day",
					"week",
					"month",
					"year",
					"all"
				]
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_search_users",
		"platform": "Reddit",
		"title": "Search Reddit users",
		"description": "Search Reddit for user accounts matching a phrase. Each result includes the username, total karma, avatar and profile link. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/search/users",
		"fields": [
			{
				"name": "query",
				"description": "The text to search Reddit for, e.g. \"openai\", \"best keyboard\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "subreddit",
				"description": "Restrict the search to a single subreddit (name with or without the \"r/\" prefix). Only applies to post search.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sort",
				"description": "Result ordering. Defaults to \"relevance\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"relevance",
					"hot",
					"top",
					"new",
					"comments"
				]
			},
			{
				"name": "time",
				"description": "Restrict results to a recent window. Defaults to \"all\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"hour",
					"day",
					"week",
					"month",
					"year",
					"all"
				]
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "reddit_search_comments",
		"platform": "Reddit",
		"title": "Search Reddit comments",
		"description": "Search Reddit comments by phrase. Each result includes the comment text and link along with the title and subreddit of the post it was left on. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/search/comments",
		"fields": [
			{
				"name": "query",
				"description": "The text to search Reddit for, e.g. \"openai\", \"best keyboard\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "subreddit",
				"description": "Restrict the search to a single subreddit (name with or without the \"r/\" prefix). Only applies to post search.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sort",
				"description": "Result ordering. Defaults to \"relevance\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"relevance",
					"hot",
					"top",
					"new",
					"comments"
				]
			},
			{
				"name": "time",
				"description": "Restrict results to a recent window. Defaults to \"all\".",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"hour",
					"day",
					"week",
					"month",
					"year",
					"all"
				]
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_get_tweet_detail",
		"platform": "X (Twitter)",
		"title": "X (Twitter): Fetch a tweet with its reply thread",
		"description": "Get a tweet by its ID together with the first page of replies beneath it. Returns the text, author, timestamp and like, retweet, reply, quote, bookmark and view counts for the tweet and each reply. Load more replies with `/x/get-tweet-replies`. Costs 1 credit per request.",
		"method": "POST",
		"path": "/x/get-tweet-detail",
		"fields": [
			{
				"name": "tweetId",
				"description": "Numeric ID of the focal tweet to expand, or the tweet link, e.g. \"1234567890\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sortOrder",
				"description": "Reply ordering: \"Relevance\" for X's ranking (default), \"Recency\" for newest first, \"Likes\" for most liked first.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"Relevance",
					"Recency",
					"Likes"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_get_tweet_replies",
		"platform": "X (Twitter)",
		"title": "X (Twitter): List the replies to a tweet",
		"description": "List the replies beneath a tweet, with the threads under each one. Returns the text, author, timestamp and engagement counts for each reply. Page through them with `cursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-tweet-replies",
		"fields": [
			{
				"name": "tweetId",
				"description": "Numeric ID of the tweet whose replies to list, or the tweet link, e.g. \"1234567890\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sortOrder",
				"description": "Reply ordering: \"Relevance\" for X's ranking (default), \"Recency\" for newest first, \"Likes\" for most liked first.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"Relevance",
					"Recency",
					"Likes"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_search",
		"platform": "X (Twitter)",
		"title": "Search tweets with X advanced-search operators",
		"description": "Search tweets with the same operators as X advanced search, such as from:, since:, min_faves: and lang:. Sort by latest or top and get each tweet's text, author, media, links and engagement counts. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/search",
		"fields": [
			{
				"name": "query",
				"description": "Raw search query — supports all X advanced-search operators, e.g. \"openai lang:en\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "withinHours",
				"description": "Only return tweets newer than this many hours.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": false
			},
			{
				"name": "count",
				"description": "Number of results to return (1–20). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sortOrder",
				"description": "Result ordering: \"Latest\" = chronological newest-first (default), \"Top\" = X's engagement ranking.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"Latest",
					"Top"
				]
			},
			{
				"name": "lang",
				"description": "BCP-47 language filter e.g. \"en\", \"ja\" (maps to `lang:XX`).",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_search_users",
		"platform": "X (Twitter)",
		"title": "Search X users",
		"description": "Search X accounts by name or keyword. Each result includes the handle, display name, bio, location, website, avatar and follower, following and tweet counts. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/search/users",
		"fields": [
			{
				"name": "query",
				"description": "Raw search query — supports all X advanced-search operators, e.g. \"openai lang:en\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–20). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_get_user",
		"platform": "X (Twitter)",
		"title": "Fetch an X user profile by handle",
		"description": "Get an X profile by handle: display name, bio, location, website, avatar and banner, follower, following, tweet and like counts, verification status, pinned tweet and join date. Costs 1 credit per request.",
		"method": "POST",
		"path": "/x/get-user",
		"fields": [
			{
				"name": "handle",
				"description": "X handle / screen name, with or without the @, or the profile link, e.g. \"elonmusk\" or \"https://x.com/elonmusk\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_get_user_tweets",
		"platform": "X (Twitter)",
		"title": "List an X user's tweets timeline",
		"description": "List the tweets an X account has posted, using its numeric user ID from the user profile endpoint. Each tweet includes the text, timestamp, media and like, retweet, reply and view counts. Load older tweets with `cursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-user-tweets",
		"fields": [
			{
				"name": "userId",
				"description": "Numeric user ID (rest_id) whose tweets to list, e.g. \"44196397\". Look it up from a handle with get-user.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_get_user_replies",
		"platform": "X (Twitter)",
		"title": "List an X user's replies",
		"description": "List the replies an X account has posted to other tweets, using its numeric user ID. Each reply includes the text, the tweet it answers, timestamp and engagement counts. Load older replies with `cursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-user-replies",
		"fields": [
			{
				"name": "userId",
				"description": "Numeric user ID (rest_id) whose tweets to list, e.g. \"44196397\". Look it up from a handle with get-user.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_get_user_media",
		"platform": "X (Twitter)",
		"title": "List an X user's media tweets",
		"description": "List the tweets with photos or videos an X account has posted, using its numeric user ID. Each tweet includes direct media links, the text, timestamp and engagement counts. Load older tweets with `cursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-user-media",
		"fields": [
			{
				"name": "userId",
				"description": "Numeric user ID (rest_id) whose tweets to list, e.g. \"44196397\". Look it up from a handle with get-user.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_get_followers",
		"platform": "X (Twitter)",
		"title": "List an X user's followers",
		"description": "List the accounts that follow an X user, using its numeric user ID. Each follower includes the handle, display name, bio, location and follower and following counts. Page through the list with `cursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-followers",
		"fields": [
			{
				"name": "userId",
				"description": "Numeric user ID (rest_id) whose tweets to list, e.g. \"44196397\". Look it up from a handle with get-user.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_get_following",
		"platform": "X (Twitter)",
		"title": "List the accounts an X user follows",
		"description": "List the accounts an X user follows, using its numeric user ID. Each account includes the handle, display name, bio, location and follower and following counts. Page through the list with `cursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-following",
		"fields": [
			{
				"name": "userId",
				"description": "Numeric user ID (rest_id) whose tweets to list, e.g. \"44196397\". Look it up from a handle with get-user.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_get_tweet_retweeters",
		"platform": "X (Twitter)",
		"title": "X (Twitter): List the users who retweeted a tweet",
		"description": "List the accounts that retweeted a tweet, with each account's handle, display name, bio and follower and following counts. Page through the list with `cursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-tweet-retweeters",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "tweetId",
				"description": "Numeric ID of the tweet whose retweeters to list, or the tweet link, e.g. \"1234567890\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "x_get_tweet_quotes",
		"platform": "X (Twitter)",
		"title": "X (Twitter): List quote tweets of a tweet",
		"description": "List the quote tweets of a tweet, the posts that shared it with added commentary, sorted by latest or top. Each includes the text, author, media and engagement counts. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-tweet-quotes",
		"fields": [
			{
				"name": "tweetId",
				"description": "Numeric ID of the tweet whose quote tweets to list, or the tweet link, e.g. \"1234567890\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–20). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "sortOrder",
				"description": "Result ordering: \"Latest\" = chronological newest-first (default), \"Top\" = X's engagement ranking.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"Latest",
					"Top"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_get_profile",
		"platform": "GitHub",
		"title": "Fetch a GitHub user's profile and pinned repositories",
		"description": "Get a GitHub user's public profile by username: name, bio, company, location, website, X handle, follower and repository counts, join date and pinned repositories. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/get-profile",
		"fields": [
			{
				"name": "username",
				"description": "GitHub username (login), or the profile link, e.g. \"torvalds\" or \"https://github.com/torvalds\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_get_contributions",
		"platform": "GitHub",
		"title": "Fetch a GitHub user's contribution calendar and totals",
		"description": "Get a GitHub user's contribution graph for a date range of up to one year: the contribution count for each day plus totals for commits, issues, pull requests, reviews and new repositories. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/get-contributions",
		"fields": [
			{
				"name": "username",
				"description": "GitHub username (login), or the profile link, e.g. \"torvalds\" or \"https://github.com/torvalds\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "from",
				"description": "ISO-8601 start of the contribution window (inclusive), e.g. \"2025-01-01T00:00:00Z\". Defaults to one year ago. Must be within one year of `to`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "datetime"
			},
			{
				"name": "to",
				"description": "ISO-8601 end of the contribution window (inclusive), e.g. \"2025-12-31T00:00:00Z\". Defaults to now.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "datetime"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_list_repositories",
		"platform": "GitHub",
		"title": "List a GitHub user's public repositories",
		"description": "List a GitHub user's public repositories, sorted by last push or another order. Each repository includes its description, primary language, star, fork and watcher counts and whether it is a fork or archived. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/list-repositories",
		"fields": [
			{
				"name": "username",
				"description": "GitHub username (login), or the profile link, e.g. \"torvalds\" or \"https://github.com/torvalds\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "order",
				"description": "Sort order for the repositories. Defaults to \"pushed\".",
				"required": false,
				"defaultLabel": "pushed",
				"type": "enum",
				"options": [
					"pushed",
					"updated",
					"created",
					"name",
					"stars"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_list_starred",
		"platform": "GitHub",
		"title": "List the repositories a GitHub user has starred",
		"description": "List the repositories a GitHub user has starred, with each repository's owner, description, primary language and star and fork counts. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/list-starred",
		"fields": [
			{
				"name": "username",
				"description": "GitHub username (login), or the profile link, e.g. \"torvalds\" or \"https://github.com/torvalds\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_list_projects",
		"platform": "GitHub",
		"title": "List a GitHub user's public projects",
		"description": "List a GitHub user's public project boards, with each project's title, description, link, open or closed state and creation and update dates. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/list-projects",
		"fields": [
			{
				"name": "username",
				"description": "GitHub username (login), or the profile link, e.g. \"torvalds\" or \"https://github.com/torvalds\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_search_repositories",
		"platform": "GitHub",
		"title": "Search public GitHub repositories",
		"description": "Search public GitHub repositories by keyword and filter by owner, language, stars, forks, topics, license or creation and last-push date. Each result includes the description, primary language and star and fork counts. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/search-repositories",
		"fields": [
			{
				"name": "query",
				"description": "Free-text search terms, matched against the default fields for this search type, e.g. \"web framework\".",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "owners",
				"description": "Limit to these owners (users or orgs). Maps to `user:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "repos",
				"description": "Limit to these \"owner/name\" repositories. Maps to `repo:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "language",
				"description": "Primary language, e.g. \"TypeScript\". Maps to `language:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "stars",
				"description": "Filter by star count. Provide any of gt / gte / lt / lte; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly greater than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "gte",
						"description": "Greater than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lt",
						"description": "Strictly less than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lte",
						"description": "Less than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					}
				]
			},
			{
				"name": "forks",
				"description": "Filter by fork count. Provide any of gt / gte / lt / lte; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly greater than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "gte",
						"description": "Greater than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lt",
						"description": "Strictly less than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lte",
						"description": "Less than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					}
				]
			},
			{
				"name": "size",
				"description": "Filter by repository size in KB. Provide any of gt / gte / lt / lte; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly greater than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "gte",
						"description": "Greater than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lt",
						"description": "Strictly less than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lte",
						"description": "Less than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					}
				]
			},
			{
				"name": "created",
				"description": "Filter by creation date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "pushed",
				"description": "Filter by date of last push. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "topics",
				"description": "Require each of these topics. Maps to `topic:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "license",
				"description": "SPDX license key, e.g. \"mit\". Maps to `license:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "archived",
				"description": "Filter by archived state. Maps to `archived:`.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			},
			{
				"name": "fork",
				"description": "Whether to include forks: \"exclude\" (default), \"include\" (`fork:true`), or \"only\" (`fork:only`).",
				"required": false,
				"defaultLabel": "exclude",
				"type": "enum",
				"options": [
					"exclude",
					"include",
					"only"
				]
			},
			{
				"name": "sort",
				"description": "Sort field. Defaults to relevance (\"best-match\").",
				"required": false,
				"defaultLabel": "best-match",
				"type": "enum",
				"options": [
					"best-match",
					"stars",
					"forks",
					"updated",
					"help-wanted-issues"
				]
			},
			{
				"name": "order",
				"description": "Sort direction. Defaults to \"desc\".",
				"required": false,
				"defaultLabel": "desc",
				"type": "enum",
				"options": [
					"desc",
					"asc"
				]
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_search_code",
		"platform": "GitHub",
		"title": "Search code across public GitHub repositories",
		"description": "Search source code across public GitHub repositories, filtered by language, file extension, file name, path, owner or repository. Each result gives the file name, path, link and the repository it belongs to. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/search-code",
		"fields": [
			{
				"name": "query",
				"description": "Free-text search terms, matched against the default fields for this search type, e.g. \"web framework\".",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "owners",
				"description": "Limit to these owners (users or orgs). Maps to `user:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "repos",
				"description": "Limit to these \"owner/name\" repositories. Maps to `repo:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "language",
				"description": "Programming language, e.g. \"Go\". Maps to `language:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "extension",
				"description": "File extension without the dot, e.g. \"ts\". Maps to `extension:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "filename",
				"description": "Exact file name, e.g. \"package.json\". Maps to `filename:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "path",
				"description": "Path prefix within the repo, e.g. \"src/app\". Maps to `path:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "fork",
				"description": "Whether to include forks. Defaults to excluding them.",
				"required": false,
				"defaultLabel": "exclude",
				"type": "enum",
				"options": [
					"exclude",
					"include"
				]
			},
			{
				"name": "sort",
				"description": "Sort field. Defaults to relevance (\"best-match\").",
				"required": false,
				"defaultLabel": "best-match",
				"type": "enum",
				"options": [
					"best-match",
					"indexed"
				]
			},
			{
				"name": "order",
				"description": "Sort direction. Defaults to \"desc\".",
				"required": false,
				"defaultLabel": "desc",
				"type": "enum",
				"options": [
					"desc",
					"asc"
				]
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "start",
				"description": "Number of results to skip (0–999). Defaults to 0. Only the first 1,000 results of a search can be paged through.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_search_commits",
		"platform": "GitHub",
		"title": "Search commits across public GitHub repositories",
		"description": "Search commits across public GitHub repositories by message, author, committer, date or hash. Each result includes the commit message, SHA, author, committer, link and repository. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/search-commits",
		"fields": [
			{
				"name": "query",
				"description": "Free-text search terms, matched against the default fields for this search type, e.g. \"web framework\".",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "owners",
				"description": "Limit to these owners (users or orgs). Maps to `user:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "repos",
				"description": "Limit to these \"owner/name\" repositories. Maps to `repo:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "author",
				"description": "Commits authored by this GitHub user. Maps to `author:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "committer",
				"description": "Commits committed by this GitHub user. Maps to `committer:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "authoredDate",
				"description": "Filter by author date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "committedDate",
				"description": "Filter by commit date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "hash",
				"description": "Commits with this SHA (or prefix). Maps to `hash:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "merge",
				"description": "Only merge commits (true) or exclude them (false). Maps to `merge:`.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			},
			{
				"name": "sort",
				"description": "Sort field. Defaults to relevance (\"best-match\").",
				"required": false,
				"defaultLabel": "best-match",
				"type": "enum",
				"options": [
					"best-match",
					"author-date",
					"committer-date"
				]
			},
			{
				"name": "order",
				"description": "Sort direction. Defaults to \"desc\".",
				"required": false,
				"defaultLabel": "desc",
				"type": "enum",
				"options": [
					"desc",
					"asc"
				]
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "start",
				"description": "Number of results to skip (0–999). Defaults to 0. Only the first 1,000 results of a search can be paged through.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_search_issues",
		"platform": "GitHub",
		"title": "Search GitHub issues",
		"description": "Search GitHub issues by keyword and filter by repository, state, author, assignee, labels, comment count or date. Each result includes the title, state, author, labels, comment count and dates. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/search-issues",
		"fields": [
			{
				"name": "query",
				"description": "Free-text search terms, matched against the default fields for this search type, e.g. \"web framework\".",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "owners",
				"description": "Limit to these owners (users or orgs). Maps to `user:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "repos",
				"description": "Limit to these \"owner/name\" repositories. Maps to `repo:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "language",
				"description": "Language of the containing repo. Maps to `language:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "state",
				"description": "Issue/PR state. Maps to `state:`.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"open",
					"closed"
				]
			},
			{
				"name": "author",
				"description": "Opened by this user. Maps to `author:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "assignee",
				"description": "Assigned to this user. Maps to `assignee:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "mentions",
				"description": "Mentioning this user. Maps to `mentions:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "labels",
				"description": "Require each of these labels. Maps to `label:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "comments",
				"description": "Filter by comment count. Provide any of gt / gte / lt / lte; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly greater than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "gte",
						"description": "Greater than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lt",
						"description": "Strictly less than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lte",
						"description": "Less than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					}
				]
			},
			{
				"name": "created",
				"description": "Filter by creation date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "updated",
				"description": "Filter by last update date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "closed",
				"description": "Filter by closed date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "order",
				"description": "Sort direction. Defaults to \"desc\".",
				"required": false,
				"defaultLabel": "desc",
				"type": "enum",
				"options": [
					"desc",
					"asc"
				]
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "reason",
				"description": "State reason for closed issues. Maps to `reason:`.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"completed",
					"not-planned",
					"reopened"
				]
			},
			{
				"name": "sort",
				"description": "Sort field. Defaults to relevance (\"best-match\").",
				"required": false,
				"defaultLabel": "best-match",
				"type": "enum",
				"options": [
					"best-match",
					"created",
					"updated",
					"comments"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_search_pull_requests",
		"platform": "GitHub",
		"title": "Search GitHub pull requests",
		"description": "Search GitHub pull requests by keyword and filter by repository, state, author, labels, review status, draft state or merge date. Each result includes the title, state, author, merge status, labels and dates. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/search-pull-requests",
		"fields": [
			{
				"name": "query",
				"description": "Free-text search terms, matched against the default fields for this search type, e.g. \"web framework\".",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "owners",
				"description": "Limit to these owners (users or orgs). Maps to `user:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "repos",
				"description": "Limit to these \"owner/name\" repositories. Maps to `repo:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "language",
				"description": "Language of the containing repo. Maps to `language:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "state",
				"description": "Issue/PR state. Maps to `state:`.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"open",
					"closed"
				]
			},
			{
				"name": "author",
				"description": "Opened by this user. Maps to `author:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "assignee",
				"description": "Assigned to this user. Maps to `assignee:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "mentions",
				"description": "Mentioning this user. Maps to `mentions:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "labels",
				"description": "Require each of these labels. Maps to `label:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "comments",
				"description": "Filter by comment count. Provide any of gt / gte / lt / lte; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly greater than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "gte",
						"description": "Greater than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lt",
						"description": "Strictly less than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lte",
						"description": "Less than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					}
				]
			},
			{
				"name": "created",
				"description": "Filter by creation date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "updated",
				"description": "Filter by last update date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "closed",
				"description": "Filter by closed date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "order",
				"description": "Sort direction. Defaults to \"desc\".",
				"required": false,
				"defaultLabel": "desc",
				"type": "enum",
				"options": [
					"desc",
					"asc"
				]
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "draft",
				"description": "Filter by draft state. Maps to `draft:`.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			},
			{
				"name": "merged",
				"description": "Filter by merge date (only merged PRs). Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "review",
				"description": "Review status. Maps to `review:`.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"none",
					"required",
					"approved",
					"changes-requested"
				]
			},
			{
				"name": "sort",
				"description": "Sort field. Defaults to relevance (\"best-match\").",
				"required": false,
				"defaultLabel": "best-match",
				"type": "enum",
				"options": [
					"best-match",
					"created",
					"updated",
					"comments"
				]
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_search_discussions",
		"platform": "GitHub",
		"title": "Search GitHub discussions",
		"description": "Search GitHub Discussions by keyword and filter by repository, author, comment count, date or whether they are answered. Each result includes the title, category, author, comment count and answered status. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/search-discussions",
		"fields": [
			{
				"name": "query",
				"description": "Free-text search terms, matched against the default fields for this search type, e.g. \"web framework\".",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "owners",
				"description": "Limit to these owners (users or orgs). Maps to `user:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "repos",
				"description": "Limit to these \"owner/name\" repositories. Maps to `repo:`.",
				"required": false,
				"defaultLabel": null,
				"type": "stringArray"
			},
			{
				"name": "author",
				"description": "Opened by this user. Maps to `author:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "comments",
				"description": "Filter by comment count. Provide any of gt / gte / lt / lte; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly greater than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "gte",
						"description": "Greater than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lt",
						"description": "Strictly less than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lte",
						"description": "Less than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					}
				]
			},
			{
				"name": "created",
				"description": "Filter by creation date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "updated",
				"description": "Filter by last update date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "answered",
				"description": "Whether the discussion is answered. Maps to `is:answered`.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			},
			{
				"name": "order",
				"description": "Sort direction. Defaults to \"desc\".",
				"required": false,
				"defaultLabel": "desc",
				"type": "enum",
				"options": [
					"desc",
					"asc"
				]
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_search_users",
		"platform": "GitHub",
		"title": "Search GitHub users and organizations",
		"description": "Search GitHub users and organizations by keyword, name, location, language, follower count, repository count or join date. Each result includes the username, name, bio, location and follower and repository counts. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/search-users",
		"fields": [
			{
				"name": "query",
				"description": "Free-text search terms, matched against the default fields for this search type, e.g. \"web framework\".",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "type",
				"description": "Restrict to users or organizations. Maps to `type:`.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"user",
					"org"
				]
			},
			{
				"name": "fullName",
				"description": "Match a display name, e.g. \"Grace Hopper\". Maps to `fullname:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "location",
				"description": "Profile location, e.g. \"San Francisco\". Maps to `location:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "language",
				"description": "Users who code in this language. Maps to `language:`.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "followers",
				"description": "Filter by follower count. Provide any of gt / gte / lt / lte; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly greater than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "gte",
						"description": "Greater than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lt",
						"description": "Strictly less than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lte",
						"description": "Less than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					}
				]
			},
			{
				"name": "repos",
				"description": "Filter by public repository count. Provide any of gt / gte / lt / lte; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly greater than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "gte",
						"description": "Greater than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lt",
						"description": "Strictly less than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lte",
						"description": "Less than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					}
				]
			},
			{
				"name": "created",
				"description": "Filter by account creation date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "sort",
				"description": "Sort field. Defaults to relevance (\"best-match\").",
				"required": false,
				"defaultLabel": "best-match",
				"type": "enum",
				"options": [
					"best-match",
					"followers",
					"repositories",
					"joined"
				]
			},
			{
				"name": "order",
				"description": "Sort direction. Defaults to \"desc\".",
				"required": false,
				"defaultLabel": "desc",
				"type": "enum",
				"options": [
					"desc",
					"asc"
				]
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "github_search_topics",
		"platform": "GitHub",
		"title": "Search GitHub topics",
		"description": "Search GitHub topics by keyword, optionally limited to featured or curated topics. Each result includes the topic name, display name, description and who created it. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/search-topics",
		"fields": [
			{
				"name": "query",
				"description": "Free-text search terms, matched against the default fields for this search type, e.g. \"web framework\".",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "featured",
				"description": "Only featured topics. Maps to `is:featured`.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			},
			{
				"name": "curated",
				"description": "Only curated topics. Maps to `is:curated`.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			},
			{
				"name": "repositories",
				"description": "Filter by number of repositories using the topic. Provide any of gt / gte / lt / lte; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly greater than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "gte",
						"description": "Greater than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lt",
						"description": "Strictly less than this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					},
					{
						"name": "lte",
						"description": "Less than or equal to this value.",
						"required": false,
						"defaultLabel": null,
						"type": "number",
						"integer": false
					}
				]
			},
			{
				"name": "created",
				"description": "Filter by topic creation date. Provide any of gt / gte / lt / lte as YYYY-MM-DD dates; combine a lower and upper bound for a range.",
				"required": false,
				"defaultLabel": null,
				"type": "object",
				"fields": [
					{
						"name": "gt",
						"description": "Strictly after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "gte",
						"description": "On or after this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lt",
						"description": "Strictly before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					},
					{
						"name": "lte",
						"description": "On or before this date (YYYY-MM-DD).",
						"required": false,
						"defaultLabel": null,
						"type": "string",
						"input": "date"
					}
				]
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "start",
				"description": "Number of results to skip (0–999). Defaults to 0. Only the first 1,000 results of a search can be paged through.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_user_reels",
		"platform": "Instagram",
		"title": "Instagram: List profile Reels",
		"description": "List Reels from a public Instagram profile with media links, engagement counts, collaborator IDs and owner details. Continue with nextCursor. Instagram may include other profile videos. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/user-reels",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, or the profile link, e.g. \"instagram\" or \"https://www.instagram.com/instagram/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_tagged_posts",
		"platform": "Instagram",
		"title": "Instagram: List posts tagging a profile",
		"description": "List public posts in which an Instagram account is tagged, including captions, media links and engagement counts. Continue with nextCursor; Instagram controls which tagged posts are visible. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/tagged-posts",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, or the profile link, e.g. \"instagram\" or \"https://www.instagram.com/instagram/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_stories",
		"platform": "Instagram",
		"title": "Instagram: Get current profile stories",
		"description": "Get the stories currently available on a public Instagram profile, including media variants, publish and expiration times, author details, mentions, links and shared posts. Returns an empty stories list when none are available. Stories are not paginated. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/stories",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, or the profile link, e.g. \"instagram\" or \"https://www.instagram.com/instagram/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_highlights",
		"platform": "Instagram",
		"title": "Instagram: List profile highlights",
		"description": "List saved story highlights on a public Instagram profile, including highlight IDs, titles and cover images. Use a highlight ID with the highlight endpoint to retrieve its stories. Continue with nextCursor. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/highlights",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, or the profile link, e.g. \"instagram\" or \"https://www.instagram.com/instagram/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_highlight",
		"platform": "Instagram",
		"title": "Instagram: Get a highlight and its stories",
		"description": "Get a saved Instagram highlight and its available stories, including media variants, publish times, author details, mentions, links and shared posts. Saved highlights do not expire. Stories in a highlight are returned together without pagination. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/highlight",
		"fields": [
			{
				"name": "highlightId",
				"description": "Numeric highlight ID, highlight:<ID>, or an Instagram stories/highlights link.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_post_likers",
		"platform": "Instagram",
		"title": "Instagram: Get post likers",
		"description": "Get the liker accounts Instagram exposes for a post or Reel, with usernames, names, profile images, private and verified flags, and the total liker count. Instagram can limit this list; it is not a complete audience export and does not support pagination. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/post-likers",
		"fields": [
			{
				"name": "shortcode",
				"description": "Post shortcode, or the post or Reel link, e.g. \"DA1b2C3d4E5\" or \"https://www.instagram.com/p/DA1b2C3d4E5/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_comment_replies",
		"platform": "Instagram",
		"title": "Instagram: List replies to a comment",
		"description": "List the accessible replies to an Instagram post comment in chronological order, including text, author, publish time, like count, the parent comment and total reply count. Supply the post shortcode and parent comment ID. Continue with nextCursor. Instagram may return a different page size than requested. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/comment-replies",
		"fields": [
			{
				"name": "shortcode",
				"description": "Post shortcode, or the post or Reel link, e.g. \"DA1b2C3d4E5\" or \"https://www.instagram.com/p/DA1b2C3d4E5/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "commentId",
				"description": "Numeric ID of the parent comment.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_location",
		"platform": "Instagram",
		"title": "Instagram: Get location details",
		"description": "Get an Instagram location by its numeric ID or location link. Returns its name, coordinates, category, post count, address, price range and hours status. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/location",
		"fields": [
			{
				"name": "locationId",
				"description": "Numeric Instagram location ID or an instagram.com/explore/locations/<ID>/ link.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_location_posts",
		"platform": "Instagram",
		"title": "Instagram: List posts at a location",
		"description": "List posts Instagram associates with a location, including captions, image and video URLs, publish times, engagement counts, tagged users and place details. Results use Instagram’s ranked order and may include nearby places. Continue with nextCursor. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/location-posts",
		"fields": [
			{
				"name": "locationId",
				"description": "Numeric Instagram location ID or an instagram.com/explore/locations/<ID>/ link.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_search",
		"platform": "Instagram",
		"title": "Instagram: Search posts by keyword or hashtag",
		"description": "Search public Instagram posts and Reels by keyword or hashtag. Returns media links, captions, publish times, engagement counts and owner details, with nextCursor for more results. Search results reflect Instagram’s ranking and available content. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/search",
		"fields": [
			{
				"name": "query",
				"description": null,
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_user",
		"platform": "Instagram",
		"title": "Instagram: Get user profile by username",
		"description": "Get a public Instagram profile by username: full name, bio, bio links, profile picture, follower, following and post counts, and whether the account is private, verified or a business. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/user",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, or the profile link, e.g. \"instagram\" or \"https://www.instagram.com/instagram/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_user_posts",
		"platform": "Instagram",
		"title": "Instagram: Get paginated user posts",
		"description": "List the posts on an Instagram profile. Each post includes the caption, image or video link, like and comment counts, timestamp and, for videos, the view count. Page through older posts with `cursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/user-posts",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, or the profile link, e.g. \"instagram\" or \"https://www.instagram.com/instagram/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_followers",
		"platform": "Instagram",
		"title": "Instagram: Get paginated user followers",
		"description": "List the followers of an Instagram account, with each follower's username, full name, profile picture and whether they are private or verified. Page through the list with `cursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/followers",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, or the profile link, e.g. \"instagram\" or \"https://www.instagram.com/instagram/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_following",
		"platform": "Instagram",
		"title": "Instagram: Get paginated users followed by the user",
		"description": "List the accounts an Instagram user follows, with each account's username, full name, profile picture and whether it is private or verified. Page through the list with `cursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/following",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, or the profile link, e.g. \"instagram\" or \"https://www.instagram.com/instagram/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_post",
		"platform": "Instagram",
		"title": "Instagram: Get post details by shortcode",
		"description": "Get an Instagram post or Reel by its shortcode, the code in its link (instagram.com/p/<shortcode>). Returns the caption, image or video link, like and comment counts, timestamp and, for videos, the view count. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/post",
		"fields": [
			{
				"name": "shortcode",
				"description": "Post shortcode, or the post or Reel link, e.g. \"DA1b2C3d4E5\" or \"https://www.instagram.com/p/DA1b2C3d4E5/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_post_comments",
		"platform": "Instagram",
		"title": "Instagram: Get comments on a post",
		"description": "List the comments on an Instagram post or Reel by its shortcode. Each comment includes the text, author, time posted and like count. Page through the comments with `cursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/post-comments",
		"fields": [
			{
				"name": "shortcode",
				"description": "Post shortcode, or the post or Reel link, e.g. \"DA1b2C3d4E5\" or \"https://www.instagram.com/p/DA1b2C3d4E5/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_search_users",
		"platform": "Instagram",
		"title": "Instagram: Search users",
		"description": "Search Instagram accounts by name or keyword. Each result includes the username, full name, bio, profile picture, follower and post counts, and whether the account is private, verified or a business. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/search-users",
		"fields": [
			{
				"name": "query",
				"description": null,
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_user_by_id",
		"platform": "Instagram",
		"title": "Instagram: Get user profile by user ID",
		"description": "Get a public Instagram profile from its numeric user ID: username, full name, bio, bio links, profile picture, follower, following and post counts, and whether the account is private, verified or a business. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/user-by-id",
		"fields": [
			{
				"name": "userId",
				"description": "Numeric Instagram user ID, e.g. \"787132\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_user_about",
		"platform": "Instagram",
		"title": "Instagram: Get account details from \"About this account\"",
		"description": "Get the details Instagram shows under \"About this account\": the month and year the account joined, the country it is based in, whether it is verified, how many usernames it has used before and how many profiles share many of its followers. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/user-about",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, or the profile link, e.g. \"instagram\" or \"https://www.instagram.com/instagram/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_hashtag_posts",
		"platform": "Instagram",
		"title": "Instagram: List posts with a hashtag",
		"description": "List the top posts, the newest posts or the Reels on an Instagram hashtag page, with captions, media links, publish times, engagement counts, owner details and the audio each Reel uses. Continue with nextCursor. Instagram decides how many posts each page holds. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/hashtag-posts",
		"fields": [
			{
				"name": "hashtag",
				"description": "Hashtag with or without the #, or its link, e.g. \"sunset\" or \"https://www.instagram.com/explore/tags/sunset/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "tab",
				"description": "Which hashtag tab to list: \"top\" for top posts, \"recent\" for the newest posts, or \"reels\" for Reels. Defaults to \"top\".",
				"required": false,
				"defaultLabel": "top",
				"type": "enum",
				"options": [
					"top",
					"recent",
					"reels"
				]
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_audio",
		"platform": "Instagram",
		"title": "Instagram: Get audio details",
		"description": "Get a song or original sound used in Instagram Reels by its audio ID or audio page link: title, artist, length, cover image, a downloadable audio file, whether it is trending and how many Reels use it. Get audio IDs from the audio field of a Reel. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/audio",
		"fields": [
			{
				"name": "audioId",
				"description": "Numeric audio ID, or the audio page link, e.g. \"6516695721690591\" or \"https://www.instagram.com/reels/audio/6516695721690591/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_audio_reels",
		"platform": "Instagram",
		"title": "Instagram: List Reels using an audio",
		"description": "List the Reels that use a song or original sound, with captions, media links, publish times, engagement counts and owner details. Continue with nextCursor. Instagram decides how many Reels each page holds. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/audio-reels",
		"fields": [
			{
				"name": "audioId",
				"description": "Numeric audio ID, or the audio page link, e.g. \"6516695721690591\" or \"https://www.instagram.com/reels/audio/6516695721690591/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_related_reels",
		"platform": "Instagram",
		"title": "Instagram: List Reels related to a Reel",
		"description": "List the Reels Instagram recommends after a given Reel, with captions, media links, publish times, engagement counts, owner details and audio. Continue with nextCursor. Recommendations change between requests. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/related-reels",
		"fields": [
			{
				"name": "shortcode",
				"description": "Post shortcode, or the post or Reel link, e.g. \"DA1b2C3d4E5\" or \"https://www.instagram.com/p/DA1b2C3d4E5/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_trending_reels",
		"platform": "Instagram",
		"title": "Instagram: List trending Reels",
		"description": "List the Reels Instagram’s Reels tab is recommending right now, with captions, media links, publish times, engagement counts, owner details and the audio each one uses. Continue with nextCursor. Recommendations change between requests. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/trending-reels",
		"fields": [
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "instagram_explore_posts",
		"platform": "Instagram",
		"title": "Instagram: List popular Explore posts",
		"description": "List the popular posts and Reels on Instagram’s Explore page, the same for every visitor rather than tailored to one account. Each post includes the caption, media links, publish time, engagement counts and owner details. Continue with nextCursor. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/explore-posts",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_user",
		"platform": "TikTok",
		"title": "Fetch a TikTok user by username",
		"description": "Get a public TikTok profile by username: nickname, bio, avatar, verification status, whether the account is private and its comment, duet and stitch settings. Costs 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user",
		"fields": [
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, or the profile link, for example \"tiktok\" or \"https://www.tiktok.com/@tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_user_posts",
		"platform": "TikTok",
		"title": "Get a TikTok user’s posts",
		"description": "List the videos and photo posts on a public TikTok account by username. Each post includes the caption, view, like, comment, share and save counts, sound, hashtags and cover image. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-posts",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, or the profile link, for example \"tiktok\" or \"https://www.tiktok.com/@tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–35). Defaults to 35.",
				"required": false,
				"defaultLabel": "35",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_user_liked_videos",
		"platform": "TikTok",
		"title": "Get the videos a TikTok user liked",
		"description": "List the posts a TikTok account liked, by username. Works for accounts that show their liked videos publicly. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-liked-videos",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, or the profile link, for example \"tiktok\" or \"https://www.tiktok.com/@tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–30). Defaults to 30.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_user_reposts",
		"platform": "TikTok",
		"title": "Get the videos a TikTok user reposted",
		"description": "List the posts a TikTok account reposted to its followers, by username, each with its original creator. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-reposts",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, or the profile link, for example \"tiktok\" or \"https://www.tiktok.com/@tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–30). Defaults to 30.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_user_followers",
		"platform": "TikTok",
		"title": "Get a TikTok user’s followers",
		"description": "List the followers of a public TikTok account by username, with each follower’s username, nickname, bio, avatar and follower counts. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-followers",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, or the profile link, for example \"tiktok\" or \"https://www.tiktok.com/@tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–30). Defaults to 30.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_user_following",
		"platform": "TikTok",
		"title": "Get the accounts a TikTok user follows",
		"description": "List the accounts a public TikTok user follows, by username, with each account’s username, nickname, bio, avatar and follower counts. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-following",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, or the profile link, for example \"tiktok\" or \"https://www.tiktok.com/@tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–30). Defaults to 30.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_user_playlists",
		"platform": "TikTok",
		"title": "Get a TikTok user’s playlists",
		"description": "List the playlists a TikTok creator made, by username, with each playlist’s ID, name, cover and number of posts. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-playlists",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, or the profile link, for example \"tiktok\" or \"https://www.tiktok.com/@tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–30). Defaults to 30.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_playlist_videos",
		"platform": "TikTok",
		"title": "Get the videos in a TikTok playlist",
		"description": "List the posts in a TikTok creator playlist by playlist ID, in playlist order. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-playlist-videos",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "playlistId",
				"description": "Playlist ID, as returned by `getUserPlaylists`, or the playlist URL.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–20). Defaults to 20.",
				"required": false,
				"defaultLabel": "20",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_video",
		"platform": "TikTok",
		"title": "Fetch a TikTok video by ID",
		"description": "Get a TikTok video or photo post by ID: caption, view, like, comment, share and save counts, creator, sound, hashtags, mentions, tagged place, cover image and subtitle files. Costs 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-video",
		"fields": [
			{
				"name": "videoId",
				"description": "Post ID, the number at the end of the post URL, or the post URL itself, for example \"7698770783367171359\" or \"https://www.tiktok.com/@tiktok/video/7698770783367171359\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_video_comments",
		"platform": "TikTok",
		"title": "Get the comments on a TikTok video",
		"description": "List the top-level comments on a TikTok post by ID, with each comment’s text, like and reply counts, author and whether the creator liked or pinned it. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-video-comments",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "videoId",
				"description": "Post ID, the number at the end of the post URL, or the post URL itself, for example \"7698770783367171359\" or \"https://www.tiktok.com/@tiktok/video/7698770783367171359\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–20). Defaults to 20.",
				"required": false,
				"defaultLabel": "20",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_comment_replies",
		"platform": "TikTok",
		"title": "Get the replies to a TikTok comment",
		"description": "List the replies to a comment on a TikTok post, with each reply’s text, like count and author. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-comment-replies",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "videoId",
				"description": "Post ID, the number at the end of the post URL, or the post URL itself, for example \"7698770783367171359\" or \"https://www.tiktok.com/@tiktok/video/7698770783367171359\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–20). Defaults to 20.",
				"required": false,
				"defaultLabel": "20",
				"type": "number",
				"integer": true
			},
			{
				"name": "commentId",
				"description": "ID of the comment whose replies to list.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_related_videos",
		"platform": "TikTok",
		"title": "Get videos related to a TikTok video",
		"description": "Get the posts TikTok recommends alongside a post, by post ID. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-related-videos",
		"fields": [
			{
				"name": "videoId",
				"description": "Post ID, the number at the end of the post URL, or the post URL itself, for example \"7698770783367171359\" or \"https://www.tiktok.com/@tiktok/video/7698770783367171359\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_hashtag",
		"platform": "TikTok",
		"title": "Fetch a TikTok hashtag",
		"description": "Look up a TikTok hashtag by name and get its ID, description, number of videos and total views. Costs 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-hashtag",
		"fields": [
			{
				"name": "hashtag",
				"description": "Hashtag name, with or without #, or the hashtag link, for example \"cooking\" or \"https://www.tiktok.com/tag/cooking\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_hashtag_videos",
		"platform": "TikTok",
		"title": "Get the videos for a TikTok hashtag",
		"description": "List the posts made with a TikTok hashtag, by hashtag name, in the order TikTok shows them on the hashtag page. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-hashtag-videos",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "hashtag",
				"description": "Hashtag name, with or without #, or the hashtag link, for example \"cooking\" or \"https://www.tiktok.com/tag/cooking\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–30). Defaults to 30.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_sound",
		"platform": "TikTok",
		"title": "Fetch a TikTok sound by ID",
		"description": "Get a TikTok sound by ID: title, artist, duration, cover image, audio link, whether it is an original sound and how many videos use it. Costs 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-sound",
		"fields": [
			{
				"name": "soundId",
				"description": "Sound ID, the number at the end of the sound URL or a post’s `sound.id`. The sound URL itself works too.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_get_sound_videos",
		"platform": "TikTok",
		"title": "Get the videos that use a TikTok sound",
		"description": "List the posts that use a TikTok sound, by sound ID, in the order TikTok shows them on the sound’s page. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-sound-videos",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "soundId",
				"description": "Sound ID, the number at the end of the sound URL or a post’s `sound.id`. The sound URL itself works too.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–30). Defaults to 30.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_search_users",
		"platform": "TikTok",
		"title": "Search TikTok accounts",
		"description": "Find TikTok accounts by keyword, with each account’s username, nickname, bio, avatar, follower and like counts and verification status. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/search-users",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "query",
				"description": "Search keywords, for example \"street food\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "tiktok_search_videos",
		"platform": "TikTok",
		"title": "Search TikTok videos",
		"description": "Search TikTok posts by keyword. Each result includes the caption, view, like, comment and share counts, creator, sound and hashtags. Page through results with the `cursor` from the previous response's `nextCursor`. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/search-videos",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page. Omit it for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "query",
				"description": "Search keywords, for example \"street food\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return (1–30). Defaults to 30.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "youtube_get_video",
		"platform": "YouTube",
		"title": "Fetch a video's full details and transcript from its YouTube link",
		"description": "Get a YouTube video's details from any video link, including Shorts and live streams: title, description, channel, duration, view and like counts, publish date, keywords and thumbnails, plus its timed transcript in the language you choose. Costs 1 credit per request.",
		"method": "POST",
		"path": "/youtube/get-video",
		"fields": [
			{
				"name": "url",
				"description": "The video to fetch. Accepts any YouTube video link — watch, youtu.be, Shorts, embed, or live — or a bare 11-character video ID.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "includeTranscript",
				"description": "Whether to also fetch the timed transcript in the same call. Defaults to true.",
				"required": false,
				"defaultLabel": "true",
				"type": "boolean"
			},
			{
				"name": "transcriptLanguage",
				"description": "Preferred transcript language as a BCP-47 code, e.g. \"en\" or \"pt-BR\". Defaults to the video's own default caption track.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cacheMaxAgeHours",
				"description": "Accept a cached result scraped up to this many hours ago. A cached result costs no credits, and its `cachedAt` says when it was scraped. When no cached result is that recent, the data is scraped live at the normal price. Leave it out to always scrape live, e.g. 24.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "cacheOnly",
				"description": "Return only a cached result and never scrape live. With `cacheMaxAgeHours`, only a result that recent is returned; without it, the latest cached result of any age. Responds 404, at no cost, when there is none, e.g. true.",
				"required": false,
				"defaultLabel": null,
				"type": "boolean"
			}
		]
	},
	{
		"id": "billing_get_info",
		"platform": "Bridgly",
		"title": "Get Bridgly credit balance",
		"description": "Get the current credit balance and billing settings of the connected Bridgly account. Free: it uses no credits.",
		"method": "GET",
		"path": "/billing",
		"fields": []
	}
];
