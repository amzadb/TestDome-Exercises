# Implement the unique_names function. 
# When passed two lists of names, it will return a list containing the names 
# that appear in either or both lists. 
# The names in the returned list should have no duplicates.

# For example, calling unique_names(['Ava', 'Emma', 'Olivia'], ['Olivia', 'Sophia', 'Emma'])
# should return a list containing Ava, Emma, Olivia, and Sophia in any order.

def unique_names(names1, names2):
    unique_names_set = set(names1 + names2)

    unique_names_list = sorted(unique_names_set)
    return unique_names_list

if __name__ == "__main__":
    names1 = ["Ava", "Emma", "Olivia"]
    names2 = ["Olivia", "Sophia", "Emma"]
    print(unique_names(names1, names2))
