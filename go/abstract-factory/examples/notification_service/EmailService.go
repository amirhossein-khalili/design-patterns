package notification_service

import "fmt"

type EmailService struct{}

type EMAILNotificationFactory struct{}

func (f *EMAILNotificationFactory) CreateNotificationService() (INotificationService, error) {
	return &EmailService{}, nil
}

func (*EmailService) sendNotif(message string) string {
	fmt.Println("EMAIL:", message)
	return message
}
