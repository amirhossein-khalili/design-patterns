package notification_service

import "fmt"

type SmsService struct{}

type SMSNotificationFactory struct{}

func (f *SMSNotificationFactory) CreateNotificationService() (INotificationService, error) {
	return &SmsService{}, nil
}

func (*SmsService) sendNotif(message string) string {
	fmt.Println("SMS:", message)
	return message
}
