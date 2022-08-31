import { ethers } from 'ethers'
import { useEffect } from 'react'
import { useState } from 'react'

import abi from "../public/artifacts/usdtABI.json"

export default function Home() {

  const[name,setName] = useState("")
  const[symb,setSymb] = useState("")
  const [userBlnc,setUserBlnc] = useState("")

  const [block,setBlock] = useState("")


  const[balance,setBalance]=useState("0")
  const mainNetEndPoint = "https://goerli.infura.io/v3/47b829e7e62f4ccfa9fe9dbd1bde1714"

  const provider = new ethers.providers.JsonRpcProvider(mainNetEndPoint)

  const private_key = "734c8cb691544efac0bab296fb3f1b62f25f15edc47d376af2b0ddc667106956"

  const reciver = "0x3E8e026e4E3074a321dCe36477619E5BA6f9dD9c"
  const wallet = new ethers.Wallet(private_key,provider)

  const sendTransaction = async()=>{
      

    const transaction = await wallet.sendTransaction({to:reciver,value:ethers.utils.parseEther("0.2")})

    await transaction.wait()
    console.log(transaction);
    

  }



  useEffect(()=>{
  },[])




  return (
    <div  className='m-5'>
      <h2 className='btn btn-outline-danger text-center'>Welceome to Send Ethererum Transaction</h2>

    </div>
  )
}
