class Api::ActivitiesController < ApplicationController

    def show
        @activity = Activity.find(params[:id])
        render '/api/activities/show'
    end

    def index
        @activity
    end

end
