
require 'fileutils'

# A script to migrate old blog posts
class MigratePost
	
	def run
		old_dir = "#{File.dirname(__FILE__)}/articles"
		new_dir = "#{File.dirname(__FILE__)}/new_articles"
		
		FileUtils.mkdir_p(new_dir)

		Dir.foreach(old_dir) do |file|
			next if file == '.' or file == '..'

			puts "Processing #{file}"

			post_name = file
			post = "#{file}/index.md"
			new_file = "#{new_dir}/#{post_name}.md"

			`cp -r #{old_dir}/#{post} #{new_file}`
			
			content = File.read(new_file)
			content.gsub!(/layout: post\n/, "")
			content.gsub!(/path:.*\n/, "")
			content.gsub!(/description:(.*)/, "summary: \\1")

			puts "Writing #{new_file}"
			File.write(new_file, content)
		end
		

	end
	
end

# Execute
MigratePost.new.run
