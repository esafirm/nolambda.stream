#!/usr/bin/env ruby
# frozen_string_literal: true

require_relative 'helpers.rb'

print 'Enter your title: '
TITLE = gets.chomp

abort 'Title should not be empty' if TITLE.empty?

FORMATTED_DATE = CURRENT_DATE_SIMPLE
ARTICLE_DATE = CURRENT_DATE

TEMPALTE_PATH = 'scripts/temp---template'

NEW_PATH = "temp---#{DRAFT_KEY}---#{FORMATTED_DATE}---#{TITLE}".gsub(' ', '-')

puts "new path #{NEW_PATH}"

## Create content and move it
`cp -r #{TEMPALTE_PATH} #{NEW_PATH}`
`mv #{NEW_PATH} #{ARTICLE_DIR}`

## Go to the directory first
Dir.chdir(ARTICLE_DIR)

TARGET = "#{NEW_PATH}/index.md"

def replace_in_file(placeholder, value)
  `sed -i '' "s/#{placeholder}/#{value}/g" #{TARGET}`
end

replace_in_file('{{DATE}}', ARTICLE_DATE)
replace_in_file('{{TITLE}}', TITLE)
replace_in_file('{{PATH}}', TITLE.downcase.gsub(' ', '-'))

puts 'Your new article is ready!'
