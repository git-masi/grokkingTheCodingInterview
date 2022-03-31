/*
This was quite hard, it took me about an hour to create a working solution.

My first attempt, not seen in code but written on paper, attempted to sort
the slice by putting negative numbers at the end in any order and positive
numbers at the start in order. This had problems because of the need to
re-sort numbers that had already been seen.

I failed to grasp that even though there was no particular range that the
unsorted numbers were in the final result still needed to be in the order
[1, 2, 3...] so we could use that to our advantage. If the number is < 1
or greater than the length of the slice then we don't attempt to sort it
but if it is >= 1 and <= len of slice then we place it at index = num - 1
we can then loop through and find the first index != index + 1.

Once I grasped this I then just had an issue with making sure I wasn't in
an infinite loop. I think part of this is just unfamiliarity with Go syntax.
*/
package main

import (
	"log"
)

func main() {
	log.Print(smallestMissing([]int{-3, 1, 5, 4, 2}))
	log.Print(smallestMissing([]int{3, -2, 0, 1, 2}))
	log.Print(smallestMissing([]int{-1, 2, -2, 3, 4, -4, -3, 0}))
}

func smallestMissing(s []int) int {
	i := 0

	for {
		if i >= len(s) {
			break
		}

		v := s[i]

		if v <= 0 || v > len(s) || s[i]-1 == i {
			i++
			continue
		}

		s[v-1], s[i] = s[i], s[v-1]
	}

	i = 0

	if s[i] != 1 {
		return 1
	}

	for {
		if i+1 == len(s) || s[i]+1 != s[i+1] {
			return s[i] + 1
		}

		i++
	}
}
