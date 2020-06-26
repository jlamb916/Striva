class Api::SessionsController < ApplicationController

    def create
        debugger
        @user = User.find_by_credentials(
            params[:user][:username], 
            params[:user][:password]
        )
        if @user
            login(@user)
            render "/api/users/show"
        else
            render json: ["Invalid Username or Password combination"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "/api/users/show"
        else
            render json: ["Can't logout"], status: 404
        end
    end

end
