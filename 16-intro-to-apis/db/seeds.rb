Book.destroy_all

data = GoogleBook.get_data("JK Rowling")

data["items"].map do |book|
  Book.create(title: book["volumeInfo"]["title"], description: book["volumeInfo"]["description"])
end
# binding.pry