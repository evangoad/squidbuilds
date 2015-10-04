require "test_helper"

module SplatScraper
  class WikiaClothingTest < Minitest::Test
    def setup
      stub_request(:get, Wikia::ClothingList::URL).to_return(body: fixture)
      @list = Wikia::ClothingList.new.list
    end

    def fixture
      @fixture ||= File.read("test/fixtures/wikia-clothing.html")
    end

    def test_body
      refute_empty @list
    end

    def test_first_name
      assert_equal "Aloha Shirt", @list.first.fetch("Name")
    end

    def test_first_primary_ability
      assert_equal "Ink Recovery Up", @list.first.fetch("Primary")
    end

    def test_last_name
      assert_equal "Zink LS", @list.last.fetch("Name")
    end

    def test_last_primary_ability
      assert_equal "Special Duration Up", @list.last.fetch("Primary")
    end
  end
end
