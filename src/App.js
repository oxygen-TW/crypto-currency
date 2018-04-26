let coin = "electroneum",
  convert = "TWD",
  price;

function Price(props) {
  let _price = new Number(price["price_" + props.currency]);
  return <div className="value"> {_price.toFixed(6)} </div>;
}
class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="ui grid">
        <div className="sixteen wide mobile eight wide tablet four wide computer column">
          <div className="ui statistic">
            <div className="value"># {price.rank}</div>
            <div className="label">Rank</div>
          </div>
        </div>
        <div className="sixteen wide mobile eight wide tablet four wide computer column">
          <div className="ui statistic">
            <Price currency="usd" />
            <div className="label">USD</div>
          </div>
        </div>
        <div className="sixteen wide mobile eight wide tablet four wide computer column">
          <div className="ui statistic">
            <Price currency="twd" />
            <div className="label">TWD</div>
          </div>
        </div>
        <div className="sixteen wide mobile eight wide tablet four wide computer column">
          <div className="ui statistic">
            <Price currency="btc" />
            <div className="label">BTC</div>
          </div>
        </div>
        </div>
    );
  }
}
function Render_Price() {
  fetch(
    "https://widgets.coinmarketcap.com/v1/ticker/" +
      coin +
      "/?ref=widget&convert=" +
      convert
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      price = data[0];
      console.log(price);
    })
    .then(() => {
      ReactDOM.render(<Column />, document.getElementById("app"));
    });
}
Render_Price();
setInterval(Render_Price, 10000);
