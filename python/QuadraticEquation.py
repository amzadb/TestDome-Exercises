# Implement the function to find the roots of a quadratic equation.

def find_roots(a, b, c):
    discriminant = b**2 - 4*a*c
    x1 = (-b + (discriminant)**0.5) / (2*a)
    x2 = (-b - (discriminant)**0.5) / (2*a)
    return x1, x2

print(find_roots(2, 10, 8))