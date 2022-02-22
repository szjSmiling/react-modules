// import React, { useState } from 'react';
import React from 'react';
import { ThemeContext } from './Context'

// function Home () {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   )
// }


class Home extends React.Component {
  constructor (props) {
    super();
    console.log(props)
  }
  render () {
    let props = this.props;
    let theme = this.context;
    return (
      <div>
        <button {...props}
          style={{color: theme.background}}
        >click handel</button>
        <dl>
          {props.items.map(item => (
            // 没有`key`，React 会发出一个关键警告
            <React.Fragment key={item.id}>
              <dt>{item.title}</dt>
              <dd>{item.des}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    )
  }
}
Home.contextType = ThemeContext;

export default Home;