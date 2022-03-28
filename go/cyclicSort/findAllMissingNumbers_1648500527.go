/*
I have to be careful not to go out of range when using index lookups
Go does not return nil/undefined if you attempt to read an index out
of bounds, isntead it panics
*/
package main

import (
	"log"
)

func main() {
	x := []int{2, 3, 1, 8, 2, 3, 5, 1}

	cyclicSort(x)

	log.Print(x)

	y := make([]int, 0)

	for i, v := range x {
		if i != v-1 {
			y = append(y, i)
		}
	}

	log.Print(y)
}

func cyclicSort(s []int) {
	i := 0
	var v int

	for {
		if i == len(s) {
			break;
		}

		v = s[i]

		if v - 1 == i || v == s[v - 1] {
			i++
			continue
		}

		s[v - 1], s[i] = s[i], s[v - 1]
	}
}
