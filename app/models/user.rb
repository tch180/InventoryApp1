# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :trackable
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable,  :validatable, 
         :omniauthable
  include DeviseTokenAuth::Concerns::User
end
