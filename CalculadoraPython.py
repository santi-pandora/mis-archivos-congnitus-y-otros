

def sumar(num1, num2):
    resultado = num1 + num2
    return resultado
    
def restar(num1, num2):
    resultado = num1 - num2
    return resultado
    
def divsion(num1,num2):
    resultado = num1 / num2
    return resultado
    
def multiplicacion(num1,num2):
    resultado = num1 * num2
    return resultado

def cal (num1,num2, operator):
    if (operator == "+"):
        resultado = sumar(num1, num2)
        print(resultado)
         
    if (operator == "-"):
        resultado = restar(num1, num2)
        print(resultado)

    if (num2 == 0):
        print('no se puede dividir por este numero')
    elif (operator == "/"):
        resultado = divsion(num1, num2)
        print(resultado)
    
     
    elif(operator == "*"):
         resultado = multiplicacion(num1, num2)
         print(resultado)


ejecutar = True

while ejecutar:
    num1 = int(input("Ingrese el primer numero"))
    num2 = int(input("Ingrese el segundo Numero"))
    operator = input("Ingrese la operator")
    resultado = cal(num1, num2, operator)
  