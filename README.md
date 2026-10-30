# n8n-nodes-bridgly

An [n8n](https://n8n.io) community node for [Bridgly](https://bridgly.app). It brings structured public data — profiles, posts, comments, jobs and search results — into your workflows.

[Installation](#installation) · [Credentials](#credentials) · [Operations](#operations) · [Usage](#usage) · [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation and install the package `n8n-nodes-bridgly`.

## Credentials

You need a Bridgly account and an API key.

1. Sign up at [bridgly.app](https://bridgly.app).
2. Open the **API Keys** page of your [dashboard](https://bridgly.app/dashboard/api-keys) and create a key. It starts with `bgly_`.
3. In n8n, create a **Bridgly API** credential and paste the key.

n8n checks the key when you save the credential.

## Operations

Pick a **Resource**, then an **Operation**. Each operation's required inputs are shown directly; optional ones are under **Additional Fields**.

| Resource    | Operations                                                                                                                                                                                      |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LinkedIn    | Get a profile, company, job or post; list a profile's or company's posts, comments and reactions; search companies, jobs, posts, groups, events, schools, courses, products and services        |
| Reddit      | Get a post, comment, subreddit or user; list a user's posts and comments; list a subreddit's posts and comments; search posts, comments, communities and users                                  |
| X (Twitter) | Get a user or a tweet with its replies; list a user's tweets, replies, media, followers and following; list a tweet's quotes and retweeters; search tweets and users                            |
| GitHub      | Get a profile or contribution calendar; list a user's repositories, starred repositories and projects; search repositories, code, commits, issues, pull requests, discussions, users and topics |
| Instagram   | Get a user or post; list a user's posts, followers and following; list a post's comments; search users                                                                                          |
| TikTok      | Get a user                                                                                                                                                                                      |
| YouTube     | Get a video with its transcript                                                                                                                                                                 |
| Account     | Get your credit balance                                                                                                                                                                         |

The node can also be used as a tool by n8n AI agents.

## Usage

- **Output.** Each operation returns the data it found. A lookup returns one item; an operation whose result is a list returns one item per entry.
- **Credits.** Operations use credits from your Bridgly account. Each operation's description states what it costs. Getting your credit balance is free.
- **Paging.** List and search operations return up to 10 results per run. To get the next page, pass the cursor or offset from the previous result in **Additional Fields**.
- **Lists.** Where a field accepts several values, separate them with commas.
- **Errors.** If a request fails, the node shows the reason from Bridgly, such as an invalid input, a missing record, or not enough credits.

## Resources

- [Bridgly documentation](https://docs.bridgly.app)
- [API reference](https://docs.bridgly.app/api-reference)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

## License

[MIT](LICENSE)
