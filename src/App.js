import './App.css';
export default function App() {
  
  return (
    <div className="App">
    <Main/>
    </div>
  ); 
}


export function Main(){
const content=[
  {
    Plan:"FREE",
    Price1:"$0",
    Price2:"/month",
    Available:["Single User","5GB Storage","Unlimited Public Projects","Community Access"],
    Unavailable:["Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]
  },
  {
    Plan:"PLUS",
    Price1:"$9",
    Price2:"/month",
    Available:["5 User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain"],
    Unavailable:["Monthly Status Reports"]
  },
  {
    Plan:"PRO",
    Price1:"$49",
    Price2:"/month",
    Available:["Single User","150GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Unlimited Subdomain","Monthly Status Reports"],
    Unavailable:[]
  }
]
  return(
    <div className='new'>
       {content.map((data,i)=>{
         return(
           
       <Display
       key={i} 
       plan={data.Plan} 
       price1={data.Price1} 
       price2={data.Price2}
       available={data.Available}
       unavailable={data.Unavailable}
       />
       )
       })}
    </div>
  )
}

function Display({plan,price1,price2,available,unavailable}){
let values=(data)=>{
  if(data==='Unlimited Subdomain')
  {
    return (<p className="content1">✔<b>Unlimited</b> Subdomain</p>)
  }
  else if(data==='5 User')
  {
    return (<p className="content1">✔<b>5 User</b> </p>)
  }
  else
  {
    return (<p className="content1">✔{data}</p>)
  }
}
return(
    <div className="container">
      <p className="plan">{plan}</p>
      <p className="price"><span className="price1">{price1}</span><span>{price2}</span></p>
      <hr className="line"></hr>
      {available.map((data)=>{ return values(data)} )}
      {unavailable.map((data)=>{return(<p className="content2">✖{data}</p>)})}
      <button className="btn btn-primary button" type="submit">Button</button>
      </div>
  )
}


