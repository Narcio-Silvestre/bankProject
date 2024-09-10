'use strict';
import {transfer, info, statement, getBalance, changeName} from './bankProcedures.mjs'
import {bank} from './bank.mjs'





bank.createAccount({name:'Nárcio Silvestre',number:'+351923435342',email:'narcio@gmail.com',idade:14})
bank.createAccount({name:'Juni Lopes',number:'+351916398756',email:'juni@gmail.com'})
bank.createAccount({name:'Laercio Silvestre',number:'+351912852456',email:'laercio@gmail.com'})
bank.createAccount({name:'Curixita Silvestre',number:'+351928765423',email:'curixita@gmail.com'})
bank.createAccount({name:'Anabda Martis',number:'+351932748197',email:'anabda@gmail.com',sexo:'femenino'})

console.log(bank.accounts)

info(1)
info(3)

transfer(40,3,1)

transfer(100,1,3)

info(1)
info(3)



transfer(37,'+351928765423','+351912852456')
info('+351928765423')
info('+351912852456')

statement('+351912852456')
getBalance('+351912852456')
changeName('+351912852456','Sardinhas')
info('+351912852456')


