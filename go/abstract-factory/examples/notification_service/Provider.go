package notification_service

import "fmt"

// NotificationCreator creates a notification service based on the provided type.
func NotificationCreator(notificationType string) (INotificationService, error) {
	switch notificationType {
	case "email":
		factory := &EMAILNotificationFactory{}
		return factory.CreateNotificationService()
	case "sms":
		factory := &SMSNotificationFactory{}
		return factory.CreateNotificationService()
	default:
		return nil, fmt.Errorf("unsupported notification type: %s", notificationType)
	}
}
