def count_numbers(sorted_list, less_than):

    left, right = 0, len(sorted_list)
    while left < right:
        mid = left + (right - left) // 2
        if sorted_list[mid] < less_than:
            left = mid + 1
        else:
            right = mid

    
    return left

if __name__ == "__main__":
    sorted_list = [1, 3, 5, 7]
    print(count_numbers(sorted_list, 5))  
