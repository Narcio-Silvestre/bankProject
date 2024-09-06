'use strict';
import { bank } from './bank.mjs';


///////////Auxiliar/////////////////////////
function existAcount(numAccount){
    let account = bank.getAccount(numAccount)
    return (account == -1 ? false : account)
}

function existNumber(numTel){
    let account = bank.getAccount(numTel)
    return (account == -1 ? false : account)
}

function existEmail(email){
    let account = bank.getAccount(email)
    return (account == -1 ? false : account)
}

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
    if ( !account1  || !account2 ) return console.log (`Conta Inexistente`)
    getMoney(value,account1.number)
    deposit(value,account2.number)
    console.log(`Transferencia Concluida de ${account1.owner} para ${account2.owner}!\n`)
}



////Main Functions
function getBalance (numAccount) {
    let account = existAcount(numAccount)
    if(!account) return console.log(`Conta Inexistente`)
    account != -1 && console.log(`Saldo Disponível: ${account.balance} €`)
    
}

function infoByAccount(numAccount){
    let account = existAcount(numAccount)
    if(!account) return console.log(`Conta Inexistente`)
    getInfo(account)
}

function infoByPhone(value){
    let account = existNumber(value)
    if(!account) return console.log(`Conta Inexistente`)
    getInfo(account)
}

function infoByEmail(value){
    let account = existEmail(value)
    if(!account) return console.log(`Conta Inexistente`)
    getInfo(account)
}
function deposit(value,numAccount){
    let account = existAcount(numAccount)
    if(!account) return console.log(`Conta Inexistente`)
    let ant = account.balance;
    account.balance += value
    let resume = {
        balance : `+${value} €`,
        date: [new Date()].toLocaleString(),
        actualBalance: `${account.balance} €`,
        antBalance: `${ant} €`
    }
    account.resume.push(resume)
    console.log(`Déposito Concluido Senhor(a) ${account.owner}!\n`)
}

function getMoney(value,numAccount){
    let account = existAcount(numAccount)
    if(!account) return console.log(`Conta Inexistente`)
    if(account.balance<value) return console.log("Operação não pode ser concluida!")
    let ant = account.balance;
    account.balance -= value
    let resume = {
        valor : `-${value} €`,
        date: [new Date()].toLocaleString(),
        actualBalance: `${Math.fround(account.balance)} €`,
        anteriorBalance: `${ant} €`
    }
    account.resume.push(resume)
    console.log(`Levantamento Concluido Senhor(a) ${account.owner}!\n`)
    
}

function changeName(value,numAccount){
    let account = existAcount(numAccount)
    if(!account) return console.log(`Conta Inexistente`)
    account.owner = value;
    console.log(`Seu nome foi alterado para ${account.owner}`)
}

function statement(numAccount){
    let account = existAcount(numAccount)
    if(!account) return console.log(`Conta Inexistente`)
    console.log(account.resume)
}

function transfer(value,numAccount1,numAccount2){
    let account1 = existAcount(numAccount1)
    let account2 = existAcount(numAccount2)
    transferAux(value,account1,account2)
    
}

function transferMBway(value,numTel1,numTel2){
    let account1 = existNumber(numTel1)
    let account2 = existNumber(numTel2)
    transferAux(value,account1,account2)
}


export {getBalance as getBalance}
export {infoByEmail as infoByEmail}
export {infoByPhone as infoByPhone}
export {infoByAccount as infoByAccount}
export {deposit as deposit}
export {statement as statement}
export {changeName as changeName}
export {getMoney as getMoney}
export {transfer as transfer}
export {transferMBway as transferMBway}