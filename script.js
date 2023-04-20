calcular ( ) ;
función  calcular ( )  {
    let  num1  =  parseInt ( prompt ( "Primer número:" ) ) ;
    let  num2  =  parseInt ( prompt ( "Segundo número:" ) ) ;

    sumar ( num1 ,  num2 ) ;
    reiniciar ( num1 ,  num2 ) ;
    multiplicar ( num1 ,  num2 ) ;
    dividir ( num1 ,  num2 ) ;
}

función  sumar ( num1 ,  num2 )  {
    let  resultado  =  num1  +  num2 ;
    consola _ log ( `La suma es: ${ resultado } ` ) ;
    alert ( "El resultado de la suma es: "  +  suma ) ;
}


función  reiniciar ( num1 ,  num2 )  {
    let  resultado  =  num1  -  num2 ;
    consola _ log ( `La resta es: ${ resultado } ` ) ;
    alert ( "El resultado de la resta es: "  +  resta ) ;
}

función  multiplicar ( num1 ,  num2 )  {
    let  resultado  =  num1  *  num2 ;
    consola _ log ( `La multiplicación es: ${ resultado } ` ) ;
    alert ( "El resultado de la multiplicación es: "  +  multiplicación ) ;
}


función  dividir ( num1 ,  num2 )  {
    let  resultado  =  num1  /  num2 ;
    consola _ log ( `La división es: ${ resultado } ` ) ;
    alert ( "El resultado de la división es: "  +  división ) ;

}