# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

first_user = User.new(is_admin: true, approved: true, user_handle: "Claire", email: "clwoods@uci.edu", password: "orange7A")
first_user.save!

csv_text = File.read(Rails.root.join('lib', 'seeds', 'official_titles_examples.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')

# add in institutions, check for any new
csv.each do |row|

  inst1 = row["Institution 1"]
  inst2 = row["Institution 2"]
  inst3 = row["Institution 3"]

  inst1 = Institution.find_by_name(inst1) || Institution.create(name: inst1)
  inst2 = Institution.find_by_name(inst2) || Institution.create(name: inst2, parent: inst1)

  if inst3
    inst3 = Institution.find_by_name(inst3) || Institution.create(name: inst3, parent: inst2)
  end

end

# add in titles, and add titles to institutions and institutions to titles
csv.each do |row|
  t = Title.new
  t.pinyin_title = row["official_pinyin"]
  t.chinese_title = row["official_Chinese"]
  t.save!
  if row["official_translation"]
    trans = Translation.new(translation: row["official_translation"],
                        user_id: 1,
                        title_id: t.id)
    trans.save!
  end
  institution_ids = [
    row["Institution 1"], row["Institution 2"], row["Institution 3"]
  ]
  institution_ids.each do |inst|
    institution = Institution.find_by_name(inst)
    if institution
      relation = InstitutionsAndTitle.new(
        institution_id: institution.id,
        title_id: t.id
      )
      relation.save!
    end
  end
end
