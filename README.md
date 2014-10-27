installation
============

Utility to help you install MyKoop on your system for dev

Check out [Dev Configuration](https://github.com/my-koop/service.website/wiki/Developer-Configuration) for dependencies needed to work with MyKoop

```
mk help

  Usage: index [options] [command]

  Commands:

    install     Install MyKoop from fresh
    links       Update npm link & tsd link for local dev
    help [cmd]  display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
```
mk help install

  Usage: index-install [options]

  Options:

    -h, --help      output usage information
    -n, --noprompt  Automatically clone all repo from the organization without prompt
    -l, --links     Create npm & tsd symbolic links after install
    -i, --npmi      Execute npm install on all repo
    -a, --all       Run all without prompts
```