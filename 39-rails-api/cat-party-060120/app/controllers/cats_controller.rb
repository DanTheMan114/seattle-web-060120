class CatsController < ApplicationController
    def index
        cats = Cat.all  
        render json: cats
    end 

    def show
        cat = Cat.find_by_id(params[:id])
        render json: cat
    end 

    def create
        role = Role.find_or_create_by(name:params[:role])
        cat = Cat.create(
            name: params[:name],
            catchphrase: params[:catchphrase],
            imgUrl: params[:imgUrl],
            role: role
        )
        if cat.valid?
            render json: cat
        else
            render json: {errors:@cat.full_message}, status:400
        end 
    end 
end
