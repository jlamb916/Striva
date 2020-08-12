class Api::ActivitiesController < ApplicationController

    def show
        @activity = Activity.find(params[:id])
        render '/api/activities/show'
    end

    def index
        @activities = Activity.all
        # render '/api/activities/index'
    end

    def create
        @activity = Activity.new(activity_params)
        if @activity.save
            @activities = Activity.all
            render 'api/activities/index'
        else
            render json: ["Activity is invalid or fields are missing"], status: 422
        end
    end

    def destroy
        @activity = Activity.find(params[:id])
        if @activity
            @activity.destroy
        else
            render json:["This activity does not exist"], status: 422
        end
    end

     def update
        @activity = current_user.activities.find(params[:id])
        if @activity.update_attributes(activity_params)
            @activities = Activity.all
            render 'api/activities/index'
        else
            render json: ["Activity is invalid or fields are missing"], status: 422
        end
    end


    private

    def activity_params
        params.require(:activity).permit(:title, :sport, :duration, :distance, :elevation, :description, :user_id, :route_id)
    end

end
