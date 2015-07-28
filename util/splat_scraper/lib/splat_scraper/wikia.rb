require "httparty"
require "nokogiri"

module SplatScraper::Wikia
  class Weapon
    attr_reader :url

    def initialize(url:)
      @url = url
    end

    def to_hash
      {
        name: weapon_name,
        sub: {
          name: sub_weapon
        },
        special: {
          name: special_weapon
        }
      }
    end

    def weapon_name
      parsed_body
        .xpath('//*[@id="WikiaPageHeader"]/div/div[1]/h1')
        .text
    end

    def sub_weapon
      parsed_body.xpath('//*[@id="mw-content-text"]/table/tr').at_css("tr:contains('Sub Weapon') a").text
    end

    def special_weapon
      parsed_body.xpath('//*[@id="mw-content-text"]/table/tr').at_css("tr:contains('Special Weapon') a").text
    end

    def parsed_body
      @parsed_body ||= Nokogiri::HTML(body)
    end

    def body
      response.body
    end

    def response
      @response ||= HTTParty.get(url)
    end
  end
end  
