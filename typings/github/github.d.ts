// Type definitions for Node-github.js v0.1.8
// Project: https:github.com/ajaxorg/node-github
// Definitions by: Michael Ferris <https:github.com/Cellule>
// Definitions: https:github.com/borisyankov/DefinitelyTyped
// GitHub api v3

declare module GitHubResult {
  export interface PlaceHolder{
    [id: string] : any;
  }

  export module Org {
    export interface Repo {
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
      private: boolean;
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
  export module Repo {}
}

declare module GitHubApi {

  export interface repos {
  getAll(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      type ?: string; // Optional. Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`. Validation rule: ` ^(all|owner|public|private|member)$ `.
      sort ?: string; // Optional. Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
      direction ?: string; // Optional. Validation rule: ` ^(asc|desc)$ `.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getFromUser(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      type ?: string; // Optional. Possible values: `all`, `owner`, `member`. Default: `public`. Validation rule: ` ^(all|owner|member)$ `.
      sort ?: string; // Optional. Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
      direction ?: string; // Optional. Validation rule: ` ^(asc|desc)$ `.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getFromOrg(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      org: string; // Required.
      type ?: string; // Optional. Possible values: `all`, `public`, `member`. Default: `all`. Validation rule: ` ^(all|public|member)$ `.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  create(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      name: string; // Required.
      description ?: string; // Optional.
      homepage ?: string; // Optional.
      private ?: boolean; // Optional. Optional boolean true: to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
      has_issues ?: boolean; // Optional. Optional boolean true: to enable issues for this repository, false to disable them. Default is true.
      has_wiki ?: boolean; // Optional. Optional boolean true: to enable the wiki for this repository, false to disable it. Default is true.
      has_downloads ?: boolean; // Optional. Optional boolean true: to enable downloads for this repository, false to disable them. Default is true.
      auto_init ?: boolean; // Optional. Optional boolean true: to create an initial commit with empty README. Default is false
      gitignore_template ?: string; // Optional. Optional string Desired: language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
    },
    callback: (err: any, result: any) => void
  );
  createFromOrg(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      org: string; // Required.
      name: string; // Required.
      description ?: string; // Optional.
      homepage ?: string; // Optional.
      private ?: boolean; // Optional. Optional boolean true: to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
      has_issues ?: boolean; // Optional. Optional boolean true: to enable issues for this repository, false to disable them. Default is true.
      has_wiki ?: boolean; // Optional. Optional boolean true: to enable the wiki for this repository, false to disable it. Default is true.
      has_downloads ?: boolean; // Optional. Optional boolean true: to enable downloads for this repository, false to disable them. Default is true.
      auto_init ?: boolean; // Optional. Optional boolean true: to create an initial commit with empty README. Default is false
      gitignore_template ?: string; // Optional. Optional string Desired: language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
      team_id ?: number; // Optional. Optional number The: id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  get(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  update(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      name: string; // Required.
      description ?: string; // Optional.
      homepage ?: string; // Optional.
      private ?: boolean; // Optional. Optional boolean true: to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
      has_issues ?: boolean; // Optional. Optional boolean true: to enable issues for this repository, false to disable them. Default is true.
      has_wiki ?: boolean; // Optional. Optional boolean true: to enable the wiki for this repository, false to disable it. Default is true.
      has_downloads ?: boolean; // Optional. Optional boolean true: to enable downloads for this repository, false to disable them. Default is true.
    },
    callback: (err: any, result: any) => void
  );
  delete(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  merge(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      base: string; // Required. Required string The: branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
      head: string; // Required. Required string The: branch (or git ref) where your changes are implemented.
      commit_message ?: string; // Optional. Optional string Commit: message to use for the merge commit. If omitted, a default message will be used.
    },
    callback: (err: any, result: any) => void
  );
  getContributors(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      anon ?: boolean; // Optional. Optional flag. Set to 1 or true to include anonymous contributors in results.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getLanguages(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getTeams(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getTags(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getBranches(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getBranch(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      branch: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getCollaborators(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getCollaborator(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      collabuser: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  addCollaborator(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      collabuser: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  removeCollaborator(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      collabuser: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  getCommits(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      sha ?: string; // Optional. Optional string Sha: or branch to start listing commits from.
      path ?: string; // Optional. Optional string Only: commits containing this file path will be returned.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      since ?: string; // Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
    },
    callback: (err: any, result: any) => void
  );
  getCommit(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      sha: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  getAllCommitComments(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getCommitComments(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      sha: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  createCommitComment(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      sha: string; // Required.
      body: string; // Required.
      commit_id: string; // Required. Required string Sha: of the commit to comment on.
      path ?: string; // Optional. Optional string Relative: path of the file to comment on.
      position ?: number; // Optional. Optional number Line: index in the diff to comment on.
      line ?: number; // Optional. Optional number Line: number in the file to comment on. Defaults to 1.
    },
    callback: (err: any, result: any) => void
  );
  getCommitComment(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  updateCommitComment(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
      body: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  compareCommits(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      base: string; // Required. Required string The: branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
      head: string; // Required. Required string The: branch (or git ref) where your changes are implemented.
    },
    callback: (err: any, result: any) => void
  );
  deleteCommitComment(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  getReadme(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      ref ?: string; // Optional. The String name of the Commit/Branch/Tag. Defaults to master.
    },
    callback: (err: any, result: any) => void
  );
  getContent(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      path ?: string; // Optional. The content path.
      ref ?: string; // Optional. The String name of the Commit/Branch/Tag. Defaults to master.
    },
    callback: (err: any, result: any) => void
  );
  createFile(
    msg :
    {
      user: string; // Required.
      repo: string; // Required.
      path: string; // Required. The content path.
      message: string; // Required. The commit message.
      content: string; // Required. The new file content, Base64 encoded.
      branch ?: string; // Optional. The branch name. If not provided, uses the repository’s default branch (usually master).
      author ?: {};//TODO::CONTENT JSON // Optional. The author of the commit. An object with name and email properties. The author section is optional and is filled in with the committer information if omitted. If the committer information is omitted, the authenticated user’s information is used.
      committer ?: {};//TODO::CONTENT JSON // Optional. The committer of the commit. An object with name and email properties. You must provide values for both name and email, whether you choose to use author or committer. Otherwise, you’ll receive a 500 status code.
    },
    callback: (err: any, result: any) => void
  );
  updateFile(
    msg :
    {
      user: string; // Required.
      repo: string; // Required.
      path: string; // Required. The content path.
      message: string; // Required. The commit message.
      content: string; // Required. The updated file content, Base64 encoded.
      sha: string; // Required. The blob SHA of the file being replaced.
      branch ?: string; // Optional. The branch name. If not provided, uses the repository’s default branch (usually master).
      author ?: {};//TODO::CONTENT JSON // Optional. The author of the commit. An object with name and email properties. The author section is optional and is filled in with the committer information if omitted. If the committer information is omitted, the authenticated user’s information is used.
      committer ?: {};//TODO::CONTENT JSON // Optional. The committer of the commit. An object with name and email properties. You must provide values for both name and email, whether you choose to use author or committer. Otherwise, you’ll receive a 500 status code.
    },
    callback: (err: any, result: any) => void
  );
  deleteFile(
    msg :
    {
      user: string; // Required.
      repo: string; // Required.
      path: string; // Required. The content path.
      message: string; // Required. The commit message.
      sha: string; // Required. The blob SHA of the file being removed.
      branch ?: string; // Optional. The branch name. If not provided, uses the repository’s default branch (usually master).
      author ?: {};//TODO::CONTENT JSON // Optional. The author of the commit. An object with name and email properties. The author section is optional and is filled in with the committer information if omitted. If the committer information is omitted, the authenticated user’s information is used.
      committer ?: {};//TODO::CONTENT JSON // Optional. The committer of the commit. An object with name and email properties. You must provide values for both name and email, whether you choose to use author or committer. Otherwise, you’ll receive a 500 status code.
    },
    callback: (err: any, result: any) => void
  );
  getArchiveLink(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      ref: string; // Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
      archive_format: string; // Required. Either tarball or zipball Validation rule: ` ^(tarball|zipball)$ `.
    },
    callback: (err: any, result: any) => void
  );
  getDownloads(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getDownload(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  deleteDownload(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  getForks(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      sort ?: string; // Optional. Possible values: `newest`, `oldest`, `watchers`, default: `newest`. Validation rule: ` ^(newest|oldest|watchers)$ `.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  fork(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      org ?: string; // Optional. Optional String Organization: login. The repository will be forked into this organization.
    },
    callback: (err: any, result: any) => void
  );
  getKeys(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getKey(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  createKey(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      title: string; // Required.
      key: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  updateKey(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
      title: string; // Required.
      key: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  deleteKey(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  getStargazers(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getStarred(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getStarredFromUser(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getStarring(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  star(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  unStar(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  getWatchers(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getWatched(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getWatchedFromUser(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getWatching(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  watch(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  unWatch(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  getHooks(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
      per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
    },
    callback: (err: any, result: any) => void
  );
  getHook(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  createHook(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      name: string; // Required.
      config: {};//TODO::CONTENT JSON // Required. Required hash A: Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
      events ?: Object[]; //TODO::ARRAY TYPE // Optional. Optional array Determines: what events the hook is triggered for. Default: `['push']`.
      active ?: boolean; // Optional. Optional boolean Determines: whether the hook is actually triggered on pushes.
    },
    callback: (err: any, result: any) => void
  );
  updateHook(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
      name: string; // Required.
      config: {};//TODO::CONTENT JSON // Required. Required hash A: Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
      events ?: Object[]; //TODO::ARRAY TYPE // Optional. Optional array Determines: what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`.
      add_events ?: Object[]; //TODO::ARRAY TYPE // Optional. Optional array Determines: a list of events to be added to the list of events that the Hook triggers for.
      remove_events ?: Object[]; //TODO::ARRAY TYPE // Optional. Optional array Determines: a list of events to be removed from the list of events that the Hook triggers for.
      active ?: boolean; // Optional. Optional boolean Determines: whether the hook is actually triggered on pushes.
    },
    callback: (err: any, result: any) => void
  );
  testHook(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
    },
    callback: (err: any, result: any) => void
  );
  deleteHook(
    msg :
    {
      headers ?: { [id: string]: any }; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      user: string; // Required.
      repo: string; // Required.
      id: string; // Required.
    },
    callback: (err: any, result: any) => void
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
