namespace :db do
  desc 'batch load new titles from csv file'
  task batch_titles: :environment do
    puts "starting task"

    # change the name of the file to whatever the name of the file is, and place in the seeds folder.
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'official_titles_2016-10-28.csv'))
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')

    # add in institutions, check for any new
    csv.each do |row|
      inst1 = row["Institution 1"]
      inst2 = row["Institution 2"]
      inst3 = row["Institution 3"]

      if !!inst1
        inst1 = inst1.gsub(/\s+/, "")
        inst1 = Institution.find_by_name(inst1) || Institution.create(name: inst1)
      end

      if !!inst2
        inst2 = inst2.gsub(/\s+/, "")
        inst2 = Institution.find_by_name(inst2) || Institution.create(name: inst2, parent: inst1)
      end

      if !!inst3
        inst3 = inst3.gsub(/\s+/, "")
        inst3 = Institution.find_by_name(inst3) || Institution.create(name: inst3, parent: inst2)
      end
    end

    # add in titles, and add titles to institutions and institutions to titles
    csv.each do |row|
      p row
      t = Title.new
      t.pinyin_title = row["official_pinyin"]
      t.chinese_title = row["official_Chinese"]

      # change this to another source if the titles are from a different source
      t.source = "Hucker"
      t.save!
      if row["official_translation"]
        trans = Translation.new(translation_text: row["official_translation"],
                            user_id: 2,
                            title_id: t.id,
                            approved: true)
        trans.save!
        trans.comment_added_at = trans.created_at
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
    puts "completed task"
  end
end
