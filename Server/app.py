from pulp import LpProblem, LpVariable, LpMinimize

# Create the linear programming problem
problem = LpProblem("Diet Optimization Problem", LpMinimize)

# Define the decision variables
x1 = LpVariable("broccoli", lowBound=0)
x2 = LpVariable("asparagus", lowBound=0)
x3 = LpVariable("potatoes", lowBound=0)
x4 = LpVariable("chicken", lowBound=0)
x5 = LpVariable("fish", lowBound=0)

# Define the objective function
problem += 1.00 *80* x1 + 1.50 * 80*x2 + 1.75 *80* x3 + 2.75 *80* x4 + 3.50 * 80*x5, "Cost"

# Add the constraints
problem += 55 * x1 + 20 * x2 + 130 * x3 + 335 * x4 + 400 * x5 >= 2000, "Calories"
problem += 3 * x1 + 2 * x2 + 4 * x3 + 30 * x4 + 40 * x5 >= 50, "Protein"
problem += 0.5 * x1 + 0.2 * x2 + 0.2 * x3 + 8 * x4 + 6 * x5 >= 40, "Fat"
problem += 320 * x1 + 270 * x2 + 1600 * x3 + 450 * x4 + 500 * x5 >= 3500, "Potassium"

# Solve the problem
problem.solve()

# Print the optimal solution
print("Optimal Solution:")
for var in problem.variables():
    print(var.name, "=", var.varValue)

# Print the optimal cost
print("Optimal Cost =", problem.objective.value())