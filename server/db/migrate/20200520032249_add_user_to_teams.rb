class AddUserToTeams < ActiveRecord::Migration[6.0]
  def change
    # add_reference :teams, :user, null: false, foreign_key: true
    add_column :teams, :manager_id, :integer
  end
end
