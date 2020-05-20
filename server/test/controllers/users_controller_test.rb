require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { avatar: @user.avatar, email: @user.email, first_name: @user.first_name, last_location: @user.last_location, last_name: @user.last_name, password_digest: @user.password_digest, phone: @user.phone, presence: @user.presence, slack: @user.slack, status_message: @user.status_message, team_id: @user.team_id, title: @user.title } }, as: :json
    end

    assert_response 201
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { avatar: @user.avatar, email: @user.email, first_name: @user.first_name, last_location: @user.last_location, last_name: @user.last_name, password_digest: @user.password_digest, phone: @user.phone, presence: @user.presence, slack: @user.slack, status_message: @user.status_message, team_id: @user.team_id, title: @user.title } }, as: :json
    assert_response 200
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete user_url(@user), as: :json
    end

    assert_response 204
  end
end
