"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var coin = "monero",
    convert = "TWD",
    price = void 0;

function Price(props) {
  var _price = new Number(price["price_" + props.currency]);
  return React.createElement(
    "div",
    { className: "value" },
    " ",
    _price.toFixed(6),
    " "
  );
}

var Column = function (_React$Component) {
  _inherits(Column, _React$Component);

  function Column(props) {
    _classCallCheck(this, Column);

    var _this = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this, props));

    _this.state = { date: new Date() };
    return _this;
  }

  _createClass(Column, [{
    key: "render",
    value: function render() {
      var condition = price.percent_change_24h > 0;
      var change = condition ? "ui green statistic" : "ui red statistic";
      return React.createElement(
        "div",
        { className: "ui grid" },
        React.createElement(
          "div",
          { className: "sixteen wide mobile eight wide tablet four wide computer column" },
          React.createElement(
            "div",
            { className: "ui statistic" },
            React.createElement(
              "div",
              { className: "value" },
              "# ",
              price.rank
            ),
            React.createElement(
              "div",
              { className: "label" },
              "Rank"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "sixteen wide mobile eight wide tablet four wide computer column" },
          React.createElement(
            "div",
            { className: "ui statistic" },
            React.createElement(Price, { currency: "usd" }),
            React.createElement(
              "div",
              { className: "label" },
              "USD"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "sixteen wide mobile eight wide tablet four wide computer column" },
          React.createElement(
            "div",
            { className: "ui statistic" },
            React.createElement(Price, { currency: "twd" }),
            React.createElement(
              "div",
              { className: "label" },
              "TWD"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "sixteen wide mobile eight wide tablet four wide computer column" },
          React.createElement(
            "div",
            { className: "ui statistic" },
            React.createElement(Price, { currency: "btc" }),
            React.createElement(
              "div",
              { className: "label" },
              "BTC"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "sixteen wide mobile eight wide tablet four wide computer column" },
          React.createElement(
            "div",
            { className: change },
            React.createElement(
              "div",
              { className: "value" },
              price.percent_change_24h,
              " %"
            ),
            "\xA0 \xA0 \xA0 \xA0 \xA0 \xA0",
            React.createElement(
              "div",
              { className: "label" },
              "Change(24H)"
            )
          )
        )
      );
    }
  }]);

  return Column;
}(React.Component);

function Render_Price() {
  fetch("https://widgets.coinmarketcap.com/v1/ticker/" + coin + "/?ref=widget&convert=" + convert).then(function (response) {
    return response.json();
  }).then(function (data) {
    price = data[0];
    console.log(price);
  }).then(function () {
    ReactDOM.render(React.createElement(Column, null), document.getElementById("app"));
  });
}
Render_Price();
setInterval(Render_Price, 10000);