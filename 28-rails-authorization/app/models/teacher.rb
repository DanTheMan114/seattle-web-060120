class Teacher < ApplicationRecord
  has_secure_password
  # def password=(password)
  #   #rather store the OG password
  #   # encrypt it and store that version
  #   self.password = Digest::SHA256.base64digest(password)
  # end

  # def validate(password)
  #   self.password == Digest::SHA256.base64digest(password)
  # end
end
