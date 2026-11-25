export const Practice2 = () => {

    const getCalcTotalFee = (num:number) => {
        return num * 1.1;
    }

    const onClickPractice = () => {
        const a = getCalcTotalFee(100);
        console.log(a);
    }

    return(
        <>
            <p>練習問題：返却値の型指定</p>
            <button onClick={onClickPractice}>返却</button>
        </>
    )
}