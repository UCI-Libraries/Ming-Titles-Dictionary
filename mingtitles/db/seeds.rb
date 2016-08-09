# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'Titles-Court-Ladies.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')

# add in institutions, check for any new
csv.each do |row|
  institution_ids = [
    row["Institution 1"], row["Institution 2"], row["Institution 3"]
  ]
  institution_ids.each do |inst|
    if Institution.find_by_name(inst) == nil
      Institution.create(name: inst)
    end
  end

end

# add in titles, and add titles to institutions and institutions to titles
csv.each do |row|
  t = Title.new
  t.pinyin_title = row["official_pinyin"]
  t.chinese_title = row["official_Chinese"]
  if row["official_translation"]
    Translation.create(translation: row["official_translation"],
                        user_id: 1,
                        title_id: t.id)
  end
  institution_ids = [
    row["Institution 1"], row["Institution 2"], row["Institution 3"]
  ]
  institution_ids.each do |inst|
    institution = Institution.find_by_name(inst)
    t.institutions << institution
    institution << t
  end
  t.save!
end
