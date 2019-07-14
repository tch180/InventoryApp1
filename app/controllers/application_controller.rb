class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken


        def index 
                @user = User.all
                render json: @user

        end


        def create
                @user = User.create!(User_params)
                render json: User.all
        end
        
end
