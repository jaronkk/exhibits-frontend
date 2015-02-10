class ExhibitsController < ApplicationController
  def index
    @exhibits_url = Rails.configuration.settings.beehive_url + "/api/v1/exhibits"
  end

  def show
    @exhibit_url = Rails.configuration.settings.beehive_url + "/api/v1/exhibits/" + params[:id]
  end
end
