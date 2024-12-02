# A university of office admissions keeps a track of student majors.
# Each student can hava a single major.

students = [
    ("Allen Anderson", "Computer Science"),
    ("Edgar Einstein", "Engineering"),
    ("Farah Finn", "Fine Arts"),
]

def add_new_student(students, name, major):
    students.append((name, major))

def update_student(students, index, name, major):
    students[index] = (name, major)

def find_student_by_name(students, name):
    return [student for student in students if name in student[0]]

def get_all_majors(students):
    return [student[1] for student in students]

# Select all the acceptable options below.

# Option A:
add_new_student(students, "Peter Parker", "Fine Arts")
print(get_all_majors(students))
# The above will return a list which contains duplicate "Fine Arts" major.

# Option B:
print(find_student_by_name(students, 'in'))
# The above will return a list of 2 tuples.

# Option C:
print(get_all_majors(students))
# The above will return a list that contains tuples.

# Option D:
# The add_new_student function will add a new student in the last place in the list.

# Answers: A, B, D
