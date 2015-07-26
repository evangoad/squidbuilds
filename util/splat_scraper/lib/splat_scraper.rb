require "splat_scraper/version"
require "splat_scraper/wikia"
require "fiber"

module SplatScraper
  def self.wikia
    Wikia::WeaponList.new.list.map do |url| 
      Fiber.new do
        Wikia.new(url: "http://splatoon.wikia.com#{url}").to_hash
      end
    end.map(&:resume).to_json
  end
end

class SplatScraper::Wikia::WeaponList
  def list
    parsed_body
      .xpath('//*[@id="mw-content-text"]/ul/li/a')
      .map { |n| n.attribute("href").value }
  end

  def parsed_body
    @parsed_body ||= Nokogiri::HTML(body)
  end

  def body
    response.body
  end

  def response
    @response ||= HTTParty.get("http://splatoon.wikia.com/wiki/Category:Main_Weapons")
  end
end
