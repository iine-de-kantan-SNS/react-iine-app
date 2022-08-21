import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

//通信テスト用
const Communicate = () => {

    //データを格納するState
    const [datas, setDatas] = useState({
        no1: {},
        no2: {},
        no3: {}
    })

    //APIからデータをもらう
    const getDatas = (option) => {
        axios.get(`http://localhost:3001/api/v1/posts${option}`)
            .then(res => {
                setDatas({
                    no1: res.data.data[0],
                    no2: res.data.data[1],
                    no3: res.data.data[2]
                })
            })
            .catch(err => alert("エラーです"))
    }

    //最初に一度だけ呼ばれる
    useEffect(() => {
        getDatas("/")
    },[])

    return(

        <>
            最新投稿ーーーーーーーーーーーーーー
            <h1>{datas.no1.name}</h1>
            <img src={datas.no1.image_url} alt="写真"/>
            <button onClick={getDatas("/")} >更新</button>
            <br />
            ーーーーーーーーーーーーーーーーーー
            <br />5
            投稿フォームーーーーーーーーーーーー

            ーーーーーーーーーーーーーーーーーー
        </>
    );
}

export default Communicate;