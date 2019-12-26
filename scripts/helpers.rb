#!/usr/bin/env ruby

# Constant

ARTICLE_DIR = "src/pages/articles"
DRAFT_KEY = "DRAFT"

# Helper methods

def moveToPosition
  Dir.chdir("#{__dir__}/..")
  puts "current dir: #{Dir.pwd}"
end

moveToPosition
