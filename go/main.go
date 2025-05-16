package main

import (
	"design_patterns/go/abstract-factory/examples/notification_service"
)

func main() {
	notifService := notification_service.NotificationCreator("email")
	notifService.sendNotif("hello world")
}
