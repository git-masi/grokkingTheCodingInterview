package main

import (
	"log"
)

func main() {
	x := []int{3, 1, 5, 4, 2}

	cyclicSort(x)

	log.Print(x)
}

// This isn't really a cyclic sort but it shows how in the case where
// the numbers represent a specific range without repetition we really
// can just overwrite the unsorted values to be the values in the range
func cyclicSort(s []int) {
	for i, v := range s {
		log.Print(i, v)
		s[i] = i + 1
	}
}
