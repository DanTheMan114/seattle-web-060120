class CLI
  attr_accessor :student

  # @student = ""
  def main_menu
    puts "Welcome to Hogwarts. Please give us your name: "
    username = gets.chomp
    @student = Student.find_by(name: username)
    if @student
      puts "Thank you #{student.name}!! Let's get you sorted. "
      puts "Please enter a supply to add into your backpack: "
      puts "Please enter your supply name"
      name = gets.chomp
      puts "Please enter your supply price"
      price = gets.chomp
    else
      @student = Student.create(name: username)
      puts "Thank you #{student.name}!! Let's add stuff to your backpack" 
      # House.display_houses
      puts "Please enter a supply to add into your backpack: "
      puts "Please enter your supply name"
      name = gets.chomp
      puts "Please enter your supply price"
      price = gets.chomp
      Supply.create(price: price.to_f, name: name, student: @student) 
      puts "Your supply has been created!! "
      binding.pry
    end
  end


  def sort
    @student
  end
end