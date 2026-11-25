export const Practice1 = () => {

    const calcTotalFee = (num:number) => {
        return num * 1.1;
    }

    const onClickPractice = () => {
        const a = calcTotalFee(100);
        console.log(a);
    }

    return(
        <>
            <p>練習問題：引数の型指定</p>
            <button onClick={onClickPractice}></button>
        </>
    )
}