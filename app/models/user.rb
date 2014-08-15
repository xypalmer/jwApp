class User
  include Mongoid::Document
  include ActiveModel::SecurePassword
  field :username, type: String
  field :email, type: String
  field :password_digest, type: String

  has_secure_password

  has_many :projects

  validates :username, presence: true
  validates_uniqueness_of :username

  validates :email, presence: true
  validates_uniqueness_of :email

  validates :password, :presence => true,
  					   :length => { :minimum => 4 },
  					   :on => :create
  validates :password_confirmation, :presence => true,
  									:length => { :minimum => 4 },
  									:on => :update


end
