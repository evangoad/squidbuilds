require 'test_helper'

class SplatScraperTest < Minitest::Test
  def test_that_it_has_a_version_number
    refute_nil ::SplatScraper::VERSION
  end
end
