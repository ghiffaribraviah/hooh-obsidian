$$
\epsilon = Y - X\beta
$$
$$
(minimumkan \; \epsilon^T\epsilon)
$$
$$
Q = \epsilon^T\epsilon = (Y - X\beta)^T(Y - X\beta)
$$
$$
Q = \epsilon^T\epsilon = Y^TY - Y^TX\beta - \beta^TX^TY - \beta^TX^TXB
$$
$$
Q = \epsilon^T\epsilon = Y^TY - 2(\beta^TX^TY) - \beta^TX^TXB 
$$
$$
(turunkan  \; terhadap \; \beta)
$$
$$
\frac {\partial Q} {\partial \beta} = - 2X^TY + 2X^TX\beta  
$$
$$
(nilai \; maksimum \; saat \; \frac{\partial Q}{\partial B} = 0)
$$
$$
0 = - 2X^TY + 2X^TX\beta  
$$
$$
2X^TY = 2X^TX\beta
$$
$$
\hat\beta = (X^TX)^{-1}X^TY
$$
