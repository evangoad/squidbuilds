require "test_helper"

module SplatScraper
  module WikiaTest
    def setup
      stub_request(:get, url).to_return(body: fixture)

      @wikia = Wikia.new(url: url)
    end

    def test_body
      assert_equal fixture, @wikia.body
    end

    def test_parsed_body
      assert_kind_of Nokogiri::HTML::Document, @wikia.parsed_body
    end

    def test_weapon_name
      assert_equal weapon_name, @wikia.weapon_name
    end

    def test_sub_weapon
      assert_equal sub_weapon, @wikia.sub_weapon
    end

    def test_special_weapon
      assert_equal special_weapon, @wikia.special_weapon
    end
  end

  class WikiaSplatterShotJrTest < Minitest::Test
    include WikiaTest

    def url
      "http://splatoon.wikia.com/wiki/Custom_Splattershot_Jr."
    end

    def fixture
      File.read("test/fixtures/wikia-ssj.html");
    end

    def weapon_name
      "Custom Splattershot Jr."
    end

    def type
      "shooter"
    end

    def sub_weapon
      "Disruptor"
    end
    
    def special_weapon
      "Echolocator"
    end
  end

  class WikiaEliter3kTest < Minitest::Test
    include WikiaTest

    def url
      "http://splatoon.wikia.com/wiki/E-liter_3K"
    end

    def fixture
      File.read("test/fixtures/wikia-el3k.html");
    end

    def weapon_name
      "E-Liter 3K"
    end

    def sub_weapon
      "Burst Bomb"
    end

    def special_weapon
      "Echolocator"
    end

    def type
      "charger"
    end
  end

  class WikiaRapidBlasterDecoTest < Minitest::Test
    include WikiaTest

    def url
      "http://splatoon.wikia.com/wiki/Rapid_Blaster_Deco"
    end

    def fixture
      File.read("test/fixtures/wikia-rbd.html");
    end

    def weapon_name
      "Rapid Blaster Deco"
    end

    def sub_weapon
      "Suction Bomb"
    end

    def special_weapon
      "Bomb Rush"
    end

    def type
      "shooter"
    end
  end
end
