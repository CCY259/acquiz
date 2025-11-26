// Question Set
const questions = [
  {
    question_ac: "Which of the following is sufficient to prove that the limit $\\lim_{(x,y) \\to (0,0)} f(x,y)$ does not exist?",
    options: {
      A: "Showing that the limit equals 0 along the $x$-axis ($y=0$) and equals 0 along the $y$-axis ($x=0$).",
      B: "Showing that $f(0,0)$ is undefined.",
      C: "Showing that the limit equals 1 along the line $y=x$ and equals 1 along the parabola $y=x^2$.",
      D: "Showing that the limit equals 5 along the $x$-axis and equals 7 along the line $y=x$."
    },
    answer: "D"
  },
  {
    question_ac: "You want to calculate $\\lim_{(x,y)\\to(0,0)} f(x,y)$. You find that the limit along the path $y=0$ is $L$, and the limit along the path $y=x^2$ is also $L$. What can you conclude?",
    options: {
      A: "The limit exists and is equal to $L$.",
      B: "The limit exists, but might not be $L$.",
      C: "The limit does not exist.",
      D: "No conclusion."
    },
    answer: "D"
  },
  {
    question_ac: "When evaluating a limit such as $\\lim_{(x,y)\\to(0,0)} \\frac{x^3+y^3}{x^2+y^2}$, one strategy is converting the variables using polar coordinates $x = r\\cos \\theta$ and $y = r\\sin \\theta$. To prove the limit exists, the resulting expression in terms of $r$ and $\\theta$ must go to zero .........",
    options: {
      A: "regardless of the value of $\\theta$.",
      B: "for a specific value of $\\theta$.",
      C: "only when $\\theta = \\pi/4$.",
      D: "for all $\\theta$ except one value."
    },
    answer: "A"
  },
  {
    question_ac: "The definition of $\\frac{\\partial f}{\\partial x}$ at $(x_0, y_0)$ is given by",
    options: {
      A: "$\\lim_{h\\to0} \\frac{f(x_0+h, y_0+h) - f(x_0, y_0)}{h}$",
      B: "$\\lim_{h\\to0} \\frac{f(x_0+h, y_0) - f(x_0, y_0)}{h}$",
      C: "$\\lim_{h\\to0} \\frac{f(x+h, y) - f(x, y)}{h}$",
      D: "$\\lim_{(x,y)\\to(x_0,y_0)} \\frac{f(x, y) - f(x_0, y_0)}{x-x_0}$"
    },
    answer: "B"
  },
  {
    question_ac: "Based on T1 Q12, we have found a function $f$ such that both $f_x(0,0)$ and $f_y(0,0)$ exist but $f$ is not differentiable at $(0,0)$. Now in general, if $f_x(0,0)$ and $f_y(0,0)$ exist, what can we say about $f$?",
    options: {
      A: "$f$ must be continuous at $(0,0)$.",
      B: "$f$ must be discontinuous at $(0,0)$.",
      C: "$f$ might be continuous or discontinuous at $(0,0)$.",
      D: "$f$ might be undefined at $(0,0)$."
    },
    answer: "C"
  },
  {
    question_ac: "When calculating $\\frac{dw}{dt}$ for the function $w = f(x,y,z)$, where $x, y,$ and $z$ are all functions of a variable $t$. Which of the following is the correct expression of the derivative?",
    options: {
      A: "$\\frac{dw}{dt} = f'(x) x'(t) + f'(y) y'(t) + f'(z) z'(t)$",
      B: "$\\frac{dw}{dt} = f_{xt} + f_{yt} + f_{zt}$",
      C: "$\\frac{dw}{dt} = \\frac{\\partial w}{\\partial x} \\frac{\\partial x}{\\partial t} + \\frac{\\partial w}{\\partial y} \\frac{\\partial y}{\\partial t} + \\frac{\\partial w}{\\partial z} \\frac{\\partial z}{\\partial t}$",
      D: "$\\frac{dw}{dt} = \\frac{\\partial w}{\\partial x} \\frac{dx}{dt} + \\frac{\\partial w}{\\partial y} \\frac{dy}{dt} + \\frac{\\partial w}{\\partial z} \\frac{dz}{dt}$"
    },
    answer: "D"
  },
  {
    question_ac: "According to Clairaut's Theorem, when are the mixed partial derivatives $f_{xy}$ and $f_{yx}$ guaranteed to be equal?",
    options: {
      A: "They are always equal for any function.",
      B: "Only if $f$ is a polynomial.",
      C: "If $f$ is defined on an open disk containing the points and the mixed partial derivatives are continuous on that disk.",
      D: "If $f$ is defined on an open disk containing the points and the $n$-th derivatives are continuous on that disk."
    },
    answer: "C"
  },
  {
    question_ac: "In T2 Q1, we have $w = f(s^2 + t^2)$. Here, $w$ depends on an intermediate variable, say $u = s^2+t^2$. To find $\\partial w / \\partial s$, the Chain Rule gives",
    options: {
      A: "$\\frac{dw}{du}$",
      B: "$\\frac{dw}{du} \\cdot \\frac{\\partial u}{\\partial s}$",
      C: "$\\frac{\\partial w}{\\partial s} \\cdot \\frac{\\partial s}{\\partial u}$",
      D: "$\\frac{dw}{du} \\cdot \\frac{\\partial u}{\\partial t}$"
    },
    answer: "B"
  },
  {
    question_ac: "You are asked to find $\\frac{\\partial z}{\\partial u}$ where $z = f(x,y)$, $x = g(u,v)$, and $y = h(u,v)$. If it turns out that $x$ does not actually depend on $u$, how does this affect the Chain Rule for $\\frac{\\partial z}{\\partial u}$?",
    options: {
      A: "The entire derivative $\\frac{\\partial z}{\\partial u}$ becomes 0.",
      B: "The term $\\frac{\\partial z}{\\partial x} \\frac{\\partial x}{\\partial u}$ becomes 0.",
      C: "Treat $\\frac{\\partial x}{\\partial u}$ as 1.",
      D: "The chain rule cannot be applied."
    },
    answer: "B"
  },
  {
    question_ac: "When finding $\\partial z / \\partial x$ from an equation such as $x^3 + y^3 + z^3 + 6xyz = 1$ (from T2, Q15), a common mistake is forgetting that",
    options: {
      A: "$y$ is treated as a function of $x$.",
      B: "$z$ is treated as a constant.",
      C: "$z$ is a function of $x$ and $y$.",
      D: "$y$ is a function of $x$ and $z$."
    },
    answer: "C"
  },
  {
    question_ac: "When performing implicit differentiation on $F(x,y,z) = 0$ to find $\\frac{\\partial z}{\\partial x}$, the result is:",
    options: {
      A: "$\\frac{F_x}{F_z}$",
      B: "$-\\frac{F_x}{F_z}$",
      C: "$\\frac{F_z}{F_x}$",
      D: "$-\\frac{F_z}{F_x}$"
    },
    answer: "B"
  },
  {
    question_ac: "The gradient vector is always ......... to the level curve at that point.",
    options: {
      A: "perpendicular / normal",
      B: "tangent",
      C: "parallel",
      D: "skew"
    },
    answer: "A"
  },
  {
    question_ac: "When calculating the directional derivative $D_{\\mathbf{u}}f$ in the direction of a vector $\\mathbf{u} = (12, 5)$ (from T2 Q5), which one is the correct step you must take?",
    options: {
      A: "Taking the dot product of the gradient and $(12, 5)$.",
      B: "Taking the dot product of the gradient and $(12/13, 5/13)$.",
      C: "Taking the cross product of the gradient and $(12, 5)$.",
      D: "Taking the cross product of the gradient and $(12/13, 5/13)$."
    },
    answer: "B"
  },
  {
    question_ac: "In T2 Q7, you are asked to calculate the direction $\\mathbf{u}$ for which the value of $D_\\mathbf{u}f(1,-1)$ is the largest. This direction is given by",
    options: {
      A: "The vector $(1,-1)$.",
      B: "The vector $(1,0)$.",
      C: "The vector $\\nabla f / ||\\nabla f||$.",
      D: "The vector $-\\nabla f$."
    },
    answer: "C"
  },
  {
    question_ac: "If the directional derivative $D_{\\mathbf{u}}f(P_0) = 0$, what does it tell us about the relationship between the direction vector $\\mathbf{u}$ and the gradient $\\nabla f(P_0)$?",
    options: {
      A: "They are parallel.",
      B: "They are perpendicular.",
      C: "They are identical.",
      D: "None of the above."
    },
    answer: "B"
  },
  {
    question_ac: "Which of the following statement is correct?",
    options: {
      A: "The gradient $\\nabla f$ is a scalar, while the directional derivative $D_{\\mathbf{u}}f$ is a vector.",
      B: "The gradient $\\nabla f$ is a vector, while the directional derivative $D_{\\mathbf{u}}f$ is a scalar.",
      C: "Both the gradient $\\nabla f$ and the directional derivative $D_{\\mathbf{u}}f$ are scalars.",
      D: "Both the gradient $\\nabla f$ and the directional derivative $D_{\\mathbf{u}}f$ are vectors."
    },
    answer: "B"
  },
  {
    question_ac: "To find the equation of a tangent plane to a surface defined implicitly as $F(x,y,z) = 0$, the normal vector $\\mathbf{n}$ is given by",
    options: {
      A: "$( F_x, F_y, F_z)$",
      B: "$( F_x, F_y, 1 )$",
      C: "$(F_x, F_y, -1)$",
      D: "The cross product of $f_x$ and $f_y$."
    },
    answer: "A"
  },
  {
    question_ac: "The equation of the tangent plane to the surface $z = f(x,y)$ at $(x_0, y_0)$ is",
    options: {
      A: "$z = f_x(x-x_0) + f_y(y-y_0)$",
      B: "$0 = f_x(x-x_0) + f_y(y-y_0) + (z-z_0)$",
      C: "$z - z_0 = f_x(x_0, y_0)(x-x_0) + f_y(x_0, y_0)(y-y_0)$",
      D: "$z =z_0 + f_x(x_0, y_0)(x_0-x) + f_y(x_0, y_0)(y_0-y)$"
    },
    answer: "C"
  },
  {
    question_ac: "You are asked to find the tangent line to the curve formed by the intersection of two surfaces, $F(x,y,z) = 0$ and $G(x,y,z) = 0$, at a point $P_0$. How do you determine the direction vector $\\mathbf{v}$ of this tangent line?",
    options: {
      A: "$\\mathbf{v} = \\nabla F(P_0) + \\nabla G(P_0)$",
      B: "$\\mathbf{v} = \\nabla F(P_0) \\cdot \\nabla G(P_0)$",
      C: "$\\mathbf{v} = \\nabla F(P_0) \\times \\nabla G(P_0)$",
      D: "$\\mathbf{v} = \\nabla F(P_0) - \\nabla G(P_0)$"
    },
    answer: "C"
  },
  {
    question_ac: "In T2 Q10, we estimate the change in $g$ as you move from $P_0(2, -1, 0)$ a distance $ds = 0.2$ toward $P_1(0, 1, 2)$. We calculate the vector $\\mathbf{A} = P_1 - P_0 = (-2, 2, 2)$. What are the values of $dx, dy, dz$ to be used in the total differential formula $dg = g_x dx + g_y dy + g_z dz$?",
    options: {
      A: "$dx = -2, dy = 2, dz = 2$.",
      B: "$dx = -0.4, dy = 0.4, dz = 0.4$.",
      C: "$dx = -\\frac{2}{\\sqrt{12}}(0.2), dy = \\frac{2}{\\sqrt{12}}(0.2), dz = \\frac{2}{\\sqrt{12}}(0.2)$.",
      D: "$dx = 0.2, dy = 0.2, dz = 0.2$."
    },
    answer: "C"
  },
  {
    question_ac: "The linear approximation $L(x,y)$ at $(a,b)$ can be written using the gradient vector as",
    options: {
      A: "$L(x,y) = f(a,b) + \\nabla f(a,b) \\cdot ( x-a, y-b )$",
      B: "$L(x,y) = f(a,b) + \\nabla f(a,b) \\times (x-a, y-b)$",
      C: "$L(x,y) = \\nabla f(x,y)$",
      D: "$L(x,y) = f(a,b) + \\nabla f(a,b)$"
    },
    answer: "A"
  },
  {
    question_ac: "We are given the error bound formula: $|E(x,y)| \\leq \\frac{1}{2} M (|x-x_0| + |y-y_0|)^2$. What does the constant $M$ represent?",
    options: {
      A: "The maximum value of the function $f(x,y)$ in the region.",
      B: "The maximum value of the first partial derivatives ($f_x, f_y$) in the region.",
      C: "An upper bound for the absolute values of the second partial derivatives (i.e., $f_{xx}, f_{yy}, f_{xy}$) in the region.",
      D: "The maximum distance from the center $(x_0, y_0)$."
    },
    answer: "C"
  },
  {
    question_ac: "In T2 Q12(a), calculating the second partial derivatives of $f(x,y) = x^2 - 3xy + 5$ yields $f_{xx} = 2, f_{yy} = 0$ and $f_{xy} = -3$. What is the correct value and reason for $M$ to bound the error?",
    options: {
      A: "$M = 2$, because it is larger than these values.",
      B: "$M = 0$, because it is the smallest nonnegative number.",
      C: "$M = 10^{2025}$, because this is large enough to comfort me.",
      D: "$M = 3$, because it is the maximum absolute value of all second derivatives."
    },
    answer: "D"
  },
  {
    question_ac: "In T2 Q12(b), you are asked to approximate $f(x,y) = e^x \\cos y$ near $(0,0)$ over the region $|x| \\leq 0.1, |y| \\leq 0.1$. The partial derivative is $f_{xx} = e^x \\cos y$. Explain what is wrong with my argument when finding $M$: I evaluates $f_{xx}$ at $(0,0)$ and find $e^0 \\cos 0 = 1$. Then I calculate the other derivatives at $(0,0)$ and decide to use $M=1$.",
    options: {
      A: "$M$ must be the minimum value of the derivatives to ensure the error is small.",
      B: "$M$ must be an upper bound for the derivatives over the entire rectangle.",
      C: "You do not list down the values for all second derivatives.",
      D: "$\\cos y$ can be negative, making the bound undefined."
    },
    answer: "B"
  },
  {
    question_ac: "In T3 Q1, given the function $f(x,y) = x^2 - y^2 - 2x + 4y + 6$. The tutor had calculated $f_{xx} = 2$ and $f_{yy} = -2$. Then the tutor said \"I do not need to calculate further, it is impossible to have a local maximum or minimum, BECAUSE IT IS TRIVIALLLL\". Which of the following best suits his mind?",
    options: {
      A: "Because $f_{xy}$ is zero.",
      B: "Because $f_{xx}$ and $f_{yy}$ have opposite signs.",
      C: "Because both $f_{xx}$ and $f_{yy}$ are constants.",
      D: "Because he has a mental breakdown."
    },
    answer: "B"
  },
  {
    question_ac: "In T3 Q1, given the function $f(x,y) = y \\sin x$. The critical points occur where $f_x = y \\cos x = 0$ and $f_y = \\sin x = 0$. Determine whether my argument and conclusion is correct: I first assume that $y = 0$, so we always have $f_x = 0$. Hence $f_y = 0\\implies x = n\\pi$ where $n$ is an integer. Therefore $\\{(n\\pi, 0):n\\in\\mathbb{Z}\\}$ is the set of all critical points.",
    options: {
      A: "Both argument and conclusion are correct.",
      B: "Both argument and conclusion are incorrect.",
      C: "The argument is correct while the conclusion is incorrect.",
      D: "The argument is incorrect while the conclusion is correct."
    },
    answer: "D"
  },
  {
    question_ac: "In T3 Q1, we want determine local minima, local maxima and saddle points of the function $f(x,y) = 2\\ln x + \\ln y - 4x - y$. We first solve the system of equations $\\nabla f = 0$ and eventually finds two candidate points $P_1(0.5, 1)$ and $P_2(-0.5, 1)$. Which of the following is the correct next step?",
    options: {
      A: "Test both points using the Second Derivative Test.",
      B: "Discard $P_2$ immediately because it lies outside the domain of the function.",
      C: "Discard $P_1$ because $\\ln(0.5)$ results in a negative number.",
      D: "Use $P_2$ but take the absolute value of $x$ for the logarithm."
    },
    answer: "B"
  },
  {
    question_ac: "In T3 Q2, you are asked to find absolute extrema on a given domain, say the triangle bounded by $x=0, y=2, y=2x$. To complete the solution, we need to test the boundary. When we consider the boundary $y=2x$, the function $f(x,y)$ reduces to a single variable function $g(x)$. Which of the following is the most important but often forgotten FIRST step?",
    options: {
      A: "Set $g'(x) = 0$ and find solutions for all real $x$.",
      B: "Calculate $g''(x)$ to classify the points.",
      C: "Substitute for $x$ to obtain the value of $y$.",
      D: "Restrict $x$ to the interval $[0, 1]$ corresponding to the triangle's width."
    },
    answer: "D"
  },
  {
    question_ac: "The choice difference between the process for finding absolute extrema and finding local extrema is that ........., and so we skip the derivative test.",
    options: {
      A: "absolute extrema only occur on the boundary",
      B: "we simply compare the values of $f$ at all candidate points to obtain absolute extrema",
      C: "local extrema cannot be absolute extrema",
      D: "absolute extrema can only be obtained using Lagrange Multipliers"
    },
    answer: "B"
  },
  {
    question_ac: "In the Lagrange Multiplier equation $\\nabla f = \\lambda \\nabla g$, if $\\lambda = 0$, this implies that",
    options: {
      A: "There is no solution.",
      B: "The constraint $g$ is irrelevant.",
      C: "The extremal point is a critical point of the unconstrained function $f$.",
      D: "The gradient of the constraint is zero."
    },
    answer: "C"
  },
  {
    question_ac: "When solving the system $\\nabla f = \\lambda \\nabla g$ for variables $x, y, \\lambda$, some people often get stuck because they have 3 variables but only 2 equations obtained from this equation. What is the third equation?",
    options: {
      A: "The objective $f(x,y) = 0$",
      B: "The constraint $g(x,y) = k$.",
      C: "$\\lambda = 0$.",
      D: "There is not third equation because one variable is free."
    },
    answer: "B"
  },
  {
    question_ac: "In T3 Q5 and Q7 (points on curve/surface nearest to the origin), the tutor may first define the function as $f(x,y,z) = x^2 + y^2 + z^2$ rather than $d(x,y,z) = \\sqrt{x^2 + y^2 + z^2}$. Why is this a valid strategy?",
    options: {
      A: "It is not valid because he considered the wrong objective.",
      B: "It is not valid because we can get different values for $\\lambda$ when we consider different functions.",
      C: "This is valid because $f(t) = \\sqrt{t}$ is a strictly increasing function for $t > 0$.",
      D: "This is valid because Lagrange multipliers only work for polynomials."
    },
    answer: "C"
  },
  {
    question_ac: "In T3 Q5 again, (points on $xy^2 = 54$ nearest to the origin). What happen if we replace \"nearest\" by \"farthest\"?",
    options: {
      A: "This is not valid because the curve is unbounded.",
      B: "This is not valid because $54$ is a small number.",
      C: "This is valid, but the Lagrange multipliers method does not work in this case.",
      D: "This is valid because the curve is not a straight line."
    },
    answer: "A"
  },
  {
    question_ac: "When optimizing a function subject to two constraints, $g(x,y,z) = c$ and $h(x,y,z) = k$. What is the correct equation to solve for this scenario?",
    options: {
      A: "$\\nabla f = (\\lambda \\nabla g) \\times (\\mu \\nabla h)$",
      B: "$\\nabla f = \\lambda \\nabla g \\cdot \\nabla h$",
      C: "$\\nabla f = \\lambda \\nabla g + \\mu \\nabla h$",
      D: "$\\nabla f = \\lambda (\\nabla g \\times \\nabla h)$"
    },
    answer: "C"
  },
  {
    question_ac: "In T3 Q6, we are inscribing a rectangle in an ellipse, and wish to find the greatest area of that rectangle. The tutor proceeds with the Lagrange multipliers method gets $y = \\lambda \\frac{2x}{16}$ and $x = \\lambda \\frac{2y}{9}$. He was then divide the first equation by $x$. Why is it valid in this context?",
    options: {
      A: "We assume that $x,y>0$ because we place the rectangle on the first quadrant of the Cartesian plane.",
      B: "A rectangle with width $x=0$ would have zero area, which is definitely not the maximum.",
      C: "This is valid because the area of the rectangle inscribed in the ellipse must be nonzero.",
      D: "This step is algebraically invalid because $x$ can be zero."
    },
    answer: "B"
  },
  {
    question_ac: "The general Taylor formula at the origin includes the term $\\frac{1}{2!} (f_{xx}x^2 + 2f_{xy}xy + f_{yy}y^2)$. Which of the following best explain why we have a factor $2$ besides $f_{xy}$?",
    options: {
      A: "Because there are two variables $x$ and $y$.",
      B: "Because $f_{xy}=f_{yx}$.",
      C: "Because we are taking the second derivative, so we multiply by 2.",
      D: "Because we have $1/2!$, so we get an integer coefficient."
    },
    answer: "B"
  },
  {
    question_ac: "If $Q(x,y)$ is the quadratic approximation of $f(x,y)$ at the origin, which of the following properties is not guaranteed to be true?",
    options: {
      A: "$Q(0,0) = f(0,0)$",
      B: "$\\nabla Q(0,0) = \\nabla f(0,0)$",
      C: "$Q_{xy}(0,0) =  f_{xy}(0,0)$",
      D: "$Q(x,y) = f(x,y)$ for all points $(x,y)$ in the radius of convergence."
    },
    answer: "D"
  },
  {
    question_ac: "Given $w = x^2 y^2 + yz − z^3$ and $x^2+y^2+z^2 = 6$. The notation $(\\frac{\\partial w}{\\partial y})_x$ explicitly means",
    options: {
      A: "Differentiate $w$ with respect to $y$, treating $x$ as a constant, while $z$ may depend on $y$.",
      B: "Differentiate $w$ with respect to $y$, treating $z$ as a constant.",
      C: "Differentiate $w$ with respect to $y$, then multiply by $x$.",
      D: "Differentiate $w$ with respect to $y$, then differentiate $\\frac{\\partial w}{\\partial y}$ with respect to $x$."
    },
    answer: "A"
  },
  {
    question_ac: "In polar coordinates, $x = r \\cos \\theta$. Clearly we have $\\left(\\frac{\\partial x}{\\partial r}\\right)_\\theta = \\cos \\theta$. Does this imply that $\\left(\\frac{\\partial r}{\\partial x}\\right)_y = \\frac{1}{\\cos \\theta}$?",
    options: {
      A: "Yes, because $\\frac{\\partial r}{\\partial x}=1/(\\frac{\\partial x}{\\partial r})$.",
      B: "Yes, because $r \\neq 0$.",
      C: "No, because the variable held constant in the reciprocal $\\frac{\\partial r}{\\partial x}$ is $\\theta$, but here $y$ is held constant.",
      D: "No, because derivatives cannot be inverted like fractions."
    },
    answer: "C"
  },
  {
    question_ac: "In T4 Q3, to find $\\left(\\frac{\\partial r}{\\partial x}\\right)_y$ correctly when we are given $x^2+y^2=r^2$ and $x = r\\cos \\theta$, which of the following is the most direct approach?",
    options: {
      A: "Differentiate $r^2 = x^2 + y^2$ and  with respect to $x$, treating $y$ as constant.",
      B: "Differentiate $x = r \\cos \\theta$ with respect to $x$.",
      C: "Convert $\\cos \\theta$ into Cartesian coordinates first.",
      D: "Substitute $y = r\\sin\\theta$ into $r^2=x^2+y^2$."
    },
    answer: "A"
  }
];

