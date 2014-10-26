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
  export interface Header {
    "If-Modified-Since" ?: boolean;
    "If-None-Match" ?: boolean;
    "Cookie" ?: boolean;
    "User-Agent" ?: boolean;
  }
  export interface authorization {
    getAll(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    get(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    create(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        scopes ?: any[]; // TODO::ARRAY // Optional. Optional array - A list of scopes that this authorization is in.
        note ?: string; // Optional. Optional string - A note to remind you what the OAuth token is for.
        note_url ?: string; // Optional. Optional string - A URL to remind you what app the OAuth token is for.
      },
      callback: (err: any, result: any) => void
    );
    update(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        scopes ?: any[]; // TODO::ARRAY // Optional. Optional array - A list of scopes that this authorization is in.
        add_scopes ?: any[]; // TODO::ARRAY // Optional. Optional array - A list of scopes to add to this authorization.
        remove_scopes ?: any[]; // TODO::ARRAY // Optional. Optional array - A list of scopes to remove from this authorization.
        note ?: string; // Optional. Optional string - A note to remind you what the OAuth token is for.
        note_url ?: string; // Optional. Optional string - A URL to remind you what app the OAuth token is for.
      },
      callback: (err: any, result: any) => void
    );
    delete(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
  }
  export interface events {
    get(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFromRepo(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFromRepoIssues(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFromRepoNetwork(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFromOrg(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getReceived(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getReceivedPublic(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFromUser(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFromUserPublic(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFromUserOrg(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        org: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
  }
  export interface gitdata {
    getBlob(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sha: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    createBlob(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        content: string; // Required.
        encoding: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getCommit(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sha: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    createCommit(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        message: string; // Required. String of the commit message
        tree: string; // Required. String of the SHA of the tree object this commit points to
        parents: any[]; // TODO::ARRAY // Required. Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided.
        author ?: any; // TODO::JSON // Optional.
        committer ?: any; // TODO::JSON // Optional.
      },
      callback: (err: any, result: any) => void
    );
    getReference(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        ref: string; // Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
      },
      callback: (err: any, result: any) => void
    );
    getAllReferences(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    createReference(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        ref: string; // Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
        sha: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    updateReference(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        ref: string; // Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
        sha: string; // Required.
        force: boolean; // Required. Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.
      },
      callback: (err: any, result: any) => void
    );
    deleteReference(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        ref: string; // Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
      },
      callback: (err: any, result: any) => void
    );
    getTag(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sha: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    createTag(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        tag: string; // Required. String of the tag
        message: string; // Required. String of the tag message
        object: string; // Required. String of the SHA of the git object this is tagging
        type: string; // Required. String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
        tagger: any; // TODO::JSON // Required. JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged
      },
      callback: (err: any, result: any) => void
    );
    getTree(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sha: string; // Required.
        recursive ?: boolean; // Optional.
      },
      callback: (err: any, result: any) => void
    );
    createTree(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        tree: any; // TODO::JSON // Required. Array of Hash objects (of path, mode, type and sha) specifying a tree structure
        base_tree ?: string; // Optional. String of the SHA1 of the tree you want to update with new data
      },
      callback: (err: any, result: any) => void
    );
  }
  export interface gists {
    getAll(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
        since ?: string; // Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      },
      callback: (err: any, result: any) => void
    );
    getFromUser(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
        since ?: string; // Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      },
      callback: (err: any, result: any) => void
    );
    create(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        description ?: string; // Optional.
        public: boolean; // Required.
        files: any; // TODO::JSON // Required. Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
      },
      callback: (err: any, result: any) => void
    );
    edit(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        description ?: string; // Optional.
        files: any; // TODO::JSON // Required. Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
      },
      callback: (err: any, result: any) => void
    );
    public(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        since ?: string; // Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      },
      callback: (err: any, result: any) => void
    );
    starred(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        since ?: string; // Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      },
      callback: (err: any, result: any) => void
    );
    get(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    star(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    deleteStar(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    checkStar(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    fork(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    delete(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
  }
  export interface orgs {
    getFromUser(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    get(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    update(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        billing_email ?: string; // Optional. Optional string - Billing email address. This address is not publicized.
        company ?: string; // Optional.
        email ?: string; // Optional. Optional string - Publicly visible email address.
        location ?: string; // Optional.
        name ?: string; // Optional.
      },
      callback: (err: any, result: any) => void
    );
    getMembers(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getMember(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        user: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    removeMember(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        user: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getPublicMembers(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getPublicMember(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        user: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    publicizeMembership(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        user: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    concealMembership(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        user: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getTeams(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getTeam(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    createTeam(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        name: string; // Required.
        repo_names ?: any[]; // TODO::ARRAY // Optional. Optional array of strings
        permission ?: string; // Optional. `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories. Validation rule: ` ^(pull|push|admin)$ `.
      },
      callback: (err: any, result: any) => void
    );
    updateTeam(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        name: string; // Required.
        permission ?: string; // Optional. `pull` - team members can pull, but not push or administer this repositories (Default), `push` - team members can pull and push, but not administer this repositores, `admin` - team members can pull, push and administer these repositories. Validation rule: ` ^(pull|push|admin)$ `.
      },
      callback: (err: any, result: any) => void
    );
    deleteTeam(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getTeamMembers(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getTeamMember(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        user: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    addTeamMember(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        user: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    deleteTeamMember(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        user: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getTeamRepos(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getTeamRepo(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        user: string; // Required.
        repo: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    addTeamRepo(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        user: string; // Required.
        repo: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    deleteTeamRepo(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        user: string; // Required.
        repo: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
  }
  export interface issues {
    getAll(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        filter ?: string; // Optional. Validation rule: ` ^(all|assigned|created|mentioned|subscribed)$ `.
        state ?: string; // Optional. Validation rule: ` ^(open|closed)$ `.
        labels ?: string; // Optional. String list of comma separated Label names. Example: bug,ui,@high
        sort ?: string; // Optional. Validation rule: ` ^(created|updated|comments)$ `.
        direction ?: string; // Optional. Validation rule: ` ^(asc|desc)$ `.
        since ?: string; // Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    repoIssues(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        milestone ?: string; // Optional. Validation rule: ` ^([0-9]+|none|\*)$ `.
        state ?: string; // Optional. open or closed Validation rule: ` ^(open|closed)$ `.
        assignee ?: string; // Optional. String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User.
        mentioned ?: string; // Optional. String User login.
        labels ?: string; // Optional. String list of comma separated Label names. Example: bug,ui,@high
        sort ?: string; // Optional. Validation rule: ` ^(created|updated|comments)$ `.
        direction ?: string; // Optional. Validation rule: ` ^(asc|desc)$ `.
        since ?: string; // Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getRepoIssue(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    create(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        title: string; // Required.
        body ?: string; // Optional.
        assignee ?: string; // Optional. Optional string - Login for the user that this issue should be assigned to.
        milestone ?: number; // Optional. Optional number - Milestone to associate this issue with. Validation rule: ` ^[0-9]+$ `.
        labels: any; // TODO::JSON // Required. Optional array of strings - Labels to associate with this issue.
      },
      callback: (err: any, result: any) => void
    );
    edit(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        title ?: string; // Optional.
        body ?: string; // Optional.
        assignee ?: string; // Optional. Optional string - Login for the user that this issue should be assigned to.
        milestone ?: number; // Optional. Optional number - Milestone to associate this issue with. Validation rule: ` ^[0-9]+$ `.
        labels ?: any; // TODO::JSON // Optional. Optional array of strings - Labels to associate with this issue.
        state ?: string; // Optional. open or closed Validation rule: ` ^(open|closed)$ `.
      },
      callback: (err: any, result: any) => void
    );
    repoComments(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sort ?: string; // Optional. Validation rule: ` ^(created|updated)$ `.
        direction ?: string; // Optional. Validation rule: ` ^(asc|desc)$ `.
        since ?: string; // Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getComments(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    createComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        body: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    editComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
        body: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    deleteComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getEvents(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getRepoEvents(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getEvent(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getLabels(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getLabel(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        name: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    createLabel(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        name: string; // Required.
        color: string; // Required. Required string - 6 character hex code, without a leading #.
      },
      callback: (err: any, result: any) => void
    );
    updateLabel(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        name: string; // Required.
        color: string; // Required. Required string - 6 character hex code, without a leading #.
      },
      callback: (err: any, result: any) => void
    );
    deleteLabel(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        name: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getAllMilestones(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        state ?: string; // Optional. Validation rule: ` ^(open|closed)$ `.
        sort ?: string; // Optional. due_date, completeness, default: due_date Validation rule: ` ^(due_date|completeness)$ `.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getMilestone(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    createMilestone(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        title: string; // Required.
        state ?: string; // Optional. Validation rule: ` ^(open|closed)$ `.
        description ?: string; // Optional.
        due_on ?: string; // Optional. Optional string - ISO 8601 time.
      },
      callback: (err: any, result: any) => void
    );
    updateMilestone(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        title: string; // Required.
        state ?: string; // Optional. Validation rule: ` ^(open|closed)$ `.
        description ?: string; // Optional.
        due_on ?: string; // Optional. Optional string - ISO 8601 time.
      },
      callback: (err: any, result: any) => void
    );
    deleteMilestone(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
  }
  export interface markdown {
    render(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        text: string; // Required. The Markdown text to render
        mode ?: string; // Optional. The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly. Validation rule: ` ^(markdown|gfm)$ `.
        context ?: string; // Optional. The repository context, only taken into account when rendering as `gfm`
      },
      callback: (err: any, result: any) => void
    );
  }
  export interface pullRequests {
    getAll(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        state ?: string; // Optional. Validation rule: ` ^(open|closed)$ `.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    get(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    create(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        title: string; // Required.
        body ?: string; // Optional.
        base: string; // Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
        head: string; // Required. Required string - The branch (or git ref) where your changes are implemented.
      },
      callback: (err: any, result: any) => void
    );
    createFromIssue(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        issue: number; // Required. Validation rule: ` ^[0-9]+$ `.
        base: string; // Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
        head: string; // Required. Required string - The branch (or git ref) where your changes are implemented.
      },
      callback: (err: any, result: any) => void
    );
    update(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        state ?: string; // Optional. Validation rule: ` ^(open|closed)$ `.
        title: string; // Required.
        body ?: string; // Optional.
      },
      callback: (err: any, result: any) => void
    );
    getCommits(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFiles(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getMerged(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    merge(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        commit_message ?: string; // Optional. Optional string - The message that will be used for the merge commit
      },
      callback: (err: any, result: any) => void
    );
    getComments(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    createComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        body: string; // Required.
        commit_id: string; // Required. Required string - Sha of the commit to comment on.
        path: string; // Required. Required string - Relative path of the file to comment on.
        position: number; // Required. Required number - Column index in the diff to comment on.
      },
      callback: (err: any, result: any) => void
    );
    createCommentReply(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        body: string; // Required.
        in_reply_to: number; // Required.
      },
      callback: (err: any, result: any) => void
    );
    updateComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
        body: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    deleteComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        number: number; // Required. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
  }
  export interface search {
    issues(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        state: string; // Required. open or closed Validation rule: ` ^(open|closed)$ `.
        keyword: string; // Required. Search term
      },
      callback: (err: any, result: any) => void
    );
    repos(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        keyword: string; // Required. Search term
        language ?: string; // Optional. Filter results by language, see https://github.com/languages
        start_page ?: number; // Optional. Page number to fetch Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    users(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        keyword: string; // Required. Keyword search parameters
        start_page ?: number; // Optional. Page number to fetch Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    email(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        email: string; // Required. Email address
      },
      callback: (err: any, result: any) => void
    );
  }
  export interface statuses {
    get(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sha: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    create(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sha: string; // Required.
        state: string; // Required. State of the status - can be one of pending, success, error, or failure. Validation rule: ` ^(pending|success|error|failure)$ `.
        target_url ?: string; // Optional. Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status.
        description ?: string; // Optional. Short description of the status.
      },
      callback: (err: any, result: any) => void
    );
  }
  export interface repos {
    getAll(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        type ?: string; // Optional. Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`. Validation rule: ` ^(all|owner|public|private|member)$ `.
        sort ?: string; // Optional. Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. Validation rule: ` ^(created|updated|pushed|full_name)$ `.
        direction ?: string; // Optional. Validation rule: ` ^(asc|desc)$ `.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFromUser(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
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
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        type ?: string; // Optional. Possible values: `all`, `public`, `member`. Default: `all`. Validation rule: ` ^(all|public|member)$ `.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: GitHubResult.Org.Repo[]) => void
    );
    create(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        name: string; // Required.
        description ?: string; // Optional.
        homepage ?: string; // Optional.
        private ?: boolean; // Optional. Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
        has_issues ?: boolean; // Optional. Optional boolean - true to enable issues for this repository, false to disable them. Default is true.
        has_wiki ?: boolean; // Optional. Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true.
        has_downloads ?: boolean; // Optional. Optional boolean - true to enable downloads for this repository, false to disable them. Default is true.
        auto_init ?: boolean; // Optional. Optional boolean - true to create an initial commit with empty README. Default is false
        gitignore_template ?: string; // Optional. Optional string - Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
      },
      callback: (err: any, result: any) => void
    );
    createFromOrg(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        org: string; // Required.
        name: string; // Required.
        description ?: string; // Optional.
        homepage ?: string; // Optional.
        private ?: boolean; // Optional. Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
        has_issues ?: boolean; // Optional. Optional boolean - true to enable issues for this repository, false to disable them. Default is true.
        has_wiki ?: boolean; // Optional. Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true.
        has_downloads ?: boolean; // Optional. Optional boolean - true to enable downloads for this repository, false to disable them. Default is true.
        auto_init ?: boolean; // Optional. Optional boolean - true to create an initial commit with empty README. Default is false
        gitignore_template ?: string; // Optional. Optional string - Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
        team_id ?: number; // Optional. Optional number - The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    get(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    update(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        name: string; // Required.
        description ?: string; // Optional.
        homepage ?: string; // Optional.
        private ?: boolean; // Optional. Optional boolean - true to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
        has_issues ?: boolean; // Optional. Optional boolean - true to enable issues for this repository, false to disable them. Default is true.
        has_wiki ?: boolean; // Optional. Optional boolean - true to enable the wiki for this repository, false to disable it. Default is true.
        has_downloads ?: boolean; // Optional. Optional boolean - true to enable downloads for this repository, false to disable them. Default is true.
      },
      callback: (err: any, result: any) => void
    );
    delete(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    merge(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        base: string; // Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
        head: string; // Required. Required string - The branch (or git ref) where your changes are implemented.
        commit_message ?: string; // Optional. Optional string - Commit message to use for the merge commit. If omitted, a default message will be used.
      },
      callback: (err: any, result: any) => void
    );
    getContributors(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        anon ?: boolean; // Optional. Optional flag. Set to 1 or true to include anonymous contributors in results.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getLanguages(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getTeams(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getTags(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getBranches(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getBranch(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        branch: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getCollaborators(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getCollaborator(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        collabuser: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    addCollaborator(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        collabuser: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    removeCollaborator(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        collabuser: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getCommits(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sha ?: string; // Optional. Optional string - Sha or branch to start listing commits from.
        path ?: string; // Optional. Optional string - Only commits containing this file path will be returned.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
        since ?: string; // Optional. Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
      },
      callback: (err: any, result: any) => void
    );
    getCommit(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sha: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getAllCommitComments(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getCommitComments(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sha: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    createCommitComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sha: string; // Required.
        body: string; // Required.
        commit_id: string; // Required. Required string - Sha of the commit to comment on.
        path ?: string; // Optional. Optional string - Relative path of the file to comment on.
        position ?: number; // Optional. Optional number - Line index in the diff to comment on.
        line ?: number; // Optional. Optional number - Line number in the file to comment on. Defaults to 1.
      },
      callback: (err: any, result: any) => void
    );
    getCommitComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    updateCommitComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
        body: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    compareCommits(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        base: string; // Required. Required string - The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
        head: string; // Required. Required string - The branch (or git ref) where your changes are implemented.
      },
      callback: (err: any, result: any) => void
    );
    deleteCommitComment(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getReadme(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        ref ?: string; // Optional. The String name of the Commit/Branch/Tag. Defaults to master.
      },
      callback: (err: any, result: any) => void
    );
    getContent(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        path ?: string; // Optional. The content path.
        ref ?: string; // Optional. The String name of the Commit/Branch/Tag. Defaults to master.
      },
      callback: (err: any, result: any) => void
    );
    createFile(
      msg:
      {
        user: string; // Required.
        repo: string; // Required.
        path: string; // Required. The content path.
        message: string; // Required. The commit message.
        content: string; // Required. The new file content, Base64 encoded.
        branch ?: string; // Optional. The branch name. If not provided, uses the repository’s default branch (usually master).
        author ?: any; // TODO::JSON // Optional. The author of the commit. An object with name and email properties. The author section is optional and is filled in with the committer information if omitted. If the committer information is omitted, the authenticated user’s information is used.
        committer ?: any; // TODO::JSON // Optional. The committer of the commit. An object with name and email properties. You must provide values for both name and email, whether you choose to use author or committer. Otherwise, you’ll receive a 500 status code.
      },
      callback: (err: any, result: any) => void
    );
    updateFile(
      msg:
      {
        user: string; // Required.
        repo: string; // Required.
        path: string; // Required. The content path.
        message: string; // Required. The commit message.
        content: string; // Required. The updated file content, Base64 encoded.
        sha: string; // Required. The blob SHA of the file being replaced.
        branch ?: string; // Optional. The branch name. If not provided, uses the repository’s default branch (usually master).
        author ?: any; // TODO::JSON // Optional. The author of the commit. An object with name and email properties. The author section is optional and is filled in with the committer information if omitted. If the committer information is omitted, the authenticated user’s information is used.
        committer ?: any; // TODO::JSON // Optional. The committer of the commit. An object with name and email properties. You must provide values for both name and email, whether you choose to use author or committer. Otherwise, you’ll receive a 500 status code.
      },
      callback: (err: any, result: any) => void
    );
    deleteFile(
      msg:
      {
        user: string; // Required.
        repo: string; // Required.
        path: string; // Required. The content path.
        message: string; // Required. The commit message.
        sha: string; // Required. The blob SHA of the file being removed.
        branch ?: string; // Optional. The branch name. If not provided, uses the repository’s default branch (usually master).
        author ?: any; // TODO::JSON // Optional. The author of the commit. An object with name and email properties. The author section is optional and is filled in with the committer information if omitted. If the committer information is omitted, the authenticated user’s information is used.
        committer ?: any; // TODO::JSON // Optional. The committer of the commit. An object with name and email properties. You must provide values for both name and email, whether you choose to use author or committer. Otherwise, you’ll receive a 500 status code.
      },
      callback: (err: any, result: any) => void
    );
    getArchiveLink(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        ref: string; // Required. String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
        archive_format: string; // Required. Either tarball or zipball Validation rule: ` ^(tarball|zipball)$ `.
      },
      callback: (err: any, result: any) => void
    );
    getDownloads(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getDownload(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    deleteDownload(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getForks(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        sort ?: string; // Optional. Possible values: `newest`, `oldest`, `watchers`, default: `newest`. Validation rule: ` ^(newest|oldest|watchers)$ `.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    fork(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        org ?: string; // Optional. Optional String - Organization login. The repository will be forked into this organization.
      },
      callback: (err: any, result: any) => void
    );
    getKeys(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getKey(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    createKey(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        title: string; // Required.
        key: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    updateKey(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
        title: string; // Required.
        key: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    deleteKey(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getStargazers(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getStarred(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getStarredFromUser(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getStarring(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    star(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    unStar(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getWatchers(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getWatched(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getWatchedFromUser(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getWatching(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    watch(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    unWatch(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getHooks(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getHook(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    createHook(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        name: string; // Required.
        config: any; // TODO::JSON // Required. Required hash - A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
        events ?: any[]; // TODO::ARRAY // Optional. Optional array - Determines what events the hook is triggered for. Default: `['push']`.
        active ?: boolean; // Optional. Optional boolean - Determines whether the hook is actually triggered on pushes.
      },
      callback: (err: any, result: any) => void
    );
    updateHook(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
        name: string; // Required.
        config: any; // TODO::JSON // Required. Required hash - A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
        events ?: any[]; // TODO::ARRAY // Optional. Optional array - Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`.
        add_events ?: any[]; // TODO::ARRAY // Optional. Optional array - Determines a list of events to be added to the list of events that the Hook triggers for.
        remove_events ?: any[]; // TODO::ARRAY // Optional. Optional array - Determines a list of events to be removed from the list of events that the Hook triggers for.
        active ?: boolean; // Optional. Optional boolean - Determines whether the hook is actually triggered on pushes.
      },
      callback: (err: any, result: any) => void
    );
    testHook(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    deleteHook(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        repo: string; // Required.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
  }
  export interface user {
    getFrom(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    get(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      },
      callback: (err: any, result: any) => void
    );
    update(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        name ?: string; // Optional.
        email ?: string; // Optional.
        blog ?: string; // Optional.
        company ?: string; // Optional.
        location ?: string; // Optional.
        hireable ?: boolean; // Optional.
        bio ?: string; // Optional.
      },
      callback: (err: any, result: any) => void
    );
    getOrgs(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getEmails(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    addEmails(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      },
      callback: (err: any, result: any) => void
    );
    deleteEmails(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
      },
      callback: (err: any, result: any) => void
    );
    getFollowers(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFollowingFromUser(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFollowing(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getFollowUser(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    followUser(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    unFollowUser(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        user: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    getKeys(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        page ?: number; // Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
        per_page ?: number; // Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
      },
      callback: (err: any, result: any) => void
    );
    getKey(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    createKey(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        title: string; // Required.
        key: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    updateKey(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
        id: string; // Required.
        title: string; // Required.
        key: string; // Required.
      },
      callback: (err: any, result: any) => void
    );
    deleteKey(
      msg:
      {
        headers ?: Header; // Optional. Key/ value pair of request headers to pass along with the HTTP request. Valid headers are: 'If-Modified-Since', 'If-None-Match', 'Cookie', 'User-Agent'.
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
    authorization: GitHubApi.authorization;
    events       : GitHubApi.events;
    gists        : GitHubApi.gists;
    gitdata      : GitHubApi.gitdata;
    issues       : GitHubApi.issues;
    markdown     : GitHubApi.markdown;
    orgs         : GitHubApi.orgs;
    pullRequests : GitHubApi.pullRequests;
    search       : GitHubApi.search;
    statuses     : GitHubApi.statuses;
    user         : GitHubApi.user;
    repos        : GitHubApi.repos;
  }
  export = GitHub;
}
