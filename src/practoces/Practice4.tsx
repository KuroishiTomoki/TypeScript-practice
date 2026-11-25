export const Practice4 = () => {

    const getCalcTotalFee = (num) => {
        return num * 1.1;
    }

    const onClickPractice = () => {
        let total:number = 0;
        total = getCalcTotalFee(100);
        console.log(total);
    }

    return(
        <>
            <p>練習問題：返却値の型指定</p>
            <button onClick={onClickPractice}>練習3</button>
        </>
    )
}