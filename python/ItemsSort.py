# Given item names and prices in JSON format, 
# sort the items by price in ascending order and 
# return the sorted JSON string.

import json

def sort_by_price_ascending(json_string):
    items = json.loads(json_string)
    sorted_items = sorted(items, key=lambda x: (x["price"], x["name"]))
    result_json = json.dumps(sorted_items, indent=2)
    return result_json

# Convert the input list to a JSON-formatted string
input_json_string = json.dumps([
    {"name": "eggs", "price": 1},
    {"name": "coffee", "price": 9.99},
    {"name": "rice", "price": 4.04}
], indent=2)

# Call the function with the JSON-formatted string
output_json_string = sort_by_price_ascending(input_json_string)

print(output_json_string)
