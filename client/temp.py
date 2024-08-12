import json

# Input data as a multiline string
data = """
bill_amount
: 
5660
comment
: 
""
customer_id
: 
""
customer_name
: 
""
discount_amount
: 
0
order_items
: 
Array(3)
0
: 
item_name
: 
"Murgi Paneer"
price
: 
5000
quantity
: 
1
special_notes
: 
""
[[Prototype]]
: 
Object
1
: 
item_name
: 
"Bhindi"
price
: 
160
quantity
: 
2
special_notes
: 
""
[[Prototype]]
: 
Object
2
: 
item_name
: 
"bhalooo"
price
: 
500
quantity
: 
1
special_notes
: 
""
[[Prototype]]
: 
Object
length
: 
3
[[Prototype]]
: 
Array(0)
order_status
: 
""
order_type
: 
"Dine In"
table_area
: 
"A.C."
table_no
: 
"1"
total_amount
: 
5660
waiter
: 
""
"""

# Function to convert the data into JSON format
def convert_to_json(data):
    lines = data.strip().split('\n')
    json_dict = {}
    key = None
    
    for line in lines:
        line = line.strip()
        if line.endswith(':'):
            key = line[:-1].strip()
        else:
            value = line.strip()
            if value.isdigit():
                value = int(value)
            elif value in ['""', "''"]:
                value = ""
            json_dict[key] = value

    return json.dumps(json_dict, indent=4)

# Convert and print the result
json_output = convert_to_json(data)
print(json_output)