// Set up quiz and score
const container = document.getElementById("quiz-container");
const scoreBox = document.getElementById("score-summary");

// Count the answers
let answeredCount = 0;
let correctCount = 0;

// Introduction text (hide it if not needed)
//const intro = document.createElement("div");
//intro.style.marginTop = "20px";
//intro.innerHTML = `<p><b>Note.</b> Select the correct choices.</p>`;
//container.appendChild(intro);

// Loop to generate questions
questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.style.marginBottom = "40px";
  
  // Question Statement (The problem statement in Question list)
  let questionStatement = `<p><b>Q${i + 1}.</b> ${q.question_ac}</p>`;
  
  // Choices (A, B, C, D)
  ['A', 'B', 'C', 'D'].forEach(choice => {
    // A setting to check whether A, B, C, D exists (so some questions can have only 2/3 choices)
    if(q.options[choice]) {
      // Add choices using customized boxes
      questionStatement += `
        <div class="choice-container" id="q${i}-${choice}" onclick="checkAnswer(${i}, '${choice}')">
          <span class="choice-box">${choice}</span>
          <span class="choice-text">${q.options[choice]}</span>
        </div>
      `;
    }
  });

  // Add feedback (kaomoji)
  questionStatement += `<div id="feedback-${i}" style="margin-top: 10px; font-weight: normal; min-height: 25px; margin-left: 5px;"></div>`;
  
  div.innerHTML = questionStatement;
  container.appendChild(div);

  // Restore answers when reload the page
  const savedAnswer = localStorage.getItem(`question_ac-${i}`);
  if (savedAnswer !== null) {
    checkAnswer(i, savedAnswer, true); 
  }
});

