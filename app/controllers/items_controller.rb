class ItemsController < ApplicationController
  before_action :set_exhibit_url

  def index
  end

  def show
    @item_url =  params[:id]
  end

  private

    def set_exhibit_url
      @exhibit_url = params[:exhibit_id]
    end
end
