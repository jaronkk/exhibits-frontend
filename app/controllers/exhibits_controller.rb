class ExhibitsController < ApplicationController
  def index
    @exhibits_url = exhibit_api_base
  end

  def show
    @exhibit_url =  params[:id]
  end

  private

    def exhibit_api_base
      Rails.configuration.settings.beehive_url + "/api/v1/exhibits"
    end
end
