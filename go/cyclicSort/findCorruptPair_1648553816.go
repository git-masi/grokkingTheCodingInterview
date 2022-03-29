/*
On my initial attempt to solve the problem I returned too early from the function.
I had written code that looks like this:
```
if s[v-1] == v {
	r = append(r, v, i+1)
	break
}
```
This probably didn't happen because I didn't run through enough test cases. Or I
got a false sense of security from the test cases that I did run. False positives
might be the way to describe it.
*/
package main

import (
	"log"
)

func main() {
	x := []int{3, 1, 2, 5, 2}
	y := []int{3, 1, 2, 3, 6, 4}

	log.Print(findCorruptPair(x))
	log.Print(findCorruptPair(y))
}

func findCorruptPair(s []int) []int {
	var v int
	r := make([]int, 0)
	i := 0

	for {
		if i >= len(s) {
			break
		}

		v = s[i]

		if i+1 == v || s[v-1] == v {
			i++
			continue
		}

		s[v-1], s[i] = s[i], s[v-1]
	}

	i = 0

	for {
		if i >= len(s) {
			break
		}

		v = s[i]

		if i+1 != v {
			r = append(r, v, i+1)
			break
		}

		i++
	}

	return r
}
