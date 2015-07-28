require "test_helper"

module SplatScraper
  class WikiaHeadgearTest < Minitest::Test
    def setup
      stub_request(:get, Wikia::HeadgearList::URL).to_return(body: fixture)
      @list = Wikia::HeadgearList.new.list
    end

    def fixture
      @fixture ||= File.read("test/fixtures/wikia-headgear.html")
    end

    def test_body
      refute_empty @list
    end

    def test_first_name 
      assert_equal "Armor Helmet Replica", @list.first["Name"]
    end

    def test_first_primary
      assert_equal "Tenacity", @list.first["Primary"]
    end

    def test_last_name
      assert_equal "18K Aviators", @list.last["Name"]
    end

    def test_last_primary
      assert_equal "Last-Ditch Effort", @list.last["Primary"]
    end
  end
end

