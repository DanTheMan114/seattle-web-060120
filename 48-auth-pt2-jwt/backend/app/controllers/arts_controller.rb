class ArtsController < ApplicationController
    before_action :authorized, only: [:create]
    def create
        if Artist.find_by(name:arts_params[:artist])
            @art = Art.create(title:arts_params[:title], image:arts_params[:image], artist:Artist.find_by(name:arts_params[:artist]), user:@user)
        else 
            Artist.create(name:arts_params[:artist])
            @art = Art.create(title:arts_params[:title], image:arts_params[:image], artist:Artist.find_by(name:arts_params[:artist]), user:@user)
        end 
        render json: @art
    end 

    private 

    def arts_params
        params.permit(:title, :image,:artist)
    end 
end
