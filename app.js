var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//filter table

// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];


// class SearchBar extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
// 		this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
// 	}
// 	handleFilterTextChange(e) {
// 		this.props.onFilterTextChange(e.target.value);
// 	}
// 	handleInStockOnlyChange(e) {
// 		this.props.onInStockOnlyChange(e.target.checked);
// 	}
// 	render() {
// 		var filterText = this.props.filterText;
// 		var inStockOnly = this.props.inStockOnly;
// 		return (
// 			<form>
// 				<input 
// 					type='text' 
// 					placeholder='Search...' 
// 					value={filterText}
// 					onChange={this.handleFilterTextChange}/>
// 				<input 
// 					type='checkbox' 
// 					id='CB_inStockOnly' 
// 					checked={inStockOnly}
// 					onChange={this.handleInStockOnlyChange}/>
// 				<label htmlFor='CB_inStockOnly'>Only show products in stock</label>
// 			</form>
// 		); 
// 	}
// }

// class ProductRow extends React.Component {
// 	render() {
// 		var product = this.props.product;
// 		var name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
// 		return (
// 			<tr>
// 				<td>{name}</td>
// 				<td>{product.price}</td>
// 			</tr>
// 		);
// 	}
// }

// class ProductCategoryRow extends React.Component {
// 	render() {
// 		return (
// 			<th colSpan='2'>{this.props.category}</th>
// 		);
// 	}
// }

// class ProductTable extends React.Component {
// 	render() {
// 		var rows = [];
// 		var lastCategory = null;
// 		var filterText = this.props.filterText;
// 		var inStockOnly = this.props.inStockOnly;
// 		this.props.products.forEach(product => {
// 			if (product.name.indexOf(filterText) === -1) 
// 				return;
// 			if (inStockOnly && !product.stocked)
// 				return;
// 			if (product.category !== lastCategory) 
// 				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
// 			rows.push(<ProductRow product={product} key={product.name} />);
// 			lastCategory = product.category;
// 		});
// 		return (
// 			<table>
// 				<thead>
// 					<th>Name</th>
// 					<th>Price</th>
// 				</thead>
// 				<tbody>
// 					{rows}
// 				</tbody>
// 			</table>
// 		);
// 	}
// }

// class FilterTable extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			filterText: '',
// 			inStockOnly: false
// 		};
// 		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
// 		this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
// 	}
// 	handleFilterTextChange(filterText) {
// 		this.setState({
// 			filterText: filterText
// 		});
// 	}
// 	handleInStockOnlyChange(inStockOnly) {
// 		this.setState({
// 			inStockOnly: inStockOnly
// 		});
// 	}
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<SearchBar 
// 					filterText={this.state.filterText} 
// 					inStockOnly={this.state.inStockOnly}
// 					onFilterTextChange={this.handleFilterTextChange} 
// 					onInStockOnlyChange={this.handleInStockOnlyChange}/>
// 				<ProductTable 
// 					products={this.props.products} 
// 					filterText={this.state.filterText} 
// 					inStockOnly={this.state.inStockOnly} />
// 			</React.Fragment>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<FilterTable products={PRODUCTS}/>,
// 	document.getElementById('app')
// );


//Calculator
var Screen = function (_React$Component) {
	_inherits(Screen, _React$Component);

	function Screen() {
		_classCallCheck(this, Screen);

		return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).apply(this, arguments));
	}

	_createClass(Screen, [{
		key: 'render',
		value: function render() {
			var input = this.props.inputVal;
			var output = this.props.outputVal;
			var backgroundColor = this.props.light ? 'screen--light' : 'screen--dark';
			var color = this.props.light ? '' : ' screen__output--dark';
			return React.createElement(
				'div',
				{ className: 'screen ' + backgroundColor },
				React.createElement(
					'p',
					{ className: 'screen__input' },
					input
				),
				React.createElement(
					'p',
					{ className: 'screen__output' + color },
					output
				)
			);
		}
	}]);

	return Screen;
}(React.Component);

