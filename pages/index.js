import { ethers } from 'ethers'
import { useEffect } from 'react'
import { useState } from 'react'

import abi from "../public/artifacts/usdtABI.json"

export default function Home() {

  const[name,setName] = useState("")
  const[symb,setSymb] = useState("")
  const [userBlnc,setUserBlnc] = useState("")
 const [transfers,setTransfers]= useState([])
  const [block,setBlock] = useState("")


  const[balance,setBalance]=useState("0")
  const mainNetEndPoint = "https://mainnet.infura.io/v3/47b829e7e62f4ccfa9fe9dbd1bde1714"

  const provider = new ethers.providers.JsonRpcProvider(mainNetEndPoint)


const tetherContractAddress =  "0xdAC17F958D2ee523a2206206994597C13D831ec7"
const userAccount = "0xA54fEabdB975422599E2eFd3e38aAdE2B3Fa8b34"
const contract = new ethers.Contract(tetherContractAddress,abi,provider)

const fetchUSDT = async()=>{
  const name = await contract.name()
  const symbol = await contract.symbol()
  const userBalance = await contract.balanceOf(userAccount)

  setName(name)
  setSymb(symbol)
  setUserBlnc( userBalance)

}

const getTransferData =  ()=>{
  contract.on("Transfer",(from,to,value,event)=>{
    let data = {
      from,to,value:value.toString(),event
    }
    setTransfers((oldvalues)=>[...oldvalues,data])
  
  });

} 


  useEffect(()=>{
fetchUSDT()
getTransferData()
  },[])




  return (
    <div  className='m-5'>
      <h2 className='btn btn-outline-danger'>Welceome to fetch USDT</h2>
      <br/>
      <h2 className='btn btn-outline-info'>conatract name is {name} </h2>
      <br/>
      <h2 className='btn btn-outline-success'>conatract Symbol is {symb} </h2>

<br/>
<p className='text-white'>The User of {userAccount} address has Usdt Balance {userBlnc.toString()}</p>
<br/>
{
  transfers.reverse().map((data,index)=>{
    return(
      <div key={index}>
        <h2>From</h2>
        <h3 className='text-white'>{data.from}</h3>
        <h1>To</h1>
        <h3 className='text-white'>{data.to}</h3>
        <h1>Value</h1>
        <h3 className='text-white'>{data.value}</h3>
      </div>
    )

  })
}

    </div>
  )
}
