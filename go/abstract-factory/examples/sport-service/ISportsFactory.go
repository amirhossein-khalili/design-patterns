package sport

type IShirt interface {
	logo() string
	size() int
}

type ISportFactory interface {
	makeShoe() IShoe
	makeShirt() IShirt
}
