class ShowcasesController < ApplicationController
  before_action :set_exhibit_url

  def show
    @showcase_url =  params[:id]
  end

  private

    def set_exhibit_url
      @exhibit_url = params[:exhibit_id]
    end
end
