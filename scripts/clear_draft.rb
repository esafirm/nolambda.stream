#!/usr/bin/env ruby

require "fileutils"
require_relative "draft_list.rb"

draft_list.each { |draft| 
	complete_path = "#{ARTICLE_DIR}/#{draft}"
	FileUtils.remove_dir(complete_path)
}

puts "\nAll files deleted!"