require_relative '../config/environment'

system("clear")
# binding.pry
app = CLI.new
app.main_menu
app.display_houses
app.sort
