'use strict';

// Bank Project
const bank = {
    name:'Banco Comercial',
    bankNumber: 0,
    accounts: [],

    getAccount: function (numAccountAux){
        for(let account of this.accounts){
            const {numAccount} = account
            if(numAccount == numAccountAux) return account
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