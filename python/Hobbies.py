# Given the list of people and their hobbies, 
# find all the people who like a particular hobby.

def find_all_hobbyists(hobby, hobbies):
    result = []
    
    for name, hobbies_list in hobbies.items():
        if hobby in hobbies_list:
            result.append(name)
            
    return result
    
hobbies = {
    "Steve": ['Fashion', 'Piano', 'Readine'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']   
}

print(find_all_hobbyists('Yoga', hobbies)) 