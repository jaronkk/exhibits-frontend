class ExhibitsController < ApplicationController
  def show
    respond_to do |format|
      format.json { render json: ExhibitJson.new(params[:id]) }
    end
  end
end
