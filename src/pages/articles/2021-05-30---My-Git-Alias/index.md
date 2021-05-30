---
title: 'My Git Aliases'
date: '2021-05-30T07:16:50Z'
layout: post
draft: false
path: '/posts/my-git-alias/'
category: 'Tech'
tags:
  - 'Git'
  - 'CLI'
description: 'My Git aliases that I use on daily basis to help me with works and make Git more interactive and efficient'
---

## Intro to Git Aliases

If you use Git in your Terminal on daily basis, there's a good chance that you have some bash/zsh aliases for commands that you frequently use.
As a matter of fact, oh-my-zsh, a framework for ZSH has these aliases out of the box. For the example:

```
g       => git
gl      => git pull
gp      => git push
ggpull  => git pull origin $(current_branch)
```

> You can find all the aliases [here](https://jasonm23.github.io/oh-my-git-aliases.html)

But do you know that Git has alias feature out of the box too? It's not the same as bash alias, as we still gonna use `git` as our first command.
For example, if we want to create an alias for checkout, we can do this:

```
$ git config --global alias.co checkout
```

Or we can add `unstage` alias

```bash
$ git config --global alias.unstage 'reset HEAD --'
```

Then you can use this to `unstage` a file

```bash
## This is equivalent to running git reset HEAD -- fileA

$ git unstage fileA
```

> You can check out the official documentation in [here](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)

## Aliases for Daily Usage

Back on the topic, what's git aliases that I use on daily basis? Actually, I'm using the alias not just for shorthand but also to trigger a Ruby script that will help me to make my workload easier.

## 1. `git recent`

Because I had to work with quite a few branches at one time and I tend to forget what I just did, I use this alias a lot. It translates to this:

```
$ git branch --sort=-committerdate
```

I wrap this command in a simple Ruby script that enables me to list the recent branch and checkout to the branch I select.

```ruby
#!/usr/bin/env ruby

# frozen_string_literal: true

require 'tty-prompt'

git_command = 'git branch --sort=-committerdate'
git_result = `#{git_command}`.chomp.split("\n")

abort('Invalid git command') if git_result.nil?

## Show prompt
prompt = TTY::Prompt.new
label = "Choose branch to checkot:"
selected = prompt.select(label, git_result, filter: true)

system "git checkout #{selected}"
```

![git recent usage](./1.gif)

## 2. `git del`

If you had too many unused branches, it becomes clutters. It can distract you from doing the actual works or making you more forgetful than you already are 😅 So I have this alias to multi select branches and delete them on one keypress. Here's the script:

```ruby
#!/usr/bin/env ruby

# frozen_string_literal: true

require 'tty-prompt'

## See that I use git recent as my list?
git_command = 'git branch --sort=-committerdate'
git_result = `#{git_command}`.chomp.split("\n")

abort('Invalid git command') if git_result.nil?

## Show prompt
prompt = TTY::Prompt.new
label = "Choose branches to delete:"
selected = prompt.multi_select(label, git_result, filter: true)

selected_string = selected.map(&:chomp).join(' ') if selected.is_a?(Array)

## git branch -D branchA branchB branchC
system "git branch -D #{selected_string}"
```

![git del usage](./2.gif)

## 3. `git today`

Now you know how forgetful I can become, this one helps me to remember what commit did I make today. It also filters out your commits from everyone else.

```
git log --since=midnight --author='E' --oneline
```

---

That's it, you can check out my complete git alias and scripts on my dotfiles repo [here](https://github.com/esafirm/dotfiles/blob/master/.gitconfig)
Until next time.
