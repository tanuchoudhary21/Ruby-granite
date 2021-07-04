require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  def test_should_list_all_users
    get users_url
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json['users'].length, User.count
  end

  def test_should_signup_user_with_valid_credentials
    post users_url, params: { user: { name: 'Sam Smith',
                                      email: 'sam@example.com',
                                      password: 'welcome',
                                      password_confirmation: 'welcome' } }
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json['notice'], t('successfully_created', entity: 'User')
  end

  def test_shouldnt_signup_user_with_invalid_credentials
    post users_url, params: { user: { name: 'Sam Smith',
    email: 'sam@example.com',
    password: 'welcome',
    password_confirmation: 'not matching confirmation' } }

assert_response 422
assert_equal "Password confirmation doesn't match Password", response.parsed_body['notice']
  end
end