import { Display } from "./Display";

//  Main Component

export function Main() {
  const content = [
    {
      Plan: "FREE",
      Price1: "$0",
      Price2: "/month",
      Available: ["Single User", "5GB Storage", "Unlimited Public Projects", "Community Access"],
      Unavailable: ["Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]
    },
    {
      Plan: "PLUS",
      Price1: "$9",
      Price2: "/month",
      Available: ["5 User", "50GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain"],
      Unavailable: ["Monthly Status Reports"]
    },
    {
      Plan: "PRO",
      Price1: "$49",
      Price2: "/month",
      Available: ["Single User", "150GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Unlimited Subdomain", "Monthly Status Reports"],
      Unavailable: []
    }
  ];
  return (
    <div className='new'>
      {content.map((data, i) => {
        return (

          <Display
            key={i}
            plan={data.Plan}
            price1={data.Price1}
            price2={data.Price2}
            available={data.Available}
            unavailable={data.Unavailable} />
        );
      })}
    </div>
  );
}
