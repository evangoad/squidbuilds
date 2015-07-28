module SplatScraper::Wikia::ArticleTable
  def extract_table(table_node)
    rows   = table_node.xpath("tr[td]")
    header = table_node.xpath("tr[th]").xpath("//th/text()").map {|n| n.to_s.strip}
    rows.map do |row|
      obj = {}
      header.each_with_index do |h, i|
        obj[h] = row.xpath("td")[i].text.strip 
      end
      obj
    end
  end
end
