### 
# Compass
###

compass_config do |config|
  config.output_style = :compressed
end

###
# Page options, layouts, aliases and proxies
###

activate :directory_indexes

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'