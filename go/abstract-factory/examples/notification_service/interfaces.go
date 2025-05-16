package notification_service

// interface notification services
type INotificationService interface {
	sendNotif(message string) string
}
