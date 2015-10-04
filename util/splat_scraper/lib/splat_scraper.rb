require "splat_scraper/version"
require "splat_scraper/wikia"
require "splat_scraper/wikia/article_table"
require "fiber"

module SplatScraper
  def self.wikia_weapons
    Wikia::WeaponList.new.list.map do |url| 
      Fiber.new do
        Wikia::Weapon.new(url: "http://splatoon.wikia.com#{url}").to_hash
      end
    end.map(&:resume).to_json
  end
  def self.wikia_clothing
    Wikia::ClothingList.new.list.to_json
  end
  def self.wikia_shoes
    Wikia::ShoesList.new.list.to_json
  end
  def self.wikia_headgear
    Wikia::HeadgearList.new.list.to_json
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

module SplatScraper::Wikia
  class ClothingList
    URL = "http://splatoon.wikia.com/wiki/Category:Clothing" 
    include ArticleTable

    def list
      extract_table(parsed_body.at_css('.article-table'))
    end

    def parsed_body
      @parsed_body ||= Nokogiri::HTML(body)
    end

    def body
      response.body
    end

    def response 
      @response ||= HTTParty.get(URL)
    end
  end

  class HeadgearList
    include ArticleTable
    URL = "http://splatoon.wikia.com/wiki/Category:Headgears"

    def list
      extract_table(parsed_body.at_css('.article-table'))
    end

    def parsed_body
      @parsed_body ||= Nokogiri::HTML(body)
    end

    def body
      response.body
    end

    def response 
      @response ||= HTTParty.get(URL)
    end
  end

  class ShoesList
    include ArticleTable
    URL = "http://splatoon.wikia.com/wiki/Category:Shoes"

    def list
      extract_table(parsed_body.at_css('.article-table'))
    end

    def parsed_body
      @parsed_body ||= Nokogiri::HTML(body)
    end

    def body
      response.body
    end

    def response 
      @response ||= HTTParty.get(URL)
    end
  end
end

