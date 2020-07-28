class Cat < ApplicationRecord
  belongs_to :role

  def role_name
    self.role.name
  end 
end
