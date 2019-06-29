class Api::ItemsController < ApplicationController
    
    def index 
        @items = Item.all 
        render json: @items
    end



    def create 
       @items = Item.create!(items_params)
        render json: Item.all
    # end

    end


    def show 
        @items = Item.find(params[:id])
        render json:@items
    end

    def update 
        @items = Item.find(params[:id])
        @items.update!(items_params)
        render json: @items
    end

    def destroy 
        @items = Item.find(params[:item_id]).delete
        render status: :ok
    end

    private 
     def items_params
        params.require(:items).permit(:name, :sku, :price, :available, :description, :photo, :id )
     end











end
