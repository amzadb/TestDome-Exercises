#   Counts the number of elements in a sorted list that are less than a given value.
#   Args:
#     sorted_list: A sorted list of unique integers.
#     less_than: The value to compare the elements of the list to.
#   Returns:
#     The number of elements in the list that are less than less_than.

def count_numbers(sorted_list, less_than):
    s, e = 0, len(sorted_list)
    if sorted_list[0] >= less_than:
        return s
    if sorted_list[-1] < less_than:
        return e

    while True:
        if s >= e:
            return 0

        if s < 0 or e > len(sorted_list):
            return 0

        pivot = (s + e) // 2
        if sorted_list[pivot] < less_than:
            if sorted_list[pivot + 1] >= less_than:
                return pivot + 1
            else:
                s = pivot
        elif sorted_list[pivot] >= less_than:
            e = pivot

if __name__ == "__main__":
    sorted_list = [1, 3, 5, 7]
    print(count_numbers(sorted_list, 4)) # should print 2