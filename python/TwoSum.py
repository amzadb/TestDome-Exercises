# Write a function that, when passed a list and target sum, returns, 
# efficiently with respect to time used, two distinct zero-based indices of any two of the numbers,
# whose sum is equal to the target sum. If there are no two numbers, the function should return None.

# For example, find_two_sum([3, 1, 5, 7, 5, 9], 10) should return a single tuple containing any of the following pairs of indices:
# 0 and 3 (or 3 and 0) as 3 + 7 = 10
# 1 and 5 (or 5 and 1) as 1 + 9 = 10
# 2 and 4 (or 4 and 2) as 5 + 5 = 10

def find_two_sum(numbers, target_sum):
    num_dict = {}
    for i, num in enumerate(numbers):
        complement = target_sum - num
        if complement in num_dict:
            return num_dict[complement], i
        num_dict[num] = i
    return None

if __name__ == "__main__":
    print(find_two_sum([3, 1, 5, 7, 5, 9], 10))