var NumKeys = function (_React$Component2) {
	_inherits(NumKeys, _React$Component2);

	function NumKeys(props) {
		_classCallCheck(this, NumKeys);

		var _this2 = _possibleConstructorReturn(this, (NumKeys.__proto__ || Object.getPrototypeOf(NumKeys)).call(this, props));

		_this2.handleNumberClick = _this2.handleNumberClick.bind(_this2);
		return _this2;
	}

	_createClass(NumKeys, [{
		key: 'handleNumberClick',
		value: function handleNumberClick(e) {
			this.props.onNumkeysClick(e);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
			var numbersBtn = [];
			var status = this.props.light ? 'numkeys__cell--light' : 'numkeys__cell--dark';
			numbers.forEach(function (val) {
				numbersBtn.push(React.createElement(
					'span',
					{
						className: 'numkeys__cell ' + status,
						key: val,
						onClick: _this3.handleNumberClick },
					val
				));
			});
			return React.createElement(
				React.Fragment,
				null,
				React.createElement(
					'div',
					{ className: 'numkeys' },
					numbersBtn
				)
			);
		}
	}]);

	return NumKeys;
}(React.Component);

var FunctionKeys = function (_React$Component3) {
	_inherits(FunctionKeys, _React$Component3);

	function FunctionKeys(props) {
		_classCallCheck(this, FunctionKeys);

		var _this4 = _possibleConstructorReturn(this, (FunctionKeys.__proto__ || Object.getPrototypeOf(FunctionKeys)).call(this, props));

		_this4.onDotClick = _this4.onDotClick.bind(_this4);
		_this4.onDelClick = _this4.onDelClick.bind(_this4);
		_this4.onAcClick = _this4.onAcClick.bind(_this4);
		_this4.onPlusMinusClick = _this4.onPlusMinusClick.bind(_this4);
		return _this4;
	}

	_createClass(FunctionKeys, [{
		key: 'onDotClick',
		value: function onDotClick() {
			this.props.onDotClick();
		}
	}, {
		key: 'onDelClick',
		value: function onDelClick() {
			this.props.onDelClick();
		}
	}, {
		key: 'onAcClick',
		value: function onAcClick() {
			this.props.onAcClick();
		}
	}, {
		key: 'onPlusMinusClick',
		value: function onPlusMinusClick() {
			this.props.onPlusMinusClick();
		}
	}, {
		key: 'render',
		value: function render() {
			var pure = this.props.light ? 'functionkeys--light' : 'functionkeys--dark';
			var join = this.props.light ? 'numkeys__cell--light' : 'numkeys__cell--dark';
			return React.createElement(
				'div',
				{ className: 'top-space' },
				React.createElement(
					'span',
					{
						className: 'numkeys__cell functionkeys ' + pure,
						onClick: this.onAcClick },
					'AC'
				),
				React.createElement(
					'span',
					{
						className: 'numkeys__cell functionkeys ' + pure,
						onClick: this.onPlusMinusClick },
					'+/-'
				),
				React.createElement(
					'span',
					{
						className: 'numkeys__cell functionkeys join-numkeys join-numkeys--left ' + join,
						onClick: this.onDotClick },
					'.'
				),
				React.createElement(
					'span',
					{
						className: 'numkeys__cell functionkeys join-numkeys join-numkeys--right ' + join,
						onClick: this.onDelClick },
					'DEL'
				)
			);
		}
	}]);

	return FunctionKeys;
}(React.Component);

var OperatorKeys = function (_React$Component4) {
	_inherits(OperatorKeys, _React$Component4);

	function OperatorKeys(props) {
		_classCallCheck(this, OperatorKeys);

		var _this5 = _possibleConstructorReturn(this, (OperatorKeys.__proto__ || Object.getPrototypeOf(OperatorKeys)).call(this, props));

		_this5.onEqualClick = _this5.onEqualClick.bind(_this5);
		_this5.onOtherClick = _this5.onOtherClick.bind(_this5);
		_this5.onPercentClick = _this5.onPercentClick.bind(_this5);
		return _this5;
	}

	_createClass(OperatorKeys, [{
		key: 'onEqualClick',
		value: function onEqualClick() {
			this.props.onEqualClick();
		}
	}, {
		key: 'onOtherClick',
		value: function onOtherClick(e) {
			this.props.onOperatorkeysClick(e);
		}
	}, {
		key: 'onPercentClick',
		value: function onPercentClick() {
			this.props.onPercentClick();
		}
	}, {
		key: 'render',
		value: function render() {
			var status = this.props.light ? 'functionkeys--light' : 'functionkeys--dark';
			return React.createElement(
				'div',
				{ className: 'operatorKeys' },
				React.createElement(
					'span',
					{
						className: 'numkeys__cell functionkeys join-functionkeys ' + status,
						onClick: this.onPercentClick },
					'%'
				),
				React.createElement(
					'span',
					{
						className: 'numkeys__cell functionkeys ' + status,
						onClick: this.onOtherClick },
					'\xF7'
				),
				React.createElement(
					'span',
					{
						className: 'numkeys__cell functionkeys ' + status,
						onClick: this.onOtherClick },
					'\xD7'
				),
				React.createElement(
					'span',
					{
						className: 'numkeys__cell functionkeys ' + status,
						onClick: this.onOtherClick },
					'-'
				),
				React.createElement(
					'span',
					{
						className: 'numkeys__cell functionkeys ' + status,
						onClick: this.onOtherClick },
					'+'
				),
				React.createElement(
					'span',
					{ className: 'numkeys__cell functionkeys equalkeys', onClick: this.onEqualClick },
					'='
				)
			);
		}
	}]);

	return OperatorKeys;
}(React.Component);

