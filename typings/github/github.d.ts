// Type definitions for Node-github.js v0.1.8
// Project: https://github.com/ajaxorg/node-github
// Definitions by: Michael Ferris <https://github.com/Cellule>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
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
    getFromOrg(
      msg: {
        org: string;
        type ?: string; //^(all|public|member)$
        page ?: number;
        per_page ?: number;
      },
      callback: (err: any, result: GitHubResult.Org.Repo[]) => void
    );
    getAll(
      msg: {
        type ?: string; //^(all|owner|public|private|member)$
        sort ?: string; //^(created|updated|pushed|full_name)$
        direction ?: string; //^(asc|desc)$
        page ?: number;
        per_page ?: number;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getFromUser(
      msg: {
        user: Object;
        type ?: string; //^(all|owner|member)$
        sort ?: string; //^(created|updated|pushed|full_name)$
        direction: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getFromOrg(
      msg: {
        org: Object;
        type ?: string; //^(all|public|member)$
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    create(
      msg: {
        name: Object;
        description: Object;
        homepage: Object;
        private: Object;
        has_issues: Object;
        has_wiki: Object;
        has_downloads: Object;
        auto_init: Object;
        gitignore_template: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    createFromOrg(
      msg: {
        org: Object;
        name: Object;
        description: Object;
        homepage: Object;
        private: Object;
        has_issues: Object;
        has_wiki: Object;
        has_downloads: Object;
        auto_init: Object;
        gitignore_template: Object;
        team_id ?: Number;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    ge(
      msg: {
        user: Object;
        repo: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    updat(
      msg: {
        user: Object;
        repo: Object;
        name: Object;
        description: Object;
        homepage: Object;
        private: Object;
        has_issues: Object;
        has_wiki: Object;
        has_downloads: Object;
        default_branch: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    delet(
      msg: {
        user: Object;
        repo: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    merg(
      msg: {
        user: Object;
        repo: Object;
        base: Object;
        head: Object;
        commit_message ?: string; //
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getContributors(
      msg: {
        user: Object;
        repo: Object;
        anon ?: Boolean; //
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getLanguages(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getTeams(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getTags(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getBranches(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getBranch(
      msg: {
        user: Object;
        repo: Object;
        branch: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getCollaborators(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getCollaborator(
      msg: {
        user: Object;
        repo: Object;
        collabuser: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    addCollaborator(
      msg: {
        user: Object;
        repo: Object;
        collabuser: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    removeCollaborator(
      msg: {
        user: Object;
        repo: Object;
        collabuser: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getCommits(
      msg: {
        user: Object;
        repo: Object;
        sha ?: string; //
        path ?: string; //
        author ?: string; //
        page: Object;
        per_page: Object;
        since: Object;
        until: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getCommit(
      msg: {
        user: Object;
        repo: Object;
        sha: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getAllCommitComments(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getCommitComments(
      msg: {
        user: Object;
        repo: Object;
        sha: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    createCommitComment(
      msg: {
        user: Object;
        repo: Object;
        sha: Object;
        body: Object;
        commit_id: Object;
        path ?: string; //
        position ?: Number; //
        line ?: Number; //
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getCommitComment(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    updateCommitComment(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
        body: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    compareCommits(
      msg: {
        user: Object;
        repo: Object;
        base: Object;
        head: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    deleteCommitComment(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getReadme(
      msg: {
        user: Object;
        repo: Object;
        ref ?: string; //
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getContent(
      msg: {
        user: Object;
        repo: Object;
        path ?: string; //
        ref ?: string; //
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );
    createContent(
      msg: {
        user: Object;
        repo: Object;
        content:Object
        message:Object
        path ?: string; //
        ref ?: string; //
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    createFile(
      msg: {
        user: Object;
        repo: Object;
        path: string //;
        message: string //;
        content: string //;
        branch ?: string; //
        author ?: {[id: string]: string}; //
        committer ?: {[id: string]: string}; //
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    updateFile(
      msg: {
        user: Object;
        repo: Object;
        path: string //;
        message: string //;
        content: string //;
        sha: string //;
        branch ?: string; //
        author ?: {[id: string]: string}; //
        committer ?: {[id: string]: string}; //
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    deleteFile(
      msg: {
        user: Object;
        repo: Object;
        path: string //;
        message: string //;
        sha: string //;
        branch ?: string; //
        author ?: {[id: string]: string}; //
        committer ?: {[id: string]: string}; //
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getArchiveLink(
      msg: {
        user: Object;
        repo: Object;
        ref ?: string; //
        archive_format: string //^(tarball|zipball)$;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getDownloads(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getDownload(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    deleteDownload(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getForks(
      msg: {
        user: Object;
        repo: Object;
        sort ?: string; //^(newest|oldest|watchers)$
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    for(
      msg: {
        user: Object;
        repo: Object;
        organization ?: string; //
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getKeys(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getKey(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    createKey(
      msg: {
        user: Object;
        repo: Object;
        title: Object;
        key: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    updateKey(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
        title: Object;
        key: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    deleteKey(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getStargazers(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getStarred(
      msg: {
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getStarredFromUser(
      msg: {
        user: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getStarring(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    sta(
      msg: {
        user: Object;
        repo: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    unStar(
      msg: {
        user: Object;
        repo: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getWatchers(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getWatched(
      msg: {
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getWatchedFromUser(
      msg: {
        user: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getWatching(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    watc(
      msg: {
        user: Object;
        repo: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    unWatch(
      msg: {
        user: Object;
        repo: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getHooks(
      msg: {
        user: Object;
        repo: Object;
        page: Object;
        per_page: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    getHook(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    createHook(
      msg: {
        user: Object;
        repo: Object;
        name: Object;
        config: {[id: string]: string}; //;
        events ?: string[]; //
        active ?: Boolean; //
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    updateHook(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
        name: Object;
        config: {[id: string]: string}; //;
        events ?: string[]; //
        add_events ?: string[]; //
        remove_events ?: string[]; //
        active ?: Boolean; //
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    testHook(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
    );

    deleteHook(
      msg: {
        user: Object;
        repo: Object;
        id: Object;
      },
      callback: (err: any, result: GitHubResult.PlaceHolder) => void
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
