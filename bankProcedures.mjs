'use strict';
import { bank } from './bank.mjs';

function getInfo (account){
    console.log({titular: account.owner,
        iban: account.iban,
        numeroConta: account.numAccount,
        saldo: account.balance + '€',
        telefone: account.number,
        email: account.email,
        movimentos: {...account.resume}})
}

function transferAux(value,account1,account2){
    getMoney(value,account1.number)
    deposit(value,account2.number)
    console.log(`Transferencia Concluida de ${account1.owner} para ${account2.owner}!\n`)
}



////Main Functions
function getBalance (value) {
    let account = bank.getAccount(value) 
    return (account || console.log('conta inexistente')) && 
    console.log(`Saldo Disponível: ${account.balance} €`)
}

function info(value){
    let account = bank.getAccount(value) 
    return (account || console.log('conta inexistente')) && getInfo(account)
    
}

function deposit(value,numAccount){
    let account = bank.getAccount(numAccount)
    if(account){
        let ant = account.balance;
        account.balance += value
        let resume = {
            balance : `+${value} €`,
            date: [new Date()].toLocaleString(),
            actualBalance: `${account.balance} €`,
            antBalance: `${ant} €`
        }
        account.resume.push(resume)
        return console.log(`Déposito Concluido Senhor(a) ${account.owner}!\n`)
    }
    return console.log('conta inexistente')
    
}

function getMoney(value,numAccount){
    let account = bank.getAccount(numAccount)
    if(account && account.balance>=value){
        let ant = account.balance;
        account.balance -= value
        let resume = {
        valor : `-${value} €`,
        date: [new Date()].toLocaleString(),
        actualBalance: `${Math.fround(account.balance)} €`,
        anteriorBalance: `${ant} €`
        }
        account.resume.push(resume)
        return console.log(`Levantamento Concluido Senhor(a) ${account.owner}!\n`)
    }
    return (account || console.log('conta inexistente')) &&
    (account.balance>=value || console.log('Não é possivel realizar a operação!'))   
}

function changeName(value,newName){
    let account = bank.getAccount(value) 
    return (account || console.log('conta inexistente')) && 
    (account.owner = newName) &&
    console.log(`Seu nome foi alterado para ${account.owner}`)
}

function statement(value){
    let account = bank.getAccount(value) 
    return (account || console.log('conta inexistente')) && console.log({movimentos:[...account.resume]})
}

function transfer(value,numAccount1,numAccount2){
    let account1 = bank.getAccount(numAccount1) 
    let account2 = bank.getAccount(numAccount2)
    return ((account1 && account2) || console.log('conta inexistente')) && transferAux(value,account1,account2)
}




export {getBalance as getBalance}
export {info as info}
export {deposit as deposit}
export {statement as statement}
export {changeName as changeName}
export {getMoney as getMoney}
export {transfer as transfer}