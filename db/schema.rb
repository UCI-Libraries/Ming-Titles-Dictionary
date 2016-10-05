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

ActiveRecord::Schema.define(version: 20161005053952) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "translation_id", null: false
    t.integer  "user_id",        null: false
    t.text     "comment_text"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["translation_id"], name: "index_comments_on_translation_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "institutions", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "ancestry"
    t.index ["ancestry"], name: "index_institutions_on_ancestry", using: :btree
  end

  create_table "institutions_and_titles", force: :cascade do |t|
    t.integer "title_id",       null: false
    t.integer "institution_id", null: false
  end

  create_table "titles", force: :cascade do |t|
    t.string   "chinese_title",                 null: false
    t.string   "pinyin_title"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.integer  "translation_count", default: 0
  end

  create_table "translations", force: :cascade do |t|
    t.string   "translation_text",                   null: false
    t.integer  "title_id",                           null: false
    t.integer  "user_id",                            null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.boolean  "approved",           default: false
    t.text     "explanation"
    t.text     "additional_comment"
    t.text     "scholars"
    t.datetime "comment_added_at"
    t.boolean  "flagged",            default: false
    t.boolean  "flag",               default: false
    t.index ["title_id"], name: "index_translations_on_title_id", using: :btree
    t.index ["user_id"], name: "index_translations_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.boolean  "approved",               default: false, null: false
    t.boolean  "is_admin",               default: false, null: false
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.text     "institution"
    t.text     "country"
    t.text     "fname"
    t.text     "lname"
    t.text     "research"
    t.index ["approved"], name: "index_users_on_approved", using: :btree
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
