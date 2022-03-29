package main

import (
	"log"
)

func main() {
	x := []int{3, 4, 4, 5, 5}
	y := []int{5, 4, 7, 2, 3, 5, 3}

	log.Print(findAllDuplicates(x))
	log.Print(findAllDuplicates(y))
}

func findAllDuplicates(s []int) []int {
	var v int
	r := make([]int, 0)
	i := 0

	for {
		if i >= len(s) {
			break
		}

		v = s[i]

		if i+1 == v {
			i++
			continue
		}

		if s[v-1] == v {
			r = append(r, v)
			i++
			continue
		}

		s[v-1], s[i] = s[i], s[v-1]
	}

	return r
}
