class ApplicationController < ActionController::Base
  inertia_share do
    {
      current_user: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/150',
        created_at: Time.now,
        updated_at: Time.now,
        is_admin: true,
        is_active: true,
        is_verified: true,
        is_premium: true,
        is_trial: false,
        is_subscribed: true,
        is_cancelled: false,
      },
      notifications: [
        {
          id: 1,
          title: 'New Message',
          body: 'You have a new message',
        },
        {
          id: 2,
          title: 'New Notification',
          body: 'You have a new notification',
        },
      ],
    }
  end
end
