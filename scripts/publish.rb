#!/usr/bin/env ruby
# frozen_string_literal: true

require 'fileutils'
require_relative 'draft_list'

puts 'Which you want to publish?'
print_draft_list

current_draft = draft_list
puts "Choose [1 - #{current_draft.length}]:"

## Get input
choosed_index = gets.chomp.to_i - 1
published_draft = current_draft[choosed_index]

puts "Publishing #{published_draft}…"

## Replace date in markdown file
markdown_file = "#{ARTICLE_DIR}/#{published_draft}/index.md"
`sed -i '' 's/date: ".*"/date: "#{CURRENT_DATE}"/g' #{markdown_file}`

## Replace draft:false to true
`sed -i '' 's/draft: false/draft: true/g' #{markdown_file}`

## Rename directory
new_dir_name = published_draft.gsub(
  /temp---DRAFT---.*---/,
  "#{CURRENT_DATE_SIMPLE}---"
).to_s

FileUtils.mv(
  "#{ARTICLE_DIR}/#{published_draft}",
  "#{ARTICLE_DIR}/#{new_dir_name}"
)

puts 'Published'
