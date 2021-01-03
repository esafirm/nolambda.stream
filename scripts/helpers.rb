#!/usr/bin/env ruby
# frozen_string_literal: true

# Constant

ARTICLE_DIR = 'src/pages/articles'
CURRENT_DATE = `date -u +"%Y-%m-%dT%H:%M:%SZ"`.chomp
CURRENT_DATE_SIMPLE = `date +%F`.chomp
DRAFT_KEY = 'DRAFT'

# Helper methods

def move_to_position
  Dir.chdir("#{__dir__}/..")
  puts "current dir: #{Dir.pwd}"
end

move_to_position
