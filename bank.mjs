'use strict';

// Bank Project
const bank = {
    name:'Banco Comercial',
    bankNumber: 0,
    accounts: [],

    getAccount: function (value){
        for(let account of this.accounts){
            const {numAccount,number,email,iban} = account
            if(numAccount == value) return account
            if(number == value) return account
            if(email == value) return account
            if(iban == value) return account
        }
        return -1;
    },
    createAccount: function ({...personData}) {
        const {name,number,email,...others} = personData
        const account = {
            owner: name,
            numAccount: this.accounts.length + 1,
            number: number,
            email: email,
            others: others,
            iban: `PT500${this.accounts.length}`,
            balance: 250,
            resume: []
        }
        this.accounts.push(account);
        return true;
    }


}



export { bank as bank };