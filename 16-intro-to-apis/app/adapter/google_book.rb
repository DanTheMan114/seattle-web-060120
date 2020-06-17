# response = RestClient.get(url)
class GoogleBook
  def self.get_data(author)
    url = "https://www.googleapis.com/books/v1/volumes?q=#{author}"
    res = RestClient.get(url)
    data = res.body
    json_converted = JSON.parse(data)
  end
end