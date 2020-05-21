class AddMoreUserFields < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :pronouns, :string
    add_column :users, :preferred_contact_method, :string
    add_column :users, :average_response_time_minutes, :integer
  end
end
