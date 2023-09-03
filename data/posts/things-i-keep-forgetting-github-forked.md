---
title: Things I Keep Forgetting - Behavior in PR from Forked Repository in Github
date: '2023-09-03'
tags: ['Github', 'OSS', 'Git']
draft: false
summary: Getting a Pull Request (PR) from a Forked Repository in Github can be quite confusing. Here I put a note to self about the behavior that apparantly I keep forgetting.
---

Getting a Pull Request (PR) from a Forked Repository in Github can be quite confusing. Here I put a note to self about the behavior that
apparantly I keep forgetting.

## Pull Request Editing

You, as an author of the repository where the PR exits, can edit the PR meta data such as the title of the PR, the description, labels, 
all that sort of things, at will.

But, for the content of the PR itself, there are some rules that you need to follow, such as:

1. You need to have a permission from the PR creator. [More info](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)

2. The rest of the process is the same as adding a commit to a new repo, you need to clone it first, create the change, make a commit, push it, and so on. [More info](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)

> My suggestion is, if the PR is critical such as a bug fix and it is not that big, just create a new PR instead of editing the existing one. Yes then can add the contributor name in the [co-author](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) 

## Workflow/Action Triggering

Github support the workflow/action triggering from the forked repository. But, there's a case where you don't want to automatically running it. For instance, to keep the quota of the workflow in the main repository in check. Or maybe you have a workflow that costly.

Good thing that Github support a way to [approving workflow runs from public forks](https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks), so when people creating a PR in our repo from their forked repo, the workflow will not be triggered automatically and need our confirmation to run it.

Here's the catch, while it's not confirmed yet it seems that a pipeline/workflow approval **has a time limit** in a case that if certain times has passed, no info about a workflow being run or anything related to it. To re-trigger, close and re-open the PR

Until next time, cheers!
