# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160809034031) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "translation_id", null: false
    t.integer  "user_id",        null: false
    t.text     "comment"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["translation_id"], name: "index_comments_on_translation_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "institutions", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "institutions_and_titles", force: :cascade do |t|
    t.integer "title_id",       null: false
    t.integer "institution_id", null: false
  end

  create_table "titles", force: :cascade do |t|
    t.string   "chinese_title", null: false
    t.string   "pinyin_title"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "translations", force: :cascade do |t|
    t.string   "translation", null: false
    t.integer  "title_id",    null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["title_id"], name: "index_translations_on_title_id", using: :btree
    t.index ["user_id"], name: "index_translations_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.boolean  "approved",    default: false, null: false
    t.boolean  "is_admin",    default: false, null: false
    t.string   "user_handle",                 null: false
    t.string   "user_email",                  null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

end
