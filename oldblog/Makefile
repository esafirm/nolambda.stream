## Makefile style guide
## https://style-guides.readthedocs.io/en/latest/makefile.html

.DEFAULT_GOAL:=help
SHELL:=/usr/bin/env bash

help: ## Display all available target
	@echo ""
	@echo "Available tasks:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""
.PHONY: help

new: ## Create new article
	@./scripts/article.rb
.PHONY: new

ls: ## List all draft
	@./scripts/draft_list.rb .
.PHONY: ls

clear: ## Clear all draft
	@./scripts/clear_draft.rb
.PHONY: clear

publish: ## Publish draft
	@./scripts/publish.rb
.PHONY: publish

