//  Display Component

export function Display({ plan, price1, price2, available, unavailable }) {
  let values = (data) => {
    if (data === 'Unlimited Subdomain') {
      return (<p className="content1">✔<b>Unlimited</b> Subdomain</p>);
    }
    else if (data === '5 User') {
      return (<p className="content1">✔<b>5 User</b> </p>);
    }

    else {
      return (<p className="content1">✔{data}</p>);
    }
  };
  return (
    <div className="container">
      <p className="plan">{plan}</p>
      <p className="price"><span className="price1">{price1}</span><span>{price2}</span></p>
      <hr className="line"></hr>
      {available.map((data) => { return values(data); })}
      {unavailable.map((data) => { return (<p className="content2">✖{data}</p>); })}
      <button className="btn btn-primary button" type="submit">Button</button>
    </div>
  );
}
