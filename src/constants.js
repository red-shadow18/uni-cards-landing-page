import benefit1 from "./images/benefit1.png"
import benefit2 from "./images/benefit2.png"
import benefit3 from "./images/benefit3.png"

const caardBenefits=[
    {
        id:'benefit1',
        leftImage:false,
        imgSrc:benefit1,
        primartBoldText:"1% assured cashback on your spends.",
        primaryPlainText:"The more you spend, the more you earn.",
        secondaryText:"Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions."
    },
    {
        id:'benefit2',
        leftImage:true,
        imgSrc:benefit2,
        primartBoldText:"5x more value than your cashback,",
        primaryPlainText:" only at the Uni Store.",
        secondaryText:""
    },
    {
        id:'benefit3',
        leftImage:false,
        imgSrc:benefit3,
        primartBoldText:"Zero Forex Markup.",
        primaryPlainText:"Go international, without any fees.",
        secondaryText:""
    },
]


export {caardBenefits}