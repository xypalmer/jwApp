class User
  include Mongoid::Document
  include ActiveModel::SecurePassword
  field :username, type: String
  field :email, type: String
  field :password_digest, type: String

  has_secure_password

  has_many :projects
end
