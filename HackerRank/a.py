import math
import os
import random
import re
import sys
n = 7
m = 3

matrix = ['Tsi', 'h%x', 'i #', 'sM ', '$a ', '#t%', 'ir!']

matrix2 = ''
string=''
t=''

for c in range(m):
    for r in range(n):
        s=matrix[r][c]
        if(s.isalnum()):
            
            if len(string)<=0 and len(t)>0:
                matrix2=matrix2+' '
            string=string+s
            t=''
        else:
            matrix2=matrix2+string
            string=''
            t=t+s
    matrix2=matrix2+t

        
print(matrix2)
