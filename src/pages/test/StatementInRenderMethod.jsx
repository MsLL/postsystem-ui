// console.log('execute statement in react class component's render() method')
// Get: class组件，re(render)会重新执行render()方法，因此在render方法里面声明的其它方法，不用太担心闭包。 并不是持有着第一次render方法的返回值。
import React from 'react';
import { Button } from 'antd';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: -1,
    };
  }

  render() {
    console.log("execute statement in react class component's render() method");

    return (
      <Button onClick={() => this.setState({ num: Math.random() })}>OK</Button>
    );
  }
}
