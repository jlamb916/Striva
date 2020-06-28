class Api::RoutesController < ApplicationController

    def show
        @route = Route.find(params[:id])
        render '/api/routes/show'
    end

    def index
        @routes = Route.all
        render '/api/routes/index'
    end

    def create
        @route = Route.new(route_params)

        if @route.save
            render 'api/routes/show'
        else
            render json: ["Invalid Route"], status: 422
        end
    end

    def destroy
        @route = Route.find(params[:id])
        if @route && @route.destroy
            render json: ["Route Removal Successful"]
        else
            render json: ["Could Not Remove Route"]
        end
    end

    private

    def route_params
        params.require(:route).permit(:route_name, :route_description, :user_id, :route_data)
    end
    
end
