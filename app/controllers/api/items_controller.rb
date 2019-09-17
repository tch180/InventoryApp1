class Api::ItemsController < ApplicationController

    # before_action :authenticate_user!


    ##### WORKS DONT TOUCH !!!!!

    def index 
        @items = Item.all 
        render json: @items
        puts "Index hit"
    end



  


    # def show 
    #     @items = Item.find(params[:id])
    #     render json:@items
    # end


    def update 
        @items = Item.find(params[:item_id])
        @items.update!(items_params)
        render json: @items
    end

    ##### WORKS DONT TOUCH !!!!!!!!!!
    def destroy 
        @items = Item.find(params[:id]).delete
        render status: :ok
        puts "destroy hit"
    end

    ## apparently started working at somepoint, was not working on 6/30 but is working now
    def create 
        @items = Item.create!(items_params)
         render json: Item.all
     # end
     puts "Create hit"
     end

    private 
     def items_params
        params.require(:items).permit(:name, :price, :sku, :description, :photo, :available)
     end


#








end
