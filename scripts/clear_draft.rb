#!/usr/bin/env ruby

require 'fileutils'
require_relative 'draft_list.rb'

draft_list.each do |draft|
  complete_path = "#{ARTICLE_DIR}/#{draft}"
  FileUtils.remove_dir(complete_path)
end

puts "\nAll files deleted!"