var DarkLightButton = function (_React$Component5) {
	_inherits(DarkLightButton, _React$Component5);

	function DarkLightButton(props) {
		_classCallCheck(this, DarkLightButton);

		var _this6 = _possibleConstructorReturn(this, (DarkLightButton.__proto__ || Object.getPrototypeOf(DarkLightButton)).call(this, props));

		_this6.handleBtnClick = _this6.handleBtnClick.bind(_this6);
		return _this6;
	}

	_createClass(DarkLightButton, [{
		key: 'handleBtnClick',
		value: function handleBtnClick() {
			this.props.onLightBtnClick();
		}
	}, {
		key: 'render',
		value: function render() {
			var icon = this.props.light ? React.createElement('i', { className: 'fas fa-moon' }) : React.createElement('i', { className: 'fas fa-sun' });
			return React.createElement(
				'div',
				{ className: 'lightBtnBlock' },
				React.createElement(
					'div',
					{
						className: 'lightBtnBlock__btn',
						onClick: this.handleBtnClick },
					icon
				)
			);
		}
	}]);

	return DarkLightButton;
}(React.Component);

var Calculator = function (_React$Component6) {
	_inherits(Calculator, _React$Component6);

	function Calculator(props) {
		_classCallCheck(this, Calculator);

		var _this7 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

		_this7.state = {
			light: true,
			input: '',
			output: ''
		};
		_this7.onNumkeysClick = _this7.onNumkeysClick.bind(_this7);
		_this7.onOperatorkeysClick = _this7.onOperatorkeysClick.bind(_this7);
		_this7.onLightBtnClick = _this7.onLightBtnClick.bind(_this7);
		_this7.onEqualClick = _this7.onEqualClick.bind(_this7);
		_this7.calcFirstPriority = _this7.calcFirstPriority.bind(_this7);
		_this7.onDotClick = _this7.onDotClick.bind(_this7);
		_this7.onDelClick = _this7.onDelClick.bind(_this7);
		_this7.onAcClick = _this7.onAcClick.bind(_this7);
		_this7.onPlusMinusClick = _this7.onPlusMinusClick.bind(_this7);
		_this7.onPercentClick = _this7.onPercentClick.bind(_this7);
		return _this7;
	}

	_createClass(Calculator, [{
		key: 'onNumkeysClick',
		value: function onNumkeysClick(e) {
			var noFormatInput = this.state.input.match(' 0') == undefined ? this.state.input + e.target.textContent : this.state.input.slice(0, this.state.input.length) + e.target.textContent; //relate format noSequence0

			// console.log(this.state.input.slice(0, this.state.input.length));

			var noCommas = noFormatInput.replace(/\,/g, '');
			var noSequence0Level1 = noCommas.replace(/^0+$/g, '0'); //prevent sequence of 0 at beginning
			var noSequence0 = noSequence0Level1.replace(/(\s0+$)/g, ' 0');
			var level1CommasFormatted = noSequence0.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); //but still commas after dot
			// let level2CommasFormatted = level1CommasFormatted.replace(/(?<=\.)((\d{3})\,)+/g,'');//not finished yet
			var input = level1CommasFormatted;
			this.setState({
				input: input
			});
		}
	}, {
		key: 'onOperatorkeysClick',
		value: function onOperatorkeysClick(e) {
			var input = this.state.input;
			var operatorsSymbol = /[+\-×÷]/;
			if (e.target.textContent.match(/[×÷]/) && (input.length === 0 || input == ' + ' || input == ' - ')) return;
			if (input.length >= 2 && input[input.length - 2].match(operatorsSymbol)) {
				var temp = input.split('');
				temp.pop();
				temp.pop();
				temp.push(e.target.textContent);
				temp.push(' ');
				input = temp.join('');
			} else {
				input = input + ' ' + e.target.textContent + ' ';
			}
			this.setState({
				input: input
			});
		}
	}, {
		key: 'onLightBtnClick',
		value: function onLightBtnClick() {
			this.setState(function (state) {
				return {
					light: !state.light
				};
			});
		}
	}, {
		key: 'onDotClick',
		value: function onDotClick() {
			var temp = this.state.input.split(' ');
			if (temp[temp.length - 1].toString().match(/\./) != undefined) return; //the current type in number already float
			if (this.state.input[this.state.input.length - 1] === ' ') return;
			if (this.state.input[this.state.input.length - 1] === '.') return;
			this.setState({
				input: this.state.input + '.'
			});
		}
	}, {
		key: 'onDelClick',
		value: function onDelClick() {
			var len = this.state.input.length;
			var input = '';
			switch (this.state.input[len - 1]) {
				case ' ':
					input = this.state.input.slice(0, len - 3);
					break;
				default:
					input = this.state.input.slice(0, len - 1);
					break;
			}
			this.setState({
				input: input
			});
		}
	}, {
		key: 'onAcClick',
		value: function onAcClick() {
			this.setState({
				input: '',
				output: ''
			});
		}
	}, {
		key: 'onPlusMinusClick',
		value: function onPlusMinusClick() {
			var temp = this.state.output;
			if (temp === '') return;
			temp = temp[0] === '-' ? temp.slice(1) : '- ' + temp;
			this.setState({
				input: temp,
				output: temp
			});
		}
	}, {
		key: 'onPercentClick',
		value: function onPercentClick() {
			var output = parseFloat(this.state.output.replace(/\,/g, '')) / 100;
			this.setState({
				output: output.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
			});
		}
	}, {
		key: 'onEqualClick',
		value: function onEqualClick() {
			var input = this.state.input;

			var trickyInput = ''; //to match regex easier
			if (input[0] != ' ') {
				//mean not have +/- at begin
				trickyInput = ' + ' + input + ' + ';
			} else {
				trickyInput = input + ' + ';
			}

			var firstPriorityRegex = /[+\-]\s(\d+\,?\.?\d*)(\s[×÷]\s(\d+\,?\.?\d*))+/g;
			var firstPriorities = trickyInput.match(firstPriorityRegex);
			var firstPriorityResults = this.calcFirstPriority(firstPriorities);

			var remainNums = this.calcFirstPriority(trickyInput.match(/[+\-]\s(\d+\,?\.?\d*)+(?=\s[+\-])/g));
			console.log(remainNums);
			var total = 0;
			for (var i = 0; i < remainNums.length; i++) {
				total += remainNums[i];
			}
			for (var _i = 0; _i < firstPriorityResults.length; _i++) {
				total += firstPriorityResults[_i];
			}
			//formating total
			var finalResult = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
			if (finalResult[0] === '-') {
				//for consistance
				finalResult = finalResult[0] + ' ' + finalResult.slice(1);
			}
			this.setState({
				input: finalResult,
				output: finalResult
			});
		}
	}, {
		key: 'calcFirstPriority',
		value: function calcFirstPriority(arr) {
			if (arr == null) return [];
			return arr.map(function (val) {
				var tVal = val.replace(/\,/g, '');
				var subArr = tVal.split(/\s/);
				var len = subArr.length;
				var total = 0;
				for (var i = 1; i < len; i += 2) {
					switch (subArr[i - 1]) {
						case '+':
							total += parseFloat(subArr[i]);break;
						case '-':
							total -= parseFloat(subArr[i]);break;
						case '×':
							total *= parseFloat(subArr[i]);break;
						case '÷':
							total /= parseFloat(subArr[i]);break;
						default:
							break;
					}
				}
				return total;
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'calculator' },
				React.createElement(Screen, {
					light: this.state.light,
					inputVal: this.state.input,
					outputVal: this.state.output }),
				React.createElement(FunctionKeys, {
					light: this.state.light,
					onDotClick: this.onDotClick,
					onDelClick: this.onDelClick,
					onAcClick: this.onAcClick,
					onPlusMinusClick: this.onPlusMinusClick }),
				React.createElement(NumKeys, {
					light: this.state.light,
					onNumkeysClick: this.onNumkeysClick }),
				React.createElement(OperatorKeys, {
					light: this.state.light,
					onOperatorkeysClick: this.onOperatorkeysClick,
					onEqualClick: this.onEqualClick,
					onPercentClick: this.onPercentClick }),
				React.createElement(DarkLightButton, {
					light: this.state.light,
					onLightBtnClick: this.onLightBtnClick })
			);
		}
	}]);

	return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('app'));