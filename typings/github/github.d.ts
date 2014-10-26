// Type definitions for Node-github.js v0.1.8
// Project: https://github.com/ajaxorg/node-github
// Definitions by: Michael Ferris <https://github.com/Cellule>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// GitHub api v3

declare module GitHubResult {
  export interface OrganizationRepo {
    id: number;
    owner: {
      login: string;
      id: number;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    name: string;
    full_name: string;
    description: string;
    "private": boolean;
    fork: boolean;
    url: string;
    html_url: string;
    clone_url: string;
    git_url: string;
    ssh_url: string;
    svn_url: string;
    mirror_url: string;
    homepage: string;
    language: string;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    size: number;
    default_branch: string;
    open_issues_count: number;
    has_issues: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_downloads: boolean;
    pushed_at: string;
    created_at: string;
    updated_at: string;
    permissions: {
      admin: boolean;
      push: boolean;
      pull: boolean;
    };
  }
}

declare module GitHubApi {
  export interface repos {
    getFromOrg(
      msg: {
        org: string;
        type ?: string; //^(all|public|member)$
        page ?: number; //^[0-9]+$
        per_page ?: number; //^[0-9]+$
      },
      callback: (err: any, result: GitHubResult.OrganizationRepo[]) => void
    );
  }
}

declare module "github" {
  class GitHub {
    constructor (options: {
      version: string;
      timeout ?: number;
      rejectUnauthorized ?: string;
      requestMedia ?: string;
      proxy ?: string;
      port ?: number;
      host ?: string;
      protocol ?: string;
      url ?: string;
      pathPrefix ?: string;
      debug ?: boolean;
    });
    repos : GitHubApi.repos;
  }
  export = GitHub;
}
