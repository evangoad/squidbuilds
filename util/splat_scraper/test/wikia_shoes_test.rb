require "test_helper"

module SplatScraper
  class WikiaShoesTest < Minitest::Test
    def setup
      stub_request(:get, Wikia::ShoesList::URL).to_return(body: fixture)
      @list = Wikia::ShoesList.new.list
    end

    def fixture
      @fixture ||= File.read("test/fixtures/wikia-shoes.html")
    end

    def test_body
      refute_empty @list
    end

    def test_first_name 
      assert_equal "Acerola Rain Boots", @list.first["Name"]
    end

    def test_first_primary
      assert_equal "Run Speed Up", @list.first["Primary"]
    end

    def test_last_name
      assert_equal "Zombie Hi-Horses", @list.last["Name"]
    end

    def test_last_primary
      assert_equal "Special Charge Up", @list.last["Primary"]
    end
  end
end

