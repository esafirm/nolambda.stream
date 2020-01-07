#!/usr/bin/env ruby
# frozen_string_literal: true

require_relative 'helpers.rb'

def draft_list
  Dir.children(ARTICLE_DIR).select do |dirname|
    dirname.include? DRAFT_KEY
  end
end

def print_draft_list
  draft_list.each_with_index do |draft, index|
    puts "#{index + 1}. #{draft}"
  end
end

return if ARGV.empty?

puts 'Your draft:'
print_draft_list