// Set up for the function `checkAnswer`
/**
 * Handles checking the answer.
 * @param {number} index - Question index
 * @param {string} selectedChoice - 'A', 'B', 'C', or 'D'
 * @param {boolean} isRestoring - If true, we skip saving and just paint the UI
 */

function checkAnswer(index, selectedChoice, isRestoring = false) {
  const correctChoice = questions[index].answer;
  const feedback = document.getElementById(`feedback-${index}`);
  
  // Stop clicking the answered button (unless we are restoring)
  const button = document.getElementById(`q${index}-A`) || document.getElementById(`q${index}-B`);
  if (!button) return; 
  if (!isRestoring && button.classList.contains('disabled')) return;

  // Save the answer (for restoring purpose)
  if (!isRestoring) {
    localStorage.setItem(`question_ac-${index}`, selectedChoice);
  }

  const isCorrect = selectedChoice === correctChoice;

  // Disable clicking
  ['A', 'B', 'C', 'D'].forEach(choice => {
    const btn = document.getElementById(`q${index}-${choice}`);
    if (btn) {
      btn.classList.add('disabled');
      btn.onclick = null; 
    }
  });

  // Highlight the answer and feedback
  const selectedBtn = document.getElementById(`q${index}-${selectedChoice}`);
  if (selectedBtn) {
    if (isCorrect) {
      selectedBtn.classList.add("correct-choice");
      feedback.innerHTML = `<span>(¦3[▓▓] Correct!</span>`;
      correctCount++;
    } else {
      selectedBtn.classList.add("wrong-choice");
      // Show correct answer border (hide it if you do not want to display the correct answer)
      const correctBtn = document.getElementById(`q${index}-${correctChoice}`);
      if(correctBtn) correctBtn.style.border = "3px solid #388e3c"; 
      
      feedback.innerHTML = `<span>＼(・｀(エ)・)/ Wrong!</span>`; //  Answer was ${correctChoice}
    }
  }

  // Count for each click
  answeredCount++;

  // Final score
  if (answeredCount === questions.length) {
    let resultComment;
    const percentage = correctCount / questions.length;
    
    if (percentage === 1.0) resultComment = 'Genius Level! I love you so matcha.';
    else if (percentage >= 0.9) resultComment = 'So close! Give you a chocolatte.';
    else if (percentage >= 0.7) resultComment = 'Good Job. Give you a cookie.';
    else if (percentage >= 0.5) resultComment = 'Masih memuaskan. Kasih satu nasi lemak.';
    else resultComment = 'Hello what happen? Habis lah!';

    scoreBox.innerHTML = `<div style="font-size: 1.3em; font-weight: bold; margin-top: 50px; margin-bottom: 50px; padding: 20px; border: 2px solid #333; text-align:center;">
    You got ${correctCount} out of ${questions.length} correct.<br>
    ${resultComment}
    </div>`;
  }
}