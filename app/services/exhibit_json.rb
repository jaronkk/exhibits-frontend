class ExhibitJson
  attr_reader :exhibit_id

  def initialize(exhibit_id)
    @exhibit_id = exhibit_id
  end

  def to_hash(options = {})
    exhibit_json
  end

  def to_json(options = {})
    to_hash(options).to_json
  end

  def exhibit_json
    get_json(exhibit_json_url)
  end

  private

    def last_response
      @last_response
    end

    def get_json(url)
      if response = get_request(url)
        response.body.with_indifferent_access
      else
        nil
      end
    end

    def get_request(url)
      @last_response = connection.get(url)
      if @last_response.success?
        @last_response
      else
        false
      end
    end

    def connection
      @connection ||= Faraday.new(api_url) do |f|
        f.request :multipart
        f.request :url_encoded
        f.adapter :net_http
        f.response :json, :content_type => 'application/json'
      end
    end

    def exhibit_json_url
      "/exhibits/#{exhibit_id}.json"
    end

    def api_url
      Rails.configuration.settings.beehive_url
    end
end
