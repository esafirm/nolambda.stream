#!/usr/bin/env ruby

require_relative 'helpers.rb'

def draft_list
	return Dir.children(ARTICLE_DIR).select { |dirname|
		dirname.include? DRAFT_KEY
	}
end

puts "Your draft:"
draft_list.each_with_index { |draft, index|
	puts "#{index + 1}. #{draft}"
}

