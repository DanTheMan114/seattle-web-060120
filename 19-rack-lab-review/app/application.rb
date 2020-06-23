class Application
  @@items = ["Apples","Carrots","Pears"]
  @@cart = [ ]

  def call(env)
    request = Rack::Request.new(env)
    response = Rack::Response.new
    # binding.pry
    # headers = {"Content-Type" => "text/html"}
    # body = []
    # status = 200
    # binding.pry
    if request.path_info == "/"
      response.write("Root page")
    elsif request.path_info == "/cart"
      response.write(@@cart)
    elsif request.path_info == "/add"
      # binding.pry
      request.params
      response.write("add Page")
    end
    response.finish
    # [status, headers, body]
  end
end
