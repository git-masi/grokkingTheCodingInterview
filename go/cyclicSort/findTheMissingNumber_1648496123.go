package main

import (
	"log"
)

func main() {
	x := []int{4, 0, 3, 1}
	y := []int{4, 0, 3, 1, 5, 2, 7}

	log.Print(cyclicSort(x))
	log.Print(x)
	log.Print(cyclicSort(y))
	log.Print(y)
}

func cyclicSort(s []int) int {
	i := 0

	for {
		// Break out of the loop when i is at the end of the slice
		if i >= len(s) {
			break
		}

		if s[i] == i || s[i] == len(s) {
			i++
			continue
		}

		s[s[i]], s[i] = s[i], s[s[i]]
		// ^^^ This confusing bit of code is similar to arr[idx1, idx2] = arr[idx2, idx1] in javascript
		// A more readable alternative might be
		// x := s[i]
		// y := s[x]
		// s[x] = x
		// s[i] = y
	}

	for i, v := range s {
		if i != v {
			return i
		}
	}

	return len(s)
}
