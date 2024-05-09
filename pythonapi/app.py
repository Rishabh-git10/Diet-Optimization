from flask import Flask, request, jsonify
from flask_cors import CORS

from pulp import LpProblem, LpVariable, LpMinimize, LpStatus, value

app = Flask(__name__)
cors = CORS(app)

@app.route('/optimize', methods=['POST'])
def optimize_diet():
    # Get the request data
    data = request.get_json()

    # Create the linear programming problem
    problem = LpProblem("Diet Optimization Problem", LpMinimize)

    # Define the decision variables
    variables = data['variables']
    decision_vars = {}
    for var in variables:
        decision_vars[var] = LpVariable(var, lowBound=0)

    # Define the objective function
    objective_coeffs = data['objective_coeffs']
    problem += sum(objective_coeffs[i] * decision_vars[variables[i]] for i in range(len(variables))), "Cost"

    # Add the constraints
    constraints = data['constraints']
    for constraint in constraints:
        constraint_coeffs = constraint['coefficients']
        rhs = constraint['rhs']
        constraint_type = constraint['type']

        if constraint_type == 'eq':
            problem += sum(constraint_coeffs[i] * decision_vars[variables[i]] for i in range(len(variables))) == rhs
        elif constraint_type == 'le':
            problem += sum(constraint_coeffs[i] * decision_vars[variables[i]] for i in range(len(variables))) <= rhs
        elif constraint_type == 'ge':
            problem += sum(constraint_coeffs[i] * decision_vars[variables[i]] for i in range(len(variables))) >= rhs

    # Solve the problem
    status = problem.solve()

    if status == 1:
        # Build the result dictionary
        result = {
            'status': LpStatus[status],
            'solution': {var.name: value(var) for var in problem.variables()},
            'optimal_cost': value(problem.objective)
        }
    else:
        result = {'status': LpStatus[status]}

    return jsonify(result)

if __name__ == '__main__':
    app.run()