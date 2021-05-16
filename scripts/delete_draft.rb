#!/usr/bin/env ruby
# frozen_string_literal: true

require 'fileutils'
require_relative 'draft_list'

puts 'Which draft you want to delete?'
print_draft_list

current_draft = draft_list
puts "Choose [1 - #{current_draft.length}]:"

## Get input
choosed_index = gets.chomp.to_i - 1
deleted_draft = current_draft[choosed_index]

puts "Deleting #{deleted_draft}…"

FileUtils.remove_dir("#{ARTICLE_DIR}/#{deleted_draft}")

puts 'Deleted.'
