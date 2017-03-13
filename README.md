## React Not Wheel Outside

> When you scroll the child Element and will not affect the parent Element which also has the scrollbar


### Usage

```html
import WheelNotOutSide from 'react-not-wheel-outside'

class Foo extends React.Component {
	render() {
		return (
			<div>
				<h2>The scrollable parent of div A</h2>
				<WheelNotOutSide>
					<div>the scrollable div named A</div>
				</WheelNotOutSide>				
			</div>
		)
	}
}
```

### Example 

[jsfiddle Example](https://jsfiddle.net/monkindey/9kobyd2w/)

### Thanks

[jquery Example](http://jsbin.com/fuvoxoqabo/edit?html,js,output)