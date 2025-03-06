/*
=====================================================================
🌟 Go Singleton Example 🌟
---------------------------------------------------------------------
📝 Explain: This package demonstrates the Singleton pattern in Go.

🚀 Purpose: Ensures a single instance of a map[string]string.
=====================================================================
*/

// =========================
//	IMPLEMENTATION
// =========================

package main

import (
	"fmt"
	"sync"
)

type singleton map[string]string

var (
	once     sync.Once
	instance singleton
)

// New returns the singleton instance
func New() singleton {
	once.Do(func() {
		instance = make(singleton)
	})
	return instance
}

//=========================
// 		USAGE
//=========================

func main() {
	// Get the singleton instance
	s := New()
	s["this"] = "that"

	// Get another reference to the singleton instance
	s2 := New()

	// This should print: This is that
	fmt.Println("This is", s2["this"])
}
