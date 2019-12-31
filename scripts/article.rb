#!/usr/bin/env ruby

require_relative "helpers.rb"

print "Enter your title: "
TITLE = gets.chomp

if TITLE.empty?
  abort "Title should not be empty"
end

ARTICLE_DATE = `date -u +"%Y-%m-%dT%H:%M:%SZ"`.chomp
FORMATTED_DATE = `date +%F`.chomp
TEMPALTE_PATH = "temp---template/"

NEW_PATH = "temp---#{DRAFT_KEY}---#{FORMATTED_DATE}---#{TITLE}".gsub(" ", "-")

puts "new path #{NEW_PATH}"

## Go to the directory first
Dir.chdir(ARTICLE_DIR)

Dir.mkdir(NEW_PATH)

`cp -r #{TEMPALTE_PATH} #{NEW_PATH}`

TARGET = "#{NEW_PATH}/index.md"

def replaceInFile(placeholder, value)
  `sed -i '' "s/#{placeholder}/#{value}/g" #{TARGET}`
end

replaceInFile("{{DATE}}", ARTICLE_DATE)
replaceInFile("{{TITLE}}", TITLE)
replaceInFile("{{PATH}}", TITLE.downcase.gsub(" ", "-"))

puts "Your new article is ready!"