class Api::UsersController < ApplicationController

    before_action :require_login, except: [:create]
    skip_before_action :verify_authenticity_token
    
    def create
        debugger
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
