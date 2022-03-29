package main

import (
	"log"
)

func main() {
	x := []int{1, 4, 4, 3, 2}
	y := []int{2, 1, 3, 3, 5, 4}

	log.Print(findDuplicate(x))
	log.Print(findDuplicate(y))
}

func findDuplicate(s []int) int {
	var v int
	i := 0

	for {
		// Prevent infinite loop over invalid input
		if i >= len(s) {
			break
		}

		v = s[i]

		if i+1 == v {
			i++
			continue
		}

		if v == s[v-1] {
			return v
		}

		s[v-1], s[i] = s[i], s[v-1]
	}

	// This should probably be an error because the question specifies
	// that we have a range of numbers from 1 to n so 0 would not be
	// in that range. I'm keeping this a 0 for simplicity.
	return 0
}
