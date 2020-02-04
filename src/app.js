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
class Screen extends React.Component {
	render() {
		const input = this.props.inputVal;
		const output = this.props.outputVal;
		let backgroundColor = this.props.light ?
			'screen--light':'screen--dark';
		let color = this.props.light ?
			'':' screen__output--dark';
		return (
			<div className={'screen ' + backgroundColor}>
				<p className='screen__input'>{input}</p>
				<p className={'screen__output'+color}>{output}</p>
			</div>
		);
	}
}

class NumKeys extends React.Component {
	constructor(props) {
		super(props);
		this.handleNumberClick = this.handleNumberClick.bind(this);
	}
	handleNumberClick(e) {
		this.props.onNumkeysClick(e);
	}
	render() {
		const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
		let numbersBtn = [];
		let status = this.props.light ?
			'numkeys__cell--light':'numkeys__cell--dark';
		numbers.forEach(val => {
			numbersBtn.push(
				<span 
					className={'numkeys__cell ' + status} 
					key={val} 
					onClick={this.handleNumberClick}>
					{val}
				</span>
			);
		});
		return (
			<React.Fragment>
				<div className='numkeys'>
					{numbersBtn}
				</div>
			</React.Fragment>
		);
	}
}

class FunctionKeys extends React.Component {
	constructor(props) {
		super(props);
		this.onDotClick = this.onDotClick.bind(this);
		this.onDelClick = this.onDelClick.bind(this);
		this.onAcClick = this.onAcClick.bind(this);
		this.onPlusMinusClick = this.onPlusMinusClick.bind(this);
	}
	onDotClick() {
		this.props.onDotClick();
	}
	onDelClick() {
		this.props.onDelClick();
	}
	onAcClick() {
		this.props.onAcClick();
	}
	onPlusMinusClick() {
		this.props.onPlusMinusClick();
	}
	render() {
		let pure = this.props.light ?
			'functionkeys--light':'functionkeys--dark';
		let join = this.props.light ?
			'numkeys__cell--light':'numkeys__cell--dark';
		return (
			<div className='top-space'>
	            <span 
	            	className={'numkeys__cell functionkeys ' + pure}
	            	onClick={this.onAcClick}>AC</span>
	            <span 
	            	className={'numkeys__cell functionkeys ' + pure}
	            	onClick={this.onPlusMinusClick}>+/-</span>
	            <span 
	            	className={'numkeys__cell functionkeys join-numkeys join-numkeys--left ' + join}
	            	onClick={this.onDotClick}>.</span>
	            <span 
	            	className={'numkeys__cell functionkeys join-numkeys join-numkeys--right ' + join}
	            	onClick={this.onDelClick}>DEL</span>
        	</div>
		);
	}
}

class OperatorKeys extends React.Component {
	constructor(props) {
		super(props);
		this.onEqualClick = this.onEqualClick.bind(this);
		this.onOtherClick = this.onOtherClick.bind(this);
		this.onPercentClick = this.onPercentClick.bind(this);
	}
	onEqualClick() {
		this.props.onEqualClick();
	}
	onOtherClick(e) {
		this.props.onOperatorkeysClick(e);
	}
	onPercentClick() {
		this.props.onPercentClick();
	}
	render() {
		let status = this.props.light ?
			'functionkeys--light':'functionkeys--dark';
		return (
			<div className='operatorKeys'>
	            <span 
	            	className={'numkeys__cell functionkeys join-functionkeys ' + status}
	            	onClick={this.onPercentClick}>%</span>
	            <span 
	            	className={'numkeys__cell functionkeys ' + status}
	            	onClick={this.onOtherClick}>÷</span>
	            <span 
	            	className={'numkeys__cell functionkeys ' + status}
	            	onClick={this.onOtherClick}>×</span>
	            <span 
	            	className={'numkeys__cell functionkeys ' + status}
	            	onClick={this.onOtherClick}>-</span>
	            <span 
	            	className={'numkeys__cell functionkeys ' + status}
	            	onClick={this.onOtherClick}>+</span>
	            <span className='numkeys__cell functionkeys equalkeys' onClick={this.onEqualClick}>=</span>
	        </div>
		);
	}
}

class DarkLightButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleBtnClick = this.handleBtnClick.bind(this);
	}
	handleBtnClick() {
		this.props.onLightBtnClick();
	}
	render() {
		let icon = this.props.light ? 
			<i className="fas fa-moon"></i>:<i className="fas fa-sun"></i>;
		return (
			<div className='lightBtnBlock'>
	            <div 
	            	className='lightBtnBlock__btn'
	            	onClick={this.handleBtnClick}>{icon}</div>
	        </div>
		);
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			light: true,
			input: '',
			output: ''
		};
		this.onNumkeysClick = this.onNumkeysClick.bind(this);
		this.onOperatorkeysClick = this.onOperatorkeysClick.bind(this);
		this.onLightBtnClick = this.onLightBtnClick.bind(this);
		this.onEqualClick = this.onEqualClick.bind(this);
		this.calcFirstPriority = this.calcFirstPriority.bind(this);
		this.onDotClick = this.onDotClick.bind(this);
		this.onDelClick = this.onDelClick.bind(this);
		this.onAcClick = this.onAcClick.bind(this);
		this.onPlusMinusClick = this.onPlusMinusClick.bind(this);
		this.onPercentClick = this.onPercentClick.bind(this);
	}
	onNumkeysClick(e) {
		let noFormatInput = this.state.input.match(' 0') == undefined ?
			this.state.input + e.target.textContent :
			this.state.input.slice(0, this.state.input.length - 1) + e.target.textContent;//relate format noSequence0

		let noCommas = noFormatInput.replace(/\,/g,'');
		let noSequence0Level1 = noCommas.replace(/^0+$/g, '0'); //prevent sequence of 0 at beginning
		let noSequence0 = noSequence0Level1.replace(/(\s0+$)/g, ' 0');
		let level1CommasFormatted = noSequence0.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");//but still commas after dot
		// let level2CommasFormatted = level1CommasFormatted.replace(/(?<=\.)((\d{3})\,)+/g,'');//not finished yet
		let input = level1CommasFormatted;
		this.setState({
			input: input
		});
	}
	onOperatorkeysClick(e) {
		let input = this.state.input;
		const operatorsSymbol = /[+\-×÷]/;
		if (  e.target.textContent.match(/[×÷]/)  && (input.length === 0  || input == ' + ' || input == ' - ')) return;
		if ((input.length >=2) && (input[input.length-2].match(operatorsSymbol))) {
			let temp = input.split('');
			temp.pop();
			temp.pop()
			temp.push(e.target.textContent);
			temp.push(' ');
			input = temp.join('');
		}
		else {
			input = input + ' ' + e.target.textContent + ' ';
		}
		this.setState({
			input: input
		});
	}
	onLightBtnClick() {
		this.setState(state => ({
			light: !state.light
		}));
	}
	onDotClick() {
		let temp = this.state.input.split(' ');
		if (temp[temp.length - 1].toString().match(/\./) != undefined) return;//the current type in number already float
		if (this.state.input[this.state.input.length - 1] === ' ') return;
		if (this.state.input[this.state.input.length - 1] === '.') return;
		this.setState({
			input: this.state.input + '.'
		});
	}
	onDelClick() {
		let len = this.state.input.length;
		let input = '';
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
	onAcClick() {
		this.setState({
			input: '',
			output: ''
		});
	}
	onPlusMinusClick() {
		let temp = this.state.output;
		if (temp === '') return;
		temp = temp[0] === '-' ? temp.slice(1) : '- ' + temp;
		this.setState({
			input: temp,
			output: temp
		});
	}
	onPercentClick() {
		let output = parseFloat(this.state.output.replace(/\,/g,'')) / 100;
		this.setState({
			output: output.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
		});
	}
	onEqualClick() {
		let input = this.state.input;

		let trickyInput = ''; //to match regex easier
		if (input[0] != ' ') {
			//mean not have +/- at begin
			trickyInput = ' + ' + input + ' + ';
		} else {
			trickyInput = input + ' + ';
		}
		
		let firstPriorityRegex = /[+\-]\s(\d+\,?\.?\d*)(\s[×÷]\s(\d+\,?\.?\d*))+/g;
		let firstPriorities = trickyInput.match(firstPriorityRegex);
		let firstPriorityResults = this.calcFirstPriority(firstPriorities);

		
		

		let remainNums = this.calcFirstPriority(trickyInput.match(/[+\-]\s(\d+\,?\.?\d*)+(?=\s[+\-])/g));
		console.log(remainNums);
		let total = 0;
		for (let i = 0; i < remainNums.length; i++) {
			total += remainNums[i];
		}
		for (let i = 0; i < firstPriorityResults.length; i++) {
			total += firstPriorityResults[i];
		}
		//formating total
		let finalResult = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
		if (finalResult[0] === '-') {
			//for consistance
			finalResult = finalResult[0] + ' ' + finalResult.slice(1);
		}
		this.setState({
			input: finalResult,
			output: finalResult
		});
	}
	calcFirstPriority(arr) {
		if (arr == null) return [];
		return arr.map(val => {
			let tVal = val.replace(/\,/g, '');
			let subArr = tVal.split(/\s/);
			let len = subArr.length;
			let total = 0;
			for (let i = 1; i < len; i+=2) {
				switch(subArr[i-1]) {
					case '+': total += parseFloat(subArr[i]); break;
					case '-': total -= parseFloat(subArr[i]); break;
					case '×': total *= parseFloat(subArr[i]); break;
					case '÷': total /= parseFloat(subArr[i]); break;
					default: break;
				}
			}
			return total;
		});
	}
	render() {
		return (
			<div className='calculator'>
				<Screen 
					light={this.state.light} 
					inputVal={this.state.input}
					outputVal={this.state.output} />
				<FunctionKeys 
					light={this.state.light}
					onDotClick={this.onDotClick}
					onDelClick={this.onDelClick}
					onAcClick={this.onAcClick}
					onPlusMinusClick={this.onPlusMinusClick} />
				<NumKeys 
					light={this.state.light} 
					onNumkeysClick={this.onNumkeysClick} />
				<OperatorKeys 
					light={this.state.light} 
					onOperatorkeysClick={this.onOperatorkeysClick}
					onEqualClick={this.onEqualClick}
					onPercentClick={this.onPercentClick} />
				<DarkLightButton 
					light={this.state.light}
					onLightBtnClick={this.onLightBtnClick} />
			</div>
		);
	}
}

ReactDOM.render(
	<Calculator />,
	document.getElementById('app')
);