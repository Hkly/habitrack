# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  email           :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  attr_reader :password

  before_validation :ensure_session_token

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :habits, dependent: :destroy
  has_many :habit_days, through: :habits, source: :habit_days, dependent: :destroy

  has_many :created_friendships, foreign_key: :init_friend_id, class_name: "Friendship", dependent: :destroy
  has_many :recieved_friendships, foreign_key: :recp_friend_id, class_name: "Friendship", dependent: :destroy

  has_many :friends, through: :created_friendships, source: :recp_user, dependent: :destroy


  def gravatar
    gravatar_id = Digest::MD5::hexdigest(self.email.downcase)
    gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}"
  end

  def currentTotal
    total_units = 0
    self.habits.each do |habit|
      total_units += habit.weight
    end
    # let's do this later
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    if user.nil? || !user.is_password?(password)
      return nil
    end
    return user
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    unless password.nil?
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
