// Generated file. Do not edit.
export type CatalogLeafField =
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'string'; input: 'text' | 'date' }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'number'; integer: boolean }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'boolean' }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'enum'; options: string[] }
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'stringArray' };

export type CatalogField =
	| { name: string; description: string | null; required: boolean; defaultLabel: string | null; type: 'string'; input: 'text' | 'date' }
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
		"description": "Fetch a LinkedIn company by company slug. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-company-from-url",
		"fields": [
			{
				"name": "universalName",
				"description": "The company's LinkedIn universal name — the slug in linkedin.com/company/<universalName>, e.g. \"openai\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "linkedin_get_profile_from_url",
		"platform": "LinkedIn",
		"title": "Fetch a LinkedIn profile by profile slug",
		"description": "Fetch a LinkedIn profile by profile slug. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-from-url",
		"fields": [
			{
				"name": "memberIdentity",
				"description": "The member's public identity — the slug in linkedin.com/in/<memberIdentity>, e.g. \"williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "linkedin_get_job",
		"platform": "LinkedIn",
		"title": "Fetch a LinkedIn job posting by URL",
		"description": "Fetch a LinkedIn job posting by URL. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-job",
		"fields": [
			{
				"name": "jobUrl",
				"description": "The LinkedIn job posting URL — the numeric job id is parsed from it, e.g. \"https://www.linkedin.com/jobs/view/4417164255/\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "linkedin_get_posts_from_company",
		"platform": "LinkedIn",
		"title": "List posts published by a LinkedIn company",
		"description": "List posts published by a LinkedIn company. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
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
				"description": "The company universal name, e.g. \"openai\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return per page (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_get_posts_from_profile",
		"platform": "LinkedIn",
		"title": "List posts published by a LinkedIn profile",
		"description": "List posts published by a LinkedIn profile. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-posts/from-profile",
		"fields": [
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "publicId",
				"description": "The member public identity, e.g. \"williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–100). Defaults to 10. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_get_post_detail",
		"platform": "LinkedIn",
		"title": "Fetch a single LinkedIn post by URN",
		"description": "Fetch a single LinkedIn post by URN. Costs 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-post-detail",
		"fields": [
			{
				"name": "activityUrn",
				"description": "The post/update to fetch — a `urn:li:activity:<id>`, e.g. \"urn:li:activity:7300000000000000000\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "linkedin_get_activity_comments",
		"platform": "LinkedIn",
		"title": "Fetch the comment thread on a LinkedIn post",
		"description": "Fetch the comment thread on a LinkedIn post. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
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
				"description": "The activity to fetch comments for — a `urn:li:activity:<id>`, e.g. \"urn:li:activity:7300000000000000000\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return per page (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_get_profile_comments",
		"platform": "LinkedIn",
		"title": "List comments made by a LinkedIn profile",
		"description": "List comments made by a LinkedIn profile. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-comments",
		"fields": [
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "publicId",
				"description": "The member public identity, e.g. \"williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–100). Defaults to 10. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_get_profile_reactions",
		"platform": "LinkedIn",
		"title": "List posts a LinkedIn member reacted to",
		"description": "List posts a LinkedIn member reacted to. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/get-profile-reactions",
		"fields": [
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "publicId",
				"description": "The member public identity, e.g. \"williamhgates\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–100). Defaults to 10. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_get_post_reactions",
		"platform": "LinkedIn",
		"title": "List the members who reacted to a LinkedIn post",
		"description": "List the members who reacted to a LinkedIn post. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
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
				"description": "The post/update to fetch reactions for — a `urn:li:activity:<id>`, e.g. \"urn:li:activity:7300000000000000000\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of results to return per page (1–100). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_search_all",
		"platform": "LinkedIn",
		"title": "Global LinkedIn search",
		"description": "Global LinkedIn search. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/all",
		"fields": [
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "start",
				"description": "Pagination offset into the result list. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_search_companies",
		"platform": "LinkedIn",
		"title": "Search LinkedIn companies",
		"description": "Search LinkedIn companies. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/companies",
		"fields": [
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "start",
				"description": "Pagination offset into the result list. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_search_courses",
		"platform": "LinkedIn",
		"title": "Search LinkedIn courses",
		"description": "Search LinkedIn courses. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/courses",
		"fields": [
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "start",
				"description": "Pagination offset into the result list. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_search_events",
		"platform": "LinkedIn",
		"title": "Search LinkedIn events",
		"description": "Search LinkedIn events. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/events",
		"fields": [
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "start",
				"description": "Pagination offset into the result list. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_search_groups",
		"platform": "LinkedIn",
		"title": "Search LinkedIn groups",
		"description": "Search LinkedIn groups. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/groups",
		"fields": [
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "start",
				"description": "Pagination offset into the result list. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_search_jobs",
		"platform": "LinkedIn",
		"title": "Search LinkedIn jobs",
		"description": "Search LinkedIn jobs. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/jobs",
		"fields": [
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "start",
				"description": "Pagination offset into the result list. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "count",
				"description": "Number of results to return per page (1–100). Defaults to 10.",
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
			}
		]
	},
	{
		"id": "linkedin_search_people",
		"platform": "LinkedIn",
		"title": "Search LinkedIn people",
		"description": "Search LinkedIn people. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/people",
		"fields": [
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "start",
				"description": "Pagination offset into the result list. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "count",
				"description": "Number of results to return per page (1–50). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_search_posts",
		"platform": "LinkedIn",
		"title": "Search LinkedIn posts",
		"description": "Search LinkedIn posts. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/posts",
		"fields": [
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "start",
				"description": "Pagination offset into the result list. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
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
			}
		]
	},
	{
		"id": "linkedin_search_products",
		"platform": "LinkedIn",
		"title": "Search LinkedIn products",
		"description": "Search LinkedIn products. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/products",
		"fields": [
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "start",
				"description": "Pagination offset into the result list. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_search_schools",
		"platform": "LinkedIn",
		"title": "Search LinkedIn schools",
		"description": "Search LinkedIn schools. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/schools",
		"fields": [
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "start",
				"description": "Pagination offset into the result list. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "linkedin_search_services",
		"platform": "LinkedIn",
		"title": "Search LinkedIn services",
		"description": "Search LinkedIn services. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/linkedin/search/services",
		"fields": [
			{
				"name": "keyword",
				"description": "Keyword(s) to search LinkedIn for, e.g. \"openai\", \"software engineer\", \"fintech\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "start",
				"description": "Pagination offset into the result list. Defaults to 0.",
				"required": false,
				"defaultLabel": null,
				"type": "number",
				"integer": true
			},
			{
				"name": "count",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "reddit_get_post",
		"platform": "Reddit",
		"title": "Fetch a Reddit post with its comments",
		"description": "Fetch a Reddit post with its comments. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/get-post",
		"fields": [
			{
				"name": "url",
				"description": "Full URL of the Reddit post to fetch (with or without query).",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "reddit_get_comment",
		"platform": "Reddit",
		"title": "Fetch a single Reddit comment with its thread",
		"description": "Fetch a single Reddit comment with its thread. Costs 1 credit per request.",
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
			}
		]
	},
	{
		"id": "reddit_get_subreddit",
		"platform": "Reddit",
		"title": "Reddit: Fetch subreddit metadata",
		"description": "Reddit: Fetch subreddit metadata. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/get-subreddit",
		"fields": [
			{
				"name": "subreddit",
				"description": "Subreddit name, with or without the \"r/\" prefix, e.g. \"programming\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "reddit_get_user",
		"platform": "Reddit",
		"title": "Fetch a Reddit user profile",
		"description": "Fetch a Reddit user profile. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/get-user",
		"fields": [
			{
				"name": "username",
				"description": "Reddit username, with or without the \"u/\" prefix, e.g. \"spez\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "reddit_list_user_posts",
		"platform": "Reddit",
		"title": "List a Reddit user's posts",
		"description": "List a Reddit user's posts. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/list-user-posts",
		"fields": [
			{
				"name": "username",
				"description": "Reddit username, with or without the \"u/\" prefix, e.g. \"spez\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of posts to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "reddit_list_user_comments",
		"platform": "Reddit",
		"title": "List a Reddit user's comments",
		"description": "List a Reddit user's comments. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/list-user-comments",
		"fields": [
			{
				"name": "username",
				"description": "Reddit username, with or without the \"u/\" prefix, e.g. \"spez\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of comments to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "reddit_list_user_overview",
		"platform": "Reddit",
		"title": "List a Reddit user's mixed post/comment activity",
		"description": "List a Reddit user's mixed post/comment activity. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/list-user-overview",
		"fields": [
			{
				"name": "username",
				"description": "Reddit username, with or without the \"u/\" prefix, e.g. \"spez\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of overview items to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "reddit_list_subreddit_posts",
		"platform": "Reddit",
		"title": "Reddit: List posts in a subreddit feed",
		"description": "Reddit: List posts in a subreddit feed. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/list-subreddit-posts",
		"fields": [
			{
				"name": "subreddit",
				"description": "Subreddit name, with or without the \"r/\" prefix, e.g. \"programming\".",
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
				"description": "Number of posts to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "after",
				"description": "Pagination cursor (a Reddit fullname returned as `after` from a previous page).",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "reddit_list_subreddit_comments",
		"platform": "Reddit",
		"title": "Reddit: List recent comments in a subreddit",
		"description": "Reddit: List recent comments in a subreddit. Costs 1 credit per request.",
		"method": "POST",
		"path": "/reddit/list-subreddit-comments",
		"fields": [
			{
				"name": "subreddit",
				"description": "Subreddit name, with or without the \"r/\" prefix, e.g. \"programming\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "after",
				"description": "Pagination cursor (a Reddit fullname returned as `after` from a previous page).",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Number of comments to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "reddit_search_all",
		"platform": "Reddit",
		"title": "Search Reddit across posts, communities and users",
		"description": "Search Reddit across posts, communities and users. Costs 1 credit per request.",
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
				"name": "after",
				"description": "Pagination cursor (a Reddit fullname returned as `after` from a previous page).",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "limit",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "reddit_search_communities",
		"platform": "Reddit",
		"title": "Search Reddit communities",
		"description": "Search Reddit communities. Costs 1 credit per request.",
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
				"name": "after",
				"description": "Pagination cursor (a Reddit fullname returned as `after` from a previous page).",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "limit",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "reddit_search_posts",
		"platform": "Reddit",
		"title": "Search Reddit posts",
		"description": "Search Reddit posts. Costs 1 credit per request.",
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
				"name": "after",
				"description": "Pagination cursor (a Reddit fullname returned as `after` from a previous page).",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "limit",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "reddit_search_users",
		"platform": "Reddit",
		"title": "Search Reddit users",
		"description": "Search Reddit users. Costs 1 credit per request.",
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
				"name": "after",
				"description": "Pagination cursor (a Reddit fullname returned as `after` from a previous page).",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "limit",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "reddit_search_comments",
		"platform": "Reddit",
		"title": "Search Reddit comments",
		"description": "Search Reddit comments. Costs 1 credit per request.",
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
				"name": "after",
				"description": "Pagination cursor (a Reddit fullname returned as `after` from a previous page).",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "limit",
				"description": "Number of results to return (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "x_get_tweet_detail",
		"platform": "X (Twitter)",
		"title": "X (Twitter): Fetch a tweet with its reply thread",
		"description": "X (Twitter): Fetch a tweet with its reply thread. Costs 1 credit per request.",
		"method": "POST",
		"path": "/x/get-tweet-detail",
		"fields": [
			{
				"name": "tweetId",
				"description": "Numeric ID of the tweet to fetch, e.g. \"1234567890\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "x_get_tweet_replies",
		"platform": "X (Twitter)",
		"title": "X (Twitter): List the replies to a tweet",
		"description": "X (Twitter): List the replies to a tweet. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-tweet-replies",
		"fields": [
			{
				"name": "tweetId",
				"description": "Numeric ID of the tweet whose replies to list, e.g. \"1234567890\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "x_search",
		"platform": "X (Twitter)",
		"title": "Search tweets with X advanced-search operators",
		"description": "Search tweets with X advanced-search operators. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
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
				"description": "Most results to return per page (1–20). Defaults to 10. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
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
			}
		]
	},
	{
		"id": "x_search_users",
		"platform": "X (Twitter)",
		"title": "Search X users",
		"description": "Search X users. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
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
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–20). Defaults to 10. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "x_get_user",
		"platform": "X (Twitter)",
		"title": "Fetch an X user profile by handle",
		"description": "Fetch an X user profile by handle. Costs 1 credit per request.",
		"method": "POST",
		"path": "/x/get-user",
		"fields": [
			{
				"name": "handle",
				"description": "X handle / screen name, with or without the @, e.g. \"elonmusk\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "x_get_user_tweets",
		"platform": "X (Twitter)",
		"title": "List an X user's tweets timeline",
		"description": "List an X user's tweets timeline. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-user-tweets",
		"fields": [
			{
				"name": "userId",
				"description": "Numeric user ID (rest_id) whose tweets to list, e.g. \"44196397\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "x_get_user_replies",
		"platform": "X (Twitter)",
		"title": "List an X user's replies",
		"description": "List an X user's replies. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-user-replies",
		"fields": [
			{
				"name": "userId",
				"description": "Numeric user ID (rest_id) whose tweets to list, e.g. \"44196397\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "x_get_user_media",
		"platform": "X (Twitter)",
		"title": "List an X user's media tweets",
		"description": "List an X user's media tweets. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-user-media",
		"fields": [
			{
				"name": "userId",
				"description": "Numeric user ID (rest_id) whose tweets to list, e.g. \"44196397\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–100). Defaults to 10. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "x_get_followers",
		"platform": "X (Twitter)",
		"title": "List an X user's followers",
		"description": "List an X user's followers. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-followers",
		"fields": [
			{
				"name": "userId",
				"description": "Numeric user ID (rest_id) whose tweets to list, e.g. \"44196397\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "x_get_following",
		"platform": "X (Twitter)",
		"title": "List the accounts an X user follows",
		"description": "List the accounts an X user follows. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-following",
		"fields": [
			{
				"name": "userId",
				"description": "Numeric user ID (rest_id) whose tweets to list, e.g. \"44196397\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "x_get_tweet_retweeters",
		"platform": "X (Twitter)",
		"title": "X (Twitter): List the users who retweeted a tweet",
		"description": "X (Twitter): List the users who retweeted a tweet. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-tweet-retweeters",
		"fields": [
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "tweetId",
				"description": "Numeric ID of the tweet whose retweeters to list, e.g. \"1234567890\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–100). Defaults to 10. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "x_get_tweet_quotes",
		"platform": "X (Twitter)",
		"title": "X (Twitter): List quote tweets of a tweet",
		"description": "X (Twitter): List quote tweets of a tweet. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/x/get-tweet-quotes",
		"fields": [
			{
				"name": "tweetId",
				"description": "Numeric ID of the tweet whose quote tweets to list, e.g. \"1234567890\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–20). Defaults to 10. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "cursor",
				"description": "Pagination cursor from a previous response's `nextCursor` to fetch the next page.",
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
			}
		]
	},
	{
		"id": "github_get_profile",
		"platform": "GitHub",
		"title": "Fetch a GitHub user's profile and pinned repositories",
		"description": "Fetch a GitHub user's profile and pinned repositories. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/get-profile",
		"fields": [
			{
				"name": "username",
				"description": "GitHub username (login) without the \"@\", e.g. \"torvalds\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "github_get_contributions",
		"platform": "GitHub",
		"title": "Fetch a GitHub user's contribution calendar and totals",
		"description": "Fetch a GitHub user's contribution calendar and totals. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/get-contributions",
		"fields": [
			{
				"name": "username",
				"description": "GitHub username (login) without the \"@\", e.g. \"torvalds\".",
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
				"input": "text"
			},
			{
				"name": "to",
				"description": "ISO-8601 end of the contribution window (inclusive), e.g. \"2025-12-31T00:00:00Z\". Defaults to now.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "github_list_repositories",
		"platform": "GitHub",
		"title": "List a GitHub user's public repositories",
		"description": "List a GitHub user's public repositories. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/list-repositories",
		"fields": [
			{
				"name": "username",
				"description": "GitHub username (login) without the \"@\", e.g. \"torvalds\".",
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
				"name": "after",
				"description": "Pagination cursor (the `after` value returned by a previous page). Omit for the first page.",
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
			}
		]
	},
	{
		"id": "github_list_starred",
		"platform": "GitHub",
		"title": "List the repositories a GitHub user has starred",
		"description": "List the repositories a GitHub user has starred. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/list-starred",
		"fields": [
			{
				"name": "username",
				"description": "GitHub username (login) without the \"@\", e.g. \"torvalds\".",
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
				"name": "after",
				"description": "Pagination cursor (the `after` value returned by a previous page). Omit for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "github_list_projects",
		"platform": "GitHub",
		"title": "List a GitHub user's public projects",
		"description": "List a GitHub user's public projects. Costs 1 credit per request.",
		"method": "POST",
		"path": "/github/list-projects",
		"fields": [
			{
				"name": "username",
				"description": "GitHub username (login) without the \"@\", e.g. \"torvalds\".",
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
				"name": "after",
				"description": "Pagination cursor (the `after` value returned by a previous page). Omit for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "github_search_repositories",
		"platform": "GitHub",
		"title": "Search public GitHub repositories",
		"description": "Search public GitHub repositories. Costs 1 credit per request.",
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
				"name": "visibility",
				"description": "Repository visibility. Maps to `is:public` / `is:private`.",
				"required": false,
				"defaultLabel": null,
				"type": "enum",
				"options": [
					"public",
					"private"
				]
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
				"description": "Number of results per page (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "after",
				"description": "Pagination cursor (the `after` value returned by a previous page). Omit for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "github_search_code",
		"platform": "GitHub",
		"title": "Search code across public GitHub repositories",
		"description": "Search code across public GitHub repositories. Costs 1 credit per request.",
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
				"description": "Number of results per page (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "page",
				"description": "1-based page number. Defaults to 1. Only the first 1,000 results of a search can be paged through.",
				"required": false,
				"defaultLabel": "1",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "github_search_commits",
		"platform": "GitHub",
		"title": "Search commits across public GitHub repositories",
		"description": "Search commits across public GitHub repositories. Costs 1 credit per request.",
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
				"description": "Number of results per page (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "page",
				"description": "1-based page number. Defaults to 1. Only the first 1,000 results of a search can be paged through.",
				"required": false,
				"defaultLabel": "1",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "github_search_issues",
		"platform": "GitHub",
		"title": "Search GitHub issues",
		"description": "Search GitHub issues. Costs 1 credit per request.",
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
				"description": "Number of results per page (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "after",
				"description": "Pagination cursor (the `after` value returned by a previous page). Omit for the first page.",
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
			}
		]
	},
	{
		"id": "github_search_pull_requests",
		"platform": "GitHub",
		"title": "Search GitHub pull requests",
		"description": "Search GitHub pull requests. Costs 1 credit per request.",
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
				"description": "Number of results per page (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "after",
				"description": "Pagination cursor (the `after` value returned by a previous page). Omit for the first page.",
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
			}
		]
	},
	{
		"id": "github_search_discussions",
		"platform": "GitHub",
		"title": "Search GitHub discussions",
		"description": "Search GitHub discussions. Costs 1 credit per request.",
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
				"description": "Number of results per page (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "after",
				"description": "Pagination cursor (the `after` value returned by a previous page). Omit for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "github_search_users",
		"platform": "GitHub",
		"title": "Search GitHub users and organizations",
		"description": "Search GitHub users and organizations. Costs 1 credit per request.",
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
				"description": "Number of results per page (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "after",
				"description": "Pagination cursor (the `after` value returned by a previous page). Omit for the first page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "github_search_topics",
		"platform": "GitHub",
		"title": "Search GitHub topics",
		"description": "Search GitHub topics. Costs 1 credit per request.",
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
				"description": "Number of results per page (1–10). Defaults to 10.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "page",
				"description": "1-based page number. Defaults to 1. Only the first 1,000 results of a search can be paged through.",
				"required": false,
				"defaultLabel": "1",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "instagram_user",
		"platform": "Instagram",
		"title": "Instagram: Get user profile by username",
		"description": "Instagram: Get user profile by username. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/user",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, e.g. instagram",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "instagram_user_posts",
		"platform": "Instagram",
		"title": "Instagram: Get paginated user posts",
		"description": "Instagram: Get paginated user posts. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/user-posts",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, e.g. instagram",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Page size requested from Instagram (1–10). Defaults to 10. Instagram determines the number of results returned.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "after",
				"description": "Instagram cursor from the previous response’s end_cursor",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "instagram_followers",
		"platform": "Instagram",
		"title": "Instagram: Get paginated user followers",
		"description": "Instagram: Get paginated user followers. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/followers",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, e.g. instagram",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Page size requested from Instagram (1–10). Defaults to 10. Instagram determines the number of results returned.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "after",
				"description": "Instagram cursor from the previous response’s end_cursor",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "instagram_following",
		"platform": "Instagram",
		"title": "Instagram: Get paginated users followed by the user",
		"description": "Instagram: Get paginated users followed by the user. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/following",
		"fields": [
			{
				"name": "username",
				"description": "Instagram username, e.g. instagram",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Page size requested from Instagram (1–10). Defaults to 10. Instagram determines the number of results returned.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "after",
				"description": "Instagram cursor from the previous response’s end_cursor",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "instagram_post",
		"platform": "Instagram",
		"title": "Instagram: Get post details by shortcode",
		"description": "Instagram: Get post details by shortcode. Costs 1 credit per request.",
		"method": "POST",
		"path": "/instagram/post",
		"fields": [
			{
				"name": "shortcode",
				"description": null,
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "instagram_post_comments",
		"platform": "Instagram",
		"title": "Instagram: Get comments on a post",
		"description": "Instagram: Get comments on a post. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/instagram/post-comments",
		"fields": [
			{
				"name": "shortcode",
				"description": null,
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Page size requested from Instagram (1–10). Defaults to 10. Instagram determines the number of results returned.",
				"required": false,
				"defaultLabel": "10",
				"type": "number",
				"integer": true
			},
			{
				"name": "after",
				"description": "Instagram cursor from the previous response’s end_cursor",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "instagram_search_users",
		"platform": "Instagram",
		"title": "Instagram: Search users",
		"description": "Instagram: Search users. Costs 1 credit per request.",
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
			}
		]
	},
	{
		"id": "tiktok_get_user",
		"platform": "TikTok",
		"title": "Fetch a TikTok user by username",
		"description": "Fetch a TikTok user by username. Costs 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user",
		"fields": [
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, for example \"tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "tiktok_get_user_posts",
		"platform": "TikTok",
		"title": "Get a TikTok user’s posts",
		"description": "Get a TikTok user’s posts. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-posts",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, for example \"tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–35). Defaults to 35. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "35",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "tiktok_get_user_liked_videos",
		"platform": "TikTok",
		"title": "Get the videos a TikTok user liked",
		"description": "Get the videos a TikTok user liked. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-liked-videos",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, for example \"tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–30). Defaults to 30. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "tiktok_get_user_reposts",
		"platform": "TikTok",
		"title": "Get the videos a TikTok user reposted",
		"description": "Get the videos a TikTok user reposted. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-reposts",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, for example \"tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–30). Defaults to 30. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "tiktok_get_user_followers",
		"platform": "TikTok",
		"title": "Get a TikTok user’s followers",
		"description": "Get a TikTok user’s followers. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-followers",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, for example \"tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–30). Defaults to 30. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "tiktok_get_user_following",
		"platform": "TikTok",
		"title": "Get the accounts a TikTok user follows",
		"description": "Get the accounts a TikTok user follows. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-following",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, for example \"tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–30). Defaults to 30. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "tiktok_get_user_playlists",
		"platform": "TikTok",
		"title": "Get a TikTok user’s playlists",
		"description": "Get a TikTok user’s playlists. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-user-playlists",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "uniqueId",
				"description": "TikTok username, with or without @, for example \"tiktok\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–30). Defaults to 30. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "tiktok_get_playlist_videos",
		"platform": "TikTok",
		"title": "Get the videos in a TikTok playlist",
		"description": "Get the videos in a TikTok playlist. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-playlist-videos",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "playlistId",
				"description": "Playlist ID, as returned by `getUserPlaylists`.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–20). Defaults to 20. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "20",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "tiktok_get_video",
		"platform": "TikTok",
		"title": "Fetch a TikTok video by ID",
		"description": "Fetch a TikTok video by ID. Costs 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-video",
		"fields": [
			{
				"name": "videoId",
				"description": "Post ID, the number at the end of the post URL, for example \"7698770783367171359\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "tiktok_get_video_comments",
		"platform": "TikTok",
		"title": "Get the comments on a TikTok video",
		"description": "Get the comments on a TikTok video. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-video-comments",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "videoId",
				"description": "Post ID, the number at the end of the post URL, for example \"7698770783367171359\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–20). Defaults to 20. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "20",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "tiktok_get_comment_replies",
		"platform": "TikTok",
		"title": "Get the replies to a TikTok comment",
		"description": "Get the replies to a TikTok comment. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-comment-replies",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "videoId",
				"description": "Post ID, the number at the end of the post URL, for example \"7698770783367171359\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–20). Defaults to 20. A page can hold fewer, so keep paging while `nextCursor` is set.",
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
			}
		]
	},
	{
		"id": "tiktok_get_related_videos",
		"platform": "TikTok",
		"title": "Get videos related to a TikTok video",
		"description": "Get videos related to a TikTok video. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-related-videos",
		"fields": [
			{
				"name": "videoId",
				"description": "Post ID, the number at the end of the post URL, for example \"7698770783367171359\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "tiktok_get_hashtag",
		"platform": "TikTok",
		"title": "Fetch a TikTok hashtag",
		"description": "Fetch a TikTok hashtag. Costs 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-hashtag",
		"fields": [
			{
				"name": "hashtag",
				"description": "Hashtag name, with or without #, for example \"cooking\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "tiktok_get_hashtag_videos",
		"platform": "TikTok",
		"title": "Get the videos for a TikTok hashtag",
		"description": "Get the videos for a TikTok hashtag. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-hashtag-videos",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "hashtag",
				"description": "Hashtag name, with or without #, for example \"cooking\".",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–30). Defaults to 30. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "tiktok_get_sound",
		"platform": "TikTok",
		"title": "Fetch a TikTok sound by ID",
		"description": "Fetch a TikTok sound by ID. Costs 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-sound",
		"fields": [
			{
				"name": "soundId",
				"description": "Sound ID, the number at the end of the sound URL or a post’s `sound.id`.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			}
		]
	},
	{
		"id": "tiktok_get_sound_videos",
		"platform": "TikTok",
		"title": "Get the videos that use a TikTok sound",
		"description": "Get the videos that use a TikTok sound. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/get-sound-videos",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
				"required": false,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "soundId",
				"description": "Sound ID, the number at the end of the sound URL or a post’s `sound.id`.",
				"required": true,
				"defaultLabel": null,
				"type": "string",
				"input": "text"
			},
			{
				"name": "count",
				"description": "Most results to return per page (1–30). Defaults to 30. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "tiktok_search_users",
		"platform": "TikTok",
		"title": "Search TikTok accounts",
		"description": "Search TikTok accounts. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/search-users",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
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
			}
		]
	},
	{
		"id": "tiktok_search_videos",
		"platform": "TikTok",
		"title": "Search TikTok videos",
		"description": "Search TikTok videos. Costs 1 credit per result returned, with a minimum of 1 credit per request.",
		"method": "POST",
		"path": "/tiktok/search-videos",
		"fields": [
			{
				"name": "cursor",
				"description": "The previous response's `nextCursor`, to fetch the next page.",
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
				"description": "Most results to return per page (1–30). Defaults to 30. A page can hold fewer, so keep paging while `nextCursor` is set.",
				"required": false,
				"defaultLabel": "30",
				"type": "number",
				"integer": true
			}
		]
	},
	{
		"id": "youtube_get_video",
		"platform": "YouTube",
		"title": "Fetch a video's full details and transcript from its YouTube link",
		"description": "Fetch a video's full details and transcript from its YouTube link. Costs 1 credit per request.",
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
